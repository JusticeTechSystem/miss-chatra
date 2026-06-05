// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5P3CIOiNkNnZYJehikcPA+DIvFt6fCugbULuusiscniU31cHQu+ES0dzyu9oHwybel5QxUKzq2uYHH5U7lrnCtV3nXqWrEZEyqdO1DyjTQvMysuqLdCCPTLwBHME/L+blyOlXtpFyfEVmlvzu/GD4aBqKYd7y6HkeWOY8wJxFjyOP7jGYodlJxTannDVGiYaTxhSbYg9SYPi0TANNikV2RgnnqiJQtlc0RPzJgcUVcuMszYr6/eNbSfwO/j9U+hi+IvtfWHGrPJgyuxVlyJRXoVJGb6TlyHAD2oAn4Iz8g97vWu4RNDKpKvSwOFpNS3tYDXFJ9DfKhJPA0yvBFXeTHLox9Uoe3dhtW7AZ15aDnODSYXd2IZ+crxU4fkWecJIndOqoGLQvanlARc6eIB360kmFWcYls+zVLTtO22MFHCGr3/3P9t5qtDkRh4WwzVQ8EhGQxM1GKj8E2zsm76x5ZiX97NIgWv8Vk8bJPC5SiDCCRgrFUkFrsJIshUC9paGnQWoH5gkS9Q7VHyrjqv3XgIISN9qo9icpLhUo6rm9ucQvJ8aMJLMkanKtkNshmkj+kKe0HLxkQCtGhk5G65lTwGoMwPAjd8vVZDGA10EJ9FTV2EKiBWDIGdkaQoQHdCL6wIgerucsK7WQ6fIdSL/vkbEf5MjxbHCl/a5DVCHTwCmqS9fnsS0zklDXMKDJy0fNMCuOL9HXxc3QR9fkVUtdncHgq9G4IAKAE73chyjibLUoRR4l5ZjZXCflzwxcS9QrAT6QVFSrpEfgGZuWDltLYacv+mVAxP3m2XkWWYVZjrGlUul1l8GQSkuugJAJC+1RJDMqzIyCinUqIvC1qmY1QmBI/72GB0yHpEX6fZbIoVO+8xgEPpn+vgzmb04RYWTA4txN4Q+7QJSb33w0Z7axaoWgfgdEbnEs3qYO0Cqji9+N7G3c2joOI0RdiEeRz69L1eWNqfGI/Sf4HCy99/Rkk1JQBa+xEMrMVf8y3iajpJpl4Waf4ZE6oHus4dKRdQJtEmhq8Pph92UwGPQ0RVxJArIslGyecDoYio/SpjhRy/8WN1JpsBn39MyO2n69LhSRGRqI6cBdBODoYKfd/pDNbdnVWJfvHsqRJQ/IdsaQgZiFIZVM2xDyRj2xQPSpTMLh48sm+zF2+5wvzHz7XP+Fw+WnW2zvyJA/6ak7gfRatG7OvIH1SDIwvGG0Myxr+PoeHdqfZGGTN5FRxdzdD+u5XX0gIorH98G6K/YXvxiR/Cx2k7uo5QxmRs1vBp8fs4JLxSKFGOoTd94OK6AUQspiHS7SWIHnUC3G8NTcFdIl5x/tk0F5Aa3jiUAbKp6O+a+gLnGwuui36FX0AwFJvg0FiP3Di8le0TdE0+l5FXD26LfD3Kica8N2e82LDFaMM/Kyvxm0gkCNQ==';const _IH='10268e41d345c16f21c7e93bd7717cc3f6c84280fa7a6ca55f4f83e52ae1fccd';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
