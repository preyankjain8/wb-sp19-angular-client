export class TopicServiceClient {
  findTopicsForLesson = (lessonId) => {
    return fetch('http://localhost:8080/api/student/lesson/' + lessonId + '/topic', {
      method: 'GET',
      credentials: 'include',
    }).then(response => response.json()).catch(error  => {
      console.log(error.toString())
    });
  }

  findTopicById = topicId => {
    return fetch('http://localhost:8080/api/student/topic/' + topicId, {
      method: 'GET',
      credentials: 'include'
    })
      .then(response => response.json());
  }

  findAllTopics = () => {
    return fetch('http://localhost:8080/api/student/topics', {
      method: 'GET',
      credentials: 'include'
    })
      .then(response => response.json());
  }

}
