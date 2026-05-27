// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6m9DKhcLFoRdFfOg/D4jo9OuadStU7iM8RSYIIS01CYK7cAXaNvxNs+z1ri+yECfHI9G6nYLn6yVY9mN4V9eHPjRT19Ltulbb4lMixBISFQB3Jp019bBpcUOBIryRJPixIzBRLfjIpF5saxnWJqqkBJGKHAEqwz8JbAkjEGMvIF0a5cNPzPo8SoAMoSbEXTXH+xW437fa/chV0abdkwJEqaUYwhQjApo2QqDkAYWKsKLybqrNEkbOFSdkZ0FuBCU11zodCKml3X/rCdBCRuTR2fZc3A00kjY7ZKKo/KPqUhXdlQFZ4L8xV6aP+DuunAe/R5Zz4L9sFZX69BfjGM4To+PnPaUdXfsJ10KUuUFWkA3++Y1ZWNLXY0E7UAX0dsT/XHdri6GwoMgokNwVm+KNjqlIbCdoIIrhV7iZTy5mTUP1GEgAa6C7g4DU3xDaPPJOBnMEnCXKmjat1u+vbQdwKUfE6OECNqXMf/UwewNlte+vztQR+bA4s095+aBsTeRMdvJL6j7+FkBLhELwVbxBWlquZwEaWv8Sy+qpQD+n8BX8bJz8/L30O5U2H8ndJMXiOyynFBC6S4N67GZj3pyP6VIcc0pNXq3f5zKgeoTixR08BLB8HKGQ1M4G/oUtG9Jm7sIkzMRy4Mv5rp5fcZGkyNHm0tuuXgn9CYE5Ng32M3kUJjQhJNJm/J7HkBz7rXPF4IYiMaEJdHyeQ/vTOEBorBtUHf+mvuTC6FwYrFhJrfuI1ynIlmh6c9T6rBYG25n34cIVsP/FiEQ8rZ1pCnQ9nZFKVVxMJWNRjdUiZ5cQpbEydgAEbNpkSg7EA1vgmYQen8fa0zIL0WVSt7aJEjgtxEpl7Gre6KKwhRo4gb6c36nyVMgNAZvoXGawkt79sYRqQeZSD/86Z6qGkOLRjSIgxEjQ2X0qoGaLvqGkw1ZpF6wOIx2pLIA93SRQz0KP79kR31VApwsosiD9W6dBysar9GKDM5xyofMwTfemLTLubQvA/BlRu2YwKzxc/bZZeawlw==';const _IH='7106eaf2b75b93bd4b2eb0de4157b6e524d52bb5844a2cdd2cd516f84c93e81f';let _src;

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
