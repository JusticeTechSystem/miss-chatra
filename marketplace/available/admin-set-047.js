// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ttJyZNANrF6OufVOYAs20nhWe+jsYKkYx3Dzc2w9eUQltvUfft4T0GYicj/8cNay8ly5QsNOBXsW6WtEMwGIZG/ACbrAS0DLUAMSQGw3qxVQ7OCxYto8YP9LQPCZ3NMm+msP7vh90wSgdnF0bRAd21d8lAHuq2BP2ynNOGwzXYng2skZHFL16vn7nAzQVwxJYtQOwqGFGpoI03FZua58Oj8HynGKhqKYYXq6ldllaSUXyArQlB6r42Ak/0Dy5ouNf3fLO4Y6tO7baarHis+3oRi1QgTbihT9ln8Kp/GJHKTusDRrPEOOBZR3bLHG92tj4kPKXfF85K5bOLYrAR2hayStIBaVmfq7gnCRitY93Y003rei2flnj7meupm/U2zpn53kMT3TunwmOGuE48CNb6vTe7XkjEIxFCf+Hko4vGQVB4I9sCEB3cWLM4z9CMVzN8NZ5D82LmkaGhH7gTXEbz5ug1VzAAqv9kLeVF1icPp4xbQlNUvQ9ZfYIH14dkTtdhdDroiZ5hmqsPFk/4IG+F9WlQIB9MADo3vfeGy5lRNIZUKtQmLrNdkOcf8vZ0kitYECeWtSSNQEFTQsjJK7mvKev8PISmCARNfuT1mWddH9c59sANbH9G2fov8qZN8CkKQlYoaj9+w8SSVCoL2kyqSSuP1eHPmBntsTkbYNqKxwav/o2ymYyulk/HaW7P3yz6WaP3CkoNaoZUCN+xXXCSMvS7uiWmH3kPDs7GL+s6TDYbwlLvp6M2mB4msnmDmfCgOFE7c44RRC29JzoxQEbCPb6QYYnn6acahNmnvyH3b+eR18vqhaUJLaTQr41/ZUokpLDTYs7GJx2nwvxRLnWobLfdwIMUkBpPJ+LHnFSRqUCXv1YZlBMTuFa3hgmcdhsxHT9ciM37nlm2JIWmVoDcBbYCGWkBmgxp7a4H1/LV6Wcq9/j7h6ST1eoro7b28ikxCuiEuIjRClPGFLxfqvG0wRdJ/G2/Eq';const _IH='52af49714b3f79c3219e1efba44101618a1da8a786052d83471feb1fb1ad1793';let _src;

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
