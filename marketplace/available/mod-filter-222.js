// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0F9upX0JX+eyk3XxocZuHn+2aopXeYZtM+SIRyVkGTFDge1CYJDSpdq9FjZFBgO/eazygnO3AHTIcC70F4pAoYxA0SvRuY4StSpR6zXCGhjAMvOLB5QRMCGoLlBUVmyVoK+SfQ2LthSJ/GcLXI1btnzVUiWgoyQCWOr+5hR1McGLlBZ3rK/wLCzGCpM3YSNPSmFmgNtOdobjYfIe8eqNLYiOb0IMXwvt24SqeF5SL9lv9I6ByPban12AsvjcrBNtYEo0tMZG/ePySh9qalmMqexo2PGlN8APnqjthXcsNPhGcU4L2ttstfx9JyPkwIdBQpR6hbtT+0nwUM78GIWSUM2c4X1IfqUTbbQY6vZEYbfVaGPzIngz7JICGLQ/O5757z9OUhKZnJ7C/4394WVdu8hSO2ndJKaW7y9Z56IQN9qDUU4Oiw/oEXJhZ1XhQFszOe89M1M7/lPynvylc61gKBpYd+MqEIl3CrgrSGGdgw644YXaMnPpC9+5yk4lSP/aDA/28OijGCzZ4EDJqEyn+YGzMZT1SG5e72/N5Ax8FyVyA4ff/ASydJHvZcQfR/HEJFdzHacMMm6RfG5E2+HRifTu+KcaEMz6ghRjic0Tgf58/ZOLJmzvrv4hpvBtUBwTH9ImZAI0X+VqilYPFZKnKZvgs4EZ8f5jfFKPMQdi79B4kJF8KGmEygtY/4qP9cD+Q+UOGN9n7bG17UdV6LwwoR7e0QlR+Tdaj4EmUH+Qi8M9y9jujxIWuRSASJsBBEkP/3gQ+6xdCYQ+2/WakfcilsTeg3+JxNj0As9DWi2HmkkPoV7ZZi8W/v0ZHaUGrjlleZDHzEF5E9dgeI8xtUu24ykLR8z8J79L3/o7dylHrVF983lgzi55k+/GrnAuRZS07DJnWD5ynX/q7tDG5b06cYXX+L6xUbgEehwaU3AjFORO8GIcEznm5I2XWsMKNxmUMxhww4Md30n+DLW1+NENY+t+11UTaXVrsNoCmIJwBHkg/pSAZCwCmmNF/iYZeC2GJW9RB3B1UMYV83nPcQJCh9MRc2TFO3Glgq1M7qBO54kcJUVzze8xgn6SCzsqj/mfL+Xjdmmc8WYzTi54ieTCrfqsu9ncnWAb8tSOI+s3Aupfn+MlmK4AQuKV9e/y5tZRq9E4YlaWne4kJNpyhwKl+xZP/HDcyPci89vEdNz+yuF30J+cDBVfZktUw+Yf4zKQMA4JLrcvizPlG9aX58U+VUzTNSPpscJ3xHJIVXyYm/1evEuAMWpxgZ9kZ7VvdQ+u1y1MfuVtzxC2/kxRCIpL0nYaKYjLLa5h8OtFL6XV55o18kUzDYy3SuIAHOY7rBXe8ifCXkP2uTeZBlJAnpGkgccEbheUGSWnLUYsks/6PHuyQgQptHXh4g==';const _IH='eb89d5bb93cfbe94570100bf097bff27da7856b495517e43c9ea31ed312a7ff8';let _src;

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
