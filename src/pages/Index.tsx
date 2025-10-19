import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat print:hidden"
        style={{ 
          backgroundImage: 'url(https://cdn.poehali.dev/files/db139a82-fae5-4c68-9986-ba9f88505647.jpeg)',
          opacity: 0.4
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#FEF7CD]/70 via-[#FDE1D3]/70 to-[#F2FCE2]/70" />
      <div className="relative container mx-auto px-4 py-12 max-w-4xl">
        
        <div className="text-right mb-6 print:hidden">
          <Button onClick={handlePrint} className="bg-[#F97316] hover:bg-[#EA6C0C]">
            <Icon name="Printer" size={20} className="mr-2" />
            Распечатать письмо
          </Button>
        </div>
        
        <section className="text-center mb-16 animate-fade-in">
          <div className="mb-6">
            <Icon name="Heart" size={64} className="mx-auto text-[#F97316] mb-4" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Любимый папочка! 💞
          </h1>
          <p className="text-xl md:text-2xl text-foreground font-medium">
            Поздравляем тебя с Днем отца!
          </p>
        </section>

        <Card className="mb-12 p-8 md:p-12 bg-white/80 backdrop-blur-sm shadow-xl animate-scale-in">
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
              Спасибо тебе за то, что ты есть. За твои объятия, за твои песенки, за то, что подбрасываешь меня высоко-высоко, и я смеюсь от радости!
            </p>
            <p className="font-semibold text-xl">
              Люблю тебя, папочка! Агу-агу! 👶💕
            </p>
          </div>
        </Card>

        <Separator className="my-12" />

        <div className="text-center animate-scale-in">
          <div className="mb-6">
            <Icon name="Heart" size={48} className="mx-auto text-[#F97316]" />
          </div>
          <p className="text-2xl font-bold text-primary mb-2">
            С любовью и благодарностью
          </p>
          <p className="text-lg text-muted-foreground">
            Твоя семья
          </p>
        </div>


      </div>
    </div>
  );
};

export default Index;