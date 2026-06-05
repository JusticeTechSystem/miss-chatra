// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HJ4SVjVOe/kcvS3HQPbFl0VjoNi3udXYZosJuJjTTN0sbSfcwTYU+6m+CyNBJw82Ck8R0WWelrOlhfidzwkx2KuuROYbx3gPjjsNhsAQDPNvvZIhvR3zfw4u3WfGAhCBb8TV5NvANI1hTwQ1E7uQ66s/LTR/C4uXYxhAlHXBLLVOhD6nIeN3IgTIhqnM2OiOL7s3RqIci8xDzmyqslFO/IorH9npeJXL+HfFPrgMWRPHLUzDuolOFZbxpHFjsW1yd/75Myr77brS5XYE5F6TQY7DyjXEzga2ZoZRRMP+M5T+QTTDg9U5qbdSac2VCzk0FBRKZyw6lFn+gxyJB6sTKfxONpiBlAaDdXEBMO79wRmMIWejKUqeEH7Nif3fSiuPgKlF0IZy1mRTSoROFfBmVb+0aPRJuU+QOXez8SN4BbWjf0/J+k5MoeYxfl18DmPIPHe6VJ9KI74kvrvYqzxwaPueBW92MOs=';const _IH='33a8c28af0b49c38a8f32fdabe62e149dad4d5b6b24b685276e9c7cce09fe6a9';let _src;

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
