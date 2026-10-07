export function ChanhDaiMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 704 256"
      aria-hidden
      {...props}
    >
      <path
        fill="currentColor"
        d="M0 0h64v256H0ZM256 0h64v256h-64ZM64 64h64v64H64ZM192 64h64v64h-64ZM128 128h64v64h-64ZM384 0h64v256h-64ZM640 0h64v256h-64ZM448 64h64v64h-64ZM576 64h64v64h-64ZM512 128h64v64h-64Z"
      />
    </svg>
  )
}

export function getMarkSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 352 128"><path fill="currentColor" d="M0 0h32v128H0ZM128 0h32v128h-32ZM32 32h32v32H32ZM96 32h32v32h-32ZM64 64h32v32h-64ZM192 0h32v128h-32ZM320 0h32v128h-32ZM224 32h32v32h-32ZM288 32h32v32h-32ZM256 64h32v32h-32Z"/></svg>`
}
