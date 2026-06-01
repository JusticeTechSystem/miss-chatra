// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:28 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7p3jpxG9h2AC+yWRKitSEjkAi9fjWaRjiu083UV2/T4WpK24Q4FT6DOfUn4Tcm9/wL2G4gn+y1UrB0f5+3rsa4Lc7FzY60Rt+5TyVjXsk+P6bFdK+ZpDEbiSpL8ITSUy6d3QfBQOxWQOxBzbU7GLTtAyc48SXaIUd6FMgeVUUR2XV5aiKfO2OZGlOPFi96S03pfmXgDOaR71CL3BSk6P7ZDYcR2KFmW0lTXaZicWTfue7NKM903YQ2mhOvcNRZPAer7LaHz90V4mbVHcmW633Y48jnUHlM5MMkNA0YsZkwPfd96tltMPELrB1jQuCiE4nb07o0BJS0l04+Lbf+k437+VRyzUPoeWlrBBkzQOzcOeCSE5mMHiTCpUgTwhE6LjoB1asTCQ03xbnrBYJi/YoQZ530B0tCfrZ64ti5p7zPYRvbtUUxbR/M7+cRvVGgZlio69gYM8MQE2U5RbqYQ8pVcMPNyiXXcU0+qq1tzO0/Oda39S5d2+/gPKOAAxf888OvdJlsq25kJDYLWJEf8vxBPbMU46sFyX9KE9iv8IPtJxusyidhtkYaFNBZpLTz9z2NPDg9HXSVIByZ6sQ98jBXkC3nAqkXdwTheZK93G4bp8haV2Mb6yfSEZsZMr6EYWKhULZdF6d7sNqjo1f37e65eMFMsGkEclz5janNUraAXNJpCPoDi8h0S8TPCWneNw0p5KbRABjD6SPwnr3KbsKM3hhtm7+/pb5UAZv6/vHlYeIr48OR1zrSWwj4hS/eAU+u1bFMrCmZRXD2fXR7y+bWtx7xGKmqTyzHhlWez57FBYrWegYEX31pat0kGRHD5pTRU3KJLO+S1m6RMHfUHAWy8fflsF4SYd5doxggYKezLH5f6iifrVVtdcm6uTuACi04Upl/Gx0hnMSDCVWFzF2y8dA3/Gz+UKH4vtjUdzLPNLo1a8jgsQyBkzCH2OInMoaar40+LgQTr7diCNiuaTMFt1MZ30h/RW1QlcPRfRtgxvRR5';const _IH='fd18381afe0b72fcac7926f78d570ecfe72e58c4cf5fd1ae1ef14597fbb53348';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
