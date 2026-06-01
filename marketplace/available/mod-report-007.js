// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:32 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3gR3wQHvc4q0Aa8ZWNQsaPsEn/Ob/5qDlou9hOM+S7633ewrbi9wZUQE94Wa+SMByFnvjiJK+KB8modPHHxOh6cdzUPt4MJkAyA50BxF3GHroKAhq6uAcBmIyU30GiTC+YAtqsDFE8GFtBuHvrgf0Xp2IUY4tBdoCeQdlgByBFcl9KN990Ze3kLitDpnpMh1W5h9OgVOZj8LGMJtwpTVUhnuK5Z+Z4X6JgVZLP5qy1lpkl/xCAYzbFBuDl/7blnL4fsgvWJR3etFCHkj3JrXsLptY327BZi/30T1BpdTThE4dPqY619dKVM0gRZ8W69nGUQKPkxMeEQS2VIXKHuS/4gbtVFQKejKagGvgN0Uqcp48fko0aTY956c5aaP1aT+z9GsjfQYfeREmIx/G/ojw21y+Z6T4EsDKKMaM9vP+QeLQ+8C+coohLHskc6+NQfd327mPk6wvWE5qTHhjaZlTiUsmD5XcheYDFRPdbr7OGfKahEpsLV+IP0wRECB9ZdXDxPwoUL/K7ppJfhvBKs+R6vOGNNtxJYCBiLgSLD3/4VxfDx0lKnJBcD5mW+pcREkDlRtUSoUT3afXa3k7PDmxgq9qs2PdRFiKkGMz0X/Q8gnCbSma9Rx6pdFrHL78H9zHsa2n5SZfG5hJdVOXPKOF8xnaT3u6YhdaUgWBo2O4cz2pDYUicgGJW4kiGz1R40oWxMLpRHTN6cB6J2FrH73Q4HLMRcDuaj9/8MhsZbo9Czi2rYNT60ZsZZGbKrHiWy1gtul3WWjFmdq/Whhumq7H2qQUnrXYsjIxzxZkKdYInBVKg10mwt7g+ogDLxMoZQA+HC0fxvDChqjvUDEUU25qTiM2ab/v5ZJY4W+e+ExEzJJUvJ6Xs6gBP4W6K/XXDzm9wm2CWeEZhArhtSFxVbGtSIiuyf5wHTx8WaKIb9JyWVF1smG0ZusvWXBnv2NM2Ufpb6UTtSVOtqRMsE6QZt5EH7JtEqMLYXQX4XXvUJPQWOGrXC1n3j5dfKsMfW41WSdbBStrcYuFqHwM1EQqYSv7iRU0lpWN+0JFDai6zuMDhhJpSTa3CYbCBP32Rc1AEQ1DaDTZqZuv5d3Q2cTjZ3QTBudF5R/Bbv/JiOIKt22RKkYxoPcpuI61fed7kn0dW83elxsypGGapeNPTJAy801NNyJceAchusRs4MWwssVm5P8GFK8fKaFFdLyKgnsSI3HiIr57nO0efTbm0DGFnlsONvmFll8zZ6sWVR0h3eyuuyG1X8NaQfwjpDoKh9/5QuBXGFk/RZ5vYveVl5x1kbFFLCCIiJbFzDF+7gxH9RWUoeyiVI9PcmXpXgiggrxAZCP7inJxrmmr1SVCHqI67Tfhtp3B7nYcYMXohijAAMPg==';const _IH='7446565d89be45fadef1315123c9cd4cfa90866b7fe489ccb7ac246d53c80d13';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
