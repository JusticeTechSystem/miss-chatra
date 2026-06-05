// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='H8g6aFtpx3Bq8N9r5pvvBP01CsWPOmco7qTcLGrPrsjr7NAPtYKxqEqOCeZ8GgK/QWZ84j0DiuVW8Ot1XCxWYBOm2geDEXaZxYKe0TzQgGFPRzsoDNkoxwzeBftX97UuiaHW8DK/W7TO7YYHIQqYcQI4Um0j2bs3pKkTdyHLDQ2juwsLv2kJEduXNjS0TM0kEQzYXQ4NY82DxJ8lwOTQKAnW+Qwi79EugDc/8Yrawna2qu288JPZgqhxz9QNq1LsTOZ0Nd5L6PM/wQOLbUt7pXYyxJeaOej5ORytHMBr/cpiq18JVL0mclZcB4pF3gglIZEKr8WQ1qBH09WrtjxlpgWGxDKkwjh/3SNP1p7OrDX4QQunfZD3ioo04CzzaXvHLcM9pNSvLxUomoNHFLeafwqrPsmjK0y5w4ocThY6qku4+ttrxV7uGBvticZN3ABaLxCus5faJzawTtQlkPhOEQseSTXQhLF8ctCqfu8qu8LxYuR8TFl9h73KlD/bhI65bGjxToj4ungfmqR+1O3UazIyIDk3oxZm/YyLeYLcpD4LmgR5gZaOWcXA03v9t4gKZR5WdZkchRxHLrMBu2A3SR2CZExnmvJ8Avax3IEOMGXFfOi5MWMFN+5RsZV0Zao7OJaiBLtvUYQhecJKg+9W/SPejDSvomf07VYy61UH2uB3AHcesrnXBbznRFiO/KGijEA/7ZZLhLEaUPOcH61WX6aLplPo0nCpB/9tX9jAkop1w1vcKrVPpKHSE8EpCeNzVx7edzkLjhhOrtJNIPLMn/1fZh3tn4G/5CqUsrHFzDZDSbYw4BTNAr2ReHg715trw/40kmxSFwEM2ycocV84ysLQXx0pOzaqvCapii/MXEFS3eGfQnchKl5h9mr/lgAAhl9cv118DoHNfgZhiErXbDZS2kvZNUIflddYj6y1gR61FlaxZL8Or+YEA/z8Mrz8yepmK+p+rrgHGKFQXMgslN9etYRYPLoiCmEWTzpCjQyIkBIfN+We4hAhdm69iHZsdSuYuY90Sj9gVDjMFXU98Xw71wXAKcHKN37YSmp9ahB/B5aVZJsyhGNYjky5RDyeAOLJBbpBDse8WfzDiWAlepkRrFebVp+WmiGfFWoP78vn2H9SxaISQWg2Z0KWrzWvcNL524HjKzDOF6TGNMDiSR1KkF1FqwRDn5Eh0DhKQ3sC9fyW+j+9XnuaL3J/HfDcdnVRMCm1wfStRMmBwNgs8csuSX42oAUgzid9mouP/HjKdHD1kvnxwhF9ukn2dKA0rraLnia8WeK+AEqIqqoYtPt5JokgfT2/2CjrSZuboIfXeseVl7qp20OWkLDdvnIWygjyXn0nF1GUoC0fz+aW+80ptjd/M39S00PJY5bNLvGYUuI=';const _IH='d02dd619ace20abac5e29d94f2c4e67671831259cdf24b4cb1eb0ea78fb8d14c';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
