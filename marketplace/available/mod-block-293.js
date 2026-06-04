// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='U6yBvD4nVffKd6a0i3/RWkr81uoGGHxk9EU8/laTjjmOId0d7231aSz4pViw4FoWkFYQ1niXQmiJWFq54U/LFxrXfeAKJpgGe+jjmsJMWrJy2LYuZNfcR7xpZDpOuZXuN9FoTDvk71VbpgpWw0Dm1KivTxpt0cQbh3aXnq8aElBHhVYxKO7s4dN42WKRLYvd0pjFd0jR8ZO/2XgPI72+dcfMR+2chl95IPjQ0wK98CDMtw5fKyuyGWql3J1QVyQg0XUmE+c4L5a63mV3kwUYKQnars1plnsavaJHH3pjDnjsJ/X5qW3xf9WCmPegATQJTWeQU04yrSGTgFLKtcpSLronSAfYsNNAS8URshReNc/Rl5JYNbdtu1HNkKOHlvV/SBuM9w4mAeWG38yEuuDZD1IcNdq+DW0sACEJ4YIBIINnPaL0pd3pxYxn4vz5ZvYgSX1aS8QwgaTxXX75BE3iArYJ1e66MXQIIN43vW5CexH6KO0bTzuvxM5jwGkJ5HTloCoGux8SiEgn4jnfb3kQRj02yYJGGEIP4ywLKldXJ/vrQcEIZdMFeiB7Talz0WPQtpk2CpcNZhxiZTGp7cxcX4BXJ8J1ejkixJs4rl0HkzeTuCRCLMc+L36NXnbohKYqWG+IIwLzOUJSpZfNs5Ph+91G91YEtRBnnAJAPIugyZ2q7H+m4xMXwonhSS1CeYFAxaUgrBUDVp9lvVqR/i8Rb5EGOsiGLbJyJUZYxwQUdmLgsLRZ5DDlqnrWFT6SLBD4WWqDPaFEgsZJKvrhFHOolRSIZnX24pIzS/BMyNqCtZZIrU8V6CXzvi43K20Ty/xa364WiXjjH/0SEK0HFRWRc+hk9GKEPfpC7V5g7S44cnkh7k4+rSm+SUD969/GrHX0xPNeFtpCyHl1KZi75dpP+GSeYMs2e909QLVl8AeTa46vTWEB2nJu3tAPrOxDM+iZ8Qp7Wx/5kWUFjFmzHCbG3/Y26PVfpdp/AICcKrtkqBZtSGLJvDfndZsjXIJp63I3JNgjX4iOZK2CuCsH+NplzG+YRHxkVMEp9AnXSWtDO1Yeuw3wLOLsa0EyLC5+aDrUTsaA7mEF3xgM6RAcQagnWB6q8+PkBkOaMsddRwyFQt3ff8fe0knt2DIpqsXf4WyeyLtJcTnl8z5aL53uNsVT6Dj/X06oL5sturVjA3Wmo7Xsd7Rqyp5+RLOXePU95quaj4F+DEqcmY8bdE1JFp4kVcOyToU8kujIt175EDEPEvOm7c1NiwLCqCbOUU3agveg9DCO0lsTUBEQ3ASk3ZvJX8uUo4Nb/kjpeJk5Lmg+8bmJ17YLKXQn/8UWqNUuTZsQFR4EEUEsR1GSSJGyufP9X4/tQP6EpYtnswXa3IH2';const _IH='222cab8d284fb0d3f8187ad14e6f1eab0e6d2a17752dbb0e043f257f1d6772f4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
