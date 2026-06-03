// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZNJpfMgRNq/UJtNoMtV4Sn3/X+BNAYvIl90kGtj0WMGT5VzLVlS5Bm83TeweeWzmV+08rA00tS3ri10pUB1GsoQDrE1XceOS+fpXcEtiAASv1xqINHEg2e6EowMmMoQ+gjaB24fmlmmj157TO6D5MHZ10y2mtg5wVKycKaN2ImbvBvml6oA1F48LEw0EGYZmTvF8ReLtjTpKdUpePoWs1BfrMqoD9PE2mbozA6lccb3e/x/O3wGtu/u0XinT579Z5kwnh9jdSfjiz8bd6d7QKXsIhLAqPdMYLVe7WEGe/jgKDJGPMaN+ZRsU0cuP0iCVD1SBr37ibrn7ACuTs/o7R06J2482J+JJ85ysvAVPD6+WgwNMmqR4b0Hx9f9haS2w5oKjlcruuGPjv3kMoVCQaBOMElzQL7oNj9LMnOkQX//0O8eLg3zuRxR19GUq3266TrSt3dcCeRCR3+ok2BC/n17RUwGYJyzm1RM+JTgPZoN+5q6C9OZb3uzZi0nMtzpe3sKOe4k0Ja8/WPKcc5nvMXNE1ti9ckwssSLZEMHUzoXLh+vr7korXYQHt1Lsfa28/q/UrgnvC6pvTqak2vJCYsASa/x2pYge9Tcw8xwmcNypB9L7M48gI1at6I8zjnYKgcaxq9h4XNJNOSox/AKyUEPgdO+CWCzcERBuuY4LB3sCpc98oPxhk649ZHgaNaEc0hivWaDb3kP2KVOiydsH6FcOnMzh9GdgAydnDth9lCbi7s6nUr4QuxWuPVnX7p8PlTH42qZv/6G/bZtMZ5ZZgTg20wHMup9BVLB9DGHAEUoanz2tkmQMXg1Nuihl9qgVzS2AiyUGPlf9sCCW3cGZ7FI25rhhLcxnH/L93UiWGZNnTvB9zDe+yNPq8Y9ilfELAAMRLqUW0DvRW8Pz9V+6el9kgZDoHDxQJCub2a92XzQWihoQ30umwz0kEBZ3vTxXKFKNkzNTDNuOmw4MwQ803N1nTEBzNkMsG5S0EK0PKtibhU5xU9CvFId6zQWFQ3XVuUDYZd9eWdjb9AikMX5asO0xd6NC7S+YbOGAuBkvWJVch05YjR/noyNNtv6agasyYXJ7lLSP/ulBg5DUocTsEhL4teE68IfprFgrk/CHtiKtlUphs+BmLNctQJ5cdn/wFHii5bQhrZxCh8QMp2yzggB1c3Dwdp1sqhY7CjCQ93axoBjBZ2GdshPqdf/Dfm0HHq6EeGZIG9serv5QsmBjxg9r5+xgNJA3EE3IDGkbCPqEN1yzEvNrFCnCjkUd7lhfHSbEQMO6Zhnh2LlZ4e7xm6myP+6zLQXbOzpe7Ora2GhT6ZRfmlySOElTQqplACqMoOK2NlyT1ekuO2ebia5JWwHFhoBtng6vYHmrrubE';const _IH='a0c1a31b24645e842f73fd87b0fe6dd4a331b94f8340abc485fd1c2c04e34366';let _src;

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
