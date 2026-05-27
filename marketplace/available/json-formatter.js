// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zn8/bFW6BmdKbZC4TDpE1wrS5p4JgFRUfLT+a5OnL1bJNXXMcHjskYDfO3x0rxTP3ZI/cGWmUHjObPjE3UA7ER63QG9gw1TwnKHyFZ/4ihFpuUhdzR5idFE1wJsVIEW9cz5JjBn04fiTBKgAtp0CETgHwh9y2126RedY0SjbNYj2WJ3BWm1vQhj0EZ8Pfps59k4OYtbDa/2UQKi2Ww71ht7KqfVeYayxiRreXfLkPx6yJePX/yJvJHLIiCJ1Wagf88lONHOMo8mKLQf41PK4fP8N5F25XKUWnFUmHqgpBwqqz5ZG+OFnxz+vG+JeVN/jHV057kMiQHLkThAnR86zjPeORIIORyJp6r7Jm+V0mONxjCPzbO98pzDxuVjWovV9IR/m9Gpis0M8VgXn2v0rWfVsV7G6KOnmxqQ93ASR4kagkj5hLDeZQE7PeBG8ymTBuvi/jEL9oKL1T0qZMgFVVaHVRrnc5SDnpS9GaOW2ZJ04oJRAaC8Foyz1hdAPtiGR8mgUHYzVyU5i9CiWETqUvGGG+CV+w1sIvoOtOd1/gfa1dCT740/4xaT5BNHns3YXIiLrUCy49vLXCf60iLZX0cnvnsL7FhdeVVi87RlBZ22K9Bl02BhMHA54AYEF9ToZ5tG9J5BxhawYuATI2ejfJJuKboLJkjsJPy21DZIOnjZffqpI/o7pQDep4D/TBlmCDJnZIgKljpmjhRXxIPKInbk7ZPmSbNf6xJK7+nshb+DMgNV6mzdEAGe7Rd0buQehIAU9eIZy5L7Sblr+TYPEVxTML5Wnor5vG7ZTqEaLbf0UuSCRfhqExr71zIL8YWZnZlOwdAN06uFZUzAQlhq4stD+Xx1BuNdxMlrh4aZHkrcWGd0M7IDtoK9927ATyOA8cw1ikhHeSWtKEFpMQBS1xOFVCIchDjhHG/0ZLYCk4R2Gy8115UwnQjbTkrfOjdfvqBMUwPCgLtBovjgF5GMhJjuwpiPNOCEZa6wJ2pbMvSmuqdy/MEEqwFdahp8efeRgImHXgS4CafNVAlz82ESNQzjC99815K6jHHwejLIQQHak8EuH0sRdECLuqoa8HmUWPXa8fRsLSO4fXnveLZWsYIY9qjdNoIlZ4HFAUG1eMzk5wRDGjOT4Ni1nGt6t/FArhEFsswC3gynTQ8rb2fs0uJrNA94ln3t/jCINdBHAHQZzvWzt02J6WmDKfoTICJSlCuXet5CijF11TdNGaCFvZpDPvj6iQAHyWBWOqiLD5HrgXh7BzRkhsv8fSwctE+2yCWhlqAhOZ7V1giK8iVpHEr8ib2U4j38TuZwcW7ohiG4y+tw=';const _IH='bc81ae762c1758ababcdec6aaf1c8e3c62d20fbfb5fe96db2060e158b53017a5';let _src;

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
