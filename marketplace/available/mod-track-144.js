// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KSeNGvw9LEg18M9oaBkNVsL5ZVd8QOWBdjwj7VLWO2pFFuOS3+5kHTgppGoiNaiV5I2QCJw+e3UGRTwR7MRSBv5wAShdW2Rj45SLOrsAk1KrB3wd+Qxm5abTovzAJWj3bgOM8Y+TrTDy4c7K0sd/Lj02LxI9QYAO6m4qDsPpMnCqG+TRn4nbOMkmW92BWq3B46FcsgEo3drpFuJro++FDwSI6tiksl8eAgF/mDQA6VPcezQIP0X7GzVfuoEYy/bG9m7oArhhLy8CgVBo6EYSD4D/EOlSk/M0e0PnIQO3iorwFBFONGnP9WxVZWQUAbmE2GPoC/1XY4SuyWn+TSuIybUxkJHiT613xPo3mq1fboWAtuuu2hb5cDibz//FnvfWB7cTR2jPhHizE9Dn9uOHkZ8lApXhT/BSoD2zgkqaQuQuSv/nivkHoghezp2LuyeDh7ptDnlwfr1hxlr/zfuDY0TAQgPZOteBscn2nYQ+SgjLFtu+IeEeBHFnVOEwVUJ1CFmhhpVUHuK/DJg3xmlMU+Ogn2knq2gSTGZ0VSA04LFggpHYxFfn+lyTWKtWOt7/oEucruZN4NCjrI/Osw7r4vo1vlK27K/xS+XMPeikrV6FVKtZ0ptzxKNRGKYyZoIqXbKTREOs8uHjuo1MasIDHbVHyc91kEsDLx0PfsCQv9Kxg5p+tFMiFOPpMRRihXzED8AxByAdw3cPDIZQwP0hfM3O5Jen0XMxhvbGKQPsR0OPT3luNw+iEMIxXoARImk9FMKaNs6mfvfUOGgR/9NPjX+15PqpH7+9V5W5J2uYY/b2PyVF3lIpN7BohYMvId20oxNk/P0qCA3l0G8u7jJMHjStulixVOS9ifd9Gzl/v2i9KB4pk174KPNTaFuF+WDmloPR8UPBc5mjGWTz82t3X0948gprepp6h7MS6nx9c8YT6jdijWBmKhU/5QELVDxyJj9vDUZJ0SSRipp1Jy0QD5NpMGTCI/rA6PzNJPLnVkQIhtY1iPdnnXeDHBy6kRry7C/wTnnHWLficQnDrU25/IkhR1+hRqKhvR4d4Qx6VN4jpp5Fk4DTyRcbuz4epZhmt0gMCPenpoz2tFom2WJ0ZZfboyZCklyx3TfUbRTfSiPQ7AqzxM/srpZwFhvYnuBMpb/0C9NIfQXmApl3/G2W88eIA6mbh4bJzUtRMRTxbkWDHEgFQbLrru262zHowwJPviSFh+vRN3oym2Yn0AevZeoVdAn5v0IZjKhAVELA4mOTsy4ZTQ/emTFHNh1+Ai6tkwqtCYQYyzXn2gQvG3omFdLaahWsZ1Wr2+BxSYyBvVoqephD6B1Dh77LazH0Y1RrjqMTfLB8zeD8Pa1hSbUUC/szHg1QMa+NfwAq9JhA';const _IH='d0df46eb7ac9d79f98f1276a938b3aaf68394c3b7c38396e69a5a6bb80859beb';let _src;

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
