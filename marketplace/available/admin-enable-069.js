// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='v95Lk+rm0UsR8oXsZnAh4iRCvsGa6ywh8iCjwQUPenaggmfeKVoIjPMMgyIeVKce+NC+yVX558DTcL/sYoKpQTV8nHaaoRwPBjeFOvJrq2gKD6XMGJPQ1mVkkqu32785IrQBDDsWCV/Y84yUNdmaA0qnkrYW5wn+JCoH3oeELdaoeQDQ2r9cbiUCCaSuxUQM6CeD27aEF3h46v5b75FxMa3pusc0S4/lc0YGRy/AkG/OnBijFdqrlEA74lcTAsdUrI5PjW7BsmDB1lOFztiTxWkmrWV4PhhC02h9yQudSYIhkR+DBbtxCDzCTbxjrI28w5TWNv0VOPD5l6GIEBx/ykxQ4nwuQ41jWJrDvnh2phudSZqCjMrDR5fzrgY7355fXpjfuEnnhkNsaeW1UayFZ9NYxlfwliusnr0EIFsQXlTfrq5JzEZJuC9mQQATOpW0ziHtMA4pE0PA9R4x5igSoajq/M0KyJJQTm2TJdzlBRqZI3kyWcLsAAgGAnd7U0dXkk1gbdxxxZlOzy9P71eoO7m5vIgWKb0ySsnNW9LvMVPxtDG5XrSneISHVHfivcbQHcFqKybeWwPptD+rlReDoKBrePptTmjytr9h4S32V4Rmodr1T+8fRWFQdTnTGFy4NwMhGb7v+Mgj/gi8Qb59rf/m+w2GWTrvTFNPQaR7uHWxsn75Jh8idtH5BBERXwgwrB12Ox9ZVTQBhnkUHrQlMKwc7YMvBf5hMF987cslbxLDUzCTb+XJe/DZzZd6WEHBJcg5swvPRrrWQYZpXQWq05fkfaXwxwG3JAXrV7C3vwqG7EvjH3PY76P4xATSUlCoKXsXyzrWUTbvtt0MKupyf4FJ9IVbqGBTBsGkuEEP+AVNqDkXMitJszM8k5ugW66BD2py5xw4ok+gs57KBdRSDkPQ2wPb03DPTdx43/Tj5MJjaGxC7MFsM8j6M7HALtcdMiB551KpF/3NbPwvKFZwSXSk8UYnWvPvog63xq9CKJbhXrjEYGJRylGWvpPH';const _IH='b66b48bf0b887c9fab45413849bf8eada5011059d2d9f680f5a072b0dd15d385';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
