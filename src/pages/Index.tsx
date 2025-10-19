import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FEF7CD] via-[#FDE1D3] to-[#F2FCE2]">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        
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
            <Icon name="Star" size={32} className="text-[#F97316]" />
            <h2 className="text-3xl font-bold text-primary">Поздравление</h2>
          </div>
          <p className="text-lg leading-relaxed text-foreground mb-4">
            Как здорово, что в нашей жизни появился еще один теплый праздник.
          </p>
          <p className="text-2xl leading-relaxed text-foreground mb-4 font-semibold text-center">
            Мы тебя очень сильно любим!
          </p>
          <p className="text-xl leading-relaxed text-foreground mb-4 text-center">
            Я - безмерно! А мама - безумно 😍
          </p>
          <p className="text-lg leading-relaxed text-foreground">
            Папочка, ты сильный, смелый, добрый, любящий, целеустремленный, заботливый, работящий, смешной, идейный!
          </p>
          <p className="text-base leading-relaxed text-muted-foreground italic mt-4">
            Все это мама говорила мне, когда я был еще в ее животике.
          </p>
          <p className="text-lg leading-relaxed text-foreground mt-6">
            Не знаю, почему, но мама много плакала.
          </p>
          <p className="text-lg leading-relaxed text-foreground mt-4">
            Но всегда наши два с ней сердечка ♥️ бились сильнее и теплее, когда мы думали про тебя.
          </p>
          <p className="text-lg leading-relaxed text-foreground mt-6">
            А когда ты меня гладил, я кувыркался в пузике от счастья, не осознавая, что толкаю нашу мамочку.
          </p>
          <p className="text-lg leading-relaxed text-foreground mt-4">
            Папа, я знаю тебя не 10 месяцев, я знаю тебя 17 месяцев!
          </p>
          <p className="text-lg leading-relaxed text-foreground mt-4">
            И каждый из дней, я слышал, что мама гордится тобой!
          </p>
          <p className="text-xl leading-relaxed text-foreground mt-6 font-semibold">
            Папа, я тоже горжусь тобой,
          </p>
          <p className="text-lg leading-relaxed text-foreground mt-4">
            Папочка, я горжусь что ты выбрал меня.
          </p>
          <p className="text-lg leading-relaxed text-foreground mt-2">
            Что вы с мамочкой выбрали меня.
          </p>
        </Card>

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

        <Card className="mb-12 p-8 md:p-12 bg-white/80 backdrop-blur-sm shadow-xl animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <Icon name="Camera" size={32} className="text-[#F97316]" />
            <h2 className="text-3xl font-bold text-primary">Фотогалерея воспоминаний</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="aspect-square bg-gradient-to-br from-[#E5DEFF] to-[#FFDEE2] rounded-lg flex items-center justify-center shadow-md hover:scale-105 transition-transform">
              <div className="text-center p-4">
                <Icon name="Image" size={48} className="mx-auto mb-2 text-primary" />
                <p className="text-sm text-muted-foreground">Первый день в школе</p>
              </div>
            </div>
            <div className="aspect-square bg-gradient-to-br from-[#FFDEE2] to-[#FDE1D3] rounded-lg flex items-center justify-center shadow-md hover:scale-105 transition-transform">
              <div className="text-center p-4">
                <Icon name="Image" size={48} className="mx-auto mb-2 text-primary" />
                <p className="text-sm text-muted-foreground">Рыбалка вместе</p>
              </div>
            </div>
            <div className="aspect-square bg-gradient-to-br from-[#F2FCE2] to-[#E5DEFF] rounded-lg flex items-center justify-center shadow-md hover:scale-105 transition-transform">
              <div className="text-center p-4">
                <Icon name="Image" size={48} className="mx-auto mb-2 text-primary" />
                <p className="text-sm text-muted-foreground">День рождения</p>
              </div>
            </div>
            <div className="aspect-square bg-gradient-to-br from-[#FEF7CD] to-[#F2FCE2] rounded-lg flex items-center justify-center shadow-md hover:scale-105 transition-transform">
              <div className="text-center p-4">
                <Icon name="Image" size={48} className="mx-auto mb-2 text-primary" />
                <p className="text-sm text-muted-foreground">Семейный отдых</p>
              </div>
            </div>
            <div className="aspect-square bg-gradient-to-br from-[#FFDEE2] to-[#FEF7CD] rounded-lg flex items-center justify-center shadow-md hover:scale-105 transition-transform">
              <div className="text-center p-4">
                <Icon name="Image" size={48} className="mx-auto mb-2 text-primary" />
                <p className="text-sm text-muted-foreground">Выпускной</p>
              </div>
            </div>
            <div className="aspect-square bg-gradient-to-br from-[#E5DEFF] to-[#FDE1D3] rounded-lg flex items-center justify-center shadow-md hover:scale-105 transition-transform">
              <div className="text-center p-4">
                <Icon name="Image" size={48} className="mx-auto mb-2 text-primary" />
                <p className="text-sm text-muted-foreground">Просто мы</p>
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground text-center mt-6 italic">
            Каждая фотография — это момент счастья, которым мы делились вместе
          </p>
        </Card>

        <Card className="mb-12 p-8 md:p-12 bg-white/80 backdrop-blur-sm shadow-xl animate-scale-in">
          <div className="flex items-center gap-3 mb-6">
            <Icon name="Book" size={32} className="text-[#F97316]" />
            <h2 className="text-3xl font-bold text-primary">Любимые воспоминания</h2>
          </div>
          <div className="space-y-6">
            <div className="border-l-4 border-[#F97316] pl-6 py-2">
              <p className="text-lg leading-relaxed">
                Когда ты учил меня чинить велосипед, и мы вместе возились в гараже до позднего вечера. 
                Это был не просто урок механики — это был урок терпения и внимания к деталям.
              </p>
            </div>
            <div className="border-l-4 border-[#F97316] pl-6 py-2">
              <p className="text-lg leading-relaxed">
                Наши воскресные прогулки в парке, где ты рассказывал истории из своего детства. 
                Я узнавал тебя с новой стороны и понимал, что мы похожи больше, чем кажется.
              </p>
            </div>
            <div className="border-l-4 border-[#F97316] pl-6 py-2">
              <p className="text-lg leading-relaxed">
                Тот момент, когда я был в отчаянии, а ты просто обнял меня и сказал: "Всё будет хорошо". 
                И я поверил. Потому что если ты так сказал — значит, так и будет.
              </p>
            </div>
          </div>
        </Card>

        <Card className="mb-12 p-8 md:p-12 bg-white/80 backdrop-blur-sm shadow-xl animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <Icon name="Sparkles" size={32} className="text-[#F97316]" />
            <h2 className="text-3xl font-bold text-primary">Мои пожелания</h2>
          </div>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              В этот особенный день желаю тебе:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start gap-3">
                <span className="text-[#F97316] text-2xl">•</span>
                <span>Крепкого здоровья и сил на долгие годы вперёд</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#F97316] text-2xl">•</span>
                <span>Радости в каждом новом дне и счастья в простых моментах</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#F97316] text-2xl">•</span>
                <span>Осуществления всех твоих мечт и планов</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#F97316] text-2xl">•</span>
                <span>Гордости за своих детей, которые учатся у лучшего отца</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#F97316] text-2xl">•</span>
                <span>Времени для любимых увлечений и новых открытий</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#F97316] text-2xl">•</span>
                <span>Тепла и любви от всей нашей семьи каждый день</span>
              </li>
            </ul>
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