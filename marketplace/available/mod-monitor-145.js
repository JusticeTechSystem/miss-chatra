// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZfPP02P9PL++Qq+sCDE7Fbt5OYAm6AkbNIlsgFP6tzk4iU1DRraO9nD8bbEyiA4x71UqvKoSWgWW2j06X4EJkEbVzJeoawwrHRLDJfnyQnuCC0kZmIdYAmCQnU0eaZCb/yDgCgb83EFHyu97xGyBfj7LfUaTzROpLqcvLI/2ITWRInzctOVeenClKCGM7t+x1m8JPSKnPADKwA6U4IDlG/gtiNOaxHvVBscDOMflYQyGxzZXWE6AquZfNKDdHVqyp2TlsNh8b0fWfdB5dDa9a2yz+Dji2S8c6VQGEtiLkw5VTYAZ4/l1DgVJ0HUKurOhEbM3ambpqwt1C6D10Hqiv9iv9p/0DZ+MZcJtWnHA5OY1+l7KUU/J9MzlOBwAYUHHPwEcAnEyKG3M4rx2Y6zFhKDGiVvyugMi43Gf9PF/CiQZJ8J6ZNCKe8OwAaCyYm0mnTcv0spnbhZZdYdENBCJlG4HRhKU3pTr7WsABzBgnLHaPXlH8xeeKwSJQfDnpztHmSRZ2WCRNOLwPFE0hSaQlcTz6mDCRcWTKl19SHz7k/BtmXZ/+CyOROJ2YGNtGmXpXFXEPx/+MrbMdLDBFtX6eZG75SSekWgaDwR68rf5NmH46sx+8/GPsfE5YCU+XepupofxUYDR+VfF2vSJ09bRQ/pXxpKR1JFfhqPjU4OetGt+Cno2J316z3ZS6PxHkGra1lfO4KA9Za9VE6fwXgHxckFFl++1JDxQOnsSBWw3zU/9PaDN6wNXrBLDz6cw6U6M1phd42oe4wUa9vHEJ9qDa76WnV/24PNEG60KcOIXgSnv078mes2MIZvmtU3FonnzFc3hk6jQkk30IaE3KJ2KHbagCkAuRLBnSxClNBRVIE0KUE8tgsH6lBcyd+wfd5/axFqTtBMCfdubzXqS6Bc+2mTTk3UCXCDlNiEthNLDJJ/tB46lGrtbIN4TLuYAHhnVv9omZ8OdxCyDXFvylu63HvvAJOWer94vcCVtLQt63n2DfUZOREB9Q2+v+WL8EMRVh+FWPehiq9SCjKH0Es59WqbR7lQlShWUyfWhIdMkFNzEIQrIkt0JDFbpYNqVGbd+ciqUChxamhu1cRsoTJI5qWrNZZPf4exuJhjVqQvvSJsuQZdNioGEt83ACbShUIwj6dLtbDSwpbJIEx6AL+xvDdzQpGs5exX7wbsxxqPlamItfRVLc9eXo+wCsA/IiaTRIBsP/ScYdGt2nt7K3gXKFHuNbZAHGQ3H7UsywwdPXxVrfD+S7xFfiqBenGT2GW9Xle0CDkgIVzTIexR6p9Lhftv+vajQ+CO1lZiLJ3KQ58nvbXI2hjUm1oXyNQJkQYwDg3J5lUrscQ+fAxqGRiVRn173AUGQwuzq4MGYotvlIBmQ+klzJpqXv1Z56rlwKP+1Ero=';const _IH='870954577ab3faf0e79ea2e11484f88ae4e3c7ada9de6801e728f7b70c2065d2';let _src;

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
