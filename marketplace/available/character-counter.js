// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yfkpTaTfSzBcyK9PDT5SqCYCLwUX/wUQ4/FBWiZz7WvZdiSJD8TCdTWXVYtSs338aB92buReV+qCUSP5aVZ8Yg0GqnK9o55CSRZRANVf4S/e04mt/GJgNb4/SRgvHS3OHtYinms4+s1++MgNAwvG54KmfyZBilrX7t+WBzWYAHeKpqJWyTvz/TqjbpQmMsLGYDJdUCB5NnsbRgyWt4MwiuhmTy/5c7XvVMfoEnBNakgKYpGK6KcIl9k7oiHf8DUNb5dXJWY9An6yHL7/sr7YVs9mnN9re6LVKcTzgfjqtTBNVoimhOelIMJDKHPPRrOsefztt+4XSTCSHsGTvcOSIny5D26anJSEG459vH7DfLleHdFnjP0WLJofrSq3ERd+UgT7KW7XSX73F/NAvJY5RMEfFS+J0XexOp8URDHx+819UuK+UMqaAZw7iXgH0+ajrP4OEtdC7frLTJEVrAYJs9rZW7Sdh/Z1DlQN97JofuTKiKrY1s5YXUD6AhEH2YJQt4L1JMPTnOxnOoDHs3jH5f1KREcf25ZznH1y/ohoW71CoihRmbPSM6NSPh0/QAYO44XmM6gPDpydEREeQb7hUHDWFYvqNQlFiISj0EqDycIHVmtoRRWtUZTz2ftDG2uR+4JfMuV6IqcU+PI1FXzcOMtB5MohFOc/0KOj0kjZnlcfa5k2gna3Z7YcC4lgol/KNzhku0yKNbwKR/lzaQ7blA4/BW3RYYRIES3O/8+ZRqXjqQytSySeg55pDLS8ZGKMqgAyXUXBu7Y6rH3WE2yYB8BMG0I7JMr9YitElhX29Ja1Mzha+Xcwf9YX1ZN4QUdx8xO04u8NM8/BHQXJZvZAiEPF7N4KFC57mEEhHbNAg+szlVVzmPTaQg8XKqE+ZPEd2N33LFSAlLaYRiv8z57A1nIsNwIpbG5oPZAh8/XxNgEpMUofBO02d5NT5G+HNV/2z9TA041oPgs2PzrLkDHHLROk1Bvql43oRFdPiT0jdcfQiGFRcPIHyvLclYVZqa6x6K+Pz3ouVf9t2tcboMXrHoNovWggOh31x2k2S1WeWzaBmYtAymQ4XD+yNSNDUR54WSfc1NRG8wp4M6fHtY+DhH1xp6Do3R3Xzy/IWAxkwFUP7e825szKaWwDpKpoWRqa//WWzrK6cPFO/7gF/Tt/vxRVIXzbG+kEGJVv74SY/0pYOVJXupVH1mj4NYxirVpN0g9LWAHVlIY+DUc70otSWOfTznfcd7ZcnnFz3/HXSSMPQu/xK5/w/dLbBYaEqYs0anwv8wwpghpFUq7oMxohOxFyWFKhKDxsxR8GxZRJqnapSJ/PT5vs7U/1TtZSihBS1XYlhoj/tq0ww01aEDoREknoGOxtNH3qNKrwKDBNoabb/cuTYxXPxeiJn9MFD5o/CgZy/GjR9ikvPzHHLBlJ1d5EfMOvGqLaYIkuTHrH+t0eFsIZXGx2H1g81TP+h+I6i+9uPo6O2UITsfq6pUlrs4HjYeoR3ed6Mxv5GILyZwxHsQ+94w96cRIKIlVnqlWV2LqugWWmm4Q1ygSeKovfSY101kceDq6B2zMtwhwHZOOBMKg+G1BbaMuLnfHsaM2T/Ff7LP4iOtGYsQTEBMgia1oOa2f7tQtW9w35k4WkjSuORKROraIXPsyPIPVLt0mOwr0wWNWkppxgQBYn33jKtym4zBMCR/pwNr6S0q3pIIaFZQ==';const _IH='6e9a512344f1d8a317319aba3f7e0e27c86d597e529dd04fffde6727b78e8a1b';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
