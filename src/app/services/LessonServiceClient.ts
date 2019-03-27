export class LessonServiceClient {

  findLessonsForModule = (moduleId) => {
    if (moduleId != null) {
      return fetch('http://localhost:8080/api/student/module/' + moduleId + '/lesson', {
        method: 'GET',
        credentials: 'include',
      }).then(response => response.json()).catch(error=>{
        console.log(error.toString())
      });
    }
  }

  findLessonById = lessonId => {
    return fetch('http://localhost:8080/api/student/lesson/' + lessonId, {
      method: 'GET',
      credentials: 'include'
    })
      .then(response => response.json());
  }

  findAllLessons = () => {
    return fetch('http://localhost:8080/api/student/lessons', {
      method: 'GET',
      credentials: 'include'
    })
      .then(response => response.json());
  }
}
