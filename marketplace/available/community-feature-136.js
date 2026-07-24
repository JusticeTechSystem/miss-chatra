// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQyC0AsGE6bdILJ94czcajuMAcBgvJ2o4UOxFvEMTvK1NGuPqrZH78ceLPi9G0H2ewWPhkowwVqWTqDp7jGmEcpdxgQyTmnryE2Abqc35X9GyP6It0cBi/5DHBQX11j4oRDE0fBNXULFSAx3qOOQWuVb5pK3XiJ7Bc53SSWhUQdZIMiaSOkEz24YEyfBD49ZWYU4F9M49urzQfolC+bYLYX9XNO3RinkYAZn2XED+nWctpQS7jdermsZmK1alDp97YCmB3L8h42x8n1ZENkV4eC5vk4VPOvUzawikGO5Zq+U3DMZVtwHfltg7bp+iFF4l/iPylSLDv0qg1PtXEaOCwX8uRUpLv+N15p+3hkyW6waYUAA88MzDqfArfzQlnqtigiMazTALwa2z/8+tvTKVeba2VOWSf3ENKHdr0qQwvwoL6GyIzWhyPUCXA4H5eJsHzBnlDSv0h3nAjcC/WezTvUrLONfXqOis47fMMSPUSCp69XQzeY8LTF3yQShZ/AXYuLEVc6vo0dPuj6ki2IGNimziXgepHRF9oHS6WmMsEmJn4X1tGMMYxu+MlPagdhd/7QuDKporqw7jpmfBQe5WCf0LBadtz46pmqSgV2Q1HO3dEGeGAM3Yl7LjJEEHu6yAGIQdTPVcKwPrCW6ibBnvGcSbXom3L529w3m4DZQndQO3kRZh/INv2IQPpnNVnUaTPYmLNk04fZ2zsP8ad6vs9g2/Ej/9ECUYw=';const _IH='c2d276bd189a9b6b8948418164b0b3c69fde872409435a484205a56bf4f44e3e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
