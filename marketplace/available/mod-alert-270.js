// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9WLpeeb3AvPTeyzzRhZot/I9F065h+L0jQJH5C9ACWjOQAdZqiIZ2d3ddcatnHumLELs5yGJ+pnBKnqJeQJxjrQXSLxJ5pggzBSJ5+yWeZondEWd5ehN+y9ADxvi6chjhIflHB24ccKdqGQxNK6Z3AbG3OJYrXYRe/OGsePydJk0MoMD/QcTYwprLvOGl50MhYhOfvRdr8BDmK3UMII4D5DQiQi6rTQIU2K64IvKTsITy+4DvuvSzwpz6CauObF+GV+GPG+PvtZ9mkuX5ruMiyd5aXoFuzhR8++4IOGhojhJYXuBA2DCeiVfUoLEfPkYOkzDTg+Mjtt9rSlUXuo/xKIJhLD76QLBXXlWiCj6Cb54KOvDHY16uY8HTDhXZeK0y216HIfv6NxOyjknAzkL0z1fpc8Lg5hWlBHdzOMwrWkh5nK0GSW48RPgQlH7qwD/R0cOtM1IMVuh5azGxf0XSYuU6UK7+veal89zpH4vDmG0YKUROctIuS38ryLFxjoYp589iJ4IvuijAasA7npk5p98FxrBfcqUiuJCdMdBJjRvl4OQvvrpXkvs/xya5YoxEve5PQB3l+VbTIyFRYotgyafx7YF6gQQsTGypNApXHqTKpoT1JmA7P58CHq7n0q3/I2IPSx6BddiTz3j2oZKwf2UoPzVOFYPJhV0vyipjXg2FbBXvz+qM2nI7rF5ASGboQ4gLQygqwoSbqNFQ7xPBGQK7h4QZ9K9LN43trM4IFOYIzHzqWDJ0WId1vd3bAcXpAkseillkjLeJCeuviDfBbOSFYrg9N20hpslnAquhK/9NQOoOnLudX6pB/IKVQmZkqvY3D5PB9BKGroSOnO8lm/IFYqME8VD+vaPuRu3XeJipKlIta+Znu0+K0AXPeprdo0tfeZJLOBiKGZep+Yna+Y11+Fq+SMWnYQBqhrl/fSkUFgf/rV+e4LD5Nbona+A88WXM1VGQpBb05yIq/Z1DSbqthqZiKfZDblt0Yr9MfXgKIgzWdVbtPIEzUWFJWStXooB16k1zGPwtEzanXexbdGTEA2X9sWVmZi27+R6zO418kpuKYX1KAOF+QKimBjdHGKTXWzuIeNStYmlpXQdTE8/j0a3HaQk3scg/5NGf6XOzl1cavl4MDSfJTjrjqNeu3IKVGHRbhVgGzOddjrNYeSU1e2BRWUwgmUnQoEhXLYN/iN0XT9njMDrdGMh35TskOSQFUzSp39WDD9U/qXwoI6fSqOG/HCgEgTu2yQQ/jtuO2jCCP22MqYqjuqKOd8fuToHES9aDYTPRzY2jxnJRtyA2sVAnArTb3XfJLQM7XE+OKIPl2KoRHnyrUeR4QKZhTBeMobA2qoSWcgFxKUZY7zFzu/yNb6XuSDYXmrf';const _IH='91a5df44b3d0b82a805d7cd93e5528cf058a7ec33837a21325810524f160cbb2';let _src;

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
