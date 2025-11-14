import ship1 from "@assets/generated_images/Minimalist_ship_icon_1_8de382ac.png";
import ship2 from "@assets/generated_images/Minimalist_ship_icon_2_4f5e5eec.png";
import ship3 from "@assets/generated_images/Minimalist_ship_icon_3_0ae02f83.png";

export default function FloatingShips() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      <img
        src={ship1}
        alt=""
        className="absolute top-1/4 left-1/4 w-16 h-16 animate-float-ship opacity-70"
        style={{ animationDelay: '0s' }}
      />
      <img
        src={ship2}
        alt=""
        className="absolute top-1/3 right-1/4 w-20 h-20 animate-float-ship opacity-60"
        style={{ animationDelay: '5s' }}
      />
      <img
        src={ship3}
        alt=""
        className="absolute bottom-1/3 left-1/3 w-18 h-18 animate-float-ship opacity-50"
        style={{ animationDelay: '10s' }}
      />
    </div>
  );
}
