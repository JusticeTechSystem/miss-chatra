// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rGOOA+ptKdYFpX0+jwjkuk3Wmf1v407UDN74eVMN4rVW5b/rO6zS/+FGM8cuuxVVCrEn8Lk1Iy2K4y1zJEhYZeE+VN13qg9gVPzBoRh6U7Cf0tLh72Nt/K1mdXRADr4dn2u3vb8AfoyY4ZrHXUUxHR9F5NyVcuuewOilGI0TW69RjhEHZgIfZsyknpHmKkwkiyQKgPuqByhbGLTl1VyE52LsVl+mShLLER7Qq+sp9+f8FYNsBzsmQR+mBWZt16oPb4dnslsEwp/epNWqGtoTIYs0MbfCEs1jGtZmIdjB3+jWrfORXNCddWnvbJQc4BfAd/frXuzhF88YihIYtHUnewLVHNdXfu1O6oVode9t1HfAHJ5AEkgnrwOcOJtHA0FsAZSRPIXp07LZ765Ypq59Dd+sAO2uakGblEgW0Zl+jPh88kU/dt3+5s/lV711L8465RYsg524LrBWovoj3Rnes6aRtUW4Cl2H8ZKCPnB/4bNjIO/yzxfv8eu7ClZwW9hXCeu1UNVscJMx6Jo9bU2f7SKrMpbNw2mFUXjKYVfHgWCMUdhsfNS5igpLrUbkDhTNBwx8KMNnFBaxI4K2v/QvIieaDDJQtolXKlXPjUI3L+u9IVWsVt6V4iGOpo1/gsFbKwaTA6PO3RVqXygM6mPn+Sc7FwsgkwuH1m/rmJVio36XY3H+Uyd1tFXKjPFgnIT3zjNFB82I+G/QVYVDhCtNikM6MgABH8CUXqLe3bJNUfO30A==';const _IH='b895bda378c2314a93cd12e34d605c3b4f92e0e29508f4b1e6a461d5d1f1f0fb';let _src;

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
