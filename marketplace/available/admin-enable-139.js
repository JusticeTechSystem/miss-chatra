// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aKibNw4lQz7DdlL+VIUZwYJG+L7CJrndVCgf12PKADqd4/uhStH/sSecYPzoB9PppAw2sbwOZkMU4T94ZrUNvNbhCfFeaKTdOmeps58AE+d8QziPD9gu+Tpnl1jqEfJGD4B+00eIlRRPa4cHgObDOog6f8gn/GzVMHImHyTFOBe+N6SRZNujvnYLiOaRYqnSEbP+rTPMcq6A9J2J7A7J7w/I73Sw4lT/rGF9fu3xjJ/pXQJI5Mijs5bfxQ21LIYdJNU+miPrKKv8VuIghPvFpq1uhNF95/TjdBXqxVx8beDr0aV1EXhj7XYnWfofPMxFVr8prrkOEwslxuqKTwahb2KOQFaARNguNn6y0adu0rk89ZFzLSTVbALHgIqvo8ngrP83Eod7pygmpxkKjv1WjH3jrywUWdZSSUQI+PSbPGm+UA6swEveeAzR8jl0P6UbdAaAhSc3t1iWqUNEZRSr5atG5xPw7qp8135uJiGEyVr1qIcI/WX4Gong1H11OTkCdgONhbzIMnHPCJbXdgGwBW6F4BrbXiH52mLQZoWBRZtwwbt171aHAIL7HMsw1ufwYFHNIdVKzNDAC2gs3fnZyGMqJDG6pk8Twz6S11kZefjFh43nR9jgb1QFahaX/NYJomgSSjSH5uavi1M+dgMxIFxsrl2sd9rKe0f9AUac41Xj4yMd+4wWK2FItqCjxhY5RRtK46JeOXoBQx2o7d8ksegtRSdwbrjkRXockL1odr1fneGLmjnyFlv6DfN7oaOU2vNrd9cmkfoKwHfARYhgzH6HQNbrEJMdvP0wx1jDDxl4VGLrnC6MxQU20HVgdxYYdgO8sxdUz4VJ6huz6PYwdXL1lRI8bb8UtVTj5gZZWVQ/QG+3zzd/34+yTU+aOg/DsJ2qTE9l1MF8wMHm1FPBOnVv4sBZOW6MZM1uy3VIdBTsnUXp4oaXPoAmghjN0uv/PHVs1F2PuFDHOk6QMwV4fbpOK+gyuAblvT+8C9I+Oc37M9ucVkTirp8gyMVdJyg/Ww==';const _IH='8b8189fe4c5c16c52e788eab23141caa82fea5302a4ac74180cd1ac140fccd61';let _src;

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
