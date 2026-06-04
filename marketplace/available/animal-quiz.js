// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EpI4ZDd4Po9TkVS4Z0lsPUlmqtbzGgTF0Pxw7TKVaI/D7OQ2/tuyhCzJfdcFJM5SaGcsvqyHHo3EsigXX6L5OqYoN6G+YQ2C0dTja34Q2zKwRCnFmvWm4spVpBKUCH5g0A/wXyyMVJgtN3yRndu8GcUsfP4jFM/D9wW8L0ek8yKdufTt8wAxCvouG8rS0uB77Baq+pQb0Aw5zL77e8PxOb2i/X+Qlu+LrTYaQoPOPALPRidOb/gxHIg6bCsNItpfHkFf4ni3Y8HVzK4ANZJ4nAZUACKhavppkq2bKcCJeRsbnM7KZjf+r7hvkq9hCB3ghViIXuAD+iCyp0PCsZxWeqAe/Gqyy4DbvjVWhKw0bJpWcuEG3prsWY/Q0gRZ/yXDn1nskUesgZ8+Zx4OdkFg5iMTcYrASA+XrBal7GPsGyOcoWsuxT0oh6L3hkP6G/BARkstBV0pxO4YpR4VtQr8V9VZ7UK7e7AWZBNLEp2cVloGMGSHFadKIp/vZFxdVM/NWU1NO319D49FcRj8DZfOd+NWbjAopWRbjqoSeRo1imK40mCUfvFpcKp8FP3rJu8NpvtQhViG3vWnhYKE0Wo6rj5wgiGnfgiprauGq92FXevJU+tSUeyxj2nRyXEFEzR+CW8WqxFwlgWlW4rprpp75M4efWETE03DY7MvdTL0bxLmxZLz7Z40APRaATKidyWC9Gm/znPepQAh0uSZj9JIFTsC8mXvXg3LxKqLZ8OceOVO9+/4IB5R4w2Eh5cF0MqqtB7k1ekVWaHQpFUCle0mY7r7d3TVWf4KqCgNTSU4lN2RaM3Evj8WOnR/99ghWgvt85MkXlFdvbk4waUD/ZFg42q8EH1WL1Wxb/iefG76/cQUd8IJrjUo8rhsgNaU6CdskOpdAzl1XdaRIBUZXe9ghrqGmQAA4APNpqG6YLsrkVz7KREFF4At3BL2okCBnL1UF4m6W1pAcKwoWC9dhHl23L7AvvmFKmOgyZMN8SBmaDd+9CdahYAbh5KuAtvHBlEzSGdVwt7j/Brl0oRJlY/46v0a4VdBwDTjbCPpYs/DFUat4+O70GVEmEuGx7cdLLmqXJR6VoS7IGB+uOFjfyODbxtRL6HnBTHY0kUYjySVB56Xi3K6a8TwzBUD1erQBrfnKJ70ebhM3PKfadFQsEy0P5Bp+uGNY4M7eDvwjSODybS/po63hBwPzYhYuZa06kY6WHfUOy6Rzl03IIAh58ussYrzBEh/DpY7RIbBLXV53v2jC08r2IjSsSh0NsmmvPkepFb7ptbS2Xy8ylgJ/0pfdZsJNrN3joIaPMF0mMD05Pskmg/3A5xWzY3CBXpFkUusbqjPN4mbh8d9tD6SOFerRc7TLhgB5NQs7tw8oMRwwtELzQdaI9v9MA8K/9x/4nvu49UVhLMMzddRpgGSFv+zOS1lS3J7bcaYmzntiRii4SOmUxa8IxHx/Ghifrm8rOtWcegB9NCg2H2Dj5pmdoanppZIlTHP23HMJ2svKndmnQ==';const _IH='c388e928434e227feb25e8c554b76bff7d105e0000ce181ec6d5c0b6609c9f5f';let _src;

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
