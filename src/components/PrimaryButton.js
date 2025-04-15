const PrimaryButton = ({ label, onClick }) => {
  return (
    <button
      className="primary-button"
      onClick={onClick} // 클릭하면 props로 받은 onClick 함수 실행
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
