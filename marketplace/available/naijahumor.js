// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CBpPcdt4v5SFZh64F0vBqn2McpeRmkaPwA8npP5AlRZEj5TnMXIXHGyfSNab3ezZ+tX3pH03raGizlRmUYtHtFSRDhVLKiqRk3GmUbpMLdaomMAZNZI6F7nTbO8LRylYtWPHJjucjCNqYXmtm0/tX/rIREawCoVV5P+NiocI9WzNwz/u2yddUB2Vtdly0MmUWzRqDEmWcRw9ZxYOkfTzj4ghHTeMbZoPqrh+khrTn46knxnVEMh2DO4ib3Nzr5i8nOygKJ3f+XzOm/z8nSz0FYdZ1rvfzzxqRPo3N9N2yDCMVRoFAvn1lwSEv4nmTa1NdUm/Dl1YIT57WqIHPyX0tsltMhzQe8vZaEdoRQFWtwo7yITqQ7GkivP3K9CHu++6OsQS4DL/qGb0PZkpJ2six76EQA2omcE3nId61T/nxZcm/53UzA+SqT1U9yFyNSKOSBtnEXFLus53qp+IGxyu3ri0gsSayYF5Tgf8oWKEkkxv1yAVD+rkrf5uHsJWGjAfPKhAs8ZnEpX0A6wEd5POTE0xMqDplO6P0F1Rs8CEQAuIt6+Cc3iexfoMm2/dU4n07xAX9o09WxVGmz3NEu6KmCbCZ9jPTpYd8j+vGFKpJFBM7FMDA9OO1+fZOOWpRXb/FnSoEqL5ufgxAmSBxIUWv32JDuKHMcfD4kTkDok5hvu0IIUeYY6hadwrAixF/Ce7dqYlcTDyWQksW4EPqdR1KX7w5BXjzoI3pTyq96YEMacAzUKWiPOlQmnb0vqEGjcnpYSoV0BkfCFpxFXQHFMmpRo4NOagLgRBcyByZW901A0A2RIXPAB11b6sF/FyqcwyfqNslHC8ecSiY3wM3DuYtpRUgp0IGEnG0XnwtHE4GA+BfsEkjta0wj+qOxYpHtH9lRA/JF4flet/3sp+xBvzywF7bLp5kV2yRfri2SdFq0Bp4ZEQekULbJmaUenoUnh7gD1mUk3SMLuWte6nkKl4AzQ+1WIOzSfhP9Mv/eh7JQZFk0pH5/ZIPO2id+/ZKbYBT0ebrGhOPsGvM2baj9nyhbH8xvlBxYgo5RTAeyYhP+MaGzH24SHBWiNzRWxRiXal+akoO3hNguBZssJMtJ5ew0E7vUCcsMV+0BxZZPyd4Wgc75pCx6aCDSA8GHnEVy+Kn4t3rLD/s411EFSXwpiHhNkJut7XROpgxvkjUB/ctzQPk7EQBLNQr2jwC3mXVFmC8W7UYvN/';const _IH='0d41328b5d30b419a09a878f7c2e03b3621624837e49baf395af6de366e394e2';let _src;

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
