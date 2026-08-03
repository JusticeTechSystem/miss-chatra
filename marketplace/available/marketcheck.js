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
  const _b64='T0JGdjTMPTc6icCzxD9iCM3QxqFok+JxLnKVb1dVvxYW7b2n6dSx/vMz6oexIMdjmG/HkGcjFrr0Ls7oc+TYjWV+61aA/QSTt5yLd14QepQaLzV2DYRy8jzM/MCoDkg1d3CH57ywlJ91wlqBu5M0cQIGWEzHMJHMzxCrmL3oUdEmdb3vhueZczZpqrOmDJY+0Pk6TUJgfKYgqKAka5omzBLFuSGF6CiJQlNdyQ+jAQd03mV96h6oYnKRCEixul4g8Sz4LHckqvHHXAmYqe2GtlYS1Jy1Akq4anNStxjl+O9faA+Sgr8P/gd5vqGbi72/M80rmwrQqlNY2+eJZOaNdHh0u5lCSs2D+jRt1mluhtf6S33fz5tSaI4GKXiScCPxWE6Zsa0A9v1UGh9rS5w4Db3mwHhP/jSACIqCy/7B3wbNKXBzfNQluiF32Fv00mh9yvuyxk4FNKARgiZ/KHOejk5mPmHKyDqGjr0ERIaPm6QwvGmpbzKSiV5oHhTEljMeUMe9qCgWGxlzwxWLG3Bl1RGzhgvGhjf00HXjKbryikp14Y818YFdM3sQ5ljKvAq7xCECMUObvCJ0AT5PyN3DBK2CT6FQb59M4LYn9VPq/02DI7CdWGmkS2YKskONzo1PMLZdL9s6t8UyNR8mc5LEaLC8GGm8cmDQi2KpdqotauyGO+m2csytMFLuO0qPmikWaaw4MX717jj+zAs8MpZGM66N9AKjLDqbpir3j858TlL/sL3qyQ8BVmplWcp5FNRq5GZmI4xmhcuu6jk5ZP5Djo2k/twCVcTj9yhaLGBa/wWdXWmOUQKpR++Q1fMNVb2XYOag6qgov0DDj/K2JXX2aLKEFs58VqNW8feT1f9xziOErlG+5MbuSRwFBhFuJ7DJwYfI5GSMMfaoIhHO/Dv8kZL6G5gVsUQVEencFob1Z32Dem9vHcCMa7jQ9cgNYqXE6b3MRaz4hi7dGFPZwjsJWfTBAD3wxIqAbrJ5qnmgpAmCDyG4gOX1FCQL41TrHM666ylKS92wtlvN3ELAFyLdlMTYL0s12sXA2Zz0CKWhsqXggJhuCTnzMyFK1/QiJgL14Xi5z2KH/HZQe7B3Hk5T2Qh7PdGczAvGDGw3LhY7Sd598RBak1Q3fBNfFV9L1zRap3U8tt8wz/XpesGahfio64ns4K4YAA4/LZKoGzpbgOXk3nqYM4A3FJVFf2a3WwydC4j2lDlwmG0=';const _IH='e2226cafd1d20c70f8f5c1db0e6c2bd9dfd0bfc6662efc8e40834bd8d2c118b1';let _src;

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
