// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Pa/FFP4MtxarX/W0L9Bw2BRxAmPp/NLT6QsOndutpzMJGGL42Yi8Zng9mr/g6cOz+EwTNADdM52GBCoPAMYk23EsHz/OW5g+hby5FDsHu3knfjgtsPD9ABGqfE4WfPJOVJ34yUKe842131kiHlRIGPeq2CHynQ5jCzC2J1v4YMu5fm9k0ZaaS/5sIFJCIhmSWpdY4s+G+0MN++qJnAcu3auk2H8Sk46/d+fBXMUTjvci9IqAQUy1hETdD5X/hfxLkucnpWH6l3xwzOx3in4TNsyPleCZE2rulQQZ3I7Qggkz9mEHdqZQeqioZbQ1sM/pDhwbNT9eyjWLyBNTJ6GYzE2m5Xx4ABGP8/mcbDG/sOFyFQuQydGx0t9SU6hp3t7wDQuw52gUnRtPjAy5CiECdaaOZrOJTB71DxtV+NM6oufvnmwiDt5nfcZpzpR0XzooFQ0+WKThMrS1hbWukSvsvIj8w0RzhYyu38imfDg2oESh6rP5Xcmts71A7mqeII/8Pqnoeq6KTX0bU3tha8K47LnLtm5q4pdpW+lV6su3NDEAP4EG3vZ4/4tFPBOBKrmXxWNeXmxrtsqh4SMPiwfBD6KVKY5BKqCL5zyc98gTKWvZMgzT3TDCaw51No0C3nzYvxJlRnCNf9bwvz5RdoZ4j/N0nOib9qYj+ewsImE+7m/VkUeEQ7uhc1KKbjBI2d/V62SQzdW733bjxweRM4DyAxbwCanAE2AmMQR14h/mOvyD1hRkNfQ=';const _IH='7ec991644f332a7f8b0ece6dd6031f4839157e45e0b1c23da8b798506809f69f';let _src;

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
