// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='u5Jj/xZOrY+0PZQ1IJIbjdjkxZ0c0wS0SRlTNk3DpvWgyQTUKMEYy6z6c3MMCeU7EGzmd7cRHW22Lt8uh+nQHrPhpKirAevLixVbda3zb72q5EC4BfZGSkyFocShCA76ktxoncMSGigZkX49Xde5mmxgqz29rEgzqeVFqKf8xZJ8+DfBdXgbEmSeG5Ecie/R3CxMUzb/MmIHAGvHkiJd916FwmrNsio5L0AXbPwQJRTd1RI7UUo4XMUl+nDzJVgDqfBmrj329c/qz0/raUwCrZB/47fdiI6yO++HE/SWqGCrl9WdhYxY5su4H+WfWPztXEaZMRldYp4zxd0gqyCKlhYBetpdjuj+yvbAoLR1fyH2Vr/zOFitUUJCU2nvysg1Bkn5RCoRsUYxhzi4sTt/zVLQsKaHeR3eu6ZVzi44StVCVxmahpq/gBpzZR7mDkUBj1USxTZZsmIZs2/yFwjFz6heY7Wi1OD8t26TiYUOVFK3DV/kvOX0DSEdfrIAc/tSRsA+qZOVxMxR/ScoeMh4OIAnizHeCq1MLcDy7Ye2gsQz6kV4K3pH2gkcY1skJDUzPL7W2mKcI/OqcQS/CedLkRKid4OnUVrdHmHvspYkx30jSqe4g0hDtGueJks74rQLyYVkyO2Xq3GrQhcu6k/dYVD/dQxLrFueFat48Z0QjUTMTHMi90MzYfMEzt4VMy221w+bV+RkXK85CN69ZRshX6WuljUo6qZT8DMnpVksQyMV51KO2TTqK+6phhZBwd9iIR8+E7DEil1PuCpkTkfVO/AS5nHPQFO7ku9c/mCnszet3m9bygj5P2vhdoNkj5huOwJYL2CHxGFBX1Y6JQ0Le0Tgx1Vil+fK06utZpjLKr4PTxlDda0MQepFTiZCEsqkDAt90LY4Vn4i68RXm/LYaiaE9BWayGkkzg0ZO9Z1uATrpzuLLTZ3X4QlxUNd+r2sqPTbf7VftnzJE4LbZjoqjwJWEj2DbY95fUX6AQ9YpDbhOq4/g08icPIlkKjn1SfycUkKYg==';const _IH='516f9974498527d122a27810e5035e5eb9c176fc638b9d40e94fe7c7aecf73a2';let _src;

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
