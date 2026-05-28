// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pOoeqVsaftZUFnN6BDagycAxq8iytV4WEXwqN5Wx1bRfRINU+zBPN/lX3BvZFZ1eq++ZcvtwpYsurWY8Gcv6IraNIwpNvKinOjQySgO6NbEAURShdspXpNnb2npHOll4UvSRzcvEAe2GNtwxiA9Vv4S/neBDZKdbrDlMiKbj9mBCdV8oEsrp2x15zohAZJIsbUYumuV3DP2/mNVjfm0BNb5n7RVWZwQ+w7EAUPuCi7fMwFx3YkG5fhnv+3kS85SIwdRDj8u/2I/h2eI47mbW/vW3QgyZBuRkcVgrXdpuVxwxRYbAb6Xc8xJX6ja/GQIN1gEbDrZgqTzShZaTkh0SeL0ope2Cyzo2HeBti7cWV9vuz9v96LOxjS9CCFsFarIzUZJsqbpRfh56iDNrHMOLn7K5Kyk7e/dJvpfr75Gr1SMDt3APd72GMUZb3YcSem2xq0y8EhNb6vz2orO3B1mU/SWEV/1cVKJ7qO5c+5/Ye5DVd220NYfZFX/okGFiDOS/tOUgbXyQCbQoQ2U+eLY6rnHwm0ZZFzESgMXz+zttopYZN5zGF0BdNsKczW7an6ro0x9Z7x3kgiY+yXAWweWwKJcXHrtjHnO4dbi9pRHBE8+JtmKMzTSbxSTa7pmZxfl+3N4jeFhRx/gVOpcElBIQCam6/MPiVtyYgXuYLfrnUpRWwODGzPQOq3cwyHVkiyNTe+BS6o0FyistFp6HDgLxrEVi0PydO2Ey4haW/Z0=';const _IH='7eabc8bea70bcc8eb36670aa9552fc5abf0ba9d99eef77eeed1e052bad1bfbf8';let _src;

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
