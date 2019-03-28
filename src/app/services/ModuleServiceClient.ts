export class ModuleServiceClient {

  findModulesForCourse = (courseId) =>
    fetch
    ('https://peaceful-reef-79181.herokuapp.com/api/student/course/' + courseId + '/modules')
      .then(response => response.json())

  findModuleById = moduleId =>
    fetch
    ('https://peaceful-reef-79181.herokuapp.com/api/student/modules/' + moduleId)
      .then(response => response.json())

  findAllModules = () =>
    fetch
    ('https://peaceful-reef-79181.herokuapp.com/api/student/modules')
      .then(response => response.json())
}
