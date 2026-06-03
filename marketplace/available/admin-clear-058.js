// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PPNhy4BE2zeZgCCqPfhpQU/THh81nKEQHW2pbx0cJUQ4000eX1uYNgWA7Rg5UXMCRN0XhMT7HBfom6QlMLxqE4MKGh7uJdZGEV59Uej9v/5GaKcq7f1o9bdP/XyzA1JK1nboGGa8HXYtI1/fffyxcuczcK53pqXGzn9XOtPwUeQgkxEOvltMPZuFut/11J+lj69c7yzGWoFfa5zVVItUGlSw3rTlODEmbO72bZtO8StcYwAmQLArsulC89YqN1CbUePr+b4tR/vc3Aj+e07nZk42hjNehgRsQTrS7RuYSB1VOI7vofRqT+OyNUC+ofgEb2M6JU8Yt4zezmuAN3PwX7YLIGt3y9lC6Ia/z9zvBF36d5Cr9gZVkukx1+rR81s99E1bbulLkkJZYDgS57Kulf0hoEI9bEWzPoc485lzDQvcQbWnyCGVkTNm9jP5YXpcTCsaKk3DZ3wT3+BgcXd0BpqKtuqmkQQbjoPFI5d5q12KUiaGZMcJvHmvkQMb425XhGAprP07t9IVTam4r4xuRs1nPBwarbgO7NonyctKW2R+pUHFO2QKgOp3lIxHYHzQAoTOWhUeQx1uD4UOPCkL4WfHHhYcGv4eF9WULZShZll9GJv8xrJLklo3wSs+LEHwahl9BPqE1b8/7M/wV/nLT98xavnJrpgh6f99UARh19oen5/mbpZ8xGJHx/NjUwHgIltak37/0a3IcWLQYbhJdAh/LNrUO2tjptDIsGr93RVWd0DLxJ23vjxqMMl8DvMihY23N5WBZjwjmRFqcEWsSWmW3Gb8IYSJmB89C5DHf7+3XUxaISyuAwiyXSHaq0sxdNqFSbIham0alDRy8xoF5HRtWI/F8tLtBByOIpdUJgq5wHfpqsF8/SATUxqySK0q5ocYqtqmMwb8IXEF+MIWtaM6RQKov7dacre2LO+i46LrYZMpRWdY8u9OHheFcL0aTjhgxEV5sfS2GTqsj5cKW5BSlc7x4YEsN5qrqD3ocuDqBniLkJM=';const _IH='2b60e0be21941d60f790c4b5625bad689d1a2745bcb2f4534d594cd356ab0d81';let _src;

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
