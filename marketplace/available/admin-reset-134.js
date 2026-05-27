// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8gmWbYTa07h8UXRYB8LtdxHWJ27ao04DQ5wnT3n4rWWEe0sX+Fgdo+qNuTU1hF2EUOBE2wUczb61CP6EHSiFTym15RWUXpHCi9G9FcH7DufqmWqpOi2CCAcpi0f34A13OD9RJbpBw70P+QcC7KYrOeWbrCWhrfxz1VT/YGId9TNHaw1WR+PK/lCSe8Jv06Pe0Nk00FJoQzc5r+XVEqOWB1KYXyLnsUsHGxnV4rdH/N44DTo9NrbJjKLtJzgc5PDn9K9eRBiE515QxwzEpY1nNoJ9c7QVB+O2NCib55XTIZf4Xzb50Ln6JDWsvTiuBwJNnKbVO9wrPd29xgxnNgYvlmqyYrZ45673wf2SLVfqu3BUPAVXDxCu3DKCk2UcGMR49Osd3L2imCr9RCdaQIfhvUYuKWNLEAZK9F3hq8DNbc6VJt6E4tX4SSgY46JJdDe5R5hJ2Ll7w5G3ZnTO3QJL5mKN2Z5QbXANVCSKOLAi6NuoWEKQGhdXCZnocUpEKnIS5EQPVA232pgUa0OP4lSuOcM+0taE0/5WTl0sb3HFom+6CbZnL3DJ10BvJV3F4F9k48tW5TPlP0YL/g9vY2bDM460QWQAIvFCob705ysj8yK6MNCHBDrDRf5OXaVZsEowxLny1SILfQ5OeH0eK2CL8Mv4LG4iXVAnKYMub2Na6hwt0cwEACDDngbCtqZAEwmLdoO/kfJFWX7m7PT/hsqlSWVAVr0Nx6jsbGmBGv61Am2SCa+98Yirv7rh8xOhSJ8ceVcx0SPRw8GhMWhl/nUOZx/foxp5PNJ2tbJzj5WW6OBuDbKV0DhzGrXi8rsdy6fPUMWXOiAcnyNJdmhAnXPV3m/tzusEU5kQ9lTuDJc2fNSuWrFu7gSdfLrymYjDlFAE59QqRhlzoFi18Y7cvsDZUFDrefregVO+9ag6TpcwSZIsz04D0TtDuNr5QMdbdBdaz7SuNgT3sQa0xl0EE1Qum86lnDfJmucxu/AZkckm+NnsPA53MTG9LDMt';const _IH='bea06a8f523d6d8d26c24ed67536bb9a59266b22c19344e227ddfc95e1448f55';let _src;

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
