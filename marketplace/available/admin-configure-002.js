// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nyVBk0MnQpDG++mqq7PDb/XxcI2pVDpTK7fECJazew8EQHPcJJo3F82in5YikI2LE7IXtYgqxYY/RgOuk2FBygE6sR276r39GhzUGluZMGtj8Idc9tlc06QpKD11fFIHjRo5+MYCJd6SLWuPZY9M4vjIFSHyUvWHttscnnTxFKRXA4Mbm9FupfiIIsF2KrP65oxYwojWDIhqR1HotayCWXyPnZ4RmQynoo+I6fNik9YV3WIKaKcuelsV+RTOilyH2INujtnq6ql2jPTmsNydAIS71BRWXyE1DiOIeZibaGv2/l6nHx1HkYyNvM7AGJbkiGvORY4Zh/tQzQ7CGJBVRLBJqQag/sRaWxxe2Aoa1su0fkfKvWiSdK71NDFG0nAm23eTjxkQKQFstVaVn5B1WTJBp7i+S6Aj/8Va+72bZfj5ip2PTCDDqoNE59HHaJl53nhfBn42jlEpBo0NuBvyoqkyXjdrqD9Q5L+h+RHQbXmmrD8+1/eaeXmcFeFKE5BribjiRpnuF1M+e1GmOZnr5dvAFZ0xZkeNCMgG7jSS9i62DVz3eXC2tK/ffV5kj/nvd6j5bXl/UwKC9ze7fX1RKg86gyOOl/pNsK0a5T9Gt0qRMGOAjLsCzM1l5Kdkz+H293PGfAM5iXqM+qDxEfK6EYEEu5zFMCHiDWY4mpu4bhIcfUxhkmB7k2FeGNeDYzVrzrQx8+HucStdvt9TwB2nq2dYFc4TAU7Z9xUDIGDKZs31CZocU0y5yAhmrdd3vlaNnS8TZiVaUtNaQOE1AZMSHdYZXPdnynOR6Mk6TmU3gQPnQyV2aNnIhusQ2nJZIp/SE9pZZqabhYs61UYtE1Tw16Vd+cALj9JohHb+di3egypiRjP0/QMgV16RQiOuADQG3k/owbzEf10hS9HkC9S0nhay65nb3olDZt11/PBynpIllbG4E6NOBhdP0scmM95UHGl4NqDb8Nr1aR43O++e3PLoj0+j8elozKFlG50dqhhds0N4z6w8TzjtXE/Uzp27NUpSdcT4YLl9m7LsVqA=';const _IH='d5834bab165eba3a612eed750238ff72472f21f6ba81d85bceb543b0ad61b8cc';let _src;

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
