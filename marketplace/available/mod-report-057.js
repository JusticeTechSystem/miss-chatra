// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:37 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzztm1ddz8yGpulF1DnSDQ37N3WH/vWHOD+F0+ObejtcOICyyqphmp06Fp5fN/UAPhFuAynluWNYjIJgrfezZ4HU6k6Hmw/dZviw7Yi1A8xZVFYke8+WP6puZXx+fGDKINh0UiwViYduUGY9Q4CbpU2ddIZu7qg0570mLmorO9/5F7OI3SonfyQueoLMDRHZRucnkZrj9Htkq1HgknZq7frqFChhKg/F6WkOkiwiSrDFJ8VsGHFDJr6hT1sl9GZ89oQ+W181TSo9iajaTGTRjGyPP63I/s9GD878oh6H4wwAy+hCqYqQeFvwn9VXZj/XcRjpNdy7uBJAG3UDAgGnN+iULNA1diwloS1W3HQBzRDAUm2cC0+LkCV4G97FvP8uRLVPhlLdFtHtiicI3jmio86ocEi9KjbG00IuwWwdHLxZYAnC6MeEkot6efNGe87zjxpl7drS9QhekhsN6O9iuhqdLFGTJbkKMsWhuj0Gnb7hhYSn88q2zqnNX9Q29Mt2RZTp53vIuQaparmi4MJm8WdLG9UuAIDyFKQjpKL7hklf2wAqAPvaJNWZ5TTHGD7lgi5Yt1xFbpQrsA/AXYoSjn91mbKJ413BRURkDMccsCOW3F7Y02btdvi3kr0A63H89eC5oU3MnDdyGh5fvL5a+2aCkpaHHRElh9x94p+jZR/RNHIMTCFCggpiLPJbCyGzAQkYWlk3Ebp4wOhzE/aeeZr10wiOYuVej4Ijq2nGZk7nleeci7xArE+jj7P6K+bNt9ezk3JU9iI8ouvFoCrSPW6Wf+bt6YvIX6/U9FlTS0OjkCLGeQpeb8Bybs5Ysf7GVTNJM0BYKsLv26VoCnumJmWJWgcpR76k8s9+W1XwBauVq9bCYmOgVFH3FaLgdmeFymOn8MQHlNq3/pHXznGdlLqzCfXJPy1T1Z3VanFx/vD8SHMZvHEb2twByqHHVsODKA8zH0sBvg2c6pMz41tLlCEJ9fP6umOXJxqolUhUA8cwxTlHSZc+cFMYwGw+DFlLjBM6xaylUr2sr3Zl6AtMreBkSVtxiPakxXR9Y1zeZUrBaez2UxKaZ0twqdK3iy9Tt5JVKzph8TO8hhRYmzmuNuJK8Bgv0ukOsQ24ZWB56Q3cZNkv0LEtCaeqOCb1mvo3MUXHW/x2DkDFBv4JF5mvY1AA04L7Wu7IKD+DeW+rspHJARIqtsMR9ucQZALo0g69NezaHpSOjxKLQ5dytowv7hwpfD2FOyLKOI4/vaQ+yrnGyCClfxUpRVxt5jjKoELTlRTcM8kK/v8RahgarhV9+eQFpNLFc35LIDzhyQ/7TybpMcwYpZPJGeJfXvbrQKqM1x9EoxKTj4MI1o8RVZvyn34sNgIyjgO2pDX/3C9ADKKevm4d';const _IH='8178f5cb1f3b05e4c91fdaba050d1b36f82dbcf113a90639598ebf56edbe9ac9';let _src;

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
