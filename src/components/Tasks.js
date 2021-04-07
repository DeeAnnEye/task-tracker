const tasks =[
    {
        id:1,
        text:'Shopping',
        day:'12th April at 6:30pm',
        reminder:true
    },
    {
        id:2,
        text:'Dentist appointment',
        day:'24th April at 11:00am',
        reminder:true
    },
    {
        id:3,
        text:'Birthday party',
        day:'28th April at 7:00pm',
        reminder:true
    },
    {
        id:4,
        text:'School meeting',
        day:'29th April at 10:00am',
        reminder:true
    }
]

const Tasks = () => {
    return (
        <>
         {tasks.map((task) => (<h3>{task.text}</h3>)
         )}   
        </>
    )
}

export default Tasks
