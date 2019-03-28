export class CourseServiceClient {

  findAllCourses = () =>
    fetch
    ('https://peaceful-reef-79181.herokuapp.com/api/student/courses')
      .then(response => response.json())

  findCourseById = courseId =>
    fetch
    ('https://peaceful-reef-79181.herokuapp.com/api/student/courses/' + courseId)
      .then(response => response.json())

  findCourseAuthor = courseId =>
    fetch
    ('https://peaceful-reef-79181.herokuapp.com/api/student/courses/' + courseId + 'author')
      .then(response => response.json())
}
