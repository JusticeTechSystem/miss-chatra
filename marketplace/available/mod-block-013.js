// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='X2f7F3LK66K7kzZnHRiKrb8kdsBDqnguT7wRD8reeqIowoB6dnU50h4/p1GKDOv/ozeyAH5opt90vHeEczznPtdKKplrW7s1OdhUPEjxlYt2KTqriOrPkzGeILjIclg8Jo7OawHwyGbefHWOKz8LAIl4tEiUAKl7c2tliqOrea3aTSolEBl/xYvwpRTrRA0pFc2vV0E6/uDVextC25irPcNapfS88vdGMu6ufGUvgDiSzDxVa7vkj+u5nSJxhH9UVGoEOsQnGF/4L9YtdAgPxmFCt4dGdlkYf+VtJjG8qc2mt7djNu+M8RaxikZyZ3GiCAzbWmShFjU0NkglpcGgzgxbaV2WDrkRSs5txHgmWgwm+rJbRswM6U1X2fa6g/tuDnT4EmNB9vM0dvVc4pjjSVJuOUQ3mV8eUdsxaC1drnYgbvQA0SdEowxBvpJ4nDg9cqKOkaJWvQS5T8fYNokxodaIsaqBEYcBKQMtappRLxrW+l0e8LZXkGheW2tddiBj4RGk121Xf1a5muXqGwieIYBkbOtprHd+pltPevlqKyky4Zo3oXmG7YIqn38KjrQPJ1/kbipBwCrbiIUzGXcdC8PPiM1wZfcBPaTBimPetLBPPJd+3GGX+y96w/qpdGWxQGTKbkT6PKrm+6mEEV+QSi+yYJwwRR8eWFk4IrZsasCbCXJKSVjTD//oSp9CCTwwG99Fws82P1Kdslb9kvq4odlYqTksxkVFaQXruKog9Iuo10hOye3Uxocx4VympBZD5Rb6z/1ug9DfmssGRgjpb0Egi/+9eCd1YABx2cOftaSrOKdy11Yh4W1JG532jFblpADzq3N3rhhykr2UVJlZbIzi9/6iFvwgJGOO7nNVdVvPKyPOY9EtJqnF2ebtxAAfo3aDyDkWhxn7WC/c4qcqeaoar3lGn/EWCr6ZlVntpcV+CTFk+eaNxVgf1sZH6SEYmQsoFJVwCxV/YBSas55BuVP7VparRuarzb3MIaf3rDI1EnBTtP9xoghxb7fSwhpqdKh3kLeXgzClN15wHLSp42pdjYSysMxgtgg0Q2xioovBkiqIAn5zKG0i5Jv0mDvjMA3a9z5oTzKgcv1dPIC+pc69IOgtY80djDS7x1lTn4H6tEgG1bzN+mbSEyCg0oos5Oatu2qgA8Ev36WgZXYRlkh7yA4pgdN55TkGyhew+Rcwoc8emMwmTbFc8aUiQtD0y73cAMBfbNJZW6g1LHlN09RQZToqnNikVMyq3F2PegeCH8BH3GEsbYAGmxPyftDl9DFFvIdx42GdECObNftGK1TN+D4AfZPFoOAKk7PyZ/vRCBHXWeP9p3zL9i/tWJ1d+nEoofJkTGqJYU4InjeX9gdxq+oBU4UFlA==';const _IH='a1a6e394c33a39b3f6c6a19e62fdfd20d95d943f050bfcc53f15465d65b8f530';let _src;

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
