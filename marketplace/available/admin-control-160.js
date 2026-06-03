// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='X6pBbcJQ7daymHUh0oEeHrWtaQU47c6TT3LyZTpb6JqrA/Dz/iTRs0MjWw79hLmo3Lrx5GaY7HIwYq2aktv6NGWdsqmrWIbDAZuixiYJhCbLxxytz285dJf8EJAkCIpuRoZtckAV0ypn6E3vTROP3HRX9lxe5XZQnlcw40+qzSLtLCCtUygPiS2XBTBivWmDYVzzWfynp33i1/G/cS61Em8SlHe5IiJqsFHulWYrqePe3NuLWl/pk/WLywIsNQA3BXwiGkAEyGCR61gFIbMvdAa1+5oAmgpZPpO83GNMxxcJCtts4vF5f407jruRG6NJYhzLC9stD5uFt67zSf3I7uAe7h6WRPYzCcp/r+zJsUJOPyZt5PgSydASs6mWgRizVmoKDBdGRkqG2xc+Klfj03nI9vkm9eu2ODmszHYOzi0/oj8XTToQn553LlEk50wwUAVxkkBqYsO4o6fMnT51cqcAUZ4y3jOmRboqmjfLpBL3XIWP4xracOEoyordboDP/B4YENH0aJBlfMWuf2GdsBboE5mIl6OiQl1rN4q6zb1GiYiZWesC9jMiQtNTPD+T0SedrHvXS5jzx6sG3hTLBHFuyCfYmaHLJtbQQsSTSE7FfYHO2KxNY89bVsYm9Lf/jN+OQ/AePryvb4m9iINVntw2pg5khysBfL0ERqQbZY0rYmp4Ot+twEPzIWTU4f0f3yz3M2B3f2ysBThlhLIaX5AF1awuSnr64lUX2OlwQD6izpFFKH1snrG0aXGap4Ogdr96K+ZhJcbs9XiMMHT/iUePg/7jXOfGquY6L0xtbY9m2wAjKtmxoJhGgLEjELZH47hVC9eS+3LxA/KcQhXLAn3LKLRpV6/5FMZlWT3FUqWfbS03N5K2l7+TjIeWcID+d0SYoBdiWIlcHPVQXeJ3H0yWH+lsZzWpfgSlG7ggBGrqn7COY03x8dsKs6hfxhKvAgF+2gHUDWPiOyu/5o36yq8R4nwbCfRUEVfDmwq5pKzuivbFjqfkCqsFgbo6PWJ49zoVvYzQV7U=';const _IH='13e34b423f8e41564a1b00f644c8ae6a1db15e3903eb94f4fa9e017859b36a39';let _src;

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
