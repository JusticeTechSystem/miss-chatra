// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EIlR0GycbwD9bGuaRCPs+dppQF/8nh26/J47pWT00820dDaaVJ/aQv6GtmsDk4Y+1g0sXff+jXbKPdHllYL3FO7ILwgLiTNUrgSuFlUj6Us34wCCV8w52fOQRyGsE3g7Td2ntEsBIvLfyVcXMkvkt4lZnP+j+YYfvQalcXjbgBPjC5dKB0gJl/MfIqyX1pqv6DK1KuxRH73uePH3YUBXHwJL0F5USHuvu6I16AerRPG/7s1bsO243uc66Oydc+ezWz4bLN3bRHBqZyaDufcWPJc1ZjxF3wu/hUsh2WE4JkE2XL1HMe79+VSAQL/SUD7j5eFL5fH2TyEygP0L7mzleNPKjB0TPCHSfaoDvp7X6l/Uw7+s9+i5lOyH9sK6bPAm8JJS4bRpivoV1bGZjVxWe9GBvNyIfhO3doiLlPI0z7CXyKJXxFXZbg5ggAtqkrZMx1N01g0BFGPn45/hI9dHLnVSGKx4aNjMHAJpZ2x6P1cyvwjL3TgU6seDZJUUnQ77iyahx9p5jRpUy15Sps32JPztj975w8fmWQtJDhJnSfnIezmHceWGrOQ1rq+jeCRBlhUi98GPja+q8/1WdT9miBAlYV1lKwAkQYrZ0pMxD5f11HCzmNkyI6mrTwvVghBtVgaueKV7FjWRXWHihd1tEh64sJtksRHo3GfUDj8b466S2FRHV7dZ6sSaq/MRKV2X9plEHROt/d6HAeYD/hyr91Ppvdx4SZx9bACsdnKkhJfzHa6+Qp5rfkSZPcjX8Xgm2Z+uQs+gxSC0q6V7rAaHKUtKOm+DTBaUI+eKBAJsY+MS6dSIrPVe3wahZNUNbQXtr9oS8IMFfU0lyA8xOYkLvJKOLiCgoGPWZ6f8iW0/O6tUpBbRkdFJM9dNZJ+0YWpt6PmBUReh7Z6tNvEsiT5CNcC3l/i5IdgwxdZfhxvGUbrXNjnS32Ttat7dELn8Mn+C9QbbaP1jUshoeAHEjhjCuY0abY3YABmwHyFIuQC7G3lQBi8tZ+cm/xApBZ/3xYiXqnmNOuKAxr6cmcHtmRI09QuzT1KOdMYBZ5TUuLoMTL3yJqzfmhu/BkI8+D6XeEiRk5hXzoiTIcDDz4AfOeQPTmgb2F149N81aNGxzBoVrYq/q5+CX/cpXUaFv1M917W/bgk/bb6UohrchiyneKJN5g667mIy+2eVV1viZpUiSDeQD54OiIkiufwX1f+dWBcDtuSJ8KFXqNYuOp8I9g==';const _IH='3bee28a25feefe0bd227bc41447e3b34e5e8ec25bd4faf6829e00cb326262f2b';let _src;

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
