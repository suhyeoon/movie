import React, { useEffect, useState } from 'react'
import { FaCode } from "react-icons/fa";
import './LandingPage.css';
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../../Config';
import axios from 'axios';
import name from 'module';
import MainImage from './Section/MainImage';


function LandingPage() {

    /* 영화 API 데이터 담기 */
    const [movies, setMovies] = useState([]);
    const [mainMovieImage, setMainMovieImage] = useState(null);


    /* 영화 API 가져오기 */
    useEffect(() => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        axios.get(endpoint).then((response) => {
            setMovies([response.results])
            console.log(response.data)
            if (response.data && response.data.length > 0) {
                setMainMovieImage(response.results[0])
            }
        }
        )
    }, []);

    return (
        <div className='visual'>
            {/* 메인비주얼 */}
            {mainMovieImage &&
                <MainImage image={`${IMAGE_BASE_URL}w1280${mainMovieImage.backdrop_path}`} />
            }
            <div className='card'>
                <h2>Movies by lastest</h2>
                <hr />
                {/* 영화 카드 레이아웃 */}
            </div>
            <div className='more'>
                <button> 목록 더보기 </button>
            </div>

        </div>
    )
}

export default LandingPage
