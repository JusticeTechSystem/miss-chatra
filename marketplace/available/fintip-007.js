// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ4qE2j4eBjxrErguMzphb1BDp/jxzA0XVBYUUg2gC87Beq92ZGsfjHKKzXINkVcCriWT/3xAaV9Ks3imIPmygy6C9BL3/MkFbctQxodol+qKu8khqxZ/Z6jgXKI3s/hf//Rao0LKAeUspARJCazkavRnEn/a5xYoraRw6Dzambjf7+xkzGkt9I+v8s4uaIwc6HYvIzT2COZP+C0Z4wUaoxdv+lFCXh9WQw6k6MgQYTcH7zW8IiCrHZSl1y9j5XtdvEiYndiUmYsCQm6GjCa7AFvFXtyghI3AW/unjpGI0/kA8CAWxX9HkjF7VW/tRXqy5UmGLmPFKZseu9ij2kBKgR+SBuUn99dzUQVfiae0f2hNNn9YeHgplhCgxnov9uBEPdcMRCSoZKY0ex67fIfW8K5Tnjur62wD0zk0WKfjLQod17/oGZZbKVjS1Pq3EaYRZTaNC2uwyQVHcBWXTzE5c62rRPz5tf8scoxQ71RkN3GmO4VvXdX/sIeelJbbFNbQYCOhcbQgtCkEZ4CwgnQcZxdWPP3X5PrBztUsBXQ3zvES6CA5MaoDdv8Mb3BlcHlHYqscdQOYA+DeC9skw9+MkF2chRqj9WDiQk92Bil8qfFLxBpqlFQRcFZyrogw4TFNKKnihtrap2ivlWOPyppnkc18v+Mg2d7RZkydfjNqJT1+vFOW0cQE8eLvDmpHLDSZCQQ+Gmd0NQjggbiu4ywBw/HV6lYzSNZ+aa2kR82sEla8fw27brbAqWyjS4Izbi7MCD8jbnO9ZYYI2U8b8xF37UYxgYqY5jzMUKeGqgJfzZiloc74rQdKubS5+WX6X8jovSOnHGdcMb2fEdXzJKqW2gfR83Lp1RyXjxmglzoxcNBsGmuIjB7ehzUSk0W/ZDfyN/mWNJCWYr9ckuqMQC+0iVq3mSYIa6cAtto85xdiitzkoZiscnwprqtD3WZgPbG2HPMqhPvWpYHhl97vAqJNkjIv1ei/BtzFLQ19dJqiL+L11adFZCztg6Zkxuj3IBsAj47p0oZo4zNJGPdH+CuY4MuHx51dNuGFOtX3W9f+E=';const _IH='b58a9991d4f735c4c03409e8bff9c523b39c19244065ab22424e6bad4749cba8';let _src;

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
