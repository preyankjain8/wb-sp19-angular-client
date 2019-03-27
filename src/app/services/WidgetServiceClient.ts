export class WidgetServiceClient {
  findWidgetsForTopic = (topicId) => {
    return fetch('http://localhost:8080/api/student/topic/' + topicId + '/widget', {
      method: 'GET',
      credentials: 'include',
    }).then(response => response.json()).catch(error => {
      console.log(error.toString());
    });
  }

  findWidgetById = widgetId => {
    return fetch('http://localhost:8080/api/student/widget/' + widgetId, {
      method: 'GET',
      credentials: 'include'
    })
      .then(response => response.json());
  }

  findAllWidgets = () => {
    return fetch('http://localhost:8080/api/student/widgets', {
      method: 'GET',
      credentials: 'include'
    })
      .then(response => response.json());
  }
}
