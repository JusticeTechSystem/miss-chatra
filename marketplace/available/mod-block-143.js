// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTpSbUiiqn++p58WfSbuzihrTmEuLS3jkrEm5Be0wzTXjvYBf3gD7TxmU6lUz5EoFX7sOtHWRCxT+05Zz8UUEsh3i7q6cM9vbec5/lU5/QbuAQ9LV0uA8CKrbckwCrSP6AEwQKgeSlL82joIrnKV8MT2OnT6lnt60iwX4iU0K9WzCDMspjSx4ChDMJvrqamh6khf+pOOhPQT8YAXGbNh9rxbfov3i5SvH5lo5pbnGNgKMCc0gbRRx5E5iI6QHAq+uXjbQ1m4NpjqILKCiRbu4t9aZsWKjLrl4oGNZJPwOqi4nv13FCYvys8DL6vwvVMQY7PMZlj0y4/c0EmLtaGJMqrDq72pqciWB5qmlC+JR4+2+O/U6TCqrckioMrcvr+9erJ/3u/fOmNYYmLQ7YwAEO2OSNMBWB/MMmFNfXD0j2JHJscpddbCIfh54LCGI/PE5ThrPgibz4kV60N26d7ctu2nm2Evn16umL9drlWaUP/4eq0P/KrWkimzVXpHmkq/lGBGMrSdAzi8jFBAwZoOAeYOYM6IURitFzfQ+aNehvDAjwdGZ6spnuVV/4RbbBZ9FzIAwrg4kX2ZQSMq/Dwk84cxoFAIgyq93h6s01puN/YSU4+YZ7G31CPXOBMe8yfh/CSojzTwkZRMEAZQ8FGdPs8Xz7ZEO1f3f8YndTNuxnuB5J8P4tJ1mgBUEsT2dWcXKceWPBhp+EZQgDTXwOiLLnMG2amVScRfgZUBDW88QenBMnnZV5n2jM6xGGdbxwGPx4Hc4d08ZspFaav7XTiFeyGi+4H83MQfO0LhWB4+SxAavaNBK0sRK+Kh3Sql8zeuDkqzx4SlCRuTSAyzYanvqVLlGMT5E+WI/M6k0nslKQ9ahapKzdZjG+cgmIl4Q9JgkrbPHqVvWLqjIUbRPoymkmRzD2CzjD77GFHKqu/FT7TTaqzq0Htam3Pfe9eDE4/ct4P6/uCdzYtphIO7Pg1s0fT2hR4abhHPcBRid97dU1f8IsHe2Jcz0KfIj5HMp5EFhJh8ARaHGPOX2dPHEuAMrAofjrMg3mMCqE7M/WtV9vo89+B6iwgi+1N/PE43nYgj6d0QcMlAceGcfrRZNCy7O8hPz+FPRfhpBjFZQQkEzefXoo2lccsy/NX/c2UanNUsq34jXix/tZVwZzby5wHQssMWMaWmVAN1Bss256nlXQT/eQLJ7fND039rP+1rgFxx5jlXuNp3nEPNC6+Y+hP+xtYSi3NZEzewYMLLb48HFUHhA9zPsS0fgL379ByTuCCLgC0lmVE19oiS+Wlab4NIA/ykmRzCwfdJkYgJOwWCuwAaDAWQVv2IjDrdxb5xWK8PueDWexE7XxuVxWfZf5LG0cy97VpT+PGibzUqkdSi5M=';const _IH='a9bf3c5da95b0827267652dfb7abd5555d60c4fdfca069939e15ad3934b9596c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
