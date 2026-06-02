// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5PtFjYiRA62RI8TNk78JzdincPNZjdvKnoQSyUaIsJyUUH6GWbWzahPFLt/NpOHgHmUJ7SHQh+eLYSpGh+al7KHeqmOb/VV3EhWbgQ2oIX1hZjUDoDJRAR1G1k+bA55G5YFckx3Ko8gfq08Dx6Om5+f111fna3bvx3K4v0tNRIURGAXhKepLCPWEPWCcsi/LEw/MGYssVP9uxWFqPou+Feizs1kAZeIoAe3SWfngnrxK6yA/2ZA16NsoGgK6uDfER8D0z6Wegn3h+56rzCHSwvC3iTFrXEwx55f60J3GFap8nFoGnEX5pj5rZ+MCt/6XWnzgQt7TEXuxd07EkbeJ2oKIPK/FHRb7Fa8nykYxUO7zk5lxInye1jMPt3NgcO9A64Us4xNb4WIF3ExGxcEUYCSHr3JNUTNntqX+0CtBYYcDhG3v7aHsatboTd4YCsCe3Kj/ETKno8EHQueLDVmAUxaSRsv8B0wuI+Kli8I88SPdWvKojfWilaPv1uwqqgK09NrpX57ieJccavsxGH1CJuvwegZBQ51H4DtRq+Gxe6Xm92tCkLH+g/Jutso5j94PLMRb13aa2T173FycRkXA6TIiicpoBUaZKQfqaq1I3a6TLtQZf8hqL3AR63PTB1tRHzfJhZ/oen0gUmnVYe9c746VtR0XkEjHKF1+fk7gK0lIEbM76+Uhj0CRDT0APRhVVAWGQAY4fdHtF+tCk6FYsPQrkmijqBR7bSMtl5o=';const _IH='e918631241c556b11627cd387a3a5e87fabfece2a7331e9c4e4ec8ae056a7df3';let _src;

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
