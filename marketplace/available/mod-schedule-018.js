// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WKtZhcxhwx2UMZHIpLBSVGkWh5qoqLi8gFawOIlWMt3W4pkGZjhu9NcMa8NwTI24Xs2TyGWShWFjtKdvu/0qWjcZ5TA71XKkK8YswDvcrSEWyb34+NtpgQZd2z8Gb4RSNbFbzjSDwawsNVo4ay+pWc/EQMCKLrIooY1kbfz3mfLxg4LuOv1FiiLxd10ukheOYsY2p1J4VfYOSrD7Ks6v4+AdujG+xB4Du58tbLxTwHbe590wo/gzrAckkG+/pxcEARU9MdHVEh3ymr5br5AXxl31OdZsHZFC0EJqeMFJ6r2ip65z/Xll4A3yS2TW/wLPjbVbM+xi+7ZMR8wrQ+PWoA3ZKN1p/BVWEuBicVaDTyQiPwgbMGkBdk0LKjVTU+ytB5zO25W6gz5A1BhWEESs1dNeCLqYiEbToFZzZI1JZLLT/ilwMSVudUzbGlAS7i1JEcfu7utMk/Va+JnbKSrexSIXAhOB04sCNniIs3aVX68vilrMa7uWWTu0tqg9ViNak8uqMRTvLqCraCOC2ctdw6F0pdjMSZIdoVlgWm0821iIm2qEfIqGUnxj7n0VOqL0jp/D5U9NFRHAeUQs5VGtfxZHkydZC0ODKL6221z38XkaOprERoZatDCEqw0VMzdagKhZAwfPSECi/jd3gkWip32RugMhIkamH0oB7wb5Kd0qRgAznSztXniyR/5VbcufwZ6tjeacE4hOo5HRLl7VkOF0J3uVflzf4THQkEWK9xJeeiCInFpKMk+lrSgTyPqXv6L6CivjbJxWDUHiLCNPOi2Ko1xhcHbbM4jyR0amcWIun1Apf8etIwKlgqrrr+O/wazb2nKvBxvJ8cdiAVNoMk5rQLzmsu7YXiqKgdvRzbnf/ogs3ngxfxjIleysHpzSqhR42Ke5NfYQAbZm/z+zQXf+e+BRBMwSOtO64kcZHmyjU3j5mSjYl7db25jY5zn7TNoFmtJALXDvKd8HKX2mQwOt+Mh554TVSZ3x0v0D0Nlqay4FY1/gqQYsf3g64Oq8EzHYTFkMFuO/yPMjsZMznW+DAlNrP0jW9+MpkwL9ZY2HFaky4j5zhYIBELb1EeHX+9u9bZ2GC0GL2mDRTpteohRk8qFDSr/qMiIpSlh/HhPHA4cDhIB3Yo4em0WkeGklLxEhlXEg33chearz3SChzgRHmoYpSLCisY/9jKR9HKtDtYHAxSHmmNbiaiZBJqaHV7l/aRLh2cfr1M8/KfT+L7E6i1U8oWLbsJsjei50q8iWfRhyoggZ7g0kJCPtkgFJU/f+8GXuzJj7/pZxiAbl2/qbhStQ7j/aTlhkKv5mfxpVhAZiyc6lnbATrQmDlCQJU31/yogzg3tM/tgVjzYqGWf0LyAHl0y2AT6Ca3esEzlk5C9tPQUlm1IIfMUjeyt+ly5Q4F8Zkg==';const _IH='01e543c158211c7b22708fae353bebb298e84d5efb57d111f85d2128dd18bca8';let _src;

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
