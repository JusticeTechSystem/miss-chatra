// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oMMdIZ9AoxXSVyiKgoF0LTnGHDOca+seFlEo8J6xkVtscGXwtAdpzdcl4OqJm/BsXV759hrx6M12bbk02ris4JnFgEJm1emR2wxRLHeEjURqG5D0phHpsUd4zSVfqKbdddHG2kc+ytznNvHt+AojOXQ8WIapSvd/qgtYo7U/7ICPBzxcTXZNHb+FXMRZHa6tCq4zNRbvLKUVHim8uRk2duECB9308ZF76JHxfV2iqM223nzuxkDehSwgHjW6zQMhHK/HnXvlN7hsI8MHFxcpXdMtYkEXkdDQXp1eNN2vXyZMZ8TTtxQFVBD68C5FP7h6aTqhnhbiwM79OxRWcnlNMDT8Bu7coaPj7S4A+OL3hecZS7CA7xG8MkGKpyRjmUJbDnu/VoWLYXs34NlEMzdjZqgSCP4+ZIj7rZ2I+xQHwVm2hTWi9qxmSZsI3wtuByWNwImK3fh45EOnt+w+EiZJX4te5uq9uatPiJS7ub8KUKBPMwRJ5nkYBsoYLJXgsMtMyRp86LEgJuoUQ83zwvs2SGSc+GQ5iwuAkSAeLD2QBUZLrWdZ00WH4oViWy3Vad5lrsS2Tfy+xoXYS+AgepOK8V/taSeYGR37K/g430gwJWb3hdLz9eEndWx9PBmbrPy56GffrsJDYKDp90h6lqVtmwwhATuMPnb9uNjP9CD6MYY42l4dy7nzN+3Z2VZE0tKzaacEfwBLva0x5kJpgyW3aSs1zQSIXjU5s5EaftTIq1K813BVtaH32u12FiSlYfy25a2NSTzZBEImCkwbbJuEZxDDnvDhBfhtPQwKm5dOPfaQsZ/rDVePkOuXXMkrULWPtkOEzmpxS2JI40fAJqoyvJDnZ1qPWmPKpzWuEYdQsGlXgUDqLqgR7yS/hJBWOLYHDbwVOiVhJoLXjmLhcWXYv7H72XpotgknGSxqea0Jc+kQXL0OntE0fxC1ek1uqGVsBks9iqUbKKjVsf4pYOEVj7e5pD7BEcumCxg8LzEhGNBuC5VZja/hKwyO6xTA6HHF8cED9mZNtFF2cibZkP4GyazyoNO4tc3Lu25nUAVV4reIQ6F59H4s34m8cyl7kWV/vkamiyiRlKNdBoYEpVd5h7TBwGSTtkpsMIDKvC5wKVhBB1EWkn8NzQMosRh/mUVEL+noVGJNqcxLsKprMdmyR6tPYvsNmhXfd/zYA7/HgsDHYFp79turvausodXZPSG1Jog0zyRiHdU57bUL1NXnjJL7UQKkVouo5LcO8GfCeE6njuwxS9KohcBX9rifTmdvFgpFgXQGrODavhs0i4iZowEnQ2TOppfFhd4b7oSjSXz3ciBwNcTxc50/PnsXBx94R6+XhCpFmiAoP9fPOE6ubIVGs0k3ZmiGijH1eXG5xy+gCfmi/fwnGg==';const _IH='4106130d5bdb4926008e0029a0e1befa14d0200ea32696bea7f05533ca9adb69';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
