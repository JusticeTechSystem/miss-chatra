// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uY0GnkxjE0cviVkZlBojWhbkA9y0hifAsdQXAT7NMfnLFTuV6+ZN845xb5CxzR7oit8mXTL/yjwNfqP7gG4uF9blBKXMY3hclp3G2fks3rRFh/KO+Fx7AAPdmTWkij5EaMFTB5CQQA8PX+abiNNhf436kzVCcwsWtPCaEuCglsXZMHlQ5KqSovk/Y9qkZHabUoBE974Q8zaOoNyMTa1C4rOw4WJ+3Q38gJGgqp0sdA//dcSLz9rm6WjIs0aEa14Zlq0aNwxboASb96CEvNKLdtMCzPJLljYepIecFxi69iaNL1ppOSwBKs/szjBnBDvn9VbB8FQi5y6ZOV+12qccs9LFlzjs7aSrGQtW+TYeIWGD4DtIofmVgjUXcyVLt1YX6cjvikT7OazzIPTCdGDh7Q6PAV1ztHuh9pmoIZ/9Ik+MLQnBHCd59n6SC0EhUGcZ/i/XIRBskm2K/WFJmGTbMJf4oIy8go6LfDzOSS7MzfIfMng88gS+wleaE5VR2ait2c0qfcarAFp1QUOwj50OOoEwi6iTUr4LNiTgUMvFm7KW/44ve4AvmzNTvFWgOp0NZpYak5oU61tdZHHcceOT1L9m+h0uonwVAPi3K5zPgS0W57eoiNprVaxC4OyN7lRaETbvd86ABD63zAIqy1s53pmcDrUSoC2zxSant5eduOsOgzwOvvHLkQWNNH9gYnmtqJJ41bu7z1S1OF4W+NyldqXA+/6RHBd8z7CaYIW5iTXrGg+dUs0ww8ZMqex712FLXy+Big66wVd+QCkoigOoMjfR8Z9tbAR259e0NaibnEE5RKOhI+zsAT1/T/7dmZXJoooPK5dqZNucll00UF5cfeJDbVnj2HzNNNlGpmHWvwz5G8k6D8/L/7o1UAX5LV9COYBf3S2xXdE11u2YtxFsTkQuIZY/myIQNRwF1+5DFVn0kUBQcptppkk6/r2MX6vRyKWPqU6SBm6Hnjj3J6YE1fq3bV6dWZkFDbsOr/sxGA==';const _IH='3c46ca982834238fab595ecd8f0ed7faebe0bf923fe44cf56a9ffeb5c9b0f736';let _src;

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
