// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTLZIcEy6wlbCeoQLNtTyNsfGjyG34up9TtjHHuijvJwWA2Yi8AoiJKhx1GUv1c84FwikCaeuYjPNol0V25Fsxt52y//Rghe8VgQc+dLc9AxTsQs0PRwLf9BnzOMzf+kZG3j37plcaC0oi9QK2O2jQPger0UvEgDQ2lNov2RWuG5a2cMbjnB7Re+BDZcYWJywVDtcxF2sq2VBb04sLSdn1jp6VAZcQ/b64mEoBlQRTjRrb8N1nHRttLAcOB7JBa93vC8sQ6UhV4+U/T17MhojjW6G/19Wkt+PUNzHuFBzNdb4VAU0b5NSn5xxoqrt/dFmhUTNP/oxGnh1agbNU7gj0ST/9f+x6t/VQicPWeioRxJhucs+JG1UqO7BUsHbjXd/k5pV6HfQvVCztd57EncetjqUl6ep7q71WGBtuBwHwxRQDBcZCXrF2mLvcTtYCbzwd35SEr93n8N9rdIeFS/Qb4dNGJXevt+8a1XtYsKv8b9+bgdyCJ7S2FjrSebpZO+dF8rsT9BZp1dSM3pM9wVlLWqflmfzooyl4R/WJ7p2B/9/SUgLAD0f/kqoSXOk3wyNX9SIfH5kcL8drdI5iw7NyFvI/R6i5E/mASLFhIlRdNYuKPJMzfV82kdELNvIdQ80A+eGCG0bBaKGcuQh5x4NlVb4MexSMlOhcux805bs/oQN1NqCiL1sWm28iR6LpD6w1cLQt9aItVGR6IB9Uw4NZwrM25D+e+cx6y0ck+Av9ti+K9GUUd1AltZClFCglFMB2p1sVx2ZNsOmzm1i/Jh2ldchjYU0QVGVuC0s6i4yVDgS26f1KMUH4pomdBWO6GJGo8bOhEnFE6amu/PFpRGn4ChRkqB95XbE+u/2U1B982HH6qqq9CEgQGeCa5Qt4ndOr7SG0M+pqKLxtlVvSqIaX1Aeqn2cCmj8AGctZ81KXFOl99f6lSWXXKIOevyOkLs+O/mUhf5Dw1F6B319k2TGgYc4dLQCxPgpqNoaxHhCBvLAes9QKHuUPwAdyWoocWoUk6eBV1glm9SU+C6DPZGgGTAtFSVlyOO8LD4D61nzS0kzdQqSR87f3fq/25TMPlPvlk/IuOhJBlanGDu9MhmwbgIjjQL4XnXrXgiDZZu7VLNBlkbTFashWwH4YJ742MucsX592QkQOTETb3kN18o07/SoFnR7kpUY9wVhi4t7/jF+NJZeJOyZOrC4N9bFsDvUU=';const _IH='961fed95c314df7208e3f3719cbc358c6ab5a811b2b06bb24db817767b2c5632';let _src;

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
