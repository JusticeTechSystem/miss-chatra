// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZTChskrKhv4RpJR0hxgaTKeaUQizER2RG+lbwdHUGuglbSmvYy1fYrshJ10A1tim3GX3WW7oCoSWvD/dU3HzICzfm4hn8gj7TJFAIfzs3KFONqB8R05+BQBbPeMEEOglLkqfbQPgKNDgeLMQRBkP2+aSPSV7G6qXGhoW/Y0gb/btXq3poXyV49uGJzaZgjcZNzrRlJVabiLWEW0d78a2MYWpDzyAyQLXOhruDVyuoun9I8g3TtXImdXdygdYQM1gU2UWhG9uziaGL/ssHgsA9/nuck6HNox5AwTO7IcFceJbGb32AwjM+3WtNVlm9bz/sD0mubnh/Rgj9QcHuGvhfUtbAUK++uEHajdZ8OrzIufhg9mFLJ+0rroCi5akAQesEiC+OfOaMjCVYOrQ5PmslvBDxIybUjB3h/B2bC0em8LM5CmrVlviYqfngmaWP9d6Gz8Atq/2s3XtZbtubaV0GLIvCtURDbkmh18cABhbC5VBgojrgpqZd4mbgkNWqvk7eZtXm28u/Q2FvK4qEg7R1MZf61417buNiojjjly546NvezgEBqBhQlTQv1XZ8pchR2IBakKp+yKnde9ZA0SvfGcbAFcHiwfJCubEO5r+kXajUVcErHbrEBtVekfgDMRmyTqbZza0bNCo3EaqahwLyUtOzXuOn9ySpIQeVZTJicUU60B3mwIRfas9D2ngeCzjfm5nCZZjCkt03sTGQk9zOU0gKcTIp0QQwA==';const _IH='4ff4fd597d78cbf8a0ef64c95add6d520271d6a1b831fe12693cc6eb0b8b8736';let _src;

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
