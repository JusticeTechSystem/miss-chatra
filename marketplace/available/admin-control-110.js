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
  const _b64='T0JGdjRQT9wLXHwWNSF+8jp4VYnqLqmZG96DZ6dVV4D6bxVxKpaJ2d9lReOPnTU3RP8Y8I7xJ3iYf6Lk30HX5nnnKyBZO+RcKXo5Xcor6Wz49PETg2T4jKvrHJ+2GivcjDpYQluHFEk0u1NYueTVVF0W0jb3vPWrz7dtHX/fZMdvVOwRHxa38i/KBjK9zjIhdsBxXHfRAEIHGMSOH+JC9wVhzmQEkT54CFKQeTxO86T+nUOoBi1xkRiuu6CE2wZQtMIVHC+ZtxKufvKSWqIpBM/P7Ryj16VHz4iFxg7YAh3113YhzrvBn+C0bAszaDfFs8vZ+LXOPYz+hyF4RPdrZuYTy0/F2s6e3uM7wg309RmanJZquhkhdG711FK3Y9hiE1LHNFfdqN4CZm9HiTSTcTdTaOXPsc49RkPq8p4sYS0XSA5BJuZ3cS2QotAyZtJbtvFiIQrN+uo98o2dDGxTUhata1FPEhFBmJNhajxP0qnztxOGX8mB4jFnqZ+ao6xsmy231RH+UxiwhCCzEwyiHcVh4mWSNDjTihH0dy0f8Z9JjfYz6EEmJfhUHwOYeQO7SWvGtdE1dnd2UK4mn6G6idzSHOVRm9phY31qjZa4uT2JySoR0MNB+YgYqnFbRUiDXH5AlqyI3qU44haBWRXx5Lki7UhhwlkP2FbV0YxbP0sar46IBEFN3rB2nwy0ZHVjFdLf8zVr72/BEVtl++WiOX+in72DiiKwPlFHLc6y4bwYOUkZx9BkSdrNMRSv1gxTayH/a/ZKESYrD+847Fh55Un8AFqU9MO6Nx6kLg4e8by/s7aNkn9imV11jGZNEGQnDZ3AWblry6kw7oxozcVH3gAaSMy3Sc57RRrwTope5t/PkpNBFV4i3P9LpnznOinHUuhIDA5heyB2x2SS4tvJqSUKnR0eIcpjXfF49riWOjyx3kxBQnkyJ/psCYKFnoBXcuFNk2Jic5Qc3JqQfKrbQ/PcsFjKq2TAICaE3kE7q1Tjg9mNtFlIW37TFJD32ew6vdvwvrN9yaIB0ysiIA==';const _IH='d3e3622e8dc9943cd88515147b9fa6b21029304e93b74435d2e86d7b6c9557d4';let _src;

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
