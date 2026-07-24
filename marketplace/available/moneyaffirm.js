// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRIy5TzfcYBQNYtU+dIO8DIb9qgnM2dKTbU9iyLWVSOSwMeXKRclbKo4wJRh9xwXfiHNBENTZJ+PS+SymQpZPjnBLcD44PUQEb4rv62Q3EKtg4UZhh1nbuMX+pHI+zyQ0FepbSXghanqUDSP16DOTptQjgadLTfezoQr/xGJW4HM9WvLmKGRUZXyQTD45E4ZXUchU1x7YVfFrI0qYSvraFyt3uJlS6mE2aWIVh0hx0BgAkda3mj0WJTEeyzik+VN/C/m8myct9Z4/ePGmCLtO3fgZon2UXYaOSmTeaFs0hOxRMljjjqOwN7snoRJxRrx3rkG/7jugOZ+CZb/dR0eMmhrnk0ZA1uVm2bDe6QNzM1A+T6lRjsOjneBuNAgV++7NfUAkT+8DP5EvcdqkGEIXGHVt9rcEHozsSU2iPcMhUMapy2ZxE5PVHycF3cxaOc5+nnE0J3ZHsHauu1pZNf09kOF9SBfVupn+V1gziOzyOshLyZfzwmMCZW4u88PY/OVi+PbVrJcbdpdg1ogoBS7T6G6Fi1y1yN3ohonDakDPK3a9v9n9lE/zlgY5mJX3ZmrHWsWqgX5PpMI1v4yAjxvwWFDNaGM8VPCVIutTEniJZCQoofO9ZD5uhaF3MnepF+TCp/EBNksKXYmMtBIThXH7f9GvG3aYKQ+tFjCXuUdpJUzBAyGp7Nl1yO3u/Hlrm6wmchWGE2u/U4rngA1TOk9slLlR9spz2rBW4Xf7tp9bbfrCG2DAaOz5dweHbTV9RBR7ZPD+KFpdairK7g/q7WttaSaQGvLCEVGhMxeAcDSis2YpuLzPPhi76oJJcbNsVLupq4QknsaFvHS3TFyX/CZ3ZrZvT8pZ+kc3HawBjXWesDbyCXRR/W4BLL5V2dJE+b3xjO34YXLMFckJHVgiNP8cHdVKo514lDdL+iQ2IsIa+RW/DK7+SZ8Gndyj+RY+uZfoAJxIMU8fG6rGGwLn12gOwX6PI+xBOJur0iH7yGQDs9QYtkAZ8G7uJ95Ad7cxRO1Y/QQebYUXiO+1lMXT5rmLbY8NficcPjzGkGfytxfc7+d6J6FhkIBONuFWZzh+pX9Sb3upUmgZ/IZSP/9XZ1AwB6FRVt45Wz3SXAtCmbIfAbGjz1Db47PHeiBdT8y84J5ZyW+Ht2xMnJjCn+RCNCHY/l8fBmtaL7Tg5KeURI/o7eyXFULfDixEXYgAVZKunCo8b2CPx9lQGOXc+G4LZL';const _IH='48b2ffbbcd20248115c6e2b2962160caa1b071685936d24d5f3a8087492664c8';let _src;

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
