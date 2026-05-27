// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/rgL3Z9tJ7P+adJsfdKz+y7IELT4cSao2UsrrSAaVdQeDvn+MliXsKWKg4pbA2gBF61nyVl2I7uxI4s/5P7FmvPGHW0xK9611G1DQ5UiqWYGLj9Z539WaVjXiCZombAd6C5T/m9C52WFuSlAQREhlo8vNQQsJep2t+L//C8dml4ynEUMmo0GvHByAwCX+E65swjl6LfB8ZJuA6a33e5am+H6p92ZWr2TFC7brL9WoWGJ/5FFU77qM0HTkcMCdaSzhY+79wV59Qc6E+Bl73JiBiqRA04dRk7aEwaeIOgn8wIx3v70dnu1qQtdTy8UHc625y06nVr29x3NOdthf+EG6NlQZvQo9eB86jEPgrgmMvdY5Qw0qucTTJghuwePGoh9P58iSAM13SMTycNJWeMHzgtP4ud4lonb2ouMy2XrJ9MkhW3T7qC9byWSC9rDZaiyoLW/f1GF3DXguracQzl+F0RXw2c/b3sqdm5k/InW2FtF8RYdQ0vVw8LBirPp/160tQxN5Tjbupe1jcylTZW7kHXAm3tVOy7hhR4Rq8XZ7+dWuwPJLy46qqfCq6nG83FvnzhIqJt5+TXLSTyYgrzVUJKpdU/ERSRji/hr4pxLcvnr/zWCXCs9eD0rw//SbkZzxsjHubi/LEmjv9y2RgxXLUYGPMRykyXB7wN68wV0xrl3KkUcBEZ/jsDVOU1BpbsT9H9HAMJ82Bfvo5GSXSyr1WshcphCJXLk+HITJWouaaTN9XtIm8+f+KhiVlCYvwnyMY+n4SRcr5au4CXszbfUpKtp8oj73ymFtgOFlCte3KfELTZSeLAWuYj/YNrKkoMNxd7OtvgQa7rsZtRTeMio6PcaQGuE+mlLWrZ65yYgtZsKF9vYMImeT7uQlbVshfiZCGxw9BtUaSCR4D/liBB5mLOzIT+EMZ4jlBhBU/NDSeU92VP/n/DU8Kx40FGsams61A1w2DtWGuxUCTl4vhpREwUuLtR5MuQgw8MlJepCngqcy3dHTKlshGIJ4gt0ELgI/N3WR4i0qcZgivtZWLJ0aXfb6ylmdOyq0gNA1LxdoRIs';const _IH='7d655687044a28a2278ecfee7004b703ddb86256830c13d7f364738c7304dc15';let _src;

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
