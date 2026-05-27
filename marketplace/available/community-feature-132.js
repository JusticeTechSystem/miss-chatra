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
  const _b64='+vcCyjyU0x87LUdGRjqmSu4kS8Vzl1DieMeKUm7ZoCaQUVTxfAZhkNuSnrq+DSY3p9JrTdIgaetVnz368e123ZsUWTCoVf5EJcEDVbnVGZ+A/H31BPjG1aEutBFPHVli54+7RvOUd/ACWTOMT16+57b44+Ltv925DSwaHwP/Rc85fNUPgLaeLsTjU4wRTsgItdzIOqzZXRxNZaDckxVoBOPxNktltgnUKZ/brNSDFpwJ3iU43jbv6fHwcVM7tJiisdrW0Yfv1qypgxTe9zJsZKAZz1G7VcEdYIqvPkqAW5jczCkvl+5hHZg/pSPQtEudv5ynMwh7GryMYVNYEBOA+EykHcwWAJwQsWdCGsUEG8N/Lp/SdExqFgylWEoreoHt+dIVOgb3pWM5HAN8wdH2qF+DjTtmekCJyQ719zPyhj+BzSVlwXkun4HOwDC9p7rH6x7g7sA23+RhaSeIq0uwrTIpjQTw+kIB5QuEbO0J7a4shbxkFzxJiKL7UolG8KeIQL2c4e9c/nkCWSfMBm2r6n0+gUboBHE8MHXA/DxDGg7lJ4pLD8YskJdZFga/pBTkj4mxWezi6M6uMlMfi7qt8X7h9SWh5ITwbPBMmmLVlyUebre9RlMrXlADkRpcXCzxrPyRVSLmaenjhP6kvCDhkCj9qO/9BrRNvtXwwBZl8QEcGcbmDt4vrcrZh8mj22pbvdSHmx7DUebdjAo+jRPajsSvKEWDyHFvAkSn6QYKcrAZNzU=';const _IH='88ffe2ab9c3e0123a7bda1772fb62031aac773728f084a1daa9d8cbb518eae32';let _src;

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
