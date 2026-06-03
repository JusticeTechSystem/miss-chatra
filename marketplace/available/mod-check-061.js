// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KceDiRf/chuj8VD1BEICpAPtmmre5ECGVhsEzSl45eg5tk8C9DTOwkt/alPrbwn0WHUFulZGBXEGNEQx4r0cE6GQliNi8B2ne92+4F+Uhde4b82xdz4CcOwdOTtZAy3EeJ71G8lJ4aKXsp6CKxUB+sf0y4n8yGLWxK8a6wybHZi04m99fJiqg+NbGnuDEzhRn5WdhHPBU5J+eqe8oXsi4Zuql7JT7BavFS72cVNwT6OkOMXPDJn3hJ06l6qUCZJ4lzBB3xQANZk3H+bQw5AYp6MP/0egH/YPcoRYPsx1ZS+fxsG0ulVDd61nE3h0ki0dGObKLxbSwHk15UDgpMeD4zmZUjxK2WSDr28s0VVLmipDXkh9iqkeYu4Ge54cns5zK+ajUz9Kg6OSfCAeUh+hR9Wht0jlZ/BDLPxiu9rFlYeLIWda4EBUaCATz6qKKAFLr9UbJTF4dPgCEKjf+j6Na7NsmEmOKsj82COV9NPd3Tyt1RS9ChF9CmqGGUIfy/dVEJfrX1nD40X9UuF5Tnn2AcywjHnvpKLHsCiy7F/ZPMl8oW8n6loCmaEubJ6V2Ve6LCDvRl1qDfWr94b9OfgOSTbo/1dLlanOcFkJM8yy/800IT633WKuDDZ6R2mb2/dS53L687d1HyibuPm6xPkppv963IOEiYPphR7Kqv+CdzKJ6rLgTPploy7LnuUKeKgkOHOjxVuZ6Bi8h3s5CjdQ3sw+Gg7TV+Y1vcj8lKvyDyiqZ/wJJaztV+0fK/HeUJD2rcDpQGza+DZ+YOiOlm8FI7jmnfLdqxRAp1gGRsZVw0jFko5F4xYZKM+RnIR0pf248LJLTMK2MIhv4siyGYqNxDielS4PRScWqq3nDgPrrbLgAlZV/gRZAkYatUaNGTquJ5KKjaDlLua9lGwce/7jAEhSSCTv/aHXaTR2v3m9MQucVvrVB325nadpoOROlzKSTLl9fGuHOYwIN7XmdrqnxaNXmhki2zpWk/Jsq3QuEraP3mnoyvl/idalaPzclEW+CZ4EvJruJcKNtih4h/64tha+9gNu83bHm0hyEQxog5CEjC2fw93Dpt/ZDLjW9TglDMlb5ekD/tFQJy3LepIoJuTEMWZy9/UhyzkBkJdTHFGZAgkje6Vj1D7zyvDXPSsz4tBxktbtBJCR8xxx/M/931jZY8dKeJ+nQ1to++4kpXHpO9+kyIFrA8rpNFLDIge+O/9mIetLeMQKgYC23OI3T0Cx/X5GWSGANAJF9X5T3vD6cW0iocfNWo71Z16tlRXzVrp4Xgrw0Q6FcTYP+FZJaIC3rB7gP3a7mzaXlTS5fO8ePDftGAL4h6jfiaMIYAlSXyhyWKqnVuZAOH1fBzfKU2ycEvCv8SaErw==';const _IH='9d07073a725359c3459282f5adf3ea629146ab0d1d61a29337330859f0b724a8';let _src;

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
