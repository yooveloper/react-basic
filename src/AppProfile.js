import "./App.css";
import Counter from './components/Counter';
import Profile from "./components/Profile";

function AppProfile() {
  const handleClick = (event) => {
    console.log(event);
    alert("버튼이 클릭 됨");
  };

  return (
    <>
      <Counter />
      <button onClick={handleClick}>버튼</button>
      <Profile
        image="images/maro.png"
        name="마로"
        title="골든두들"
        isNew={true}
      />
      <Profile
        image="images/choco.png"
        name="초코"
        title="푸들"
        isNew={false}
      />
      <Profile
        image="images/song-e.png"
        name="송이"
        title="말티즈"
        isNew={false}
      />
    </>
  );
}

export default AppProfile;
