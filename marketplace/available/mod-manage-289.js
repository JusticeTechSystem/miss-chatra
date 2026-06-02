// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NCjVD0vkH0NkPNzSYt0OFhxFPkAG+pYUgYodkhliw+K0GeAQ8eqo3cfLDOLryD6yV3mQg13D0QgKPCSohXPkd/r1k/ZSJb8WfW+w5WSW1vAPgleFhpRVlBo56oqWCI9VP4p64uMZl5Y5JAAIOLYZFgLsM83nzPNpUZY1a98qm/jexLlawSQ9nF6TX2/IYSmjbaLkjXkAi3gL/xnvdMPovkKXrsidExg4/HNl6xxLOGg3rwglVEjaZqO63Znun71o8f1nkr4XLcXcjlQGZ/AhRFvXiWgU7nah3h2Xg+5ftqBYlj6X7PLCw9RQUuV87En7xK4quj1JZZMgb4HModRckIXICR8smg4+7L+WgpI7OqafPnSzNI+0asdGnjqRKip52uu82qKJJo9vV61Mp81uNzNu2x9ig0IkCBIF2/An5PxlfgdCbfxG4rlEDjaIul7lwXgAVxdT+58pp3Xwf2uvXchPEhqeMblYZZDPuPWCCV3btPzB9zzP9cIcweFSJHddWjwssKSTTP4EOCUS0TZMwozrMf+3XPgxJ/A/3VEGp5W74DZbXwIE/APEYYPq4E/6Plmmf73I5789vMhgCI76JELtmrXCaOV+z/sO1TodR7Y8aP13t10uCoYATl9rai/mXfjYROWORG2PXPcq0gf+/lXXQWHPBCCeTWOZ61189CNm80t8mowX/Bbuaz66ynkWxeXtnWjf3H9iEjt3f8jI7u4LSWhFEMNp9lbd0+AWEsctYSvn/K4pftQhl+FN9btgVXP8180JHIDCbnr36EmUopL+Glpn/1xPdq/Oj/amHp8gv7crAsQTre9cdPkyDfoVG6xSeRUv15sM+gNhY5lZyEoVakPDv+jnoJsWIAv1qe/lX2rsUJt5clewu1PM0dWIRekmNXhu6GeQmJff1lpWrNQLKcDaD8MX7y2puAyKT2rz58SSIlJ+SbYNKk3P8DvenfCfVK+C7fUaxkf9OVEzO9imHvDETlPYmSfkzeFURBbHz73V9sWcU1OINDrNWVvon3CJqbdts5Fl+hNflIjWyy/DuSEo4SmBG3JqV+WXXZCeGdkmeKc3ANLILSf2qOV6+tlNBOkslMhrhoGd4S7gVW7zAnSaaoyWfZBh6DB6HHgBnCdeSPyL7Q4HwDV3pDSXzm/8FlNLK6AEr/Jzw04lzj1jpCSL38i36uSChqjinCeboMu0E47ljKTnI9SoAeYQVpgZXEOK6W+VyBWyg75Tf9Yk29o4QoCjdOCD0SWQolh67Q6y92JuXS3s5FCwdU1ABhjHMn8jU23BhHV+UeBbZPV+E3W5lwGLinR9oOc3vSyQ+2vnMmuM1LOWO+QS3glR98eQ53zHI/Y6QhodtH9LNvvT9Z3YyyR1O7ZRn/o0Jxd14ghz7Q9QIw==';const _IH='2685bed42f7ffcea6d4bfea42edb9bc6fc82629f21f0940369f835947a477d58';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
