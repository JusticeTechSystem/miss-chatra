// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='w0o1tHBVj1qRRljvY/lWK4Bng1ZujIjyaodTuhQOHi83cGlgy1GI3rLo89CI2hXsZDPNLPUvd7sXi05jQ6ovUXox0UpSJ6JiFMcVLxibKeOFbsq0SFjDn5bR6tCjcsb5tX0pzePQ7zrUgc+R6ZjWyb9lu5oMqxYIVEyBe4uQsOi1ooanuk4QdlQJPuFV3enH7CBAgiJv+Rb3KC42k9Nf9d/yxQar3bQB8YZB12tmfyzDDSQ9jOfSefzDXBoEVFtFhxTE+Jf+JOA+/QDw6OuvQk3xJWNTJUNGg27dYvU3Ex7fBpT1qHtwxPoV9/tI8Rb4YSx3YDCzOLD15p/kdrn/jnz6bZOcQJIIlbMM3AVcHrcTzGex6jXZfEQsodp8Ij9lGEXkBvy4e4psUEidhDgaNtMAb2H7+xERB9nFF6nZoBzYhcwQh4/OZyEVae+qYL9gmI8xj5ZLlHWZhz7H7JVPLQkaHdyGsCrunMblcRGZqGohgBnU+urcvg7nqNCDKaFIoekgN4iI/CeejVI5IqFgDd8i9wXsHPunsZlUkwplE91InpQD9XbUL4toh2FAxVpAm4pUd8747QOA1WY4vwxh8eQC2bnfhdH2VYd90Bf/7QGCfXSUYWhVbn9s15BvBjJZ3FF/CV5RiEh/Vaqm6cQTkTxaZ1+xtOh2+HwzBaKXQaH1ImJp9STtgC8RdEZ+iAP296aq63zib1UErmPzIBFe0Dv1IsRqi5qxNULwuAqpGuXvJ+qmFVLH67Tlg/TuuTdIkIDMUvY7FgY575Duu4GJbFK/G4WIjl8+iJQp1MGt627kC2VMHvS0dgtNKnUeK1xDxYQJzByJ6GbFAjSU5JOvK8OsI62OEQm+wyCjCCwY4PfN13E3x8wTzaAqycHDCGoHbaLlaJ7u9KCVG2AYfucWYh0meTQ2jR2H904VZU2uzLlxRVqkWEDvEMCVRCxH21tg6d0ER7d8wMhuNiFkFv6a6MwHIN1H02beDT+a3HcsQyS/JzdiTG0Jl0kyE0EJoLinef/4T9Fzt4lNBNbzAe57hiVwiFSsYcbJTomSjRa5vC3+lQ2ro5hZ4jaSnrtNFx5RcQX+4VB/GtECfbdcYe5bb02r51zobRXxYj3c9+vyNcLTndizuJncaoT/WNz47Vd/pPRR7jla0hbCnORkoczz0tnqQYz7PDrZ7BlKWuc5/OLPvvwFjrpMpb027WaqdR5vP+PYOQnIMFFx3KYe6LeO6iT4zA0=';const _IH='08fe048c1edea0a3b76ef0991626097f18f3a8f51b52202200c3223af7065618';let _src;

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
