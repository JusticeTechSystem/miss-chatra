// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LCUqgghfmuFG/0dSsw6fltGz9idOIiWDveosIWaFQ/oxeQ6rrpHl8uLc/MeBMTCpmwy8lPMcAb+mz77VgmW+zcKa8gMDImmcL2OfpxyimbSdOr0L88Mg8/QVo0hx81nr21XGy4mVqY/+BT2Pwzz3RqnWPVMcTlx9/gDgTUkrT3N/qgP8QKOJ/G0pmLQ2/SIELtFCKBN67gE7Werboq+Uo6v83FMqRy3VkOHdCs77CPPez8gr+kY7XmctagkV+LkmzcwjmwAxaZBYOEbh/AutF2VWRm+QthRjPT6FzK458Vw8nuFU6X7kBzEXafM8WxT5uINYmq5E8YtR/sJj4G9xoN1fPcqZWSa5AK38KptI6MM/FP4q9elsqlPFhQah0h93O8wk+NewaG1xXCgHlsJOtiIQo5BDYsjk09WWQSeAexjkaKF+rnOhD3n6XQkT7W7A6Wb09sH4225VWuVTKCoeHFZH9ThBLlePlDLkBT6aA6/Mw1k=';const _IH='9e5c57d548ad7013fb06090651ec8dae337124cfafb4f1b64ae2c389f22996ac';let _src;

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
