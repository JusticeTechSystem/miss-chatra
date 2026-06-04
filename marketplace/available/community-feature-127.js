// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4PBieYb5uFX8n3VEKvqg2FdMGAmcBwbkhhQCyVkt3KuyyMx6w5w04NQ13oC+oiTS4puYwYhIbouzCLx6f5yNtMIAZrJHX5iBZ28rk9aZzMcuEIrXWYlL2fbd+Qgm+ZsKjFzHOW1RzgBOQspPf1OAB8ibGUJIqAWZ4bBmUfw4Hxljcx8HqFA03pZ2/THE9ruiCtVhfvUN2FZrtyUCPdBqGwZxDUeEUiU5BA3zi2iWQi9M2fD/u8RRY6ACyJEisueeDeFHiReeagEpnVOJVfkjxgcreRhWNpS+4zW46OhmGL6DzhTuPOAbPMqGNQZEOSHfNxAvXaqsOF5v+aDrpMkD8OBzju4o5YYY1IEHp7qrA0Dv3vqXUB5TfIvma4Txw/uyBvbuxGoPQVJ2BLJiC2ZnhIj4sjZXFdbFg3wL7eGSGZzkT6EQf2MudCWGaSN6zr8sDL2LugyHDqBvCp0vS7YhoIYhEe2yGh6SIL8g8YbRSCC7zw7Kbi3COgNF1G73tLz8I98UOelRPvuyAtM33h53stT3udx+yEPotzEf5c1Hp+Rtq+IFBZHzFjxpEcc+2leILw+2vyvBGFVdHy7aXCUswsgugHCCIUMTH/cZluc0FBj/KqhiYNNHOaFUZcDv2/MTn09Zb2rTqi/2pjss4MxOoI5z9sPcNWM/gpA1+k9XvXJSEij8vjMXQo1vJ2yFwSzTUEaT4y234FPJ3KyJRIotBPdQPJSJ8xZNaMXO+n/kNIjFMyw=';const _IH='54f0343c53bcec4d40b1c626620cde0c37128a6c6e5d7ac373b6dbcb8a914e2e';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
