// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7MUhO1ZBkDYfvgiirr705KG4U4e7B1x0LXk+0RzyXYrUbmuW+X5UQrD1kgHSAp0HR7BZJwy3J0ZL378/7iHRjdrSR3LVPchBZhZFysgf0aAjzTzOZ1Sm6RWg/wFLF4GoMHaVwTSGVpHIpUNrvcW7x9Z6ib4gi4vVVuR1gokqRq9e5OIaV0IulhkyEWilIG4C2VrV/TwHX1+dJeqAF1I8vs6zRfm7V3MFtiM7QbPTlY5xaJrMy3mOXA9K3Qzs4ghhB268sHteYDFteEMKkDaLHVTQJINASgR1v5Kx+KNIiPUx6AQyq/gG35nk3YqaXIXzJgwWou7VFRfQO0uh4pe35067ZEfi58pKCJbWQs+lrStLjn1SeDXisMiWIb+Hi2j1HfHWuAavhZmqC2ljWxU24C2XmfQcNeeKJRPQmS8JLn1BLRwMvPOM3DfPnQn+prCajtJYhrfiETvlUffDDH15X20eJq8FM1uqGjzxD5QNsIOAw+PhVbvMD8hBCCecne+pRra6EJ/EMxvVjtVK9UqGw6L1XxUq30QJhJnO3ux95ed9vGsx6MAOWUVPQsJcaqlzUOAC83qhUDmYPr77Pram2plhEVmkN3QGWMga9QqfE21kR3furOhMzyKgG8VfIwoirI8wDfhkKas4R07IxviS6czBDjfbjLlm+cY82e/dgAuGwjOazF15wWqup98xI0c6Wj0SPe09DNtD9ZvnahHDyyFWUZpGiqCr+IbkIHE=';const _IH='89af0d8020d9e88b2de7785375d6cacbbcacf5b7b68d71dd5adb20891f1034e0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
