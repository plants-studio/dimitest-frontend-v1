import React, { useEffect } from 'react';

import resultData from '../result.json';
import { KakaoShareButtonProps } from '../types';
import ChoiceButton from './ChoiceButton';

const KakaoShareButton: React.FC<KakaoShareButtonProps> = (props: KakaoShareButtonProps) => {
  useEffect(() => {
    createKakaoButton();
  }, []);

  const createKakaoButton = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_KEY);
      }

      kakao.Link.createDefaultButton({
        container: '#kakao-link-btn',
        objectType: 'feed',
        content: {
          title: `${props.name}님의 IT성향은 ${resultData[props.tendency].name}입니다`,
          description: '당신의 IT성향을 테스트해보세요!',
          imageUrl: `https://dimitest.me/images/${props.tendency}.jpg`,
          link: {
            webUrl: 'https://dimitest.me',
          },
        },
        buttons: [
          {
            title: '나도 해보기',
            link: {
              mobileWebUrl: 'https://dimitest.me',
              webUrl: 'https://dimitest.me',
            },
          },
        ],
      });
    }
  };

  return (
    <ChoiceButton style={{ marginBottom: '107px' }} id="kakao-link-btn">
      카카오톡으로 결과 공유하기
    </ChoiceButton>
  );
};
export default KakaoShareButton;
