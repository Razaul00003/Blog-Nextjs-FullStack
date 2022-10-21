import classes from "./hero.module.css";
import Image from "next/image";
function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/max.jpg" alt="max" width={300} height={300} />
      </div>
      <h1>Hi, I am John</h1>
      <p>
        {" "}
        I blog about fronted frameworks especially React, Nextjs, Vue and
        Angular and Javascript
      </p>
    </section>
  );
}
export default Hero;
