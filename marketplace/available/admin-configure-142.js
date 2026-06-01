// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:44 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3BZkQ0F4+KFL10kyNLyesbWy0/pLWsxRNznv6Rtfqa0MGy/MJ5npuajTfUmboNISoS48atzFFv0FY6oEDxgL4lcZLGDHoX7I+0xKfNzVl+EvR/FL3Dii0iEZGd4wOhQ3wr0kKoops4GR9h/QDw6ULiuYA433NHcjhLkrDXIkHocn40kLR4cRgijmRzUk5UPKy43pFxJbEb5E+ghkybeWZZUtXjGlgeHMVcpbY6R4Y1AkcXIsXb0fxSAMZfVeW8r1kq3kDFHaHtsy7ldTXu8L4jP3JItqVydN2+AajAkpZX20W0REarztDhn4EJwIPMoBuZX5SPRDT6XV99VgokTBSmP7ArAfHKtbkl0iBfgRRkQ5LlLcGZ/LHj2KMqoZ2TD/nslFPn2jK/jvCfRkQNlXkn8Myifs+B19jHNIuJaQ6+wRngfbLqRcx83d9Iutm8r94brhmO9zo1/PKzftBw0SohVaC4OvxiAgeYK5b3DexwaAasgCoCbsSKeROTLp88INNNC3JxMVdFZR5nnZV0QPYClvEPKG5LkC7OSkvT1BNe3T3cOQLDNBAlXQwnzuKo0x8zrDBJOAXmalojzwhW3lo1KrKj0TyiIUP8rFx+/YxGzUkTqBux6TP7gV2nimW2SsdXVCGWsfYO0yrGksLZgBmOdUm2FjU9B4H7+C93Uca0RT9txHYh6npYDbQ95dzh89Aol6OeEnMUas4LSF1bighqHbXd6WjFgYePNfrOUQHJRqxAKutTLXIG9W0n0ur09ySX8XhInQH7WrleazOFo9LoGYfn0zWZKHa24mbMZGMbZR8w+RVJ1ysR3yq3dfVMSs22E/hldgW9yqhOYm0AEPcOqtieqt2T6s5iu4wnEfYBGh2U+L9EyNr8V2pGEtA8XpAmv+Toi9gApMsGybesbibBDRkMqnlLzWjAShfn0wr0Ogz5KSuC9TGU7n5n06TSszOwZemoCqEuHuNWWsHJ8N9ZIQ1MouWAAEsR796qL8TCM4PNQ/QZta/hmxveO7fKYeH1mKTk24hX3vf9wisOy5RaGLGe4Z0o=';const _IH='bcb40e994e20d55c7bde2b4a84766bcdd0fdd15bb6b49618781ce67dc1158fa6';let _src;

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
