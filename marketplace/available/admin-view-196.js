// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UrovNh4EMN9owH3iEVNx9RLj/2hg+WJ741C7kuErCwcsJ4/0OMcZ/0UmXuEo3bYIdqq+RS+1T4daN1ZsodEgM8mUyXZLPqDC9RE3D0OxF0YKpvO1jzQAV4P/slZa1+w9U4R5afeg60MyizO1ojj21Yc06vt90STKudkKmYyw4Uoj/2wX8n/xDIKw9+0cppBHJE9VObMA6KCfrMsKhi7jcUjc7ufCNSA1pqdKojNP6g5QNrdqBEVyPnK8RB8OJ1/ghm4uoGWTqyOi70F/E51wYTQel6zj4dcIL3gHLfIyCt35cfNU39FiAvRogsLvKOOo0WRCPa52plIWxC3fjpNVuMN3XH5HWzflioh57NPbaWs7W1F+EMM7JKikAQrDIymkij9QIf+SEx7hz+pdWqYybI7ls7VyKH30zb7WVCuYxtutiHPvCB2jYck4Vjx6taUTmvG1yVQ/rzwNwAY/e+arxzHqQXeZz2uIZfDRaH/nQCtRwXFvOChyEjooeexU42EvRnndKpWsDQ2gT9nC4WJx6vMueX5JMv+KMpMbZV7t15XOS1yeTaB3wst/He6h5k86TBoLdpu8HOyAdnBSh1XrLF4M933JXjrWFlViOTAn9mIts0Lte7SgZj85UytOwHXVx74cVOzSAUrQHTcv8IyueJsp6sTudhs8kYXPnR4nLGxKJlf/j0f+6fl6vw0bqbWtxd3y4e6b4v6fYMotASm5pHT3xFwzB2pZpQb7F0FMMu0VFO2LPtlt20p70Y8TNwTom1G9pdk6Qi/K62wxl9Nz5n/NCSgOI8w7xoWi4EVjPgB0NcMbGpepE3D+8b6+Rbl65x6o6OPLkxlKxPYV2G+TiP0vhutYZ1v4eR17CbXCVW3KHdt5q+wR7KQBDEBBRMjp0UJwMtJ67/wQ+r/W4gj9EJucLqnMmq6o1es9J2JH9EyL5ff5268FOcOueF0c7XSfn0KWJOJmPxj1jI8ErT5XqemMYud+j/n3e5aZfSS7IvPrg+4=';const _IH='bf2b75907971ed43c93c9712f47aceca0004dc8c7c2e238c4190f75e269f49af';let _src;

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
