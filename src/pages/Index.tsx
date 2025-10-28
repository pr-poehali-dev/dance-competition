import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";

const Index = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  const buttons = [
    { title: "Положение", href: "https://forms.yandex.ru/положение", variant: "default" },
    { title: "Регистрация классы", href: "https://forms.yandex.ru/регистрация-классы", variant: "primary" },
    { title: "Регистрация Соло", href: "https://forms.yandex.ru/регистрация-соло", variant: "secondary" },
    { title: "Регистрация дуэт", href: "https://forms.yandex.ru/регистрация-дуэт", variant: "primary" },
    { title: "Регистрация команда", href: "https://forms.yandex.ru/регистрация-команда", variant: "secondary" },
    { title: "Зрительские билеты 21 декабря", href: "https://forms.yandex.ru/зрительские-билеты", variant: "warning" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#667eea] to-[#764ba2] flex flex-col">
      <div className="container mx-auto px-5 py-10 flex-1">
        <header className="text-center mb-16">
          <div className="w-36 h-36 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
            <span className="text-6xl">💃</span>
          </div>
          
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-4 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.3)]">
            Танцевальные соревнования
          </h1>
          
          <p className="text-white text-xl opacity-90">
            Присоединяйтесь к нам и покажите свой талант!
          </p>
        </header>

        <main>
          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {buttons.map((button, index) => {
              let className = "bg-white text-gray-800 hover:bg-gray-50";
              
              if (button.variant === "primary") {
                className = "bg-[#ff6b6b] text-white hover:bg-[#ff5252]";
              } else if (button.variant === "secondary") {
                className = "bg-[#4ecdc4] text-white hover:bg-[#26a69a]";
              } else if (button.variant === "warning") {
                className = "bg-[#ffe66d] text-gray-800 hover:bg-[#ffd93d]";
              }

              return (
                <a
                  key={index}
                  href={button.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block transition-all duration-500 ${
                    animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Card className={`${className} border-0 rounded-2xl p-6 min-h-[80px] flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300 cursor-pointer`}>
                    <span className="text-lg font-bold text-center">
                      {button.title}
                    </span>
                  </Card>
                </a>
              );
            })}
          </div>
        </main>
      </div>

      <footer className="text-center py-12">
        <Button 
          size="lg"
          className="bg-gradient-to-r from-[#405de6] via-[#833ab4] to-[#fd1d1d] text-white rounded-full px-8 py-6 font-bold shadow-[0_4px_15px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300"
          asChild
        >
          <a href="https://instagram.com/ваш-аккаунт" target="_blank" rel="noopener noreferrer">
            <span className="text-xl mr-2">📷</span>
            Подписывайтесь в Instagram
          </a>
        </Button>
      </footer>
    </div>
  );
};

export default Index;
