type BtnProps = {
  bgColor: string,
  fontSize: number,
  rounded?: true
}
function Button({ bgColor, fontSize, rounded }: BtnProps) {

  return (
    <div>
      <button className='bg-blue-500 text-white rounded px-4 py-2'>Click me !</button>
      {bgColor} - {fontSize} - {rounded}
    </div>
  )
}

export default Button