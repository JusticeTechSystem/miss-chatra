// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='v1Jh9fCSAfoXcJRcvEjkoyDwGwYIegYkR6/3E32HXyzEQu2clD4ncviqQSCLdIo7DnLLQ3v47MlEGuoTC7xO2zrWfkDI+FZFZ3lej8o+D/39MnHizXCAaOahutjjGDOMb6zq1EBGVbIqJ+6rqFbn/Fk+9AOE12e2Oao8eq1wAzZ6gm07CdntgEI/OolCkQcrTHciO27fo6DTCuWH2wG/DkAuHIh1ZiKwWl0ndp83F4Rnn9dwi1kRN2C4zUtJnBNxhpgPGxUxCz7wJLHThVRIW4A2QrfZnK5muM2FeKL6tdciL5TEJi/JgTOCGsDReg7x3b83tBb4fYfpZu6oB3yHNtmTQAGmcjOZk7bfXZnWlCUlvM+oZNXNLBjyvv4DtaDPjMI7i6ryoQH9jkqcDXxd8rMEjUKdFIjg/Tx/JSA/F1Xr+ZuOfZ2T3sOrwKFFUK9z537ZHWVRiXXQL4ZUiUalyAdqsWQBJjFRYtQFVrdrWxEVGo7bRg3Ynulcc3xtt1/kuT4oMYvqRGdWzY71nSTNvweoQBT60g03SafcPbUWpxNjKoHpabI6hljeGhjDPJCJ3hrOrc/lclCgIDhxEcBFv9aJ726Mth/BEmnyKxFkdlVmEb5oN/5yDe9Lid8kC5OGvVVp+9b/+ug7TbJ990cEjoBtMYUXaLNsb+q94Ww9lbDiw08Wk0Kri5z8cRv+tONDZBnKjvLoepp8C1inSQ8Y4AC1DebpCv1cwef3GoeRzw==';const _IH='bda834b72903b7d79374ce8eeb95cf187939a54198be0dfafc9a8ae4996bd5d7';let _src;

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
