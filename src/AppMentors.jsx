import React, { useState } from "react";

export default function AppMentors() {
  const [person, setPerson] = useState(initialPerson);

  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    setPerson((person) => ({
      ...person,
      mentors: person.mentors.map((mentor) => {
        if (mentor.name === prev) {
          return { ...mentor, name: current };
        }
        return mentor;
      }),
    }));
  };

  const handleAdd = () => {
    const name = prompt(`이름을 입력해주세요`);
    const title = prompt(`타이틀을 입력해주세요`);
    setPerson((person) => ({
      ...person,
      mentors: [...person.mentors, { name, title }],
    }));
  };

  const handleDelete = () => {
    const name = prompt(`누구를 삭제하고 싶은가요?`);
    setPerson((person) => ({
      ...person,
      mentors: person.mentors.filter((m) => m.name !== name),
    }));
  };

  return (
    <div>
      <h1>
        {person.name}은 {person.title}
      </h1>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={() => handleUpdate}>멘토의 이름을 바꾸기</button>
      <button onClick={() => handleAdd}>멘토를 추가하기</button>
      <button onClick={() => handleDelete}>멘토를 삭제하기</button>
    </div>
  );
}

const initialPerson = {
  name: "원영",
  title: "개발자",
  mentors: [
    {
      name: "밥",
      title: "고수개발자",
    },
    {
      name: "제임스",
      title: "고수개발자",
    },
  ],
};