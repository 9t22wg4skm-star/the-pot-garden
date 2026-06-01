export function getAllImages(){
  const modules = import.meta.glob('/src/assets/**/*.{jpg,jpeg,png,webp,svg}', {eager:true, as:'url'})
  return Object.entries(modules)
    .map(([path,url]) => {
      const parts = path.split('/')
      const fileName = parts[parts.length-1] || ''
      const folder = parts.length >= 3 ? parts[parts.length-2] : 'assets'
      return {path, url, folder, fileName}
    })
    .filter(image => !/\/(react|vite)\.svg$/i.test(image.path))
}

export function categorizeImages(images){
  const groups = {
    hero: [],
    interior: [],
    exterior: [],
    dining: [],
    menu: [],
    rest: []
  }

  images.forEach(image => {
    const path = image.path.toLowerCase()
    if (/hero/.test(path) || /hero\.png/.test(image.fileName.toLowerCase())) groups.hero.push(image)
    else if (/interior/.test(path)) groups.interior.push(image)
    else if (/exterior/.test(path)) groups.exterior.push(image)
    else if (/dining/.test(path)) groups.dining.push(image)
    else if (/menu/.test(path)) groups.menu.push(image)
    else groups.rest.push(image)
  })

  return groups
}

export function pickHeroImage(images){
  const hero = images.find(i => /hero/.test(i.path) || /hero\.png/.test(i.fileName.toLowerCase()))
  if(hero) return hero.url
  const fallback = images.find(i => /dining|interior|exterior/.test(i.path))
  return fallback ? fallback.url : (images[0] ? images[0].url : '')
}
