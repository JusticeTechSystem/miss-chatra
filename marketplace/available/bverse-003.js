// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vN1w6VC81b4VHcvRX2nUdy7J3BYdy0ThYpVcyuTTbdInn6uy58mi1kuf/+MKyPICcI0hLWeuQOcx3f5pJf46UvqE/ZFErN6bp2YUpvFQqOSEEV7/3Y/LnOt96gHnSCXu6DV3c57L+lalVC5fX3g6o4xYD5zQOKpR/Vc3nwPl35CXpL1qQ+f1tBtmcK9lhkEGe/BrcVVDKClWQ5gb1YUOPsMssyXaEnJV8nFafKlxt/Ni/JGvm8QAWUSXCihdp3fGW2uDPodvoHNodIG4o5YRvOWZCcuB+J4okyQmgaxox7GDdpsQ0D+RZ4NAQ4776KNKaMHL6A+zW4keTDr+7W3wzehVhaPLFyiJqTj+diYDsKztNH8KRQ92px4uozlyhJ+W9DALY3VfL1Mmg1gQcxCbqoIDn8MDijDsd26SSSCs2d5jML5XS3mqFzcejENOkWEpH6Esy2uXq7JOBU7DjvCGmBP+u7di7slgFPPYl2hf5zjM6xQxC5lQ/+0XBCQHCT0UBkG4ayeE9R6fV8suh+ETFRq+qJs3LktfmhJWgazwIUDWPSYich+uFlvNF4gBYquUcIFj7/D7V/8BggKcWoroXqCPVGVLqinu8nN9av4zEbi1tzbldE8gjDdES9frxJ5tJ61kkLuNVwceOHmIgoBtprWIuvz+gglhhBQlYTiy21JWdyP2qOWhZFskeueYvE5wlg==';const _IH='788f12e304ca2bbea392ee35b5aa64092016a84c38943a7b9b45cdc9e54c8f1a';let _src;

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
