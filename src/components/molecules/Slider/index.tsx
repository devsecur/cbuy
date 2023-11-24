import useCustomQueries from '@/lib/hooks/useCustomQueries';
import React, { useEffect } from 'react';
import { useState } from 'react';
import styles from './styles.module.scss';

interface CarouselProps {
  slides: SlideData[] | any[] | SliderDataType[]; // have to change to actual type
}

export type SliderDataType = {
  img: string;
  title: string;
  caption: string;
  companyTitle: string;
  info: string;
  amount: string;
  people: string;
  negotiation: string;
  lang: string;
};
type SlideData = { img: string; text: string } | null;
const Slider: React.FC<CarouselProps> = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [currentData, setData] = useState<SliderDataType>(slides[0]);
  const { isMobile, isTablet, isDesktop } = useCustomQueries();
  const previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  const nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };
  useEffect(() => {
    setData(slides[current]);
  }, [current, slides]);
  return (
    <div
      className={`${styles.slider_container}  relative overflow-hidden  ${
        isDesktop
          ? styles.isDesktop
          : isTablet
          ? styles.isTablet
          : styles.isMobile
      }`}
    >
      <div className={`${styles.slider_details} flex flex-col items-center`}>
        <div className={styles.title}>{currentData.title}</div>
        <div className={styles.caption}>{currentData.caption}</div>

        {/* slider navbar */}
        <div
          className={`${styles.slider_navbar}  flex w-full justify-center gap-3 py-4`}
        >
          {slides.map((slide, index) => {
            return (
              <div
                onClick={() => {
                  setCurrent(index);
                }}
                key={'square' + index}
                className={`${
                  isMobile ? 'h-[8px] w-[8px]' : 'h-[11px] w-[11px]'
                } cursor-pointer ${
                  index === current ? 'bg-gray-500' : 'bg-white'
                }`}
                style={{
                  border: '1px solid var(--foundation-blue-blue-400, #495466',
                }}
              ></div>
            );
          })}
        </div>
      </div>
      <div className={`${styles.slider_content}`}>
        <div
          className={`${styles.slider_content_wrapper}  duration-40 flex items-center justify-center transition ease-out`}
          // style={{
          //   transform: `translateX(-${current * 100}%)`,
          // }}
        >
          <button
            onClick={previousSlide}
            className={`${styles.slider_btn} prev w-[20%] ${
              isMobile ? 'hidden' : 'flex'
            }`}
          >
            <span className={styles.btn_prev}></span>
          </button>
          <div
            className={`min-h-full bg-blue-700 ${styles.slider_image}  ${
              isDesktop ? 'block' : 'hidden'
            }`}
          >
            <img src={currentData?.img} />
            {/* <Image
              alt='ddd'
              src={'https://wallpapercave.com/wp/wp3386769.jpg'}
              width={40}
              height={40}
            /> */}
          </div>

          <div className={`${styles.slider_body}`}>
            <div className={styles.body_header}>
              <span className={styles.body_header_icon}>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M13.4747 3.1875C13.4749 2.85 13.3863 2.51839 13.2179 2.22591C13.0495 1.93343 12.8072 1.69036 12.5152 1.52108C12.2232 1.3518 11.8919 1.26226 11.5544 1.26144C11.2169 1.26061 10.8851 1.34853 10.5923 1.51638C10.2995 1.68422 10.056 1.9261 9.88616 2.21775C9.71632 2.50941 9.62615 2.84058 9.62469 3.17808C9.62323 3.51557 9.71052 3.84752 9.87781 4.14063C10.0451 4.43375 10.2865 4.67773 10.5778 4.84811C10.524 5.47584 10.2329 5.99409 9.70949 6.39082C9.17561 6.79687 8.42425 7.0375 7.69967 7.0375C6.97509 7.0375 6.22374 6.79687 5.68985 6.39082C5.16649 5.99409 4.87534 5.47584 4.8215 4.84811C5.18716 4.63429 5.4721 4.30583 5.63213 3.91363C5.79217 3.52143 5.81837 3.0874 5.70669 2.67879C5.595 2.27019 5.35166 1.90983 5.01437 1.65357C4.67708 1.39731 4.26469 1.25946 3.8411 1.26137C3.41751 1.26329 3.00638 1.40487 2.67142 1.66417C2.33647 1.92347 2.0964 2.28601 1.98841 2.69561C1.88042 3.10521 1.91055 3.53899 2.07413 3.92973C2.23771 4.32046 2.5256 4.64633 2.89319 4.85683C2.95575 6.08613 3.52994 7.16894 4.52673 7.9248C5.15205 8.39883 5.92506 8.72759 6.73717 8.87497V11.1465C6.37019 11.3583 6.08337 11.6854 5.9212 12.0769C5.75904 12.4684 5.73059 12.9025 5.84026 13.3118C5.94994 13.7211 6.19162 14.0828 6.52781 14.3408C6.864 14.5987 7.27591 14.7386 7.69967 14.7386C8.12343 14.7386 8.53535 14.5987 8.87154 14.3408C9.20773 14.0828 9.4494 13.7211 9.55908 13.3118C9.66876 12.9025 9.64031 12.4684 9.47814 12.0769C9.31597 11.6854 9.02916 11.3583 8.66217 11.1465V8.87497C9.47428 8.72759 10.2473 8.39883 10.8726 7.9248C11.8694 7.16894 12.4436 6.08613 12.5062 4.85683C12.8002 4.68845 13.0447 4.44542 13.2147 4.15231C13.3848 3.85919 13.4745 3.52638 13.4747 3.1875ZM3.84967 2.225C4.04004 2.225 4.22613 2.28145 4.38441 2.38721C4.54269 2.49297 4.66606 2.64329 4.73891 2.81916C4.81176 2.99504 4.83082 3.18857 4.79368 3.37527C4.75654 3.56198 4.66487 3.73348 4.53026 3.86809C4.39565 4.0027 4.22415 4.09437 4.03745 4.1315C3.85074 4.16864 3.65721 4.14958 3.48134 4.07673C3.30547 4.00388 3.15514 3.88052 3.04938 3.72223C2.94362 3.56395 2.88717 3.37786 2.88717 3.1875C2.88717 2.93223 2.98858 2.68741 3.16908 2.50691C3.34959 2.3264 3.5944 2.225 3.84967 2.225ZM7.69967 13.775C7.50931 13.775 7.32322 13.7185 7.16494 13.6128C7.00665 13.507 6.88329 13.3567 6.81044 13.1808C6.73759 13.005 6.71853 12.8114 6.75567 12.6247C6.7928 12.438 6.88447 12.2665 7.01908 12.1319C7.15369 11.9973 7.32519 11.9056 7.5119 11.8685C7.6986 11.8314 7.89213 11.8504 8.06801 11.9233C8.24388 11.9961 8.3942 12.1195 8.49996 12.2778C8.60572 12.436 8.66217 12.6221 8.66217 12.8125C8.66217 13.0678 8.56077 13.3126 8.38026 13.4931C8.19976 13.6736 7.95494 13.775 7.69967 13.775ZM11.5497 4.15C11.3593 4.15 11.1732 4.09355 11.0149 3.98779C10.8567 3.88203 10.7333 3.7317 10.6604 3.55583C10.5876 3.37996 10.5685 3.18643 10.6057 2.99972C10.6428 2.81302 10.7345 2.64152 10.8691 2.50691C11.0037 2.3723 11.1752 2.28063 11.3619 2.24349C11.5486 2.20635 11.7421 2.22541 11.918 2.29826C12.0939 2.37111 12.2442 2.49448 12.35 2.65276C12.4557 2.81104 12.5122 2.99713 12.5122 3.1875C12.5122 3.44277 12.4108 3.68758 12.2303 3.86809C12.0498 4.04859 11.8049 4.15 11.5497 4.15Z'
                    fill='#969DA7'
                    stroke='#969DA7'
                    stroke-width='0.030075'
                  />
                </svg>
              </span>
              <span>{currentData.companyTitle}</span>
            </div>
            <div className={styles.body_content}>{currentData.info}</div>
            <div className={styles.body_footer}>
              <span>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M12.1357 4.53381L11.5009 3.79525C10.9626 3.22987 10.3149 2.77993 9.59718 2.47282C8.87949 2.1657 8.10681 2.00782 7.32616 2.00879C4.13983 2.00879 1.55469 4.59393 1.55469 7.78027C1.55469 10.9666 4.13983 13.5517 7.32616 13.5517C8.51984 13.5517 9.68415 13.1816 10.6589 12.4926C11.6336 11.8036 12.3708 10.8294 12.7691 9.70409'
                    stroke='#8E98A5'
                    stroke-width='0.961913'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                  />
                  <path
                    d='M14.0605 3.01362V6.33763C14.0605 6.46519 14.0098 6.58752 13.9196 6.67772C13.8294 6.76792 13.7071 6.81859 13.5796 6.81859H10.2555C9.82689 6.81859 9.61226 6.30066 9.91527 5.99766L13.2396 2.67335C13.5426 2.36974 14.0605 2.58497 14.0605 3.01362Z'
                    fill='#8E98A5'
                    stroke='#8E98A5'
                    stroke-width='0.0300598'
                  />
                </svg>
              </span>
              <span>{currentData.amount}</span>
              <span className={`flex`}>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g clip-path='url(#clip0_859_7626)'>
                    <path
                      d='M10.6035 7.77978C9.98544 7.77978 9.38785 7.50383 8.92012 7.00303C8.46532 6.51456 8.18756 5.86317 8.13857 5.16939C8.08626 4.42932 8.31201 3.74876 8.77403 3.25278C9.23605 2.75679 9.88203 2.48926 10.6035 2.48926C11.3198 2.48926 11.9676 2.7616 12.4281 3.25638C12.8931 3.75598 13.1195 4.43533 13.0672 5.16909C13.017 5.86377 12.7395 6.51486 12.2856 7.00273C11.8191 7.50383 11.2218 7.77978 10.6035 7.77978ZM14.5662 13.0703H6.64099C6.51357 13.071 6.38769 13.0424 6.27304 12.9868C6.15839 12.9312 6.05803 12.85 5.97967 12.7496C5.89656 12.6406 5.83916 12.5143 5.81178 12.3801C5.7844 12.2458 5.78774 12.1071 5.82156 11.9743C6.07466 10.958 6.70171 10.1151 7.63476 9.53707C8.46291 9.02425 9.51711 8.74169 10.6035 8.74169C11.7112 8.74169 12.7377 9.01223 13.5707 9.52475C14.5058 10.0998 15.1338 10.9475 15.3857 11.9761C15.4191 12.109 15.4221 12.2477 15.3944 12.3819C15.3667 12.5161 15.309 12.6423 15.2258 12.7511C15.1475 12.8511 15.0473 12.9318 14.933 12.9872C14.8187 13.0425 14.6932 13.0709 14.5662 13.0703ZM4.92217 7.90002C3.86437 7.90002 2.93432 6.91646 2.84805 5.70776C2.80536 5.08853 2.99835 4.51589 3.38912 4.09595C3.77569 3.68023 4.32097 3.45117 4.92217 3.45117C5.52337 3.45117 6.06444 3.68143 6.45311 4.09956C6.8469 4.5228 7.03928 5.09424 6.99419 5.70836C6.90792 6.91676 5.97817 7.90002 4.92217 7.90002ZM6.89589 8.8454C6.36714 8.58688 5.68088 8.45762 4.92247 8.45762C4.03691 8.45762 3.1769 8.68848 2.50056 9.10752C1.73373 9.58336 1.21791 10.2762 1.00959 11.1128C0.979106 11.2331 0.976223 11.3588 1.00116 11.4804C1.02609 11.602 1.0782 11.7164 1.15358 11.815C1.2251 11.9068 1.31674 11.981 1.42143 12.0319C1.52612 12.0827 1.64109 12.1089 1.75748 12.1084H5.09411C5.15043 12.1084 5.20496 12.0886 5.24819 12.0525C5.29142 12.0164 5.32062 11.9663 5.33068 11.9109C5.33399 11.892 5.3382 11.873 5.34301 11.8544C5.59791 10.8305 6.1952 9.96542 7.07776 9.33477C7.11022 9.31137 7.13633 9.28024 7.15372 9.2442C7.17111 9.20817 7.17923 9.16836 7.17735 9.12839C7.17547 9.08842 7.16364 9.04955 7.14295 9.0153C7.12225 8.98106 7.09333 8.95252 7.05882 8.93227C7.01162 8.90461 6.95752 8.87546 6.89589 8.8454Z'
                      fill='#8E98A5'
                      stroke='#8E98A5'
                      stroke-width='0.0300598'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_859_7626'>
                      <rect
                        width='15.3906'
                        height='15.3906'
                        fill='white'
                        transform='translate(0.503906 0.0849609)'
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span>{currentData.people}</span>
              </span>
              <span className={`flex`}>
                <svg
                  width='17'
                  height='16'
                  viewBox='0 0 17 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g clip-path='url(#clip0_744_261)'>
                    <path
                      d='M13.6732 7.32773H9.4623C9.0794 7.32773 8.71217 7.17563 8.44142 6.90487C8.17066 6.63411 8.01855 6.26689 8.01855 5.88398V1.67305C8.01855 1.64114 8.00588 1.61054 7.98332 1.58797C7.96075 1.56541 7.93015 1.55273 7.89824 1.55273H5.13105C4.62051 1.55273 4.13088 1.75555 3.76987 2.11655C3.40887 2.47756 3.20605 2.96719 3.20605 3.47773V13.1027C3.20605 13.6133 3.40887 14.1029 3.76987 14.4639C4.13088 14.8249 4.62051 15.0277 5.13105 15.0277H11.8686C12.3791 15.0277 12.8687 14.8249 13.2297 14.4639C13.5907 14.1029 13.7936 13.6133 13.7936 13.1027V7.44805C13.7936 7.41614 13.7809 7.38554 13.7583 7.36297C13.7358 7.34041 13.7052 7.32773 13.6732 7.32773ZM10.9061 12.1402H6.09355C5.96592 12.1402 5.84351 12.0895 5.75326 11.9993C5.66301 11.909 5.6123 11.7866 5.6123 11.659C5.6123 11.5313 5.66301 11.4089 5.75326 11.3187C5.84351 11.2284 5.96592 11.1777 6.09355 11.1777H10.9061C11.0337 11.1777 11.1561 11.2284 11.2464 11.3187C11.3366 11.4089 11.3873 11.5313 11.3873 11.659C11.3873 11.7866 11.3366 11.909 11.2464 11.9993C11.1561 12.0895 11.0337 12.1402 10.9061 12.1402ZM10.9061 9.73398H6.09355C5.96592 9.73398 5.84351 9.68328 5.75326 9.59303C5.66301 9.50278 5.6123 9.38037 5.6123 9.25273C5.6123 9.1251 5.66301 9.00269 5.75326 8.91244C5.84351 8.82219 5.96592 8.77148 6.09355 8.77148H10.9061C11.0337 8.77148 11.1561 8.82219 11.2464 8.91244C11.3366 9.00269 11.3873 9.1251 11.3873 9.25273C11.3873 9.38037 11.3366 9.50278 11.2464 9.59303C11.1561 9.68328 11.0337 9.73398 10.9061 9.73398Z'
                      fill='#8E98A5'
                      stroke='#8E98A5'
                      stroke-width='0.030075'
                    />
                    <path
                      d='M13.4091 6.26152L9.084 1.93644C9.07559 1.92808 9.0649 1.92239 9.05326 1.92009C9.04163 1.91779 9.02957 1.91898 9.01861 1.92351C9.00765 1.92804 8.99828 1.93571 8.99166 1.94556C8.98505 1.9554 8.9815 1.96698 8.98145 1.97884V5.88288C8.98145 6.0105 9.03214 6.1329 9.12239 6.22314C9.21263 6.31338 9.33502 6.36408 9.46265 6.36408H13.3667C13.3785 6.36403 13.3901 6.36047 13.4 6.35386C13.4098 6.34725 13.4175 6.33787 13.422 6.32691C13.4265 6.31595 13.4277 6.3039 13.4254 6.29226C13.4231 6.28063 13.4174 6.26993 13.4091 6.26152Z'
                      fill='#8E98A5'
                      stroke='#8E98A5'
                      stroke-width='0.030075'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_744_261'>
                      <rect
                        width='15.4'
                        height='15.4'
                        fill='white'
                        transform='translate(0.799805 0.589844)'
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span>{currentData.amount}</span>
              </span>
              <span className={`flex`}>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g clip-path='url(#clip0_744_268)'>
                    <path
                      d='M7.89013 7.32714C8.42165 7.32714 8.85253 6.89626 8.85253 6.36474C8.85253 5.83322 8.42165 5.40234 7.89013 5.40234C7.35862 5.40234 6.92773 5.83322 6.92773 6.36474C6.92773 6.89626 7.35862 7.32714 7.89013 7.32714Z'
                      fill='#8E98A5'
                      stroke='#8E98A5'
                      stroke-width='0.030075'
                    />
                    <path
                      d='M7.89062 1.55273C5.23713 1.55273 3.07812 3.6176 3.07812 6.15469C3.07812 7.36293 3.62886 8.9697 4.71498 10.9305C5.58724 12.5048 6.59636 13.9284 7.12123 14.6367C7.20992 14.7577 7.32588 14.8562 7.45971 14.924C7.59354 14.9919 7.74148 15.0272 7.89153 15.0272C8.04157 15.0272 8.18951 14.9919 8.32334 14.924C8.45718 14.8562 8.57314 14.7577 8.66183 14.6367C9.18579 13.9284 10.1958 12.5048 11.0681 10.9305C12.1524 8.9703 12.7031 7.36353 12.7031 6.15469C12.7031 3.6176 10.5441 1.55273 7.89062 1.55273ZM7.89062 8.29023C7.5099 8.29023 7.13772 8.17733 6.82115 7.96581C6.50459 7.75429 6.25786 7.45365 6.11216 7.1019C5.96646 6.75015 5.92834 6.3631 6.00261 5.98969C6.07689 5.61627 6.26023 5.27327 6.52944 5.00405C6.79866 4.73484 7.14166 4.5515 7.51508 4.47722C7.88849 4.40295 8.27554 4.44107 8.62729 4.58677C8.97904 4.73246 9.27968 4.9792 9.4912 5.29576C9.70273 5.61233 9.81562 5.98451 9.81562 6.36523C9.81507 6.8756 9.61208 7.36491 9.25119 7.7258C8.8903 8.08669 8.401 8.28968 7.89062 8.29023Z'
                      fill='#8E98A5'
                      stroke='#8E98A5'
                      stroke-width='0.030075'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_744_268'>
                      <rect
                        width='15.4'
                        height='15.4'
                        fill='white'
                        transform='translate(0.19043 0.589844)'
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span>{currentData.lang}</span>
              </span>
            </div>
          </div>
          <button
            onClick={nextSlide}
            className={`${styles.slider_btn} flex h-full  w-[20%] ${
              isMobile ? 'hidden' : 'flex'
            }`}
          >
            <span className={styles.btn_next}></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
