$(document).ready(() => {
  let url = '/api/cv'
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let user = data.user[0]
      let education = data.educations
      let exp = data.experiences

      let NameDiv = `<h1 >${user.fullName}</h1>
            <h1>${user.adress}</h1>
            <h3>${user.major}</h3>`
      $('.name').html(NameDiv)

      let Contact = ` <p>${user.email}</p>
                <p>${user.phone}</p>`
      $('#contacttext').html(Contact)

      let about = `<h1>about me</h1>
              <p>${user.detail}
              </p>`
      $('.about-me').html(about)

      let interests = ``
      for (let value of user.interests) {
        interests += `<p>${value}</p>`
      }
      $('.int').html(interests)

      let languages = ``
      for (let lang of user.languages) {
        languages += `<p>${lang}</p>`
      }
      $('.lang').html(languages)

      let expDiv = `<div class="title">
            <h1>Experience</h1>
            <div class="exptitle">
            </div>
            </div>`
      for (let experiences of exp) {
        startday = new Date(experiences.start_date)
        endday = new Date(experiences.end_date)
        formattedStartDay = (`${startday.getMonth()}/${startday.getFullYear()}`)
        formattedEndDay = (`${endday.getMonth()}/${endday.getFullYear()}`)
        expDiv += `
          <h2>${experiences.major}</h2>
          <i>${experiences.company} (${formattedStartDay} - ${formattedEndDay}) </i>
          <p>${experiences.detail}</p>
        `
      }
      $(".experience").html(expDiv)

      let EduDiv = `
      <div class="title">
            <h1>Education</h1>
            <div class="edutitle">

            </div>
          </div>
      `
      for (let educate of education) {
        startday = new Date(educate.start_date)
        if (educate.end_date == null) {
          endday = ''
        } else {
          endday = new Date(educate.end_date)
        }
        formattedStartDay = (`${startday.getFullYear("en-US")}`)
        if (endday && !isNaN(Date.parse(endday))) {
          formattedEndDay = (` - ${endday.getFullYear("en-US")}`)
        }
        EduDiv += `
        <h2>${educate.major}</h2>
          <i>${educate.school} (${formattedStartDay}${formattedEndDay})</i>
        `
      }

      $('.education').html(EduDiv)


      let SkillDiv = ``
      for (let skills of user.skills) {
        SkillDiv += `<p>${skills}</p>`
      }
      $('.skl-list').html(SkillDiv)
    })
})

