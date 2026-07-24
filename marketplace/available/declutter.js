// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQWKlDa0SHZ5ycbqp/FTgwX+lszXdAg/QTA9gRKDJmVFflnnUoGbDKEROVhhCRlACkyugMGq6lOtMR8SaDMMBV6ra6yCNSyCPYbmrIjsyvHjWwEseEvvmCgQcxtRxpHbyozl4M9/KRZ+0XoLesNR2cWYEE2MpTsf8SxTze7U9sGi24a9l/qpx6IUGN4ATP+4Eotvc6uOr/CY8EbEXQrJNjYUljgnV2cr8N+AHAeXrIaS/EVu1gdD7Xjnr8tU331hcdNZN44UXUuUsOxnlRuJJ/fNNrp44GPQqrG329T2PbW18zXpGZKCz+BHSnz5DngexVbDS42LuiaRU2htdxLdlCNMtwsL4vlb2HF2dFIWamuB1CGGldLsZGJjI01UGZ2tLD+inPraWxik1z7jFTnlVLe+BC6IZiIDpEuK6FiUaztCoL1bSA95N92+MKavwPzmuHN1sTLGL7u9qTAV8EesUM8wPcy4Q3aRG4WqPLQ5zpfis6MyWbzLSHQdakZpnmxplmvHsUGyw2PiqoitSK5xrQwYCmVDJbY4bkS/LuxyhYyO1tMu06cxcMIQwthrb+AK7gYQj2ViBVkdQSpm6Hfecn4sfMArvHSEW3g8FYQkJCBKpwlXmWMw7L6yn8UCXOr0s617Q1jjcl4Et/FdMrMADTgA5CbBqFwwTIAoqdc1pbcUwOm6LasBBvyvVyiOZp+ApZCEgLSydFyMAkWJtIlyDTZauSu/iySa4K6ozmNdFyyzbomfxUsbG7Ekid1ClUPL5FpUM+5rBQKdshWRNNPuiSyxAdYn/PTMABThginvvsLjxHArwuXNsuzLuMIYfjEmgTyA9AeqnTopNb7k5xabN0s0YJ9WK0U5Bk7f/g0ib/wq4F+fwWUSShyga16TgMwo8kF1DYdFUpbYTpXBAPRmGPuVOka9orPkaeRlpMmChE9o8nq+fl2S+OdIxSvmJ+UT81YWHHPEUFLGSzK2NUh/zPynddGyEsyp3pmmMRrX35KNievGMK7tFETUxiNpjKEt3GoyDduGdvKHadSd+ECpb/izfSo3+hkzNS6Pj66pmjUvmlV0HzCQbyCyuiOW0fmlCc2N20jgeXGLwsnGprCIafJl0h3lLJA/JTMLL1qoELrugaOzF1PM71Unq1d3nvkUOIW9oVQkAZg+46G49Dws0mscvuQluZCqATcBsAuzGmsdY/C0CmrI28+L5vevm7MBsewfj3V7Ffqtw==';const _IH='eb661d6fc5a257fd1c7f20ca6d5eeb15021be1a70fe49508965c88dc281861f1';let _src;

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
