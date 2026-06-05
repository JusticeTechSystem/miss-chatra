// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bvGSI92e+WKT1ArhPyKcvl9FwP6iEbgXHp8N5CqQIvwpHXrURurUl73kBezT83i1+fAIQXY09le723uHAZo8naG1shHTvUhDBA2T8F/xqhzMMa9nQBLtAOnxMTHbSfmc/qMGmcjoAK9FjOjK9qVNT6VVlk8NbhUCCKSQ3j9phDEfdphg+I1RbUDSf4LgkGvWLTRpGu9azDBTKVGeYcEzq1S3IT1H5RmWXneuyhhpmCc0peeNNecjJpP5QnYYwgKSLrDngRUc1bGTd/fblyr5bs8FI2A7D7EJIJY55qZdQ4uCdGYajxdmEQceBkDGFMRAa/xcQtOlXBH8leU25xPb3/hAzLmnH0SrFhYrnt+zG7F/h9oxvyigevoXz0UW74hEzrZ3BKkOkQ/9EUNvqsgUdTbHy6JUs/KFtLlPcc/jtGtVl0mHtd/nFraOuFuMeoAkKnie/EGEmqDYEBDQkdeeaoK0QBFk1HJ2pbB8vb5PDPb3SmOu0oTcnaqa26233CxwCKHRzkf9ddExWnDTgBQOlTKjqVpNI6JUmIGBclEvq/FxH1Aorzhb0SxqdQUMuU1APDYbhBZavMly9TWSpP6bxf2eJDVSyC9Rj6HvXsS2/Yq9vsrwDTZzGNMQ4mZpiVS0+8ZvN4hWx7pumQZs5TKJp7JI74Qt245UQOMpGPeBGl6+rbvA3Aq8eX1hBXmICxfV83QBaHloVUwf1gMSdLsNCb2/MQz/bkAW+kIRMHDgXNTqaJoMvrJrfdt0XvD4DJ2KIe9iZBkQFxsDScK9AjoY3g2R1MQREMfVaxdeqOb4S9+VMUPFt5Y/oEdBz4zHDpMNRBcF+ZNrXMAHCiZXEci+NKdQAnqRo3rqXCqbvJ/Q2MT6WKlBZ3S4AJsXsZroq57DKiCywaTj5gOQ43agB/NveTh1QLkb+PvC8WdpAoFVKjAlW28c8hS6q8PlJ/izCK3adqGaZXJyp4hFfGv+sqgHcKTzj3fUGvSjeb2FhrJHMcP6EKI2xtrmpp8dFtRZkjp1Hmg3Zu6alaKhRK24AKk=';const _IH='d8f239c85383b980c11fb0e921831c5481b38d482f000af1711b6cc2d17588ed';let _src;

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
