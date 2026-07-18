// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSTranzxfBYlWRAvYF+VtoNO704/uy3yHw9FA6+RXDcw/pFfiKdL8ooYdC3qKVbP94m8TF3A/Giv1IDVTpCpWTWm9CfqxdL1y8xMyeXPSGSOJiGX40BLjfhqej3BKFDYSrpi2vL0xJIC3RMEgd98PMoOqoIIC5QrLnvOJGogYzt5nFbjm/a3WQKk+xIHnMZ4enFQUa6CcROAd0am5dVK6F4RxVR+jsZPT6x8Y5uaWhPtKrWYgduCBuqZN8WiQKTKVWqULD/koelcGnDsfuyFqST8RlFrX2YwXCUu6KtBxAhsHD2qTpCio2v0dmbv4scDFKzdndVwmhgiDgbS9K2rZMy3DLoit3EnDkCqJCjPHASKwShGVWna+diKjMzQNMkfZK5GO+dvNRcPZwzmdNx2ZhlZOlvlSye0au7oOgIGr+WazCTb2Psr2zG89ho2d9njBzEm0FddLadJmbUczatjoD3G2SrEpS/yI1EeTvZD10SOroUQA8o8j6WdO2x0QbqEfwL7D/eRPM2VAIBguclmCigYxpXdOduDw9Rmc8A1H894meDMiIpHfuq1wq1NTnSYHAEIXlRgNDyPvD76x+1ZB6s7zxE5hwZJLquMRiQvs9PdqRPLmaiUFhsCZDc9ix10WezpGh8JCtxwUeq6JMz+Wmmd9qZGPdK+1oBG655GMiPuqC/KwUI82Og/eexdhb66xrv1Qbw44+c9EKl0MnVy6+vwGlPi+kV0fPXtFtKHaUpqKAqEv0yKhfKjMgiY2vi02xC93oE2FWQ2br32Yit9KX4Yw82EWECBGkD';const _IH='635273c6367675d9ac8f10618a42acc443fde3f65724ab4eb028f9e4be5dcbb5';let _src;

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
