export class LessonServiceClient {

  findLessonsForModule = (moduleId) => {
    if (moduleId != null) {
      return fetch('https://peaceful-reef-79181.herokuapp.com/api/student/module/' + moduleId + '/lesson', {
        method: 'GET',
        credentials: 'include',
      }).then(response => response.json()).catch(error=>{
        console.log(error.toString())
      });
    }
  }

  findLessonById = lessonId => {
    return fetch('https://peaceful-reef-79181.herokuapp.com/api/student/lesson/' + lessonId, {
      method: 'GET',
      credentials: 'include'
    })
      .then(response => response.json());
  }

  findAllLessons = () => {
    return fetch('https://peaceful-reef-79181.herokuapp.com/api/student/lessons', {
      method: 'GET',
      credentials: 'include'
    })
      .then(response => response.json());
  }
}
