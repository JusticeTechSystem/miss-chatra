// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSwmvbaLCcoQh2eQgs7LoLBbHb1puaPFvDay5//BdQJSP5F2jWfMRCUq+KVkq+QpH2HXEqaAQqMASk77Gx08ZzdzfHWxWccM7C7uKwBQ95bnPyUU0NN/OA9xwHm4hI+IV3ZfoW+5PM38n6GTdhrTz/ous+Cz12tYQdd5zJOtdnMHa/zZOEZYFctKVrYRgyi85KbPyHCTtedEv3kq7Ejd6UHd55PNoBdqT1N5+jgPFeWN6Oek0ujmT4tUFnc5ryqiAWWc9aGHKoIwWYuR+yj1uP/E/rPZC9AoMPKieBIFF+uhaY0YvLsezJ/DUtzMU2l93C8/Q/XiDAUq+4980yzYebsIX3TMOzvH861CkcFrr+D6F7lt8V1G1Z2M8+yJ1bj8LWOmoxBxcUzrLT4BZ9TZa0crXEHmLH1mPMqkj//Y2s/OcclZB3T9qe9Eyu6PuA7+q+/xLr7uVWCdNoJafiSke+1HiHMci2Ky+nmnf8H4UA2Fj1+slIIhdEDK2wp3LW+TnCVEk8yxrwbjpBXOsKvg3VyzzrMsR7hXIP9WZoQ1WA0I/7A8Z76PvKQ/Np1bOtlgi6lAukOfGmAaUcTgIgyda2brGm1B4vo0vPupyeE9wuO7uXLGL6kmDhvLjwpHKMm+GCZpUzCmyi0i5lPbXLmp5zZ13K2xApmheeVwhrhS7y4vQP7B8TYCW43HJSYq2dhon0ZSjMuyNySBBLi89SC/+cxcGW5Z6hEh4Hzc1Js5hf9It65OtB0SaEzMKa9+ZZrE76HUuX3C/xRKPXD+loOqCPhxaHrq0+ZG4LtdUp2/k8eKzIM7BY+HO/5XhV4fe6xjxuuiMue/ROMutG7Jk6ogrNxYT5HJaEXXeW94RkloJfDBUr2KyGzR/KyaHdwYVGsifbwHZZG8jkQRIU132Ma2a/2R/+yJHsocqd4b7FB0ao9Mai2GNxXyQ+gDN8/Vo7rpIrn3AUQnDirctt86cVx7W6V5Vq7rxc+iqXmps7Q3GDBvvCJwZHuytziGQcvydKbROMQF0ijolQUPvzdI4lxCdpbnDQjheD1/OTHsv3Ba+stUltZpg0tRE7Ge1xP0ZPUulXXlngmIg/8PnFpF6tnELwbCAKBaM+HP3qUA7SlK+m8Rm2qSCLDGt+PjQHI/nwXZNxYZjZBULRed3sQ6wOaZPorNoezQfeIO5/+OUBPuQtYYdvkmQEa0W9p3tHTxeqc5ahdaY6FlT/nfAUR9cR93m9VBvL6QQgHTa7b2KwOWf0+wq2VrRJpRR4uEX0A+FbdN9qCobDF1mppptitLpZAGIUM47WkIGZ4RDtnb2/DPXADa/nwib7QjpF4IzvbqCbxCRLs8US+6tCGzkg30uIfUljM7cuNO/Htpjv8PbwCh5KgJb2Cc6BC8KYa';const _IH='57144c67500199d4f39d230dab426db29c027a8364d7e9bcac148bf2b06d7203';let _src;

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
