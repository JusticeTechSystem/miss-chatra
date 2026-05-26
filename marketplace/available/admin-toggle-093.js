// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AI2doAH2kVCujPyi5c0Q+3wp/I6pD+SgyIsnmlglmc5WdkYpgM3l8G7/OvF/imTOXZXLEyfop5N56mD+7xVQ5TKkgRmUC+cTeyailOJe4xh13SJvxTWlt+oPcQZpzTXqe1HXTfSuTGVYQzF/vajEscmy3LV1bvS+mke1E1nv32oG91nF7ykq+Bky4A0R25cFqrdpafLIQxQQHIe2aAGigRlaQz6rHAepUMHLexaISGwBUS0EoLFSZKh7aChm11MJfdzyihCq3i3S2Y/9vNYMNNFsNNUiuQ0NO6i2JVJjIsqnZ6+IGEukLhroqqFv1jIRcF+g3An/tpHgEFBvrLrYCvhGML8jtpWrbidZrFPVqzKrWyMR90gnVlb0ti78bhZiNDil/stjajoRnsO36ymCKJEGyd7FirBjvaVoijweLDupPWnsMBzwbakKKiqfmaSOFoYZNPKhXenBa5JoaXtAsx6K02C5oJY/84nI63dMjS3krp+WyeSW+88EXRHTN+C2n6qT0o0d/P9a7mt8RSZj9L8fTJe22fctaYpnokI20oM7FtFFn6kqrSU1519TUJDEPFAiqSYaidXfBLBtGr5+W+ur46dQmCsR0VtCPRj+svs4zAG5mE3BYk93hwKAfv1rAjBjyK8jiQHu6uRcnUJFs1O6oogp0omc5cgBqkSx9pCeQ07SHGpoW2x/kuJhFIRvjsiYLU/iLdtptaVrsNN/GGqTS9vQ1wiJhHJ/jS6NSTXNOxHy9OMthsrKNKFP9V8hBBPCOF0LcawrvP0NA7ylxfe9mp1sylQ9pB99UuFIO3HTAKIi3vrXJIhZKzDLz777rns+jIaDzGp4Jxj7uqFuaE3j85H26fBwlrPG32WoZ/JZypGjuJoJ5L+Wj+c5O1YwHhWgKyVCeP7bhvQkLFXq3BM8370tARMpaLX2iRV59d80br11fHloxioZft2OU+foRFaJzqrPvRzc0DlQHyppumstil9PIIDnmDMZ9Sp22S9miAY7EPokH3mDrZEZ';const _IH='e11f13ec78692702860217ec9b54bc49344072e4dbdc1d21913be5540176bd1e';let _src;

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
