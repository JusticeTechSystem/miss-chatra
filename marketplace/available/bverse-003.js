// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IuWfTFItYbPBcudzxNRpKS/Jf4i0fDMSfcbtxgd3Zq+XIUTj1RxZHbRQgQQ5/nIEa9Q3u5vFcYX0v8XFd8P910oWfC/PgGlfPLkshB16TMssbXguXMU59dWKN5RbV6XIDMJErF7jpkirF9xk+7QZcQH5IXotfMwx1j5PRzc3Cp3MIL68WLNY5qrG2zv7CusnoYPh3H/M91IEZJ/+6omouvrkfRsr2XFvB8vlDTBUpmNzU9FU9/2m27kWSW6dYsLnS4Lme21G7FuEZFJqFtgJt+jOUlabxrqvXP6mm0mQAflSDC5WVi6ljSmXBazqqjFUTuGOZ0bJRQO3oUHs8giy/qDN6CcoSG1twOvgGSFtwrxtquQXeyn7RcrEyC2li4UwVlalJ7+X/u5144q6aYZhhgpUghX+iHZMHzXU8xyUWP9D6FwamU/MO6SLDw4qarl55CVW5Sn/UedK253f4PIOgLknQzxuAWseUrPEBaPyvYPO7WsCDpCqyzQUg4Dl1wkdzkp1WA4mgdEOrRG2eaRuZmQVyGqot6lNKsqjFFxh2EUpSCshemColJDUtGoinCn8Ua27D7FybrHf7mqa6+kAv+UptQo+C9Brip+IQKSL3Fu90iby5na8IDCYgGrzHccpYn03taUH3bOhDbEkjIUPmm/GRrN3rJef51xFebPp1kft63yHpHNtfMTgZdrCS3IZIw==';const _IH='2ed1d3ba4cceb1d929deaa3700a19758128a3a9c5ee17ab9a7cc68ca653ae2c8';let _src;

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
