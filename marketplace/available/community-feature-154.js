// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cMCrMIzMuc8N/Grh/1b+8EUMx317X6pr4gr/o1ixBpws6HQQ2GuH8IIxBdz4bOZBZDTfkKKiJTYDZ5MwvZB0thQ2qkttHimd/tEGOUw8MQ+AnJ0c3P4PAATFEiZ+sIblku9JfFmB7GltgUU4vcwvL0djqkO0F9gS2VIWK5qNryGkiz27FMD0FwgkYrw/aWQR7Q6vvJnLaQApuuz1O6qyoCrw/gucnocDsAhTgJwYgggvrjKezwudtsf3JHX7uzs2mtqqhePBqVRto9Yq5xUbpbdhTIekuDlZ68H1n8dUAPFmA2Z6UOh6oo+9kS5DPxujtyBSNkZHbG+yQOkN+jSQPwvGSOA/+IWls1t93ae4OXsCdnGCMJGR81LsCAedS3svO2yJdClq0v3XXnsGZsBbwFvwXOSTSNtfHYTDwlDH/ExGlYXgeqy7v8LRXIuHQCiOomy+wBXXfGZrDRs3hqKOeNo9H+CGFHHWIVXpGTdqt5MrrcIERJxFdt1kaxjB2S3DvDNJByrEZeiDV7GMcFgC8CDpAwX9+lWC8hKa8y/7V+T4fub0H5JQ+pYcDgHaXW9+m6SYPrQgoPsDuGWvaThDUPArQ3fWlFG0AVyRzc8yeKwaoyv2rJdH9Tf7gtOecQt4GEdhLehERr3m8myZ9l2CwaKHNDUPhwWbyl87nNZNwJIO0SzuatJpxSQwA3Se0Fu5iuaVi+cpjtSDSEQ8LImOp2Jb0KrUrofy+Sh0HENP43gLfY7xOfE=';const _IH='b7f7ca0ef088a1c79faf8a4d9766826a6a923348ddb92ecef12068ae26b5b427';let _src;

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
