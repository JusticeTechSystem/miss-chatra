// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UtU7ZEQ1N1e8rqXTl65ccdq2NhsKZD2R1uLxIzvRIZ9c4VT2tKmIBqkQb3ohzO12+9Tv0wHozi04fbreGW277+2sxQfe9Ey8w4nCYGq25o0EwG9Q8/TPJy+QSPdRchvyl/KBRKn5deD+q0DS5tGU6KMy5G64QlqONL8+GPNJl/3yfbNxiCOPcIIDuqDzbAJc/iv1unC/xQB6BgTcOnzqE9DlaZ1eHv3UU/tx4C1oMiLqO0Le9+Sh579bxILG0EB+2o2qTcDexDjcNHHqAnKp/rkiq0D9jKt0ALkAOlZElO4oFuHCHE1msQDi1e10dUqTJG/TzhDMJTChVVSVcegQJ3E8UpxAblOGd6UKRsT//pKej29a1nTzI/tBQex8NyGoiRkgrKASma83IlQebOj9iAobswVE29/Y9yUz2/AUtgFd/GGQdS1/fXEre3Jx6Pd86tBpc7DLxEGWzjV93FkmZTg6WSWWrTFISZ0I4gXGW5ApinRBD9SPaql55V4N5Ks02sL9iWOEhI8JYs4zkstvICuhdg13NZGSTP/6HwDhi8m0qX/NiKGOL/urt9PGnM4El2UfTFJkx7fXDJxXGUuV2ptb0Bdj3tcFYoyPYWSlKSe1JTLDEXE39pOghRfNFz1t61ZbFYLjWQHrQH2lq8JWywZ49K+ZeGM8sMr+VQO7ev0WNRWL690mcZbbbwPZY/DiC82SDElRf/10CXkoAlbVFiEhzqR/1QWhrKFDAN3WQl7oIemDpQC5vr6FQkFLw6ULVFCYJMtdEs1B/ADrESJIDO0A66OfCJc/dZgqXfNi8oE/dEoW0GpxRzPtA8DP4ZTudpeTOSuojjimQja8JauQklnnGE5w744BMf6bYQc69FpaPbPHqFNsNJ2vdETgC5r9AfB2D8aGsbGWeYTysEOOy3EmNI+tTglh+0BAVu/0rmPg386Yw4bzDmir6dSHSooqeh2uboeNrSgsrb7KC8PvLMS87Msv3zF52MTv/p3o87cqSgp9xOWPC9e7EA4tGv6FqlwQ1jRJqt6FJSS+UawnrjYItNs9rsREkOOW7KNXZW5HX/OobrqSOKrudxI7HZqmlzlc1egWX7ceQV8JhSsQFwarlLDZavgeh1ZYZ7+1+Nnqp5yh5sp8DD4J+26xfPy2dnfnjZU3dN8YQ+Awc4I8fecn5aO3oA8LL38RMRFLxcC3s8Sj4AiSpRN3gxFo3iKWtpURWdw4k6vZbQq0I8706sBgC3T59AUT001LaRUBIiXVz3r9e5TYbXDVMdJkmkv/sKIaCmPwYI08ejQE4ErjOzkmwu9fHpa4JJQGP72hqHzxgTI03zfYTpNR/ZrtT4cNZUoCwsMQelR9vz+0l/9Fz43PqRSA8SP83t2Tmq/4';const _IH='2a10f8f51236e8c095577000241aeaa588e7646ef366da360a94dbd75e33dd3a';let _src;

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
