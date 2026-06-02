// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4jBueUwubsSwZHg/B96MJrbl/tncdXtJmm7WWdoSxVYRRd97O17OQ4y7T41dbvUkBwVKqN1MnBBA503wcRTQ8UmIJeBM8nU3VVxcMoImo7/sS7pHh41JZqJ0sU7Cb9+5llOq06i8TLIfNxNGJi9MWNN22YyCSP6gu4alDGWLpIHq9jy2HRIQls7IWFgKjUigt7EMj+kjeFxibPZLvOhHtahgwt8oBUs7NLZOQQHYlApA/JhetsZDGEB+6Usy5v2u3VquTQr8mdtiWu1nHbVLc80y/FTj5o45dQTuRG0Yu7QsSO1MfyCSyROmSKXjY/OVdH/6UiYNNh4LC+VR7+OvkgINxHnC1olmzZVeHIX9IIsAMm2aDXKWnN21mqHHz54QHHuSaIcIjGF0QUsXQ5/fMZZrkhmTHTL/BfdANgUTSfFWswhcSeXcNUFXLw9AZJy324ZTLqK/YLr/79o95nHl87jNNExdUSrfEf4zSCZ0GJv7fc6Bt+nWzajpUpVswNtTRjMTNNcCpiJB0zbHXD0Zl7FnGSGz3eX/Oo8JP0DLEjZbkM1eYe5ofr0V6y54MhmmsBGAhta7xw+HXBNJnaVliZ23RZAmIWcN6LQndhcO9go69T21F7bxKZvpAz5iAR4tmXuBERb3X88ReMOd9IzhGncfPr/ez4TRnS/1Hjda7P1eqP0AynBnxu3Rail1bXLvS2YpjjzKAifB3Llryc3SyZqmgbvn3uNEkv2c3W9UixmqY0zEQB+UTnk6l5h0Q32cnLwOIXilFV0lkSajVG5menqJJkWYisXt5JFj26MB2g1VMufGElaw3V+p3j73xIaXAMyjafhEioM37olygEn2eIsvQJhZl0Ce7fbdJQtVN3fXWUNLSHuDJOcUIUyntROqt7kowtMNmA8t1IQt8E343+uJLziJ4+1vmEC7Ynxc8XDSn3K/OkorTkiPwe8JfjSxgwohrz9Q59c2AAJP9URAvXsALti4SIIct46Qn1U3q8KPJHsMFv5pbTlUeyim5EfxD2bnVCBdz0A8IQQBv2H56RvjA6hUoZ/2Uqz/gOEDzOA0';const _IH='c627e79f7e8382b6f5ee9d0ca7d2b01bf2b268deb1d8372f407f284cee6667f6';let _src;

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
