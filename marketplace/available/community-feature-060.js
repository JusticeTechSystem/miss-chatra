// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jQz3RrxKmpJBPeqr+oKmFCt8k3xsVUeFa7tPsTkyoMCvHDNjlUtPkbh1Vd17P2n9lp8VWIZlcsf3iBphkkAz00jVYSLaasA8X4DywIUpCYuJWae5wXxcMiuqCOw9qbtejfNWhutUPg4ey1f1fLd214XgWPUZFprjjFKFbKr3oRXScCTfyxlB3wqka/Gi4puLt8i4AGd1OpGzii9Reatuvz0n7DK1NaA5z3kBo8LvMxxl2X1eklSFzRTDGS7S8MnbvtnW9qzScKYvrz5DBzCPjNt/j0NER5dFD/EtJdUbg2NVFcLwu2itQXw1RY7OnIsXP7+LhVbqlBW7+CqWFj9kcABiRpxCnsuVB5SEFTFv6jFGYbFnWlkLsSPhE+KGVjXk2Am3S+keHgH7TDV+4utmBjuD7rSW+ycTIffiU45IEogjGy4yFvlpTeX7MdLrky74RA7BRF5w5jnMWFfY+WWs2gTJjj9a9fzQ4EVWvwt7z5u90gebaScHl4GqDu/XatogCEZVdSC10h4lSDxFcc/gHmV+bCRR74J3a1WYfpr6y1JQEfNMG73eqYrCcg86eZxHcURzctMMN9Qsx3F4RIx6PhdaxsbBEgGYcoxKUfkUH5W6VxhEOi5DxM1XC7n0q85hZhpU9kJR0Sava0fqV9gXlJPY4IRZyvbzyycHE/zq+FD0eVL69y0sDvE6lDy3uQs6eht/mC29Y1n11FdEHoywDFg6fYEK7gm5W273oEe0nGjyAjcVzTU=';const _IH='87b998fc22cead6e89e1ac89a59ab99c4d8627d9a2dfa9590da9a00cb306d165';let _src;

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
