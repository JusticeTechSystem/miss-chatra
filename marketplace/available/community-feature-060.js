// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Kp4Z0A1X2OeLMCu7V4rPzhsAZ27oELX9LdKnEaZiLKMARI8By0mbPDkQ6Fe8w1do6kYRkYGx6oyq2LHhEZTNjXU0NfAjgAA9D7hqNunyUq7bEH320WGKUHiwBpWwvEucuF5HRhHnBShkMiJ9Uog9W67W+CFYUcxnP9MZElEiDMKeew3BWiAI9YIVowH3sG5kQAg1/lERHuC6sskx181zb02jWWqeHOcwNdPiaAWkC+8Claa5SHiLKsL2Q148DW3k5jhW3JX5TJ85+VakUad4qNZhwSM7JT2BEhRZrkvEeHxlgh/yBQ9KkVimkyK1dp/E9XwkreYOarYwSTirsPekiu/RgfCBRl6sQceRXPaQ4rS5xZ5kAvL8MZhgVFniZtHd0epW9aHiB2zhitc2N8EG1dcVUnG7F1y3CHwZSkSvVkgIgZdxu9IpZXm5bJKStbVfHqYYL7moC6TlSMUvI9JoBcnjCWAkvnkpndwZSSOctgOJHw3Ey7XcUbFwFcWZa1tQqV0+n/pJqo5g/Nl1O4gQcUNyF6hHZstpFreSXOOO142iM5eKineTMewTG6redtAaqkuGB5jPEnu/JsQzwJh17KmFywyev1k+RbBAl+wzYREANsm3EOn8fkBbbhsgHaRDiV8ARC/VY15PC4Bf+prf/6t2K+2iEnQBhmUJtlCkhz6N7D+8MaXgpR32CNzQxifRFaaW2kMXUworNoEl6gAHyZ6Abs5TglhfuofqGAvi4Ut4NvQyqa0=';const _IH='8aab7c76d837cfac8b66623f9258a550e46ae9d05a5ea90a6fc1b85d3c6d81b4';let _src;

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
