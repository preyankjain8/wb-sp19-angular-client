export class CourseServiceClient {

  findAllCourses = () =>
    fetch
    ('https://peaceful-reef-79181.herokuapp.com/api/student/courses')
      .then(response => response.json())

  findCourseById = courseId => {
    return fetch('https://peaceful-reef-79181.herokuapp.com/api/student/courses/' + courseId,{
      method: 'GET',
      credentials: 'include'
    })
      .then(response => response.json());
  }
  findCourseAuthor = courseId => {
    return fetch('https://peaceful-reef-79181.herokuapp.com/api/student/courses/' + courseId + 'author', {
      method: 'GET',
      credentials: 'include'
    })
      .then(response => response.json());
  }
}
