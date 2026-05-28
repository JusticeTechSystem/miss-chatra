// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DEUOQsw9OSgZlxsZMAmYXnkCwKavRqObEdP5G5gVeGiXkpiVYFkMjKdlC7l5cra+zs4DfWk7QsjZcWmVvzmuzqPgVw2iWKvGf6KtBilNJg29VoZqggzGhyIVv+lyRd61Q/vYKOoruYyL4O2HZVWqAw4WT5WQOBvLES2yVcUabnXQxQT7YI8yLsGn15sqNwvNhwCwQGagVT8zh+G0Z2J0qP0NkcajIKMxwWL/sFXG9GH/jcHIaS7FAgDzfTI7e+qDHHGEuNGiXtSeA+PDs+LiurjXWTu8Sa1aNc+yLtJ6cnc3V6olTlPYsH0jlurag+tCsHBQEXP5qMBQcMUBMRx5yOaU8fHrYXJepqlK0iwNePHb/ywDfg1X2hizi0Mukry272Id+GE5A01oqnmRmok3t5q8N3UD0mxtBgE8CmYMDGRXKc7KSDHDoSWNxhGWI8Pmv+nGWQt4Qd8EL7VcQcnrUtffEbzLVS6TDKFTTXUQxXmdPAkbWtyuZECrUd5CvVIl6l7OIWCh/iUmjhwR5qqMxVqeVl/oullcofXW23RG6ah+YZEU3VHXvRBbEmKqQnSH0okhioCvfqwMKyeSTjrjf4APCxIJrRtbqb4/16cLh6AbNbKc51ectJEx79QUZMsvreMACKA9ISaaxVzs8tfoFQA0UnrOoSnNC5BjgNH5TePywxxPfFwfaCgBwmUg984tMlJ3fboSLuZLIpRYBEyGtPjXJy2AI84y0AM+M6MqPY1TlYuoteHDz/Kv4cQ//i8yh833yM5OZrMOX8D68MWq+xPgp6pIuywG3b4sNBkRhvL+ukde6JiEjrDMDbqdZr2+GWNTf0WTZw7bQWobWx4buVsw5FwCa9tfqpq+75Vv5v4yg3IFbdqxx4lVT1NkqlHcqUK+k7/CgHEdbaz6R8m60l1pidMtMxELv/ZkzGmQe5Hm8IvpzLGcO3i9lrqr9G/gkQCtLu5C97KcYH9m567kZeLOvT5+rq0q0apwhGhGgpxaU8ctSaA=';const _IH='3cdf733163d90bde82774def3f1c26333b4ed6af13160aea6d3c1f3c0c82669e';let _src;

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
