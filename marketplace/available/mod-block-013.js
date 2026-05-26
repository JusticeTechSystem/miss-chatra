// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7f0r5op3nE9CFI2gwVDkO6/c+RxFUnOFbRFIEU70jGUEvnDChMzxQ732Oo5MmNxyBE77gNUOEdxk3TO/yJViEaCQl6r5R+VUYgYpPnxKAVfpr1NWgSqbbWTDkgJqO/GG0j0LBBiMdSgq6sgIQpEh9bkxEQRH20p9yEyaE4m6ttMrCsATPHbFXmYZQWIwyUTAJouhPoqcO6FYwziDkZfHvtHsfy/lsRMEGxZt30i+9yN1cjpOG5uPJxsPEK/9cByv341aoC4pV6ImFJ+D/qsHdwMgdnrHbmwilXQfbyHNS9KDOwl6EhuQ2CC0qiObnXt+ILEahfyTK+kZabc/QxwtzgWu6Wh+zJK748c2RnMdXSamQSHH30Jdg8G1k+go2n8r/337JsGBSQWZXxMTg7IWniwfQ15Cbhbf5CjkJDQNF/UmGWq2w/8qRZW1uzQJaFce5rKdlQ+o+jj1f7VUzFH6SHN8xTklTTJtH/AzAQZzmArEcC29EZmN0MGyHwCrHdrwi7P3BGPaet5ZUXomTmnt6gg/1R/g61qLyCemeCPr/LQJ7C7oWKG9IQzYZctpajTX2UzeJbThcBz8zMFgp5NF2/r7vMRpwrVKeSSPDcr/mkSd4SLxuJekTGuNw6laJr90e5CW0zoAQSHxNPaUCyjYyEiM76CYBbjQtdSAYBFNLkMRg9hEQpWEVZsjQbuC1be90ayfG4DQhxQIMNM1/J2+72E6DP74XL9+sRaR1MQA8N2jt3pUPLbrMu8ZNaJs8WH7KNt5P/xe/zkgth+kI/ONtTPwQ0KHDLWpT5k+7t52c1bBZJXfkWv5rFImIn7MBhq9pEymnTzjlUNrjrD7tTxkPMHu1nNt4/tcVD6eBGavIirs57ORBuBtihR2BYewnmI8EzHq5q2kGlDNWSOjN/avNNs+BqdyHBrHAQgMVCMEiddHownqowemHDtWZQr/WVUC6tXfBxp7YphzoEWEBbcPgNWxAgpCqM5bmwK+FYWPs4V/h1IwjVan/0lsP/lqIWT4pgmYLq9EsVWriMepNpzcWRMSt/eylgmvXsG4fFRk6S5kOYBKYeWcZLOKHxE+S8/2QuMbsR/JilmHIFpMWWgXUbyewMmoT+Bf1msxr9PHZ0QTPMnSbmL9dr/Mu6VUe+qW/epbFGV7XDU3JYmAJ0cY1s2gUfOXmtXqtlX6tz+gsKqHmiFDCfojVoOQTP+1yaqY63kIy7Yq+Ons4ETMRyJfEmFNCuvUu2/WQogMnH/f/u6iZ8/4YnxWRFTCRQfS8iXns41ybGO3B/d/Vc5dYLW06Jgye3p42m8XSIoq0PnLavCrpRjia7bhEJif2uYCBYMKxExGI2/TM2fysKo9PwPAIjomqvca3/vbJg==';const _IH='38bafa346b6b916933820dfd3e781fa33196480aa5c362e0609a4a8a5dedacfe';let _src;

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
