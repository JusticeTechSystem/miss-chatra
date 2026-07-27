// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTyp05UpIUTukQFdTzNxSEyywz2+RlEmx+4rHgPY/uq9laXXX3qvLNzCQmAoy4JAhOr8A7UdUgjV2VgR7zUDLc5PgGaykNkEJXp/tqCr458wjxZ6bDancJS17dbdFlR9vmPpqAeYue/8TzdE4LL4tomiZv4tB6RwRXotl6+JOs+8D0u+ZkEZRriPu/DyxesGw2Std4pY6BhogaGvyYAKcdfFghHlXMid2VzSziJw9ExvG3IyiXzrOaORlJugKPFeJhW2IwmGfveZWR4K7Mt5jb7F9GJAt4qr/4KryoO1pOeKOiCoQo6GxknoxAtXRHxqYAGZD5pcb4uVUWHvr3S7oTJw/Het29CPJBeNZOeM8Wb6/ojJb7Yufx6KEpVhoaTtrhEZNhQQgYmx1lbn4YdlCd/l3SDNNrmEe31aW4HKb/Rfu8VdB+JFaTJhG3wdIFo9VBgYa2Xv7K9b1y8GXtVST258gvRwrJIArRrxDWTOU4tH0hTxc3sP7ieQros2+lKZWhsmTQoeZBjrVdK6z8EzIX6W2Ug0LtxOlbqMBFpYRzEBq0ok9d/+wavhJGSWRX2+peNJr9t0ZNFOWm/dBq0Mw6Ze1+Y2Sr6h7FHiQ9ewTuRKRGNJFrFzdDcNnVAtzZT6K4TjQ7gp27hFZZuo59U4yG92IPjhWK4KmBF2afR0pRMIrmhImj6xIpAEgLw5P5kv320M5x4r1ej9yvMA/u1ASMT6iQEwnAty+jEEp4MPpA/';const _IH='65e54f58787c108826363b7495c58d5b39c6e989300001bd10d883143d0236c8';let _src;

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
