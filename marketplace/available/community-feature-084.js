// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WOp5FvhYrH+GdSl8SJPbCHbZ8Lzqdiys1DfvU1Qhsmc6D8/yyMhdo+ocDVzgewQskjQGGVTEnE2TBo0andCoZ6ev1LcHGOhy2ZC8zA3vlPBUXnfuTg5e5ALsAxhTDWLefe4qFblgrM4YT0B7dsJBAEqVuqy0Q104vEBCaQoflczAvTwhT5sSyZuXAQp6cr0ZxxR2S4nzmtBd8Q49VAxhF8m/tSIWTSOXSmzGJSyYoPC5UcE+5Pgg584lhgW5Jpq7AhSAWDUByNMF2GjiqOITAj0r2vJcHnwR8OQHxCjA4iyROjPhenopiCYDrUrQ9QIfcjMhivvUr9geYMutX4IT2nZbSr05lhkx7VMM7mgmKYGOd/PCgQknu0dEX5hNTc9aGiYDNXnw1WxMn81tqk8hZczjQepjSfy1JqTToyT6UVTZiNTvwaLGin7/Sf01bdWXAMkCWehNHDF+lIORAYNB43ct6wMlv6WkFIeoslEu7thEsyYKE6Cr4u4pK9sNSTCulp6st1/FzgaIpQ7vVD9TbgAzG0CxNDU7f2JZLQETUsofqpukK0xSCJbAazZN80t0ifSApYrPdaWbdcZCfmUwTNnauxkOP2pqm9i17hTbf2iaGlIGQdoVdodqi9rplfBX/8PKitrlWlwjKztWDqWrF/SIa5h26A4+PT9y7OKAFuJ4YzrqnkaNTpklNt+UwScCQ9UZLMC7Je4uRht++65dN7PyJFm68s03mGxDdjmOlVuyYw==';const _IH='96b236fb28fa1500d732fc7e14a7e9eb6f11393e7954af44273537bea0025ad7';let _src;

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
