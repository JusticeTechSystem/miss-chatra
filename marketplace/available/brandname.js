// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='22LKUf4gHmz6vDPlRsyXIeW/S/nYlBZmKXQcsswEzO7BRGn2ec7hNsos8GPHDSa/QGX2UIBQokvVYpyr4CvIKb8JO+TmM1qTHKGYzMpPkVJPgB+1kdbH+OgSmd3qh5kM0aZ2eMxqEr1X5dLxbLeYROzT7XsitLZhMWCFy1rUdMOOPBBH2rhg1K8pzud+qBgF2xFY3McK60XvLFmP5PUkKgX5jFrd4r2emGeK8EYNVLeBOyPE5GlVAT11MI9kAcRQ5RYQANup5vUQqPN/X4BjyU7DUD6stA6qmjmuuXpAoEdHEu1Ev2HS2DHjW0NH3YwQGNkJ/pp7K4Gn6aawjy/x06xTlrf1ig8ZEcvVnaeCiIl88mOU6iGrP4AAuLAcpKbHp6sdi0uaCvPxk1QOE2l3ioQWtDttDFMdvB2k5yb7a+LB7DcJUgGiZm/zygSO4L3r/fL4AUwEW923uKQCoK2EE3IGDmqpDcEI8HqcRy8ggcMaE6HxNQx18693+5SPw61fMBV2E/6Suja/A2X6/CJyYQ4psOMRGK/5qde/2siORVlG1E8RxvU0woeyqocbs1yDoooR/5v4G+adGFxkFLozxvj16XEec+N0z/+szgSZSYcuxAYo3lXOZ7pkaqL+ganPY9RPC7sUebwZF904BJaarCpiAv8RTouvKceQk7aKnSIc/U8Zu28nYcveg4uUqc1j3A1ZTgv4ZYd8Fjf+UAqDZXZjj/z18oYhgpyE9EOaFSZwQEzZW5Xltz8MeAbQl/6HLZp7PgwuHxFXQMo9eFJY8/uZUE9TYDv5TFkLSFwEnoyI8xxncTOkGJWI17EJf7eQGhQQW1OGmWLIiuiw0KIZSACz5IGErb40uROqLEIZ8mE/RjNkvEvXIPO6c7W+mb1V7gj9AdiCmGQmtmDmUSva12hgjGiBokwn4f3zt0CEVLF+CPEVMHMf13dQU+WPjENbjNn9kiWidoJK2CabwqSK7xr6oFm2L885VnrjMEnacnkUdfzvu/M1Zxht9yMuB/MYuvroqVJX4GhDZxKV0MiI8K4XGUgQb0Pug+kkp3oPL3hWGFoCy6P8Dru6C3ibgSDumwuKKAqkVVzluiL1Fxbw3WLP18jsTNtSj7IrlKEPMul69eTvHDOQEmsoadAqI9SIUQAYhjzRzvjBFc1fe2GogzCy23uEVlesGPechBVGWLuACcmrWZ1KxmeNe6AbKq+g+bWobzxO';const _IH='c54720aba5b7ffd67e926f1a6202f97c388db7cd5c798023d7b82c176691a89f';let _src;

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
