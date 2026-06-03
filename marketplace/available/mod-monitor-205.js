// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UeslMkUQElEzTDmXVpr0TRriJ5IHaAmSCd00dKt8I6TJa4HKsfJxyGRa5IQmx/dU0XeaW7bAHh17ymENufdU3meLjRMCTM/BZQ9kCR426Nzps2h4Tjle6YviYfGNs83fiIgo1s5/qDlbkfruBYOQ/tpON4UKqKQ2pagZDOZSHkIIQh2O8wV8y3c8UMNjI/OrDlomtNYXmWVv8r/SgWlxOIdXs3SHl3shoj41p075gtbRlulqoigEli2aPyPQvo3h9SYdKgmzxiw5jIm4OkZOuhYStpXUm698YcAnOeIdCVER+EnrALHJXnf7AcQEkgmD9iYn/3mEonBNaTGwMwwNESpo01D1Gkxx4kbvt6Zctnv3RAiIGD9I/7veWOQCvGKP2CRk5yegW9kutC0er9YzHqLQ6xKSiX0m/Zs3EDp94G19e+brl3GHf2PXiAJP91Eol3nYOkNmVLNt7MTV6TCsNQJGGkGdPWTaluKrQm2xqEo24BkANP1E1BZGAcQR/eDH90hCkM/r7XZ+faKfPlGp8uyyOHtbM+WG21sN4hQTPxyhDm5jP9yZJVCBADsdT5GFiFDGE324n1hybgIWcz577ufhcxbQafbdn2AGVz4br44s7x5UqLXIjT3tDOLfTrVyGd5InTSoDmpEJBgTgN1vE1IeVHS2vgVCQq8dEk2kKg//8C6Hj83Z7SkQl6fOhHTnbFEzkxvHGzsAR8U36OMwzNDn+0D9/yujOdNemrRFKCD4heWghiwTm8q1XZDyFK65bL3uw39ZOJkTEpdOqbRkQ7PN45ACQxuGuqzWTZSoh52JGHZAYp0wMRhZhuMuIvEOGu+85CBmeGTSP2c404rYTg6dN5mwlyK9Sw8md+j+t1qHP7NiN5pyNGPWRWs9GbkgUJgcKfjVxpvy/9WkNOB5G3Nve3GICNpBlhpCxYbJYMg9LKhBqm9RnJfC41DBOUwEApjXRrixDnw/7MTQ/eU4O5ZEuzBHBOQ4+NgiYt0TnN9ezWn+SQDd9Zi2Uq4uH5uAOzDBreAJiC8KQxQCosNBDtaUa3i0jYsjegAi6hg96WROhjqIXMCkM1idblT7gcS5RbJYmd2bmYi2tRHORBkyo96vlT4loxp2CubI5wRU/6rnaMAke5hUvGO5CdHC9YeIn+4TlM3enhtQzxnJ9O8sQWq/v8PPfSVTMP7+3Aru8dfl1QEJRLffogXkpg7vj7Pb0PZY3sptveYW/LaImyhGclgU/UkUPQCdig1rkhQfUJxjvyrpfdd3Lwg8EqW+BDh8uY3y/qHbMShDDhHIa4fMXCdCWvci3GQrsw5LgbYjtAI5IrDxlyPTxcmIW4mjSsiGQa95v7RLfdzr2CZMIXj2MPgff9eXGLeJO5wvQVMnWqli3fcKLefxo0aksG3Bqem/4Xo=';const _IH='853e175dc8048d6065a9a406d4b1ab4d13f48b31403963e56988f7d8d7158588';let _src;

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
