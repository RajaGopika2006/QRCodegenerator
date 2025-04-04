import React from 'react'
const userData=[
    {
        name: "Alice",
        city: "Los Angeles",
        role: "UI/UX Designer",
        skills: ["Figma", "Adobe XD", "Photoshop", "CSS", "JavaScript"],
        online: true,
        profile: "images/person1.jpg"
      },
      {
        name: "Michael",
        city: "Chicago",
        role: "Backend Developer",
        skills: ["Node.js", "Express", "MongoDB", "Python", "Django"],
        online: false,
        profile: "images/person2.jpg"
      },
      {
        name: "Sophia",
        city: "Seattle",
        role: "Data Scientist",
        skills: ["Python", "R", "Machine Learning", "TensorFlow", "SQL"],
        online: true,
        profile: "images/person1.jpg"
      },
      {
        name: "David",
        city: "Austin",
        role: "Cybersecurity Engineer",
        skills: ["Kali Linux", "Ethical Hacking", "Network Security", "Python", "C"],
        online: false,
        profile: "images/person2.jpg"
      }
      
]
function User(props)
{
    return <div className='card-container'>
        <span className={props.online?"pro online":"pro offline"}>{props.online?"Online":"Offline"}</span>
        <img className='img'src={props.profile}alt='userprofile'/>
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.role}</p>
        <div className='buttons'>
            <button className='messagebtn'>Message</button>
            <button className='flwngbtn'>Following</button>
        </div>
        <div className='skills'>
            <h6>Skills</h6>
            <ul>
               {props.skills.map((skills,index)=>(
                <li key={index}>{skills}</li>
               ))}
            </ul>

        </div>
    </div>
}
export const UserCard = () => {
  return (
   <>
   {
    userData.map((user,index)=>(
        <User key={index} name={user.name} city={user.city} role={user.role} skills={user.skills} online={user.online} profile={user.profile} />
    ))
   }</>
    
  )
}
