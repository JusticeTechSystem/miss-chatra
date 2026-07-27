// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ7u1f/HC0iGNOsP62jF/F0w7XQkVkubrjdmfP2wsaZu1LfX4kse/jqV14o+qZ1efyCAJcvuRKO73ovesUZl8Rqy2jrfyHR2rx5RoBWj3Q8fUHAvAfbbVnijrYGOqvnMQO0YtF7mCryNJ/bQyUQY6BRRJx2fqEtJ0vtSAqhtOLejZvhxi6RdcLZjm017vtiRpuZxaOQZC2m3Cs5XoxCRAzm/xMr+g0fpa4P0qaNp2oMe0Y2dNU5jgmjb9XkGcU7jHhpkOayErWKE5+5NSawucKOAblVXCX7N+mFzeFQzGj+zc9+wQo5ns1nY+QqEwewLEIwYIexjyOSBAh+ZC+I3Q8WjpvE40U8i2LbU+AvkmIrBWLv+hQrgHWFKexFnCc2pB6wI6dIDc3yq8/Qwq73tofe/0Kb4vKRCexd6DVbYcUAQEVp6MHogg9f8pk8wFkn6pT9B+8O3M+SGOMx75V0Xo6AbTFxQgOsO57cCA0R+IyadG16UtuBL+GV3NdkHqYGsHR+ljQBGBMmtgzJlgrG/e+sWblx759lOlhdQNm5vrVrmEA3EYSszuGZmSEwuaUv3+Lc6pZlbL1WX6XF99CgLP2UE0aZTOCEgRLWXKuypS17X6flv/Y/cNrBivhcvY3cwpVCPSSlc8FrqYWH5rwJg+0Bl3PR385bbOy1yUJUivsZn315d/6cynt9a/+Up6nz0Okhj2kxkHZeLE8UnMzfIPKKhn5GXUKsVAipRwvcJOyqkBTmHP7ZSwaw5wS/+RkkDIjLBBCN3ImjLMr5MB7JNngfXSSlhOhz18jWlHWFTnLIdv+8EmlhYZMW+vEIF56RD/+gfZXoFzrv/I65WvElaf3Z9L4vL7UGv+wPfG6EGMq5OR2S9aoVta/Cj7HWjPQ4MpGr5jrPwHZ0VtvTYaqK31fPnXRhusCYxrHKqxQ0/yUKEYO/3zFAHEJjYXl8fkcRHZLI34biLqzXDat2KRR2VkosdwAHuzxLI8u+0yZrAXLK5/yMPEKjIRPWLyEsT3cmLSDLJefc7xjHnA==';const _IH='b8372febc9902012077356f5ca2f1242111e2df106624e979daed756a35faa9f';let _src;

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
