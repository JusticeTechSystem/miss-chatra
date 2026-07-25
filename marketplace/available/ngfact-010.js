// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQpvH+0uXJFscXjOl+I1xlQ1hezvQPcMxaDhbSWUB/tjffZAQCyEzUsDfYBArOI8v+a0KG/8mn/bPtvv39hd/5kWUVgQPSvT0qSIavcyhZJ+rEe5E3sHBBlVsa45OEyX/cOa5qQid4Oyjwd6iQJ+44P9QsSpY52a7gxfk0tWkOcX+tCKFzHyQr+1dPqMJvh2GaV8yCW5ej0xf2GtUklDarazNmdEOrYropqZq52eTKDZoAvZP/CW/v8uPk32uHxc/jUzNflISdnMVRUiKmPvGdYBuZvgW0yZLUfQWQdyoKTTIA/2SBtNQLdp8yTJe29ioxooKmpeNonOxd5kTgcUktmJkBnEd5W67cVvKDiJgzx55KAlOggsbxp4drW3B8RmCcVJlGUmkfDLyKYroe2FKPGg4pEVRFIyy4iE1p2o9hTpyQYGJffcVBiTX3qaleVnGmjTD4ZgmwgKwPjjlhvw0JCZJhKtcuKSi9E++Pj6F306yfWT+7h+gP1wuYm/g6IPqJPcjM4vXqOO+MIuUeVRbUaixoLoORnaTDte+kV3lHytsH//DybZMlp71LyG01h0N81xWvRWNLY3FiuQ/gz4+r+fnDjTOJWOWXE3Np+MCl8tBYZR2W304Nk/hzM4bph7OVGx08DMGeSzqT2d4FYb1Pbnze/dh0C3EVVHgJQ6lPACtQsZyzCGZ+sOfr6zGMSG5LAnp8S4aETBA==';const _IH='b356abc4de03fa0cec65623036e99d687831c3dae16d91ae30e88e3521ab6419';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
