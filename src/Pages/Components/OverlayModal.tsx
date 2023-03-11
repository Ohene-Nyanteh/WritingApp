import { ReactNode } from "react";

interface Props{
    children: ReactNode
}

function OverlayModal({children} : Props) {
  return (
    <section className="w-full h-screen bg-[rgba(0,0,0,0.4)] absolute top-0 left-0">
      {children}
    </section>
  );
}

export default OverlayModal;
