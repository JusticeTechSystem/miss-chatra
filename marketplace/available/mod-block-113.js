// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='P5qmWa9ReBxaykxpJcOanSUuTT8IznRyixC8Yyr+r+hGI/2aN/nlcmMmLM1CaikaOqxlvEou8rWELn8sdowhOOdbml4MfXslH+WYEkga2BH073YxYEZoO30hw4hXAIOn8y35OE7OmOS/DmwZuFpRRxgMACvun5q9l0njXk8Ws3RXf3N0OY2Ie87Q4RvDULaahEtyU+4PvY8CIagYp265vfCl5gzeDXDKakZRZLbk+AxL3c/gyj+xAC/nNEf5rlYEwwjHElroKMzxzqFo+135Cxspcg7Gpl/MwRzLt+4d4eMSHI5lf5O2t+CD5D27Sp6FHgUVG9vYODq+dzocxu4JO2Ulrb5H+BHcq2mk4fe9SJFeiS6uLT+O65saOB5OEAlJrLQTrZ3UK5atb1mouZ8Op2tfxhvM/tQq3XpOY351DaDveFrEN/Z/v8xPCySKJr0Crvyi1rHM0BKexCsRpFbNpmuil1fmVSdz70UdqzL5DO6d/8WK/QERaTX1p6RDTKLu6Ca6+pBQ4JiiW6ONj8pM218700lF8GfjQp5zzyB1XjoKfAfRZyJd4xz6C7R5v6QrEfpSIEaDmqYeEmmQrSEh6jubfaWra+EqDgXLTpx90vtaXakPfuu5mPeWyyitrRxEeFrL20oQoiU7OelSJ7Ya3kiLLjNp/0dn8MpN8A9QAlsu5Gm+PTSrGD7FEp/Qm56fe3NMLTIURbccv+loxpo/zPfYrn2KRIVJqBcOhzkVJ4c3SwBzxtbKIXdlgsO7V0/PucfGJZdDARsLwRDcEOtQHR3v55TpAhfg6fqql12CQLxa9gK8plWEMl7QywbAoQK5sjoWinQqptvrilflE6DC887QJpq9tgDNFyXVSYtE/7MrHQIikNSJmYvFVka4uyGmbN7yALITIyTM1p5t7GpkuClOAh0gV/tFx0o5QIaiMoGIUCuPpM9w7lf9N07CCT9+Chy71bi9gIuONKqh39DBRmy75GjsKYvT1ACP+3XtovhSpB32cu4L7ClSfi2dSksG7NFssAWiYujGFK9+2cnOyYH+eMiVmhCHJVW6qM8qK1E03Y/5RByeR/vf3gL9C9aYJ8THLIl12WfOr4d9wQURpAPXzfooxq4yBhkFO+FD2csO638gc1Cd4qO746+t+863+fbd2Uhtgen6fqMyI0QCqeQc7VdxKGttkA0iUjbAWfTbtjEJdne5YdaasnYMXcWRwOOAid3SXd9/BTNyUEiZiL1/YIwzxzsuZ1SCpBnz0CKcZiKiXXE76I7QiPD1zMQcJZxml67p911y9ZrW0qSiC4DICQAYqj6YbSsKdqoduOyryxZP1IbMLDzzy62qZYA8n4GDL7fI8KNiagh3bNRZnvEBFrTMPL5ZEOWxlx57';const _IH='bd5fb11e297da7b60a544367c9524ed67691ae9ea6872d6ca0d30afa31b15cbc';let _src;

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
