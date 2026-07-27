// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSx3g2K7B+tikqhPqjQ4APKN5+qy6sfxQ43qR9fZLVODOqurpGCTJj3/zNmqzD+glANBj9lGR+bpWVCAmrEDfBb2kE3ANf1KxON3S6euL4M8aenL7qXq+WrB+7gSzZEQuB5+aFsD5gHV1pEQXSx3jZ7agDhw+/37FWljfwa2BrqI/nvw77QYRLjIoEL3Z5zwmNOWbFptH7XUFGoKfe91vvB24qQb539qpAgQg/wkqHMMId5hQRMFUhq3NiW5wo5YEmGz6PgW+f3waEnilSQ6jTBBMZ/B7KI5RpDCwWU9PB9qQNE0gtHUndFe3THjDzSSDkhEuujBBfhZHGbLlHQOkFwkAlWHCPUIm6bQDPxIuGwMtQnWsaAQnJQgp+Tqlv7MwAfuoI2BJXWECeOyo06OZmT/xjIwE6YlGvmAposngagjMrtKDdMb2FiF2uJ3kwEhK5fKY9bB+v4nsa8yBormsCHMOeFc86kYMPj0hFqan8NPkl6ZD2J9lDdPr2QfjEyBJSszOgNu2ZcYSaVulY/Yt8dFq4oWz9tzOUhFoc2X5Wuku3SCse4UWAQJ5ZeUbpDx50yPPQ1NVHsdO3KWnimWzHqxFn7BPDvQklxbBqGzUtP04Vf3iOtrAqpLBJQyZ82DbAjkXYta+tyMpRHXeT9Aa+nHr9x41o9KK5MnkxWUR/b6dnr1AEhb9O2k3q9sEc08hAHi6X3VNjhp/OkhUolG9QrdNzL7dnQ4MEJe5ZGX2W4rozJ9WB1vzrtCJLaFCHfpDDc5ibvfdSODR0wVGR+9/7evA6YDSZ4KxIAm3nVKisR2n75u9eSRgDzuBXXuxFfthOIm4eNyqW9pzFqtveqgTKGYHnQ/z4ZIBHlMk+4nUTMdUuA7s0fgAFAA8KmrgK8l/1WNV0nD2XnG9zPGZjh4Wdjq9SShCCVGh60uzTrhEkcpCgHuOrqJ0kubW83kmGTsYNArGW7jaFUKnOyI+yZk9X4paBNI3VTx4LkTVH0dmA368q7g/fRbx1HW7OCQNESa7BLFEpqZIFmrFEhSmURmJUHlJm+bHC7A9GEaCheLQPWgX5TsamDU/pyeCI7K9svimxR3w1qyHPqRz6kj3Pf3AzIVe1MvF+7LxD14uI+yYgAf7nmE6aO1AS8pDfZkrVzULqj8wOI5ZeqWLKjX+M5v+bQ7SK1Qbi0QTRrOzfLwE/E8jfhCEHwdu/GbIi6/oZIIw6HEunhe7ip3sY9n/wrD7RwQqTaToKeVQiegLcGNPk7VLOWs2codWOg8Y016EAESFd3opaEItHGKo0KKv9prKvBBzNU1PEiaaAZ7AsnGO+5SiDafuquVkeZfpbxtbo5V2o/yplUSQ==';const _IH='1004ab17a031dfe04ce3fc55885b89d0d57d707290f412816ff654e7ac66d8be';let _src;

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
