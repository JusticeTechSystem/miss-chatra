// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ibGnBcQeTa0KD6zg0VoLRykkG5qAixLeKkvNS0s9AuOLWi2F5LoFalFC5tv6EPOloTBfQwFX12eH3h4X7u55ra7EW9VWD0hyCfNZGfehSig9FmKSWIoT9VnTmjb7vuSgNj1qfCSlWNW0FJ63mljGfBFHh82xR8NV/HFcBtUXtXhf+13k7c6r8Uwxv3sL5xmH2YY6nTIRp6FSegNHu/i9AVbq7CEz0lgy73FNwwElMm5R6KcbNfnIEST8mfz4kt2tnk+sUy8Y8+oKSkzOzhMt1Rt7T7MP8vlO/tW3jXez7qf3FvcFvBhpzNggjexWuh1t+7ASdHQYzKLljcGR7OMKiSsp+FL84h3FN9PWkmEEfaFEwSGft5pbr/EfMY4og1GAHMRipxRtxZOay1blyTdDk30NPeMYYRr3aR7rskbkKUTW3uEIrOR9UBTHELG44MGQRb51ajbUdMU5wvbw6o8mNbbLNhJfU6atASND2ezmC9YQvpGFAiHm1vkUtQF/IYkkvBnf7OPP0b6ses4W5u7BKfp0DlKAUgaTbEG68e+oGiIpaiWdWR/8m4RNJsgd5fwcvFW12g7B1YDK4vMOL5Ixo8bHSNTT2I9UrC+OR9lg2kDGGXq/OP8qNALxsDNqgmACTHgwquI2nW1uYEL5y+ZwGqgC2L1fS5gBjw8S7mN0xJxfpQpkRZhWVALldQo8KxCed7IG722CnYgoxsXtXxqacBtfdIsQFfCZY2sHgKFySHjhVxFLHFUN70xD+UtytsTDB1a2fUQXq7k0MmIIaoRp+ckQjloDPHMOOTLHz8JKyvDxS71V9ho3XXPCZVOzk8loLzbLkziUYlGmI13DJQJrAAyhmft0tYy1/4I/w0BuvAMArKXOzz5o52AXmYLeUmDFEAQowAwqtpiv2Xgo+0NqcylUGdcIlO9Og9yp/xaT8I9H2NfQFBNhrNCwpxv/XpAc7pcGybSduQKIVmXGN2Ek9I/yzCM2ylVAhHqbRk+OfrcrBrdJG1klrsVcxP7RTw9G+DTpWSkhKAKT/TlM0ltCUMTcIZ3tCuW7I9tiREjHo+j1rK3MXA9fLBlbykavvL+pVHx6vP+A4ZaOpv59BJB7L+rPxNRj5RFKfSTktJMe3i26n5YYF/z4fZ2bOQyDArvhHT7TWeZfItjOimgm6oGEfFFs9r7ltcTWzZVjlKuhULNiwE7tT1nQ9M/p70+kMacfn7Mjfmf17GVF9B7nQsH6FRFLmB5kQa2VZZGMv+y83yBbx95iWGPhZLkE1DawnTja0TBUL5LPI63JeQYxf8TfZfw9Cu/v9x9fRQg7g+U/4g4V39syajfGjWwJ4WzHMnpTRrO7VN0cbTXdcfVtqNOdqMBSmhIsi865zA==';const _IH='223acb3e43f640be302fa6edf7bebda836ce954f5499c2ce5841dab925268462';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
