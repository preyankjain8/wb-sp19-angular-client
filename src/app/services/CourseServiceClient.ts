export class CourseServiceClient {

  findAllCourses = () => {
    return fetch('https://peaceful-reef-79181.herokuapp.com/api/student/courses', {
      method: 'GET'
    }).then(response => response.json())
      .catch(error => {
        console.log(error.toString());
      });
  }

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
