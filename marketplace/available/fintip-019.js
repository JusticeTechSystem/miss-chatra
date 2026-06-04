// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='p7LdqCFWtFdMTkJo4aDNKeEd6KOnlcG1+JzOtUXKeaiHI7a6CvgDjxfH5J0gjI/xO/tLV2Ic5fIztJx92KfgH2v9Lxj6If4lPIdp4X+Om0uZeIXUor5LDQyMV4mB7Pbsn+PUiIM+brOvVGytSDLrHhFQRln7Sgqnqyqt9/ftB/9YW6/W5Ff+WresOLg3yqlo1x9cdG8hOmgIMHTNa5kNj60pC3WGUHKHRWKefeSO0vpxQPu5wiNt4oE/iqJo1Rn7v0Sebxl0i45bFYV4WufR/x+svTVAUaUNpKEytxpZ+FwfmA9FwtOL7IFNPKSz9bFeh4vLkLO1MxLrtI8J0WfVAcBBhkd0RyGcKmzW+gQH52Vpj+bN2XX8+fHXsj1qzkiybQxs4EpRJ8BAsHKZJmyk2pfCKOe1cmSBF9OAlRZu8ctTyKPo/AgEkPhZy8PqWzkHV7YYBsg4cj6blDZg1B0qFDBs6OVQUDs+RGjx0PF+oRksQF6eBRUhgz5RvaYGJ+dtZzt++5IuSo4yKhe9XHwcWo4IzDBin8BpigzjMJSfio5WpIDYHRfhDt3/H5g281+NBR2UkHSHuurKsmx6gyD1ccUf8FeqxwUl0cuKdo1lCyqZQe36RGXfOi2kLIGl7EtWG/W/cmDfU4UScVjSQA1M+UiwzYKhE8zcdpGFvVL8iGNEgkrd3JP1YsP0bDkaPk7RPWNk3cuE8xnqsJrfTvrSgu1YBShSZ3CTaS/ea0/p6UEEVYAI1dCxEsDmGIH0KTUsLBLkDr8XHubrsyMveK5DL4rNEknBUacsfjlKOxtmFrsBYC1ailqEZxkFvvndis08Xr0HuJT3tbIbHp9EvJU98ydfwwL4oyqnHnZPawbpiSo50TcNVfEuiv2/hthqLxq4djbcbylbzTs8rbPWED2N0K8GdAeeJQEZQKZ0qdkCRCZ0WXlYux/alzjTZVxZm0NRUIjBwOWl61D55LnFmx9dICWWU0yzJYIOQUN2Lvb2+RZ33xurfVP/LeUKeK3Z51JYgRZSCt0hizImXC3roD51fsEAG5v9bJiLnz9HCkl3KXTm6g==';const _IH='47bdd5950c313af013e0572a544760462996058ec99cfe21ab3d202381ed52a8';let _src;

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
