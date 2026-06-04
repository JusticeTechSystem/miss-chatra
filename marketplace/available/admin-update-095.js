// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1EI9leFqSPxhcejiGlKjFrzg7VjQEUfmtnMXnxWKOgqK79QuAWMuFJCmBYFtGv8WqajjISwp+bSQ38ilLlrWFtHitmBzxIeP0BhHpViXJ/vdmvD0p9+d8R7S9gOowcPWm9eVg6MleVUmLyskzdE6t3flpDLVURD4aAx3mdtBMkVwNEBSSYwCm1hAgQwEk3dAH/ERcYpycsonbPTUD20Y8CnJZP+hGrlPA3iGhU1a5QM+VFl/uYF3XfEKv++GnvP+AzUYqX2avxkP+X0CeWNGkbcsiHRKszTn1IjqDVcOAsuTk0pttSvRObiXoCpbL2gzrWtP8rahZLs8d0fukRRQA7f4o1xGvcESOQY1vDI2E2f7yta6AB0fe3hLenWCpAqJyMJPBjYcgAIncfi5kzxQWT/vo72+axEqLT9eZnZSZs0Y8vfiCr0wZ6iI4WIKube0OeIL2DxIAHwJwOTAUeNx/CVcUlN7YmY06/Mt/Rh9pziXpgqsAuCA8Ng+sC9cRKsHdzW4oTC+9nf83qKwBZlkUKxcOFGXKUl/ufd/u1t6UgkJqDm/XmdRJ0+6ep2TRN5CqCpZHwuf9QXcUsEF1MeGWbFUrYP53+lAukLatugxYINMrMlF6kzpIpI5HC9/2ey1N4u/fHrpXheNkodyc4FxzeoleVQ/WRZw1mkQIOl3BDpW6T8q/1MBEcmkEh+yxJNHzEQdDj6sasoZ/FVQ/YQwXBrVn2yyN8p+LlH5A7wHMJLv3YsCmYW1y43EzpG4bqj6dhgBVYlYdKj7Tfra4+YXTIEd6EYs9uEqse2ybTv9oPQpzg0hfsHjUWKjBCnvYL49uYhxI/yZC39EBpJL6uYLaqTDBfT79fi5MpIsGCYsa6D1kGX5yxJC2XMDnsgvJySavpil40rJO6wSnu7VovgCyXgSKq7BE7QbBFaV296OjL8FKDlrQlz5Wys8kz0buzbhimS7e/b1zwU3C0iBcTCmJqJKIKff2puCTM8RyDNxm1LzKDuxr9QDzG9tApLi';const _IH='ce0fc3248ee4d686bc3d4b96a2df40460d1bbf3d4106eaa5b10351b3a63402b0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
