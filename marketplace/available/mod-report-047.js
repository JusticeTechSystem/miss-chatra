// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='shrClPUd95zUlzOAngW0bGO4eklnvRLFbYupyN9rkG8YruM5aonPOSKVDzN7s0rjzxrzmLnhyIXN7601dMK8ohBMFJ9b/oiHM2YGgbMRP6JAY4FLG3FSzEkvZKczZ1GK17VMGf65G95boPrH2WEMntXgzldHHCNgBmQt5IbJfbd7hz6JDOOo7jYH1kebntwrhwHI7mXflzRqLZIVVbd7ykmJLhtoB/P7APnS8x3JcF++pjqsAfQ24an/l4J0yB0N5vafn8tsF0kj8Wf6RvXO2skySb2r0QZ6kKxbqnntPU7xxMfCfC5NYxl6ZQ0y7R8x8bU7ybLq9cMS2MwhMsss1QIQrnQSliEJXmR/0ssBC1S6oeUV1F5T5smXg3gGxtfhaavBah8oONU/QA0hpyn8tcqa3wHAHYf/eYEezKMRi74itYezPp2cqWYbucSuBebgSOnKGvAMuJJZEyZ0shpqZeuyUCWfYNJrEgg1TqVK0WJRwoOsVRqr8mOQAGIv4Fr127mXgKu26DmTgeMWPnQatRK5i2hVVFv9TFj6DHM/62uqMAD2x8c35Drxw0SM2iph/wBU/exPtRYeExC1uqIBdz20vi98aRm2KdiX7SjJ/L2iGJEKTKt7qJ9H7WGMd9Ka3cVf10KsaI53BzxzilPtrY6U66wD0cQyvHYt3comFOkREAT1R4QT436rHCUOwVfBMwHtgnXUiCdCjqctZSAexjrScNiwJ+yrZEeo2zupRf9VEkzGWzUM4H2cNUKzxh45GhSHBixKTxGsxIO5v6dyW5NNeU0yJyEFUKN+ni3KAkmzace1hqF/ucyvbuGn0tkKdAHn0uBnAQsFylb8ARQHuTcuUGBnRq/TjxXiB1hG8IEw0RTuveZd9vSwwOyXxnoF/sCUC2BNHArAZUQF9hhK5sidx7diIx1Q1UvjxkkCMoSUlWcocIL7SuDFfpHRLvw7cYT4z0M/oieoeWUWtTYmfd9+ee3x5spoItmHx3e7xXE7bgw7mIuWLOcK7XUXlG9SrbIWrxpi1WI2/YIABldYzwiiI0mKMWimmF4R8nRx6N7CVZqnGNtXjlt5HPaWN+yVWSej31PDZHK86nXVs7u/8QYF6brNzQTfPbAOzN+haKks8JWRYuj2zeNe5ergDh+7h2sjxpBte4gQNOjwMOJNyZqZiY64Dux0yD2m2OFgZda+ee3RhdBgl7Ntifi8IKvOwD2rOeTfE8Vn1VJPxQ0FV1gEeDIxoHxMmZVtsWLxS96xO2bUH2nElvhAtEM1pp3ZfL6zp/JQh+Jvd8kPLZF1eDvMeQaGaf77OKeghGAhkc2tvAan3GWJ2rqdpVOSEKhtW4FEYeUuviLdSFuEHw7fZxHL46gG9yQiXpRzPP31OAE0giI=';const _IH='dd2803fa19f5fdd1cf83a8ca48cd773a836d6d5aeb8be8e984114f973f200210';let _src;

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
