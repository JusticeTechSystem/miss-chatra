// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ha2JtfJD41e25pTqZrwqsZz0VnqBrXbCHmPXtIY0kTdE2W7DDi2VHYZtWbwqksOplpVzbQwxc9lh7ToGtP5erdS/ATXVce4/fVKDjyZTukYRXoNjimrnwxnsaazdTBS9liDzI8xKS+jCHggUvRfV73zZuBg5bC4l2bToZFsyCgG6SR/kKh14lN7Gf4R2dhVRqTmEv2krY4Ro7air+yvTl1t7z+kP80dNZ2eIX2UKN9WqBTpLNnO4ISuCjWj8SDyRrhZqwHykBS0N7rskfGvRoIDPP+ADoZC9Lh76AyXuvMBw6TsoGMUd0WFvFMOA6YDDD72CsSBqmM7hpVh+SOwvPNNf28M/obXksXh5k1bbTUCGy1klV6SlVqiUMlFyc+90tcr/P5YbDRcTvocAR/3H+cmm2z8WRID0sqX9FaPNuxqNaJupVA0IoVRlOBHQp9pR/myrL6cXnzQ5ycuNmqXqi7ngoE44ZlMgZqGzXrBFuKLhZTV70lIB8lA1ZsNSKjaTs6DyfxAiy/7vejvM/GwP/EX03e2XIsvwQ+tfL3gDRO+l2jNorVNAudVlTANnNh72vf0NJ8EsnwtSHaZOExV8Cg4CGw==';const _IH='49cbfe1ccc44e38bbefed351d2275051ca07db967de1a378feb1d7e5e599edd3';let _src;

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
