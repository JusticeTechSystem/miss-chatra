// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='g9k1tQGxztzf+ZEhibRgl5fKtUQMO0s1MXR4DFvxSnQXN2fIBTAR1ZCuYGRXrsqcQFMyiRGBJp5eX62rN971EVguFzJqL40ZlpoY6YuRzANqKCayGv6CIzvdW81htsKbB69M5q1zuIvtAQ/FWdA8711ICbosMUL+yrjintqhOuS9b//gsgDb1giFCcfppoMI7t2ODNep2r9RVluYyezcwAAoYvmkjIaZc+0BqmHoUI59Vl1Y8W7RNJc+noyLPO3IvWwzr5EKIBEC8J3C/bwT3HxulBYC/h2tU+9Ls77d0kJYpIrkxWgo53481j4UNrOuCt/t1qQ1Kjfg0X4C6juJgb2zFhG3cazDKQWSSw2pkW8ha1+whtEznz23VzjISF07DdBf9fFfctSK7S/FOHYEcBfCmXUoLNkhjlYhszcZV/v3nJJb1LYfYxQDQlhC4j2mFFDWPbWFNvHCF5hfNe4nnj8E/X6qnENLnF6HR19jlZIMcOxSus9sQlt9X7XUTNqX44m9T0XMQ8tenGYzLSPj+AYYzqe9mnKV0fj/T7iEgXuqn3ompSETmlJxJcePxq+u3Rb7AObVFgLQUDCyexVzlZL/avIXSBk6vBZR/oZ5AWwdq3DOi1WoHNJQ2bBzUZNkRrZUUzale4pMGAwWlgPHOQEkyZQSeN3KI/dZe3Z8puPudeWupjtQW42ODopGc70JHajSKWGxygRuL8JKA368q/usW7SoA80hSlcNi0X0DQYwQL7zsivP2RFbeqdPrgVTBbIXUbFexh0luBIY0onrDdRGc3ipS0Dv8no8Ue02e6ICXEDebSpyyjgwq6YoKQBr2XCLy6YOWTyTRywjs0/ERCx5xR0nzhGkR+4HvHYsn7GncrR2Y/1nrgxDdoPMB2AKiMs+gqkSnxKyH4DdUJ53jIsEU7tC6IjpLaITMd42CLbuQVbS13PpDU/CX2q4XCO/GmYK04ooDu1ydX4xziM9GmUfnq0VBWTfLrFWIQabLp8S/ygwA1zgU9SMSHY2AZNEiAUX31U0hSOiNfV9+rzB6bsw7GecuQ7FaVMt+NgL4raLmBP7Ihrya7Sw69KC8lbVWcXYqQrzTnYE+8oy4N/9Vm8SZAIS+4wQQtjEjUQFRgUt3SOCofDv0iElL+7pWKTg7M7i3WHYn2Ez+RZsgGdX13a+Cr6l9Ectn13FkPJ5XEM+nF978d4JDfO5+i2ceLN1ZB8DIsX0kT97nQ==';const _IH='02d39408b679719402d5fbfb40ebeaebfcc5de07c9e16621a251a77f56562fea';let _src;

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
