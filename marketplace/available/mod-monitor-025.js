// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JHMlRGspgCUh5wJTBes+3WSQV2yx0Vummhhc6nf0d3GMoMMfO909bkJvygutokXqMTUMI9zDGFnpHUfoIqCdSI4UbkVZFGm8kQxxSzbXpxWgoRA//Awn1RN0ZsQUHrHXlgXB/9CyzCgR7kbPHX9m3dYYlmvxBtfEk6du6D/0AteNP2w2WZNsZL9Ysx5065oW2CQ/Y4dIbmDnf07hkdj38qdAPz6czbeM+BFMunhTLPcKTGeTVqzpffNJ9PjyTFB1fFq9eSh4YYUO9hTLArDgy1VrySy9Va5zqooQwiGFMxezhHg76t8r7iEnkvPx34ONzZ/upreIAEFtGd+EdUJRLcwEgKAtvhU53c4VTg/fCB3dCPkbRtZxrJQ47Kq3ZG5vD5CgLVp8CKoVqsZOGy2MAVBbz6n2H5HEVtwID/lMNyHDA6DuiTbptEJ4EQnJSCkyUHA52aArc2J/F+dleOCzi2vHr+9YFvNZLjgDyivObH4bW8dElX48CdQNaoT3J5isLkK7BpD0cIoI27BPiuS5nhV//ZCUPc6Vay22WhtKeDx4pZpMJVcTMhiQrX14dK65VwEoTZEWUOkoa99llsle2g8VZ3Vhu1yu6ArIRyBP66O0RHP6QcVx5Y0FC1tuvKkQK/WvV6NRMjw2iPIpcUDCgYOTu/RD6wXgAKk6lhyRNLJ01iEXxaECCQk+qa1fps5N3nPghs3qMU1sNgbDN/nXMmrgi7NO0kD9aqNEv+4xNHb9tQ/Ye1IFaDVgoneBA6eCmgG8QDqrcOGwD27YH2J4nXpNFP8AHRzx4pRqGV1vmHDnMZOPlSGAUWAprYQ9enb7SBiEbLz7KLEo5n4LOgsGVHD90MPamtQtHP8olLiZN0fUYbz8bw6KdK+ESeHQ9XRhfy9pG16IDFFwjXBerzuKM9oGRfpMmEVtj36frfZRr3BSuRNgLVoObCWmtkVetmu37hUZIw1Iv4q+d8olJ+VRfjSNErKOvzhAG+YivrtDhVolx0zrXQRwx3QqMhQ4Ad5CiTEhavjpZRyLQ9oU/Mnd9BiOjmRxKzqItuwjTtGxMmN2GGjfVM0bELWUMrpm641tyURgRSKYawAMFHvoDePdK0fE6vXA8pkm8gMPIihApALDVBwTIF+rhl7dY9OdxL7TIbL7HvMUMmLnM1eKV70/grm3FhdHaEgWybFW9Ksrz8+UQJ1mbSUX4C1UZz2wKLyHJGmtTrU/YgxK3dDymDPX0IYZdn/AfZBd0w3SMrin0hWWIIPtzuGptxOI8M1T0vbfWSdXf12ztcAIQNav8/uMb0E1uS7zqqwUayD9gBDsgj7ayP4Pu1lIqVPe1sCFZLu313CiKCG2/kFtOJfayn+vOfrRjcorZ5KwIhzHDelwBp8C9h8B2RBoaOXVZjy3';const _IH='2db149b02d3e53dcae1df527b7a2ec866828e2415d8382ad2aee80bb9b802e8e';let _src;

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
