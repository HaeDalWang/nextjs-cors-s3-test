# S3 + nextjs 리액트,(axios) PresigendURL



버킷 정책 없음

권한
- S3 getobject 권한있는 IAM user 생성 하여 부여

버킷 CORS 설정
``` json
[
    {
        "AllowedHeaders": [
            "*"
        ],
        "AllowedMethods": [
            "GET"
        ],
        "AllowedOrigins": [
            "*"
        ],
        "ExposeHeaders": []
    }
]
```

주의: 리전빼먹지 말자

npm run dev