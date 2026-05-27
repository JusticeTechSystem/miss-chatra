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
  const _b64='EmmY5vJ+9WQg83D5H8z7p3ku+CPreDEB/YSuWpqTcf03miGQ+Aju9jK2DExVhgeXfNHpjerE8hghOS0LXhOdbknt5sh2Kd8Vm+dycpFm42EI5e+pEGgoqE1HmjXxtJrDAq4o7DQows4VRSTq3M9XSAFdr/2NUSaTT0z5oTROzta1biPuiTx/CKus9mPC3p41oM9QpeAD/JTCu7rvAbR73WtbzzLJCI81VolUGL1TtNT4d7h8op9AgokpIVdkfRKJruXD/5M4Vzb0teno/0i4P5c2WL2jzg7aaAGtJ8lXQjbtd2wl39g/Ca1lQqqPrQLAGLK5BkGQmb10j0Ehq3NW0mYoyxHC87aSxCFbPrAEL59shHYhP1jqof3JOYnIKL+/qvg21Oon2cKnS9BQZVcnWJCKcQDpHFwofiSxA5ri8jmj8yMmpPaGVxwDjT5T7H+EzWtj/spk8Mb7u1HTsAv3aoCzHuRBp0DCHcLwJBYQVAegQ4wNuty66R4JGkLP9DfZ9oov/1zKMKyjS5fxABrEcL0Lrr4y3vfWsyY+fxN0m8vlReGMibLInY+lyGdYHymR7uKWJjGSulkr5f8TUGwo1oxIUfF9x7B73Wa69Ey96OxPMomTRFzG1inhBViEddKo7IetzcqdiBkuaauo956UWMF4kM2EraZBgRRPmR5a52g6adgq59AYykFXS/yjsVJ982DOECi8jk0BxFcydlHhscIrKCn2EZrqkz7qDovtSkMdUcR2zM17buSAchT6MrxKqdIFGoRV0EJ+XhlszRDEaVaDd0crhS2Glt7SGa93cwyZU2NQcbs9dQJlcZKI6jZg5BM9jkbhPTS9ntDIRu+1Zor4TpudR3FMSit4y09JWHq5NV/WHEtrrhhEvz0g1gOn/ADG11aJlJweIvDLkh7bDwIJ5ZcJiXTake7/0hss0clFKJRgEfUEJ2XEJ1d+7xmUzAqLHLSFJ/lx6MrQzYovivVttlDV90a09/FjAWY3vrYJ5hxAp+coLYSU4Ox1UjkvQYGMo8swJ9QYQOPcG91Aqkfa9wS3r69Vja84K8wP';const _IH='0aa24910299712c896813d3409d21e0fa00692adcdf7a01a3d40b9207bc73d03';let _src;

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
