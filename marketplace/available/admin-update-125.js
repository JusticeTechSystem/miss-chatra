// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qi37SKaG2wV9o41M4yuAYsTNF43AmIFAQt+06aUuGDdlzeFt7ebvohZTILLoA8gQFXyD6YrCkfkL55cUHe+9O5j22a/faAPKe+d+yoQIBBPqj+Nb8/JtfWpS+d9Ma+m3qvjoJHj/b2XuTJtlqEEiEDH//+irT9Z6ZM31HCx0TUiRvFeYHKOOW67RTBYnPN4prFfH8xzy64mZ4ZAeG3SmWi/ysvnYo3CGBlhSdUcvvwmkoAiCvpo/G9AvikJy8triRfePbku+xr17qWKPn+ykPO3WrSkmlnKGp3cRI0EvnZXOoKyhJ59M2m28jITeuqE0O2+oqhMB8PdXrhW79DoO0jqSay+0BzBl6b6LtPM4IymIVTSQWdhTrQuTpW8e4qygODmKrWhClAmDV1y9H6zaUu/h+fMQse2+ZMyjOY9yUdUSepLV96o0iNbWChtNq3jJe4NMn5AMgPjIY1i7vJceyP1yYXTppl04JV5hidpmuD2B4ut1HPLkGiZUL8FJGa5RvIlR9DGiCivl4q76/njipBiR9sO3BQyQw1/QusKqUCDxLJisnrwTsEn5ZTrgfINAlHzZmYSoS3BxmFn/8e1Y7U6vU+bkfBVHo3t29vdqzDcoKulcrHwLHw3i1bpVDDCsR2M1L0XLSG6GLf+1rW7iGnEORsU9QJk4n7h3QdZ9yQ2wlR/qyOL5JVmao8mPJf9O47ygHQHOBf/nulXO42ZudoU2BpBAK9BCCc+6jzBiDivuwGLxIutOcyRj64hw/oflApnBpAnFd/fD2Uxr6jyb/Hwdpq+HghTuajcq45iIpwgPg9ikQjynsgPeteFWdSebpNbVX5XytjWUS+4Gzj/5ExjuQm/qCbzQhPuYXz5YIJhi/KlKoFgKfDOcTXZhdQ2ZeEKXFreSt0AXixgldnVQFvVDXfVtBUMHMgoR0wZUpB8/T7PkhyRoXT535nlZPjcCVYnLrogj2SYro1JYtCyIKl48+zK5Llb1LXkKwtcXdvqY1jIydCU4E0/QK+J18UPWtQ==';const _IH='cc3de1a716d8bc0c4489c57f9e7966abc96e6e40de94a52c92da21cf9e62f7a3';let _src;

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
