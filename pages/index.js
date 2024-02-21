const Index = () => (
    <div>
        <p>S3 cors test</p>
        <img id="svgImage" src="" alt="test.svg"></img>
    </div>
)
export default Index

const axios = require('axios');
const AWS = require('aws-sdk');

// AWS SDK 구성
AWS.config.update({
    region: 'ap-northeast-2', // 여러분이 사용하는 S3 버킷의 리전
    accessKeyId: 'AKIA4SB7Y6R4JGHGIGX3',
    secretAccessKey: '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'
});

const s3 = new AWS.S3();
// S3 객체에 대한 Pre-signed URL 생성
const bucketName = 'bsd-study';
const objectKey = 'test.svg';
const params = { Bucket: bucketName, Key: objectKey, Expires: 3600 }; // 1시간(3600초) 동안 유효한 URL 생성

// 생성된 Pre-signed URL을 사용하여 이미지 다운로드
s3.getSignedUrl('getObject', params, function (err, signedUrl) {
    if (err) {
        console.error('Error generating presigned URL:', err);
    } else {
        // 다운로드한 이미지를 화면에 표시
        axios.get(signedUrl, { responseType: 'blob' })
            .then(response => {
                const imageUrl = URL.createObjectURL(response.data);
                document.getElementById('svgImage').src = imageUrl;
            })
            .catch(error => {
                console.error('Error downloading SVG:', error);
            });
    }
});