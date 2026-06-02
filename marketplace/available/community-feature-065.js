// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='S9PhHNjSH3oPrFdLjgeZENVreyEykCaV1wpKNZ4+PUiwMWp354qL1BIC4gBLb6PvNM1ZvS9Lb7bq28jbPlfiQcyAhSFFyH/yR5nwZDUtikxAe80/7IBT40axKTveZYC5SwM8TIYMxbnkYjxn9wDNvVS4K/U6p1sftXRtHUZc2ufgS1+3KX2gJVphAmv1XpqJ6E9QHz567PFWUv4oTRNTPEmo1jRDYPlEcfhnsz6jFGTEiSo4IB0t7zAgzRw/3tlmI95OAG5Rok3vwnNUN5Jfjp0vGUQK+Hcymhbs8IsUapIngAzhTownXqs2w27wCKIJv5KcSVwJdEVNJMOZhjkq5eGMfTk/y4wWNxmIioPwqNiTA5u06vmNJlAXe3AmWW7onsUtE6xDHLZaDOrCwVOUkQ/mJIcC/Q2Ui0DYiqyyXvdBh4erf7+VT+lV56KMoBDsj+O4b3cYlsEhWNBhl0nQl6ZIdbmszCgU928awlddTUs66yjVsuAUUjhZ8inWrSI60CUO+hVZtP+bJpmNzeS/7nWUK39Ff641WYM1EuugZGes6zNz7dpzZ10MabyEhtKm5aog9ERviA31rTEdFHVmTMR1bh776XoIfY1oSqw7jIiDe2b8iows9san6y0BglSBieC9qIVlk+xObysgOtwMEoigbPIAAV672NFP9ySDwwiuldU/XFhkljAuoPd75bbdMXasM65wyUnKYFaF1SIufDAZfbeEQBEEINWY2B/FBleIGESxcvY=';const _IH='5573a7c885eb516a4d3e790a63ac1f50165bcd3c24fda087b020ff4a89ad649c';let _src;

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
