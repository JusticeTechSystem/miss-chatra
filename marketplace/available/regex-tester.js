// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='X0Uo0ahQFhxb1tfuhpjqCsXxXRrUWEBDErvlr3FXLnKvM8ndfP+gzMHvXV69uoDDAHBvpvkkkjInFYXGI1XBk+qskEvv0EdFAQ7IJQPyHUd+0zugW2MhznrghHq0/k7gHP+RdyDYFsNRejHeMAnwjF+lhQ1KniVXptX4QbrD+cto5GLbAAfcWHzPVH7z744PDNiVb2FC4cFnp+TyvMbaiD+kzCYaOwDbb4WSFpKK7n3/rHKrjqytJR0UPUsNKtPzGCEwnLLzwsImv7DOYTaNcuULGaUuqGnt88/2JEf4/QRGrdN9HnmJkUKofBl7fkVeJu46E/7yfYhSomzVwXKctuCpyMzRRvoid/IDDa+b7v8f5HYlm5BrRcQblHUgfTQZEoJIGK1AAEiS1PSGGUpOmMXHcI4XS+oEuBqO1ZS6hfbOSa1C6IdBSOM1pkKSvDqdmSQs6MTasehT5rNoud3OxGFBl5hbznNhPvRiOEK1QjuVq6CSsnryOJKfd8r0eszn2IGwdwNgFYOvl91yh5ozrxG89OE7KdUvCpKtUdf1nAHDTqHTdz9K2b/PxrAv5CKqJ2Jc+kN8gw16qQJvAv8YfhbpzouBVCGd7gsEmvgGEnrGSf0j5AKl82PZ+FTc0Wdk9IBvUSy33xHO12dehk5ig86dZLFw5V5c4aqfV6mkJz1/jT1P2yi+MwQL2CDhQfBG4mAKPyTfCWf3kMCIN6v4LSbf27evV9N9N1gp8RPROTVwCAlPP4d0kP28wR2jxWYn43EsWgMajorhw9ddtwhXjRsNqoEJHJCh6JCDDJAtQ0jfM+PES0/L1u/YurhXVwIVWMeQDRxNDSU5Ifv96JcrOL5V4gdU9f78TFUv87YBcZELg7Ngjm7ulQDf9mARqUnmQV5JWpGuPY8ekHetqA78L6PIAdEWjFUXjwAZ97CPD3EMaxMK26N6tpkn90Si8p712ri6qKDQ0z9b2RGkugrBcuU7wdtVjy8rqY4TSuX8byAIyityj6IzeuZ40Dje70acjSlSZRxeXdoy2un3dV6NuG6eMRldSx5mmHnHWJVqz6I9CYWZeafi0zKvLPYNAKvaEhA3hy/Oj1iOz6Z42yjHdcThmWJcDYhwtLvnEjpQiMnuCLGqb+rcSFwg5H9tcEea7CTOyU7hIBg4hmNlZni4IhWi/r9IS4zR1dGTqwnaGEPmveRg4kPY1nndZGDevNp4/xFjvzf9kgesRLXxb4CDVPLzD+rtblW3wHr0xRbZQh6itaZPSL/IIkDuWYae9IbB0wrxLi6OansWJixJPyD3NRCGdUZq+I+RkqiX/MtwLzYgXS0h+GHMbct/XG5jfGZtOaYtQIu7C5Ym/qwGP55QIfQMdrIAycrdi3zBGAsNrw==';const _IH='543d09909841ec5655d2b498fe50ec08efb8dc02090f26c5fcee06388cce6af2';let _src;

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
