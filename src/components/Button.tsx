type Color = "red" | "green" | "blue"
type BtnProps = {
  backgroundColor: string,
  textcolor: Color,
  borderColor?: Color
  fontSize: number,
  rounded?: true
}
function Button({ backgroundColor, fontSize, rounded, textcolor }: BtnProps) {

  let a: number  = backgroundColor.length
  return (
    <div>
      
      <button className='bg-blue-500 text-white rounded px-4 py-2'>
        Click me !
      </button>

      <p style={{
        backgroundColor: backgroundColor,
        color: textcolor,
      }}>
          {backgroundColor} - {fontSize} - {rounded ? a : 0} - {a}
      </p>
      
    </div>
  )
}

export default Button