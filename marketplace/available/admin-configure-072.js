// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSJljuvJ9/lyf/eZX5ulXe5XbvL97+5dMCr4lFB8hSDstj38X8BD7mVVlKD14xbZcFk8dQMOv0/IQZNxmP5uU5BpOqotoeGzM7QguxSdwnDkodKYysr1QoHcAfe7+L0LsaBla7R325lFDHZ7JJ6qN6WvimHXxW3AqI9l+7B+towvzLxuskRp1ePxEXPCJLG/kknl17/kOfuW2A1Y6TleDDxb+bjGpvvDBD6gHcDJ1KLlCwyn6KeLEKr9aclumdPtK/VZgY6JZeOBzKjsxbt5szZakPGM5gthdkEL04PuY1NFj3dgU8eDKEKQUXQexKTboFejHxgxg1gWXqWPV35BSySbvO1A9LIF7qMfuYC/GiVcmggk4M3hOhAnUOxWJPl1tOXV0dmI2wvvwZ7mCZ0ztmRUXnT8Zv0EfPsDaLENk2DGTFAj4+4c54dBkHo4EQxVj0K7w7FVuIrWxLgdjPcujgR2oHa+OtT7sIu+4nqLvOOrpeOe84CNox+BovlZIn4vmcTjUf4hoKeuR+LH6TDmo5i5BY5twPhwYnzzFuMxmKqoSTASfhgeP2aXFVIjWowTc4tdUvoDLKZ+q0i8toD5Tl2TBFA8y9S+L0MbLjzkoQV9kqRUq4CRogWoh4MH70l+wtzW7YwxJmAu6d9FonCEOaustATC67drThmpmizkHWPdcVD9FaafVeUyw4aMnGjCrghs0HTh7xmf9WFkUHcErk7NqchsZurDtPUIziYpk9uKgx0KceyVQR9zfWNNPgic0az3BXExAwVlIokW/dN2ZNpekIO3ia1CTf39DpWkgcUlicUzIJ9C2KnzbKRXbHvfaZIGbA9LFa655OOEgzwMjX8oGftwUAqScpJc/ltnt93icbsETqhuTel6B3h3tuZOEqcHEUcHymJ9dIiVpdOlCMsqzuCxJj/bORSXdKAG1Nez1/CEU3l9JCCZSz2L0SP9Aymx4WPFb8gtNmD5tgPsLg9YVFQ0qrLWCaYAJM95yZPTXtGCJP5lCu+wFqJr3+ll2prB27TReQwcMEsk263Hi7Kt7I=';const _IH='1ec95d36361de213a0fcc8d31c93173a8b64f6f79d0fbf6b57f5d71892fe3a99';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
