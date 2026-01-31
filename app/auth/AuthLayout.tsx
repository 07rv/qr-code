import BackgroundEffects from "../components/BackgroundEffects";

type AuthLayoutProps = {
  children: React.ReactNode;
  isLogin?: boolean;
};

export default function AuthLayout({ children, isLogin }: AuthLayoutProps) {
  return (
    <>
      <BackgroundEffects />
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden max-w-sm lg:max-w-4xl w-full">
          {isLogin ? (
            <>
              <div
                className="hidden lg:block lg:w-1/2 bg-cover"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')",
                }}
              ></div>
              {children}
            </>
          ) : (
            <>
              {children}
              <div
                className="hidden lg:block lg:w-1/2 bg-cover"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')",
                }}
              ></div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
