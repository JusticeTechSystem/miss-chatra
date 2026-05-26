// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/1aARj3huj5Zrolp9YIGae+jxLl2ypbfu5hqb3Fyj0OzFGfLGH7ubZbHFU4dFTpWFTF7q1X1srDDBE7EHoFv88uW8eBP/zJ3clVN+YPtFu/q4GXX+qLXNgYmVtFGbwQ/7lTox/2QBP4N1QSMnyy2XMVx8JWhVTfbm2dFenrLlcTh1Tm4+NOxF5iaSa8VQjje760JR05Q9OPO8fYGh7jg6kiLKcdrBPphfcbyaCgr432dHpFiqfDd8cOXRpbvapBq/IF3aiWFl9XtlvmQwtbynaoNrsHuA6TIQ6koeCOMoEuRjORXIbZenPxVQcEms4dynzYjojhgLdDjtfgeJqd6ZzqkgNG8LyZl0vJZkYqtFEHJarLkCqWc/KqR19mvBLXbjvpaBMH1CWDVhs+HdWhKKx2dNqYCKV9WAyaRjLgmujjqr+qCsiL2H/E8OVtOCugti+NlUcbukhDkdrmNclLziBlyC7C2YRnjDjzHtb/Xwe21rETMTCU/pdLL26lGfm1hyYtxFyhJTB7BY/ShEjyigVWgpr77dHQAx1EdH/6KxZAAenVzL6Xc8TxWHQMX13s9LBkxIUHjYhDafGiTk+eVe62QuK48xR6MuFtjRBeeaRH7HmrHnPHKbZP2atJXQ+7I8DUsrSQpgtKv2Ah+cKhg+ux3HnWpQWVpna/AflsQVg8e2fNOD82luMmDEOkn/b8BUtZ9WDIduJnrBhJ9pCWygZ1HS8BrU20DUBdPwSA8kXta/AWh5hEi6l9/Yp+FfRMeuet1D9jEG62GLx7ZUypceDOyOIHGM0XjnLnkdFE8JRAo5f86KGJTOjbazJtF6fys2HgaIqxByDQBHx3/8j8wMO2cFwmdR8ZdccB7PVDPqZEuzxD52jz3s62fP42mCsnHhY6pGh6SiMoCFiRKvwjbSHeYIK+kaOZ45xNNoyNowd/n3G1DQW0KX8nVG4BwJ/58fA0SzwNfu9S+GRGblHkjX8zsYGGhs46Gl3zbqg==';const _IH='aafc77eacc7ee0a74a4a8be938881e72f293d427efe78199ec4be75957716d00';let _src;

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
