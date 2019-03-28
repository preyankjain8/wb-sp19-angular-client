export class LessonServiceClient {

  findLessonsForModule = (moduleId) =>
    fetch
    ('https://peaceful-reef-79181.herokuapp.com/api/student/module/' + moduleId + '/lesson')
      .then(response => response.json())

  findLessonById = lessonId =>
    fetch
    ('https://peaceful-reef-79181.herokuapp.com/api/student/lesson/' + lessonId)
      .then(response => response.json())

  findAllLessons = () =>
    fetch
    ('https://peaceful-reef-79181.herokuapp.com/api/student/lessons')
      .then(response => response.json())
}
