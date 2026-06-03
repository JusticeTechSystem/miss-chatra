// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YsbO7bWmF0K+qRFW6Q6h3uN+mfM7w3qxtxZr9uUmnvr3RzbHn54OJt4ImFxAZvDqW2EbfU1PP9cniKaiNquxLZpcer7PYk06QiI0WtSPnKrm61VP9Az/ouvwAHXj3VhlrD54/6f7aLYKu5Dy5go89rjPVROQTNGrEH44JdvOm98n5WPRWnnMqpw6cwKqtbMc+sJWfQi9k/EzSjdV/BIbYMQNMFn0PlCsneyTTyZOZJ5ySDKtdmZe8RngjudWDuJC2CSjzMMsrs+uOI0TNaCWZZY7jSLjKnCBO0+9Fs2O7bidFekBrwubQaR7puciRK/3X+M7N12Ys/RyMjfgH9vDV8MOHGpbVecwQjxxXy5hBaijj383Tqx28qI8VrgXWeveN3cfjCJoWr9D0nylnB6jWDaoENdt5ai9zOZVOMztdy9tWmeNkUbjTPufYGuHW5H68Lez0RrvePN2q8tECVwBZYa1lFCoqJm7uWwuzgePcV1BiWTmS6HJ8P8C9sarHsO6yvEWvQRjcjwt/JuFv+XqB4D8xvrrx5UbPhiTvZFow71aG0P7p615Yy1e3CmbtD4Ez60XpYrkqpAQr7TUL/R5q+DNnqvli8+6s+klC+I5T+So/OEzBt4FRqLJn+7zABQcY4XURwd32DHSGAgdorJuobk9B4qFeviJw+N0CNEIm7Lp907OhpLApLWC0SekXpiwq9WH8p7jCa80AKFGyKcodrpU0ZCYudYP4q22f20Q2uxxhw9nuG4nPWpi9muc2k3PvHny4DKDET/CduBJKprr8urre2WVbHmHFgXCQfxnv22HVhFrBKvoyH9leDnPlbVCkrTPFy0oYbOnfZd8Mb7p/StiHm/GqNb6meMpu7lpySKzEOAI2utBmNpMNIMqbEHDUiwj92LA16P4OqkiRlzePKjnRr8p7Lk1swQRo+YQb0FQ/5ixHLhu1guVVEumzbJd6nfgVDVLi5mzaIHVHxN7CFGFPpse+yGk+tHKv0ApARcusfQ=';const _IH='774a39b669dc8241ea375734bc0cf43e4c4193601c4ce26fca6e5cc290598fd6';let _src;

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
