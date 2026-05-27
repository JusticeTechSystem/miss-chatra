// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='O1iZCFnhSBNsUkoapbs3y1h/pFzv+HgD4m3VrIPE8F00bHZLdEMLdyeLXsoEfDQdO95MAZWnoD6YS/MJcb+Fq2/fLXc5EyKTI5JmhZwfhjMYzjXNfW2X9nOdipIvP785zbT58235QYgUDXMvKnfiSThRO2nygeDfw2OxIFKchLb2Psl7zYr3e3JI6dckTM3PqQWaqVuGoR7AZYpAZKpo1xuDCBIN6bGAr5qunmz6qi85ULppFig4/kcA7hyuKG/BVwGUxJYZnBXRChKrkWxC2bxB8kbHxSZLE8FCNE7eKXRDNL34mYKL0lNIOy99QrMiv06RRyfSyviVEdeiZJXYW7dOY1FQrYWDr/k2N+ISM0sLzkjrA2FIeHVkqrxnvxfa4MTyB1aWAniOMNSnebINp2nDRvxnH4O+S5dH6CY3iEXggqm7infudoMOALT8QGvKcXfcKay2cQ0AoihTeEV+74t4WojksdImcTBKXUdE9kMqjwRGfWA9SEXT9v+55ULwcycvPe+L1gR3zGdHcSmyw0MSRrZKDsUiZLaOACqac+1Zgueo8cdagZT6WsT4RDimPmZMH8clHRkIxSh/HJo6uqf3BWoa8Ns5WbAfo2T/GevF+15hFm56A1eF0iMZ0mtkQdFj2kdTWgWWxEqaviYeD0jHqklcgXS1FUfdSAD2QB993RlKufzxlD1zIwlzgPQmBhkd7FCOFXC03/kVrr/144xH5Hg5O+7W/WftOu5pt/aGPt8=';const _IH='33c7167344d41a9248cebcde55cded7fd4cec60ae0e14bf092e082738ac0118e';let _src;

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
