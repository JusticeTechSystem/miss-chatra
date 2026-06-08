// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XR+G/6AUtlhaomUjNr9YgS40Do32auyodX9XQcgiEAvvM172DTHbrQOt7IuQ8SVdJiSPd4v3WZmoLBOQy68f9Dj0RJgv/Y/4E4fa088oxPqY+uekhQEq71xssj8AwqpW6BYQ85eZ066amiUfykeEAWunJ+bW3BzcQLzbIiS3c2FiwNt1jowKNCjScSw6v8rxo+Yz3FFUmWDj43jR8op2LbUCeO7hW4defU/twF/y+pMBOriX014lDeyZRAzVlOlB4MMBV60SimkgoLuWF3F1qXy0fW8uDFxL+kC+XB4Hmfah0H3rh9WHx//Y4h3/0kBOWXlxZjKnU6fZaUTirCu1h2SupFFcnkWI2jGsEZyJG6vn7udxXjV2EyhM9NB8hJXcrVVTl7beNnnxCpGXE3i8v+AyNIlJlH95E30skHSEg9XuUafkb2FRvqrp4Z8stC6JBjWjk/azNLcIt6QryBMBKbgiTiwzXsZOZOM99YAodJss0+PK7OEUwGsHXergR26iZ4atCcg4I11gK7SgbxTT5MyTXZ3p65ZiBbE62GIfo8Nq9kSLLwE+ywke9oNmdkIhOGRfoyZu3JPLhmPO5uE3HrZqyB3VlG9quQnGuNkd2P4791ufnbQci5HBmQtDMOXAJngGG+Xdrgcq4/Nb4sKXx7MMx8JtEk5boFZdnTF1buNXjQZbxuLwhUzEdl2ySlIGPqnhBZGpPLhOCk2NHE8RxBn+oKO0TlrRJypYTWzyBTYfGkMUf45OuP71ETtoq17IrzsUBRdVcv5u55x5Oa6GIsX/Io0ByuMOlvEvv1NpSllDs9YrtGKZjWyzSza3zADPqzLDeMVN5WdNTbdiTpJLDfWvx0aa40enL2R+MdNaW3Wz40XD+cOc5T3Kmkwa3L3byh5gq16+oIW8fy0U3DQRrQbkuEFJWmwpgzlL7M7ZbdHY03eh0Yefz8V8/oPftfpi37iQDbShomSq0GHUpCVv1ws58TvB/2OGCUlhPjU24j9bxcQD1eMOLV7L+sly3yx+ve9RVVt9hiKYFWmwUIA9TcgYRQwCvL4Pxc7rrVUybuEbcQ==';const _IH='aed868ad1dcf475de2d9e95b106e50e28110e36540ff003659f11016aa564043';let _src;

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
