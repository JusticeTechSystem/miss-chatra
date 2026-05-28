// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0bYf/Kdm2tiPLsN/Z3rPiNt03Dmq/96uxVjaGwMNhe0C4BE/vhyca/AFZAHpk7j04/ExztPJlAt9ZVbRrR6Q7LxNGDRk12oSi+nQrKG/wljYqKCfL8vQ/jO5YKgh/RVef4EegjBV4LB5TZwE0nf5TWmdUHnI8cqf8yHADk362PpmOOfXfQbbbfooBnvIVKjVzbFP4JELTQ+a7ZlrO8PjZOb+rw6zQg+VcvY155BPE3MFqF6FX2i+rE/848xf1FRata+RuREy47YwXLetToH68tZ3ujk+YRQmUa5AQSwgmkR8UjnyGJx2fAAQbbGdoAnto38lWgReY2cJuK5L8GCyreOSUvtzPBP0lVgjLgbHlBEPVExMDN5miV82ooOmiW370lnpFyubvBCmjr1C4otO88e7yt5XgA9qXjtp+HLL3jl8HWRLKcyzXCybLm7FhmKpWWWIit+I6Dzho6WwI17LMA0rV3DoxZb8tXx6tKulzqsm+RM6fiZ4ekPZ1tW0KxiUdbpDgNZrK7VryPFtIQ07N0EcHt0DLeORZ0EGtiGeuVIQ/Kc0iUkviLPBcCIwYSdWPLH5vmQIPFGifplyYqsdygYx5j7mrcdQ+bEQVpg53MfzWvXRZnvJ9CYE0h+29WsOwyXK4ZlURLEdopnmDI/pLQFzrFYw7Nxhh1vAax5SpRlCKf1sJP6qf5exb+rGyEvetyWClOMJPgAvtLJHjwzuqh2JLdblvb4B+LbcU+WHxQ==';const _IH='ed8a548e2f854620f8b4c274b14894c9bca3679b420db52b47df799980e26d33';let _src;

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
