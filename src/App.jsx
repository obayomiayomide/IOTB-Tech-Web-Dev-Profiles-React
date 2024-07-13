import avatar from './assets/Avatar.svg'
import './App.css'

function TutorProfiles({tutorName, tutorEmail, year=2024, profileImg=avatar}){
  return (
    <>
      <div className='tutor-area'>
        <img src={profileImg} alt={tutorName} />
        <h4>{tutorName}</h4>
        <p><b>Web Development Tutor</b></p>
        <p>Email: {tutorEmail}</p>
        <p>Year: {year}</p>
      </div>
    </>
  )
}

function FellowProfiles({fellowName, fellowEmail, year=2024, post="None", profileImg=avatar}){
  return (
    <>
      <div className='fellow-area'>
        <img src={profileImg} alt={fellowName} />
        <h4>{fellowName}</h4>
        <p><b>Web Development Tutor</b></p>
        <p>Post: {post}</p>
        <p>Email: {fellowEmail}</p>
        <p>Year: {year}</p>
      </div>
    </>
  )
}

const tutors = [
  {
    name: "Adewuyi Awal",
    email: "awal@gmail.com"
  },
  {
    name: "Hassan Yahya",
    email: "yahya@gmail.com",
  },
  {
    name: "Odubana Ridwan",
    email: "ridwan@gmail.com",
  },
]

const fellows = [
  {
    name: "Abdulmumeen Etudaye",
    email: "abdulmumeen@gmail.com",
    post: "Assistant Class Rep."
  },
  {
    name: "Adelabu Muminah",
    email: "muminah@gmail.com",
  },
  {
    name: "Adeleke Ibrahim",
    email: "ibrahim@gmail.com",
  },
  {
    name: "Aderolu Latifat",
    email: "Latifat@gmail.com",
  },
  {
    name: "Balogun Waliyat",
    email: "waliyat@gmail.com",
  },
  {
    name: "Bashorun Misbaudeen",
    email: "misbaudeen@gmail.com",
  },
  {
    name: "Hammed Ahishat",
    email: "ahishat@gmail.com",
  },
  {
    name: "Lambe Awal",
    email: "awal@gmail.com",
  },
  {
    name: "Obayomi Abdul-Hafeez",
    email: "abdul-hafeez@gmail.com",
  },
  {
    name: "Oriade Latifat",
    email: "latifat@gmail.com",
    post: "Class Rep."
  },
  {
    name: "Owonikoko Hawaw",
    email: "hawaw@gmail.com",
  },
  {
    name: "Salihu Mubaraq",
    email: "mubaraq@gmail.com",
  },
  {
    name: "Yunusa Usman",
    email: "usman@gmail.com",
  },
]

function App() {
  return (
    <>
      <div>
        <h1>IOTB Tech Cohort 3, 2024</h1>
        <h2>Web Development Stack Companion Profiles</h2>
        <div><hr />
          <h3>Meet the Tutors</h3>
          <div className='tutor-flex'>
            {tutors.map((tutor)=> <TutorProfiles tutorName={tutor.name} tutorEmail={tutor.email} />)}
          </div>
        </div><hr />
        <div>
          <h3>Meet the Fellows</h3>
          <div className='fellow-grid'>
          {fellows.map((fellow)=> <FellowProfiles fellowName={fellow.name} fellowEmail={fellow.email} post={fellow.post} />)}
          </div>
        </div>
      </div>
      
      
    </>
  )
}

export default App
