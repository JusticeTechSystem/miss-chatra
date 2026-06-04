// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6z20qgMc15A8hibpVuPXPFAugkhmmvX6aN7ECilx16xTQlRVywJFqtudDgWS9IvSpY17RsAMkTMw2Ar742R+HQf5zItNW805idG8H2hxPMGgzmnTJ6rRxw57vi7I8XAIr0fr2BTf+3jmFDriYTU6EEV5silC3gTYT9mfv3lU3vxuPcZc/v69tIUzWk7JRnhmHAIdUXY5BMXEtIrRfVl20ikHgslbQWsb/WhpbKRAhpgw5ERTB1YaK1RnhWeq741GPswNpdju5x9PjRfPf8c8IhGhnFh7jEuS+7qVfhxcpX6nEM9Cge1DnZQ6UcG83kcKhS+/XOvskB4j/2zFuupZCfjynZaeanAyEZzsMNsaI8BhlmSDsivby9PVS7HM+6n0CSfrVFYZ3+VvXV81zGq+We2mF0UOdx+z5qsSH6dbh1rNTsr/Xa058ZhJwU/HaxWQy2w0CQxVvbvZL5EKjMU53l2VDWNKM55/NGt5rp4ctNVU1S6GnnBBq5GB3j9XaOCh9boGTIOhiY+fh04yIVPIzgPeZnQQFCQtuBt4+flOIiI3PFPcE/jHLYVXrkXbjL54oMzdT4Gw/IjxKhgpDmW3KnCJH0fT8arUT2fO0QulS9/i6vnMPNbO7GQu5OlEUFg3ExfAdAj5zcbY0Se2N+NTnkelFeSxIcdvOqrMYwEWboMuziykMwIaBfVvYSShd6l7eBG3516EuUZXOS2c/Br+eOoZvhY=';const _IH='58ee2a8c3d13a1d76a565a4ca6cf0ab18d581a240fa59224c8fbba8c7118a20a';let _src;

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
