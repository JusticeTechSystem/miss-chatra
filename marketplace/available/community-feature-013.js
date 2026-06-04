// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KXq4Y5+xVzmOkS1EGdSVy0eUEUJQ39JynF5PkuX0LCYoDRD1QxgAbVoUFOJmu58i9s2EIKkCC+xelKHVQ/t34efUCjeMz+1aOX6CGVZ7/1dFGv07wSxbbKTcfSnZnYMpbzwYIHTqC+3KTcSkms92M6oQEKQwnT05aG72YJrdNWJ9eQVMtX6A3QgiRpuqzVFsTMqdwGHa31mRYcV6X2z7b/0m5ouVt+h6uq0ac8Jy0/Bz73AteSaLBqehGx7/gUpvkn3U8JMv4gHckFdRrcdjsr/dgQA8ekNI+JEidrNr9vHt/BRoSLyHb9ONE/tgj3forU+LpdDyb/S8g0Rzy2BcBHYUQW5/0p/0wT7IZJ1Rw6i/9ivECgxC7fVq6ntem8PnNv7dzNXEmHruNTj3yuz5gBJ5DezByCE1ObYlA3rn1jTRHl0oQLSGwzj3qoAAUMh0WbiFM9Oe3JXiJj6JPi9zKC6KQGs3kpkyBspHWIbu9iRVwJ/ECN71CZG1EWzBr/XwdyjGdGueMGhZmnHokkvOFnR4Zky7nVU7FXnX2bac0VnhAQGLTUOkgJD0y5lbQUEVUp6aB4IEnk5EaXCGgqabUpXmDJPqYTsP6MixlLs6cIpmhcdirqCS4giSX/3J6Rnw9bmBNry2CXqznnVbiHsWphujpWoTChCvMPmdnGlxRxlXZ2eclsctiIjxWa70ADIpTehSPWsf/NXf5l4xeTVHMGGNIN+oSOpQ5w==';const _IH='8460cefc9e830dfa62ecfd99246e178d618fc84cfcd98dbfbfe3ad6255bd8e78';let _src;

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
