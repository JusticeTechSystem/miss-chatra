// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jnbAZp4bUcYRQMDgXpUzOZgSxCR7/s7Jv4jILOGoUp37YOzsGN8pDBWDGuEep9gnswYWAobsU+YdDfVxwbORSThPEPdhV3ctahe6M79lu+C9DY23frnZ0BiYw+mJj9WOfutQTq/DPBOCuct1xn8S8Nk3xtPYfWMPgP4g+GGcoI7fvMvFAnMNlAa7SHkVfP7J0ul5c8iCKFyvaJmf+KlBLGVaDFEfVmy7ze1xX00hgGGBGFAjmfhM7k5SIBmuRSOGFkEJLyUry2Ap8tQ7DSr5kZ9MpzPKu7rdfgA2URnd+4OSSjTN5a/VIcHUtipkLimlICRcQFsyb1ZwRJHEwtpymG4FCVOz6aQVmnMok6EDCo/WPJJ8bHicwzVum3j96E9EPPBLuRJ92iD6A3XtNdTDXNUoqVw3TKR4zg75JbgHs7rqKeGtzbLbEy6jM/T1KdMRX1c0JabbR9nRxubZFxs++5Svf1Chc/aVn+6BL0vg0FPvt0nZSywDwwPjE0ewcu24pL0KR3pRO3X1tjwxto5ExvJ7eXRkTE9sg+JLdcuCEU0NS5AITF0bvjFdaE2tJKBW7CYJ9UNUqjFv3llJ5acH3DMTw4IPT/gGdZiK6T8FZwpMOJIgqpGTDoab5c8DdeItCk061p99DhzDj9Pz9ggWxUTE004iZvm+q5y1r1RMCQe0nBr9fQUvqRc9djV/cvdO0fOvow4orBkMLj5SHkLWt/HMe/TNvcbibjlIALWIRzwMuF0rNAb+0S40K61D2oOvzFHTw9jOIx8FJFVANJhLWE0zDo5DUhq2tK3HXVY85fvCNA79wbt+Bl+Q5NDrq6pFboMK/TKihiOckLRBHZQ7htCEAR9yupvpTtzOeSYNnKVRCvxJcybDPd7cpmOK6+F+B3s9JyXnNFKzHbAIFW8GVshk4PPBtefFHRXcYLE8PCbrpGAPLxkLhaYD+h93fik1R2oRhXrQanL2BJ8QNG7xW9dWyB54Yzpstn7hUEe2VYUzjyb7F0/+vtTX3S5kqpO4p5hPjCXfJRj1vXlOErzt4YzqOT50bBo5ixKJoxwVnt7GKsoMOzdp6OgmP2UhS/AFlddfKUB1Qfy+2iCqAOMp7RHgfMWtA8ll6rmnLFA+RzcK/BsqiLHgyA9XaFPOp33QMbBzRxu0sccf6B+Z1bd0wMeehOg2tqcmIM6cObI8yZhAmYa7L88MkSaaQzbsN+z1NsK8F+m6Uq0ur1g/UCJU4mhwFN+3SrdcW+xyj/9kAycB06z8CZCGgvn9r7/IH9vBAmfQnc8oeONLESTaABXZokboUcX17e04dA988hjj0+TON2447GXcfiNfWdEHNu+YvilNkLc=';const _IH='3ee461b6dfc8f204649aacfa3317da32c42891d072409c549c3ce8f278af321f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
