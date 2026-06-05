// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='83RwoKN9biK8/Cs4J5rEjv74Jg8m5p+I4xq6w9Zb7GsqjZvYx/85vhpUWbT/ErMsp1dLupLpfYMGNEiGq2bNJUJ0t3C8SUe/0txkIEFXpWIgPY7DXRMV9M2VS7kIAt3y9bHKJKsz3uZHOFKiKbDTFChKMBN5bNsnfCPt/vPofvZEfjSKgkm5YDPp8hSRiqD/pWXvHPtDNdXExKfb9t5hADEtbhaKwRGWZ2k7oAbggLDAPPLwu0789drL2n5nnShTXBeGsBodJNXp51ODWjNtrOJmSt12WGxYInBzNqItHvx4pC0XCfy1B5lpa7iowbUfIi/WldDXclRXMXPI2t3dkk0ZfGS3ESJ+EOXGC5rUpu6DwhC5DfZYOG91tkjrUti8GOZ8BJ3XvVgOsPS2zhY07d1gdG590CMf1n5jMv4O9LNUwFRzBUR89mvNRUJ8rwyp51DLoXcJba0HrLsferhpsDzl5Ze6xNrWpE4XWIig7T16+LEh75qXHlRdYlnxTfudGAzvNqxBrfFghmBBbB+MywgiWOAx7Nqo0mzq2JIBlHedS9tOLPdNPTX0ALXHdcm60isVRHPgUq88+rWZfyhd81JCeZ/BAGm6cvWhGJOKn/cCCurjxon6Kt5Ew7aQLitdrgHbxytABexYCjFAtX3cUe5rhGQfDKrEJ5FYAh+0HN/xUiUJqFsc5gn8vtQBEshcHQcsq7hipASBlIktYp+30cP7FzPY1TeeMzLOmFUAT8Kf2ZY=';const _IH='f710652d1b975873b4b3c0d62f510bec557148c2f1233a1efc766e77ec7c2975';let _src;

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
