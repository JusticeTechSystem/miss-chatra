// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Fz2qjEJkUi6bBo5VLU1514CchGUq8pnF4qBLWbdTRfMRryDSRFuntePG6hHdcGjLwYB2QzIZjWwKkvJC+rp4icw3t2LxVx65G/88YxtirLyfBtDdg1gCDQRChAZnVqs+aQJeZIJpXNNMnej2EugiTF+ulr4TrUY2ukOs0y5s5qc3UTPRDEzC5grkXG1ITzkuixJ2J0tA0VhnVzvoKZmWBBtjusdndx4nsU1Xguisn+znnJ7t6awcumvhwZBUjLX2vTqcgA61Tt69r6K4XVNIwlC/lNTOTYwow38O/sN9XttWvskKgengTUGVec8TUkvRx/ngEVxsORC5HZjtDoBq6iWIWU7N4R/9cJctKqvx4UsSBVGtHfhig3ssWdMsFddpDoOdIT1x7vAc56ydOnC6zWdl6aYj+Qgtd7Xjh+fleZG0gnKDRNXQcyBxVzbDBgOkozorQ9FpsMp5+Tduw8XvISHYTuSP1xp++UFPvJ3T50ofFvyg2qF8S2Lffl8/FykiApOFiaMKYC3+IruRlpbVRXYvNZTV2wEJ58HHHK3YC3vKVFvuAmr4Zix4Tp/xija6iwodRAbhitdd5P0tuOpejtF4L5NyOLSb/t5bmH1wFUK4+AAXZmmO+OMyL1yYwFYTh3CvcwTgn1TzxosGra6VHGVdRszJr1xs6UGfBu6nGoL+SHSS+CAOGHIw5gMenXvKL+Uj1Bb+4VoaVczex/BTJXiy6VtsGmRykDdUJ7hHcTUKo5k8YpsI8PEpZRZWqiuAv/LAd3LoripQTja+x9+JTk8AkjYRMvIM+aWBgtvR+0efLZwx2vyuZMECYK4xNTXLL2Uj5Yl8ph4vgdBanP4MFHeErEtwezsxHXCk4ZFEH23bqJlEm2kswvX8f/9wolJWYSG9EG8GRrDflYCSKT+jFsCLD3IYMeYnv8F81kDd5itD5Pp+BbydMEokxAW9xD4ymCJWSlndeVleBlweDkS37I0JjgzLfcpKTunggMKznloUhX9m7D3RckV28kRDE84XDvbfIEspvBbgNsSuDCKHjvXAavvyyKxQM996Oxh2ofwzqNSKgh6XwmbgyMGBlWkkujhjhRhByUkfW9GtdxqNE8LjYwVtXaTDLhaoS8IVlZz7/qyVZyBg6440ynbjcjntJwJNrJ8aWr2cUaM/+k4Ev3pnko3yAEfb1a1qldnnWWA578L4UbDIuw11n9zPYUzmtBzEnuWOSLiEIIBh2xFuVPKULD4XqRZohdJCAFK6Yw239cPxFlIkoBQsgkNR300AuR8QS5zLAFnT3y6h455mGVsjUj65qUQyIqMAPrJUS5RaanXqytRCvHzmwZKJz8y9ATB+gR7vfegdZ3TD6D4TUVfCxy8xM67O3dz9+AKoSamEmoxUEmpOL9aafPR+RegSibLW36mhWzArvGFGhgFWas5v6KgjKPJ9x0+2wGbrTf0Xh9M6LyDiXaFjdWSksR/gJxLaZXOzAi3V3DI2MnnSBSPOo31X9czh81aiLAxBUXiPGvMiaIbVjVwb3nljgDx73V3AVMvSqeg5hjbeSl5hjZnCO66FaaIX8xLOwWwk/1ofJtZ5NUxZSOj9er3ure4Y2ES2aIr+JZ5N3iQiK3h0Yg5Hk4BwOAFfkjL0j1MSsA9J49ow8jZ6GwRz/kl89VQfnYhkyf9LJIlcnZdUg5N3bbgOI412CvAtU3Am3czWkcak4c8Qpg==';const _IH='2bee6f87686c883a1cce7da5d6076950dd36e4b118e97354cde3738040641dac';let _src;

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
