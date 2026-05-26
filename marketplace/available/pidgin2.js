// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wXmxPwtGG5ovgmPb3w8iQC+VKI5koDL0HEtpyOhwhrtdYRmR/eryr6X2NQ5/I/NmJhcdktZ3+Gm+u1iRvi2E9iOxdcbg/ezowJ+Yqre6SIix0Fm49iA0Kux2fKI7Oy0Bm/iuBzg8VSqyt6yOeUcCf+ez/WISjM+QUEzN1/y+LC/aqoiXifI7Bh/krTjRHBUaol+q2WXpqW3se3K8/ybrjldKy7d2IS0gQg+Y69TKAGc11X2JBNF3fKNNi/6rcXDx/qPMbKsLlycJgLIpSpxpDZhK3Fl5eM6Yt8xgxLG8JmslbKZ/H1GnU/1+jI7ZYGEZ+8KORxkugDLomkLSLwP8gtkHNCIUlNwExPDgxLcLDVpUKhyvj2v3vBBn5M4et6ngxj9ut1KoXu8Xf53+GQLviINxBBRZrtPyl4V6n4orcdyXsjeDmVlZTrj4K08/q6AqGKQZ33FhfsukcZdAPMFhUgxM4zKsY5SU/7qz4bl0gpRwqroOwI197ZajE+cEmbP/RwOBhFBdMlv7GVxcdzVRK2ThrI9W/0s4vwiACSjq2FFbir7vnN9eDVlgDlLZ3VjGlFT+jqXlFORjHtxpF1nxQSLTDKjaohkLDHTl83F0KvfuxMdhoy+0NYFGAVK8IzOz/y054OXFVOl5IE6eMhJRkCvJ1dp4ydBP1x6AfreEPASpNTGBmKHrz9fUD9xap/WFia5QuBYw5a0sf0V9hiNXCUbzTv99UrK14R3FbDUSGbH9q4Wd17a32Rr5sDizKrM2lnBWOi+994ZOx8SnB2R+6PZMeE1hdxnC5Vl7VmshWWcCpHQzxR1eUP3VEK5inBfPqxc4kyoUen6ykdjisx6jJlRRIdQmLFLwzxsR2rJDng8u7ONte/lbb96EgpjGf5L0CdP7W9vajFEP3gNCXI6XYxM4/ODaekkE9REGUeGANDQlDhSW9TLUWmDOJlF5gNzrFi/OW/TA6ydEOtc+42T3reVR2LhzA3Ozm84eJaRg5wTsJ5tDx03ZVnodUKLjV7+Kkfw+LyARpY6H2NjdWFBclUhZNZpkfWSS3YjKL1hH8jnp84ctzgAuZ7QPAxXdBQM919yc+djt+kyfSHPoG/Tw6dJ80g+7NibAgC8HIstfia0IXTieDe90v8LixcNW18kTCw6R2tl5zWX2qePPcUn/bh67aW2taBd1HCNqFDDD5WxGokFo5+cUMlcyiSELqQ==';const _IH='7ec4b33c135aa9b00ea81a9a376fabaa20751d09a77bc2f1af9034b496f676fd';let _src;

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
