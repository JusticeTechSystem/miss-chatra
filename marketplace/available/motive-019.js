// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eykEAWj7mSpvluzapx9IiK4gbI/+tqwuvCXRpb7bdM68Bifx65z8E22m6xNxbGqVC6ner+rKOZpPnVg65agwkKkpJXLd/T8PdEw6lWIDDg3fvUMF9YvtVim823cVUeATCK/maxOih/KsX5n0XBjMGudOu/O5I6ZayrkqjXKJ4L2AFIBSIcKDRMhrPg75nS8e1MvfuT49ONal55IfJ3NnMKlSTHaRyxd3UxqGfrtPwjO+a3CFf+WYU2EvyNmYJBdahK9IzFlJXawnCzQiOGHKKyDLbquCRvbqg0bQNRjCX/7oVMlkFIfNKCr5N8+U3XgDmHGpDibrYh2+H1X/kOxXW7xUPhAw43ZozdIHs9s5WhkqA3I7OC8qQBRiRMeG8WMv+AtQEygRj2TSsoesMWb1VOAcUPxa8CeCiH3djBx63F28t2YcYAsPV8MxWO5yCFEpVpmiHKYPJwH0iQCcHsCtbZzkCvX9Yvl0hGqdowJLIAZavGUnSdjyvSOLaPvSU665mZq1hsjwjda9O4risXJ/xa52iaow+rnb7whYN+hcb6/zfrAZ22bed1seQmJdX5JxnHaxgP8bC8l08+v8GzIx3cBXfOTMwWDmJIxjBsfYm7oNSu/qUwLojzU7L/nlrLWejdgNHQSoY9BciZ8dVs9t13B4lG0Bb+uCEKJ1bfM6c278i3lwnBlEBmANJwzgiXwi0hP1TaMlFs31NuW3Pm99I5FBCRJ0n7F/wpUVdHYtT8y0c5CHqAK2XDreErkKj/HPHdR9prsutHICnNAFiVDPcJhFVd219ZbZAfZvmgLrzVlMGBKZg7uvS/WEtND7rnIJZRyNAqHVH+muSLf9S8ukGIzaN58vEOzPUosuOr+EVimtAVCVYFvwXxnimh/feg748JI9Dq8zmHcuBdIvRz4F46VBsOConJoxmr9CtkjDsrSvYlQrk9Xatvfu3L+ouhmxEeyafkxXNlvriBl67A+8AyeByJIJpS2O/onTJg3lhumyNNbZWNbIt0mL98sqQUoBJYLlfeWbKLBV2UMlKD5bk9m0';const _IH='b0f5908f6cfdb33e73f035bb13e60b4e59429699efe41a7c5e44cddf5ebdd30d';let _src;

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
