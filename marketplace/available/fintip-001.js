// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRbaSi9dSADceOFTJeMrsSK0BNXWnleOX2cpHBs/Ykqnx9+SSJkYFhZi9tlntDB89EdBpc4rWb5KCx4C5XbhIVaJ6ZHz16TkWwsBY0XxlP51v97ROf8Yc/M3/cEf3D8z1VVmNRXsTcfRaIA1/tmXBCpANqLjwmzbQQuYztpJnowUbmI9hjQu8TWkziGVIcsQpPiJ6rhJaSvA56B4jlAlH6Ks+Gb5MuX+xSi9KwuS4yX3GCafJTZ0H88Ekq2w0k/laecqVC7LYV4GueAvH5oHAu/LkEvcmFRQ8SvBXquon8edo9bXdpWkgzjvU4unDoUbjN2XBHeBERCJqAdfSl1dso3q4Qmu6qz2DAmbV+qCGQUPpMPDQ0RWLB0Pw+wni2d79XIpTPmxCVdXUiZOHm1CP89cNcmrABXNUYqkmbUEbfwzswmcu1eqh2wjVEDZ6MvUWvZQxeyWFcNGKHgduCvQWboGClI/2OYloQUfUtyG4I7XmddYIGM9Zi2060MFPo/P/OhxbHrph0T4+VcRbQTFlyACM7WyV08b1aBbxWDY7dHiFj+NsgQoZbsxD8QDxo/AR8kQdsYusbZL5bZl/QQkcxOPaTCZp7z6Zs/Lh8LKzgE2fHQ6+OgVneZBmUxHfyFlS22N9WFSfbZNzCyYyEFfi56WtBhNqDd7/v1AuySy0bgrGxGH2uE0zWqIHTAuUDnLN7bYCuOipnv5wlTzPfSMsMaMDOfrW7F0/wGs0HyClr15Cxm76cQjXg/UH+syrM/aAvCxiA7QIu0apUzzpG+mxZYAaPf5c53Pojd2hxs0vJ+G9Il0yMtw7e7tSmpyKQ/sT6DWYNQh9O2LXC3XcCNDxh8Iaw6i1knGjGW5QlBm1yaosxhlGNaA23s1/eLCEQjcsfHLjeWk0Vyf80QShQz5juVnJ6YZ5gwif2CHRYBI/qFJ2m/hPLCHsBOkWrLzGPfn4w2XHNVvZdRhWv8+p8D8n4pj5q8j4kIBu7xcxfysmzqxtHbgho4hG7NQe09Zwhvd0NmuSEGYopr/3XzWnm2F/vVkiN/h8ab0I8Zm2Oh5gk=';const _IH='643a0ad0f9f82a74cb2dfccb1a77cc7eb265cf5383154481ab3ce02b0600eb7c';let _src;

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
