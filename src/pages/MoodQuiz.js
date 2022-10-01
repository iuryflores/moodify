import React from 'react'

export const MoodQuiz = () => {
  return (
    <div>
      MoodQuiz
      <div>
        <h3> If you could do anything right now, you would... </h3>
        <button className="hopeless/2">
          take the midnight train going anywhere
        </button>
        <button className="excited/7"> go out drinking and dancing </button>
        <button className="sad/0"> sleep for days </button>
        <button className="angry/5"> set the house on fire </button>
        <button className="peaceful/6">
          move to the Himalayas to meditate
        </button>
      </div>
      <div>
        <h3> What would you like to eat right now? </h3>
        <button className="angry/5"> Hurtfully spicy Mexican food </button>
        <button className="hopeful/9">
          A massive salad with all the fixings
        </button>
        <button className="bored/4">
          An entire pizza and a tub of ice cream
        </button>
        <button className="happy/10">
          A 4-course gourmet meal at my favorite restaurant
        </button>
        <button className="melancholic/3"> Nothing </button>
      </div>
      <div>
        <h3> Thinking about the future, you see... </h3>
        <button className="hopeless/2"> What future? </button>
        <button className="sad/0"> Mass famine and destruction </button>
        <button className="joyous/8"> Loads of time with people I love </button>
        <button className="hopeful/9"> World travel </button>
        <button className="bored/4"> More of the same </button>
      </div>
      <div>
        <h3> Your heroes are: </h3>
        <button className="hopeless/2"> all dead </button>
        <button className="hopeful/9">
          people who actively practice what they preach
        </button>
        <button className="peaceful/6"> anyone doing the best they can </button>
        <button className="excited/7">
          non-binary pansexual vegan leftist feminists
        </button>
        <button className="melancholic/3"> my mom </button>
      </div>
      <div>
        <h3> How do you think you move through the world every day? </h3>
        <button className="happy/10"> As joyfully as I can, until </button>
        <button className="bored/4"> I don't know, man </button>
        <button className="melancholic/3">
          With as little effort as possible
        </button>
        <button className="hopeful/9"> Like a good person </button>
        <button className="peaceful/6">
          Always thinking about others and the impact I have on them
        </button>
        <div>
          <h3> You can have endless amounts of one thing. You choose: </h3>
          <button className="happy/10"> Love </button>
          <button className="bored/4"> Money </button>
          <button className="sad/0"> Intelligence </button>
          <button className="hopeful/9"> Joy </button>
          <button className="hopeless/2"> Sleep </button>
        </div>
        <div>
          <h3>You can solve one world problem forever. Which do you solve?</h3>
          <button className="peaceful/6"> Hunger </button>
          <button className="melancholic/3"> Climate change </button>
          <button className="angry/5"> Nah, let it burn </button>
          <button className="sad/0"> Endless war </button>
          <button className="hopeful/9"> Cancer </button>
        </div>
        <div>
          <h3> What's a perfect day? </h3>
          <button className="melancholic/3">
            Sangrias in the park, later when it gets dark we go home
          </button>
          <button className="bored/4">When I don't have to put on pants</button>
          <button className="happy/10">Seeing my friends and having fun</button>
          <button className="joyous/8">
            Meditating, exercising, cooking, reading, listening to music
          </button>
          <button className="sad/0"> Any day when I don't have to work </button>
        </div>
        <div>
          <h3> How do you feel most days? </h3>
          <button className="hopeless/2"> Meh </button>
          <button className="excited/7"> Awesome </button>
          <button className="hopeful/9"> Excited for the future </button>
          <button className="sad/0"> Tired </button>
          <button className="bored/4"> Hungry </button>
        </div>
        <div>
          <h3> What's your favorite thing to say? </h3>
          <button className="hopeful/9"> It'll all work out in the end </button>
          <button className="angry/5"> What the fuck? </button>
          <button className="peaceful/6"> It is what it is </button>
          <button className="excited/7"> Fuck yeah, let's do it! </button>
          <button className="hopeless/2"> Just leave it alone </button>
        </div>
      </div>
    </div>
  )
}

const moodValue = [
  { type: 'Happy', value: [90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100] },
  { type: 'Hopeful', value: [80, 81, 82, 83, 84, 85, 86, 87, 88, 89] },
  { type: 'Joyous', value: [70, 71, 72, 73, 74, 75, 76, 77, 78, 79] },
  { type: 'Excited', value: [60, 61, 62, 63, 64, 65, 66, 67, 68, 69] },
  { type: 'Peaceful', value: [50, 51, 52, 53, 54, 55, 56, 57, 58, 59] },
  { type: 'Angry', value: [40, 41, 42, 43, 44, 45, 46, 47, 48, 49] },
  { type: 'Bored', value: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39] },
  { type: 'Melancholic', value: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29] },
  { type: 'Hopeless', value: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19] },
  { type: 'Sad', value: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
]
