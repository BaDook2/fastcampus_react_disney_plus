import axios from 'axios'; // 설치한 axios 모듈을 가져옴

const instance = axios.create({
  baseURL:"https://api.themoviedb.org/3",
  params:{
    api_key:"7dfdfee1a73b8c181efd9651439aa559",
    language: "ko-KR"
  }
})

export default instance;