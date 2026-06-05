// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RQSt48HUtoJ3gevlDzblDZFMznuLEjwnIIuVxOHMIAxGYheGAbDnB0EMrw15JQlSXrVl+BEH4VgHtE82nA0u4SVWuugHBn7EgOe0A8q/BQSXI9af62vsHoDSk4fmJzC77lq8YSu3nYVRFCSR3j+rQNFg82EQTTRS8tvrYxeekaDjvvrlS1oyuV1IT2YhHsqkJfgFRHPMzRz9j8oC4yLCWjCpa3aVnq6y0VpezjeezHOEHDYKGjSWmEL6H+XU/uhn5YXPPlv0z4eqNE53vHwIdwV49HahoqBeeqIJ/nyW+5127tOBEEUJjCk2LDVSGRrsK44VYAKt2xDD3htavIH4HlVVHZ9AQDF23FXv9Fy3Mo1obSuOUjvmKIuwVbMoYDNUQ1CAqpiGUnnL4zP+d7Cn/rbCKXGopeJTpU28PrUIkwY+C9mFYXHcvUsEadp4Bb5XSmky5BpmPtQwu+wIyeyhP/43cbRb1RTWjdgdAa6wwDVYwSeQUwFWiyIE8qxRE/S1+Ryua/0Y31TtljpHbTZmFKYWYl+jCQEuyRezX4otjNXc4sBYYIqiE2cIu7INm81SMd05OSatxoIjMLJxnX/NyXWgPnHdsjIXTS8wsgU/ONk2B4VfL0YsXd8SzAK5dNNfgcJQXczOUb0ZYq949GWZqkYwEuRLU7Z6u55pL+e4jzlvihpR/9dI8z7T54MnEq8A/kj352mOGOCEBhO9vXX+WTb3FGyZuDhiB5uU5WPiYP3Dq+39e7C3kX75fOY2SUfesZb/3bzeRdYip1zpLaDQ+SbKAZZoTignJgQu5/jQnZCI57SMMbuwwGJVOviI4uzsJJ1ExTJvskoEnbnk2Hum5u6ooZ55dgZMXFDEgFVvVEVr3uLWp1qGU92abKAFtCSAdePZ1m8pJylcR/Q3YXLQGO+Zft9TR56ukaTQPqeC7nxLJQo3+VmFd2rEBW+payF9txwqNXEEhTKC9i+gvewmCwrlb9Rv3ZTazvSRSouG8tZMk5nYuWqBx22gQN0AxPRXS/M8I/uOaf/0ryEgbnbzOudF0fsWBNba920Fg3KEVKdiF+syOA06EH/rdN17WJFl9wRZjRLC3pYRToYtBLO/BlfHLgUVHlZC5r+D1MmE/LSPDACbOVHVIaI21IZU7V5kX7auhxaYsZgQRbuHoCWt4ZKQC+8arbtEbT3EZ3XB5DMoSxhYCaec+pSwtTfPXLTlsoAOqcuxAt4LnchvLA==';const _IH='887c8f3d7386ccba8b13792fae0e7b4cb35d2552c730205c8756db0dc2b86403';let _src;

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
