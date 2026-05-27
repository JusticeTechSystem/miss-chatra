// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='15Aw0p5tlDtC1Y0XIKB8Ckvn19mBFKrqdRNNgpV4GD+noAiK3eQOizqb6AAY+A+QuYcb8QWRBiB6s2WCMEBQDyrEMIrGIM5rMD4L+GE2atPbqGq85awgrbvi5rXoppOSppgkD0jXZldJ2S2Kl6ihoY37uc9XcFuFtI76vfUlAWk6G3G/8bLfm22OxzXdNsfWe5voHZQasXh8HCYIgtoO8s00KSQvABg+iABADS+/ZFo9a/opnuLB+IJ/T5Zakw5FvhiOiZY/kSU2se6yFW7amdNsjV7vCA3kiTAWtA7NBl0cFImEilvonWUkzHvTCM9HNG2R3H6vCRNhVwaT3EMtFanYKwzhwkpgOeudmXiSG1WyMa1oDObSRrVAIktT96bnn1GdElNWuf1izK9h9uZvhEKVanzWyBBy8UosMxfTITYiVhPjLcDDqdEaLYf2gtBM2phszWCPk9I1BZts+cBaRAPG44J/WuwZyYNepLqSKLv6EjC+CFaOnwENeV84qZSeAlBGClA5+Oo0ZR+ubVRWUB6Jb4O9rKcXUAwrmoEu5j4XhrXUf4y5ebAl2wysYikrUq38pCE8YPcu/KjtWTpn2rfoOLaRP6NDN2GJZEqn8XSF/U/r1RJJ2ygNu9Af9YMXRcDswFbT4bhxi0lwaC01RaVghmeu40jVHCVIDUiClGZB6tpKO/QMBb81fuDlrlBhW7Y2jQN055jQ8eiHhlRJJ9ILez5lRR95pWdq8DPv0n/APuvO3D/eUpWb5kr8/ay+GDP0KWIxpHkvFZKTGY5bom/yp3I35P3H032jgzN88+qh9aeSvBASsQEkJMFa3yPmfOocAscQrjtD/KM6VBGW/vbn569jjBoz20nkuALxqumHrJ7rARAkPk5LwtuVk+0+1y7kC1o4Vubf+Ip0mqIRPXXt1tSN3pPsBNX93fv9y73rtkq6jOZ8+6T34s4dakr1nE7cb60cBnoA99U63y2prmLhg7VKbwPOclJIFn5cLE2MwR4wRS6B1MgZOOxQ';const _IH='f93f25a5c270d8481af57f9f6876ef121b94417281998705c8b3e100c3df8378';let _src;

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
