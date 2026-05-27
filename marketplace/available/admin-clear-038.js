// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sbFaQw6w3W4gqduM3wIarcQt6ApMTN9xGiHggUod3PKnQ+RAPECy4NXqIvzR/MJ1h9C3OiDgNTrxGLlcF3R5ieV8NtlCG6Jlu34zKP6l6tt7SfAWvBLEE+NNbly+gzkCoEcK3quiT5I0WY9TrGWzUBQqvV3otwsvQg7MogogTrriSHatn2mWr6EjeKBP6cJeH1MZrjrYH4GtoAGvCaIaXoiRPnxltHqE/vBpqXg6Zwqy0fq21LZ4edOhhuEOQM9wuikRLw0Hw3M+xNuuQ4/JdYsZlTN2D3ATaLIVvzIIypXwK9zZiEeIPcbOU1Jjsewk4bW9I1Xb57hRKUYIz+qKpvKcPpA+jUM/tFFWdjoKKL5gEV8/GusOAXFnD5tP816uztqD4UJDTfImrlKu2/CktS6UPeqNIiGntEZnA2lCKPi0X/RWVrKdihtGHMg0Lfo7oPmeLMi7Glwm1Vee2ZSZ3NFfiBcLZUhEBCfEL0yUC2MoVjR21IqK3QOKk3Eshv7qomyLRx87ZUhBovpbad+jGtqogmIPGcdpc68KU+CMFWvHpxRb63fyuWZzEJ97UBj3MggfRyfsl9NoPK24QKWLbnJD+yX7HFocKYCshUWJ51gIrbjAMV7AlpkW6h15J9zNYsb9EqbcK1zM/tFdxbw4d0S6ezzHnVxyvPy/JHxpR+5dMlDWZ3pN3dDSxExJMqN0b+79Px9gy+VkV96wQNdr29jM3vyhkk0pq8YYdgkmbDSDL3ktAmckF9A574j1iwJhm6IQj2KIBCW7SMAmj1qhZztIXMgesU4RRKIIJ2EaLzvcsRhPfZSVK1Gw/dEjdmg/w2I+nTqW77hXGGFTSKrKi9r+hK/yJMAkW0sbWDQ6wV3cCpZxgWbG/oa+T6r3qhWMLFuTKLq4JEZv+gaq097vYOhIP/Z+2U5vvQQrvms8fdbUm2FRXKJQxGAzFSDPSbRMUlaboBkn79xdXmKZYoJHZbMQ8leRx3l4fvdLSfQ3ys7SG/N7+pY=';const _IH='7fe1ebf798f36a868c1281973921a32ec9c4f8a3831fed6036cbcbedb366da39';let _src;

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
