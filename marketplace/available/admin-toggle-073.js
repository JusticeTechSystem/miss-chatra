// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQT8gCZedjJ0ruc/odhkD5h/jdKhy/Z2FyzO6xseXzbMEPizffhUIk4jVkJ+L9LGQNpVxK22Bc7XE9UCh6ffFI1Yu6cjByDeXHI2/TmgX9ZpNyetIG7behpf2eqf9VEktKOKkLalt9nznnW9kaMOqRpIqh8w+YnEKdD5QqNUb7jcNvqyiBOETuug9sxJSRCDestWi1kELJYkKHMBjSGiL92OrJl/xVr3QuhzTnOO/iEdQg9L7+45n824B75v5+ADgvEzICPh3BDV9FPF4Ugt8pizz8kthoisIiDHDTjqt9SQW4mZiHmqatQvuSaEbxjsIaGjL2VnbSBUJZ3kThpXHRQWWf5EJOmQQkUMIYDTg8c0wT8Bn1gZ96XW0D4RwXwqrKOEqFOrooOYw2HRT1o8az42Qv/EBZGjNV2zCvsYkpWKrO4xXIvq1nzWZJc5H9ynUVs96/jOvOV2odhJ6gzlql7WfN9miUdCO8H+cJkP0Tzvnki9Lsw4YzY+n4tQt7hb1FDLFxP8jcE6tNSPRsecluPPmcX4+chYW8wz7Rzk95fmQOqX8jn4cguCisatbzclmcyoc/a/4rwWOKtSBgAlyaL51bXnTc02rtux1E3jSYda5BUAqFYEg988xmM30Zfa89lqkd6FWMtzexGomk0hL1P2lJ12ZS29wKVB4aafxi7c5xVPT9J77oHgtCeasmefjcwEKB9D56v8iOGo5EoPP2SoXcX1KUjTmZ+5u3BR+rK9+OR6NBZNb3PAsyj1UktmHtwIXNGawXZ6CxbR4zrUant7hIn3Nn1ZZk9m1znjQquMFTopHvHXGem+8knrAf2p9BTR8ZUtAoiuVuSwoha2MOzth7iPgUA75QXs4iX9u6A7ky5aPdCvbkVBfEskwrtflmXNmCr+aCFG2VQebd0OflSRoZYve+AR5E4A+e9dgCwnEKKOXfaNsKdkcT6avqW8EVqRqX7pvvMBovecYskum/bdjELTJhwBrN/FvJeMVTA71F+xRRx4Df1UY9JvIA=';const _IH='2a2250112fb6140b5ef516a8c583291e625eff316116f729ac1f83c1ad1a27e5';let _src;

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
