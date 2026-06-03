// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sEExSy1oIUGgtuQthseEB7ETcTPTkKdwjEk/TSke8OQRV0QDKj7LOmbbVYm27rA8NI9XLeEiIvVrMvtGk7RfpVuvMGoHxcoRstDQHHJeET9+BoRpwsKjWiyj270ZMF0m/Zv/7Vzp0TX5V2jmxKdp/7xc+5HOYHkaQRCG1squwWZQAsAur/zPu4rOZUgp3w6QNs+PyMJunT8Z5hFY7RF7O4rhlZe9TfJMEdT3YH2nIfswp3YkHMDgT9o6TyjIUWhKDGXmDDrmBFzkZ4P3iTUXifgmUlwXPNun9rB9fRypNc6r/hVv9H7l62eNs7IqcXwvRGYgWkWvuaUCPG6px5f3Wh/tI5zG0VH8S47ww4FwXgPpBi+0LHH/lUrZ9XvfrEP0+jtEXFbxb7SfHygcjD1l3RVhErczPzBOLsoi0bZlPYw29nfnBegP6sAnguSf1/QqW4FCW8NlL1/dA/G4eUusjDrakS+LI61efeHoCFIPDq21VJwC24JZSWFBYYOoJivw7AMB4nphBRnvNEvk/EaEOFUBvnoLWwTNhtf32HZKdZUZ63OpJnXPiTtDqLSMimScuGCp1cT6+orkEbCBTQ==';const _IH='c127a3de69ddca7eeea9706f12c1739c9bf1ad8a6dbd057f2b9ca8676a3aff92';let _src;

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
