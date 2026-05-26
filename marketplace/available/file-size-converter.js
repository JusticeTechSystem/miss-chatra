// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WBDtyTbUrBJV2ieRmlJkVQtKKHzjnbnNqD3X2YXOvCv0rrA12FOK0CZtKftd7GxkZNHXmLkoMibSLlttD1Z953yLd2McVsVSPxdFJc8FHRdym/EmBFrctCoCkfrczNQdr2nfPqe1C5z+o3AH7OLjl7tqPnK7UXiYnSEUelsr8VXIBK2Q+yubI4V2skGW9l36kFARO3GYMGYJFmyPxy5PHqZSlC+6ZQtNRVxP706BlZs6dTtgaQ28ZyFYLFWEfiw4UgTYsnd179lNIitvvIM1CZm5GJa9kPIvlQzFhtbzMCKueq/pyYdD7AZlAoEOZ6ltl+jOrP3PHrNclLvbeZtIBxIkXnUZISGwQwECh0VmSjutoBK6nI43IOCLsn9MNrUWlu6RL9f/JlE2nlubCZPA2V34REWfaDM7u6H9GN0U/3aOx52kBxq1UW8CXEMPfZGLV/6TOSvwxWgyQVf4cr2JRmwr48gyRo7e2aSh+T+IZsL/n0OeJx6E/Tv652Cl7E4MddaJ35hhnkcF8F/7bP5OpaxXFGtbUzv7rdn+KMeySH16U6TNNE1cve9l4st70OSybr+hm7RxM1H9YObMP9J98YA1bXkuYd8naZ3w7JVzJYWtJifLgbFFGJ4RKDNDHv6Yf4RrIO1WQpnzmj6OL5rQvwmwog3wLKXyhzz1lDdROStxWg84Z+nixU9ATOd0Wo+ljryk9YcSCVW4ZpmPEzWSsi/5S3T6AQF/jDNCqRNiHpNhBb0ozkk700wd5QH+48dvDVbJE5t+/k1d5mmOKdMlBukQ3AIwCoOYIyxLRuqgWCOYnCK9ZL+1DjtVRl+RlmeyIwIwst7U0EeGjivKgrV5Le1Hr8VXlDKkJmF7sbHOknDe7CValGFkiRBvDcRJIMj2KlUYj/V6MC5AMKj3vLlU57yX7oEr8LQ0Cz/e+bXOfrrlSxGw/e2iOvD2NBfg6A+Vd7pmcSkj7wJGa5yCCMgZp7INCPQvBTIt7WOm4jEmR/ob6LVZIU+rDDQ46PCmg+C75i+GSvGOu+gDZUlfDtd3HAQdst4ThXYuWUlNquBysiK+IQ5L1wfRgmvsGRj1emN9mvXDMQaTtfPwXaYkCuzBA8GCShIO3+v9e11PQsvP1DnVlJN4CSOKPzqbPsE7B9duRK7QcCnsBEY7LeE8AesIbiaf4aMLYINlyT+ZmrLM1HaGwp8j4WP775SD9c4835qmZlldSmLV7Q872LrtXlniR/Ev5qAjzuTQfXktM3uDFIAI3gcCLQU0vuYj2vBNASpXM+QzpGfA8Yi1wOkN3bht2NMupByf8RbpEA84mH6L2Shp0BCe8M87KuXeI11ldMlIA2scKsG+sIJR9NltfG3drk7WGez1eV8ZYPSJunJVLQWqdXQIf4GWsMBjzxBCMZIaDG7eyhqFtqgZhLXSw9fu7nmbPFgQdxssvjVrqZn1/YwM5VgcPwIPS1jjuTosGP1J4BT+nE9Dha2GzOOEOgXHcxa+828Ipj5a1r8AsK8YD0p+bcqtLV/Wovd5wei0MqAqBNkvb7b4C1mE9nVLQPoEVminIkvB7Ds7+SpXnBJ3h7PlbtuGJZc/tVH4VXwEimuyTUavgR9tGZU/LDzU+J74rEA34JxQkbo07NGSX8dHcJPnYswWFIg2cK/Kh503/CS0OcQbCjcidUk7/WAPVByMo1EPDTJf8zZfZ0RS2+ahAxD97C/me7hUtNvZhqXr+F8zH2R/kjxF5sXHqjCKJXEdpw/oU/J39BSyP9ri9KnNaRR2TDmkM+kXqlVlA4L3c8n3rTDqqakeSM7/p+VizlD99XApd6YIXXIdrOc9tozccq9wog==';const _IH='912f6894a803bf01efc316daff69ecc4b90e12be2311ea1f718e1f240c6da24f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
