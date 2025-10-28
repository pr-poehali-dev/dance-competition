import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const registrationLinks = [
    { title: "Регистрация классы", href: "https://forms.yandex.ru/registration-classes", icon: "Users" },
    { title: "Регистрация соло", href: "https://forms.yandex.ru/registration-solo", icon: "User" },
    { title: "Регистрация дуэт", href: "https://forms.yandex.ru/registration-duet", icon: "UserPlus" },
    { title: "Регистрация команда", href: "https://forms.yandex.ru/registration-team", icon: "UsersRound" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-screen flex items-center justify-center bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-90" />
        
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 mx-auto mb-6 flex items-center justify-center border-4 border-white">
              <span className="text-6xl">💃</span>
            </div>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-bold mb-6 tracking-wider">
            S1 CONTEST
          </h1>
          
          <p className="text-xl md:text-2xl font-light tracking-widest mb-12 text-gray-300">
            ТАНЦЕВАЛЬНЫЕ СОРЕВНОВАНИЯ
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-200 font-oswald text-lg tracking-wider px-8 py-6 transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="#registration">ЗАРЕГИСТРИРОВАТЬСЯ</a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-black font-oswald text-lg tracking-wider px-8 py-6 transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="#info">УЗНАТЬ БОЛЬШЕ</a>
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white" />
        </div>
      </section>

      <section id="info" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 animate-fade-in">
            О МЕРОПРИЯТИИ
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white border-2 border-black hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in">
              <div className="mb-4">
                <Icon name="Calendar" size={48} className="text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">ДАТА</h3>
              <p className="text-gray-600 text-lg">21 декабря 2024</p>
            </Card>
            
            <Card className="p-8 bg-white border-2 border-black hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="mb-4">
                <Icon name="MapPin" size={48} className="text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">МЕСТО</h3>
              <p className="text-gray-600 text-lg">Уточняется</p>
            </Card>
            
            <Card className="p-8 bg-white border-2 border-black hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="mb-4">
                <Icon name="Trophy" size={48} className="text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">КАТЕГОРИИ</h3>
              <p className="text-gray-600 text-lg">Классы, Соло, Дуэт, Команда</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="registration" className="py-20 px-4 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4">
            РЕГИСТРАЦИЯ
          </h2>
          <p className="text-center text-gray-400 text-xl mb-16">
            Выберите категорию участия
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {registrationLinks.map((link, index) => (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="p-8 bg-white text-black border-0 hover:bg-gray-900 hover:text-white transition-all duration-300 cursor-pointer hover:scale-105 animate-fade-in">
                  <div className="flex items-center gap-4">
                    <Icon name={link.icon} size={32} />
                    <h3 className="text-2xl font-bold tracking-wider">{link.title.toUpperCase()}</h3>
                  </div>
                </Card>
              </a>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-200 font-oswald text-xl tracking-wider px-12 py-8 transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="https://forms.yandex.ru/tickets" target="_blank" rel="noopener noreferrer">
                <Icon name="Ticket" size={24} className="mr-2" />
                ЗРИТЕЛЬСКИЕ БИЛЕТЫ
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
            ПОЛОЖЕНИЕ
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border-2 border-black bg-white px-6">
              <AccordionTrigger className="text-xl font-bold hover:no-underline">
                ОБЩИЕ ПОЛОЖЕНИЯ
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-lg pt-4">
                S1 CONTEST — это открытые танцевальные соревнования, направленные на развитие танцевальной культуры 
                и предоставление платформы для демонстрации навыков танцоров различных уровней подготовки.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-2 border-black bg-white px-6">
              <AccordionTrigger className="text-xl font-bold hover:no-underline">
                КАТЕГОРИИ УЧАСТНИКОВ
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-lg pt-4">
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Классы</strong> — групповые выступления учебных групп</li>
                  <li><strong>Соло</strong> — индивидуальные выступления</li>
                  <li><strong>Дуэт</strong> — выступления пар</li>
                  <li><strong>Команда</strong> — коллективные номера (от 3 человек)</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-2 border-black bg-white px-6">
              <AccordionTrigger className="text-xl font-bold hover:no-underline">
                ТРЕБОВАНИЯ К НОМЕРАМ
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-lg pt-4">
                <ul className="list-disc list-inside space-y-2">
                  <li>Продолжительность выступления: 1,5-3 минуты</li>
                  <li>Музыкальное сопровождение предоставляется участниками</li>
                  <li>Содержание должно соответствовать возрастной категории</li>
                  <li>Использование реквизита допускается</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-2 border-black bg-white px-6">
              <AccordionTrigger className="text-xl font-bold hover:no-underline">
                КРИТЕРИИ ОЦЕНКИ
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-lg pt-4">
                <ul className="list-disc list-inside space-y-2">
                  <li>Техника исполнения</li>
                  <li>Хореография и композиция</li>
                  <li>Артистизм и эмоциональность</li>
                  <li>Синхронность (для групповых номеров)</li>
                  <li>Оригинальность и креативность</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-2 border-black bg-white px-6">
              <AccordionTrigger className="text-xl font-bold hover:no-underline">
                НАГРАЖДЕНИЕ
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-lg pt-4">
                Победители и призёры в каждой категории получают дипломы и призы. 
                Все участники награждаются сертификатами участника S1 CONTEST.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <footer className="bg-black text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-6">СЛЕДИТЕ ЗА НАМИ</h3>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white font-oswald text-lg tracking-wider px-8 py-6 transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="https://instagram.com/s1contest" target="_blank" rel="noopener noreferrer">
                <Icon name="Instagram" size={24} className="mr-2" />
                INSTAGRAM
              </a>
            </Button>
          </div>
          
          <div className="border-t border-gray-800 pt-8 mt-8">
            <p className="text-gray-400 text-sm tracking-wider">
              © 2024 S1 CONTEST. ВСЕ ПРАВА ЗАЩИЩЕНЫ.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
