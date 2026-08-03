// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS2jqsO2ILariV32mnqB388tcE8xnNm/1ls3vNU8m6yYeGr/atXe4KDuq8YCimZy6guEEbOCgaCoNp5bS4kT56vAkrm/yPtYR/zC07dk6b0k9c50WeuSUJV/kEw+NA6gOCby36+ERJtgb7gFqVjRJ7sNYMKU0lL9UL2ko6tx4qgi8lJF+yEjY/FmMXgpGjkRi+WozffEXTTD5lcrZBUcPv1PBkUXcm8WBAVq4rshdtpkbwkuzG0ouYMBREvXk8I0XWjBIqaznNk7oe9g7i9UPwatqJ6kTQHcEHnMplo+vogKhAlj/hDLrcTeaxWCL4Qx0pCv6Rl1cr6jMfJCm3oUMMBgF1q0C4dHaoINZyfddak+nHH4KeBem6S/buuSJTYvnOzkmYnua8j9xG1vQKU+J+ebvGtIJL2aixqoVdHdyyblpsFfHDu32r/NmDPZ1nWpg158FMrO16rH2Uu18C2sZCzhenmZnFX1G1UMCEZjXaGsl0kwvpvbpmX+PSk9iuaSGetVdv8kK79sqoGYM5NN1a2qLE1nuJAxCicF+iMkpYDGeQ5xVHyrPI+mXl3pOLXBw58sfZCxepAP4xylh+xjOorN65K5YtPFJhANk/CJX2vRFkG9fwpL6ZyGhZ6L9AtnfQBmGHTb4o+QAht+RRixgERTjMufbn1dfRY7ap0O0KKPIlckuwicYW0WvDdYV76qD9ndYkzkPn9vNmdkKgIM/wmBS1shGRAL+sG4uMz/tBgtpXp2GB0agfAzkZPk1pX1BPINL3OakK5BcX/9ymM8cTwxqwdUWl2YBYii/vryUxqVk43CTr3aYMg+7somDLIcTkZmIEgSQJYvy5sq4yhtT5jAbZFKLPNMbKZ3Sa0au+4LWiC6Y/BIu7Zc5489v9/D3338a+OcjKSNWWr2UbuldYP/M+Lp5plofRsMeVAXItNEVprz/FcbD22F8xn0oIj1S59zHPf1btgiDa2BV9NLUW8KTRyN1apysDzXCcZbnmDLxPeGfr7SGmernMQVBnpgdNmsg6OSgB+GlyMzO/9+DJLAol7D+W8/P8BcL0T2G5/yLieryrQKITmWecli3vrKG0CIoGuQWP9fsXz6uBjxVkHiVZeEXox8zncKn9PNGt3dB9rP1ZZpYMk6i3LG/7Bh3Y13TNsRLcr2dvSP1h7IedaC9P8gJAIiGQRGunZK7FlXr5T1+fljflHcTl35+W3vBkE5ZU9F1McoCOgBsYJ+F+TfPp+vqq0iPShH64nrsSieZnkyLitr6dX0dFysir3itccG6hKL2YypKssfLjHDQPFUtxG1AqnDueDTol6MI12qSa5rLJ8ptZX3Wfe+CJIvbIM8/V9gnyZKECAEc3NR/89BlyW22NZ92Xl758OHqk+GeW+qMxL';const _IH='6f6bbb7059f33125b66ac5ca8b32accc1ac82a8610af3bbec0f115b17eb602ee';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
