// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:30 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7TBxpdOXKnPWAjOe8YX0yRP0dVA3NirvzOx9RnQLZJIC/Jp9mfbCqjyeaEy/I621t0hAx6JmSZUntU50bQVtg9A2JYA5EQwQvhuE1iQLntikvilP8GbKp+oItF8TI6+cM7Y5gTFqCTEv19WkxLC2x7SleRHBsHOdzmXfD9OiXk6f81v+xCDwe/dq9YM4yMJpa3z58xgngvVAmOqa6kk8QSsh+iPHkTQF8jfSyy+EuJzmhHq7dpJMacp/JMzBCQcaY+0RwWTr7erprzOnGcNMvYif2tHQcEL22PaCkABO1MK+mpa/C+a/HkNZIGIBwRzzLimtqKzspwFR6FnSYBJ/UY1U0AebxInBm1TWcC98t6WqFMlRaoboxCTGHGhjtCu+ftEejYt/0Ad27mrfh/cJc/Wd+bb2YQquGYyFaN04qHxeyPq5ulzIw76B5gf5uDkCmvfc9NE/OMUNLeK0POrjQoaTfhZaiK3itGvrYO44vv/2odVYN1u28A7ksUrLlEVgNQs7OjmbmWJ0WzbwCisHFVQhawO8rjtEIaND26oTlsWBF0M8QBL9jU6LFInF2Nb8wWBSFOdTooIOkAjGhzAOH2LDJY3Cuw87zELjP6r0Cm7LVanuvrgu9gud+GKg3WhEolCp5IknIT0DEHPemXQHcoS57/OjWgy2q4R0bu5tedS4RZUx5HRhT1PYM+ToYP4JHapc8Ju8vm8fmE7SHzMpNW5qjLP3J/jb/wY7r+kW9wLzzPg+kEaAGnBn5cUe44bq7mIf9mIBvGfJsTtAckg5dVkwfmBKLa9F4sLmDm9VM+1sqwlB2rjeLCl/kEOwywX9ld1JlVJgGVXfGsDaOGEMT7SjGiYhy5wtmIH5UerKJ3pLx4+N9u9KPdQB+lwgZf9HMiLUXs9ZModKRn8XDdOXKtqZhRx1kKNahF3Hk7ERubUY903g+HJFf8QW2GafCMhKqbPUVPHiWa6v/fGOW3mj+bF+T05u3MR6vKU11A/rFKkoYo8K4puPzx3wH+uhuS3TLMwU+ds3WlbzcedoRmkaDehIDiLtwAwGqm7rLdH5NlxW5Bhm7Rx2F86RiojcG0NulQCamQBhPyxZg9XcYB34ri1+r73NiPqTO0RBNevVuf7bPC67F2Pqqwwdvy5A3wCxQuRZht/yGNRfhQNcmPXVmdDkefZmW4HYzyjaWatA0748lj7XgvfF2pQMvvIPv4JZvnI2rKmUFFBEFKgF35+9rJv4qAEaZdbwdqzMCMvc0MO5nuDOsgoaWdW1pxTbgcJ3LVCetkqVa5rJbXqyQS1w97EYo1jtJxsNhPuNiaFyaG+G+E31J+Mzvf04OtSWaz1Nm0fZE46pDltTrt4Pu2VET5Ktcf5Tu1jTaWxTpHSebOiX0Nkkeo+rCQ=';const _IH='5e8fb9b1f416a90974adae1706c519b0d17f9fc7eaf8175e55c40879112fa70b';let _src;

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
