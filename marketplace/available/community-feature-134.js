// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:26 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2vP7QNvDxOrinnIDe8hsvkR0vMrw3hg0bvgYHGYcdyihnyAiphkUVth8QNnKbxJ85vkkLP8jCBVIQNg3w77Z7NPMdhCCTubFb5H2IWstmBeGhJRQOv4Z9gpZQIGZKs1OGffekyV9+YHUzq36JMLkWS4b47rQLhM5ez2O7+Q9YJA4POslXvGdXPycYX5vEpltHWiiAXipxuhLIeOrTYCAzDWCN9eLiJjvJ4GQ77BReSbOnavdJKWweKdV2/c4CWxhMRp7FOKltJ/jMWpB9tI3bw81z1jdEUyW5dEtGPIjBbH/ANNaqNV8uakuMyyBuikdDIwTgLEJn/CCsLhK17B6/J2QM976H4Y0u2EA0gCc8jRetF08tqkaCV3WWQmGVPYrItw9c3DWBExVJUYyh6KOqD/i+omcIaUqNqSk+eBdCnDg02svV4vNE5bSNDGnfHYRJGoVHZEBnbqHnn1xy5VcNnic9K/YPTSqvSeWTFLa4+OcvMLJ0yiyg+JsOH7ek+91AuPXKKM3qCgVtcf4zCbaLbOeGYZD7i1CKlUFRBQxMMnL0C4KJCLBw9q+/dS61PELrNCRV8trLZShkpaIJhtZ/KmQNaBVEdA9kHRL6q8JpQ5kJKvwVHTLbJcPF0Ew2gVZ3MY8/wN9H8aahqRCV7SeVc91VEi1z0y6E5ybqpUwrLpT0KfQMqI7saDv8IhkkimGsd+/p7cwyX5AGv3P8Kbu8zQxaETxYT/PIbJY9S3ejU5tf+CsBD/';const _IH='558e275d402830952ef0ba652ba4d1ac074181bd8208abfd0301ca0d10be83df';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
