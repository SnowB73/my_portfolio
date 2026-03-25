export const siteData = {
    hero: {
        name: "송호준",
        major: "로봇 비전, AI 개발 엔지니어, HRI",
        email: "ghwns1377@gmail.com",
        education: [
            { school: "서울과학기술대학교", degree: "기계시스템디자인공학 학사", period: "2015.03 - 2021.08" },
            { school: "서울과학기술대학교 대학원", degree: "컴퓨터공학 석사", period: "2021.09 - 2024.02" }
        ],
        title: "넓게 깊이 학습하고, 소통하는 개발자",
        subtitle: "사람과 소통하는 로봇을 개발하는 것이 목표입니다.",
        buttonText: "내 프로젝트 보기"
    },
    about: {
        description: "도움이 필요한 사람의 마음에 따스함을 줄 수 있기를 바랍니다.",
        skills: ["HRI", "Robot Vision", "Robotics", "Object Detection", "ROS2"]
    },
    projects: [
        {
            id: 1,
            title: "편식 로봇",
            desc: "OpenCV로 음료수의 종류를 인식하여 호불호를 가려 따지는 로봇",
            ranks: ["ROS", "로봇 비전", "알고리즘 제어"],
            links: [
                { label: "Blog", url: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE07542957" }
            ]
        },
        {
            id: 2,
            title: "생체 모방 6족 보행 로봇 시스템 개발",
            desc: "곤충의 다리 구조를 모방하여 험지를 극복하고 어떤 장애물이든 딜레이 없이 이동할 수 있도록 설계",
            ranks: ["생체 모방", "ROS", "보행 제어", "장애물 탐지"],
            links: [
                { label: "Paper", url: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE07542957" },
                { label: "Youtube", url: "https://www.youtube.com/watch?v=MoL3U36t0gQ" }
            ]
        },
        {
            id: 3,
            title: "표정 인지 및 모션 생성 모델을 활용하여 사람과 상호작용하는 로봇 시스템",
            desc: "사람의 표정을 보고 감정을 이해하여 이에 알맞은 모션을 생성한 후 사람과 직접 상호작용하는 휴머노이드",
            ranks: ["HRI", "Motion Generation", "Facial Expression Recognition", "Robot Vision"],
            links: [
                { label: "Paper", url: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11979028" }
            ]
        }
    ],
    contact: {
        email: "ghwns1377@gmail.com",
        github: "https://github.com/SnowB73", // 전체 URL로 관리하면 편리합니다.
        blog: "https://velog.io/@your-id"
    }
};