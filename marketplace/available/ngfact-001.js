// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='J4+FSzTsJp1tSYJC6TusRhIuFZjev3aJUGz6BorDJWdLi1KsEMO8jq+wIGL25ELStjJcHTB0BhGqtNXpygijT/jvtl5FlDjCjPA0rbpEADvaBbJ7N9yB7XrIbzhYnztWQTSZkb2Y4CWGpRE1QErAUsMAXIirattIrK7UNAW/rX9v2UUO4S8+0IBnq7ap4/Rynunwr5USmgT0KavZC2Lsm1nG5cla2QlO18PIKxMTXj17zzPgv3D5cyI+DPUhy1HUd4KYRy7HMSv7/2RmPkwA2hBzr5oPR9CEACWtd3aPciXes78MqI2vj0ob5unIJfwE3vom57QmGnjH+0zk1Zc7YfOZiUIlpjEkbj6oylTmOC0PjHWRnzbPeqh5JZFFIOqVmnetDZfBUKLuBB3wvPdoKr8LCMComxYVIxqJFndrxlTPp4PsrsMTU4T8Q1P1szsUur3e0L40xlW/i/04fLnldifxrUHpXAzkH2+xG/lsih1Zk4qPseAn4kM1wKoFFLq2daQrrhwLfiR4DsplchGIZva/8rW9VBSRIMsKN2jTlCj3QqEN+i/oudTsV3ps3A3QMiHiNq2kSR4c+JJd0gXFCwbbMGRDqrnQ/cq1wrUfPq3TzyEmka7ZzpvyOKYQztHv733QAxarJ0iWzo4ioB0IeoVEkOS1AfXveV3ulW1VoJZahhu2AzzhFyZ6Kb67/gnVsLFOFiUAZkWC0jg=';const _IH='c796feef0107408d637f9f52c3c1b5d567826464a7e37e1046fb3824da01992b';let _src;

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
