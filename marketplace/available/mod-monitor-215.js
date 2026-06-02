// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zJwu2Y30fpjjl+tMJmj4ERQf31HrspBDYl2mynko7c+GbAgK/d33sdtmfxM04122ik0p0omU9gDp8pIZyDuJW9i8N7UgEFFRxCTiqb4Rm7b3l44LFdcVJLcq4XwiTHS+/koWJjIWa3mjaabguglIjYc5XHAmb22Jq5KpAnZIHtA0WBIibdb4XC0QtfL0QDJnSeyi+FIpmSCGWLa5bxCFKVvR2KEvWSUzy9iRm45YYbn++wDz/8KjvogtrTvRnJ4j7g0HlPSw8WcCTny08fZhIX55//eo4c8f3EnmDZUABUGpxz4ceo+XZfaztD+PL4EElxtt8iutpGJJMfgnhNfV5PrviEGn2MPl/xpflmRAWs/flmL7ePUFbLgFPOL1MqUPOhk/KCRM0PqY3SEVnHMtgTD97ODrRvsnnXNzfkjEBeV7wrKY3sL2KVX3silIhtISVfHt892uhZGJ4tjHob9I9WDRKNkfcqTk5JESzNSA6ufiFPdprNM6Ncri8F7/3IfFsg3GuGsKGhtk+YzEv/amJmxqDcE8emLywPVyFVTzHwElf6gUDJmWzkuHN+4JFGh3d98TttvQ2sHv95XtuyzbjrwntaTKKSkuMurzXIA0dvPbk4pjWey0HF8vekQqLbKgLeHdusafG8TZVUyqdEzWvODMYiy/ZSBftOot02TnN+ZBFs/yjySM7kS0L0SKnQzKrFQNs512GeNJh9BNnknlv1CkRPV6EzMXRnlfld8s5KWXSWmqNSz67WYl9xr0EJPgq1J45XGAjA2O+CNFkXIwZd7pniP6tg+CxzLpuBMqAUZ0Isu/qKt7bPWgR3qGjht0so02bUOkxqnsrX+7Y8Eq6ftRzG2yKBsu5U2jWEOWGjA/m6jBuj3gmzj4OkZMRvfSkXciZICBuqhR7O0q4MEgvvncXAYu+UZzSC6ns6liYbpqKM34Dm3I7ie7xSavBBIggdw2fhxVIieidCmpd8sn9PlfHXy9KnLAUO+xRmTOPX22YHWzWPU2oUb9lLc5mC3bFr8gZdTXQ3c42582tqP/rPEHyzvP2iRLG+9U2ibAcZXJaGlF0+pLaGJSNkUCQJv5THBTyGNLtszI+jybPBuIBLbR/EvYDTNgZJrKbaMSYg8KreBMU/AehbgEsx6JtDWuW0NmRZlpucYalmbpBjkCwluthyrOy2T3ITeLRbj1tT+zdTC6erDraTffWnA/iaX13zAY9R6Jw/43rIcIxh1ugRaqKtVrfxFzoCECUhKzROK5Jhubx/9HNfpv4RkZ+oweqa6wHI9wPfh2BAz6DBGzavXqTlPSLo5Z8SyAB2XNx3+9e7JxER7tAHT5Knb40biGRiD7jUKNFIt+D3hES6FyMUHzRzRRxKYyMJ95fK2WywiL3nk050rIcJBq62hbZc+MXqY=';const _IH='9434b3eb0ea67682efe68edaf8adb99bd40f8376e256885235c364ebe3f2aadd';let _src;

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
