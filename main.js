const linksSocialMedia = {
  github: 'marcelocarvalhoqueiroz',
  youtube: 'channel/UCLti1wEtefvt25_XlAnNtUQ',
  facebook: 'profile.php?id=100007944780203',
  instagram: 'marcelocqin',
  twitter: ''
}

function changeSocialMediaLinks() {
  for (let li of socialMedia.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitProfileInfo() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  // o promisse é a partir do .then
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitProfileInfo()
