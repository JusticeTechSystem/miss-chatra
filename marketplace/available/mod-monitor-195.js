// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRjmByozPE6LujAAGqKioCmoKtiox7BlEJcIplHRWwcyVrDm57qFpUV4FycHfen/RfOvd3HUd1CCDOSFJXYjetafuJWjrKfURGJheNmxARZaqtX1zQ0oM6dEMecOOS6gwwz/I82eEL4STnuls54gqxvR5Ue0oefTYQMfxUU1gbUY2RbQXpn+OI77r7rrXaTC4vGzz6IQdRO7SonhUDdLwSr82nVNqUWlMQ2FFOzZZFlfC5CQ9p58nGECh21tC8/qi3znJebrwSs98iK2EEvobpNJQ4gpHoShnL9XQuGgKm8SfClkWkVGxh+fz+guVHLwaYAMy5o8kZENrQxrpqNGxUQe1uHLWtrC4EP3GzB4yMrhEXRLU4Wmxczy8Usj+rXTxjFbX2He7SbfG/XQVuD7EJvAoohjzzo1jzRAhaR/8M8k69kTtr+u//7x0q4qT0mzTNIRzvkg+SZa6cOTkylS7u0aXpEHFkoF81BNKfo4WN/4K4/xTjR6w2oKVE7VLGhEH9hu7M/0ZIqb4jwPTFSHC/v8AMPjbsBRm0AO0fFQXVtIcHGxYm2INCeJPafCwUz1zdYT/9cYtOBSRPePw/5EWlvAtgWY6aMAgj3Ztkf5hyxyUDBHgJoyqb9tTKpYVrtzTA+geh4SqJwhUONg06U0AoCiXOmzWQJCeKOYero1A30usbQloM9zdu960XiNTKmttlnauSBKGixG0SFxB/pV3Wqor9+afzIx1htA8E08uHoo1U+nWqPeCud4XXpilihqyH5PrIYx56CwjSrfWSJHT8r/VnB0TP4AwxzLjC7eQ8Tk092MbU+pF74++gB8EAF/wchs/BizNqv1n/qzVHKoGaxvvkWSOfcRGjseMMdZHgayiIvjPCft8mWI+zWiNyZqbBVmdemzeCbhjE5vsvQ24xA9ZgycORO4ylLJF2f+DF4NkmNrJ2ZDgPPk2fyYyAobsQ0FClgOFvyCRzQH2wXLl/IwID4P6S9D0KnWWplFOOdFutDzIOxyc6XFsqgqVoddWrq1dqXBmAw8okLwxrX40U/MEevjZESA8i6fTP7S8hVfrO6Q9aojBW/aX65h7BSMUADWYREisyLVU1dIqoh5hgQV0xCtP/ND1CrvIn2WeYxkveVkb2PHI8zqOdZSkJ+XuBXqWPvih9+Bew8Phi36ZCIxFlJSyItIJ5sBD/RC0eSsF5+MqfFlx8ByAZZRgD+JM9sxAHVj6StTx5h3upgdvXAG9N5AxEuHQurzAss/Q0I7pNCAh7nSgtkkce4m6slmPdv/rE51d9Iuue/p8zmWrCxiJbVkK6gJKsUghruC395Dpx9U5odVX/hmLONLTSBhBx8/ppz3oCB+nSfWRX10ZNFLNpyGMy7+LTrG4cbJst+nQEPEum8wFNrmLA469ExPeep9Q==';const _IH='6ff2bd7a0982a1cb77d62ba99697c7875eebd696592a05aee86d87209fedf42c';let _src;

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
