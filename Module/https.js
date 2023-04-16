// 함수(?), 모듈(?)을 받을 때는 require이라고 했다.
const request = require('./request') // 인자로 .js 없는것이 특이. 스펠링이 서로 헷갈릴 것이 아니라, requset는 모듈js 이름 ㅋㅋ
const response = require('./response')
function makeRequest(url, data) {
    // 요청을 보내고 받기.
    request.send(url, data); // url에 data를 암호화해서 보낸다. (클라이언트가)
    return response.read();
}

const responseData = makeRequest('https://naver.com', 'any data');
console.log(responseData);
