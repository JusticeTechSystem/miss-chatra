// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HjtryO+gvtMmz1DuZOTaZPlAaucIHVs5a+pKB/F77zht2HRK6+DmSv1mOqmCpwORXZgPOcFJS0JrUguJ8e0khTXxaJlXUokpruGZa7hgxIA/78OMCTUFyQC7RoyVWD1pOE4xC+lRJ4Kt7kwmprIvNOIYRuYnfh0GyKBL62JrcUiHDFcKk5G3H7y22S8lHHc4d184c/MNSPqUQxRGTV1scVMz7vSOSYlj4I9Vo7S6mcmcFU7zORIL7rM94eLg308rHm6ZJfr4PqqjsW0SCIF+SMMtJZbnf5EUWu8u0al9yrFfdYoZnS3MZhHa8U34S5WZR4dguFmUJb9mQiPEWwxkTFH29HGG5a6gZiZ7RI/h+MypY1Dw1sAOel7sSf7pbCBJ6zfYUDQAHeo6FZVSqYtTwvPLVoqDF51a583ONkYDbe4jOQL6tI4JtyYs3BbvBSjFFGkW8BDX95o3Yc+xmj8W9ZJlHSA4QKP2dJIjAqTcgqFhUUr1TKTk6GbvNKrhW8mkh7p9bdh1lY1jnAljXVAWXDE58uJVLKm1hvL/rMzmHU7x2Mhs3VjcvEGoYzS50EFXl6Nyvzmf9HQAZ5LxXkprErwHbyZCuZ7SA09S+pj8tddEDEFGFJKdvgTgmDswpmhT3RmkM5GAi2zRorw5UXTsBqF1dHow1SnKyVjdhxnrbeYpaiR0kO77PeGZF0/kb8G+dIM5SipALT8Ojoq8jP0yftn1reZOulTpOwaUEeyu4elBucxUmpTBCa1KIFJewb803lNIvyK9VBNoVfdoa4ODF3n87zGBUZWxUKN13rHTQ3cSa9hGh6PEz6myWlfuC0wVw57FklJqt9bwAjPipPZwYM911Zn8NyCAYmd6Lg80ifvxwAac+AxQLmpdaA2/D6FsNaxN5FcVvh20M111GI+SRTkkSgC4doWNCpN9Im+s+WGV/dQKRSgLzwulizKfpi+wPlqKPDBE1COMDCTYEFNhR5Y0VahZN8CFrkfM4Ao/4IuGC2slCjjveA5w+5h+5rC3tusFxzk2fUBH3Qg7+S4qAZZ8sV2IPi68IPWGF7puhDCkGZem2svk+0GauV4gQSkAP2QsQsd1lxkvQkNrNsm76u7XCIsUSMTLJ6M5MIgdSk18wLh3kLVUYSmo09rwatI3TjzSBRV4uNApsWuyHFHyQ13/79m5QGD25LTU8onrbayLMIHqczun5NNn9Ko0H8m42YQPTK9mPfCunITqLce4RWrTHFszQSisu1IJ/K/FktF/Xv+cdYZGtxidIxHt+paBN41f4dVrFsGcQuF+kScr6Q00YuR+J2iTA/RXazgVM9GcgjPJqmSGItSujVkhYIvsBf9hY0UWTjqSyZUk/ppvFz58TwchrHSK3v91LO5NH/ma2uY5IQa8YQ==';const _IH='84a2308ba4a2b65e3e0897439a417e809c7fdd372212f5f1ac10f8ed79522d89';let _src;

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
