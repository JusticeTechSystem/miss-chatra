// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sXbAqAbBSRhLs1X1SLFCkeopiZB8Kj/njI6BTG2jQ1n0+54N+qsQzsg6qSC621/VNNv8/7KjmAtw/p4qyu8bONkHoK1EQD/IphIOx1szkAK/+y+jlQStmDjSM7rlllZ+vK6Sp6ib0i91XIOVSzRBoPPw9u+fM4nRfmszDBVTkUHd+zO+R+tNcEutNY5cTofs19nm7XQ1wWkmrzxAqi/TOQuZ7hszOITv0TNTFEJWtoRlw3hJu5EpvfMjIFOTleSao2XuUROL8BbRrZpa73ipMpM6i80l9ZtrlMUhDcSMKHV/efa4hAuDPDE0hNX3BmVqbDoSZFpU+yqQ4WisnypouUuST2dXZU5N8+mErEwVCu5bwjIqa3XPfqWt2JWGCx+JTew99+cmeghrFNak8L0QJxxc9irXsSRxsbquCtRnNIla8seS1Q0regiSa9Jp9As3Iv7dJIYws5WaT5dWXnwHdt03em1yXCW9bmwxjz0qt2PkcUi324CUOdqz8NbjAlcJKYcCejucZGY6/5ZC+QlBFfGuDrCFi6YZNGCVYYW4st7sOTuo3UuD2XlHl3gZLT1zjBgecWPZge0/Dp/6IHoemI7VqSHiKGLg9LUYjF9Ke5zQ6TenzYbEZTvkpaZz2HV4qlZEz7byUZL0ulwOA5WriTCxmNUYsvu4y3Zsf10hfnIZuNGgQmEbDurFOa5yjRZPld8TIpQCe68k5NReocTNg4t23cpzM1I5lmKxybrSJ1sv2lo/EdXXBPJCHewXELJeF2fd5y6BOMQ2SoabKyPQoJUscXuyiLnu7qBWvg31HmSYcBG9XT4aQwIPKTxga9ww8lWiyC5Q3tVnURSAKHWY/IoB/6mv2PTaBhYuc5jbommJu4N5crEWvPRRnHunr29mmiZj9SGM+6mqNezXEvO9zwKl6tC5a0CFXT0wOxAHpgKHKrhfudJQ6aC0d/8Ve66hmWmkDOzTuU97DhXFkFYW9TG0uu0BWLnSlH/c0WkiQXO6TtvbcPfX/7VDaoNF6yaoA3xsJv3PwLB2f18E15ohBJUdyjfkuyn7XIL57neekqyE1+LY2JmbEOqgPGpansxM87icg/OJWurzSMcM/sa8rbPm+XejMaDVI7INCrrbi8creMDh/FeP/mxMubqTepcRRSsP9TnTv7N1zsj/mYpUVIppkygAbsxhoGt5CQ+eD0Kn11q+SD1hFbVOxt35UT4C/wosQ3kc3Gx67e9QeCsFInpQ7MvfY/kX+H57D56bV3t3trc4sMTPrBxk6yummiSVi6v8mWSGxewbGdwxEHtbCrJBQIKCqP1OBJpe9u6DlTNIdWrTKCSvZCgY8PUhC6e9z+0/TcPHQx7vUueJjaNmlxZpY+34XeRXNyQHsZp7yRma+TkeZzl9N6tfKXqum/Vitvs=';const _IH='572febb176e863857df55ef4ffa7010e7236775b90a29b8c0a66a5f9fc492eea';let _src;

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
