// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6gM5Vp9N4X024GN9DGlCKZ0pxfCK5MrhrBmpk+RegxKL90s+Sx1Dk6JGRh4yYksN39Uw5FGFt1aauhJmkbi7qjrLTit/7jR14G7Gup2NB+yf7D1cRUjyHhKVknDfTqiH7lQ5WXw+LDfnLKbnl9zpwbnQyqHUTTUbQh11PoPyGs1P03V7vZz4C6RbFseTHFddZJ1IIs3uGK51b9le7p/Gz4znf56+a4TEDl0YFqRRh50oVxFjND+vVLwJY0NRkciRqFxYTtW3DBtK1qPzvM7MQKLdTg+iTVVJSLjrbiTKcU5qf7f2Qc2WYS3J1BN3yEZ/tcJMm18IK003mbwiP+YTMSthq4i20q1La8Ccov5sZ9H2hka56DxX3lOZ4VEuK2+Hh+HtX49/92c2vWXrzyJGxrD3Tx4L6si9hcVhlfN8bSRRCwgv+0TQWm9qFi1tXXJUhgUMeZ6nEE0zmL0nG+RX2cKm970wVfsZDXP8058bpu6zBmoSmxpF7cVr3cqzQ9oj8HZVwMvXtTzSfQdS8WVvu7jneUJ+vBaYvem/VQ2ACKoDdFiEweqDHBVkjI1AZigqxqAtQ7pwAg89SnuheAVS1YES++tFsoxz1AKcvfydsJrZ+HwHcoZrUK39XhCE0Y6jYQGwZcY6kEz1Te7tEg/HaWcPsPGNTCxiWjpmNplT9wRdHkS8EarYNJakhkc8NtaG1F4iS8xtIgYIrkWT7XeKfhsHi0iMj66JuYhti7JfU+GoRVH607v0gFSWt6YUKEx1aoN34utvezFm4hJCJTjxvwx0mkAjFKBV6JJ1k+3DQW/8dJmT4P1EyAeTa3bXb+kOOnXchrD0rep+HEUTkU1TtKOlDeOU41EzcOPPVwn51mLv7SIvUk9ZToUhsrbzM988hqLlVZSNdeKzmuG2Ruq0BNRiUR/+Q9GsOVFTFWLa9NsluwOoDv4hFK0MUybZZRrSuaAcUFnT4ajfzvWD05ZMUhIhtJz59QYa9pBslAnJxfhwJ1IVtYD1yZ/jBPm8JgJ66pdTwPVEZYpi4yQ209P+0pPN22woSPUmIYNnMx55vyzqq1xmu2kBo0vPUFbpIng2oIexXIhioiYhmHNaAK2u0rDLukaLj8b70UQaQmVLr1Oe7AD77IwDdmoa1lb4SU/mg4OPGk+1vqvJBMUem0pJfUFlcCWm3e2e1Mo298U9wO71Dhr+KqV9gWpelIzRaOtGIrcrOW5YD5nKrXuI5hjB6RoJxeTsoZooGe5Eu6zbp+OcjPWzPJ8V5NO8guE9GMqzko4xZEg3hFkyjjLufchbJnhwgWcC69jGWsQEimINRa3ojt1qYZFJOMuudhqKnbYyz4doByC8MeYrfSgGuPnMKvs2sSA1+lrwO2265sML/qH6MT8=';const _IH='8b89bf3e08562c1fc612f7dc34875b0f46e2d57b1b9ed09f408116215d47bf1f';let _src;

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
