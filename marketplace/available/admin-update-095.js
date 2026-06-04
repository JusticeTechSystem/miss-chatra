// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Vc0rOom+82lGPILi5cyBZMY2PLGhgqhkBE3f3Te394sQjLUJxmLOkeZqTtm8dh2hDzruUs3Bm/sr34iEtScH6X8UZHxHZJct5ujM3445TNoDlU1y/YTTqkKJHVqE3YxUOfbCl++sNQIRGkkDb3srqjBdPkzRzDYQpE8u9RWE/ajNoBPJ15YLi4llIzB7aSO0RfJYHkRdJc6kk4zGNH71OXG1+hpJuTB+rDzVyab3vMQZ8kCNBV6jSPPXx3arwmKbqmaC5x2RkrSRwF90nIKQgoQ8CQSIKrkvZ3TCKMj0YEMH48w59eoetDnCKmiJEBT+NYKMCXp+i2WKWKrsJdNLL3tREOj9FkNY2qFTkeCZa1KagdTi/Q/F5LAuNZkKcB6u02IGEBm75Vdy3qqVQNu5lrIQoIh/bprzwsWLOjGwRJ8rB6RXTmznFWxn3qGTGH0qb25SFpfOSsXeNkcGQjM6+6z0q0TwwKmjSkorr6ogJw9pp8UZIRm9iz6x/v8tRerrhmLvhCEtW1Ky7ySLILUA+HqPraqWNLv7Dcu+V+84tfSVvs92CuidOSeqdCFtCPsy5KCqoEGMnkrBGCh1o+fXsfJpJi60snck8iRqBD0pBgMSQUSr1xh6nFz0i01zouyxBRJEn+4OJZXnbp13Ja6/KFo7dL+bvPB4oUT/I1JMYaBkShKHUfsvK+NBvbCx4V5MV4PeyKULiMic1fWTZfcwU6X43nBCBHB5qHH+ZCSGE+7FLYZMdnf2cfWcvlE1jQXDZ1OanBRySMmmEN3TfwURAqSfhazCB8MC50IpcLveMqmx6Tahwj1Uf25XlK4LS2QZ4Pnwp2+CC0LXexk7gR3Mh4CIn1IxjZCshATb8zmrX5V6jIx3Z1fj+HC2ivrRGg7qsvfkpmEMaCkSo/coK7yIAb93FWmXJgqDp34bCDyS83jH9NfOPiokKrwPCAKaaZhrjOcsioMV0le5SEiTgVsKnPnQmP/Lm5iJCsmFI5RmLxJ/TXUAs2rSS3OBVS3I';const _IH='70317aeac722202f0e0bb355b2a99d31037f80fe77550f81f31dee06b408aa50';let _src;

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
