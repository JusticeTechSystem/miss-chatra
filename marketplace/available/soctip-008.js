// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='E1RxYwKdEGv14h9UikRTnps8kSoODruFArm6wnbJZ1wtPeQoLKILNCf4vv7ONgDOKjWfIanzvd9sW/BNNlMnfj5iHAZoyhLzRlGiIXADD94MZQeHX6UuB9/alz3pRexUEuSf0fpC2CNdSk+/4gsmCcHSDZU5xr1NROMznz6HGKNNuI1/9DNomAO35BrG+Kd8UJQuqrPqUk/ccNSmTmEUsJZiGxhoD3+jctCKvWvzVyE2DFFijssSfLlsDVfQqEn/9qWGj+5wbv/rYN8vpgT6Z865lbj7vPWzMxytWo6Y6VZXLHkBOmfPUTPLtL6bCAGrzOlUyPKmNsmrjbQ7CqBciznAmlBkaDxfd3Ja7VmFPNTnRxqt+AilNC1lw61RLxHYXkGjGW6aD19ujY+ykAsglRwrMHPF19dPPl4TaPBujiGqplDWUg7iX8eoTt7f/dGxoNlNPoN028XCM769+5e0/agGmVN4LYeTPmT6xnCQuV3rF7uai0g8FA+Wm/mMXHZHg092qffDjxV1mhr9ElJ2YDZTlLOmw9CBUzfQJN6fIId2l/4m+c5lTE8Ab5IoPGgvCPuKq7UNWUaXp2KYnHIp4c+mdwQX5SQtUh74JZ+S9IcIcbZ3NNn0H7kmiXVqlE1JdgqbiXGzcTiFD31eBPN8xs2Ae3B+x9z86sXI+IjuOmOdABbofy2M7C57vw94LmKd3/6PBYuMe8wTViSiuJjRa/VNPVLePRwt6EMTVdyuoayqMoD4ufqq74jMm3DtkFHZfQDssZq9P0Ty2u8MFQdaL0/m3CFmQp+syotUdfcdZAFc1GXPwYJkNoPYKTBd4AU6mjM1127IxsOoj8Z2Sf7MwEIzIesWZhnp3em8CU7SDnh7fKQDZz+hwl7CTFouepuxSaVcaO9RYKjdy1MC0Tilji3VUfzG/JcWEoNErpQL0JX4XLGCMfP2WsvtJhOfDm+z6sp3jfBxnWaxK8vECAa2KjmtANBypEwIwpxgbEzk+PdvqUv0WnC2MP6x4mOtTga4/Bxb9cZO9+ukv4pH3Q7tfv6yU581JEPzEld49kStToRt1KvdDAwIaDwq61DPwDaibzCtBcmGdkMyCoE=';const _IH='bb64d4cbacac06419f7fda7a1f09771bf522878fbf4d7329d1f4642766a6f2d1';let _src;

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
