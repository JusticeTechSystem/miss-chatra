// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ApXYTJhHUIAGg6CSUCyermc3O5i/BPXwr++K2u63QtYYbbcAMZO+Ffu/FlJm7ZPiCiI308oQkyE94rHwjTLZa/OE+pE11TlWjg/r5WjwaaPGQfNLLa/ItE5w+vknTIsu5jHk+Z9umiWqWwqtaitg5LnBAcR6rTHGqkZJ1pT4DKQjvVnYepmAKxd02vWtkRxOZFD5pBhI+lNpgciP0+lYwk4ewvgyOXoug19qPJN4ekxrf7Mw6AeFVZX02BQXLoUS5f4F8Aw7c0rzwL4+LAaBcvnpO1+Q55xHL8IMi34NuXK0KWDcPzR4xlSLLovOv/FyRpgZgBYbvOjTfOor7yhfaTVWehhHNOPVFm1JEYlUA5ZvfKr80tnAeuGgzrrHd3FQwPvPQtxsdCHs1YgyPGeyWpkSeBOuauBDvAxuVpnDvS5+2uHipmgI/MNZTLUuaVvvH2yJN+Sw06V3EYAu3w62KuL5+q4Y+hzncCGyn7UxYlPBkxUNXOgScO3waXXJ2FEEGSikJ1BtHPE4vc/fNdQXVjTJY93oX+WJO/begAb9xiDQmAUnGQkGd7ZTk+xTYDSlc15rBgRfMEeI1YCPYwmyeHCnssdOBcYFa0NwBPbo/56hk14VjvDKQFuS7d6cR1vvY9JIIuUtTO9/gEwTX1UaRfHXrSO7nj9yXhTfoE9J2C3xhhzF7DDJWTvyJbzlVZVjz7hMwov32wiEmmq6t1HLkoI0cDw3tauji3K0o6j2DQkOtuuazaRHI7zf3EddlTfXsRj2h8t5iXhMYz1Lc4dpfg8v1B0wpCfGDKl+Lanr2dHiGrdIGJyiBhRNe4/iW3NSH2nLAEzZ25H/bGlWDbSzKS76zM0EMgSj+es5rk2RoG9NQDyNUZG18WrW/DN1n91q72YD/vENmFVm73gCvNjBGQ0x5RX14R4tSr/Pa53OXBzcOUgnyrbcDxLjuXpakizuvYG7d7BYz1fJrsNBDBE+JPpGFVQeCyFujm54G/z5brMPYsHAKPHvgb7RfoVQykTeCnGXtUthKyH5NQCR1iXnQ1FyszcocagkHIRpo9S1Sl/Ly52rggM8xUqNfrPFRbuYDDVnoGYYccEa6vqNnnTmfzEjWIKlWUi/yaHy+ZIreeXgiYRvh3RNweYtW6OQYEiNHz3x+iZ95mNqLazgkEna50HOHQyvbb9W7VKmujIQwMWN88pJIbLr4l0Z4zVcdmnGfbCnQMiL3Yz0SzqklsXVxuFlnlKNoentpnxr5WAXh9McV9R2kR5XL4Eaq0rQ6pu7jlMzyUNQkN8RNJy2so7ZuvoMhd+qeDX7/JV9lDdc+qwWA9h5B4bl0NSrd0y6uLopAWNds+EJtbRfam3l7VAoLlfuAkFZYiooQ6YoZbKb';const _IH='f6bc3af80fc38b6e86022d91f1b299f0f4782762a2d0f232facea814afc597ed';let _src;

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
