const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)

function Counter() {
  return (
    <div className='counter'>
      <button> - </button>
      <h3>0</h3>
      <button> + </button>
      <button> C </button>
      <button> x </button>
    </div>
  )
}

function SumInfo(props)  {
  const stTitle = {
    color: props.color,
    fontSize: props.size === 'big' ? '50px' : '40px'
  }

  return (
    <div className='suminfo'>
      <h1 style={{ color: props.color }}>Sum = 0</h1>
      <button className='text-center'>Add counter</button>
    </div>
  )
}

function App() {
  return (
    <>
      <SumInfo color="black" size="small"/> 
      <Counter />
    </>
  )
}
