
const Header = (props) => {
  console.log(props)
   return (
   <div>
  <h1> {props.course} </h1>
      </div>
   )
}

const Part = (props) => {
  console.log(props)
   return (
  <div>
  <p> {props.part1} {props.exercises1} </p>
  <p> {props.part2} {props.exercises2} </p>
  <p> {props.part3} {props.exercises3} </p>
    </div>
   )
}

const Content = (props) => {
  console.log(props)
   return (
  <div>
   <Part part1={part1}/>
   <Part part2={part2} />
   <Part part3={part3} />
      </div>
   )
}

const Total = (props) => {
  console.log(props)
   return (
 <div>
  <p> Number of exercises {props.exercises1 + props.exercises2 + props.exercises3} </p>
   </div>
   )
}

const App = () => {
   const course = 'Half Stack application development'
   const part1 = 'Fundamentals of React'
   const exercises1 = 10
   const part2 = 'Using props to pass data'
   const exercises2 = 7
   const part3 = 'State of a component'
   const exercises3 = 14

  return (
   <div>
  <Header course={course}/> 
  <Content part1={part1} exercises1={exercises1} />
           
          
  <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>

  )
}

export default App
