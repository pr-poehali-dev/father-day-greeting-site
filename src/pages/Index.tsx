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
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
            С Днём отца!
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Дорогой папа, это письмо для тебя
          </p>
        </section>

        <Card className="mb-12 p-8 md:p-12 bg-white/80 backdrop-blur-sm shadow-xl animate-scale-in">
          <div className="flex items-center gap-3 mb-6">
            <Icon name="Star" size={32} className="text-[#F97316]" />
            <h2 className="text-3xl font-bold text-primary">Поздравление</h2>
          </div>
          <p className="text-lg leading-relaxed text-foreground mb-4">
            Папа, в этот особенный день хочу сказать тебе, как сильно я тебя люблю и ценю. 
            Ты для меня не просто отец — ты мой герой, мой наставник, мой лучший друг.
          </p>
          <p className="text-lg leading-relaxed text-foreground">
            Каждый день рядом с тобой — это урок мудрости, доброты и силы духа. 
            Спасибо за то, что ты есть в моей жизни!
          </p>
        </Card>

        <Card className="mb-12 p-8 md:p-12 bg-white/80 backdrop-blur-sm shadow-xl animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <Icon name="Gift" size={32} className="text-[#F97316]" />
            <h2 className="text-3xl font-bold text-primary">Благодарность</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <Icon name="Check" size={24} className="text-[#F97316] mt-1 flex-shrink-0" />
              <p className="text-lg leading-relaxed">
                <strong>За твою любовь</strong> — безусловную, искреннюю и вечную
              </p>
            </div>
            <div className="flex items-start gap-4">
              <Icon name="Check" size={24} className="text-[#F97316] mt-1 flex-shrink-0" />
              <p className="text-lg leading-relaxed">
                <strong>За твою поддержку</strong> — в каждой моей победе и поражении
              </p>
            </div>
            <div className="flex items-start gap-4">
              <Icon name="Check" size={24} className="text-[#F97316] mt-1 flex-shrink-0" />
              <p className="text-lg leading-relaxed">
                <strong>За твою мудрость</strong> — которая помогает мне расти каждый день
              </p>
            </div>
            <div className="flex items-start gap-4">
              <Icon name="Check" size={24} className="text-[#F97316] mt-1 flex-shrink-0" />
              <p className="text-lg leading-relaxed">
                <strong>За твой пример</strong> — как быть настоящим человеком
              </p>
            </div>
          </div>
        </Card>

        <Card className="mb-12 p-8 md:p-12 bg-white/80 backdrop-blur-sm shadow-xl animate-scale-in">
          <div className="flex items-center gap-3 mb-6">
            <Icon name="Mail" size={32} className="text-[#F97316]" />
            <h2 className="text-3xl font-bold text-primary">Письмо</h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Дорогой папа!
            </p>
            <p>
              Пишу тебе это письмо, потому что не всегда легко сказать вслух то, что лежит на сердце. 
              Но сегодня, в День отца, я хочу, чтобы ты знал — ты самый важный человек в моей жизни.
            </p>
            <p>
              Помню, как в детстве ты учил меня кататься на велосипеде, держа за седло и бежав рядом. 
              Помню твои рассказы перед сном, которые уносили меня в мир приключений. 
              Помню, как ты всегда находил время выслушать меня, даже когда был очень занят.
            </p>
            <p>
              Сейчас, когда я сам стал взрослее, я понимаю, как много ты для меня сделал и продолжаешь делать. 
              Твоя сила — не в громких словах, а в тихих поступках. Твоя любовь — не в показных жестах, 
              а в ежедневной заботе и внимании.
            </p>
            <p>
              Спасибо тебе за всё, папа. За то, что веришь в меня, даже когда я сам в себя не верю. 
              За то, что учишь меня не сдаваться и идти вперёд. За то, что ты просто есть.
            </p>
            <p className="font-semibold">
              Я люблю тебя всем сердцем!
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
