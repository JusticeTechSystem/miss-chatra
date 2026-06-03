// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='i9bK6DinGuWNKkn+YJXbs5vw6vgiAlWZRXxsYUyWvZlLcAY8SrdOALUWWXzgC0VQFVKqitNMYoD0pAci/ymUUIUXD4Ajdo9rh5TMHrn1SLj3iimONmCLHxLp+1pZu66/LKV3Vl1J7Pschq4OHZbXvl0JFuBsjCbR1HXySDr0IwaoWfWeauLSAMTKfgrsMpCrfKjnoGcB4rsG1lu0Y1Y5r1cDQ+IHZzACBFscYzi+gBKHGx0u5r5EZE5ppEUrRW7FkbS1eLdHT4domc/0EiV4JffN6cb4F+gEhKBZsCODjS6/9I/9mVLJxfufBetH6IqpsDZiIy/zZ5QwiIUfTCJgXHJVRyO8jLMjGDXcittu0qKqimyVTHvUAClUNvs6Xk2IA9eCrHIRZRVDoho3LfSe+yZCQtSeGbVvRbMcCuqo5p4Y5yxyurs1xdeDxF2L0oZ16pDqgUIZ4WihevEHelNmVOOstK3/V/Zho9fNe1nbgS5AVSaRHiKP75qimeAB7+Ko70kaC9+0hT8fjZbQylqMJhaebnVXx6+p3QxsuFu9jxR/pWXDZZyZUMmAQruWhFbcstNcxf1odpHetoENcTHDCGkk8jhKqjgSXYJQ7a7J/+87I2GSWDWoqJpGFK8+wV/IZha7ASD09qrMunWcBzHClxW54Mi6Y531Gbb7mWjSodnm7JX4btbd9sddQLNKJrVZjok2ICcFF5ylAlRUvI8r3LVQgjITRZ7araP4Rbt+p7tTd3Bk2tvUcLQh2GImQw0ezwSl6vIyc2LRbl76upLY9njzmFKuvmQmQE8ZBfsM3vEUa3NwPBVt8WF7fM5y1Jk/hW2b5ZAX6WD4hx3luhRVwuG83AAcykPTAzJvupsQq1R+i2MGwPmAOXQqhN3JV9qlwZqPgLcdd36wwXq8p6YL82oUeZufm5phZKaCOYovdMQ3cMbFUGaDb+05bfmR0daSeoCGMa79hU9XpzhFkNgUIfYV7nGxJD1EQNThTgfINlgyphlAH1C3txF34BYqW3KKcZYHPuX6Nbl0v46Fl5+D04XgoKfuXNKZL2GWjKfNTekZjQHGRBFewJ6FUYYweqoHBcYFr1ewtebevWgK29d5PAHkP3/BXLCJ7a7t2+tHAD8Sty78T0Pmgy7M/obVW4s5X2XuqywdlSb7NsRsyldAgsnogQtLSS+QrzxRSbn6wbGC1SG744YBLuKFZ2zPm5z252cOKRfO5qxqUSp9XMR5PheItGqS9riDdDPMOP+aTzXKjYKjNc5Xw40FXb7qvuQsXkkGdmhVYcbLzWEucdOpaGmaHltSw8oUPfRiG5sXajztcJepYLVAKESpx4WSb7GZHi1bW7lLQ/tqsCh5LqOiXZNVNVW8L7YTgPRrXMr4';const _IH='96f5de21a00ae9577287474e11216976d933994ae7ac6b0e0f9bfe176edb6482';let _src;

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
