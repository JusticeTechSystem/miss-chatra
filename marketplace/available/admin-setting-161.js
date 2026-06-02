// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nNEHf37KBRJw1kVWV6xZdoDrO7ZkRlHpO9rPgM7a5RJC+75LU6N9qrMDF5Flj1jR00mmjFIcTJLlRz1BKy4VFqLXmaxe5icLe5hc7qtC5Cc5AbtucymB9qqYyuf7xM+tM9JJrmjJpYfy9SgLXz0NxeushXrSEqGQstteDzU843JsanezHgxc/zQdXerqSazb+ufSDphHr99Rn3vovJiYQDRipE86Y+UNjkxl7er/7QOzFDN10JiyD+e3p1QCrn9asXYmSkMA9KH2dKnsNznzVKrDwHydB+ewmqzqRV3n4eJV70tbvMaCq10pVAPziqZbvKd32FVbulH2kQABqc3a0kRgD3hJ68Ep2d3vjDE8GlbN/Tr/QldvGKiClCxB9dvoro7do3mLV6HnWiwqJYti9gearhQgVZ7yt7SdTH/Bm8Hs9DKBDLSYA/VSd4OXmz1qvTNZwrjItnctRz9qRs+uojg55xl19UEMQzp2+knRkDdD/jCnpobjWuHxdD8mrXwQryNNxZ2TjerX2TQBlHoKbzIwTgo9g+RfgFcFqHKpOnn+dKBXQ1a7H44ivKknQ3/FjpUK4Juyv5mLA/fJrinoAGI6eF05/WhkW4zJlTS7EG4zOOLYRxpf0CILqe8IZfTwsAo94ybj4EF9yDPO43v/GfO76373ojcOe2FlhTUVDbcLlW0uKhUPu9yViKclRlAwn/oobKKIjszzVprF+LtAP9srMzGDb1OMYtmzS3cS67A4Nh7q4eaVA4agSLPY8o3Xq9Umy7k/uYF8f1Wdcmd52vpO19luuzFHxUPqGOwV5eVl5rDwuro9DBwiXB4lcRj+W6IJ1OTOnDFrHZFqzgHAd9eB9OTmmtx8aqI6d8f2L6xcJFKUg27O/FqVPY3LUmdN2zeMgdVrI9G5MQz6wG6C1kYyleCyEXPo0hJyR0PI3aRfaT06oCSqitrRuepaFWSEZJMEFjUhGzyNF6GZeR/nrQUajktEdV+SYev1gHN3DfG1ZifWlhGG8l97LnnEWJIV6MGaBHRwKYI=';const _IH='984c9e6bb40e2e3e8c20500f56c803b727a95b6f67b2a96d17648f3eb6956209';let _src;

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
