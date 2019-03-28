export class ModuleServiceClient {

  findModulesForCourse = (courseId) => {
    return fetch('https://peaceful-reef-79181.herokuapp.com/api/student/course/' + courseId + '/modules', {
      method: 'GET'
    }).then(response => response.json())
      .catch(error => {
        console.log(error.toString());
      });
  }

  findModuleById = moduleId => {
    return fetch('https://peaceful-reef-79181.herokuapp.com/api/student/modules/' + moduleId, {
      method: 'GET',
      credentials: 'include'
    })
      .then(response => response.json());
  }

  findAllModules = () => {
    return fetch('https://peaceful-reef-79181.herokuapp.com/api/student/modules', {
      method: 'GET',
      credentials: 'include'
    })
      .then(response => response.json());
  }

}
