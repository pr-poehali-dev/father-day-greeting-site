import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-emerald-400 via-emerald-500 to-teal-600">
      <div className="relative container mx-auto px-4 py-12 max-w-4xl">
        
        <div className="text-right mb-6 print:hidden">
          <Button onClick={handlePrint} className="bg-[#F97316] hover:bg-[#EA6C0C]">
            <Icon name="Printer" size={20} className="mr-2" />
            Распечатать письмо
          </Button>
        </div>
        
        <section className="text-center mb-16 animate-fade-in">
          <div className="mb-6">
            <Icon name="Heart" size={64} className="mx-auto text-white drop-shadow-lg mb-4" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-4">
            Любимый папочка! 💞
          </h1>
          <p className="text-xl md:text-2xl text-white drop-shadow-md font-medium">
            Поздравляем тебя с Днем отца!
          </p>
        </section>

        <div className="mb-12 p-8 md:p-12 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl animate-scale-in border border-white/30 print:bg-white print:border-gray-200">
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
            <p>
              Папа, когда я родился, ты взял меня на ручки, и я сразу понял — ты мой самый родной человек! Твои большие и сильные руки держали меня так бережно, как будто я самое дорогое на свете.
            </p>
            <p>
              Сейчас мне 10 месяцев, и каждый день я вижу, как ты заботишься о нас с мамой. Когда ты приходишь с работы уставший, но все равно играешь со мной — это самое счастливое время!
            </p>
            <p>
              Я еще не умею говорить "папа", но скоро обязательно скажу! Это будет мое первое слово, обещаю!
            </p>
            <p>
              Папочка, не знаю почему, но мама много плакала, я это чувствовал.
            </p>
            <p>
              Но даже в такие моменты, она говорила, что гордится тобой! Я тоже тобой горжусь и хочу быть таким как ты!
            </p>
            <p>
              Я вас с мамочкой очень сильно люблю!
            </p>
            <p>
              Спасибо тебе за то, что ты есть. За твои объятия, за твои песенки, за то, что подбрасываешь меня высоко-высоко, и я смеюсь от радости!
            </p>
            <p className="font-semibold text-xl">
              Люблю тебя, папочка! Агу-агу! 👶💕
            </p>
          </div>
        </div>

        <Separator className="my-12 print:hidden" />

        <div className="text-center animate-scale-in">
          <div className="mb-6">
            <Icon name="Heart" size={48} className="mx-auto text-white drop-shadow-lg" />
          </div>
          <p className="text-2xl font-bold text-white drop-shadow-lg mb-2">
            С любовью и благодарностью
          </p>
          <p className="text-lg text-white drop-shadow-md">
            Твоя семья
          </p>
        </div>


      </div>
    </div>
  );
};

export default Index;