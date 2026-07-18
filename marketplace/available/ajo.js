// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSNVWvVnpWyvsLw2eubByRY4OV3EeZvX8pEGyVR0IiulxgEjqNFrlL0nKu7+xjHRQY7sQ8+OSbp6DqCM0hKkGE7qpDqiEXUbjumPx/Y7dNE9g9zoa0tm63jEtVm0pzHbslTe00pCjcykboubst40ocSbKUdtnxCagh1dq3ZeWchZQvPd/kMZV1D6+IDXBt/+I5wBn1WAxL0JgsDjPmyJ7xsTreazm56+uA+wVp37aI+mZ4jKml5yp59PdPwmYAe2ivxgUZ/o2apqhvFq2keDKX9fGmMS1xuy8w+iRQxhxY/YcqXUV2yF9nuR0rVZjnh4A9vNJpmuUozrc53PnhmiV6yY2cNXxuAJPOc6TnxmrdmZpgxEteG9wpeCmekJ7hU9GsbnYwTdg1m+F7lydytTsaD+YUSyc+/2hGNR5CgbsUqQLTpIb9RcRdhHkhpFO2DaSLFe3n9Z2COsuzYgcqYibbxEJkdOLJ272gZkkZg29sQTFhkHcBLbSjvzsQpWCMK7Hdm3DahbkINIqzr0IzTqoJ/zR/3aXDz99Qgn7K0i5S35TEqlKf1FFao9SDU2I7XWrf8bd1KUT5xcHyEcjPEokqjnpJrDPyT0J1Xp6Es+qeZslLIhSK88d1NuXDkTa9LpSVCXB6yiyYGX7HDtT4tNITFD28B3cZ6eWX4DiY+fQZdh4A9LYvU63vX42dHRNkpCC4v4l+4q5fcBeZ8YJ7rExKZWelU+p7aQowfBW0H/qUNCM0fcZm2UaSlyKQqB9GEuQd5wVy7GwA/ZawfG79nA7E7v1DdqCRt4P9CrUPUVHVhiE9eHdwmVRRUoiFK3xtCVXgujtpcHPZv1w8dM7OQfpB4iF8R1m1lUCOi8GpOkf//RlODTAcl8tZMVOozRbyFQcv1w6bRnyalXD2g0vXzbGU4EW7Zkuo58zuZE++bC6ZwyTSEarspIGtXj7GDeM3IC7UL+4Azs1/4QZzynxgquRs/paOVzp6mweFQZMMOEiun4U+d3UeBVZhJ8Tb5BIpYXwIG6DA47tqQ/dY5AF/oLnYp317/urDlrh8MTLkZPGgkJboW5yGenReSDhPzIUu/oXGYERhyT/czmpbEMobsgYPwDD2EiVtsfL9vZg1TdBXJMZh5bqRnICF/u8C+jrrzgNjGYsT1tr2xiG16glputXd1iVlh4/xkWGVjcqdXUBak6tI7k3OK55c=';const _IH='12df5c54cd504ea8ee96622e57260804c6fce1028884f767d52de2331069b183';let _src;

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
