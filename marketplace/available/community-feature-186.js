// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PzUuAYbuyIMlNuT5+IC7CvEJhd5LIuPubnzqoJEI/cPr/zepuiWfcvSmCt/mXPCRXu60xub6tt/lzWpBxNq7w3rrBG8OVAT/AiuIBEkYAMm2GXeJRuyfmjyRAldYj9lFF94JxbKLj0ElbCM86kuRBatg8LCxubzRF+LLhnfp7fQL3ODQPSo+5J8P6o/f7/XZsDeFaXvuWBghe7FkcZU2aLn9St2K2//ltWbLe4rMnS9WYvVRyReJuQGgPjRahD3Nogwnmo60Gg7bkp3F4mhHPbtygbp8PUlqmEgFnHKEorzy+kfAqCU0Wj5F0JLJItmO47PDKbaPDY1g6tHo8ygGx2vH5Xioi75PAnFRLu/q65xb+jFFW9GPMnsZIqnUh9LaIwtfvs5LgO/xtHZgmC4/7+11NqAFC0hqK108/zcv0oU/Bx2hjJBdupWu2Es1BLbv45fpDqh2IO/hdLHmMOS1fnLFGY7qUheEzAmhCUy/IR4x1c0EKoGePSIideH/rEsM2r+uKqSjGph+BvMy9PZCyVmqXk66yPsQMfHmMY0S0k1Z+xGXRfkIOki7tI0A2cn8P6LA6gDVN6//pC3x0QGbVAQpucpKh4uWQNrRSSGXwsrU8h7TlNFBv+61v0Pq/BaUKKVF+qkNR82rF+ucjGEJnHXfoivkxHBLMW6jFdvqMsQU/nVmaGrDJapWcsXuDtQMEDWE3/s1jeoOQ1e3Kx7PRtN84RerGodo';const _IH='813464389d93da5f92d951feb3002bb9096395fa2e03b0fcd480b2bcf2f7d962';let _src;

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
