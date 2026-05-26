// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+u3ftKm7OJ6CyfBAq5g+cHGLTmvBlNAT6V/wjU0TMaFWaTu4Uf3PP1QiCsaUbNDaCVOsrMf0gTb67Xrwhm6jhDa5Uw8/8xlwMLXm4SA1Mzz9r4ZlvttvhVUFSw6y++OZR2X5Kwf8ZiuyCBaZIUWia0yYwlUXwZNX7R6Q9L49gKJ62o83cOmcYByUbFt7inbfoWm8ZM4zdfFCrHCEygfhgS6Q5EkjCzxDUYqyWIM7071Nt0vUHdFSsfrq5lVKGtVvA2xs8fiv4ePCoYHNd8Ace6e6GSgy9PI36n/r8uCVPmKWVO+Q0duOXEwzlwJadfPwPpcL31BNqYjECMmk6fwq7W8Wmr3QD7cMds7n2XttuYWMkxOpOcjCHDijw7wrIm1dfmRfbg/eo9TtS0XAU2c5qWoMQT0ORL1+paS7Q07r+BNMozlel4sTNAwSiZzIxGU9MuAinJp0FgOW72KMsTsZWkNrdGpCPZ/yrjGUuk+bA/VBUoO7qPqAFCzegkLoc2F5hF82LdvmoSwCph8lpERg4i4ylpPYqOLSup3DqHfLWQqAl2ptDA9Mea6SKml4FucJLpY/lsONuWDpLvags66OVBY/3xrmp7yFaCfS3zc7F7rcFVDSF/rXSUbWwB0VUzrxIrSLKID53GwdN4n6G/NjEV4/i8xuYvw228HNvweP/wXNiaO5VRTNUdbqbck4X5rKGkJCY4ZJtBIDxSqIU9Kc7IvDzHVJEpbiLzcgrFilDOM1j/r1Sd3dOvk4+uHhCDkuQxg3kMdV/eQYcNv8OTQksKVgxF84bnRmj8fKfJ78n2zPW46SWbKbo9YEdjZanqftgw7Z4jJtgTHfKdwoQIzgkW8IWuSc40fHPoshtF66p40VW2Fi6Lc/SdJdcLqMV6PUR7wKK6UAE4RYMijko2FQbJcA1XOEeGvcGZqmvAyRs1eZ+UyornIRi7VuS9mJWLpvneJk1baPh6Dy4awetwBzaMV+1mH7qaV/CQJUMmUB6eLkeQbiGlPTCjc8dTbA1cxVEkSN1tPltSBtrkqVfRoGD4/61QxgejtDCtmW2KTkc4b7+CtDZYDM1J5DRx2DZ7J25Gr3tUph1hFHTQiBfi1UOfp0mIExODCMhOxDSxzbuMnKHOoWl+J+9orewGoCeBL34DN89DYvnWNfR3B6aWsjTSkQBLJfD3AijeSTFOzGqt24cnmuF25uxEL1f9yVTBAM/PDapZT9fFlB5PTOcuQM/7J5Gc5/e5P0tgg6mlv7qtZtRfJIF8rKa8OqtTSpFd4YgghBDbudkaOLHxpblZhn1VbeIdQAUriFKYOY+7G009s1fH5Xqd2LBqDgaovTKgy7JT7d3Hn/avdVm26/x1cUzgcAoOwXnZVvEPq8pG6s4xehqdE8b3VN6UxjU03ZOsi97NalPYtZsW6ACzqwJ83MyRfgJXpe+MjPukSr/P3fupFc5TtXXaj16sYsshPj0qQCkUffH0Vap+my1NFqTYNLrOwdq0qFUWy7knXsU0tGUN0Y8BJRLjqHkgwgAmbeWVqE/RUfBmJmfsKaoYaFJRgKnwwoomioP3OtWq7n45QitfzE+OEqgJkhY5v4rP2vWeYBiJX2z4zX1VFLJ7MrYebHecGlOHnFVthm+9rfi8fhf8O3rT0p58nxDOFjGnbjc/yPQ3oR/KD7AxsrNPAc1j35o7+2jRE5144B4u8SRwWURoWj';const _IH='01d09842c409aabd05d09e8108fb089eb2cb057f2e52937b0dd11b70f678d1a0';let _src;

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
