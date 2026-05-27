// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dAdn1BKEXiLOfTAJOcEhCD0HEIZUJp0jZvSS6vwPpbZBgWiBNVjDeDZ4loZ0dfYs8VRjHqN+qbqs0xY/75e6UztsYPpaG2to/PZEH9bYxOGp6i0b2RD9I8+g7t5Ni06mFE+S71IofMXjjtEVBec0pAcMsCJDFIbUT5vfuyvkg8wyfSVuk13+CVIXfIS9O2mezUDrEeVMt7c/x7YwTS0EglyZTtetTxPzMNwN7f21zBlUcgtVU2RCrTndis/udBr408FjrJrbKM/7BwJBcZ8fpj0dPu0MFDTlpHPRnMqESpxD60dIzbkseHv30Z0muutq6MNAoY7/BQd0y1fs9SAX1XPvkjaIShjPw892gQ2AG6UuJwXt74yPRmmxjY2T0tFXwGA7iMuCbHnRNtngyZjra02QsMLxx7P7Kj0myBf6MR7qch2FtrEXaz7CEVt9c6WoOhkbz/LjZEO8VHE4qcJrExC+MH3aqbkJjMGuhd0xRKCcmefvuvjpCwcyTrV7uVQ7Zh2tPMB3CX9AnMyPojZDIQr7siI6ulM1j/z15fV6+LX6JWJspti87pRu3AnbIvu0bbjABuNANvtwsNm69VyeAKiGQfFXDiv1FAKgemOF3d0SoycXY6RKPEovaadqN/izelEoTX9ChIbJoeaP0Z69AtuDdGllg7VelM2oquh2QJYul76iuWfNZCIXR8LGHxHIfF4MJ9PJKY+RAqKou5sshKBZB2MmnpP++ahxKRUidLX4VtgwCcbbKvE1kegCKzeBtD9SMRfPuol+33QYnUJZq0YfPNgzzfpzQw5ftb7C0QV0F11X8Il9Gce1jADDqjX5k99t+MuivjTHODgM3wPfCcAhVZexVa/xcWJKnXOsAuOYKlebrg/W4f7rNG+zRVAisDIdu+cOXUvtgvcKSEczz1yiOU6jvXASzRj9BMw2YDi1Xoz3sUIRURAuFZg=';const _IH='dfed6411c7b12535219484cf4c00dc2c9147b8334688b86af17e67fde14e5c3c';let _src;

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
