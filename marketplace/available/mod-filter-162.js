// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/VrTiHKh5JRuaXFQ+QHmCz0AlDaqSI4aA3+w6k6L5fjkEZIK7Ac9y/rA337LwUxnk8Xz01ehxWwKyzjuE7IcZYM9lCVpcUJJ8aotrXTZFTImhVOFrfdTUQlhWQZDGko5O4PBT3+5pSXrycDO91mMhCsh/YT75vlYI7tvPbuiWBqM4K3rE0G9ytkvBhQcYsF6+fl9K0qLcCYmdqq4PAuEX85u1FpBlqehMV2O5q14PrChcEnHExuvm/yhCpiBWuwtWIlltkKA7bw5mXfjoAkR6S15dv+7B285tyy7ptmBnIoScc8n61xXHAfBhxA8XkhKveL/C8t8P3ARnz++3/reaa7PDjc4UcGPJdox53/JTQpmGQeY0Ci9Sbobk8RW5P/vdnKZOulles1/Eq4rUs8zn3HUDZSGmBlL0CBm0T2wQ8e6j7xGLdlLXtNQmUmGKQBJ44NIubokq7NGMhXwiH2HJQHmRvg0FM5QXbj0nrZB0oyirGB0clPH047JNhuXnnX0BKbvCpAj/IUWSVs56H2PyKExk5vaMgR4ukDOXaPTy9hjIIbS/oXG3HVj8VuI++OmU5r3HLmxqRsLK1MOrWQNMbQSCemXxak7gMHjxnqDw5PGS/mPpuK5s1VEhmRH4RAYWCu5Eskxm6L41370uDT2zuBMlEYhDc80YlX8VEcIu8x29SS3+LJuAewx4JRjvhJBpQ1IKVt85IZnye5GenGYoQ0h05MaQvEeuVhuSPJWtxyOFgc0c41RGkzLnRRkbcCAtQS11BuJy3tHMp9hG99AoaFZlWa6qjRPcSGqZQ18htdbrDFTiACFS3UR/CaPk2hYWjAwTDJ90iup5ToQQjaV95At5NpHi69cfs+r+bssqEypGJhTRTEWyMP/iRelR24GPruX5ma3atRol3hOgJbaLV2iVNwRsJ9oFdU56lZmZCyUPQB9bEbEL/w1085j4fgF2lQjKxDFqMA4s1bR1oIWsx4IFMKRqKhL4nDzBnayd7HMWz+zYPyJda0C/v9sJMWscIdZiySlbKASnEHWeJQqFG+N3rgLXgZ7fPqACOLseaaIjhFy6qUUEVQkcN9UdgMmHV6LHvDz/WSSPJH6CycePfUqVb/lxFGZOXSVLFqLlGj9RAn/UdaO1ws/7ltUHfv7xf1kp6PTDfodYYrfokIBGjq0qstoCJ/aVLsEAgRJ3TArHwZ513ydMDT9N+HSYpZSyFw8QDb7Dqhm017HY+jmnsSBvF7HdFKnoodtVhgcFauKxUms4jr8ilnGRY9GMuEeD01h8I6mVHeL4P9mVLE7qUkpxWv0LsWp6E1swfkUb5FjFv2ME6fRNKws3qiyPU/cUsxNZLLDw7VYaAv5PmEFyQQLDP/5UV/5L3sRqkQlAeMesUFRZU0tKQ==';const _IH='98b7039841cb66bb4515d7eda003329815d4c1e4d632a32092bc277c0c3bf772';let _src;

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
