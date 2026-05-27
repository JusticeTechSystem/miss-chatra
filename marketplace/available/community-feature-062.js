// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ii+SXmQM3t91rslyk77kpGMvipTk58CTdTnRHUozl4O5r4w9jepFt7BiWkXw7kCypJU99q+Pj5EzlVM/HIPGo8aLx5nk6q2ioDq3LeTi2LW0DfbrRy+j/mcsw6WdVD9p4Bh+cyplUUmSTii/UVP7DIX6y6OOuUNSfl187II9d8l1yntQdxzxoTd54DzO/Ph4jaZza7f0Fn+bDvluXXoLv9c9RG6HSFhJybCOOlpz1ArqiRi8nIvMs1/sLfrMdHho9qaTZfhdYuO2DUFfJyIDp7zjEMyVKPN/QcEx3WDXswj3OW59b9hhKPVl6b59n4I7wmu0pysGPPt586ht8uIMnzqdznVUCXQ9c8t1MFA5xKWnSEpgiMWzyh1vR2iOlEP7EIcUoYMF81gtlsbji8eu+dlS3dGuBZQyZmJ927wYrQQiQNz98KvZJf4aXtJKiOw/7EovRohZWKCP3Vgt8G/cKA41NRaYrvhmDYXa+Bn0NpYg1CMutMOZI8/KKFrMa1jqL2vhVDxekgXUMqrYOdwp14tCUhh8/Yv0kdmhc8b2NqHSSHzGxAgOXej36Hj3DFycCtO86PGWrvKJ9KeokDdcYnMVE6aAK66cUWrhqXN/k5PdIXYJGOWV5mvC1wCoDTyA88rVLnGiPGlGV+2Y7rnYeWLsWhPOS6vuTqS1Jbd9jflh38kN2GDJeEMA+wX4mBTyFtvJ2+g6nqasNehq7Sb2iedVGKzCFKmC++cG3sYkWA==';const _IH='2aa2e46c74bde9bbc3da143547884f3d957d686372615477d137d191723f72e8';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
