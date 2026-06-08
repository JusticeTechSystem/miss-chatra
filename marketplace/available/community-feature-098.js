// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PVnXl/79tv9OBiQdU0jSRnMJOONfTvYf1vQ4lvv25ffycd6y8kBfVFbFCF+wYoT0wFUe/GHFXKeHLLPYad+FDIjf0QVBo4mD1CMJGdN5omLaBJDRUQBoBESh2dzlHlZ9EUORzsAWH+Vbz6UE3iFEVOLBcTaQtjnvmPnEL925xI5bfGgSGlaXaAvGGHfh8Jx1pBSyEA4h8qbS1dPwZhs18pWTQozhITRIk8aYjk6jQa5O8zn0b774SEH9pNqsTKMgmPaRLteuXC91EgBjbyR4xD1iyPYDL+sdudd/zeHBdy7UaWKjH3GpPBoMpdVewt+zbtFnJUJ+zRRR8M8R4MkFTUah/r0KvFMMd+1vJ+VUusPgploHaWOuoC9iR7nyEMa1Pst7nGy6iOedeYa80kiB3cp3I4ZM2eZzyvIs5kNHadEmVSJnChYTnw/IC1iWbh3IcVJGJSFA0tp7zMdcpipKlG3+eqUNsycbzKMzCd/R5rzkCV3GspOJ6E2IIDNBXWe1YKT1kMRjOBXqSRezYrF0B3Mt14OxVOKZewERnFEkJIU8Nm6NZE4aq3KcFiDYoi/oQwU8ADFqe6gE4yArHn2XG2SBlil5E8GEzYu6pHXw32L7OpQcxHca83XiB9zuU7am0TYr3PUmvz4gPBfWufvoYqLdWd+nuu6rJSn5mXcpBUU1tQ4T/iUkGhGVkacH2CnwoIM8iNq78ElwwbQV0fGQeLnFmn3VpwSAgA==';const _IH='740b5164f4527cb4c3b6125f930e5876710918a3e6fa24bceeb63f784cba4a9d';let _src;

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
