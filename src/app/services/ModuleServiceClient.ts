export class ModuleServiceClient {

  findModulesForCourse = (courseId) => {
    return fetch('http://localhost:8080/api/student/course/' + courseId + '/modules', {
      method: 'GET'
    }).then(response => response.json())
      .catch(error => {
        console.log(error.toString());
      });
  }

  findModuleById = moduleId => {
    return fetch('http://localhost:8080/api/student/modules/' + moduleId, {
      method: 'GET',
      credentials: 'include'
    })
      .then(response => response.json());
  }

  findAllModules = () => {
    return fetch('http://localhost:8080/api/student/modules', {
      method: 'GET',
      credentials: 'include'
    })
      .then(response => response.json());
  }

}
