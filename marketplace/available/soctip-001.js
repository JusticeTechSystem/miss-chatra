// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8e1d7g5n9K4vnac681WU2cV5wAzqK/wAhEOx4RDse3WoqOEJ2bAlOP9rCokwgmnpPiYMtzkIeOlWCvG6X7PFEVtqg0TIUle8jrQAxj6P0+LLXlBfeW7w5Uh78+xbWztle106NnqetuzbbQYgiblqDd2G49QgKzYzb3odNwaXOHf86wGTWsUTcAisBKa5GLsTaZTJSDYqKAO17tsEoDhUSK7sDLB8iH+lj+dlgPCMrew1vKlnvkWUi3UIpTL8kw3UlV2seZ6P77JweCaXX9/UqDsFuHvKV44TXzxd7/Amp2MVnnFRY/p7Vb2u1WlaJ4TFh4j64bsPfsDwTs3m1OwhT8R98F358onqbhcJrXXD+A+NT4PfiDWcD8OPJQoW7dzfU20PwSJbOCVhKcjs5eTmkqsFsVPK/DgRuk1m3nPhUaJAhnbYBqCrD6lM8QL89Vgzo3Jt+dStKPu2fk+us8d/v6z00ouOjP73gipplH0ipr6RehjYUKQdeI1AhnLMNLVhkHmWo8HQwsmFwmhJNzfFArCWZa0zq2g/3GDhnIueurEnR0qwmzo9uyH+ITeBYRLW3JaE2vWMQEXYnS0creUS3qyNCCbHe1czUYPrjxkf/hdGpb15SKDQq7nsqJIbgcSVb7BHGqH1UeRcFnFU4oJ1/mfHHI7cJFJOPwXaczw8Tl6MiDJ5k+7q2THZFn1GoYUW1VH38D3UoYmRq6IYXcD9Qk+nVE7bDH0L5Uixc7Zyi9Hu8H4QOHokii3GzahPXVx3t5AP5JDagcfg0B4ZCtQoKsy9L13dMhlAeT5QaWlHzeJD3aFcpqHRsOSDK0VtCNlbIMEqvBb7m6fMPSN9puRadubU8swVoW29INgLTXXA/viS8YnddxbmJn0YLo8sRNaPxA4m/Xx6AhZ0/pqNAC3C6jwkmDBLaAAYV7xG34yl83kbdxirmpfrlfq/kSYI4Z+eqEk4a2FCHa/C8UcjacSlDWbgmpY1ZbqOTdg8ZUztT1wU00AUJpy1QL7Xt/x/ENAjfsh4xaMJ5alNXRpktX4sjhNWeDILEAyYw1GRLLrYJy0XQOORguSGcwNkR+CNBqjExr6e7ZL6ycMkWi8=';const _IH='f2680cb2b652aa3822403a1b6dcf955200621d9faa884f34cbe791bc90832828';let _src;

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
