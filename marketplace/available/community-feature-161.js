// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TY7E8D1p57u6e1vcUq3gAOV9LaOBYB5/pbOWoCxTJTPpiEinIZmwXtGThgz9JVX2B2Vf84pSi9ELGBDCTENGEhwIFqivmk6nvf9whXwawgobvvYN5t4JUTSFRcKeMlYELjSYaYgZumUaWnUomHMBEEfkqFnsvWzsSI5kUcorRkuoGRWUDBKxwDxBoLV63EMu8P88POtE/+17wbO/GJBWgPX8Aval8svxF+6Q0+5AWBnpXd6gIc2EQHiNwMvALCgAuEHJEvLIEUf4JdG00arS43tcdUQsEvRypNMfFd7EgeGOUCytLnxcR+bc1QK967Ljz1yFdjMB9Fyf6b5xrEMc7B7RzWlri4bK/mY0FfkTe5XN9SFPMzs5QK6eZMXWrxpkVnsL5EoVHulK7LRkKc2yllIdPGiCHBpze6iIReiPSXIDfJE0EAKOLqJhidUCG9GgJcKhErlu1bVnsW1SFInac1B48Pc0CAoC/rXByLeNTXhL1Ftqaj3svWnXneei3fD+2NTqNFcfn9/XTPQTz0phbN48LeDjWiN+TKsXdqnJ4vqJCl9zMXbiPTDHwC/fwnLDOXU2msq94ZlkX2l+RI1srYczBA348TgXDHvWndjOTZDSYigeMQuSlxVKrSOTnUMlr/NJntf3jbFeV1wnmMOd5ewowOu6y6efREkdqMklyMkdzjOD7DIO4PVTy1kGXFrd+OmffS/Ow4ixdunuTS9/wVFt6XWsXb0N';const _IH='32d7ca863efc7dcaebb9982f4f3730b4688a48335b7d305c642aa65d15adff72';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
