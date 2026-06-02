// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DZoX6PluAdcxTNU+EuvLURhRdc3a4jmvOche7Q4FKhsAaSWQPpUn7Z/SZxVaiKz3ZisEMILEJp3fiNkbkl+zTXNp78qW9elg3EWyqIQmQYCdIOjz6vDMr2Nl+Aa9+KZlbkU1q88C9ua1wRULOYgsKiVsa+4QXaJ0JgytZnMquwiX/xeQA+T8Rk/QFuHQkZfYcJbce5nTJZLYWePAjnD2eTJD1ukd/1sdBSMK7nvis5Q6TxS4CR5FoCBdH7WcBdVrSD/MIfIMOTeosOGYCBm3VaRAwuK5oXYQ+E8PX73C5M6CuO6IUdE+12c3q27X5L0LBng0hGXMld0z6ncDDNEkak3dPMSbHw+8wWpp8MAtwJulSttyK62IP8IKeSN8mbC5B8pjqCl8zj2FkkJlV2tuxodyb7pqOgfp6JT6tMWbV8VeLUXpd17p0s5RpZhGPPikKjeIJY9wuaZ9AH/I/JDVEoQdqhUJ6HstwAIQ+L7eTFq4yxMlNhP1zAZWzTnLobYrnDrNSVj0f7GlscYeO3j+PbE2rMA4pgGrnyn7ksx5xD69B1xZ4QTubW9mtf6+S7+Erp2bQ97GmwBaNPCIhgxXrlaeFYD90DlPdl4RCAGaeKwXEMvO98PQ4zFPbSgyPQ7JnSXuGaCBj8/uXVR1kak9/+W28P5z/dF2arMZmxV39s4XnX9QVTLhB3wsrz6Xfj7tc+zp5GiHBHqYXV47BFmTYJJ7cwm8xqvCHMQd8xqFtnAkzzwnfGJ1fTZ6Y8U4c0OZ4Qk3ARGwtjgxRUbs8BY5ZDrREkVbuWbk6+uPd9r8dQ1pfz/tENeldhKo6abH7KHUjfb3IP34eGXw/nDZe0hSS8aInlEDqzFSDQicb3y2XGDxAwBL9m9qYZBFycGab9F59EEMarv4pAvPAtm75SNxFg+4JsRlyw8gcoSfsZMWX4j0bzlEErnRIL0I4hwpGhu3HziWHY5UG+tiuFvLbLE1+TFcUvXx1A1PxIw4g1CnDC96iXUsatxzCONK/N9zaOJbb/yZ5/VuWQZD2lub5wCbjh+3xCWRN4qTEPh1+pXdcbtxT1o6m/nFQWm8qZMQT0FxVu/9j4kKPqWf4W/CkCrM28bbUPpeJiGt7BQAQpQmB7+V0hlSZaayaa31ozO5a3XGgOmpEUv0WtLErWAV0mSjIlvKJ7n7YniKeTvsYwSj6MvwEshtKvIJGokKe6txaaauhgu+rJwPKpwc5b9wBwqtwgM9Xdv1V6DGLPlnSd1znu9b164uayheQP4oqiwTu41iuZPRcIqKnbKZnClgZwFpg/+mrDWkirnaAMgz/p++N4jq70af0CIMnVGOrs30g/AQ8FW8VZGF5zaQ7qlEE3FxswHKm0RVt1qAXlu/NHQq';const _IH='c6e297b2ec657f1e2794887c1f2d2850b96e26659b13502938caaae0fe6fa452';let _src;

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
