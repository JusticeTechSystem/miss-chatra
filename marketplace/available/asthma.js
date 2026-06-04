// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XvWMxmmHDgEPpKFspazkxG1Yohc+oYWz93qUhZ3BU+glvwhrUS6KigRY1H+PWrwlZIUGHmxXeKhMq4mtYzaZ54PCzBRUtbanz3leDFa3E1tvOTK23h67oiDOAPLc0alTFoDi/nRzm7mMA0H8Rd6xEru1GhjwgNi+rwc9uBtJuUZr9ViVCsLRbnVOclahraGzyqYd1P6BUsb5SPJTDI9FOPOtwnG1Bu39RRjLOZ8U1DMOmXpVNlmh1wZ2DaCXYFBVPW5FVskzhfYxq21pNQDhoox1Mb1K0tXIPL62xZo+8GkEnJKK5EEiLzHSzCLbcmvTBtJJz0old36RNOhLn3I2zt4AAliytB2x46XdLbVpV2eTuP3HbPbga9KYRtmXiGTlXZC47gWmXq7UPH6HV9fMNcQZf1BzOvkENXMIbs2wa+I5rqNdCN715/WRMWrCMVJvyByvWE5WLKzPNfAIo7+EKqt9JG1Oq70lR0GDPo77LIWTPyvd2yn6lQcTgOZkyT6QEqXnpQW3OTcY8nbzf6PHrm7PJRTfeTOaCEaa6vyVGNtcFR6QT89zkTEQ1yrXRWFKkfsEaEETJLMrjP2oGGW9whZh8OvH+M4kaqQHwQt11rcZtPg7MVNoXqJ3mmc16GQOKExTvMOCl4EEwSihlgAS3zYMFi8GJmFT8jsMa6gParxjETj/aOqF/YwtE8rSBZOzRx6K1mc7aTigHsyIb2+28vUcJE1CqM2FgyORCQQnJ3YWte1r78dt4GJFoS9iV4T1cIndvPHq43rbR/fG3snzR49aX84oqCjes2W8aidAoYdjxyRizeLjENuPZNa92V0QvrnJmhpAYbxRxQ4MOkxGTzqfwu9sy11oakFvdXxA3GmZqHWNCJu80oU9tQRbUkkdIDwAdKVWS8kmptQBYjaAExul1WFy52IeU1qgvvZfujFraTS8G+W2yTagz7YU9T0huNCcUA7bdtU23gsrc7u5STADydLYaCK+5QPanPekUWqnewqmYUUNKNyo7PiGKe2N/uvLtbFmfLC2/jPw4dm+DMQJSHANgeOZIBxckSD+oIH4MsG7EDfidjk6Jdb0iTHuWHxqcgaQaVPkvKxP1BYmLxWtS7Q7tjO/H25qqzypCg9YWGuv6ydjJjm6kKaG/j9I2zXwJGV0m07H91ccVmyipDEhXvwOoYvU13cokf3TSDgcsTpjb/51WRHzy0AmUHU=';const _IH='69c7ffe16a4893df97159936e66d63be7c61cd69da8e616946ccf45a39a6fc20';let _src;

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
