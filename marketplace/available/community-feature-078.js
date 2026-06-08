// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OfbyCJiCcZxkBjRZ8OEgFkvZ77covwmW6Nk4noqCqGgZZDiDSlOtfKv+rMsO7sihBdb0f4DNA5HkH6zmQjeXqHquSDd/GjsmsqnPsFss/lBxt39lO5DXSb1Aj2WbvG+5sNWzjb3RYb1nNg1bvqZmOWLPm/7t/sh2rXafAR7P4UenVIJSKUFo7Vy/Oe/aui38t88cHKIJh+GogZEXBuzDi2uaXMrINDyYf1ElpQl4SgP9rUEigKH9CFCgev6bq35aQYpXFYvfRe+6TTk5LAPkzmNm+kKF5j/Uew8pDR5TpsEFhCruqd6HigBSmL0sEZ3btEP4EPTSlqsKlgXWjcVIzBNfrsUGk/YUFfK8ALG0fea7GrNeAADVB+1RbZZ7jeAotTk5U4zg5hgPhrywllYCOn1iU62DwOdOl1Uw2bg2I0wRJBZPIiBR6kBiakum7GJxWv+K8t8E4mAmyyQFur3LTeUyMea0gEgHA9utJMSE8apbgSG8R3aCGHDg5nVriWEvtukcGW6dRC7VXzPtMmycu5Oe3amcpKU8KMSzdF3BSpWto6GqMfUSyzJhHJUqJnlD+t8lOhZGFwCWCCheiyusK1EQPf1ALcqqwVALeyhR3XGC3GQbP51fLMj62sPAOcYrIWq7KNMpIP5eCOVaXqlD+TPUtNVmPM+9lvoFPuFk0C2oeq1cKb4+UYQGTChBzKYoLg7H/+1T1StmiBlyrm9oQAA1LxGt0h/DWg==';const _IH='661bdb19aa918b97543c9bd53624e59af7e8ade77ac9dfb2ad1c500e68ac0c36';let _src;

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
