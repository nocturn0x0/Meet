interface Props {
  children: React.ReactNode;
}

const AuthLayout = ({children}: Props) => {
  return (
    <div className="bg-muted flex flex-col min-h-svh justify-center items-center p-6 md:p10">
    <div className="w-full max-w-sm md:max-w-3xl">
    <div>{children}</div>
    </div>
    </div>
  )
}

export default AuthLayout;