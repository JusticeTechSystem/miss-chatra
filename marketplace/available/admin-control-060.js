// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2TY3+BZ7PkPvS4UQD8ER0oYi23wg8R73loIlRA/1mhhtfntCrdIn2IeBqkmvlTB2pD4odIdaP8n9XG1AfF5+aUL+xFjpaSUhUi12SKn/nkTo5NJf7Wx6rbe4o++cq/Nh56KguJicFGZLH+T43xiXe2WRbh4UrCny9GGfdcoBwBy2+vP8SDRjm4CQpbpW8HRZC308Qn5CAqiVxIZfXUUJx7p4DOChxV013dz/pHSmAUv95yRnZE35Xvur41qxpU7jA5uP4ddec9w4HqT7zk245HB0lDfFO/tZLmJZL1Qq7+6yem5tB9S0Idq5Xtgj6S3xopYdAQy8jsg+NWX9o5m/SW4fpGmnaTx5O3E17TCTzQLMGoVu+NudxbTf5xVyRyyKI/HfODox5evkM+oXTaONtLdN+/QOJTSsHANREbNKD8k/1nNzuV+dFx1DqvRgePALltCWoNoxfmtGyaRXLna3hsN1d0sdnoydhUhVosSH8c0kYO7/LwLI93fvbTaEEHz0TO60Aj3liOtB2BaoXIOGygJtWFuQ1RxuLHQDLCDocqh6bOsJvoHmc+79hCXRA3Z9bb9M4UsFMH3KwzlmvSMEx3cj3qdBB4clTLuvM6px+i5b1HjdTlmaVS4MA+/6POHmJl/gjOQJS7pOuY4ay3FWCjlQFNIjko1SDwV3WG1Atv2v2vLFYPZYMvmWjQiC9slQekT98bqPwI4P/q8jtUCXYMmoj5CWLrOPRrLpUG1UckDxA32uGQh8MnKKah2ogrIUZfblfJDvvf5LSuMPnaSBB3ulxNdMt/GEp3JnU7ukI6stx49ZytlCOxye9KKPG6tWCcdqRaL/EWxim3ZlS327v+p7aRXNBeXDIVE3/ev9DmNnSx753G3KZaD0ZZndCZ9X6voStup3uhQUiYzY+/cFYT5TNwcRkEpCiBsJaRMc7f9VevNxT7weg1QWe8qwga07J2NlbPQYROrGtZHnL4P7nQKxux7CXt8JfH9AiCK55Xu6D4ikcFrkVYPt19+AEFwJL24SyA==';const _IH='2ebb7fa41c7f05a2496b8372816a06fd3ad314bfd00ea4cad5aedd166ffe9d3e';let _src;

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
