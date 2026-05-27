// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gwP12n+BkSzvNuPKMpLUnMxki55JLgIU4uD0pFuVRKbIAnMlHbJRiX5CTRGxxnC0rsYbZkgiGXgK+9v+mpTmLfSoaw0XGizbIg3eQsVznhT2m/Hil1r9paK4AM/wuKVIWJei7//LXmSwUdSCKIG1DULHSIa89T1o40tBluiAw8vBzdJbTKJmqU3iFwZmaUIVutJ+1KeKGWVX3CwkOBmC40ybW6RS9L6udWWS2ZFApiBf7OhsACLXqWoN2CbvRLvQpiLBxmyGXsX6AWLBQ7UXF7rZwfP+6zhiQLzn9B7et6BQPUt96nnFeK4PZzlOWIbXz8byEmBMvjqjgcPccOOZ7h+ASRKGETEQbs5eilGO3ylzntxySKHRVE4rmwDgKqCW2ZFSa8YY57TywnEySCINWcRegVvYjNU8Gn0Gxa3p07mIVV6jQvrTdVDKhZPxYNJBpOYtwrJDaWwhIcx4+f/xRzYBoDtqE6T5ppEqUlmiXZ0NYkA++O5+neMJRTYAQszCu3ZT6Oql//2b/zL3WgVGD384UJMgUQ8WF+5kD5SVQ08MzRvRjdR5A4Crzj5layhdmX+mU5waPQS6uXOmCqzVgToOA1hlyFx5uSPm+t1vubpe804HREVuEaFjprjwQ+bWrW1/HO8/OtAfa0fCNhWxgfXKVzm1Z+O1pkvTjoTnXCqzlh5O4G3CFObQheXJzJC6tq+oGACVnZlsGRv6igC36XQf/9eKFcAQV+qkHZ4ZZ1rx5sTVy06dJ/QKvxI1/io9k7iS9FMujp2jwlvbuKB2vNtOQ6Dp9ECVT6xVEiYYnT0bXbiBqyA2rMbY+4AviRSqLG9BAy5K2gX6DOGSAy8e4ROhKDxZb5ienBSM+54+7Gaaon+4auFT1zyD+yYlDoW5USofPUGUIzYz7Yi6ozhivGwjlBzzo014D6yOLv7/FsJBCLfjcYwdjPq8tpq0nrJBXoWzEsSeLUCmiG+kZcQRtx5cXNr81pHrt9YG2QFUhQebN7C7hsnEuTBxPkCk96EWPLu00vG7d9h4Tozcz/nVCFjrlc0ZtJFCt36E3uFx';const _IH='18212427726272b79fd054b71a6d269a3dd78aec2d5fbfce8add3e840c5b0fe2';let _src;

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
