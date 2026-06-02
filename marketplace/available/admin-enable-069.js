// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JrCmEtDWB8/kSMW4u4vAuQNCZ9ws1+O9b4WiiPfijrAWPUOMtqNqIPedRvSxWyNaDcX7SO9sTqX5dMWPQjTJNjVLmSAwyEQe4OTpQ/mRhyAkwiBHndPpbw3v1mi0bsylatHK3gvWCutcfTIBdILs6ljAn811OuAfpGLG/0f3LrSzWpH78a/CpDOWdlHsaTLQDnJPQw1VGbPo24cy+TE7umIjT84tqPMuva/zydwqnFX95YL0U8dGTmKCbWXOjgDI6JOEpVqISuBWGP/Vb1+CTVURGPKUlScwMBu/vs0zvdJi1UsMaH/F2tP3n3TA8qAgxAw2ScQQNCPD6p+AdLGHdRrpFK25tOsec7IjFBo2+gmB2Mu+CZmRc/2G3Pp7GVX25HoVdacjh4RtBHM1Wxsz3TozKVJVGexO6zzVDXPyndI21dzHKZ0Jd1W6x1oQp99/o9sGYv7cIqNM5oDxdGwuKSjHeiX7/46U2vZ3/OmwVGUOb1BG+uB6XxUGLhof6KTIGen5OaGFzlmdf9BmScmNvJh1qf1CP25C7tNpsjC/yrTVK2c6xGIVu3RfBNWS47YqpJ5udgkwxz2KKu5i1DhrTFvQaJ/E7pLEGeQUC6EX1KdbJfeCfQvb41kdm+5xKOtFsyr/lhsDX0/Oh2K/H94jLiQss3rw8ACeTAMDGKYz/L9mLUJpjpmAuqysFQ+XvqtlQ7quG/t7cGo/dlycv/1Bs2v8sAZajbEizjaGzO/KBXKPhU5TglJ1Dpj+y5LtfHKY+1XQ8jj1tab3N8xFhcrB0WDsnrDD1ybNl4i0h/aBA9A3gCJd1I+hdP72ZXMN70dJ+dGagiqPCP81Xu7tY38S8v4pOS39vzipaOxiWiWvlfPliVGcdWruOwkRDwgcqGrKqzzjyWWIJYm5K0kZ9ziD3WRu6o/23a7Olzrf7z9m6GFWMa/lws97ByKQzIY9seLNV4lAv8N/Aiehuk60eYvaAzf9QwpVvOTvjsVf5IqRFZdx6M1hBLdBGmouZfF+';const _IH='667d4b05ede41b71fa4f69d73d8d7c020ed1373a9960b5a24b8ad245a762c5c4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
