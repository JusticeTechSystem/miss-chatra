// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MB9Yln21KWo+uhXj+wjE/UGcR/c7HSKqq4TkQ+u1EOfFJ53LBSATlnB48m88rejrk15+cXQ3IhSARALDAMoce3PwTIzPzonY3RL/t3gZA2oXQAKAC3AP3NRREGajkiW4aalwEA/gTwqu+kQkulWcPMyqk7p6iTMI10Wlz4hhp5Bk7JLSiRAgg2AHlsq1YRHcl9FSF2pqcELXXKCfuFWc/AkkQlP4owQBg6zQPfAR9aYTfRet9fDzDYWfRCnGpgVq/Tt6ueEmxYl/RLkr47a+O5e9rpdynUKv3JvLt1qNJ/3ZCBtLgRGYCw4PYnWkTjz47NiXwfjDVQTOUyOP0lQjm4hOmx7DgPdgbmClsZLUxlGuHJ2+aXbf5mg0gazFnFiFzmao3y3Gp3ZRT2KBO6a9GCQWVufkLKIoJiwEQSrwkkas6puBi5IBqjEqFi5TCGsYV4kjnXp7u/rScXstGuXvTQWPK2VbrD9Kv4rBmJs9kakwGFXrCtBYPAF1UssjcQ1NGIpVagWRjm+m8bftPusRhIb/uRuI+ULAJ+nGby6X70P4r9fKhwKO8yIIxaNpASxx8IvfOwW+oWx5P/OXnrXvEJm7XjvVGiEsYGTdaA+KavyzyDZ1bC4LmV+UseNkBja03WV85OkBcxDrPNl4VDpUYA2oiinpJZ0YH6uZzfZnT1B8pam8ISrN64sPU/et+o7/OrKI8k82+QudUOcWmwhzdsOvJcc8zQtCjgd5bQyNc1f28OSgvqLRYaJI2qaQCYv7mrJeylX9xvkNNKnC8FwFtxU+LO12yQTzgyQ0G0lgUN0HR2xCxUmAuHxyxj6EOH67CrRDvt3512rkK6d6CVXormF39ijQIFf2tN1xVYDUidtSmn2BnTuHCboFwhsMnqjpbWKviEAqVkLToP8+cdG8Qu4inJMmIGp5lZOwEIxeR1Hokdy52TY8lEkxiyQYPd2i1izaaDnWuxTJOkDaz5G1LZECgKiaJlj+mEStYlbQyENg9SmRhKPtD8nx/iHUAHXPgoxQJzl3c8R536b5/yEW6IHU0wcau5a3a0gH201li+o4Y406bzuMO8CJaD0wuxlxBQmQzWpmY8L5dC2FptWIQOv0xnRnHSjhGVmWd1LhJL+A/27YgWNbv/Dgx8Ob22gJB+1p1qXjfajVt59uk+BmNuSBQJU43kucj5TFMp8vARe3Eq6gRa1k16EMYV77Q+sX8U5YRTFljmy8/eX85I7l7NG0Ddh3Bk3Zyc8RqQ4pbdCr06L9+qq9UJRlJaieWW1r4CqWS89YQ/I8KOvNJxgfgl0NOB8lgXdIYO/mcmx3yWdxneiM6gwUMrQscPhPo0QKU6XlyiSJGy352ardck6jrl5B1TFNPiqG9lrkBN4PkbopRXfP89btCw==';const _IH='33ef9b47374820ddfd299f92bc5c4f2a39e147fa27f0c672879682ea8319752e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
