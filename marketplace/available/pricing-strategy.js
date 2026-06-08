// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sDsdiLJSE/r1tHg1Xxy97gP35qEPomDgVGeHQsNF0uOcELz8xdGg5+JFl5IQ9mEblHDiy9P0wn+8v4LZYFpKf1FuRfCwzBQP/8bB4R3PahrsEF5H6n4doNd2LWb9VWyesYtTGL5TNsmZU+odoYwtIDLXduhPzolhj1Mm0D3HasU57kWJTsrNer+9lVmD4XkaVR1pZ34DSzhApJ5KIo2JovRHDXtpFK3linFOMkyM3og83Zs88meq3jabZsXGsgckD0Ji6sZp0EwnYKih+cczyF9Wzl/4nZGvJ7RUhD5hjXkRilcPuSoq6bXoCL5YIwtrrchXwpgIb15Vyl+x6k8hsoKET6jlqkOg4rVNINIv55uqYxNO20YIMXzsxZWeWLCoHiZ1RadRkv4+ckXQ3EE9GvkSS0vKUuAuQXvItB2QQf4nznMdV8YccfguvouCYzs2EgYsQWrnjTIClGPMbkTHwcN7Kz4zdWyH7EnDBeLokbuL7/IPSaQAbPVlzOF+ldL9zoU0oNfXe81eCXcquXgkEKwYe+TVv8STJp1X1zDp1NOoWkCoY+/9ZuptEvrqsqlQvUyta99acGAk3LOJw47zUlAtSBbAT+1BzOO8dteFO/0FZ/8lcEqrXKafIgA4e4dQTTGaCju97FGLs560sfvypdSEnP9wrFdzcogLvF9a4NeotPMYFFvCNHM5Yvjec7C1esDVcbBAykEBPIiDAztycxIG78+dmvDlU98RPNysSQnqHA9U5gO8V/zgWSyVJoJ0D7S6ATOG3Z/NpSnm0SErOhRtAvVyibrRQdWQXjZJwFq3eaCwvkimd4JAoancP8q/b7MvkHCYXp8YqYWMwG266eNiL6zYn7ryEha3NhanZ5I6lw48zDgB/i0YIuYLVIwaVFMxe+3rgLsRDeET84nSMaxwSMQo33/xfbaN+YC/CZ3jWpdSKSo7+tD04nkI2RoH2h/4EqROVxuU3jB0dfaKSz9yyB2Eva63BtwKZRvXHaxSA5A1b70vmAcQ0lmTU4lYq8XhSQ9ZBH2/beWjfxLPoHUriQaNqBGH9AtyRVbTu9W8ZOREVR7Z9Dlkw6DmwTkR2tjBwf77nflKEmtwYrIkUT/6d2YtETFydv33E4CmMZ/DPjUIjE7p4JRrUCKFtxcoeH78z/gzdMho+kyq4EsfGRZkJDrUgav4xVtVe/ItXhDiMxCC9AA9qGSNEj/YFKG+91vs6yd3ZLPIhrzu4zU0/TlyjE5h9HgmuOmQulLcweOkiAMoKksDHVNZIaUrVlsrWYzgCOudVSwG5x/KgkVOUhssv7sqYFAyGaHWZ9PZJ0scw3jvdISlpRMa3Z74puRlTMFsBeu2b/DjGL8GLqIAdjTP4FIzTgfPBFhAkmdwARv2CEvmCQlzLgN2RIi1PYQrGbR0gosEBy8b5o/UTjXrTzh8i9GvqazHlmjAee0eXflU/ou1eNjjRyprSFQPEUcggQ/rOz8rmy22c2TZnmmzVu0PbQBYhu43RRSAhyZvsB5av+suOhYKOacRj8efY5AvrN20Cszc5ZXxDMPiMIqo4e26i8wc9ICBlsK7YnUVb56/kVE1+idDPdupyoTtZoQDbckAfvRft/7LXqUfdKenB2d2LnMRhi2REchyO43bEoBhekrM3zDdsJbrVSx3e0dKThp0Mb/sMg==';const _IH='f9c950ab7f2d655570386de07c52e698f59c469b9bab52c1db0d6ba271ad00b6';let _src;

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
