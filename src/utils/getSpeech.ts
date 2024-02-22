// @ts-ignore

export const getSpeech = (text: string) => {
  let voices: any[] = [];

  const setVoiceList = () => {
    voices = window.speechSynthesis.getVoices();
  };
  setVoiceList();

  window.speechSynthesis.onvoiceschanged = setVoiceList;

  const speech = (text: string) => {
    const lang = "ko-KR";
    const utterThis = new SpeechSynthesisUtterance(text);

    utterThis.lang = lang;

    const kor_voice = voices.find(
      (elem) => elem.lang == lang || elem.lang === lang.replace("-", "_")
    );

    if (kor_voice) {
      utterThis.voice = kor_voice;
    } else {
      return;
    }

    window.speechSynthesis.speak(utterThis);
  };

  speech(text);
};
