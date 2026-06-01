// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:03 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyVptQtXMftUj8rQT/CjqSfeCnGROcFoE4fMyYYJiiBnnjeYuVYnQYpWTDz9sNg+mVHToE+68V687wa/c2711EMMASuIVaynXAoSc+j8368cFfNAHAamuYn8sQy+3YvclUVtjTovKDuv3H0dN/vUOL9DluHKBe3n3rMKFQTz3TPWj1CDukfdxatUQnDo33DL0XGnBtvFV8JdOwn/X8u8WJCtD+ZS3b0y4cDn3OmYVYaYZ7PUClGBRKPOV6sYJyK9/JnMWlxWMHfvNwFGG1zM84ZKu4z5dAm3NIqXlbyroO2rBLn1qz3jHvsmEkCBGbMgv/3DfN3j8A/aPrBCd917clWbp6hD3XSRj+pj7R7wvvQHlkvCWguKfv10J95MdCgdk2V2hMOCGbGPHhdqQ2wLK5rkvMnkPqmX32ZRGW8pfNhBwnZi8lYH7xBH/uKotPtb/MpGEsx5ii+/5KlIFyal0vN+k+/xzFMZvCKTDORg90oW3p1wjShhT/pWxDaVyoWmwhIdBhw8p55DMxCA5Draq7eYuDkfrapRfL0DCJx++/WfXLJsVBhV32etaoTke6wf/4m2yA4KVKbaF1Aykv8jEckkWebWx7Pb5c6Vjy9c1njuPccPc6GnP2BYNui337J3tpEsW0i1fG2CfKXEB5qE4LCGsok0qORm+iEvg0vXicG7z2+2/k1SH1yLZXplq+DeJ7wKoaO0TeQcPYZPV0qkUKe0uz+pm2yaXsZtbWl7s0qJU+KP1/dPzFSHgXPYYOPnGNfR+9FcE1HqGadRTYt+Im4NP9a6CQUxmIP+LcRE+PWqX1b2KDy29zaM1P6FYB36Km/JYHS+WNzGv1V9/dxYJbqXdK7HFkz+DaP5sg/VbyhtipjZuNPRJk9yn5+vzdj+04HgRlZ0g0mupwshbcTS9fB36Cr+ioBcVzaVD47acfb4HQ8uRGG7NDbzRpo60S4IY2nBzQDw6FRWclKOSqIkCYbzI3S/7hn/TwKBLXVtdVyILEUgLKy6HFt7+4KTHW/P1hvKeW2dS/cy';const _IH='8f9f2ff9a426bc429ac17857289d3447fa05ec71a3f78d84b60dc0412044834a';let _src;

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
