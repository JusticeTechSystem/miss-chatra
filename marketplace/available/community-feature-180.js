// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:10 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwcqq9xDoeZTiDbn1yhRU0pGw7AB2NHzOw6a9VdAfXvpCKccPQQI7ty54t3w5uBqffqtfLYyWq+42biYWEmON0Fu4JOPOcnuUQYnLoPHJj1erxOOGRZVglaDnpHv6CgZEVMQ6HAawYk6qhZWUwbuZ/ymOXNx5gaSERcNCZkPprBnimEld2/Tlv4sZKtkli5nLjP7uDSZIrSWUmELRNm6ieIvUGvQcxwMQ9+Bg3zA7s3LblzvEbYB4oDSN+SgIDnQNQDVhX07OXCa1XM8CqO7vC+HEY76rHOsDN7W1SnYGVdGzJuQl7TCe2TRR7bP1iMsMDVRT6N7nv/NV1gGMhgDNQvznmMX0D39hVstbiXrjpWdGTokbtDTMjFGaglHchEafHFZxx3JlJRc6nMzfO5yBHwu5DMSO6ZMOxfyFD269Ni4esdfFK5A8RFHUX8PY437Brn61Gimcte2RLzLlp3L1UTwUVTGxcu2eP3C/2kfeALrK4i9MuSjbKQGyvu5FPiThTVHTT5tKv1czFRqhfwrTwu6Li1x05pODbUx6lAMD/ND6q3yQ0+jkjZCjhvSAcyiZXpoh7YEECXzV+/65V9h767lStHaCqC04TMIwK7GEi816vjjwcWZ+R8HR2HO7pdChkQdXXA5t0FbHBWA0vr+Vot06s/sYhP8RHRHSvs0xXssvCcAKZX8RRZJezXPPbAJupmXJEX7n+6EIMntoGK9ZVREXhJucv1wq956NbkDspvQnrWLfwuqLinWDA==';const _IH='342a5b250e3e2e7f17205a9331064d45f9ddbf2fe931c80165229fa62e48716f';let _src;

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
