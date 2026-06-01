// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:37 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzeTq6Wbuj2rysV+qUDWncjepnhaT5MGFpRi1dN3WroX6iXpjf6ZTeAaPY4zNGHIcrra4fuTfUvoHWtB3+FyJh2iwotk2vzZyYodH1ZvNgfE2IikkuL9DyOp5bfLLYA7C2atZyXQA0Ojo/FxT/X6x+acM4Ds4/kFaUMOcK+45iQpRblWthRXRxnZTqjcg/uvaw0J+X6Z02RrRjK8Cny50wy88O04vddXbgC7kjLrbI4e2JdPiM3uA3n6e3wCl/4LYdTf2tUNI5pRUJM7nPXASIs9etVsaq3lOdCgWSOwlLoZJKsiKY2tvXnK7I/f82pJMGFbKDQZG3JwKYtNXpj7ftaMLMEZ1pt0yJSO7JKVFXp4YR1do6oIKfA8a6xQBI2nzZUg3UfzQJ0j1rr+o/2Ac85AUcL8XB/49haAmFKwF8thbCOdW19tVzGPWXiygtf68/YuOmeS8Q8YEk6mbhmpqz1QFsmWOeNk9GT9ijUPckyvGZ37jhDxhHDgvjfMc81+zLMQDXWk+MaMFxDG40VLmJs47aBGHm5hiedROM3mOsN+NVCXunKHlIf1VUiwQDeKx6Pcn1Hr0GhhIOiMxYifyTL1Fh+j8mIzWrnwfX7EBjpGg5dJ7Pcfxks/Rv4psPZiDO2sreqFl7BNhU4xA2238OiyS1h640PhY85ObkZ1dHOP6kDyxLI203DzCUp+yMkcvm4vni+fVXi3J9nogZ1yeocd0DlEGwoHSAeDAmPzgYZ/267oCUbzCuVziQFlyuORA9VKgki+5aCKggxJOWArxgGZL4gDX1Cj/0BH8nxfklbECY7mObj+BqCnGbAkEtgAqYx4KFf/hrmvSZochF0Yu8dpMA04zCy7XxAGRzjMBelh0uBZ+Yb4AfYN09JszkjgZvh/c9kPqi8Zd9+AjutVOJWWG4X3ffq2hzfi7BO86xjhwQggsE42n3A5JhTqXdJfQv1qAK360pRvsPxO1dc40JiraVQNqCImWi/N8L/l+mGDk2v2cwX2fJlKG1bf1ynIPxJC0HxMXvyoeAkJBEnvcLFxlzdD/IuQw6v4/Anh2wpTJaT+T3FKpCZS1+iZPmAfS1sABcMwd9faUfFOX5p2E1IZWhunPDfnxSDpQZ2tCC0NZwkVeMftkici7LY+XjkAMx59TMD4/By+t62e48o14vnROAA+jH+WyVkXj3NHJ75wNlgxUXOTEz2SYwENLr7OJ6ijtHl7KnoXqxDgNExwHyahLVj4u0fHgMfM73b4ILafBGud6b9mIl6AeDsHRZF9XCQtmXTAsGOyp0smVkgHRkn4jShqIpM8x2hgBVTIH3B92XSJ4SldvO/ID5lBTX+WVQLMmVLGsNt8k4bObDbHf4EWilJMqmUBFFrqyn8PCt958gm+2We2a1KEMskIVDDhjeD0qxcVWfbhISmUlA==';const _IH='be563fe0367b78163de9f429261aa82c763db8551f4b1821b5c367610009307e';let _src;

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
