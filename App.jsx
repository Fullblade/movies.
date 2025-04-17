
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const movies = [
  {
    id: 1,
    title_en: "Attack on Titan",
    title_ar: "الهجوم على العمالقة",
    video_url: "https://www.youtube.com/embed/MGRm4IzK1SQ",
    subtitles: {
      en: "https://example.com/subtitles/attack_on_titan.en.vtt",
      ar: "https://example.com/subtitles/attack_on_titan.ar.vtt",
    },
  },
  {
    id: 2,
    title_en: "Inception",
    title_ar: "استهلال",
    video_url: "https://www.youtube.com/embed/YoHD9XEInc0",
    subtitles: {
      en: "https://example.com/subtitles/inception.en.vtt",
      ar: "https://example.com/subtitles/inception.ar.vtt",
    },
  },
];

export default function App() {
  const [lang, setLang] = useState("en");
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between mb-4">
        <h1 className="text-3xl font-bold">
          {lang === "en" ? "Movies & Anime" : "أفلام وأنمي"}
        </h1>
        <Button onClick={() => setLang(lang === "en" ? "ar" : "en")}>🌐 {lang === "en" ? "عربي" : "English"}</Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {movies.map((movie) => (
          <Card key={movie.id} onClick={() => setSelectedMovie(movie)} className="cursor-pointer">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold">
                {lang === "en" ? movie.title_en : movie.title_ar}
              </h2>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">
          {lang === "en" ? "Now Playing" : "يتم التشغيل الآن"}: {lang === "en" ? selectedMovie.title_en : selectedMovie.title_ar}
        </h2>
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-xl">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={selectedMovie.video_url}
            title={selectedMovie.title_en}
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          {lang === "en"
            ? "Note: Subtitles will appear if supported by the video."
            : "ملاحظة: ستظهر الترجمة إذا كانت مدعومة من الفيديو."}
        </p>
      </div>
    </div>
  );
}
