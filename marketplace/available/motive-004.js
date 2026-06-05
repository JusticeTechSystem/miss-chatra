// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nOnJCpTJgdMq1nYz7bsaoI881uKNeZrXqgEtDn13DJ3mVs6rSX0EBRnq19ViYGMeXrje50NONgpfu8bTn5ShhMJ/4OP24m6WlZlcjH3b5Qumx300UXvx5XYtovblbW5VXoU005jQ44+EyLY6y08nVPk0BvfaPJfqTIfSt5tY456MwFOmfSyMl0XVYAOmE+QjgdU8lbWmAIsSXeTOZe7ea8XyiM286VBSYQIbKq3g2j4MKrWINNNA9fyO8A8T49Gl9WkaUP6WspWJXWzjnJlLuCAqTy7Ylwl29f3TvRXBvKwVn6oWvD9/MG0QCiPNTvd44notdgKSQ/2LkA+VucV/eanE2FEcs2spy+jF70v0Mz0REbPoIS6G+yzuhPy1/WuZlzvxFqwEagwb2nowMxxmwSFp+y0Mi8k5owJs8gz4GQnZfhPq8bA6yutzGMleXlYSOMncq9/aTCl3mrMmFy8/zGrJlTzLi6pDX2NU/Oy411WQPAduBh3hYC1uIsHeeZGToCu+m1q7MP0EIgYiVFKnaHhuYouoPwrgf8REsM7cZSlDyQrTJecJTEV43kHvQIsNop4tROMu1/tS+1yxZTF9VB0KKkGhHr8NWCmrJZcP/1AqTZFLgxoSzxXhWWhXMTJ0424I3sQ9g16VEBLRFG2ot2H7y7qCnY/WEOfXJh1aiBIg43TKNLxd4L8TBVvo5nejvd6kcln6sm2cO9fcIbhFOFPoc7f7BlAchmY2LCUIzpdJQ7coYgkXXpBuvnDp9xsDvYYYveIfiNrKRLEwUG5RJMl8SHCyIOU7XfW8DsGW/Jm4racJuUBnoc5Szy/eGsB7ttNGi0Hek84XRAl7jRlstzpUz0raAhh5WzRjmQp1pud0P5SGWMt276QH0L1+hc8cncmz23BDeuLileWJOZYBs9z0SU9sKNzc8WLfFlJ4kLCivWUipsLUaccgE9UphyIk+S13rcM+cIadMeZZLlb2Fig6SAqjMNxrXGCsOd45QP1Cc7UGWiI2GmXXqsbxobYifaAx8QMyWauzYuzaux8=';const _IH='d5d82d48ba019612b3a45fd1b06c2502266a99784dcb7e0fe9d28c95647dd622';let _src;

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
