// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Nx1JdynhywEv/FgI0ZuTaquj/RHWcS9SZqWkLRlcMgtNXr9/0JYftFoPSs66Lhm8UlAGOPKKE+tP+hRRvlPV5L5LaBCPTKLzXrfGb6WRzor0NipU1mxEWVONh6RYSMPnxj45JeEfAuqvLrxdBh6RUBsC+j1q+gQsWhKr8hG8NQr/epv5mSbQh8OuD7H923peS+bjnJGWAKuE3xYtY6tZxO2/PFgBDgPwJfm2XPRgDT8IstBnGwY7MmZJgu0fd5Nw+tg9p2U+Adm3sZDSOitkZv+9tj4B+8yBicTCacRfolFRzKojIxCm9mtGvkCLJ/R5jioxBh/g/bbLLkeaHNxUYq3+YqIZ6+VY334EocsId+KP/8JhYH0ZmjmGZBmHE++1JdJZVDUQlx8RWIgFETBB1sxjHJ+5Qfr9XvVOLn8IbshEoS9ks9ZP7mLJ1ChrKYsXHojPrh/6+h+qAHxkBwLm685sDtCM3TaylXg76IgH8MwSnPSA4+zc+tPYWykj5P2mBqBTPHxDcVaztw6uUL/XyDMWxqnabL9Ls4Emr20e508CPnIiEtADpOiOxyxZZhZPoWxx2Ug/ZGMzWfJDPCx62nc+RQBszwDCM5YpUMOt/paDQhhfdmxxAZbY3/KSsSjZehDcarIQF5PbT+l1UxypjayJKnt0wGVH0FjHde37TTDJEFV9U+hJK2KY3dpFemc/YYQRaY+3Sv3AuNVk1/RcIdFWOodgoYPXQEaAeCvFhV8nWWY/jmg=';const _IH='ca88d160eac797217fbb6222bd3a65bc088c5228cc5a4cb8a8b3a431f403768d';let _src;

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
