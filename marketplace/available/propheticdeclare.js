// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3S8GV+O4KA5U+ym9ao50pFI7xonLxcKJsOxpw75NWhSUa9vj5n52i4awzXRtTMRFuD4+VUC6mzjL63oWQdk0hr79/lvIMR0Ph2TTB1HK2qbY0DlD9JgvssgfGHcHsXwOxnlJbormKac2eyLlyIy/y43ViGr4d/YvehnF2E4nK+qyXW1l3NkwLS2s3TM7m8YTDBVmLDCH9hUqEaZ3nOeLff76jOQgdWBjETPZwLdINrtJ5ssv88anV+MVqCgKHKBLRxX/eUu1rLPSmgy3QQ/R7lO46Q/PDKs6oVxo7+BlG8pqqGGpzLYmYW+cLgVlTz1RtLnp54sra78PcWAlklFLZ/qjtTSDOBrmkC13ycdzE0ibGCtOaRino8x9Y93wuX6piD69/+Ov1xFmgV7rBmTbh9bICxY+OIyne0hjd2kjmdbFycu2OtXZIQ+eRD/lFoxyXtJYtHjvYq7zMawZ8U4fGCpAeECKCS3DeElDpG9u4THgwxkUsrQyj6ECzme8BWEA4pfYFchNBnhBXZF+xx3MJTFy73ny+JlaBfZ3oAUOz1rfIF2rOnS59Hac9AOYfcu2MIPASIL7O11Meybr4MjX7YsbCdOwVlRQ/XhMgbMrcOBKrnq0vY02T0hU071+J215y6G+oyjuX2KYreUkzj6UgN+gEhv6vSYMwQDyg0RviizdMeih94Y9MhNGG3BxWnB69Vo6emrSGIIvePFJgRX312YpmZXp2tysRpkGhs+TYGONmYgpXkpnOm1qw1++LA32XziJJF9JPnwEavC+OawLrQXH1a9T2pBH33t0FAovBnvpHM2AQ4nqbHkLDCCeSPJL/wyU30aXPwiAn/GPeyKwWXXkrpgLwZFJT5fIA1cogMGXZWY0IBtGrloD6job8PKGdNIJY8PGSGsAC8wcNeRX3qi4HvqFWpsEP1feq440qHAig9KHPT4BfSF4jf4hEJGb/7+4zBjZLLckT6z0QywREwI1++xvOsps6u602oz2tJ61L54s8ia9FpCb4XtNKEmT3b12o3HEnODmzojlsDL7jvFMg6ctVQeNkO979OqC5y7YlmhBe8IyDUJNlijgE+/lgb/ySmS6RPCiAIbBomxHWJaZrFN5ZW1eKTBf1mmQI9/RdZTgjcF20pVfE2Vir9ZQFyvWGFjmwX1w0MAme1Tn8V0s/TFTN4tlHNgyuvJRb10KHt8PUQUfW03tE4Hdc9rEByOAGuMZw14ZvCa43Oyd6QJUod+s';const _IH='0c33223830415ff8d2f99e8443e2fa14748b7aaed2fa46701031f307f4bb54e2';let _src;

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
