import { useState } from "react";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starContainerStyle = {
  display: "flex",
};

function StarRating({ maxRating = 5 }) {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  function handleRating(i) {
    setRating(i + 1);
  }

  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onClick={() => handleRating(i)}
            isFilled={tempRating ? tempRating > i : rating > i}
            onMouseEnter={() => setTempRating(i + 1)}
            onMouseLeave={() => setTempRating(0)}
          />
        ))}
      </div>
      <p>{tempRating || rating || ""}</p>
      {/* if truthy then return, if not proceed */}
    </div>
  );
}

// 1. Array.from()으로 array object를 생성
// 2. {length:5}는 길이만 5의 값을 가진 객체를 생성
// 3. (_, i)가 될 수밖에 없는 것이 2에서 생성한 객체는 element가 없고 length만 있어서 index만 정의 가능하기 때문
// 결론. Array.from(source, (element, index) => processResult)

export default StarRating;

const starStyle = {
  width: "48px",
  height: "48px",
  display: "block",
  cursor: "pointer",
};

// props를 통해서 styles customization이 가능하게 하려면 starStyle 객체를 Star component 내부로 이동시켜야 함

function Star({ onClick, isFilled, onMouseEnter, onMouseLeave }) {
  return (
    <span
      role="button"
      style={starStyle}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isFilled ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="yellow"
          stroke="black"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          stroke="black"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )}
    </span>
  );
}
