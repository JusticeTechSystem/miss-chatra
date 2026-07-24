// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRAL4RnCdiZXS/rw4ybl8ak0bKLez6l3VurXK3Vahu8T4LLHVfyEpjQeqLAnoTj3O0sf6sTi2M1Nreb75gZoWvLrnjqM3RSTglERn4ItV/qCt4hwwmZFqH7FOXWfTN9wDsutPweTmQr9kj+NGkT70TlMjsMBd+nkEmKVAyar9TVpR7gieUoCqwLUyqLFGUho8rLMGT/ChFj7HgU0hZpNzJZjN4ZoBZscFvS+gh4Y9XDkDcPxWAklChf/DtuDFZ2U47U7E2dihoF16k3xi5wKaJMH/CVmoYcz+S16jXz5jvY2KmVsiRSITz5MxM2OFb15i1svVi03a1P1K18YG+khBK+nKmuoGX1LexaheDyHL+hlRneVQZ8d5UINdPShGQ52QCc6eSerpFdO39z8YpTuYB7isaCEyF2yaKj8cOYkUv1bnpyE5AtV/yllY2MNixxEqUcBgcxzE3dbxTl4M//yI6EQNGfmSO7ttbtvTU2foiKCq93EH2l7NYc64aG9gAsqYC1Ua9hMVG8NwViBlbk/TPZkdsUl3i85h9uQ0d1kriCGy967HaYe4jae/jPkffK573NTjttOAESQ28MX4110U+4sffJTcAiqcIScw86tIrf6R5DYKq+ybXtlUf+vwYo2z8HnaboMu7xQ9kqZfEAlWW/80N3EOWlKmdgj/er03Z91XT8SzjRxq7anNtVaQrBYZK1PVlDRqGvvNNVKg/EiVuuNQHPLNDG/LgNwkWtOYmlgzvY+XZkKO/T53Dw8U3aYiIvI1dFK9m2kfLABxzBKI3kYjyuYX1vnluzSGHOwdxcx2Ya56PCu4hx1aaEuvNb5Cidaz8syV4Ydh0nirQau6y7q9Hx7x529/IZLQXgJrc5QvH6RZxLiFboZdugmtMqdWYMLRsCusaYgJ0UzkVdDi6nZfo91PikteW51ZJapo4QHVGql64cy5enqUZlw/Cqk/3ZV8eLswuqkUjL0aUXSBH4YJ5WA7FBeHGBI1VNporft6E+LVGh9RuC9ZVRZ+wVSn3oIohHyX63xWJK4RrLXYpdSWqdrwU+HWFot/58KAn1zw33a+dLMIfmNhLtClJQ8tR/FD+xrbS9hYv3m6xlT31+/R4nlei+mGMCknxKKKn5IPtETBjcn9nU9TI9mo8CGw258OtdaCelUrnpVvG2WIXRxOnJ6sYsqnM06BGC4wJTIMmJjDEAbChtOj13zJg8/5p+rvcyMzcLCTRcSA==';const _IH='37fadfd78dc093c43ef26579eef3cddbfb45e26ad448cb80360e9b250d09109b';let _src;

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
