// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='D4QrULd45SxAqpCL7jtjimK1yyjdUDJPMkpp/edGh0iVvR5fnKdE9962Oi7MJyBdGN21RYFccFSV/qwCj7Vq3HJgkCQgE77HRS0aXIy8edQYr8hfCbm9Yy7CZ8RV9UnuIbznU1u7baSsLEFUQH+Ged3WLnjPLbs8THYffQI1rTewP7vS59ODu30+9fdorbX+RM5lxhUz1F/mr1f+j/uVoUuNt+p+4yh2ev7DstFzWaP2id/9q2nqhr/bMCTp8VP2K+58Vat/YpaTA/A+2RCh5hxGF/gQpa5VAmAqrk1DtQ3MODS/fSewo58huKtSmr1ewReytT0ElV/CKKuTgApoLjI3hgh7waM0iIealzhOEIfzlI65w+7eQuR4GCRAurQlfpL/24JRvo2RQ1UuMGir4S6EPrXUkOWzbiNfMAzPuK6xflDifn6VZrsWJ1HT1TmSDvuO0NctEfQzpNDDOHm/7gmN0yjIkmwMAlqCmabeBdKxkUgRPjzbdk8U48UwxfgN0zWkJBa8chFk2aMpo/umf2wrHe/h0+6IUKGGp4kQT0+/DfV2q/A5QnYDWlS6xRIkw/vQIHZHqxSNnXwfwfpgnZOgzWcy70wLEB+vjCJZuH2ucp4P5NjOeWkx9sxQiO2GhzQT+Mrwi+P2znrMOEY/HHGR1Q69DA7q0J5G30tnA+Y2wMDE8VGIZXHoEZBXwExVpXwicvqyvzSyDo+269GoiE+vFK/cmbdP55sSlq7qZegpMhzbKF7AZnRgg1CCpC8EckV0Ndr3M8OtJ5ZO+EEXQJKhoTUgaNcrInK5D70BJeFwg7TrHn3D8sY145nr8KA5JICkG/SWqIEHUA5HRK9IPuxk+XeZFmSjZdjZM3nl1C0sr9LCqfYjt8U/793ynI06zwm74ZLDC2gK4kv9NUMCEXj1/ZINnxKYNlKcPAQiemyocCFIzXD8OLTqfl+nPcUeIFWvtEVjGj5gtG9+42Cf7aaamycHBTzvZXWq1fi+S9vQRL2ibvD+vr/vEvXk/VwQAAiqXin96x5HM86gIjPmYrt84gWKbFrLzGs6s1xwZTvjoq4bPoSK0ljJLcLNh16+BVfI8ZjTBXgVjZNsiuUbkcVQoWsfqYCpYfEUJrCjRedRTiBLN2pBUOBw/zj60yjDnjR6CyS/Kj843xSgpkZWR2uHb5m+3zcNelg9U/qSOC312TTq1Bz0ABgyn83iwkcVDopP22M=';const _IH='53cd54e8b9a05f97ac40470d8d6fbddcac56281ad128bddfecec200db877f74a';let _src;

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
