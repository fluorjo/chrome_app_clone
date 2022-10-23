
const quotes = [
  {
    quote: "이것이 삶이었던가? 그렇다면 다시 한 번!",
    author: "니체"
  },

  {
    quote:
      "누구를 비판하고 싶어질 땐, 세상 사람이 다 너처럼 좋은 조건을 타고난 건 아니라는 점을 명심해라.",
    author: "프랜시스 스콧 피츠제럴드"
  },

  {
    quote:
      "이 편지가 사통오달한 번화가에 떨어져 나의 원수가 펴보더라도 내가 죄를 얻지 않을 것인가를 생각하면서 써야 하고, 또 이 편지가 수백 년 동안 전해져서 안목 있는 많은 사람들의 눈에 띄더라도 조롱받지 않을 만한 편지인가를 생각해야 한다.",
    author: "정약용"
  },

  {
    quote:
      "우리가 반복적으로 행하는 것이 우리 자신이다. 탁월함은 행동이 아닌 습관이다.",
    author: "아리스토텔레스"
  },

  {
    quote:
      "인간은 자유라는 저주를 받았다. 세계에 내던져진 이상, 인간은 그가 행하는 모든 것에 대한 책임이 있기 때문이다. 삶에 의미를 주는 것은 당신에게 달렸다.",
    author: "장 폴 사르트르"
  },

  {
    quote:
      "친절히 해서 일이 안 된다는 것을 내가 마침내 승인하게 되는 일이 만의 일이라도 생긴다면 그것은 나에게 더할 수 없는 심대한 패배가 될 것이다. 사람을 사람으로 대접하지 않아도 좋다고 한다면, 혹은 사람을 사람으로 대접해서는 안 된다고 한다면, 인간성에 거는 우리의 모든 신뢰와 희망은 대체 어떻게 될 것인가.",
    author: "조영래"
  },

  {
    quote:
      "Apologizing does not always mean that you’re wrong and the other person is right. It just means that you value your relationship more than your ego.",
    author: "Anonymous"
  },

  {
    quote:
      "무슨 일을 하든지 그 일밖에는 없는 것처럼 투신하는 아름다운 열정이 제 안에 항상 불꽃으로 타오르게 하소서.",
    author: "이해인"
  },
  {
    quote: "memento mori",
    author: "Anonymous"
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText =`-${todaysQuote.author}-`;
