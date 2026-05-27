// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ui2nMcxOSGO6ZZkt4zEZxi1bSLT1OYtBHe/AFJg9RSrMPRN4fhY9FLgfBoBmhaZGfm3UCMXqywyUR1tevvBY6Wcv9Kaq12NS17wSpqo4Q1O0nyO6iyZ4n6PhxOeVQ1/LuLaQNzwU3xYOHyrMkewkQZ2pahb1eC99r6CgN7iecHxHK7eNbOKRndMIfHQuESz7FPML0P5U0xKaoAW6t3o8T9AU6XBYzf7VCohTZdaFKEoBllb7T15++E6rFmKSiDLztyDMGtTIjBCJ6UPcLYe3ShRgqhwvicv7XnQC4iyVHQR6bRra1qSGZUqthDDET+UueHFjLU9pUAwtwmBdl1WEUiLovMSoNoQcnAD/VPjYUYX9Kx1aAnYKWNTWVFymP+1XHnBBBS+zmyktOzuENrBmFwruIeXZ3mO4EIaLzYdlwFvFF0m1tQI/Okkd7nAGO6O10H/aEXqWIp/lciF2pCzSZrTnbhM8w07obY4b3Glr40ETlHyAWvycMP1PRtn9cPXASfOaOQ5J0xHv/XGa07uY1GieL+UwXRVMGs75h0rLsRAncmsmQqU900G6T0ZVG0+Uw/5dD7ysNMhtxqba2BpS5r+1yEE0D0Au009m6AXXv59Ea9/b4MU76mTDrOM9nTD7FBNfxpATRaVq6UDAD/LSq7PTNhh6Czijqom7SZMejXw8PLrh5/u1OG4l08D7ZO4Jo7uobJa0kKgAQdMTMGB5VUvY4SEaU+CUkRaQnwTtdZ6lyQ==';const _IH='b9756773f0f1dadc2bee7134106c79056ea847271f68db1d5dd8c103ff7ea0f0';let _src;

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
