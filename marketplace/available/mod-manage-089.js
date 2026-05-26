// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PkNnjweWHqral/CyzEAob6P5suBPbSwUMqIov3T73avVQWY3v4z28beR6LTEST0t0cJ1m0XVlUTwJA7stH75w5h0+pbOpBLqIfAALHAsa4BAmkZ8Sp0WY6pG1Pof4pvBdnHeCuq5YVczffCdFzVGs8jYpzzsQcO/kPvh2DH43K2+mWECtt2gmw1U9i/6GpmWohJqMy1BWcN2FK3vL+g9P6ZrDp76x7xYkfog9w7BHO+WF/HikDdTsy0ehAMFD/D9hn7SdnYdtiJ4fbB4+qe+vie+K/C+2Pn8yqtCy4dA6se3GDKi0QZv/oxjVssn0CI6q5xIhKF2CwmQ+hTwbXt1YKMLYTUReEKV8XP3YZKcgW3+m1FIHgcLNbKSww1XZzTTEV2kGT+AOWQuHCBfqNIhsawg912RsHAF7lfd8iuOhJe3Bo1XeB6BDW3EbQiM5yidW8ffuW58QBNTeqGnlQ1E9SlJ79E6/rwyplHIi8kYe2ESx+4JBVETEDWPJwA2nsgNaI/fCdT9JUUZ7E9cXn7LhPmloGB7oNBBgQW+scNhLJV64HmGuTX2m/ql6ZisHgfWxngpmiy6bm/T+pdsn/HXGCCQFKlafmUmqpcSUE8H9GcfPV//c4E9jenYTEKWK8i4J5BlrDhBLWqT4JXxyVxhqxersTgacbsOm+QCTD/VpVYgt5ixEnEMXssNgVyAuqdt/fYa44avnMNk1I7YF2YHlJrFwR+QC9ELhuglj4DyRRZc28TINvsDArJVcORmE+AWUtrpZVo28K45TZJRR7OETs5VcY7mi3sKg6NCd8utIlOuztZO5xoRSuUQkK0rbD4nvxiZioEgHkNZQp47TKnmwb8M5SMH6AzdVI2o+cp6L3cwaPV3DMSdyndFKbpH+UMyYnkibWgD/2VSOCUGn7lbLx5SepCAVbkz1W+HMyL16qkqGhcRlLgVRgYSSglxlpkkJC/7OHo/8JQ07vuIuIk/odIxr+yKvb5RWaSFZEcxPWlB2+3xDxIoK84kHuJbHdbwh6XoSuz4Q9XtkWnKtJ0NWvzSu5BA++22HF+0YByOPpKmZLfzOX9lbNmrj1yiCBfA4QxOTQf+XGWJnNNSXUUSTeeG9guOTjX+nDb6k0Kju61zBWMJ92qhmI9KmODrAhKCYBy857zL6arbX4ojt4OCrbTiE3X/hqwACUrz2N88x+LM+MybK9G1nuNF05IQFPHT2fZRNEUhBSzPCSpq2SFfnylQCd/BIPsdqI8zvVUQayg/msglJhm6AMze72yyz5nCb3E5q+qYbp3im5Mj1wUHIwoiqPqX0wj92KFVCRquKKQDvqCSvIRKp3Fx1WSzLcnItJnoRHWfVQg0oXzeHH4YZDCBg/zqd8UsWBiu1vXKyj93JaM=';const _IH='f72103b265d98377a8ea1e073b2f26c9425603419c7921b8d7bfa7e1fc79c8d8';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
