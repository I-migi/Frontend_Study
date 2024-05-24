const AWS = require('aws-sdk');
// AWS 설정
AWS.config.update({
  region: 'your_region', // 사용하고자 하는 AWS 리전
  accessKeyId: 'your_access_key',
  secretAccessKey: 'your_secret_key'
});
// DynamoDB 클라이언트 생성
const dynamoDB = new AWS.DynamoDB.DocumentClient();
// 설문조사 응답 데이터
const surveyResponse = {
  user_name: 'John Doe',
  answer_1: 'Option A',
  answer_2: 'Option B'
};
// 설문조사 응답 데이터를 테이블에 추가
const params = {
  TableName: 'survey_responses',
  Item: surveyResponse
};
dynamoDB.put(params, function(err, data) {
  if (err) {
    console.error('Error adding survey response:', err);
  } else {
    console.log('Survey response added successfully:', data);
  }
});