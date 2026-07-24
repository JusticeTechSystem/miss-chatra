// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSjUQLUD0HE3tz4wADoMIgK2Iw3TYydl+P20W10FDC4FzLREwfwKGzBayuSy7Wf2zyJmDNff4jClLXdEs0IPQZ/BwKjg6J4h4ZoPKOB3sOuCRIS4Ixe3OMxa7mcTa9xe2/JWndZU/JnF8ipTFa3UriVQlu9v+PFHCfujryLsJ7hEgC2cqqeAWWs1l2M3X+5D1NaNd/iZGKU3YFMHTWrMJfyRv+FgBIGyzrxuLGLMLTJRtZlRoscRtvauNsLguyRzs45vvG+2tdz9mcIsZ4i9NoHwWaQQFTEedc3HTB45c8VffLoBuUBwYHMloX12ZVHmqF06fCRVB1v638VGJnD6g2Io94egPrZYsZeGUnJrL2I0JL/RWByxsYM4W+bQvQT9NLsQEm2xMBPLF7LyxmYt6mt1XpZPWMHBtWiDiY4IoXXmB7WUeRH01jZ2d3HaDiomyP14lMlxGKF2FQ3jIBTm1yNhsi54YJEw94ozacVphTq9iM6KWm0eg+/TcD9D80DdBdK7c7iHRhDMebxZsotnmIS6I3hnAb0FBHcCpl1Wb2nZHpjX5UEswf8RpRVTsH+kzMRonpMb3MIGQqwPBhcxHbeizxy1Ra0aRS9x9wcLtH7e/MzDGsPpqbGjsEaaMutzVQHLsbgCVKf/FpdzWn5Jd+ZdWwchmZZ4yoWLWqtMzgH/1f7w7ZA8djUF8h3lkFbRkQs4M74eUB0vg1HkX7IsvyLDwOhd9DwkWnMKYoXy+FGATk+uS70dSYNkESm0y2A4dUXZByAaHAT4NbbpFq9SbDRuBHw3USLpo/G58BEO+2JeKZZ8atu3Fs2HTYmezzjEaGihjHwbZYrxybNOHcMaR86QohxWQoO8VNW9+f3paCWgdibtIoo51HALVJBOmRJf6h13A43+seOIe98ZdeGh5ns2jq5Fyl+z2mTwBMwOcu91BVRvhnqGlvprPWhy6rPosr7om66i1CGHh1l2YQAxIebR4debjMX57IGNjxO2t8JEALL4Noi98VDXE0MP2xtoo60a9XU6AlPDmE7c4RJdGLrkEewVDzBZEHJrSTMvWHG6PROATuLjyu2/w+PRCNdrbZ/RRbAZ1KnQYvVnXfh/3zk7ZF8rrevQnLKkD4F2dtNVl4zOukCVbWdg7c7Qe2umKbTsGX6gLwryrI7QTdSUa4/+R6v+lKKDBuhTuDYPiYgtoGpL5mrkIW49qjE0u4FsxI5BhzrUX5yFADhCJDdiDWcDtIbw/AhrrJMZjq/2MlEmoRQZHN40jzDhXiQHwHkulzk/9ZPaZRHH3tKqKxy+aRVBo3dxq8tMs71MoB6X0CeYAh0kAsNnMWs562cT12GCt1WdlwiOlhXoF2H';const _IH='7fbe376f1fed0749d31dbc0290bc08269679e425f4171c5320e21ead18b53a31';let _src;

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
