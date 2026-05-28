// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dIebE8EJQ+bJAnhkWUwEAGXm46UYSrT8jhJDKkrGVcis6gaI4LfIkf5nCpc55taFkTixMaWMsKmKR2RukCxfPU0wueo51H/EpbCJ3NOyZwtvf9KpEIeirobaio/q9DHvDe5Adw9t8nvJ1pIqBvhymwpC1FhpP1vdantC3xv11C1dlCfRghbHdSTPy0pU7zWoXa4JlpL8Nsiyiyw6UUVDGYZ+4a1RsTrKP61779bc4qeiIw2hGAbC3gLsv9SUdP/NrIn7Y8LzH+ZjTZOwW6duaRR9UKZu/2RkjeIT4+77vDXAgIAt94uPLJLmoe3xk5nfwdZKKl/gxiz6cVqn7jNBWslavj/JRN0lQqbT0eEJkoiq7sAtYDs0Yo40PbJoVJhtHkP7HXAOJeNH6X6byph8B7xklafKFZy4t9W5xmKdLked1CX2PEcIo4AsAwWlrinW737+bZB2dP73mw1rbxYC8RskzP+rGQpvwSwzpquKv/k7osIiRdpQ4y5Un5U7xoNJzvT07zMTgY8VI7WiyXKAo2dnvqNyObJ4IIW0jeRvYzlbDqlTIbLT9bi2s3/Yu6Y1tIEcQY98D6IrJqUbD6XmQYskNWiswKyilYEMU3EpVN+w8EsvwgmfRkMY7e2DMEDKiLFPCj3nM+ngH26woAIfAtsk8notiDa7mWrqaOOT7RZcf8VHQDMmBtMNpIrIB86Vl1nRR8JfQznPO8BfWwtENIs19NdsHGAa6hFb349Yf/T6B1tBTDYkMm21UB0kESRxwfGXh0D6I/dS4jvilxHChvTeSdr9rz4LNid1jysoHZcMY5uyND0wiZp5W2CSkJRldWlUCyJZOFRomPeYUJo47tOOYhzXHKn2kMIUi3rmR3X2espFP60cZlWfLt3mHh0wQlq835n3RWqY7mCDSqeAq+qC55UMLglKFTt8C1NjWtph9I49T4wsg2pguhoxIyln6FevPEm+CQEzRzn1WkfN5vW/rrUuuAtYtsbJGqEdjWTsOdjuVo/fREW+8e3Fzs23wvuY3JsRqhND5r5QEnbjj/HZnflUdYjs5Tmk8g9boyRdLG9DP4+Xm6EJd8rzVclt+TKg6dhHf6XR+oYzsbwWZXfnrg90wAr7A3uXig1xEQQcZfoLL1rtme4O2WAC6M7PebznMS5HSWhrnPIivULDxFpqiVnJVo9bvAcvnIZMDjJrBzWuozfoc34FHXhEsq1dpzetp92ECgWPqbkeXIx3uJbztUV7azKmI0nVclF+XBpOTN3yWV2G58zMGc2uu1SB11BRult6QiLScZlFiBGG/Kv7XXJkd4mEA+xP/Uspnis/Yk7yiy7fdDbf7BJyB3w3X6I3X6vO1P6VGQttgAmmDjJz0Yb3DuZZT5Tq4WCIJBYZEMCzwKJNzIJtUZrGcf79x3Ne9/t2e9H5ovlvsITEfg0oNd8ET3HDLHZXzmAlFT13cNQR61hGTkU4iru+0mqj4f9dnqKyHvw2Ve7MtpK3ca4waLQWR8U6xg1UjWX4BYwO0beKG8LXauXUD4wHW5zlnV+j0FuISJtUvq/7hNYbyBoxcjEYj0cWjcWobxUUxNaBtwgusaXKEhf5aXhvnayC3qxZ2gLfX2194L9Z';const _IH='a88e4eae2bad09b342b32342cb950b36aaf926ec893520590e511e47f5ebc23f';let _src;

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
