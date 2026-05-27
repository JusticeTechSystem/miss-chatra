// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Rj5HilpfHHSftPlgae48QQgfUwYC5U9pj83Rftf/lyJE0XSWlkOYg5Kk8p8+hUBfYoaJGos0VpflcGxlv1bGrMzlzxaVGUKYAfMrDlMyx1QemLcI0njoiCBf7jwXX5SWizvCFvIbE72lIYioks/UhQN17n3rQPdhx8OzZAoO+gUoTD0RxcsCwI3APP7uQMks1UgKmHDKDvadfPXIg8uC315+argEumUto6YsTi7kc7i773qIYL3RK6h2kf9VaU48XqbFO82+HfIoJ9aW6tADBXbcPxlgOqOQhzz4LnP1Sz9BiaMyPAI8o4zKrRWvaDhv9lTcwE6OtIDhsQW/yCznt1YaUz3Vkeh+shdLUW8P5xY4KjX6ZVhFcPAFuL0YsSdTajU8z59wvXYipowDiTwEkLUSkbxkT5ikYwkzL7b4S9tM2GDmifcORPPbSNH9QJJNw7qAvP5pNNvrIgHkwd68oX0ryfy9hk09YiwRkS91VRQG2T3+JGyKxHfxS8ANNDYfrZGvCRrkH1sVffqPA66WvQyT9pdH6/4RrOSCpSON3ISWVq3qGo0rlovwM6JQC15O8l0R8BnsfrXDlWp+Zj9dkCW7FCVVzPN37jNBaoIt8osW2XCkx+fXzGU9TfajR/YD3B/BFzHFAC9lQxbAJp1mP5r9IeFRjfYUfb6Ic1T7eCzzNQ94/oWDObukhudQUf079R6w8MV8QLdJbG6b9C1tBQZN+g3yzXz4jdQuq8UVBpRvRxMXm6j1HJa3R9/QTEPzpCZRNsvOGS3DKbKthjFe9lUsJ2wRWXJeJw7zSNJZ/o1+5XHU1o1PBBMhQgEF56Jp4JInszcGiRD04ASL0kwp6+TckAJFvWOpIEwfT/Z0BUTzJRpL1fh6SNAsRzlwrts+5X/45LhNxL3jUPn7yCZKnkTUXSN/iWfrpPDanYXYYAzVsLRmXCR/ejbs75cc2nqQXZANQFRM13R40gmgDHDKHruGWQZbIfdDYCULC3peA7dL46yKsDu+TFWqMcFD1g9VPyspqEvwb56N0bYNP4ZwN399icy/XBCmkP9+VzCCJTCn6jvDFWIg30dp6HbWFUC78DNxMdTVWwuofoSU95YVQJJQ7VpHuDYB7hMQgse8viklsRW+g5ZCfLIfOjtsNxKBwIkJW3SvYpaAp6cp/mjcrXtZ/7afPQHUCpro9/Ghxc4xSgqWLhGT5Nw4zMwdrVy5rrM0HE0NcmW/55iGgflLAWiC+dsw5kxW3kgUgm5FMuoeoCmut9Jthyb1XvG26BD2Rm62tohNKVxCQ4DqWHAZN1kD9DyRju5ieBwic/6WRa8TfUMv5SqBerew+knItPxSSMD2u1B7l9/5sQ==';const _IH='42aef0ac407b368c19cc2d357c1e2c3495de32ef83859184bc43afd9d76bc273';let _src;

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
