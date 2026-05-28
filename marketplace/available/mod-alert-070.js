// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gJHR7tT2NrbcOh9S6cWgQHEYBaj50HichoAyqtoBy6cGKGCvqnW7efQ5syYGJgFY82FgftsOOkcuPs67EyaTnUMJJhx2pYOs4jnieImbrXI23ajgQVNnIDO0fTF9bgUzC5noXvn6bcTfWmQatAfqNVjY58reCu3DsMK0VThHMp/yjNKLFwBcgm4E1vUbS+TuA4iowKy7sPgBrCsyQGMKmhJtudk6m2YYfo/Ut8hS5Wu4U3LfYTrtLuMBtTl3W6XiyB4cgQTsRO9LmVJTcgBFbMtT5BISvbyEWrQsombyNQZ5x/Wm84j1DnKqru64bqStzpIV9zAHiBUrLlLs6lnvPnPFVUvqecQ9an1OE9q2yJ2XUVYPUOESV1E/0oIZndSHPyAPN6nvGyk8jGv5TRprSW19jqgJCh73MImmSBwAUn4+Dd1+7kyLKADncj/05WVbI9+snieId2C3Wr0cr8lkmr3Sj06N0tV/vUq8Epq8rN+4cYHFOSqDem5wlpwrlsgeeJKCO4oII4K6R7Mxw5HERy6FWhVWozQR6mDYcYJ3/a4THT8QM9kYkiinIxEs3aAuDJPkqpUbDISk2rPM2wD9ozt1Q8b2PhYRfkADqPU2T3LK4djJyWbziKISaZgnW1cbtzbk5KHk1HlcBNGUMv2eQ/ScmxDaE/vhScrdI1ZeQPf70ro3HcY5aeqWihKB3eM9FSt+DEq+scKy1mh1rBnh8lOiwWE7ZK+GQjaEYaQso4hVg0z2TOTvK8vt3FpYQ+j+BoYJa1t2v0fzLhNbFJzu4aGo/tZzerpJfEwQYv897w/qmA02QnBg468+9uJiPbf7jQ++/v+rzjxkVrz2zZZKOycK9jHIOP+VShUIPj/EksW3NmcOm8yMf1qrFLizemZrl3mdHJFzCUeo5cysuzW2YJrb/G0aLVZX+xrzN+bCU13JeSeGnnwEk5fG0bsY+CuRi9LXl9VUu5smuXXbJj5IDZHykq4t1Jte8CFYopEyGXtB7Velg0gMTG/3VnuKmC5K11Blqg8EUMC4BitW0mx9RhwX7bui8R4GMvj/zzEO3usn1jib1KVtIkum6ldyuj0bUNaMG1UYZjHHHo76EN+oddCIzEF0TrNL1r06V7q0YwjZfCr3RkdF2hEWeHPhCHeSsujMdI5sWya97N2U4Ded4NZCP/DVJA4mUudkp6qMfB46qVim5wQO6VKQqEqICUPuKXW9wDRJOg9bXlM65foD6FbXJBTAe6pl/U9efP6euI02gpZY2h1eUUjhTYGx5TfcVzz+LxCdG+qc7585m55d4610vsr/mcjmsADOpH7gkn3kVdD8rikEbk9AUmcKPMlgjwnVLP9MUKID8mBE5RsltdkSJY9rh/gMjA==';const _IH='878c1c367be8a9ba1cab2244fdea9e670e89f0236cddc0c96f6a4daf642612ba';let _src;

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
