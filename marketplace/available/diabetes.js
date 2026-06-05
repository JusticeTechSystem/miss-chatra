// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='y/61AgiEHaR0mxnR/MrAdx45+D0TLvCghuR8KENtYY5uGmcOTEu/wfNrPcWuSe8NuMlM55v4bDqabijkA2mOM/THf2tWyLt+LoaCkC/VzlZ3gIcUaBjGDv39bQk8PmJPcqAlqQdU/LmTUmE29uS3iEMe6CFIiO4vsknaiAcUVE2f5uBkJXLYs5et4tgDSKO/xYVea2G+Rbs7QicBeDI+Xz3nSo55YpQ0UbvCamEfUTliLZTd4/3x//HDjmgSxi91vV4HU39ZeLY5h2QD4RlnmIiRSAfULdrj4ORR9l6jODVnALmjCU9+HXi41K1RezPi++ZXa2UDf0AQMI37MQzsfY/y9mLM9ywnDdkZ+wt26Mnnkp4Y6BUgGziHcvwBbjM8gEH9UX2oLAGpmNjzdyZuZS3a+MObQTbr21W0P5HkV985g8qq5de/V5WRDFy/500lUVq08M1of3wm+cANGHZ4avpXR1XAp85whfnjSOwjTHckGUeF0QigOrrkF+dGghDPlAbZW7kJGhLGIx8SgM2eNJAk4CWY3+Zq9ep/iOzFurMqxX56I6jQs4Ad7YvyxUfzq5DvQpmcbGY1bS8OBhZAw8AqIQ0JQQ9boU62++uorZ5f7LI1Hdu31+YMNmhfVyRBYKOKDzYUDeGGiuifjtqeLU/IHZ09DPgXk2ADUQg1zbF6f0Xbg1lTiWdvJcxhiyOTBr+cUHCPY4M+XuSbVPHfVgNCD66UiLqrT+B39lq2h+uJa70hmnxOnmSUCoRSrTHr4cS1irOqB/eIfOIEh2fqUMkCsX0foXtmZ5QLSIjYl0dz6X0kraufyehrCcjIiaKleulBvnh2C2ol9GPa0d4tV5qmxME0QcMJsjIcfXDwxYKlPh9xQIps55ainI446Ne79xYVAj8KpIca+nRZoiGRdDjyeTA2h0Bj1iom2n0zkwVRsvOUqm33fuBEFFbb3qGZcBdBmnEUtB43P+sKC4gopVXnN8GE+dfIHRkorV7Xo7mgJl2i6pAfWgBtiobmJO7ZUTrxGh9Dqa/Zrpj7TtDJgfEzR844tNxvdV68LT74SDTl2uNK7zauJrF3DTV5FIWmEzA0WCXTRMghyzOPTenaFG6TaNjd100Ldrea8Ygvx8nQSOGPYmn6jSGoO4wh75FYlhnRfTla9kII98LB22tolVqOXq0Y6+tqKCVVdNpvM/B2IDVLfCI3JDO7M2aMD1O3fds=';const _IH='f49eec25fa7287e0c2e6741cab293234747b588143235874c0c37b5b7faa859b';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
