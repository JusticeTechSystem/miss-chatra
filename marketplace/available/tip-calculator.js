// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UvagUqO+De6KnG8FptiLK0zrB3nunMLVQ34i+ohZqIKj6lPtR9vwYPBsvTlSRs+vG58/q3ek1Jgk9TRQT58oZ1CZ/fwOokjBNDoC8OGLeT4cJpWBmnXyz61lrDYUVZQ/Z+7cPy3Ey/g8Ar1bVTgNDutK8bU1xkNzUWFbA6Wl7r+OmOdY+SIFGjH8sPj7UudmL2kQian1mh4YZjFO907V+IbhuxECOVwtUCgu+IA1bqPbnm4EPaT8GSp20YkwM1/cx1mCQqlDegKqL0MPdaNPTEEduqJcpSCVLTPY3jyst17OMtMgRuycAfRPeHzAaQvC37o6j6eubdwOvKip78miYutYCOsVVbKbNxMBU7G4y1ke0uhvBJ5z6YSwV6pm+VR0XiieGevrAAp5PQ/G5laH2izZ0PtKu44Rk+7TG09YTlU7dvACkQn/DGaQnX89Oxzqxd7XCPsOY+v8vR5MIXCHaP2HwoXvDYLiKL1faWGORQTgiCwIanHoKAcY1XqfYL7iyCftUNmC0H4+l4yohseYKtMPGUDUtvdnLwDufmqxcqahJeaCvXreKedet+iyHlIAwhM89awLv8QQ1ZLYkvwnlB4eCPwMS3/8Ojs820bZ3zuFqZ34FzO8O4r2ndE1pI5/4Gfc1nQo3/JJZmPnPFFoxHSzjyqux6wmrmG6k7pt6RhGpBqYRUoYmDbG4isXnWj4s7ngGPQ4IrxDye4jKBQEpwYuNkakem8ITb4A6yA0TjM/OkJOjYKrE9baPrel8QBDXDDQjS7/+X4qPWcIs45Wud4CNIMwSylrX7nDNFOunCYYYQ50I5Zigt/+ps1Zk+/BjKnH+TOTF91OLb0TOPZ2l5Q9KNSAbK0FlMTa7TR04ZodRLO9Sd6Nl138NF7r3uI6xUd8XwCxWv8oU7mkxUrGedgfabsGNRVcAQk/G9yL9FHtytr//cxaZ1/1Oijqck+7mj8AD/qiwwjLgcta21ErYvMrBC2TewPccP79iAhH647ZjPvCjscITTCwZ02RzTNm9aQfR73Z1BZANHBTbhdBQT2v05auGoJ8OAxt/QQkM59tvmb50wFKvjuZSsSy5cTbxu5A97kvNok6liHNgdJ5QAt1ZrlI6eevwLEoQyyQ9cWNp8qQNuJUAf1WhRq/Mf3Kx56Tyo3Ub98K+YxIIEIrvD4re/zEngYysJ1dImTVJ8HLtvoMEbrSH0epBb6nGEzs33t8Br+LGMm8rAN8s8oH7lV/rXXe6bCKhy6V40VSBN3GQbSRThe+EQS0csIEy4/UvNuUaJAMm568l6YlrV6Kwjw8MYyYs8hyftj1F+xeBLRVXMq0+NvyYnK4ikqcdk+cPdWsiCDS';const _IH='4266c4e787d4ddeac832df8b230920cbd09da231856f23ab957c1ab9372d32ef';let _src;

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
