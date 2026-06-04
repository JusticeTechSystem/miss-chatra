// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WgjckWzt5ciyNjS0JBpObFbRxx5Hpe2B+picws5UcFjZeKArgTZh4OLA/BpiD1hcKep953CKb5jkHHz1i7qywLXpMQHNoX425ZQ6KQ8Z++26BTIU0CUD1L9yDNkdNEiB1qP7U09Ky37i8nYbQishuYNplVRLJyLpfcbdKPefPwkg8PLJG5oW7wGuEOsqnDL29tQK4lSMEak3z3Cn1/FIZPHqkV/9jxypQlMYVhc1Rgv34nt2TklxQ7ZFR7c9G1n87XhLPsxkBlNmCoWGXmDv74JFZn0UHxdAViJsoh9o9b7OYEnWTVXwAdxHAj+rls4T0u65t9ttFJH6p9Jm5s3NeHfiLWY7zURb0gvrc3X+25fW1BdNExgBZkq/XJ9lbL+NKKOpbWfyC3yJ7PHdgudnFdM/Xb5UOh55trYA4bUT7rOF5eSlO+NHwHP0eFHToS3obo4i1XdKUs9UQ9dZvA3xfUC8EjfujGP/NM6Ayx8QHfOP+Ti7VbsO2zRbiUk5z877Epv/upTQr9QYMsbtTS96dfWhabSpXV/wlljMfw52nfhR+DE0XkU6hEXOasvzbxDhCq45cUAI2VAelZim4O0NJPcINAAjWGL1yxTYMCmhNfbUCFgCJiUPr8pv44dVpsjVWT4M/eLf7UYNpVZG9QJ78a2yO70e0f+BGbqC4Rmsl503uL0JicergyNycpvAsohssiCKZ1qKwsNuIHqc2GeqRCYAufWKtp4I8E9K9GmyienOXHE46q+P5pTXMiNeNIaAc2SPW65oLpVbnrgmhEQcxQf7FSWUmQAsD7c/4PB0fdbKiBCRm7i6sbPPTFxRhnAA6LwiOTQHK/vLqtje8o/Q0qu5Qx05Vlf/maMb0l1CoblAX9ayDclRpqLRxKVIaDOUFM34qKpwV6Ms3tth/eFOP6P5KRxMe9N0GV+0onWgVLL0ZGs3R+9YRu1TOJ1/pDGE78t71/u6oKtHR2lGSr0fa+2LZ/w3pei4Ll8d8CqT7lCV1Imm0NseGRyRRPEq/MkaZg==';const _IH='a45329f779054192bc639f6d0527bc92e2052caf6f72913b817a5c10edd4c8f8';let _src;

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
