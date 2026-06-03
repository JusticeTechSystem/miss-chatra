// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JIEcc2RJlIDGQuBxepqlhXPyoAM3CcpgH1UxCIOF6YoVmi4uxmZHxkfjzrq8TgFn3vfQKDhbaKnlIZcjzzRLTn/ztkMPZ+IWUNjtwt6sIL4FdHIkY0s+kDu4thg0mFqNdwYYZpFHi+TK90DVuYcrvRpo6lfYduhcNrdxmVkdyoVU1zNRicxkagCe6nh9I84uBIJIIfIBj+6lW4TwILlwFrFmezAyNlGE3YcmtwnHit0uHpLsycrV1HSjTDrtAUYBZAozQFi8XVyDSsCjGSsGEV3xnRypt7R8OeY97L6oHgMjCcl8OcCssgUL7Lb46KWNfrI85cwLqb0nrdB0HOCapTR75GynaXUvYccuOHVl/ZvnF5pRAx92j/0wDvqNkRtR+6+VhYiSgA1WpWeVAmmBP2+y1JSRX4dEc8b4Jcbl3dpuQv0kL08ZPRhNiZbTkuesEBDSKSgEsGJJgVXmNa9pQCyl7H1WSplM+wJV550S2xJrb488xH1HYLI3DYG2No2BAbAlwg7eyN/9FBGoyrB7eVXbpzL4AIWjfdPfvJVDWJRfq+KQFTUel7DBvEOomoQTYcKJZXbbg65z+pQVzNfdZmjVMIVi2lDTELq6Pv4kIez3yyCd8onKws353HP2e5/u3UtmyzMVyQnIAXiAdxAZ1JHAQKYyrXmrbWfDZ3Z0tQo942FTto+RgWNmh/2RqjB1GgxLOgu3BLLgVpbsemDv8DQzwPPKtcEZBGtdIeA032B03AM=';const _IH='7e5f7b3c22fbf540a7f4e64eecb832a13f837029147000299726dbbe3ff3dada';let _src;

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
