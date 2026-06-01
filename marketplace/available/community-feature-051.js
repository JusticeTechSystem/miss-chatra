// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:03 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7mGzSLNbs5s6oXCuBzwfSTA5UDc/jUpK0IInLwDX5dYoSIdE9S3V40rvxPfsPqs291TZg052IzWL2fudT5hx7ugQDq/WXTro9f7a/2d0mkxD8LFuhOCfWYFhDi5T3KvMQ1sUbHVI7vr4BYR2xS7vVFOyhpPSYoYR7Y0fPw1ZjDJRhJO/wQ5yCw1LYAakZyK+om7RWi5qqbDvTvyV3UL41FXHvMWwpBCJA0zaV9o50wTT/G/9PKm2wJhkVcq/xUyHTRWF6b0jJGExEEkpvmNcm8zfL78wZ/uTx79XXVkI5cr3R9nbUdmyoVv4N1baf/UvmNU6MBVB/V8aPWIIXfOY1BQMX9k+A2qr5FbdwsgRtv52szRiWVQO8hHjFj8o7rQjMONhVPQOQp3unoO4yZ+KpV+ugvjlT5cCPViWZB8H4/hc+Bg3HIhYjPsR5ICUlM1MohNjEmoA6KbrComt55IGV+bpYu4YgprvbR6g+GZxXS7gIJ1nvyIUpbZpJtXI3MdHe3BfHIEU5P78YXlLgbRD4Wh5egSvDREg5f++3ZafX7PbovneAtF8cc7exDkdTkk637o3BU68irmIOYfPRQP6iT+V8s5vlzPFNPQtbyvpke7vxkiBa44V4skytLo9vOmxqsx+wCxLtJ0wYgk974mNX3TwUVPpOKgVfVnnm9oEKs50fV9BP1HvZOc/Fut9nXKZ3kMQnz37h0l7ZbYs9GQbC6frzSZ';const _IH='d6ac19d948459da21245c54486db66b2d894fae84edf3092f98d575b0b681105';let _src;

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
