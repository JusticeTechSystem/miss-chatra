// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rkA/pW8AsA9CqWYz9ZgNZ1gT7lbUFTK234OdJQLscFE2XO6iulTq3OPd7+LMdmE/sa2v+7d3Wtl18I45QCv6NG0PFso02O9pv392o6ObJWpE+MjZosG3EPIu0aLQDBibmTrwBnIf9LKrTxDBcqHdTn7Xq0hGl62ATHPPA43YVI9I7Ap/CWAHoQNa1sXXR2a8u6CtIeVvicdAXkDTSK5Guv+ZClLSOQbbOqPGnbOpbScfcUE+v5uTi0l5fjQLAHztXKSouXHTnyvynkDiPvDhWCIKTUv2tnCMxOCdPpp2ey2N65I2NBth0WnctVxOmyajFXOHyKelqYmSTYN/pxZIBh3X6OYEmSVWZt1d1YiKiiEvtf5jkfQ9vz3YACqwPcjBqL87x6aikmzi//j2RXZSjfweMrqq7mGcJWO2bHqKbtd63eGYhpF6cQCAsiG+HZ3kUa0Yz+t8eSpe8E53wgPHPapqBadiBhcv+NYRwLyJzLACcOwowhScf/96AJ+EBPyLgCTRUmqbpsKVKdZc/8YLk7MkM1BDZxY6mxGAt92gaiq0IP2SbxRXtK/TfAXj6dPQV24=';const _IH='a61614da19a4b1a152166c1a38209eab99f23d291b6fcfd0f5799f0d14b3e4b7';let _src;

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
