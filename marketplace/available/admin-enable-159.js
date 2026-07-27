// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQcZS5TjnsqZ33jadFbkYY9pbJLLrdGJnKBWDg71B6C1T3iTmId6u0qg1hQq5ViOhgZayeJ99yvVoS0NeYRMQuAeF7Sp/nkU+tCgXp0E4AiF258/0hRuvneWZjeELrwX18mQa25bm5oP4YKJwgqlMrBrvA50n8p7m6gCOa7/KKj16fgxm60+FCZI0XpNaHpfTbew17Uu9PzVvvbVlZ+Qcym8wVPRIwEQs5oDNbTnNbihdVo7kHHgL5HjwQMKbS9N/sauSJJOJZwsRVPEbDfPmtn0kuYXktGT4lSXu5GkSjoeA+vSKMiROJSy6jzMolnL/+aoihv1tWVRD5sUKiRoP72BxHT0N5TVO69xWvNhlea+1NyAkMcjXMfuu3hI+sTskgQ/e6NZ7FpZrAZkhLXEfFFxwMXQFDE+cmQyKV7vQ476gyHdgtwoGDE0npC33pGHNfuzFv2EVT7u+6KyW0eYh6fIbv/wp4oNQcmNJJcEKr3bTXHZ8V9SFhoSRvSWhHk/Sw7MHpK1VbclF9nZtH7loWXgZS/WqMb49nAu0Met9NZ07Siw3TTwdB1Mqa8vRG3Ptae4XaAPLv4227eUM9cbqBoPrlbbUPEtbGAjmVs8MUuEa7ZUjzoE/0VB559ozkEUa6TMm48vKMGncfJK1SVtxDc/Eisdn0Kexs3H/QnNY1lbdmdddCGsAhMsybhSBadmkO/96eih8sBY8RD8zLIPtkn++KWU4y4WkULDuq1sSTzRP2Bb1Jw/mDrglEYj6DRPkPPgrkHPPPYwlAD9B4G4JHwanIU5eQeP9VwKmS6IepILlLjnmrf7DgKnZpimdnFUsb92JAUzOD+FDq1RV4f0W6Am+GIdgUNr+zMB3XrQloAIoGUXtNyzujlbfDx3lq3xMi7rD1jTj606/+2Oei4ECLOfCFtEFBW8b9C4Uxo27RVhtFTOdJ2qHQOEDgJJ5asfznKXBquFN0Qs1oZqbYEOY1Ylg/ar4IYkPaP46wvJjX87UfYbMoiltU6phYlYSLGAR+A';const _IH='140ac425ebb00079e5e22b61343507c44757913b46df4360bdfd3c94f813fb1b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
