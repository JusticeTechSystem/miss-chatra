// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ircETeW9SKpXWd9DTWteDPOZzfMEGjcgv4pqh+nA4RqMUHWwOAqQwMRxd25YR8leekTPzC1AXaZ9olQ+aBR8Q5lBH80T3zgbAYAslVLuiNwTTbTYSWCTfi1OWj3C4biNQnI0qaW0AGj3wnV72q1vQGCRCD7rGd9pKBv1oZHkVIQjvxBBK+fJ8HUtHMsUCXpM67N6kguZTCZhfYRn4l/S8ey7AqcJdaiRq+CAkUjvjKEMCcXLrEkd0eacM5nz8BkOI15HvSgjWBq3OuOm0sUq16E7829fs8H6fQMtYAX95vScKi3O+a0HiMY4lzVPAyhMnOAfeXHMCsLmBIChU6Rk47w1Ae9lFSFGFopvyrzdw5tF+FXuLeHPRPFvZl30bD2kX1JVByrwnGj+ZqvpvWyy8zlOikhYvJ92e5r7laPU5wC4p9gfJLesvMsVW5anotVGJ1yvj68JJtp6iFbhnVpZWQHX+JELNIuTfaD/HVxMAuTjOpDiohI/W1Y/BrocFZ8H49BJarb09EINLC7qKWWn08UUSBdH82rO/ghFuL4FwL9vlgfa/a9EezMJosdwF6dNAxj5FcBUvDJZE8lxwh+eAI3/IsbODRkWNP8KmxxCkgdXtWR4F/5K6cjrZXIo/nSBVhmpIuUWrXP0QlfWWVKCi+Vxkt+uaANEFahZwxxPglghBY6surUVyN187W8ki+wdHtif0YsGPK43ZHz5CUf6WnrngBCWZsu9c4R2CT5CpSVMEQMtkVHxL5TYCSVXwAsHNlQv0o6C/jm8p2q/WHPysB+v8SAs6OTcWx0f+7ltBHqZiNgqFxis9Cyw1yBVrbjzo0waueZHWpz7LkCObJerJnkqrW9Ay3S5ooaPCmxJduJQ97/FSbtKNLWDLxB8j6u9qXwRxSI8Cp1Q7xkB4OJymYPCm4pIjeeNmE116in5lr9uN7E8V6ciRvovzMmW09S9abTS4xybEKXLja8LaM7gyTKDvCEhC5YtDDd5/YBCliCqPyRhkNEQ8X2Matfdy+qHiBat40Wjf37BNwKmEt6lCynu';const _IH='b85d6d1a26d2d5241fd8256815f7bacc83ee04a010c840b15d2d64ba37e4aac1';let _src;

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
