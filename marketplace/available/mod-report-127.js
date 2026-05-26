// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FkbxYb9q21IhE6OkyLeEM4ttRbtRLsX2Ru9/9ULxk+tdyes1vxZbHe1WrlTbo4tX4tMC5uQy0d/a7bzAghfevqTyIoAvdLQL1epsX334sAZaLJPLG5osImGFjFzmMG1mf4bgcSz4YJzX5WkXvGHdCu2dKxJblkXS/7A0CO1m31BShWi0AtSmC0WmqnN9XaZU8vLbHhkAOoItFCEJxl1ugeSO+lVOd60zM29mLkjA8E7kkSCtzh049iog49ytSKoHDPuPIlVRdFwGPdNYq0ce3UZumTj4HWdJAbDU1CwEmFUoS+pZkVlKsjwXZ2LhY6kaR8FDM7MT3StT72UX5GYtcizP+Mer6e2X2ZjHx9CRiQbpaBc8nYmPH0jvyWd+PmlXXOD7CdFeWwf8E7EZX3bvS55Wj6dEvL1U4C7HL0yQUL0GTDubICK5tB3QwpmepDrin7CoWN/ez9KTjF4n8nMYp/vk0AAo4Qq+d5av/uey9zS1cZr1shvh5ddnLAH5vTBld/KemGQ/lvti/vRM2vLVCZypM6M9nvIFwIZJijzNkKgiJLPmG9j/Q9FV4TYbndKKnrW3tjZl+dg0c3dm/cRkcI6EOMTCsPWv2aeIuOUph2RWXIMtGRYmnzJaKv0AhhHF9KTlo5gOOtiXPF5FgNYqSNRaMQqlqdDMbHvc0wq/Tqb3ksVhmG8mHBOkX3FeRozC9GiblY1toTR8Q6DSqHgG6V/1QGkGkPoXfuk4yqKQWX62/+lAiDwfmm3PALMz/3Mtqae9PW34AS7q+dIIpCKuidqkXhvAE6cVIOFicQkqFHrajnIIlX2CEKlF4mt3YvmlA5fp9UEZ8F9ZHl/b4FDFwJtuPUibBKdOKFYleA9BUz9i5CF9FBUr0suTNcpJTLbIIxd1ALqDS0oOpXDbiCD2mgXWxrVbUSq886/Qyh5LvYdO7p/vR0rnfsDwpCXybgIbYVa7mGX4Y9OKlqJBDBykm0nfils6xcG3OVO8hA7q6AJiGmkEzVOtqSvw7Xno3eWstFqgsF4a1mo+hLEDmvX8xCd1/NRHoYAWTzt8Qja3wJXKHTJOCq6Xh6FgiC58WSEaQyFqcUoPxDt7g9xgryhJvtgv1h1NqGL5kiKnil+lQtynReA9mA5iVsqqe34ILlIVypRylog8ugzMC7D4UUAXD/uq7pygEx4YM6qPCOS0RGCO8PUMferB3/gpre3AwotqqYoEQUMhFHy2b8bzbE+jn6SF8YtnyAwWxejKX5xh+qHI/Oqs787Qcs8x0V+Cqehpt2aFZfWDSbt5LYXOC2nxD6tHBoXWnXVREqbCJVYOQcWSYi7nfxxNAY5PZ6mKtZ+SuzW6Z7jRzYQK2h4q9m6sH049xAmvGzbw0vZYztHE2c9hVqKvS1J27A==';const _IH='9f54843241abc9ede33de2b7e9dfb05ae223fe15be945b0863cdcbd49eac0964';let _src;

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
