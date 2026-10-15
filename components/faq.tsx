const questions = [
  {
    question: "What is Pujokriti?",
    answer:
      "Pujokriti is a Durga Puja companion for discovering pandals on a map and planning visits around the celebrations.",
  },
  {
    question: "How do I download Pujokriti on Android?",
    answer:
      "Use any Download for Android button on this page. When the APK finishes downloading, open it and follow Android's installation prompts.",
  },
  {
    question: "Why does Android ask me to approve the installation?",
    answer:
      "Android asks for confirmation when an app is installed from outside Google Play. Approve the installation for the browser or file source you used only if you trust this APK.",
  },
  {
    question: "Does Pujokriti require an internet connection?",
    answer:
      "Offline availability has not been verified. An internet connection may be needed for map and discovery content.",
  },
  {
    question: "Is Pujokriti available on Google Play?",
    answer:
      "Pujokriti is currently offered here as a direct APK download. A public Google Play listing is not available yet.",
  },
];

export function FAQ() {
  return (
    <section aria-labelledby="faq-heading" className="section faq-section" id="faq">
      <div className="section-heading faq-heading">
        <p className="eyebrow">A FEW THINGS TO KNOW</p>
        <h2 id="faq-heading">Good to know.</h2>
      </div>
      <div className="faq-list">
        {questions.map(({ question, answer }, index) => (
          <details className="faq-item" key={question}>
            <summary>
              <span className="faq-number">0{index + 1}</span>
              <span>{question}</span>
              <span aria-hidden="true" className="faq-plus" />
            </summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
