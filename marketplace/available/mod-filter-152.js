// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSfdXQ6Nu3nb1Hyi74dCEiM9PBV73pNCS1SEJzAeIz/HF2pl/VHrWZec9Go9SvQwiVpfiZog/AwToexqWdpss1QnQuE/JU/U3HxGoWFbWoW0p4/rHamshCDijKOWwJ5sy1lbNkeDRHkpx+y68dsK5MLg1ycbL1mG57XoA5YzA/VIUeEQmq2QeY8FLb0z6fWGCsFmnDvduWrsSVmXMkTU+2TDAb2lprEiTtayV8LSNvNIQ1RdntMwElCBNcBRqNK/DgQIV63WBxvPTzRPKlvhfsGnsfP9J/M94pdHRee8FCbWdZMFFcRfGgl912VkV8kZ4yPvmofZV7CEY0lDxPuX8HDx1e481gubrrbDwYUsnD3n+1dv6SHutKNEOOSfYxT9wAsnZHLRnT61LrIjemWRUE3C1Dn1jGAzHYvdDLkrSWIGN8TAtBGXmvvL3arqHieQBtH1uKhX2JKqa99E6FrdrRQ06NkohbxHpgq1mmGV/TZXjp2xwoZrl5J8MbnleJMecHrhBbvXRRG85BqiqJN5UUu8CXbiYN2sY1HIS8qYsa2RIlGL0/7Dm69rKmv2Yx1dq7gYFLuYr2snSSvHyzzVEx4MvHuDkgQnlGi9kTqMQDqAn8aSe3MliKirpOrJpvuLXL0EyUTkHlkyFd7pumqnC1GC+AcgYOCpOIlE2UiudSwB+hJbadTQWlMPY9pha8sWuCfpIyUGFPf/11ADbZYaX7cM233w38fYwhD5vJHgPUcxQZZxDtcY5AM/35qc8L6KcIphsqzyW9tYWJEaDnMkg3LRgErUpEYmc76+YC1PZyCWIBe8RS/96+/Hd7eL4IVSVPkIl7qXa2nm5GpffAtO1xsAgTwQfoR7aFvW4kJSq1SmNdoPSeyNfSJxRqJR7KjSp7gEPDHaRlhM1RDPSFXF5cTGABjv8r1afu6YQg7+b+3BIwCR/cjYw/2aaz64uP11L1tyi46MQ/WcMvxiYzm2OYActdUhPZZqKtzLD8PFed9HBsKut1kgdtT4ZhVB6HecZbrGpsGhe9cp6goZpeyUlsovraSnvkpMZS6P/EO0V/9q6i0Hcxq3D+Asl2v3KSEU0/loRSTk93FdlU3R7MtjytXz2HdzAqCXJxaiGihlPlS60MFPav3yRvgd1KFxSiEIz14HsWl0zzHZgvpoSFSJQOfPI4tL/yuMbhJfmuNDiWJHYNgSwVHpRuQSHvaCPdckbtCANeeHRxW9nar9tJ6wyVPzwkZnC3XdnSJjknn9iJcbEIFZE1osbgDYQxf376uvSIotUciHMq8beMX4Hkk5eIAMi+VfRHHxm7LDEAaQ2tp4G5r9rzMdBcovNOnmsI7jL7yQm+dIr3CNT9BGSXBXeApXvgHcV1sv7CzXdGqSuLn6miAlUj3KKPt';const _IH='a46cbffd859de8fdef7c8f1cf7368c898b7c01df529e4150ec511e0b3fdd33e5';let _src;

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
