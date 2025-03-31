
interface MenuProps {
  mobileMenuState: boolean;
  setMobileMenuState: (state: boolean) => void;
}

export default function Menu({
  mobileMenuState,
  setMobileMenuState,
}: MenuProps) {

  const handleMenuToggle = () => {
    setMobileMenuState(!mobileMenuState);
  };

  return (
    <button
      className="flex flex-col justify-center items-end w-12 h-12 space-y-1.5 focus:outline-none ml-auto md:hidden"
      aria-label="Toggle menu"
      onClick={handleMenuToggle}
    >
      <span className="block w-8 h-0.5 bg-white"></span>
      <span className="block w-6 h-0.5 bg-white"></span>
      <span className="block w-8 h-0.5 bg-white"></span>
    </button>
  );
}
