// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TDzU48VYVL6po5wjGf5aIot5n1OdKV+78BDqj0w0kVA8wYdIzVm6HhPtDfrEVpBMYvfT1OL1EG7/bc4lbVG3xdCgeX17FwptnJ5PBgkWmYvCZYbLQeeMpX3P3RVup+DHfbOGJrWlRQ6EBm4rmq5ijVybfBZLgbN6j5uleABQ2jc1CT5ro/j7O1mzFV1HUdaNeGt92/rklanGOJHkk8vqh6P1xfBfeVFRfxxLLNPmLQbQqM6pGuvmZqGyUf2qt+xTfshKs2LNWlxyIJXXT7muNWaIQLYkftHFIMumuUX/Sr1DIIyaDi4g3w9VuhxoDcio4PW2Dd7GUjMW2A9bC+yNc+UBxZUFoaQItua4Z7TfOC5JWOHaj6sSo+X7LuqvWj2ctSlivzW6GpVSryiBcYyonDKBKs/Prd6Q8tbRSuAtmwuYsax3UMArNLH6JsGR93AxshPU8BbLbFGwrJfqWXnv5FCB3OBc/zN2sXOvGVXmobgZquFXVMvCwnAT+oUpIql31iR1uZaWfbuaWNwqfJTYp/DTop9Oqcwcbh+X1X6mZF/d+IJh/JVAAvxupl6EBGW4t6j3xKv38mFew4AJdPeApWpDwzEdZBhv4Ke/QgLMB9eivAI8Lw4wku0KEYet7atHEaaV8z8iiarWU6U9dWdeGrswnivTAzcC/wc1nEtnHKpev8fkGUN8r0tq7wk+RXUpo9xo4r/sS7kKau7JbfaCx+gs+01zuR9tOlhKD3kzMizkJVb9JJGtObVsKnmhd9r/MVaCbpkHS1g5LeYzW7KK8+IHSNI8izilfPOVkQkmbnPeiUnOxkswnZ1XrHqqlaxXRSFhk/LH20v6KXM3xqZMkWk/K9to1yzZ5xta4q/Qzqu8pc/DSpszaS22BzA/wfpoLPdNdfaoY4qsa7zo1ej1r2EBxvD5v6MSIhxxaXVr/ceS7gXkDwVmK6HTX3GMIPwlxXN3MhRsvmpDmkrBshTTbpvJk8OSJ/P5fVGf1u34mB0ICbPgMm49/wtPn/s0tHVWNLgTbMQrVlL5jtnCKI7M9AVwRDxidL+ic994pMlwd8YeQA==';const _IH='d675e2f7ca7cac5461a98c6125bf1ab9bf75b544b6f1b0fc4597aaaf79b49c7a';let _src;

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
