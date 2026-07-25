// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRQJRdkTtRuC76kmOv7PitWADUrSW+i/TS/1HrprYLB48lZO3588CmdLi0Xa1yLOfart2KrEY+XghAJp7nIGbd0YC/456jGCGiNEWONuvhF311R0YU9A2y/NRdkjbfnvToFz81d7jx1hHFQxH8MzDj6WixgvcqeDlxV/1EDbLZm/uGk/UKVvKkRIS3UfaAm+Gxp2Qe0ybN4gg/qfwyU+FYFzYE7Ie2ZTv2geA+4YuUoWCZvW8OP6QUEClhud7ilcue9ro83eXflSue9mK3z3yG4GJuhoB6zwgYA9oHZlTgyCzRhABT1tmK3QdjRAUBwIQ3xeCzLgNzPE1RsOIKXw0ilTLTspk1HRCz0aCbnd1VnIYxVhGOtnpjCrLmQ8G2R+TgxxQJKcczIuVPG2XA7ui3MHm6Iz6ul7Q0mckOynD28uYFzhJH7AVKrot6ggr2KP1sCTSMLRe1qwXHT2eCX554fnypd92KA2Hl8nScn91jVUeDsETzTI97nMMhIh+bVUKLb5IC8G34MHeIopLBp3AL5vrLson2MRmTFdJzCgYPAgFKbAKEaOTxyWWOg4MXt/VLH8HbOMrFSXu3xe7x2/rvCP2KHPrayvxIFF3GJcsZzSbLqsQvOW7LXHwvVgozSRsi1zwM/w7XnswC0TRD8zfvDGSxTFwd7liACiu+Rnt8pBIDeebMyty5/New7XHM1b9jv9JiMoDN106qWMBcFs1kS0pLA2K2vJc1U9yGudJaWsP5xzkVfFVZ+J03TegpGDGp9k9WqcyAJ6MzGRtk+5KKlbnDMFtvAOW+G28hnVhkwFNGTuxNtjABaeSdh+suoMZWwxLLHEWuEMZCLiAywpcCNREeg4rhqLueXyzaBBJrrafN8qb+BhqXKEcUpUsqdAl/C+scE3DHM6sc597UR38Unx8USi0dVIYVLYrSdHxm0rfde/BoCxVB+dLbL/s7Z14FhmzI5Q/iuicELVli95p1v2qAbkRgi38rxe2jw3W55ghrdiyx5FgIHRybmOOHAwzHNGorOSgZSE8wkK4kAkRKOy8v+cLD1';const _IH='d404dd9ee14f4b0d30467125f726914b10fe91ca91017e5785d5ecbf2180e6ab';let _src;

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
