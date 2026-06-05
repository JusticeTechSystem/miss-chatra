// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='30c8wCZVj7OUjYLz9Lj2wN1MQbJRI/v0SwZIrmTsu7dXUxXGxxUo5gN6QnCYibn+yPWv2RNvIr7Of07/MZ6oqBeUEkz0MEijtxVzkPz3zBRo557BcnETrINcTXOLA1JpVr+/ULEJBxbF9UwVqZweAoHzRIZHZVyYFwARLBqJCqRyeOWZBqicbRL3gS3M3nOnRO4IWnQd5Giu/JGkbpHly3thWgIiXtS+z08gKeWBZVifMIvrQGZI0RlduhqbrzSLfKGoPNKSPVgpQ9pvSxbO91ZP16JRUTKUYMHBpDzmBebpUhK/aIQYVhOJXyIQyiJYOxABDvPra+MUxGELa2dz6mmbE4+j2+y/oVra9aVdX9luOMrB4PZFDxipOfBd5H2HAHse0nbBzfuUgPyMk/cOMY3vARl2JlNL7uw9/nlvKW2N3TeeY0mX2bUo8pyXfIKuPcqdkZneOFleAZDUKEeV24KdgSvHEUXWiYonAiVtBIcq0CcKPIpQDvloDx+W2TIA4GG7EXq602vRNa5DbRQeD6f24HRx6AyMqNGnDe3HgNFl0qXLGufeYdaj3KJ51pxK+Ohqdko93W80Q/sF6ex0DX+fbKRnCDBaw5Dot+xnI2zZWMAv3Xmk4GiGnFb74gRcFJHmdnZ0u/EWxeI57bU41CfREyTSEKAhStq60nA5f5iaXLUAnXuWGjV3ObzjdVgVvFrP00lY1H8kjv7ONMGHefHR373KnTOwIpHxVrbF3sJBXYzQ7knJX6mrTc7LJ1d2mPmyY5zYifBZHgv1Y5nfP/hDb83T9Y8SUymL6cz9Hj10fzFYfA+H5qgYzyhG+gE0Wn0pmatI7WQzIhakS/9DiMS/pBv1gxBgv5yym1HqXrk6C0xH/KlIm3oX2cmbPE+jSTtkQVvl6zrmY4bOgQHN547/GbbIQ1eWZl2tPkNVQmTXKT44K68o5oLSVO4apiB+8KxWsf4fXbPasxzsjM12DhPDrNNJEPKMON16ImjM8XSjtN5XGSST8PTV4dUrjE0Z7t1KdjP/mVtyHbsKUCOdIvAcOI0YNVUGlWZY7zUDUpbsHVZfeqcZPBcG3oeteU4If+BvDr+yNYcJ2CNcfntaSC/b/MXJ2zj06Oli4MFVvqhGA6yUi3N3zQwjTpMl7iwdbG0oAynrMlRHJIZOyF1E3rh3SCLA4f3sa6+u64WmlbRlveT6KFOybK/ygrstwmAcgn+H8utdsrTElPSylAwYmixw1yvrqK5YsYYIjnvQcVwOxtz/9nrdi+/BUKX6uRP9EX/ezYQQjdn8c1KqziNxj/6DLqgzgHnof1Sy3+MStgaADyqJk1N5ZTZRqxL+TiW7/YmqbJRIyGMh51wlpBLkD2UmURZBGOrFtnPxS26z';const _IH='0b32d8861eda4ad6499b4f4b54cf2880254d383224115290b3d97f13be593eff';let _src;

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
