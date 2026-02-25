interface MainContentProps extends React.ComponentProps<"main"> {}

export default function MainContent({
  children,
  className,
  ...props
}: MainContentProps) {
  const mainClassName = ["mt-4 md:mt-8", className].filter(Boolean).join(" ");

  return (
    <main className={mainClassName} {...props}>
      {children}
    </main>
  );
}
