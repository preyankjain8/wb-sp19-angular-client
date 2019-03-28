export class WidgetServiceClient {
  findWidgetsForTopic = (topicId) => {
    return fetch('https://peaceful-reef-79181.herokuapp.com/api/student/topic/' + topicId + '/widget', {
      method: 'GET',
      credentials: 'include',
    }).then(response => response.json()).catch(error => {
      console.log(error.toString());
    });
  }

  findWidgetById = widgetId => {
    return fetch('https://peaceful-reef-79181.herokuapp.com/api/student/widget/' + widgetId, {
      method: 'GET',
      credentials: 'include'
    })
      .then(response => response.json());
  }

  findAllWidgets = () => {
    return fetch('https://peaceful-reef-79181.herokuapp.com/api/student/widgets', {
      method: 'GET',
      credentials: 'include'
    })
      .then(response => response.json());
  }
}
