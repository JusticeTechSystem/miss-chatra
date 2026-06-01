// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:58 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5VGz03Pepj+8BYiTI1DhGWMdq/DcdSf9PWAsfIyrw8nvlAxyYOAPdqAQ561OjQn0BSFg/aaeS6dbHCRs9GAVvhXNrIXuytF/jAcPWnq4ifvbkMAhTDNB1EDjIEln8DkIFf989nZnXVNSIrUfY3RPTcAVXanUgt3JWGgYv6I5Hz5nVTz20iPO/pOO37W0+DsBr9GPsbOOu9sNG6+Qq03Cafk0R2dQZPtVKulJp0fnb2/pj3O0yYLvOX4jRyD1d3GpJBtgBa2gdUVHf9lyzX6GkC12eCl7qBHj/AaDP9lvU/nPApDdHHswQkXOP4Sr+caKDwspOMzRDxcHFgIaaT7h9/F9y+IdMl9K7tv9tdNj+bCRzJJ/HZ4j9TVFsaZHOFW1RPU5Unytkal8Oce0p29hUAynSrTbrhXT25P84PuJuHL5fLdXnakshwAIneTqx03A7wJV/+AB/P89DtagHBITw4r2f6AyYmWdpmtr8UkKildc+a4L4Z1KU+leWVf+saRX1DoKf62ROfxbIVhlTt747Afba+sK1Tnj+PmdhrS07DvgSRLC767A7PvHX3yid2UHg5papwu2rCaYNe+39by8lnkb/SllmoH7Eyf/lusUOv268SRHRrH4D50xvRpDwO3QqPJ+HVEa0GbmMgkmlKIfr5eXMwFnY9z1FC6dK+u+ZDZGlsSGjQlTceVcI1N3osp8D4XsJRrlVqyd1Xj76yfHODZQoSWqtu7Pzg=';const _IH='d5d5857bca0b3e134c371f0d251554544f46b93d60d20b0f9d7e7f68c486894e';let _src;

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
