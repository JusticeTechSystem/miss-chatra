// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ECefs7v/AGDZTuUV+lRLouFgthY2xZ+aljIZDQwPKN513f2f0kH1SY6XhIGc6dXkzlUekpIFeUVB+X0pO2jqju/ALa5f7TG0nC/wHDKU0WqG7Clt5ZO8OHdnCq1ZZDLobVZWU661R2epKKzqPxcT53Y8J4ZsMj3AnsS7IBMBaWv3SRvvDcXg/njyRjOsLwT6xHU1hK/zeQb38mBNNGCBCZmUqGo7CRW5Ci2GLL3ATds2snu5AKBv2eYjF7X7oK8c9AdzKFz4COE61GkcetpIB+wEyTGiOkULPjX+VMJ+YlnJENfmSQhsEHsuRwSm9GTjoG7FMgUhpO/IPeErOYxd7EdwO2r2Br7QmhxgB2ty7Uch2ZibdCPpheVU02ldcpHPECMpqiDKt/ZCCJhyLkxKaPqyhQSHjtaeCxEt2PIqq55HWQmNYWpcJKaaECW+EbGtLTuQatZ3ilKhdHMcihEPJelY+K6+6/UXA8bGaEetgduoMXE6wjIpMc2xgOlhc8YuOMX/3OXzZ1OMkGFCjPgRp6HwlE5kxiefHOmCYlXU2SV1+mg5iqjVHHROlIIQ1pNtvd4OPUICqLuUtKiU8I3PJ/zDeOpODXqfnKWSI61k2qHlfA0EkDzAVQDokqW3mBphGa3LnrJtSdfCD9b5+OpU+9MI98BKxTPDRvX9oKIffkOV7r+FOz3Htca/Fa1yWGgX+7f7r89hmxpkvMqhwhS7nH90zTXRwoo+dA9LPa4FfPtm2g==';const _IH='07494d8185a81efc55bfbab8401c3b65012d22cc88c70801302194f62ad899e3';let _src;

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
