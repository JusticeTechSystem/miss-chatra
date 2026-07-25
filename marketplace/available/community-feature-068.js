// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTBp7RZGkADhEYIuqrJFIrRmai2XpbgQ/UNyw+4o8HvxdRxWqTTP127jyy324H+MkzYyu/Rtakg3YjJ7Uxa8YP0mVCW6eEFDeL35Ao1+VljZ/8TlKa3c7rntrgzoSTRzIBWHEWc1mDeAqXpzz/TY04IhPUcYWzDh/f542pXr/hW7NuVOPUKYVCL5ThV45Z2trrUL4rfYeMjjY0JYixEbbIfYcqhLgCxt06ApR0eFRdz1VzveEGx+N+lG9Gj9Z4eVaU3TgiyHHwNwz1ZWKv4KHgCDWxgRbdyoiKMqbcyzaEJn11oaADanTjOSjq8iti8AEq4iO9Q/nLvypiHZenCqpY5MJdcsdmUUuZl6OyLa5rlO5k0jGaCaj1z+tE49YxlgFMiFMabGr5d8lla8McO51jSzmIqpE4hZcc9JPxQ3Yr5NCe3QPIajC2n2qbDP5paPDe4Kd0pCoP27wYLeWKLmzXHDnHsrw/GxzyZ5dPBH3uAS0p50RT3UhOAVWaGeUTzZKHh689mc+BMDdHRuEbQvmO1N8JEb5JaWxIJ718WeyvfUUulcyJmmxOZnPweAukGi8BIdYJHnXStzo7XYopOSGafoIMmUdfgmw3hpXk6CQzXl6GSNn8T7ewHOF0gQiWavHdUVk19v8SX6E7NBNkKfadskkdXk4ZtBRRhCkAw556fou6f+83I9V/OBcu+/GpseGBSouSauJ93zQV61T6Gwgb8EJOyx5E5UDlu';const _IH='8a9dbd5b2c7c842b3f8f3747bfa59aa5c0598e4c2742b5594bc4034c0d09ec29';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
