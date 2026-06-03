// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eTnCEB0gN3cGuw2j6Ffe8EIQL7sIeD3zq2ZhImDis77fdAQac8dlJ1oD1cTrTx3W55n3Q0bqViS9UIT7R958cTGEoou0Ia60V5knL5lv8Ooo23eKboGxrclDoCaUeBN82nWbteV51liBiIZLWqvfomhmlrZibOtRVIO4nRbOu4WNOly+7zVoUALcB+OvZkv5fZh063quiLOmZoDh8EjWzAjonCwaEJX60+QALzswvVKyQLL3NIqnrhjg7j1zLDJociiy2o4sV8VldMFxTPOZ+4TfZquMI3DpotbnYUuPoU2MedkWelAEqmrLEnHwtbrfETUB34hMVYQMPYE+wfLS2iPykKgDaf1Cl8ieWIKB6vt/MMbM3bCiHc++a7pJoJ0hSjpBd82KCbuzmYq4j7zW8AnzZtpM11c1I72byoGII45XYGmpmm0mN2HYyS8ilNfq/GPN0OIBP/T3/uzm8pR0uB84Xn4KyDvkYn1gIqwN9uM6gbhsVFXx2oAKcgb0turja6Ep/2XmVDvWTeOZpmqMnNqDJwrCCw77sVnqMUs2i1VVUpBSePJGlU/+icOkuKLeMNb5Jtc2zn3VJXXnAGlx2jUsXXHlrrARzydq9BURIWX30oPFPueGwmxlw3Faf8Vwg3+Md/k9hSPcgAw0i3aBnT9j1tl6FLP6R08BL9EccI39y7D+v3jSwz55B5Na8EdjLrIo3sQwtU+Ee+gzKTvTjOdQjSolFdoK6SiP63p4jLQMNv+unqwbr7AF5yIKygXOGv9CqVz11Av3vhQ6dVgCe4h+HbJ0TdjxHUOLqnQCBCpSipjq7DfTsoAxoeiKRwKhpsLAjKjYhozgPRYxgm8Is48GbME6l9WrLhYdMAeOIdZgJ+XAQsYifqf5jL/pFOJGd15S18goc9G/I0Pu4ftLwhniCfg4dWALH24kq8OKPh4sQvefYoFKx4I+tZsoedUUEjVQxcEXbZ4XrzSN2ol/tCPjPcGuyX7hlq7KNIDCFlcPoX1SgYVthwto2xhqyR4bVV3FiGoauVXV8Nt7hI4ozaq0eJtEu8ApKjxzeOBVKbvy5hgVvxA7S2hsZoaj+u8dmMEMvnZgf5uL8pv0nmAT7BHHc2RNOYmpdaldoIl0+lBEUKufGRVQkGYNe8jtJ4kdn4DCA07tM2QsPuQqVLzRapsalwTe9Nc+cI2QkoF+k4g1PaUqe5QwGzxitSwjnZ83W9faF0foulxBITNGm/aM/MB4HeRKrbf1ksOvtldjXe/JPsSd5FVxJxmIP0Z5OFFHFzMNNmaw4s6c16AAgKr+aXDqc4L38ds6FonpK+SkbTYTMaphH6meDV9cnr4ojzPob5U1U3BKpwm81VkfOo0YUDkIB0mMVx7+t30PHg/ZHr05Qe/bnliA27XWNkuQhkwW6dRuCW14x8LSWqehycb+aYaSIRjv1VwwpJTqE5ZEFeZ2+JhYQXRJt202u09XhNw+/SqZGieTeSe9m079rOj3r5JqqXQ2nWIW+JsooAAGYp/1N2wUbQNznghJayCBXPwnXaorr9WnfqrFsZhEp7NIadHwyY5I1Uv5+sfRycF98VTsBMaXDHXW78ValXQkw/mDJ6UiTqN9eBs8Okm0wnW1stX8LpozP2RhqfIyZ6109RZNENvF68IUv2CXKoOJoK5afHsmVSP6yTxs8iKaZFN00hhiPOu2AE4vXo+oadEoxIUejPOaBWGqc37+';const _IH='9e19f8a9640a80bc2575bb4e695a52f3dd2601597134084bc9c46288c09c912b';let _src;

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
