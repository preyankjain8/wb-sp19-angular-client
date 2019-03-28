export class TopicServiceClient {
  findTopicsForLesson = (lessonId) =>
    fetch
    ('https://peaceful-reef-79181.herokuapp.com/api/student/lesson/' + lessonId + '/topic')
      .then(response => response.json())

  findTopicById = topicId =>
    fetch
    ('https://peaceful-reef-79181.herokuapp.com/api/student/topic/' + topicId)
      .then(response => response.json())

  findAllTopics = () =>
    fetch
    ('https://peaceful-reef-79181.herokuapp.com/api/student/topics')
      .then(response => response.json())
}
