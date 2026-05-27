// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UFRcDguRdcm1AZxdhiAIyjZngn28sDNyaYpB65+Y/qDUB3V+S5t8z66mkr5q1l5ob/9W5YqMOClffPr3MmNFLc4Pipe9lKOrmPa8vCctpXVVT70f49zulQa3ku3Q8omF5AzoPmuO/Xlkplb0yiUHU0vbUAdk6yCQwaUGhyJ/xj6vsHUUHfwuF8Q2lyToTUe3ponkVEGC3js2eByCybLg1jau+Rc/XyaPaq4Jan37D2VWDZ8ErBqIyNspLyDxpQNqw4xQeOGwTQmBk5ncCWZs5I4r4HzN6xaDVm8R2t91W3aToxIrAWHlqa6IB1ZzQzWB1tzDgz3br8ONTbvyJR9Z43mHRR4VI+ShZ443xuxaPTj7JpOWkbh74Yoc4UwkK+lbEBwsEJ2BKu0IcLpNx6m+YrATR0vzZml47HjuqqpQhS5nPdgyaSEBvE7yWiRC/r1Nn8X9TircuxZ2FkSbZLLVg4YPDOQfho/bKkopLb929Rh78gHcj4P0iwAv3TJvmvSEKY37JJ6dM9muYA+0o+RFdUsWNqHvK+MYEaVGrcTNLduGFGRc9PvYrAGPDtaQvBBfKo9a2B+VMzboTP5/A/R+TO89hc/C+z7hcsS0GlFKAG+06AsgM/suUYtC0l48Y8ePbiTBdt0kYMqi77nQ2q9DwbjMN/Yfox7X1l5KS8QqEZ7h+eRlIxln3+LRMtezMX8zSQaF65cETKFSqdopBakfKiAON4paqxoBD659vl3wdfYN7Ui1fFCy5Btbq/UYg92aNNbsF/iQLHpV1bL/twOEvjpz262nK1EKmQYhd4mNtL9ZLiOtx/nLWNgzY6/BIhnxJYKJmBnj+B/gbgx5mdeRHMB3huZNVk20leBiLX8LkQwnNucSr3raStqDOW8YyIR4Fk39/SqwogNXbEKuB7nZUOUsVpCvEnds4qUF97j0cWo8fEMDTiB/yRW+fcNHy+0Z8S0q0J9RRFs+ptZxzdW8nVKQ+ZumBD+GQmTFMN8HZ99z62zufdeAtKYr/eJ2SlJ/7/PfGyZAEACRWhB/pjieXdJ5oA+r/Coy3S2k6QtpNzS61xw+K+fB8DgFFks7wbcXgVSproCYOTmrt0GNLi+N1Hpi+FAcdpeu07AdbT/sJXfhnumrWn42k0KNCxFiiZJEBXyID3sZSJFQt5+wASTL6wmQj639vXKPSgUX2iDmFVCtPEk+vOm6ClwkkDV94t/LO3FSFoF+fQ1UPi3C5l6GCY5QZ/XsCKk8TZ5JOwzBFDvQ5DU1kDxGMTlrekvPwPzr/oalwPTOpbTKd7KVZjY5cMXqXcE2/eutJVjlV5r87cXuHbMJcW2735B3dN0XSZTd/HqXXGalSz6FBcrER9ZjkuL+xV2KdIHxn23NKogR';const _IH='33f5c881c9c17fd5220ad2b2f71aea7090045cc14a9ebdcb0a3b3eba764dcc54';let _src;

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
