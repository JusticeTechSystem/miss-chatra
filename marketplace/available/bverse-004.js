// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6TS32GS7+TZAI3yr07fUn6HRP9An6Yd2waJM8kQ6PjbR7Bbuk3um9qgdFgjOFQyd+gWQ7SUPIq0+5pkJ2p2ncCrM1GoWw5FX3W+wAu3fDSjSKncKL5J0rCu+RZsLXsu6YgVVv9vHCrmE+r2zn/wlSNm2IF/C1BYmzNl7I5hcXxLVMqw94CeIt2qOI6rz+IiE1aV075yifO/02mTdNEkT9/NOqNDRJD9DKl8LEb1WX8T2ElfzopiuBuyo9Zdc3FbhaWnfO69hbFSjUg4eydaXcUCnHnFOnvTrpTfrCDPKYqwgh0Wc/6JooEP/j5OJtYYEOG6OV0IroT3TQL9E/bhV/5iRJ8RjOWXq2tXGjMBIYcfqwf7G44UHbFt/pXKNTV3r8rghQ4TQnaVFYMOqR5gpVDpoGgXax97TmPUbjSwjv0z/KLB4Tq27x2h/BDCkSOgF6AF3Lc5/zTDPeiS002DMW2FWPNqerPq0YMKtETEAQ4J/9+JNGetVJSHRXIPq+ilDacYMwVin57bUGSL1RUK2sdscQbAGd6G5gYV4Prg92cQ8wqUQn9qtD8eu8hbuY2xbe35zIkcWHbM/1JewyRChEN5aca73P8d80tdiC8XnxmfExrXVI++oXSZCS4wtTOJgoLIzlzTpotRzJuIFSRSMZi5X8uZ2Wvc7TTlpMkvGJq5lyz7Byg==';const _IH='cd54aecbd55e67aaaadd61c2bfcfbd16cce1e8ab6880d3bc7b61787cde04f577';let _src;

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
