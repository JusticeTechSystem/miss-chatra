// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='crob09CqV1jRXEXHvWVS9y4d4wd8KzvKk3c5HSlOc79h6gOHbjMMmutKLbOz5plA6JOGYUASBmaPD7PyHCO8WWd3BP/f/OiW3qLPda3Q/lLp2YNPJ1VmgulZH3Hg3l7jjsSpN2MmiNCtIm++sAMbNfZwcxw2gA15lkzm/KconVCUOgmPtoA39nlHwH+J1FNXG08AvaXHERN5MZSh4wn13vA66hwGVyLziZmc9Gm6CJw26sDIVWH2lSiyyNBtNEzV+L17GhEOt5astfEH92lg1g2shFB2nac1L50NUwlCS1l33XuBANWwjzH+daiBhWonfZP6aFmG2Sc0yX5uwM6DZxvJeIgEM6cUNDzzyZ7fL8kU1zSIL+MbRiziFKndGuocp7cWgaDdROLHh7fCAxQtpi+MWZwCxKhMGI9ewP5AE1RPCrDkni5xcnqyi8U3QbaqmW48dA+voOcpesNjoEWvFqsWlhNTKPQ+JLnBvSSZkI1wIFZqCgYJMTau5FstEMVO/1asm9hR1HrlXJsN9f7ySUwgExMV2E8lO83cSQtpcSqRSD/aqgIsqFpKxAizMu1Jpc8Lz0GYJF9yM8SAu2Z6zXboiSv/TkmBzNnPYxrJWJUntreZ4QgAvw65VdVBAOaTtcx95+YNgPSiaMPcQh8pxwlw6/919aFkLtR21RUjj6b6eAa5tOY2PTnERDz6m9+T4WcIXLIFQCfk8vP4pPPQRMszWMQYkneFfbcexKhwe2p2OYPwv/SpsmfsgMxfLe+OFNwh0ciRFjqu09C4ZxbrYLGOMxlRpNk6K03nyGNhgojeoXfOz4ugKfIaEhATMDWmDs8TNTn7rkCLpxoclOHhMNHtJ5ytVRZvxeOiONSNBq11MrLtTeBu0Yvkdp1kaDydPqn8Ucji9Qt/VLfyU//gfE54HR+IPHrUBc77GKgOEVBb9rAtaQALh/sSxDC1AzHfwoGS9Xz7MEchVd+ti9XPGz4OlHN/myQPdkrN7w13HX2fwhAE53GEWRIUwBcPqdnqGBCF2JFUmw8VjzF3inXkvZ6/Fw8u3ioKjFELwHvxXPugCr+XWp5nu6Xz/HvFEfOljbHpEa4mVY38dmSuysJu4A001XFabY2mLUGu/buwcZ/2aMxheRBQpfiC5IinlQ9JmWCAkAdSovSCr6284cRepLcyZF5dBxsDtaHHwUWOjc8caq0H0eTqGfUUWa7kl1DFqXMX';const _IH='e635a985980767b5c5268af8990df5cc0ea0493e687cdcb3d58f2dccc46cec0d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
