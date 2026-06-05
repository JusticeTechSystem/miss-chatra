// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='j52HziNlRK0tgG0mOFwvkl2p7p370jKeZOW7kBIuAQk0pxZEDx9O7P1F9MiaZOLQlsf9AFO4zTOL9arNhpAEXOPCgUmbZEcpzlAB+MwQpe5t+ma2ZjDeCIho+fgN1o2tz7ggZBNa6Z73hkEBNCa3f8Ca9TdhjPvNMmD4aXagYkyx4ev4NU/t0noY0imv2V59xJI8xAsmzdMNNSwRZ+OipQNkHVOJZTiCpJCzCQYhDyTWLYIRp3TA+wEJEaZkhrlfNwjFaGk5kyr/Z2hhzwrHv+ZHbs1UEGqod85uRMphN8S9rMr2oqyrH651M8FaO2tR8bJSu0Knj8MVbgmQkxKbep+A+t2NpKCLOJGD3siskaw2DURj9xDYFmE1EpyRaljeWbrXHQe89QupMUiYr2INFx3XA3MLPximcFkGdvnS3PTV+/UPToWuFlaYhNxUOA328P269pF/nsCDPMJuFZrL+pzXRLO/YPm+TLFMbMK83DRcwB8soO0sddtwwA+Qk9GRIpH64fpvuDMx2FQFokyoWi5bE6d6eTjDoW+XSO8E0UMlAg09o6ELTo64bao8esBvNS5EBMuFfCjhNZH9S3jouxm+GeJrJAC+lotlVJ/tkwuxn86sFoF9+CRLAcKOTHlEc3DOcI6rOM4G0CQfAgUJ1XuSe0RJkzJhFuS3RRXziaA/ZiQa4rDRctKd1g5naXXkJ78KcYYcCoCV3oD2ZKtnhlJpwYcdr+CWxs4ZcN8/ljVZcLMInr8rFKO67TRQTyk+rZ23ogB5WAgIEY+SAp2r+wz1Ki4odqd8gQXsie7EI1TU6C8joOHlKcFweQPMbECSAmw97ipmajoQtgaiTR+gHG02ULm8U4HFwQa7BOsE1mXNQjx7WmUN7o0RepZlm/Ymy7sWRhrhXbtFphW1SnS/G/5UtsojBrDI553tv74l9FF+bdCjWdAV678VUfhhhuHDXiW0zx2Fe0htFsaf56+WpeKgqjAwgP7KyuN/K43pmrFenvVdZMSWheKEW28p/4mpO+WqwM5EPl625jjvozfpSjFB6ovjUjlcfyjZSUI3pUUHZgfrhSVPBkD02SK8DrzNC+YwVZKMo+D2q7RVCl9txQbylyF1NaCZO1V+5dyJ5V8lQqr4pvDOzIN8/XRAOpLS1nYsboHjox6uf+MbDa+AXOPv2nn2bF4htTdZnRlX82DgNdYnAtp0EmJc2RFtDyAq7GGbz2y/vB+gHC77n5WzLC5hqAHZotxPMyPxN3HyA9mRrtnPVPnDKGCbwY+PFL3WMIAw+pLwCgEKoUfwN1gP7KF1CcXbG5sPcgZ1pTschrOIqkMyDUP/344i6y51BEa0phhj5gIViMznmiNUYapTpo8M5EOiXxMJwv8sxM5WDuuu3VY=';const _IH='4f2d01cadb1586b692ff156380a7c0772af98d7a3c8d330ed2faaa39694066a6';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
