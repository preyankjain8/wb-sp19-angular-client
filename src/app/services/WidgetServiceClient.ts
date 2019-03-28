export class WidgetServiceClient {
  findWidgetsForTopic = (topicId) =>
    fetch
    ('https://peaceful-reef-79181.herokuapp.com/api/student/topic/' + topicId + '/widget')
      .then(response => response.json())

  findWidgetById = widgetId =>
    fetch
    ('https://peaceful-reef-79181.herokuapp.com/api/student/widget/' + widgetId)
      .then(response => response.json())

  findAllWidgets = () =>
    fetch
    ('https://peaceful-reef-79181.herokuapp.com/api/student/widgets')
      .then(response => response.json())
}
