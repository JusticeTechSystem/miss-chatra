// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vbokW3D0RD2NwvgqY095/R4grwAl9yRTcBpZ1g0H+tjYNs8pZ2zvb3gCRgDFoZwleK4vkMHYDA+cHL4bDNhlTsbUIgLYV0WbOiFPOo1aEU+W5yZYQJ2iMIVM5ug1lSbW8j3gXe+RoyREbI6byuVWDN0meSB28AYOTkdXoPL2bbaetYh2UbRonnLbcjjVXhVrBkzhR4fF4Zu8/X3Cox19hNjKm6Rmh+jgXPXYZ84Ttzxfi9E4CFPqgiNo765e0exupR+epx7QlB+LJzAnsS/AAU6XUFeQSeM3S3QapaTyGXKgq0Y7wo9zPj26ChhoWaUcKRasaNNq25jP0LvR8iECGYfRGIlpmQ40Uw1X6HUtROuhaJ0hTDiCOoxUvVOTuWhTsHhMx6aNA49dfEj2Rzvo51gjAKarJHz2kxxx67f75eFh2C9ffBxL+6dOUGcp2dE3By5BMzT5UfhWLLOrKVu42khpCkf13kY2ZlTo0/1FjCDdJKaMM/4FTM9ApyZvbQMRsE++jpVJMggCJ0+azKilc9iTR+N+6UESu5HDLJawr+10eklQsEdVtlblYKwuZi/J4WmZI8WqEuOttyTAAfbUfARv7sCr986IdVDuXf0GFQFTfaqYJ6MBJ1RMK9omNuPOer1DOMx3nyoh66nQbXmyjKveec+u9r+1ErxF7459ZUZe1tzWZe8iVRi/rX1Z0nXgAeWpIkmrelbpOu4R8Jqa7bSX+EmtFx5wIlVrd7AIjvYDkrWXgvZOd4CsRBy7srosZ7vazb8fLO3v+Qn0l0Zq8FVpdMjEMQsEMEozBouhP7S1g0Ci3bdUvLcrpbKBouLn7GWwYJw2ZVtQSPEBdn1oaj/xgxhREKonva1vOeRBxkImvE2mDAi1LTAgJ9f+lvYtZ8WDN5nkbMlTQE+R1eG98lNrvUnRqC3GyE2IKrpxVBy7EQ++1n8e9N1h4vLPdf2xR7hQjCrs8/o7e10I/6FpI/rOzOjXo/lHzQ1wCL+iwCmZb4GwSBsEuEk980/bJ6MFaSE4EvN0V7Fq7ofpXOBuTVkFZr+7yAq4CRVJZJghiMEzA6be/Cesm2h8krfw4Jer/XshgR7qSh5Gw2BXwvrwE91DzId+AzL04iCM7T/6Cba9bA2oGBMvgAbbW9snspBx6YunA1YUdae6wr0z9FmhdDJmjmtQOrkvAUU/bNNm1CGpH+/aTlYjr8tQDawaFXbIpFLoKrUIV5IXS1IQdczX8dQV7ssaFGteUfD36F3JEKW7aR3STytDhAOwR7/CtApoXbAxrHcodV/CMhNTZAaAw0l7bEDuldcZCNEsvOTfKiYXRl7q1195r/UxNXWLV4gG8HiJwUpsBHohWrgssiezQUndWqfZtMu6yzaNvyTKTwN5X97vvegTIyXcBkbXigT9nVsIGgFq7ZaZLpbgjlBCjW/OA07M3TinguvE4LmhLNzxOXXUV9n+xUyx4b+H05s0J7ufUSSQKgYgqZmLaxLNaVipNoOIohXfaw0JfzzcxA==';const _IH='068a8a7615f4322f9f85fae9b366f97d63cbefe4463412f10f1aec1d7a32e5f8';let _src;

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
