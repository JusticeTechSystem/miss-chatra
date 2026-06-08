// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OEYgnIT5YPL8LXWyRjGH3frNm4s/LnvyYzH+Rx0cX36Sst4doS81xwTFn4WczFjLu9p3AlaVatZO/si8LlFAbW2jwLZfHwpckcdaWFMSSSKfg36Sw8XzTmzwRtg5hwokJq1MROBxyD5+FasWyK67Fr+rWdpH6MOTOYmABOls0v3Sm/B1AgUIwhHFXk5qU5eH/6kWeI2mnq0LiAUEbhA3LeJAXfoqwwZgW2Pj82woCJmR/WSL2ijMamq6wraLEv8KSV+2w+QioHN4cuG8zOugHHDV3d/7kNBjzdtQsm7kwGNs8yD6n5zxhiKp2o+D7phD11QtqlgiaXNISYBPeF8h4YBmuYRSiL7QzxasKF2809TXvTfIw2He8Fr3Iu+DD53hvQZK73a1wrR347WLwoeVrocwEnLGCUnZqRxZP2RYVCIbEUSxOczYMDIBlzo0ffZj6r4NjyaoCEjAtKAwexjhRCXnxK8FgVOhWTGVzNJxgIVim62ZHfAvR6m+wLx8OWOtxe2QgDDizfpy3t72xCZHSwhitXwQbdZd+V14BAFLT0XAv7j4B45ZhkFwiPenQrbJ7i1Zh0CCGjQ1C3vFg+j/MU9fSpKMczEDZcMnKoc3EfaTJyFi4uYuXRg+hk5cY0HW2eEI7M+AaIazJFk25qn/NnKvzbMcMpVJe+pC08dAr6N/f8QFO5j6UnTcl61mSkpErEB73eF5T+4gO4p4RXZIlOEz6TBYJRdKqk6M9WW2GV4DEXkkv0GkelRJ6Krs7KVimC+3TFOnAmxPu1AINH6MQGUvNHI+g7+0hHzsSDahxiOCeIAuN7oG+9biK/qtXutFw3tNp7k6Y6YOwbwBpkYRNr3wQgvUPCNtBKhsAlFkptUEIDLGEnfYZNp+LDGJoQRKSo46sE84Ef9QUPZ+2sPf/rUHI2SqvjIR/1qIJnnLBhaL9Z7xLaf9v2MQ4enVrPuRMNrLj7TznSM2jK0o1eGrAafB4bgx1xGz94/RuPCgFbp/Nczc3t5m+D1LBX28hO7Tx6gH6RKegxEwuh/TlBmmXPx1h6AxcGljBh5o9Nw9UvqN0e1EiGYzE0Z9bbsjnoADba0rurE6TS4YToKNTLdZ018qEsCObszDBYimr4nk6pXt4EoPpx4Zii+eDjOV3OsDua3KCfXXGSkmpNscmLRgvVsGMKVJH0HxLjxMBW/TQy0dXU4Ar1km2sLyl9CnI1xzJNEi5wsrS/B/h7S2JziBovD+2bApVi8iBNwMVeNnrN26hIJMaShi0cX5saCWaMNyYQVk1Q0lkjKT66ukjLHhZK/eo9dUbfNgRYJIWYWAgBXVlt3Vx+xvT5PcIKeBJWZnFt0ckTQ7/O141dmsUKiwhneTJxcKdYbpIw==';const _IH='6edcf1a41b753a8b6cfc89b8e4e5e6fb822c0feb5831b2ac5fcb656770fa69ac';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
