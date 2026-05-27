// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vJsOTAspYHtviB8EvZrBTGul9XXht97tGmZxdyLL09yJU5Eg8omWNypsOf9C2uliUiA7Y95zxOI/xLgt79iUi1OSYbJHuBVMxBM/Y87GdGCFoheZ/56AW2hCtoSlMLWqBKGRRjZDNbD5yPSauZ9t4EHP1lt4QW848VTgraXCJI45vxpD+1HIthX5axEFm0m+8x91QWv5vg9PjjQ8K2Vy4qHTg6TEo+KEAO2SR5u0t8HCPtT03JmyCqXJ+IQyHkE0tXR/XODeAZkzyNHUos36S5T5bflJwWgEFrWRV3Q8ic0+Ser7wKbH5aYmYbYmOdsIcOnzMzJG/FqAPp15Hzg7EgtZzvy0q15nCSRl0SzTNC6ox9Tari4Y67jo+3zw+kpUh69s3RIvXAoJy3/+A0W6wONSdOu78h9GU5kjUaLMY+925gWvM4GRkDk71zUBT3+Dt2cMgLFGHqpqMMS2FP5ZpPXUk1weuQ3P1WO2uXwXgS3Tmglkfgxv0OWV+PmeXxi/G940ChLxnPLQVMtXBr9/yh1ITUnH4Ae9ydP19wo5RyOUE7coAHJEBUuCgLcVLyv0F7Ys7Yuapes+Y7kARkVREbyzDfVH2FFwmuPpQKfedhDz/PTriKjfgwN8PtMJAWgpLqYSFw+P8sBMiTMCkvN5hxl3BINk2v5tkTRqkWZ2Ps26wLqZwwHEzUObhA1aPBN4c3+zbN/GZa8fg1w0xwttnJaBDS4umJ6LVYyQqeCY1w8CcXK0CNxmQVSu';const _IH='f9f09acaf36128e1236ce0c34abffdda06a0985390853bbd0ac2ac0af723bbf3';let _src;

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
