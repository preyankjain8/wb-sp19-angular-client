export class CourseServiceClient {

  findAllCourses = () => {
    return fetch('http://localhost:8080/api/student/courses', {
      method: 'GET'
    }).then(response => response.json())
      .catch(error => {
        console.log(error.toString());
      });
  }

  findCourseById = courseId => {
    return fetch('http://localhost:8080/api/student/courses/' + courseId,{
      method: 'GET',
      credentials: 'include'
    })
      .then(response => response.json());
  }
}
