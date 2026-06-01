// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:58 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyprupikIs+XNnbEsd4k8rZECeM2cTDeTZeDZRgiVm9YxDNjoFFPAtY9qTibKWnIZkAIfdN0DXzh23wC51QHi//dRahLNbl8QlXjCqqdCWowWTh11u0ZL37GyfB7yucCU0cK711UC91OC1ALHaWCDAOP3LuLNpCC3HwjRj18gAQvNQ4SZfR9iy3F67OUhLyuYKTpUqcaA7+MZUucYn4L1vcMpL+E+MHkp0vjsM6pjTFu1dv/vn9/evuhqDKfvYkbJrPQ66JQ87ilKfZabvt4nOSihECaNmltw1r2mvDAoMYjbxweLjVW/B8mlU33TlyahoKJwkf3ypZOnP312eg76hafu3mHNwtSVgc6kdZjA8h1LUb3ee5j6mm//O8jq7sVjLeh3hdNQBMk4ifqY+LRsGkk/NCnV1euonCG/zQll0iGYUDfq+MqMo8yjOyQSlBdHdo4gDp/9YDpIL6+hIG8hb5AtVJJT9TDVGd5FP2OKcw1DITNmbDUEGbihmMrs+nS6Vfnxk2WMCrPW90ChrgNI5zRiD/CSoq2TzhoV8m7DnqmYz6eAextlMUpJQkw0g5EVvCBRZgcro+1XvW2lnPDd5yIMvKHb9Wp+sZIGxfXNAfzRE7cRzSmHkygRJfaYlorRn8SySMM/NtV3B9xMcGjB29VfK3iXjNEKm41AW8jOU5yI7LFgw41hZkdZxr0INsBtCBT/7esM+gIS6f8TShrlwj0ao6BrrDJVUUj7W/mhD2Jx/v7WXnUIcbsZSJIvj3ISdf7qexNSyw/IRofgcs6MO0QMcm4/C7E87Fz3TSnMNlgb1jiY2voahfNcUCTaodI4fUiGHaPfgoovQVwFLPDJECv24zZJlWj6/vfoD27xkEDacftO4na3SF6i9NOXOqw9Onv88T7IzxBRf4vaiLz1HJVUXLlpLBI+cLT3adaEd4lhfNaWlHhf6evGR5E7BQHG50ASjrCnJgDnT8wJe1QnxKrGuWfW3AocudH68d7W8eG0fYzOFAB+QLob2P/OXha5HBnNJCL/bGqcOasoxDVQO33IXfq6IgQXzeyRx1dQyfUnTNr/qEs//Mb0E7/pFu6Xc2Mp2iXVg92axTkLtGEqgqZ1Ai34TcxC3UyVQtc9BJkX1iE03qrJdaR6itmqd2PMVvU9y3mo3Sw98fIuWGf1ymY83kVEINGug4lih/Y0yLszC0IY3BD4bLcybPkZP50Q0MnpW7aUq/bvmm/qd8vfZ+0cu2N7Yo1cunPX/N3sQk7aS2FqNyzbIn6Xz1IW7CCg4Kq6T3Ari1JCkodzPxzP7z5/RE2Zk53osimA3Q/wfrddbcU8I36S2eauHNdo1CWNN4DLxV73BDFyKq/llZBYdZqvsvnr4cTNWr1h5St04pP38l4k5Ka5MT5ZxXdjyfZ7SmvjcG1s+Y=';const _IH='62dc9774404abd3eb590b5ead2dccd00a4fe29882a54c5055ad1123624141e60';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
