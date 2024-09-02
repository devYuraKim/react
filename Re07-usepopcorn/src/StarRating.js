function StarRating() {
  return (
    <div>
      <div>
        STARS{" "}
        {Array.from({ length: 5 }, (_, i) => (
          <span>S{i + 1}</span>
        ))}
      </div>
      <p>NUMERIC VALUE</p>
    </div>
  );
}

export default StarRating;

// 1. Array.from()으로 array object를 생성
// 2. {length:5}는 길이만 5의 값을 가진 객체를 생성
// 3. (_, i)가 될 수밖에 없는 것이 2에서 생성한 객체는 element가 없고 length만 있어서 index만 정의 가능하기 때문
// 결론. Array.from(source, (element, index) => processResult)
