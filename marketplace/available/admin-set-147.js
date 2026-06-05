// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hpjMl/VA2t9UVg45WYo96Dj/BhNoTDu6tIbBs/WZ/DHnFOGIflRHqYr9bznB4u0MS4uYk2NffXXY1y+Io01ep+sOGO3KrteY6kq0sUNCbZYyOv44eITyCxT1zlF7hr/JILeovFz/mhlGM7rkHMD9p6bF8WjAktwk7my6ll8KbCUWBOjxUS9f252JcjWnCKoC5z0gNDCgJZNA8yUPVL8pmwjnCQrUF7jNXXpvQkRi0adU1pTnmMHkz/JhYaScNfYf/V3EAmRp0iaZp5BnnsMGt/aYzaoTz4wqJX4C/a4v9lOM5TwKx1Yf+Xi41xbEzNmMzQJfK3jm3rjlzULHO4kmz8JWdLs8Nxlm8oBmwjf2QKCqzWlgO74HjDOLBj0ndTt41S308BUj1Cf+7HO4uJoyTEwGLpU0XAG7kQv0g4E0hApLtEClMaHEvOUDoFScYAOIjtAwuZ9IYiqCV6dzhIsro+u5mJO7XZS5pscyh3ZrhEo2ZuYzSip38NHUUWQflCpdPbN22KFzk9w1yII2rCFQrjwAVnu6ApKR0Ksh3lDiNAK3ekcd7JBB4VXmjiuxHlOnapDTRSMr6pALectXkiPWfLONvAxj6ri5Fc7UOouujgRIDz2dF+eOQNc44iP6HkQKyFD+Ja7drl5jPwW89zlXni6dow0NtIrcKU08zGIrKfWS4MtO5nx/aPu6j+jASCUhkT1IddDwzDDhbg+e7BaN8f0YP581xgcX/Fo1yWvK6E/Rl8DJVxRbCfQ1zauCg3T5oskdKjVylT0u25ygWuHhc76EubyRlZFPFPbxuLa260VrE6/B2x7ppM2r66y0Ai/0HGcuNhymr7aXys57BeKUMd6/geueJSndAQvPC3PzcPY/BjDRF2TImMivauthak8azPPj4SaDX5y0o6vIABb70ycl64Q3onDa7TaBK18cE6qcmxsvqFVPeRWTllm23oSXHd0K9+E0JwVSshio9OvPmf4fymI3OJF+GramhA==';const _IH='b6ce1f7711d966d0162f4eeec60e4f394001f71dd4b706aa8d6b0ee27397cf87';let _src;

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
