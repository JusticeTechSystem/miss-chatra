// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ehn0eE31rNQK4F6sgfWSg6G3c6KzORGZ59lu99Zc3X7pCSBdtzQlyL5ephvTQlHtVZTZd+55RBdoQnGzyMJ6X5TogG22TwkuEi7abTAaQbL7hqtJcX0tt2XE+MzheKiz3DKx6h16cyazxNwxYrvv3ku2DzbOwOojb8FeEimaiv4/7wYvJKO0bFDvj4tbcp9tl8wMVZkzhcr5vDUF0snnLUcRyUOYR7gfiqQCOnTRlAuO0MVwJRG2/QcNJXW+32xgO/nAbbKoXU8xkcMhDn0z9u+rzsMcOHWLU0HveNqOM5wi3aOS2xgG8FDnHb+KQ1pOwNczPuMg0vG5OECEd86cc08fFSuYoJjB+JpQ9/kUVkmiTSQOoFy++HkH3RMV1upjvKrSaX4CgZjPLu8J0EE8GK8cmOr780yAEwvq6qa9m4rm2X0gNsAhHQh7KvqWpq3je7KTB+qJmFWK39Au5ViT9R1hBIReQ3wPjLyDdBKDyy5xak/qTnW0jp8t5V1MHqOWBhorPUaWwdEekHtNu5BksmVTz8GXfYj8ANhh3gn3RgKMh3BuUi3KIEdXqArx4nrvfuXTVqXJOYVYRel7M1o0ZsAH6yLciVGkyXnyKBiaYFto2BeuJU4qE5kQlPVvi4rN51q9O0cUE/457/2Q0O77WzO+WUgcWJQ6XM9PCUKzlHXg7zlLvukyGtZIB6dkiMBe4CvJfXA3bjCxY3TIvEtHCFaalBLlRz0DDm2SDo5OG5o9FsmWnbjqxAI0';const _IH='1401f016392f2fbac1498904b5cb019ab3da409c7aa13fb17b456470c358400c';let _src;

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
