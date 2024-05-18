import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Search,
  MapPin,
  Star,
  Ambulance,
  Headset,
  HandCoins,
  BedSingle,
} from "lucide-react";
import { Link } from "react-router-dom";

const dummy_doctors = [
  {
    name: "Kidane Alemu",
    rate: "4.5 (17 reviews)",
    hospital: "Tikur Anbessa",
    price: 20,
    online: false,
    img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Mulu Assefa",
    rate: "4.5 (17 reviews)",
    hospital: "Addis General",
    price: 18,
    online: false,
    img: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Alem Fikru",
    rate: "4.5 (17 reviews)",
    hospital: "St. Paul",
    price: 22,
    online: true,
    img: "https://img.freepik.com/premium-photo/portrait-glad-smiling-doctor-white-uniform-standing-with-crossed-hands-white_168410-786.jpg",
  },
  {
    name: "Sara Bekele",
    rate: "4.5 (17 reviews)",
    hospital: "St. Peter",
    price: 30,
    online: false,
    img: "https://source.unsplash.com/random/200x200",
  },
  {
    name: "Miki Tadesse",
    rate: "4.5 (17 reviews)",
    hospital: "Menilik II",
    price: 19,
    img: "https://source.unsplash.com/random/400x200",
    online: true,
  },
  {
    name: "Liya Mekonnen",
    rate: "4.5 (17 reviews)",
    hospital: "Ras Desta",
    price: 27,
    online: true,
    img: "https://source.unsplash.com/random/300x200",
  },
  {
    name: "Abebe Dinku",
    rate: "4.5 (17 reviews)",
    hospital: "Arsho Advanced",
    price: 20,
    online: false,
    img: "https://source.unsplash.com/random/700x200",
  },
  {
    name: "Helen Kebede",
    rate: "4.5 (17 reviews)",
    hospital: "Hayat Hospital",
    price: 23,
    online: true,
    img: "https://source.unsplash.com/random/200x300",
  },
  {
    name: "Tigist Tesfaye",
    rate: "4.5 (17 reviews)",
    hospital: "Myungsung Christian",
    price: 21,
    online: true,
    img: "https://source.unsplash.com/random/100x200",
  },
];

export function AppDocs() {
  return (
    <div className="flex items-center justify-start gap-4 h-full">
      <Avatar className="w-[30%] h-full rounded-md">
        <AvatarImage src={dummy_doctors[1].img} />
        <AvatarFallback>Docpic</AvatarFallback>
      </Avatar>
      <div className="space-y-1 text-white">
        <h2 className="text-lg font-semibold">Dr. Lemlem Abate</h2>
        <h2 className="text-xs font-light">cardiac</h2>
        <h2 className="text-xs font-semibold">June 21, 2:00 PM</h2>
      </div>
    </div>
  );
}

export function CarouselSpacing() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {dummy_doctors.map((item, index) => (
          <CarouselItem
            key={index}
            className={item?.online ? "basis-1/3" : "hidden"}
          >
            <Link to={"/detail"} state={{ data: item }}>
              <div className="flex aspect-square items-center justify-center p-0">
                <Avatar className="bg-cover h-full rounded-xl overflow-hidden w-full ">
                  <AvatarImage src={item.img} />
                  <AvatarFallback>doc img</AvatarFallback>
                </Avatar>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-4">
          <MapPin className="bg-secondary h-[2.5em] rounded-md w-[2.5em] bg-red-200 px-2 py-2" />
          <div>Alem</div>
        </div>

        <Avatar className="w-[2.5em] h-[2.4em] rounded-md">
          <AvatarImage src="https://img.freepik.com/premium-photo/cute-ethiopian-woman-face-cute-female-generate-ai_98402-30673.jpg" />
          <AvatarFallback>Pp</AvatarFallback>
        </Avatar>
      </div>

      <Label htmlFor="finddoc" className="text-3xl">
        Find Your Doctor
      </Label>
      <div className="flex w-full h-[3em] items-center space-x-2">
        <Input
          className="h-full w-full"
          type="text"
          name="finddoc"
          placeholder="search"
        />
        <Button className="h-full" type="submit">
          <Search />
        </Button>
      </div>

      <div className="flex justify-between items-center">
        <h1 className="text-xl font-medium">Services</h1>
      </div>
      <div className="relative h-[4em] flex gap-4 w-full justify-center items-center">
        <div className="w-full h-full text-blue-900 bg-blue-200 flex justify-center items-center rounded-lg">
          <BedSingle />
        </div>
        <div className="w-full h-full text-yellow-900 bg-yellow-200 flex justify-center items-center rounded-lg">
          <HandCoins />
        </div>
        <div className="w-full text-slate-900 h-full flex justify-center items-center bg-slate-200 rounded-lg">
          <Ambulance />
        </div>
        <div className="text-red-900 w-full h-full flex justify-center items-center bg-red-200 rounded-lg">
          <Headset />
        </div>
      </div>

      <div className="bg-green-100 px-3 flex h-[12em] w-full  rounded-[20px] overflow-hidden">
        <div className="py-6 flex flex-col justify-around items-start w-2/3  h-full">
          <h1 className="text-xl font-medium">Get The Best Medical Service</h1>
          <h1 className="text-sm font-medium">From the best Doctors</h1>
        </div>
        <div className="flex flex-col justify-around items-start w-1/3  h-full">
          <img
            className="h-full"
            src="https://images.rawpixel.com/image_png_social_square/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlNl9hX3Bob3RvX29mX2FfbWlkZGxlX2FnZV9mZW1hbGVfaW5kaWFuX2RvY3Rvcl9pc19mZGVlZjk4NC04NDQwLTQyOWEtOGViMy1mMDIxZTJkYWRlZTNfMS5wbmc.png"
            alt=""
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <h1 className="text-xl font-medium">Upcoming Appointments</h1>
      </div>
      <div className="relative flex justify-center items-center">
        <div className="bg-primary p-4 flex justify-between items-center w-full z-10 h-[7em]  rounded-[20px]">
          <AppDocs />
        </div>
        <div className="absolute bg-primary opacity-30 z-0 top-[.6em] px-4 w-[90%] h-[7em] rounded-[20px]"></div>
      </div>

      <div className="flex justify-between items-center">
        <Label className="text-xl font-medium">Live Doctors</Label>
        <Label className="text-sm font-light">See All</Label>
      </div>
      <div className=" w-full">
        <CarouselSpacing />
      </div>

      <div className="flex justify-between items-center">
        <Label className="text-xl font-medium">Doctors</Label>
        <Label className="text-sm font-light">See All</Label>
      </div>

      <div className="flex gap-4 flex-col">
        {dummy_doctors.map((item, _) => (
          <Link to={"/detail"} state={{ data: item }}>
            <div className="relative h-[5.5em] flex gap-4 w-full">
              <div className="h-full w-[25%]">
                <Avatar className="bg-cover h-full rounded-xl overflow-hidden w-full">
                  <AvatarImage src={item.img} />
                  <AvatarFallback>{item.name}</AvatarFallback>
                </Avatar>
              </div>
              <div className="space-y-1 py-2 flex h-full text-black  justify-between items-start flex-col">
                <h2 className="text-lg font-semibold">Dr. {item.name}</h2>
                <h2 className="text-xs font-light">{item.hospital}</h2>
                <h2 className="text-xs font-bold flex gap-2">
                  <Star color="#dccf18" className="h-4 w-4" />
                  {item.rate}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
