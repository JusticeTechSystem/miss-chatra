// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XuoVF3YrGiU6PtpGFzhB6B730BAGKJ63Kebjs22swrpuizLa2aMSmuiG0af7CkqMY3i3mjq79+P3BG5buOIS01wlHTwe8n0xpxEc7aEKvFvUEepk51pDZguIn+TEylZVF4aPYBEqIa+z3CphSoUdlH0O4j6waT8xMqqZ1qMLc5SlF3JIJbQFsxnadvyKS9ugVmrU6YoINYTo7G5Xp/0AC34FbA8lLydYKcyWGnRlYdgnEkd+Oyftf/zCnn/V7W6mGeHa5vibnh/gt23IU8WoP7Gpucb9cOfsdHJdD7gXB+cSyqWYLkvM2sPPLc+GzxdYyJMq/SXbQEgqyVdvu6z7eviGryH3wUSFunWo9YJMEHcZiArrqNtCdQmLCcv7TKI/Y+I+G5wwlbqqSQEGH/h/X0yJJPqZsEyrBc6zvAQAmz1/RsBTFV4Df87yQ1XJLS1srnxxUDHUlSNvDI3oJ47bOEVh2o9aUKJuxadhDLBPZx14bx23nG9Wd2ZAuHtFlSH0Rlbvw3MOte08wRrl9e9K7u/1vVodZ9yFdFcnXFOEilHM7i0sgIu5Z6mVu8IU+Jon5tht8blOR3wWQgwYuFwEHCR8Z739367dWc0SSOXs6rDIl9WYWu/j1jNNcpvrGFLPYmPlLFKVqRHK8+Q034ePk0r+IFypKnhHghvD/sNkWcD4JBwBpMuf9pRgfIuoekhz9ACFN1ImLpTtnZoPRdn3q3rv5jLqX1mnPxO7yRF1akcQTuuAioo=';const _IH='1e2aa7da04565777f0a436ecd6c5ac3e896dc242a948d6a90b6cec5c4c255a9c';let _src;

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
