// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2dI+XCAX8eqzUmpblNxnkm/mf8dVT6xj+7pknm7FhjY1ZiHSy6Fp7BLG538Kk24YSt47Y/8F71NIbB1EzdpFJ1MlPCyA1j4ugKDasxlyu5uUBg1gr6chRjYcUtkteWFZdL1pga1nMXQEvd9hGQ3DfbjNCzBeKXTd4Th+BUJiE8d3tsn9eAE8V+fO9qrn+pMJXrlWxbrelyl3fpwcjXc1XVoLQF3GvjKE6/3L4bnHyTpBsbPAQayQlATjzRUdzPYiox3szx2VHeAIObUKII/TW2lb69RReZdMn8QzehM1CUtkUInAys4MYmYZLNhNTLI1NaJes8dHY3dYfhazkxcm702corRj18YAaWC6XJfmJ5eFSrMDYu9d0A4OVjBVdyatF03YWzKULL7t9uVxlGNXKICG8lP2p7fR1AhEO8dfgvOwWY8rpeKqKfGt5zkTKEODc8ICh66oBmDj2VSHy65DGkPXtNU3EbuGrMlqToPAwTBLYqUowiRbNWFqxrNLZuX3u/23XbhjUPmnXE3OzHZ5xFwGxp/9KHFb8TPN+F4NJlxPtvhfha+vRdR25cChHaGOIIjUVItUXBLfvMLqddkuIqF6gyrv3byjjps3UURjUesHYymcij8N8uBi2VZRTcAmjbYjEVTMvh1aQIoYJf/YG5RxpI6fHOiekG9KjCYK6t+davjafycOjan2DgBZoG/6DqyQLfGq68DMEqeLGLRJK1MVJL7GlX2AXT8jyu8mtzoozA==';const _IH='91c4c4134e4c6a8d19a42ffe357354294b0aa1e954e320f120d47a30ff282201';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
