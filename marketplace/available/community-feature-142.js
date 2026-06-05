// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jnz1Dn3nI0kOOVFhVR23xfhqenUX3GSQPU5ODZXUOR0zJrE7Oo87Oshwt9EO/lBv3k/0rWYqdTBuqaTB5ecA8CvpRbL2qVUKzTY8JywqiJgyOVQ2xW8ebt16mJeCJvGb4PZr6DT3sXLVjPyBocd9tK1Ozv/nN5YDh0DIEq8Hi0TChZc9goLcsF3T4+yfJt85h5lPlMcamqNGaoXGm55R3hUbRtJU+7kB6cjgNeH1DiT7qsyAWZX5drp+olvfXB+mr75uOBjirmejAdZn7ZfiQc8e69lAsCgBVotJy40I7TLvwWHgABMf2tuLXGrrcJ5QlgWtwKN6MjhBlvgRkYiJDGuNGPvo2j3cDJONcOhj5uYZf6tPU6QvQ3hAUtEB/25I1PIUDTU/WPVkWd3JvOF/bSc/xU3AIQtdgkb7NOMyLc7gb1HUxBvXwXAexYWGFhueIPqltFkis6IuriyA+LqEhqkycidsmaSrF5PvbvHJPybJ6I0rKhknwFURzxG7YdEz+zdVxHo5M4Bp6OBKxz7pB4NMjpNMhMu1N8Gd+f60lHPqG693isEUQkSZ7vLPy4o0dqytHSc2Xw3/LSNeyjyyfsimN/CGcy98owfaqsuypm3EJaAd6fBZT4bfQW8xMCTccv4NgozQF+w20W+rsLBSWgzDeZleuU85CMMRtzAsG/M3R/7cnXnxqAu5xWYgTEKggqucMK8mLctGs8BXI3H8lnJ32+EqT4qsliTP9yw8jsZB1Lo=';const _IH='267aa175826f82771b91ca5d913dac48e92092ed263259c26c4f1ab18867306d';let _src;

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
