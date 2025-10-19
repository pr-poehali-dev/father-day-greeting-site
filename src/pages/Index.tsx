import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showMusicPrompt, setShowMusicPrompt] = useState(true);
  const [audio] = useState(() => new Audio('https://www.bensound.com/bensound-music/bensound-tenderness.mp3'));

  useEffect(() => {
    audio.loop = true;
    audio.volume = 0.3;
    return () => {
      audio.pause();
    };
  }, [audio]);

  const toggleMusic = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const startMusic = () => {
    audio.play();
    setIsPlaying(true);
    setShowMusicPrompt(false);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {showMusicPrompt && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center animate-fade-in">
          <div className="bg-white rounded-3xl p-8 md:p-12 max-w-md mx-4 text-center shadow-2xl border-4 border-pink-300 relative">
            <div className="absolute -top-6 -left-6 text-5xl animate-bounce">🎵</div>
            <div className="absolute -top-6 -right-6 text-5xl animate-bounce delay-100">💕</div>
            <div className="mb-6">
              <Icon name="Music" size={64} className="mx-auto text-pink-500 mb-4" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Включить музыку?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Нежная мелодия создаст особую атмосферу для чтения письма 💝
            </p>
            <div className="space-y-3">
              <Button 
                onClick={startMusic} 
                className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white text-lg py-6"
              >
                <Icon name="Play" size={24} className="mr-2" />
                Да, включить музыку! 🎶
              </Button>
              <Button 
                onClick={() => setShowMusicPrompt(false)} 
                variant="outline"
                className="w-full border-2 border-gray-300 hover:bg-gray-100"
              >
                Нет, спасибо
              </Button>
            </div>
          </div>
        </div>
      )}
      
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 text-6xl">💕</div>
        <div className="absolute top-32 right-20 text-5xl">⭐</div>
        <div className="absolute bottom-20 left-32 text-5xl">🎈</div>
        <div className="absolute bottom-40 right-16 text-6xl">💝</div>
        <div className="absolute top-1/2 left-20 text-4xl">✨</div>
        <div className="absolute top-1/3 right-32 text-5xl">🌟</div>
      </div>
      
      <div className="relative container mx-auto px-4 py-12 max-w-4xl">
        
        <div className="flex justify-between items-center mb-6 print:hidden">
          <Button onClick={toggleMusic} className="bg-pink-500 hover:bg-pink-600">
            <Icon name={isPlaying ? "Pause" : "Play"} size={20} className="mr-2" />
            {isPlaying ? 'Пауза' : 'Включить музыку'}
          </Button>
          <Button onClick={handlePrint} className="bg-[#F97316] hover:bg-[#EA6C0C]">
            <Icon name="Printer" size={20} className="mr-2" />
            Распечатать письмо
          </Button>
        </div>
        
        <section className="text-center mb-16 animate-fade-in">
          <div className="mb-6">
            <Icon name="Heart" size={64} className="mx-auto text-[#F97316] drop-shadow-lg mb-4" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 drop-shadow-sm mb-4">
            Любимый папочка! 💞
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 drop-shadow-sm font-medium">
            Поздравляем тебя с Днем отца!
          </p>
        </section>

        <div className="mb-12 p-8 md:p-12 bg-white/60 backdrop-blur-md rounded-3xl shadow-2xl animate-scale-in border-4 border-dashed border-pink-300 print:bg-white print:border-gray-200 relative">
          <div className="absolute -top-4 -left-4 text-4xl">💕</div>
          <div className="absolute -top-4 -right-4 text-4xl">💕</div>
          <div className="absolute -bottom-4 -left-4 text-4xl">💕</div>
          <div className="absolute -bottom-4 -right-4 text-4xl">💕</div>
          <div className="absolute top-1/4 -left-3 text-3xl">⭐</div>
          <div className="absolute top-1/4 -right-3 text-3xl">⭐</div>
          <div className="absolute bottom-1/4 -left-3 text-3xl">✨</div>
          <div className="absolute bottom-1/4 -right-3 text-3xl">✨</div>
          
          <div className="flex items-center gap-3 mb-6">
            <Icon name="Mail" size={32} className="text-[#F97316]" />
            <h2 className="text-3xl font-bold text-primary">Письмо</h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-2xl font-semibold">
              Папочка!
            </p>
            <p>
              Я еще маленький и не умею писать, но мама помогает мне. Хочу сказать тебе важные слова!
            </p>
            <p>
              Я помню твой голос, когда ты разговаривал со мной через мамин животик. Помню, как ты гладил меня, и я так радовался, что кувыркался! Мама говорила, что ей было больно, но она всегда смеялась.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="rounded-xl overflow-hidden shadow-lg border-2 border-pink-200">
                <img 
                  src="https://cdn.poehali.dev/files/5b761712-c440-4b4b-b2d4-27ce3974bebb.jpeg" 
                  alt="Мама ждёт малыша" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg border-2 border-pink-200">
                <img 
                  src="https://cdn.poehali.dev/files/43d801f4-de89-4be4-b918-b9ecb7f39e5e.jpeg" 
                  alt="Семейное фото" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <p>
              Папа, когда я родился, ты взял меня на ручки, и я сразу понял — ты мой самый родной человек! Твои большие и сильные руки держали меня так бережно, как будто я самое дорогое на свете.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="rounded-xl overflow-hidden shadow-lg border-2 border-pink-200">
                <img 
                  src="https://cdn.poehali.dev/files/e923910f-b9e9-477e-a04f-609e99d6364c.jpeg" 
                  alt="Первые часы жизни с мамой" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg border-2 border-pink-200">
                <img 
                  src="https://cdn.poehali.dev/files/151f29f9-f26a-4bcb-88fd-ff363eca2967.jpeg" 
                  alt="Первая встреча с папой" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            <div className="my-6 rounded-xl overflow-hidden shadow-lg border-2 border-pink-200">
              <img 
                src="https://cdn.poehali.dev/files/6d17acd5-3f2a-4e13-a286-d4e252b1bfb8.jpeg" 
                alt="Наша счастливая семья" 
                className="w-full h-auto"
              />
            </div>
            <p>
              Сейчас мне 10 месяцев, и каждый день я вижу, как ты заботишься о нас с мамой. Когда ты приходишь с работы уставший, но все равно играешь со мной — это самое счастливое время!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="rounded-xl overflow-hidden shadow-lg border-2 border-pink-200">
                <img 
                  src="https://cdn.poehali.dev/files/182d9c12-ab3f-49d9-afd1-5bcba095e35d.jpeg" 
                  alt="Малыш-повар" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg border-2 border-pink-200">
                <img 
                  src="https://cdn.poehali.dev/files/21faffe9-a09f-4a94-aba4-d2c92244303d.jpeg" 
                  alt="Счастливый малыш" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            <div className="my-6 rounded-xl overflow-hidden shadow-lg border-2 border-pink-200">
              <img 
                src="https://cdn.poehali.dev/files/89ccccd1-b01f-4be7-8668-f9ff00cbad67.jpeg" 
                alt="Нежность и забота" 
                className="w-full h-auto"
              />
            </div>

            <p>
              Я еще не умею говорить "папа", но скоро обязательно скажу! Это будет мое первое слово, обещаю!
            </p>
            <p>
              Папочка, я хочу попросить тебя о самом важном... Давай сделаем так, чтобы мамочка всегда улыбалась и была самой счастливой на свете! 
            </p>
            <p>
              Когда мама плачет, мне тоже грустно. А когда она счастлива — весь наш дом наполняется светом и теплом! Папа, ты же самый сильный и добрый, ты можешь сделать маму счастливой каждый день!
            </p>
            <p>
              Я очень тобой горжусь и хочу быть таким же заботливым, как ты. Давай вместе будем беречь нашу любимую мамочку и дарить ей радость! 💝
            </p>
            <p>
              Я вас с мамочкой очень сильно люблю!
            </p>
            
            <div className="grid grid-cols-2 gap-4 my-6">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://cdn.poehali.dev/files/f11d1ed8-8726-4dc0-a406-471d1a55fabb.jpeg" 
                  alt="Купание" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://cdn.poehali.dev/files/87fad2d3-bc1e-437c-a74c-8517dc227706.jpeg" 
                  alt="Игры" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <p>
              Спасибо тебе за то, что ты есть. За твои объятия, за твои песенки, за то, что подбрасываешь меня высоко-высоко, и я смеюсь от радости!
            </p>
            <div className="my-6 rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://cdn.poehali.dev/files/99b0a990-a157-4637-9693-8203a58f83fd.jpeg" 
                alt="Наша семья" 
                className="w-full h-auto"
              />
            </div>

            <p className="font-semibold text-xl">
              Люблю тебя, папочка! Агу-агу! 👶💕
            </p>
          </div>
        </div>

        <Separator className="my-12 print:hidden" />

        <div className="text-center animate-scale-in">
          <div className="mb-6">
            <Icon name="Heart" size={48} className="mx-auto text-[#F97316] drop-shadow-lg" />
          </div>
          <p className="text-2xl font-bold text-gray-800 drop-shadow-sm mb-2">
            С любовью и благодарностью
          </p>
          <p className="text-lg text-gray-700 drop-shadow-sm">
            Твоя семья
          </p>
        </div>


      </div>
    </div>
  );
};

export default Index;