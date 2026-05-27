// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GGctsCC4/g4PIRXGGe/zDvL/nuyIcOVIIKjKlJPTjt3WDDU2AWbNPdDMppKa6yjskhJAnlTCz9oKFuVSIr8e7jQSx2uDJOQ4zBB3hXLZ1OdvbeMXgKkDHWgS45mcBo4wsxsRebOMH1Tq0Mkj0TR1fbGgZ/WvJJeViQqDgTbL7ioLtYqM1pv6FAVP6eqRu3wovLG1wYmw+1IU8Y7LzbbjdRMaD2G+Xlkq70Chesle4XpVH/VOSWyhUlkdDnb8rMPQUOK53Ko6jLLjxu+ToFiwXNhVeUPcwctbvq9e7kAJ4Ph7Z71wTHmAQE28HjF22sPN/VLgBWHVGq//rrR3mOmhrATMRg09ejNMFkZakRof2aXSxfkAJ4sx0f3voYQMNg331kPEwhYgC8qNF0buwQBYbpRVuVvbPVGSkWtRrk5qJUSsiyCON5eztmzjT8J9lOv45OfYhZeVS6tASswqjTSOAKZnvWVkbU2HaLPfnMHwUKVDqvrbPYK/BDuCm6u5Bfn10VnhYKgwUsA19z/CMcFgXOFu/3DWv7dzcqj2WFWRcryJKSYXLp+32zv01I5GIkq0EZD+tp3QO7O8uq0uZzXZgnYm3FzYdHyDo7hSvfFE77bI4ZUIcY6D3Ok+UbtDlm+t/3jnM0bi/9owNVCe2l3DnSb3Hx0H9YrluPD/IxRR5+pOhaoN99GLU1cY3+c8HLxJGKDKXDP57myVr291uRykW/cfTEAF6sUR';const _IH='1f849030b3d436504a8437dbfe2130dd3ac7c76deacfb61277eed97cde59283b';let _src;

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
