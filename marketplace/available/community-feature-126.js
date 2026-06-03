// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7LZ7EEFoi5g+rYo82DTMHfcTIs0tq8FeyVzs6s7/Bb3mNwLp2kzkMJn3Jh7NMUkJQbdEguxIpU8KwxVwmeQffpHxD2G54Q7DPJIPMc+VqNWsDBNdX4TZoz5XiYm8GLWD5oV/wRMIfUguSJjob3lNIlxCfCVf7kDQTGfnLz5fVvJKHT0lPUDKiHGn6PX/tUVJuMVWtwloEG6PNiGVV6WBOJuP0FuwgePklsExX7dlqYIKdR9zHNNg3a3jOLci7Q4kFPhsLHF+tODSEBXS0dDgfKh882q1xuF4Cf7ZkU15XPUt6t8P3LCmbnQ33HwQop8YRFlcTdF/+qChmVS7j1vBjgXSpR0Uv8IBWJoxoI3E0C6cASxi/yphkBEnAezzKLGkq+3hySEfsAuR5OZHQoidCS5tF2smxOSmQ80GAW8wOJQGxloy6zjMJgZGrLDAyrF7XF5agVmGo3VMSbSrJMXLMHby5XZq+BVNU2Kouy0PfPD/YnUyYQlmG1j0AVWF7Zdk5kbu/MR+wQ6+0wbVmCmReSxrl+p45hYfQE7NrLlW9oovvvS0E/DYtOrv7OULdeps4AY3u3xZtE8yH7HJt83t0wPnGfk0QmTOCVLRWAH6AlVw9g7OaLzbkABKCirRwsHes3onHVtibVIm6/iLWGVbF04xZIZjLlIbzHu+AhzfPfkR5jTokiUFUlNsNgqc8a1nwoHMzfm/moT5C138icMKRKnAmRqeoBZ2';const _IH='0cedd74a1b9e752f24152b86e6bb8400583da5a0c6c3c1a129d3410d50aabb69';let _src;

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
