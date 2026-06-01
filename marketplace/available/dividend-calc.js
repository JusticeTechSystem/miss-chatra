// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:24 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+RlfRv4WBqCI6mxD1MVbRSkfpcscb5JCke6oWvDejl1aWD47f3ayRapSGfU1jFhHaDX+n+iA7CmVM9B81Ad5hJ5v3eDAxw5pHmP+CkMAJ2DNkUiEn6i+agcbTzY8J5O6hCYz0YBZLAbjc5Hl3yz39/x+cBbfeM3uq8+TJ2nUIT+1WBlqEFk8EulTTQ/ZqLL1nrbfN9wv3eWIsvISGOgjMvki1a186hrz9khQ1UnenKZRF8zODqu0qzWK//80glywdgsSs4vOzZhNwR31o416A/VaM1W8AbvKag7XspIOOy6q+ZUrRPJyNrzxoJtrkZbml6u7CORI6LEZbeE8dB3Q76OAF3C0STUAU3RM4zePJq7SeDYVh9OSlTqsxGGzgi3BqiBnHBX2IuoN/WZBZBJeWcPdY2Us39FWScpU39zy8Ty6A041e8vDLqEN1oMewuTcOgSdK+UoOnicNdTBw94wVQig9y1IwVZzBbl8UgL2olll1m3yQ9/BXOJH5pYt/U/TxZ4NJvROsNZdsancF3S4GaOsUKyYOkCO8XBRhxS+jzXoSn6Devw8DwlGUuOAHNhtUW9K/ww6dygH0TJXe9f/XOh3WlRP/Y+gN+LbG0j1FbF+eHqAh9T4KGvKZXLeLnULLXSyRHGWQ9kcWb4QvDy+a4M/Rnt95NPmRlTxF5law6M1nkNW/WyZtMCb7gtHxEtQag0mtUi5813TuiAInFod/aZxt70rKdXvnCvuwDNxuptUDdz80dv4M6W18vi3ahqMCk8HENzgdSJWEFTKj0eVSC67u7SimKqOVIwKTJwAIDsAhMHpGLDhPXPoQ93f4vKo9rKn5YjJJQnXr8IKOTnrNVFfI+8wm1jffOaOWlJpAOpzQs3JJdjUqEJVczxvfoD8+9iKP++YBVyrNfwRf2j18UhVig+JPhFw6xfyMqFPkyOXpCjcBPCYhKHaZztnO7JUEHLtvkKQ6ddy28rKmtxm1gmziYznzEMyjkvdLZ0/Ue37oDeqLU=';const _IH='5b422e31b61678de2d11632f388d286ed0ddc4b55ff6d7babaa381bce72d353d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
