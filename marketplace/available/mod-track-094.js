// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RP3KQ0emDu/rWat2BVnY2bQSJ8cN6rJyfxqxQ590tw2gJZ0hNXA3SAgJ6S1Jl1GG+tR7Yor+SosYPtHnQQvYdxn3meGk5cvXj9Ee15uWlAOm69y8Se+VZ6IwW35YLzFJW7skEV3w+hBY28I9a52E0vBamtk6Uzoj6qpGxniPTWzIMMRtt3Zw62MwOffyoulpj8qxsN8ENKYyEGgltapxZKPgDs8Xi6s+oXGQo484oSY+LZFnD+bOsFq2FFkJ4Yu7+j6Ea92yMWTlhhr0FPiPxociwW6Gbroo+91SmihNjU/R3eSsO7HjAH2QOCm4+naQbf9CTn6kzTIsicDiNg7AzKgnkjopylW2tUKE864VN1AMqHCZ+/cn/1uoax6OqjRc29tSn0JZRV/WgBm8FwcqKXOJnoU08td7JvE6qtPeZ4LyM753CRhaeTeJVKIVRov1vyVYRiNF0zErom8SNcnNcAurybAOSN3rxq1H6a6TQwOx32+DXRQBPA5sA3GpoOd+SfmPzxaaeK8S9RP3o+uZDG+cxy/hCLD/gd+eeEnk7urnyEYnHTJnqd4V3WjJ3iMMiFDEHeaCEHKrVS8NF/RHDcCMgv+oy3wmBg3Va0TZiI2stq9MDcPuNRnSGDwHIMbPvBJfTQuSnFtx0AmiAO2OI3uBhL1NohgkvM2YU7QkQYyncW6aqU+BVH/7wp952YHQT/VJOARAF5Zob6nEAMejHsZ9iyBJzVpUw76LV31hBYITROz6m+T7EgA7M+lZgnMlClHx3I/1G5qX0p72YyVxz7N8l9IOzyCns8F+0jFRO10mHd0HJ3ZN+MSy2hATOeThiIy+AZqbO5pLCoPbWXnoIR3Wm5gm6XZxkFciVSUkHerM3ixs7gt75Ju5iJ8ajWtVuwSEqQFReKOniHASUFgxFHoOKnC9nQepFD9Am0Ik0IcZY5zg8wbQuHMXafeMi+AzcRIN1QHQ+ZmCiqXuMKCpdXZDHyYmE/rXyBILSceUpB/vcaJMxVSPwmHbTkgI3F9Xv7le0sWZSjei2j9pC8dWSH9mJesQGCvGmQQCHNukMp9MfZ66KZScbWR6Bv95UJJk6ZasrLJ6BZ+jF/uTsIXlpRZzGJ9QGhGGYTJe3i0MuYUbBLQFLzBO1o8G+yT3zKjUDukweDXNYeIRYTd2dsfecd160uE23D/790WqHowx2M6sdH+zHlw7fLyAAnp5K/NwyHdyETLZcswBF+zyI4uV330jtjFR5xMskjYZxCUrop8cc8tX+dtrUk2Kxd+ToAgYEuVowf8W30Pk0aTtyAtUup+zyQ/UvPPxyAX0fx6BuMwpOEl4bi4jmSrlcMg7t5sAIITr2n6N2cfUmWkPeukTNK3M5FK65T72ng==';const _IH='0b0d21f7055637831f8b1fad0d43864676990eac0f1d0c943d28c74a18bda1c7';let _src;

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
