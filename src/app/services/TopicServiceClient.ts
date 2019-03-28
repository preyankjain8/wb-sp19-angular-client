export class TopicServiceClient {
  findTopicsForLesson = (lessonId) => {
    return fetch('https://peaceful-reef-79181.herokuapp.com/api/student/lesson/' + lessonId + '/topic', {
      method: 'GET',
      credentials: 'include',
    }).then(response => response.json()).catch(error  => {
      console.log(error.toString())
    });
  }

  findTopicById = topicId => {
    return fetch('https://peaceful-reef-79181.herokuapp.com/api/student/topic/' + topicId, {
      method: 'GET',
      credentials: 'include'
    })
      .then(response => response.json());
  }

  findAllTopics = () => {
    return fetch('https://peaceful-reef-79181.herokuapp.com/api/student/topics', {
      method: 'GET',
      credentials: 'include'
    })
      .then(response => response.json());
  }

}
