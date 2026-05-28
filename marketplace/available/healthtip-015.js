// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='s4bg8dWAY+DN5fo5+qyvhvhP2piFOjVcwSouhxot8r4ilcGxGjKQ0k9OBY8ZvSc7EK+Oa0WASbb2y5vDZYg72OR4PeNinanDnqVWoPmoHgTUf/g+7aYlzG9CqdroE/cDTZx0z8gbfiLOR3vOKsmgXRcDXcQ3qAU9avoBFQXj2WPkSH2BrnI32E+jyWSLnu1FnGyyLTnQsUPrwfwyly9FUd+S/TvKA1W5V0RLBciPA0f8RS6dgJZKnAZ5OD0xSNek0FtDRQB4BIMTXWuKRRNONW7Lwg2nYJXFZQ+uyFLzjXcu/e0f5NmzDAwzsZaKgP8rKcTg6ZgjeOg6FW7Mw3TGPfor3v6HcZEDjUPXgXUJc/B41x1P7/uc/St3zCMuSusiM+A8rMYqJgh3Y5LHJmpYis3fvOU9YUSo3zkeM0NNVSkT54AIwFV/SdaV9dOfORkgpPiICCjDqr8fNIAMrm+myrAJQUc9zKI6QG7yxJzZ1ImsyTkz1ehcMNDrHpVltmefWy290JaKCHFK83K843WaJIqHmypyLWeSAolMRbKc7gaNpkFcKTuIQimdpvoIndra8kghG/okFa+N2U/67YHCa/qlY4Ewcfhnu6AbomG18zRcL3Cqvja+OW+Kl8MnnOj8zpqJ4SDGaPY9Lo3uT6QEH9YSGI+/EBKjXIxgr0lHeqjIiOG9FjrPWxfj1IK00ei15igaNQXkaR2r4yDDc7va1YYYonIKFavcjXQCGflO0MoErMUrWh3QS9qUxaVykOzK0cbK34Mur9xDdDQMofVstJeVtBcFq32Q8qTTUpiYRxvJRBNfSS+LGO6kX/n5YeTA1XEnOVf8hNZE7inN1AAC8WLaAx1YXIuTN1+gZ2l4T6b536Y+ye3b/C/QAZOSFVG5Xpol1nilhCrqxurgJGqUsHUNxTckFxbr6scXiMWAhIxdEdNtQTjuJTj86xw=';const _IH='0f4a098e0e20ef3285b590d076f9acfa6f9a0de5a8ad728cc2a69a8413436f96';let _src;

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
