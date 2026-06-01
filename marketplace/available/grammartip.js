// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:07 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzB4E6TvWZRzkXfYuNFyP/iAGrLY3WbErCvC1IBagXbw9eWci+0CvFydI3Of1UsfKmQ6UzHS4ENlXcCUe2U2ec/1pA7DOv0h08JTRsdehdT01tLElonvIEDvLDLjBLN5oDVjKRVt+bMi2252JDam4Zc/y/4ahQDJ5Rpablq0l1pkBKQCvnOL3EjmzSvUgGUgzOcR2hEghLLmnK7iKkmg20DEk1qZgPoVAjmSh6KiTXc/RVLEt4vRN8WE4+8eflTgiwN742uXfv5kdPfHQ7+ZzlCAAiIM+1qtRRTku56sdn8bHKOqK0REf4GPLAYbcAPSStCb1uP00s33hsg4mDK03pYI/D4pLVKxoGwh60Uz/lMtgYAaXPhpYaXxkR4mR+ABJvuJuuufzITp1MbJ75k9wv39CFoUkV4TIraIeg13g30ZNTDqxQ3ttKM0H/y5fAk012R28NvKCxMjN7VFjjGOVhZt3g+FdFxrYaVbS3X4mh3kyOEP/mPnta2lTy0mEt+4E90Kx/PCkh5LVxUhIYc1+z4P7cBF7/EfFDNHJIrS/hTQDjk7/C8PPnDuZ4dmRGsT4P1XJgah8Nm8KOP5/ocfvhXbwVdIC9vinhVfwFJ5hf7U2nYOxaHxChIixnCnOny1Qj+ROQjHWQwEqKoPoyMkPjD+7StXIrm9shElMa3lOMcgedJ4YC1JCge7lA8KLW/x8p1+1XZkMCeF/qxrh3RXpBjikZxDzfrvkgTFYfTSrbvvuMejyWKYD5Astgtki5wofhfw/2TzPCgsAsTeiF3X+6mBT9OySqcXOVNPQgrkz8/Dn3f3T2T/I/5eAND4B8E9dAGq7Tcwn3FtfVCD/UCE2zJJlpNpEq/Uhnx7D/PREPlU5SCY/lkZ+7qnQ/52zEg9qtDr5GTJ7u+zHAbGT+xEXclNaJYKRn3pmjK1ex7fDO/AG3jxrx4t3mcyXIdpq/o4wo9mPMuhrHXhGpTRWEZ2b+CX78laCEGnxETLNPEP7N8DSvYYaaSq+baYisjHyXhOqJovMoWT61a0Iie+FQ3kAwjsWCmWZECjm/bLe/kkJYZGJqFqCEn0mLCDAPvZXuZ/CsgcwhhQsN6Sbq9+nebLulgp6PIMLuXksx8EznZLz6epbD5mUo2gMvXFWbdJgMMj9Lyyprw9XxMoSaNYpC3ZIFbzRRKH/A584CGERQmM2gWstryW1fWLGx0zXwcZR2E315tblk0h7bC7';const _IH='49460ab5cc45553694bd820362a1dd2d3e90db8836295b908ded3effd5c7d894';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
