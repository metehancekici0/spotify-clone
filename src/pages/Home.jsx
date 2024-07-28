import React from "react";
import MiniBoxes from "../components/Content/MiniBoxes";
import Section from "../components/Content/Section";

function Home() {
  const items = [
    {
      id: 1,
      title: "Daily Mix 1",
      description: "Müslüm Gürses, Cansever, Metin Işık, Azer Bülbül",
      artist: "Müslüm Gürses",
      image: "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb27b3b0e9154e12899b9ff22e/1/tr/default",
      type: "album",
      src: "https://cdn.freesound.org/previews/746/746356_8432823-lq.mp3",
    },
    {
      id: 2,
      title: "Ferdi Tayfur",
      description: "Sanatçı",
      artist: "Ferdi Tayfur",
      image: "./img/e.jpg",
      type: "artist",
      src: "https://cdn.freesound.org/previews/729/729987_1882330-lq.mp3",
    },

    {
      id: 3,
      title: "Daily Mix 3",
      description: "Melek Mosso, Seksendört, Müslüm Gürses, Cansever, Metin Işık, Azer Bülbül",
      artist: "Cansever",
      image: "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb27b3b0e9154e12899b9ff22e/1/tr/default",
      type: "podcast",
      src: "https://cdn.freesound.org/previews/729/729992_1882330-lq.mp3",
    },
    {
      id: 4,
      title: "Ahmet Kaya",
      description: "Sanatçı",
      artist: "Ahmet Kaya",
      image: "./img/d.jpg",
      type: "artist",
      src: "https://cdn.freesound.org/previews/729/729990_1882330-lq.mp3",
    },
    {
      id: 5,
      title: "Daily Mix 2",
      description: "Mohamed Aly, Yıldıray Gürgen, Azer Bülbül",
      artist: "Azer Bülbül",
      image: "https://dailymix-images.scdn.co/v2/img/ab67616d0000b2738de8db12905fb70b8bfa8bb8/2/tr/default",
      type: "album",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
    {
      id: 6,
      title: "Metin Işık",
      description: "Sanatçı",
      artist: "Metin Işık",
      image: "./img/f.jpg",
      type: "artist",
      src: "https://cdn.freesound.org/previews/729/729987_1882330-lq.mp3",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <MiniBoxes />
      <Section title="Metehan Çekici İçin Derlendi" more="/link" items={items} />
      <Section title="Sanatçıların en iyileri" more="/link" items={items} />
    </div>
  );
}

export default Home;
