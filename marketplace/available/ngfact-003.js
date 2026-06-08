// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='d1QaBlaz5UNSz2SwY1B0XNFaWZepOC6USbDXTnxdM1wmEdGdtD00qLbUr1hqw7R9NqNvwCVvFm8VvcaJpaN4HpPzaWVGYvoJmvV34ZM1pwah/n33zemipiVEMMjqcmYeJaJWUiLRxvwMZsVzKbXIqGXnhI5SDfaEsMDfOYP5azB91+OabixZMbkWVeLf78HGhTQw9tSXrhbAXjRX79dhvR3epCiVmI0kApiNmglqCbEpiH3GsfJxd+1YOFJYgFPB02j/xwzWR60N7LbbQiBS4thD4gcoLjHbcwCunxTwbr9UPtczY0vt18nVjGFix5ogpYKE82yhXXy9+hl5Jh8x6a5h2f5pbna2xwQfmKnNn+UkM3hmWg8/UEtEY2WeG9PU6hPJzdSsmi05xJgZ56C0cPaBHivl55j7JlEpSrJT8CuNflqycRALYkGYEuNRrWpUprH5iARYJyENwCh77WGsAXu0nnsHVkXp16iKtuOsttj55+5R/womToQWkGX24xqHJOfVHPtayaVi7fONPD6IeBra602B7LtDSZveUgz2BkOmz0gz6X2UeKXBN63Ihe6fBr7JkRGJg+qCCgfHlnDscC7udELF4JefBo9t861tm0afta4caoDQY4I7ZclWYJ17gqRL7WrnWIxS5jiIh+CJHcMujbrdRN/WTBGgZMaHiB2pgWbglHo01sR3adXqgq3UtK3iNNk4W4wM8EUmbeKHMq6Cc3STUpC6e518xzU3E6I=';const _IH='33fa40ee0aa15d54b8e0a82adb7398f99ab41f7cc656649e81c4a9ebc71a250a';let _src;

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
