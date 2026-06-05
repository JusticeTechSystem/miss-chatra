// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pUnBjcehiaUtGByOGblGqJPI9b1A2LKLDf/QkVf4c4v46ToFbblZ0CkuicdA+Ptgar1zHFz4+ZGWE13eEsViqpe19+xzBuNOPfZz8FLBUysgiEogFJIaO+oxkgQzQeqG53FeQgxAevJCsyv8IEkeOJ+KxjybdM9BFOo/hkZvC0aXQaJWxOyIy0vPT7tJ7AOw3OVTlLmFVVP1ebn2A1BowN48gtDhzEdbel/PbatqwiLGJX2LB9cmYUVQjl8HLxG0qYdWFaDSj0XEqa5RrsU8kRJOfPYmTojsKOhWjq5uV6r80wA2xSOxxc3FJpuoBRQXsyxZgLAIbFJe434ZhSzXgNK8i7HgdSm8xWcQztVX7dYfOc69vxwPlxlbEIbi9bUpusKNVB8xEIQL6oStraq92Xl4NTsIh4106Wxka9Yb68WCoCMP0G0Mu+CZ7BPtXHaZTxucIjqHriFX4xZq4op4ojl6A3B5ycEIVtqbLs4d2Hvazo0EuJKLyNN8E3H0h1vOcWeJbIckljyJxrxo22Bm/wPGiKNJBJ0fuF6IIuL0FA5QuyucK7Yc7f/jX/s8SB2b6n1k7Aer6sncYfjKDUGCRV8hhBFTR1/Vvap9f1Wyv/q1fI4sYB6UvEo4GIkrwxQwY4k66tOB/0e2/uKjx0OLSklHn3tC1rtmtj5ccdBjKGbbMVuPISDJWxgjB/X5HHeQecjDquEdy9PN2aV2bJ3mrC3N7LByLTehe42hRUZ2cd6u7wX5vWNM1wKO7FKe2jntYnaonRlt5vLgKQ+uM5G5nSRBSnMV6rbk3rQYitm7Ma/pNa2loW3UxWPaXJ4TZFUjKg1T8gjBS5hP+9J75SjPG4TJGBp86dvhvYvfbLqn4sYacrEVc4W/pLYkgCU/RKblF2qYaI4DUPvCFhg3Fgq2/TSEH9Zoef89Z3n/lk5HORgUmQ1L2ZJpGQvw1LOtAHdd/MbFcf0A92SUOp9xY14C/v6o5BMujvcsFNmwZGaIfW1slZNfza2iA4pjaw3J6jwxunyMJWO8oG0Nw8e7m8AhphhPE9qQhW1mG5hwAWEjCXzcNrxn1Zobnb3TBuEQxxNQL1ZzaUojTfX9cPKHFnx0k5W8gaJp2QgIDoH5FV3mzi7+vh0N3FIVnC6g9Xu5D2gW+IfFsRO3tCymKNeFc8zZrcTzbkWXrzQZK9adx3PnEMo+epz4UN5u4Rwj46uVWRbEJnZH+4QG3aEnKjDvFonkm4vJpYN6kkgAuhRZ/RJzhJ5F6dN9XQpe6VYx7MCuor0mTg10VljgYEstYI2q1nyf7E9mfMPW7c7v13Wq+0zCQa6cliC7dB5EUrEYQnbzpkfBM0G0ajxNsOcMS+hT3I0AICHr/449k7UUw9eSkvJeiC1BBm4GVpakYdhVNgWrf4zwxD2lFK5T62czcNzO';const _IH='83fabe4c44ce38a928f800073777bf0eecaa6c2018e209a385f47f2eefb87ad7';let _src;

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
