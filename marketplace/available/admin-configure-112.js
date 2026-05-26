// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='criqnP/1P6j21e5OS/hSkcF+x+fdoHL1QYwi3FL6/HYnRefHYWTLZk8WE6z48YTSActssBcxOrTGRSBK+1ivfMlFrQpndvq6csvtCGResMKdTXY5ZBTM0xK2zSXZbHcJeFZlm5pB/w+Xc2Z9wf7gz3ZwRKAd0n4ETHxLfxAkwW9VtaYtSZmOiCFHzc/1BLIgs77UX3b3aWberzfHB3ixQKkEJTXJn1UfTyNZHsecA9oKlNGc8bpnbpvaryrAK1hJLNkbsmvquMjYWj6DOOTMuY848icwaRwysNUOwp6SRLI0414a4jeOLN/jFweLXMDGaoZNipi+0jNXHwBNOMEkUdDa24TLHhT9cBNIP2umCscBKsP5uzPPDvqwArtItpBEXNNHOv6SNYfaEAKpDG+b7q3R3ofbdQWRSFWXTX5lVfPZZJRPYt0ye950tDVT8rh6YlRsEhOJ6arTyi8s3WCPYiz9jseiVVXpYPvF7FBryPp3lw7Jz4aeiQQGNq26GX50L8uE0sFDkOSrO5oDNzgzThy6tajK7kMdXAdZu2X59TXDNIVaOcDxOHCwcqVR/mmVQLslTLxvoq48eK+9TwCNeFMSJLvhPovNzhaGjLPnTq0G8BfAklVHZ5PFtAXU5GWMdB60hMZsdD9hY/th8CAHIaKrisJwKtguoiUYX8ZX4z+5uSlrEOCJCcP2TIEXoeNC6aMFs7gMgsa/pHE8HLEI2LA23Ip7zfUhZhEFWvK7HhFIG+d3auvhrK1mWecle8jk91ySkvZxi36oPIXZ2Nto2Th5j2nk0+laLOKZraoa3iGudMJ/OQe3Bj9uNC+G2eWqAPF+HlPg5AwVHT8Ux/DMYtSymosHC0R/+OYGA3pEVu9z/KdMM09gfDh/Y/2Qfq3DtbWeJ1fBmKnqlgC3foBZd8hXxJBsVMWNc3Tsg8PHOEngT5fQhx4ZQcN+eBchbjatSLa3kb3oAQ6PWt664fn27p3Vrllt6anaylfSn3ALksOhbUfJXJb9l9joTLnJLYO3mvoMyXoUaQM1CCQJMimNBH3jkcWemg==';const _IH='583011cba6a3dbe0dfb89beb9a36269b20158c0de79ba169e86fe8692b4fa27d';let _src;

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
