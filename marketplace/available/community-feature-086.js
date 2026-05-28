// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='v4slC51Te7ehfk6kjx1UuzI8KwQQ2Mzps10uhSv3TTb28xurIDQmxXWCIcr4IVYVh83Mv1dIA3yfZEbtkFcM/LOZcAJMCNFh479mCyFxrKJrPCmgcG7ls86nnVZ4ywC47uouBUM/HA7yENiWZ+ESRLFBbMneFBUibeIIo6m52iRmm04KA49pSzlYN1eAIAN4MNKKVDKe33yW1c3TDzzYL2ptaejdVuTS4n6F4S98VsOHkwyzHSad5+EPy7yOA1haLAdf9LtPcCGgkLRHaDKFGu1svQdoGCIG6gByT8xn21oOyT74heUqYnWMUplyDdcP44b7fW6ra+X76Qa+MW+BQq6qfPmJAG+0GzWjltz/9BzpLmkB+rvA/7Z6U2gZ2R5R+fb6JYl1bpltnCYRDJ3cp6Je28LQ/BWjPR4oQkxDz4qdLmc+pSKhYdajeyRB4MXbh3F3FjKRYNwng/OtQoO3YzItf6sTT/ezU+Hkt7zf0hbfHNc2egl8NpGppr8QjYqL/Wn/+sNE/205f0I0qGzFTLX1ndbkbQ2cbTigXNJhTbzWslb5/sL/+q/Y6cJpaBO1rXjXA+nwfcMHfXl7Rtx9R9vsxnrABUdiweQBUrdRCo5wZFEt2019Zj9thkS6tYzYFYJ3KFMZ6tegaeHglaWBmk5iK9X+dBM6kwFV5dpXtQBcig4bPF3LJLJPJnik5FIQodCSt2XNbZP/kpRcGyYq5kbsPTw=';const _IH='70df2b5592d04f2cfb0c14303aab0b4f0b2107f8f5d7f2dfb6de5fe9ad2a46ba';let _src;

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
