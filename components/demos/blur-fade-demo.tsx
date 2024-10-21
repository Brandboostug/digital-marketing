import BlurFade from "@/components/ui/blur-fade";
import Image from "next/image";
import Link from "next/link";

const works = [
  {
    background: "bg-gray-200",
    imageUrl: "/images/washablez.webp",
    title: "Washablez (web development)",
    link: "https://www.washablez.com",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/corner.webp",
    title: "Corner Butchery Pitch Deck",
    link: "https://drive.google.com/file/d/1ySWBc6jFG7C0GhvU1dgQG8xS9aG94bCi/view?usp=drive_link",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/snapfruit.webp",
    title: "Snap Fruit Drink Brand Identity",
    link: "https://drive.google.com/file/d/1xfAkj84h_s4dHeWoFX_-3TqICvlWUdHU/view?usp=sharing",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/yta.webp",
    title: "YTA motion Graphics",
    link: "https://drive.google.com/file/d/1Wp7cCNnnXVV14I-WKJUYxCoqMWLZ2Fno/view?usp=sharing",
  },


];

export function BlurFadeDemo() {
  return (
    <section id="photos">
      <div className="grid md:grid-cols-2 gap-8 mt-10 justify-items-center">
        {works.map(({ imageUrl, title, link }, idx) => (
          <BlurFade
            key={title}
            delay={0.25 + idx * 0.05}
            inView
            className={`rounded-lg ${works[idx].background} p-4`}
          >
            <Link href={link} target="_blank" rel="noreferrer">
              <Image
                height={10000}
                width={10000}
                className="
                h-5/6 w-full object-cover rounded-lg"
        
              
       
                src={imageUrl}
                alt={`Random stock image ${idx + 1}`}
              />
              <h3 className="text-lg font-semibold p-4">{title}</h3>
            </Link>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}