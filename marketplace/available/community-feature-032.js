// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQRtm/JYNcnzCw5wD5n5/6LL7MbAeIIMLCcQpkTeT97cWUHfijgKUU2eeHCwBib0SeKSTovuNMRAeO4y62eCQfOInCh89c3Jmy9+d1wRE56ois7qYTI4IvKAhA8YFht3sR8YvMe4b4oA0Y563vNyB/zthoOjudoBeWrSiSwMrgCjBULlgtyPADivAI8/EKjcETb2kVe+gaTQc8PpRuEW4REyC4C8GljeHScoGGN6VlUtNr8hFpQnA8AAuXceXtG6tjVqjyNQi8qJ8sVXYGZDR63xGrmnempajEhJNWw6QPaOVbPkdRhBCmbo1tYNXctNX/TFm3jaU52N4pTy1jNzaVvxb+fYsK2zkfB4/QRByHC44wZjoFP5fpyK6S9HDlivQbDBr1fpZqNEMSzj6LW0ZVp8N5MvKpSnj4g4KNSrqAM2d7C2/9ohLojetb9Eo9Zrb/uT6o8nKW3bBfz0bVyx/Yrgwe7wETmfUwSeDYDiyXyxUWiYaNwE8e5BRSStpqZlim87hSPvQcYVBhl/Kz8nnET+OV9EXM2b5WpHIydB8rmh8/qwvX/ewg9btYOt9BM35kNdfSVhbaPJQ2wNvgPT0zTeiC484uEGGOtE0xHeCaSP8QZTMoG+uL/7xhNRfJRkmve828lFI8Z2t0W7d6IOx0iHupXIWADJUxlZsOXuJ5wL5cxSHVQ5lxSAT2ab0p/cS6WPt3j1bbmvk36HiRRryBPFkkuZcGhJtC8j/TkwO7h';const _IH='e9c4158a87309069927bca225ae97eebb56a6d55da539bc5d10d22758bdb183d';let _src;

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
