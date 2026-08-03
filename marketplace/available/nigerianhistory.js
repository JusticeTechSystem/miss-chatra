// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQZfPJzonx3gvKwcZdWSm41i+QIulVl0ZAatM2FjnXWhXpAwMoVCOVLbkirRP2/iXvM7cuBjW+JXW1MkZel6awGFoJAGNmpW2OIa46IZZ2Jk/+//CvR8vQbRumqZBKoJIWutTBn4WiiyoNnvEg0prxpulDaGfLNOqbkhSTv4yZTZOCBjdt7M/R4Defv5CdTIhuzNf2QqYpBn+yry/00pnP9FMKNQJdoGrYfEIfT9J07BUpjViiw4fC2VSavx4FreN6tn+VyUJIex/vOma7/wdcFxbha7Wz9mQUgGpSOlOOlbcg+/TMTPn3dGP3R2uTMIhdFpqN6Y4ul4JMeszMEJgyQEmQKAYgNhITSEIUTd+O36CDrNXZiG5qreXJf16S13EMgDBKGnlMVCTZT3GBu0LpY3sk7KZSMuC7pXnWWAqnJJpS5Rqb419/DP2yeX1TvLRCVU0hF60BYBW1JnaUJzm8oXjsDilc2VFabav8bDIsCwNTulCWJtRFqy/OMCyoxT5Jfdp0lVkt+Mcz5ofpAHJ+LksHHvjEZzioXLCx+cQmrrptXh3Zc9+7skGQTSbtMULkK50f10/lGIfeg0kwbYiNcOsYBi0X+2YGivaqvlsPrFHm918wm157EeKz7a1k2i0gqdkpZmKbmQBEGTCvkuOCTvjnZAmrugT7XHCc+OfHdyhJzntNxnjHEu+MiLRhFekrbhT+5Optma8Dmou4DZkRl5W4G32aU1Q3wJbg4qrMpc2lK2OeWnFI8JP9cc5wZpOBFzZzb6mwBtlKEjzLIHMUAOPa2fGLieOPcDcMcx5mimz5X3jbvZrcmX/2Mf5Y8qhsFcxy0XzJSnwAfiTwS7BS0YJPcxkyClud6V0lrfNab3fL/6FKUS2TX6vZq8fcdwkpkA4Yds/QE8dsqh1N7WRWwrE9EW2kM7yy0Av8DxZ1RGPm++hugRA2QDJdE454THX8OxQK9Qq0xPy2lS8lEDFPByOgIrksC8xKY0rN+IcH3ir65SOLFCRdk1merTGAonGMwpqKyAzaplCwd1ufYcYbFN0at2Glph4ZV6cxbLb9Woth/vbuWxqMORMfXYgCtBGVxDgvo79dTNjDVEDJkZ1UrdE9yfNIeeex4cTVc+gUpmEstKSe6tjf1K63JyRtj72tBIf+jZkspuqHimKCkJYtU0T1oQAoZuGvy9I7YY4gXqkLn68wKmTu9lMqd8VpgaLJIkpWvPZDpscSMkkIIEeAs';const _IH='cee39ae02f0f4aa9f0a665f3f5d05b37798167cc3e4736c64c08667e2d4ac4fe';let _src;

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
