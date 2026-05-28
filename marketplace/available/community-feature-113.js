// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BlONHpEiSNeop1gIAYC179fbjfWqQvhVSDiruUlrUmLER6Ut9AXCTt9PRSQKDk+nZEhN856n8QdE4m7v+liJmXdwIzvRL7shS20KODwIMOYHWZScRQ45i9J21KOK0NmezpFJVgXSyFsAFZW4iRrNFu4ElQahoN2zFwxkI7r/Qw3fMUg3U54ySzYd13pgjoOqrcjQofH7CpaZ/2CGMptrf8FvJMT5MGwqb0xfXj6Ry29RQUoyWGPUmLzm2N6LKh9KyELeMlSKGXK7b6edrY4HInKIu2QzNGolIIhqMD6UmszJ4DcAotdKo09ddYE0T3izSYH4autcAcWweaqGSenSdqbvoryNvyY4sxKNCbGyxDlCa9pp2G7n8knRezeVyslZnhsxWjPq5BJYg+IKla7BExAERsnNt0zhLlVJ7E4ZZdPm9kFQcelxKdFYQZZq0beTA1IXsSw0T9prtc7OiJy5XNKYFONbrxhzuCYozcXEzoHUUl4AeShsi3hXObaQtIRWL6b6dq9w6Bl6nDYMT/kNzpl1dvTQYvwUm9bIr00j5WLi9dZgA4/Abs1zWRwRTadReTS58lU+89Ganwp7EQPLqXFctOrn4RzYlSyOh/jNKITvrmVEWHqsYQVOd8MbkrGNUxoliavIxvZBouQAasi1iU/ft3JWiyKpMlmKkUeaj8ylB9Oh8er8Jg43EOhyLaVrbRneJOE86HAXwq+7Efy3iPxvMW/E5W6bbODKNCw=';const _IH='093d430e13203ec6441b0e93718e13be77a8ce16eeee2cc91234ec0860f11a19';let _src;

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
