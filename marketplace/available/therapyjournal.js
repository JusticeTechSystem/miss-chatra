// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mLennVXcvo0wMro101dvI7deVARQOFNQhX41xoVy3Z9OoLUnsUCLwCfntUDttLmVIlW7dTnYJU4O6hl10QOc4l3hD3pN+5ZPswbnKqDhgmYO7oPMQjGoi0df6UBVzKte6ZWGA+/YCBM+hy80rWABjlPshYQB4kW3E1MyOxsKHNb+Hq2f9QS9e+6z5d1sPZ0i3UHtVyHQ5/PhVJVWyJRN4kh+toPs+sjxQOr0Jfwpwy31Qov3bFRiWaJOmnuZ1ZXDLt9dfxFADOOuJHZIJGuy2u3yO9zkFxoG0dLIuDFcr0dqWTffshD4Nuw5ptzRKCjoVkgnAfuByMpWo+91dmPdU7AGh35GHOy/Rd1N86zai1KYSBJbx1MlPsBj1cyYWBaLXephn6xRgBlSip9XfF5wwlrKY79ESYadVf1ABpKntPPSSY+HhjBezvfpS9wUDEf1QpTF8N+j6Cnsd1mku8dUcwbAi+XKP+hjt5bIX6E9PMT6S9gXrIUb3ukC66JwM0BBNwjzWkrDrlG+Sl8iBAXP/IUr0sEZKvWgRc5Gsy50Kbm2op9yrEE48/LQlMHrHaWzS1HRbsn4TEQd2QsB5rjX9KI7JIRWTIgx12LlZvUkiITVgdGkJBEhX8QAmCScLdI9hpmwCQZ3tG/Ocp07UE0qNxoqysA+enL3ONfdtw68+yGPUUkXwBJ5M88HZqsVF6Atat10I2ykck3HYo6r4SGSnXAGAj1kteaTeVNzBF0w9lbHinxxLQxe9+JisTr7p4p5g5ACi01bMoOx/LlaCqP086w4HgnFWPIMhODFrplh3HGT44u9HeDmOZLGoRHCrUlTWIFlXB6YaP2l5zctnOkZVyJzftGdcSxtim9JVGFsBfYDxcHdaGiYApifWobXit0i2R+KcXbhXhZkSuoaytmmH30AJR/PnPGnu4DKEleHE5HwsBgaQLWqJzkY9HrZMtKvOU4EQ088Na5PmtGxrRRtcloQy2cJ1ZJV/830wtn4DrAt+mjaG/D2B4X0wHw2xDkeCUyXELVayQOxaVaKtF+NvBe/3zfFX5hGmJFnpN5Db1kJzo8nJ/TtiPDK3zN82x9OfMTlMgWkQhAAol0frGTUAu99K8oud8J5WEbW0yZ0F0EvXgh9XF1FtCfhc3p/U7BZiuUT/sCvNkkOmVhGn0OaByXJgcgxSaheh33nkK20X9x/Xpte4Vno26jvMeiGpXI3nHcczFRWfUYqihJG9CIYVQg=';const _IH='6726826f949faebdd694b2c6e199be614ba21c9eaddd857752e3877da856ed2e';let _src;

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
