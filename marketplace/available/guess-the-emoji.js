// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jvJdJsQpP37C+JuyHdjrsRVjGSWsePIq//F8OyTRJ1VY8qa6Gw1APWr0Wf+0WG5PxkgFr8FNI/5c0M36Lw+Npi54t0sjWJEukx5+VFUPKnMZhwrqsRGkoJby6W+i5P+IxnCDk7qz1/VgsxeI6sNtVJ1ACUxkWETdawagHe3yx4dhtM1l0ghBEuHYbzUCAOYIkoK9/HavAl6ziw//HhOGLB6yjomPDW1hpxJDpreU7AUVcUo0D94dI5xLNbXMsypcv3o8r4h9vFJiImk8/m5XGsyxVWeVLzluGHVHRYUlh3rT9uq8k6RoxBntP1+fo38FLNiJE+3f5BqIvyTax4qWu/gy54eWEiTD6CkUUhyeWChpew43WEXSiTfVdixgH4vIdDqUC3LsDmcY78Ha/eOdWo6RzTGtUTaj88TTfcbqXZZ61ncqp66csft+LJP7rgTAN8qIIJreEvlrLWCpaebaZEvjCUbhl/ewbJSAZjis13g2UDK00/wTv4EPhQf1/t/wNfTUth9LiwnjqdLixHYb2oAB6o7gwTAito59nIeM+hzR/rCGlp9vx/GKNa6pm8K8vFZ1pCCTwPixXI+/PREN9geh8QfXo3GteBQvOYmHFDZwE2donxDIKA0Pce1VUjwPhTC75eJMR+OZ7B6NS2Ozzoxw3Lm/ekKOP09KLk4erLQLyVwQu6y3p4Js+fHwGWrNxjHZRmHJujfFKntzh9iUoYqPSAQ9Cldcoqu4oCJfxydBYz1jJ2ZRfbZoxns0hXWBJOGhQNugBOKXpZUpTb1K6H9hHQ4OedZz4odL5lia3JzU3FXa3GOQEvnOgMGxTBjeYysWT1SQsVtqqqWPYohlNiBgAvFSo5540xOLa8bNzHgVrxBV2GsSRicEMgO5WDgDkjVOorH7F2G1szfSkbJx9TGvQjT0jO4naNGyCRNdrqlQlkD+eOfpu6vk27d9/8xyJrmnz+Rrzp72M0I6MaINs/dW9D330xyL0oqnU5qonCUkkk/FfiRUm9L6WqpB7/KZPgT8l93ltxiBzi6zfjSQF3noTnWoa+xdKuu7G5N7SQqkAIT4DLuARwpY3w6rf3nhAMGtSNeIUKv+AgAOn2Uiz7abdmKk6OeNN7DlzU8aHaW6yI5pMWG5Vgj9yITo2NIkpWc+AsGUWA1DexkJ6EKqPQ3l19JHIi7sGlTK/1loQaS540WBvuPsbWY59n5WpDpc1EY0wdM+x/hvsVmq/tffYGG4D03PJANLmIy7YwrHVXqnEJ316K0LBitjXAiVw6z0bc0x88EWqmJj3duI+Wp5XMqNZqtPDWCjOLrDhEngfEzOWggJF1eloM7mNffs4oaJDDrxDygwbXMsUE3aDMGOYklrJ9PShrDjrv3pfZKL6A6cEPy0zoLLGEnNV8o7LWA/HPrJrpBmdtqqcSMS2pUPULpu6ENzZHiBDn5zgOZivYZ/lC15/SOpBS2nvW9rt1Gz0TP9qAHVzU/XkYRACajfRSfkLg5qBmW0b3P7II5ZEs60tgMhWcRZhoNezHEGv3H1g7qizYAkXxWO9W9ntAaDV3ObvKV/KTUAoTkUl2fm3XnwgXsFTr4+n5yFIGtfdSeC8lsj4uui';const _IH='42273e2f957325b2bb1ec678916f88a8767e2c6db4f3439383a6b7d722d195d9';let _src;

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
