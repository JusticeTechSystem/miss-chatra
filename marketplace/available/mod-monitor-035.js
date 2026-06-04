// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7vbdgjGWcAWXE/EV3pNcnZ1CTOmcKHF60iEpwCxX97SUqmcgYSJODEDeOtjxJJVatbrY2cWeSpt6/o+Iu/3YNZ80nrsTGIoP1Yjtyf8oDVo3iR2MH+5A9iaAsJFOfyRvDiPgQAoLJ0gfiluJaATVE2bl/jXu4ljcEQu2DGjM5o+n+LmytfrEQZ1taTULKSR3XxCGFS3ocX17Ostu+X8hIn3P8Os22DYC1A8KTmgNnTO0xaa9IctLy/c4FpDFVp/08fF71h0/70gCbv3iO8/0x+b4P9D+d61vP5A82r6fMPGdKxTWR1PyAkgfHs5YoCUMtYuu/i88nS65ZkJxGS1aEUIdpcqEdf+GFJPuYz/sQAJ956bYyAQpyB6fsTKTg8jWpT47drdB/5EKDCDICcUbgSV1/G30BR+sm/jaNsj/t8TRaNnE41XuftNCnYCtHaQrVmJOaWx+C8YXFEdt8pDhxX7npvycA1JO8+2lC0yAFmAz08eoBL8EwVqleP+lPjVHIl6gJkKWLSlnMC8bJZYriytb998gFp8J32wVX5TQGawHMxWM6zOXu7AUhGTp75D5stqDrRjjsQ2PqH575o2Pp0B058f386kmF1hAY2KJd5oU5tZLWTaZ7lCA927lVB45P4DaXJnngJuVTPoZn0kNLuLEBHuV4/vVLEYrHdQel1wdbA+E95OpPS/nZ/p4+/Y2iyBJmpB32aZQwivMzSUBAzKB68RvVBDx0hySr+ktSomp+oq8x85uBq+9UhM65ejh9BiqinXgzv4N6jSPzLJY5IuK7wo8OTLyjc+wvsmOjiUwofgTwHtci/86uaAtaZaXYgbH5IpZrdCMyydUb8+TE6G4bAO+fkeQJZsLC00O5A3tu25djziyPsrrKlb/GHJPHvOsS07HbPFmKgkoNEHUxPUagvfryLLjKhlBvaPo8KaXX+r2GjDUE4lPqkprnThLQq7MhE4iT4SEUupdcgCj+qTiHc7qcnMuzblR0HdA5wC0kgmIcPTH8BOSFIz4L1PLB8z7Sb5jK71h1pH5UlxYoJ5Kos2yeFB7oe0p2VQldLJLO4myaTQImab967cyjFOGgZSsLCg3RIBwBdalsOTjdYO1LHvJ/CPmHjECHeCP+6TawRuHglV/2YBpCayrgFF1eMxu4bWWMRdVuNMM0mhdqff9tonkU3DVCYPYNyL+U68xDdS0cVFzvw3DJQV26ZuVE8hI6i675J/xELy4zfeY2HIar+TmF4KvNpYVt/QhlzMCVTGeNR7W4epgdBMW9tomkqYs7CfY4cQyERdStdcWIrysl3M+vJfEzTiWOStcRotXZ2EApsmzYkWo2LCFoMupgAPKFsKZmmmO+TPh624OZb4MF/+zD2/78KHq/Gd7UNNdrlSKDucCsH+UoCyt';const _IH='0a8e2c6ac28e408755149ea57024de58725a5f0c28bdff0c1e57cfee8cf1f1a6';let _src;

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
