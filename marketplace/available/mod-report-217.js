// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pwf99Ku6/jd0ZTGVeqKRHdiS1wDiY/ElJeBbaCBvLVdsFK+JRIsPqLuz2L+5O2+xFMkhZjIuWWxl6tzNJwWtblp+NFjb7gLVIBaIYBXJBS9nOOTwaTo3sKlz128aUIJxeSNOj/kGCtBUpRdL3zUEBknJR2s/kMfKrkpTFf4PH9ATli9AA+7Gue+98S2Zu1F5B8gJYzcnJWiqeFGQbeXgSgwc05DfPf2GneS7MDWbPK2cSFGDvEtRMtvjwakSxIcozmd94V/mLhUDzLn/7gbTh7g9ubsTryU/76c8wcC1A2IpVPk5FtMZhg1Day60lVS3nDbKfgaZx5cGUDr6lWONBe4/Dzh/ZBOpmW48DTi1hou7sUUOA1HcqoZ7LJfHdxXTG+xz/NdIUzMgcfEJjYCl553+KfthOE3znO0yPbuHi56Sq8amMq124SXhZXf+unRNJ8VweDlQ2d06eVPsX+kHwkOFpi60WNg+1/U6I9yWqnSatY9goOo24THW4793TSB/n8i0VJRvPkNrt97ops+BwY9Rxqm88em6188SatEfKdex+Z4m7Gu7cee0dxabEmh5ChOwrR+jz70Kqf9xlnbMEBlfCoUpJUwJfFUO6WGl7PRg3zBSK5/WXmEKcORISFobWFA/1zLmwmLRvGykagflhhuhPFEecoAuWwAuvjtdRS6cVBq/G2RG1wxAdgYtvecioQ2SHLmBg2FzTN7Em+S6iFNe4I7/mlWw38w7mx8WJXzc8hFWNHep1GLwjnCHwUMExNdSMlF6EYgoD5CsrF2Y+u9VyI0/59fm0qBzwPYOw8MnaEqepSq3yAmNl/Gd7cpGvGx5ADWq4NhuNGyEmYTkQs+2zYjEk2h/HCgQHI4Yya+RCtMt8B+eUKiQio7lAzFkxvJZ4nuesyhhrAPjLC3zSGGChHZalNh6ee++yTdyLBG5wQlj1qWa+mFIRlHKju5TN5m0pF4n7xrYX3tVmdNPukGrOf1Coe6fcUhwb9e9SPEU/+4UXmdbrc1gk+4SKlLF7GEbgg2k0U70ljTxIH05q0ap4AB97LZ63foWxZNH7JdavJbiwagYzUaTN9O9QxOB9hOpm9NuQ5Z7P3HvMZKWABfDskfUtmBsV1x/we1IgEPry9NyLFACfNiVsehtGz2p+OYWoFbCFX7IbsuHqoX8akmzUkS/lPJxky1WkC6dvaqz7Bw3NwtwPROsjoQ6fsjoQViWTpzXXd7PoeJ2M/ls4WYgSWmV1ah9szwvN2iUwR/tqxrk1lIqpVqG/OLMaHDMcv0Zdlh1dE34t+d++l2nmvPYuzOcvblIg4kc/dbT2T4Xusp++Pya7ZHbnVXyFJtyxrrOpN8xqTGbhsVSlXUyReeQTah4BViFIjJMQPDny6aaiHWGB96P6A==';const _IH='749db0787412f1fe129c50e511f38ad823d9db244b745912fc431d3df7e1a3ae';let _src;

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
