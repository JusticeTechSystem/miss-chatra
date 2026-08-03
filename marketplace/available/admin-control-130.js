// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSFxZE28J03rJh2y54YtUkRJwaJK/6+t3UKwSQswpZntuNz61EKYxtNxR8eZIKcykVHkjyxOFy6AXMiWMnzYREWo+rEuk6fiYjGHtCKPLeKBzYEQ/toh0m8b8P6va1oYqWU03GzWKrYqY0NphiQemMEUOhRYWiZ8lFveGcIVn8iM/APeb68KrQLIkF+DGeXvLva9rZ8ySkxVRNkMMi1dIOGrPL8Fo6gtwzoDviZJbEDwWAMRsZZaAaJ2g1SgDxbBYhg+88c5VHSa/Yt7DbG5HSDLORVBH5CDDOgYYzV8LDnhpdTN+gpnGEFtIEmxWfYB/9WTSK/5bID8Zn4eRFWc2J3+fvHQktWRL4SywtzgEwTbgFOMm27rutcRv58zL568D2/OsPQqPeJ2/01BAlhMPVNvNpS/MnvwwQqm1aWKlNib4dmmsxwgAl7oMt9BJMnoC/soR6ri/GGM1WwJAYuEzCzhQSfALU0knicV5ZswnRi0e71D6sC1zBEq2SPFMTtcKjBpVEixTmtTcyGmzfp5mcU2rREznDfiDUX2i3gXSr0m/jNyN95C1rR1BQWQeMgUv6zZ7fJeXlv2h/FW+AxB9G5Licd7Lnad98U0VnQmISuIRHB57sVdiWNoiGFNYQL+cL221tabmAxVIDCJHkh8NRIxu5kufp+7YO4luMHKTgPtfR4PlPn13wBMjWdnQcLf3CM84GZQmNKdHL7iwuy7qb3KiGEbEvYnC7Y6gQDQO+Yh9bt9ygGAV9M3TZmG3YQ14eU36D1LG4rXlWt1xUdeQJFfviWvZ/AOwkx7jdVzhg84bObfgZ1kpreW2Cw7LcEERo5LnuHTilYZBg366jUzr5PACbbRTkiIU8RTaoWSjgXyEK5kT6ILS1diYlyXsOHwad1HY0n1MYdmRW4XyQZfURyGDh0wpKQ5VA4G8KsTQlm4c9xUOuFl44RjPaVonLk1T3daLPFpUQeTT+SOPGNLkx7y68384YRKhsd+F/hPQgjad+LxEMlDtGp/+KquzFOlpzIUgTjOsU=';const _IH='6374f59fbb2277cf9b3e8e15d5511104077cc66eff69a3cbe4ba22118c56b0df';let _src;

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
