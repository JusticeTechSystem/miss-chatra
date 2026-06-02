// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='A/g6j5m7bP2rp5DCC4DxEWkOQWj90JK4oJS+XZDe7gaNrXfiD9DyTXez56RGLErke/+ZNZ4k8MsBofdrXsjP4XIy5ikRGnoIWj7T2RkoKg4mWWevUonDz1iA3ZV+B2ueZm1ISMBCmLwodzSwQOsRc9oEJpk5WPx3iPW3juXKn6txxyUDtGaRX1KtnLEvLPnxARmawfjQ5Llm9zzHSRfq7q+7lmK/6DkBPgSjXSLZ4BOUA5jd5Jld6Q+q8z5A4WP1/aPMbRVqANLpGQwiFR2ctpMl/qFwVpmTPpblik/XItpUB3ko6U2DcEqkOPGlz571qQWQ/5Bagts37SVZGY+iQf6NOPK7xuygZ6K+zt0WPEBpOHP7JbjyH+0R1X9sJ2XDrq1Reaa/pI6wnwe2haCv9BCFOV8pusfb8wqGtvmUwYDkn8pgfUAvZWfewS2iiqugjEQktImvHHAuJsr2ZeKDRlGOJeR8tquagZuyLyIwhXr8uZ5syNRUkKPbVzP/Z4XCM1T/ha8Z2SLXBbZS20eZ+3jVhY/5D0RgiC7c5mKB53q6SUqul201pm4ZH7LxZE8ZRxHNPXbk2NmwUTNV3ocBoaMp5JHstEz0r0Zx1OcI9C1Bx8koB9nsI87xvAYHZprXgudXK+juIuQ0o739yydeiuXKq7LJCOefOsR8Pu6qiPihqKWD6ZMAv253My8YD9kp1vo6QfEBXdhF7PAu905xURB05JQ6yS8VPzMSgvvVlQJgxj92JxED/bT1to8uPH1OwTEWkUSZqnUKPUarWp6jD7EX31oS01GmdOp96QbqYgb0K/Q6LwP8g8dO9csFaTBQQQmS/uGOEB/kxndumlxzCUSWIhoKNY9FaZuDR+0nzbHirJw+TKsCPVwqI+wy9zfTWZ/VJ9KrU1O1bVbOVpY3idJUlwte6as0DpMsa9T5vXQyoRKkkZFREK5vc1y/agdKVdij6D9f/o8yvxt4FRO5PPLxnvOZ7yuOKzcxHPRkGDNrhnJAjNk=';const _IH='34777ca52d10fc4c1aff7f31940b87d3275720c2cf35bf76b7139ad6274a37e1';let _src;

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
