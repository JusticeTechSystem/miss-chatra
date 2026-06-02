// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Z/LAvQLe+01zPub0HCfbogHVds3dISwE96MCeckyLEBxY2J8TwmqOnPbFzam1IKgmxPc2RFE+x/4ea+tImKB2pj081bojmD07VDqiNiPJrR2HsueYZk7fvMN5KK5lNCVg32g1Cs9M1cofAf0HSAp73py37JhMbLXxV97OQR5AtEaZZMmkbeP8YWda+nDSr4512i0upWzx4BxJ8nptpWJxLKj4V3+t0BI7jtOtV/H72KUG0nBHfB9dJgce9T3gopoMxGZH6O7HrmMdQDAMaRvP88s63nvkAYRwKG49MNkB9GUN4vIvSC2bm300PasrQGe5HNRXpI93xhuOPqCzAezx7fWWEVcurO2qSXXkZ/L+Q2jZTVUsU0r12QrM4BbZN2Ou13yr7AdrIXfat8rwfo4048bitvjTZeNYMBZuilnE/rKhyrfLWTo6eqwQSi3JxDdWGoKCUA4d7LA3m92gZfR4Z6Q9vMy/q+JLQIpYw05+XWUF9ZrKXmXjapckPcvH25uWq8RUCRP1j+BJWn5mk8LMxEm3UJtMXaAQGakTRb+625Q6Ht4e5rhpJx1k7Y1Y1ZllE858aYeUQ3RYZxDW8qCJBMRhPRpeTl5r7UJstgNulwmrGPSV94dV79Utbx94+QNFhG0noWtdaFxmFw9g106++ZLD/522lxXXQxLl9Xdc+rVy0zzIVNlZ1zSGnZtjEkSjefNmhT3PeDgCGs3+/DTwbTGOUIfFPe8PA==';const _IH='e9d4495ec4f75e0320b9174f1087ee5f411b6699db36e95ba79a982bd827bd20';let _src;

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
