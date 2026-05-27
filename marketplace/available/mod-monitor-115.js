// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='i04jvG0ta19XZgFtIy9MQUzmvkG4XuuKyh4E05pvuQ99RpVjhI76wcwWt521eMylY+rBX95pvPNCv3s73Z8PIRKXLx0Z06vmJyRqSydslXTpy7uK4s1h9Yht0/YsSbjd3CwUHFf2dNxGYOK3XcFSJkRKOZ16tQqPmGfSAdchms0078t++Y1JGGxxIrgIJDIIczpH/p0z7wK656vZjvGbclM6j1gWVU8WDqFS2v2dDX4lNDSbv+uFSoftjuXDSVSN/DuCopM2jOmsVHTcfW9WcZQokKDL4tUAqRYOftU9xQcBn2Z2dDADIS2os8YkmiB0wVNUmGi9lsGfQBiWvf0D7hExYDzddAzxBFCmPiTA2IxVJx4ezRobGdrgiCHJQfqDUlbm8OLm27LEWsLeSLZqdDHpIGmlTHBshGWQ0odQIRKiKnldEt5BU6QMV+kC/JeQOG4p/3dff9FxAuPto8wh0wIGGD2FZ13Gq8NxI4OGCh1H82S3HM4e2bBrNp6Dbss7Og48jOVSoa+J2tRA/iEsdiEN5XRwcWgctLiqi/0XXLXbXeYEy2GH04xsZ7f5heQ7zysyiBlSP6cCn+ChwerWXHEaGPLTLPVJ1bVXjuAVPgFSGRAaNYDGHNqdtqGSMzXNi801RgViMoZmVuccGw3BK7Ddt29SksjafAfo53Y/P8LvnINo6Rc7oqXj/KBDCcgiyWVkM/if7J7QegbTz7pz9D8NVbK4ogKNUnaRKEmOKlLhIrhHSAqwRRkc01g+Mk8zOldc/qPRv+c3xeJtVXo0FGpX5Lk99keNLuQfD8kv3uRj6aD+fHI2OYm3NSFoo4CVA8kiY5Py4SFQICTgWIuvqaUxH+3qJR6Cpwr1G/F0tNEkvfSHaAb+eTdZ1F6U/LOAYenP3/9kuX8MGYBoPT2FBJ8/mQV/pQ5LWIKwnNdrVIoI9jbTjB/zqB0B3DAi8UAH5cTCmNqCCT9LQ6puRfhWyboWnHxlQMoK9TWdGpxezNjKbtAiMKrlNB7s2f/ASi5cbLYktKtz4y9kmKPgSw+FskSJyR5Otv0YQPoZuaIUetiYORL9oqTONN5pqobEV4SsT9Mty+j5bSyhI8ZXQW61so/dvgpzPJ4AtRPKeE9G/qQxRy7BYQuUc7AOwAnN8WsnJtbxIyL6ak4vBlqbnJO5FygiOTxirhHUrrmy50Eo0RNnzYGaJnx2OLPjWYDgNU1EAxpSyUhFTIa3R7rGHgnZyMz7DbR0HgVuQcgB0lItTKbRQnLvQluYKLiRyVd9cS87mh71EziNZ9jkZeErvIO9mFFHBa0tfqq+1gYA2ECN8daFDBT7qQra6AhqmZnPMXcAIpGKdtMPh4byziJMDFyeVngOREcSegqMFMmV2tjV1awj/cCUSQJSvJcIgfoBcng2Bdk=';const _IH='c4e4d245eb7ed1f3e21c616d0377e469ca8937e8e52ce7fc9d1513c055b8f7c6';let _src;

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
