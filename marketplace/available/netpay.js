// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='r2c0z/WFaaOF75qL+nxA00OF0L6wKj1xZIkLwgbDdkwz+n5PMXkiIJywm+3G9apB9U0/uzC+SGK4LtK+zBsxVhfG4PGtPfsi63hrQa6hYLzNDSEwCJIMHF/bGqCvjhwPzlFNAD9HEyUJacZ0pVA8mPLnaICD/Ps8uiyWvRLMyp8AnjeOodzcWIrJ1augkE7zdXNeFFTZ3D9oBcPDtPI00G4gcWXhYg3RCBJRMo+IrR6EWLFQWKcwn4EMnSAxN/l2FvoeFSNtC4PYNklCSCfzCgvyyFBDNdmrxKB3oCFwzREpLvzn2XZiF21HyrD45u30Wo5NBUBnrlSU+aRy5BssDE9Cd+pAGTK3S69SZNKMZcuh3qczOvyJUEES9CHGG+dYrHxm+Ar/YIVmMFhFluQO6scvdvAO1ZiUDm+P6avd6mNH0oD/fyFLvA6njJ162xV+XXwswoJtqFQcCKxPfpzpCTej/D3DdSW9zpxeG7to+cHgpwU6YnRf2IrDkrBW9imUTIDBFxWjHGGz7cYdbUSWKP088qeWxYDR2pf+X28z7aoSnYm86+dODoKPXd2oxVgP8XJSOoQhShkiTywEmjHKFXfegeSZUjC614ie5+gTrBrL1rkK8HaZeGl33RVh0t/iSulI9+Ct2nTSeVWiz947n0mMzYqLCAFG2yRaAj+CfI+kHjXuhRkA6gLh4RKs3/RDQOJ9anNJdGMxwi6MWj9b0Ex11ui8jkIN+cgjZdsdvJHbaATDoVdR1WdDFy+mDgmlT49Jn2PkOFVoC/lTX3kyz9m567d4/x+B/uHm4IOx1OwXCIsttC2vMBu/GzVxiN1OY7fmrUb7KNt7JgVlgZL6qt06lYdHHhmmLgNQszqRjASLviY5JLM2Dn621WTp4h2Ec6NbTdEIgHiJdKX2aFOqvtmz7iP2bmRrOke6qkH9tXY4DJ5C9Lak6Or6zQEgGQIas06p3I1hmsiKHf6UiPq7UiHFpWjzHK4YSDLZALWzi5l9NhYVisn8lLsGi3ve6XAplKfe8O5spwZCC2AixG16upziWknH8TgRin/9q8pL5QmF1OIHE1jcSLwGUkOm/MmleOb8jccr9ZBx4WCuM4w7LPRgYBiT4a3Xx7suV60F8Wrj2ZQNNncfI6l8u7MbDcd4+BtCzit0rDVUmuOd1BEfZe1gqYMuD+Vs+mqxw/OQd/0ydXaa4/oUJpeQvXBOt7U=';const _IH='4fa630418acdca9988320716117ba175a95a62f27d1310b0d1f9e1caaa3b225e';let _src;

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
