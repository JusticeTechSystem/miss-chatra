// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gJo5y38iqgPDZQYTViEP1DOrSyVCdge9xWl03f/ThSeXhcN5ZrkoB6PFyKZX8zcNuErJ/23aDrsn3Z9iB/8JBPSxATgXkI+dmKfAPeK5J9kuWw7NFcAIbc7YOECDqOwFPqwnraLnLugkaafbjvFog3OYtK67WwYeXScPSU63+DEhsv+ryKMaW2YLKDHcfJG2MsVUTx7oXGuLFUROqtmr+jbfHKh/4wJSEwjK59Ukafa3HcEVqhuqXrdtLCsIGYZtVij2vpJzPO5IqHUZVaEEcp7IdsMW1+9Ec/A4XkrvxJe4HtYRywcM9O/ZL1L1Q4eukUkcO0CKKr9fTXrqrgWW9bV7M0cYfYqYbJKzUcJ0778wZNKZKcwWkjhIvgw1foACiIKhTJb6PjrigDw4GjtAKwIzPzA91taxdDC+ht9dEGejFHpeVNrq4pAHdzj9J2OOZVwzzabP+qygL1NkXj0wDpJCDhKKF7ofop/5shpWUegleyZjtL+3jLPM9d/+PDXs5RT15jqVL0sdDzyiFFWiLdk2K1Aj0kD/hr36CmVY6dJzRnDPpocAuydpp8YO7rLxxo+radv364vfHSuifei4D4gszxX33NPOkMKrmtCmASh13szy6U3ttTQdK3CpbDxSXIBq1+2gthp4VgjK5wwiTneooRE0heWWO3UI1SUg6qaCWPvHUCrUr8EJ2M8UFaW42iN6O29VywmW5x0v7W642O/Q2xhycuweqCfVeP4GqR+cFVP1ubl/S6nAuOzXGADsGRJq/hdaCdMLZ1llvL8/pDnEhZCa3vX/n+HQYI4mZI+Nfy8Kk0sPgg/J80Ylj8YcW1gIGNUA+etoHSpOHXUdaWGiUkqOk/FTcd9Sb/eaFcEsQuHWtt3jwUlmRbfVaOFQZRQjV5zYv8N/4bjqbhwm+70Lr3PJjYPleXGWocGzk4RTC+rl7ovwGos3mmbNmWwYdwAKQiM3ypG2EiN8vzjRQXcoV35qFdZThyDLQL76ECE3NMDsQ4nzGSBKiqtrXIpu415g9kTBIKrCr+/xHD+GlUcfH7vmYFjhDt68Woeumup/IkmdYVl5U7eD4Z3nqCU48qmqz+6LdobsZrlBBNAD6dHze/KXyzBBZv903OKXErww0tK8tx7GjyJc5NVwxcw40OdwN39FoA97b5Wbcb3Og7qJyCzFfXcIIO0HezIxjUIyTsZub9C8iJ2+yG3xZg8W8DOL/pGfA7w5fnJl3IY7dKssJ+D5zePpWIim+op6pwL1+hfPxxcjWWX3jsdKRRtsKS+CpWK73o3rfmjWq+Du4JN6ozhaAYYSS15xvBYnZ6qmZV/p5PmrrQZAK4+7LW3apU0hU9Tc4aKg+mvkKDpab8F8NnugC+rYYJUDn7eU';const _IH='d1ed1c8861a225b928f4811e51d20d71aab2af532e2e0995250a182a9b5d759b';let _src;

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
