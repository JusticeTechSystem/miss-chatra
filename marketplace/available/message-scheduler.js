// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='awDNlrme76tVuRX3GjHTQ8OaSkOSAChFGg+FV0VThSoPcnMFuw1OK0jvR1DpFN6vRn7mop4th16mWJN/3C5Pop4Zi7jb0vTk5gDL4RIiGyfb2OvTwF6ulnyr/YfDWfwsqEK95Lf9y6Cs6iR9EcnqXbprNlGOMv7TZJ5jCY7KtbYxCxRCI/YsBjZTF9h7dGXh4eLSc5GWdH3j69SyfDEelkFVUffbjFN9koOdCUtB68huWeVTJb4wrnW2QUDjNbS/747xBpEhF7ClExaXQ/L606XqozonghxEAfdUAOJC/H2NubXpc3QLYMnMt/lGYkEVHHZ5/K0oQD+8Smn7wug6caKjbkjcdQ1K2YCO+Ntdgmh5AjfpIbIkORJEiGULs2gVnQ/jrn/vHr0KmUvdA72dkJf+mOVr1fwqXqWVZtKI9EtRkv7Fd79ABh2hFMdCeskMr9LkmoICqqse2XK6rmbc+h+RAydn8gKK0UfBClhmS+q0WbXHqsIR/oYo/a8Z5RovO/kMs4AsUgofc3qOjgO3NMt84RLBWCUE9v5maTEw1FdjTVFEWZuLKixfWGoMV8OEjGB75MdUmtSIid18E7G4ROTMQ5bq8Jsjs0W2FnMfMt6W8XVhFmU5XNL8BfJc5HYBQp8HRaUYLBfZI0Utx0Yrexax+r9VnVP6+PL8jGvM1j/t2LGbqk3c54Ts7OudlpPke8gBkGiKLer2isYBXBTzPQoCkDcxaqixRvICW70sFA8CWTA9QP9P9z6wbneeITx4ciY0AtT+ILfR/FaqDAf7tiRyW5IawlfiHOA4980JrukSbn5TJSCs+ZfDEeyS2jmSKf+P8sbKGp47cF7VkmLjYXvOCSQqPGKTXkxkSNUJz40O0AYshWNMXZaQ096bGJxo/zqMMlXanr6x47x/cQUXtJBw+FrHYHXmK9z3/jQcDCJnMiTyWLdbz5FBeb7GBC2KrfNwl3tyTBTVLligvgFB7bp8dnuhiLaPlQ5JI+4lyAXeOXEOBKGnAMmcqN/EjCJHnGmIBpy8oTHWOx0I+jMFZfGLNX3ii1mJsRwIaGFcaWryn/qpbpgCJ+Vw02f5OhGFZMZ3X9ErjYi9AE+yExbvbTHR8JMGEWH1cjaiFQGkEFEBaKxC4qN4wAKVG0eZfmToU9gfm0cKOiKc2YJ/hFFutZL1Kgzpsz7UKY+sDpYDKcepd/51bJ5ftNpuvMnsFsx7moE1CQ1qJwlysF+F8tKS/aSlob5FvTUr5qYsMKGYl5BPRNKRaKcJgtccHN/kYrXIPti5YtO8YOVZIzvG3eYe1hGVWiWs0zyfXP2Px9MDczzr1Gbwm3Ksp0fhZvXbhaH607MUzh++LLeTUKmgooLVOxHouG5BAqLNZu8VeT24jOEV0oT7IoZz';const _IH='4020e4aee140215391e5ef8f8978fbca524fbcab26aaa31abc8f7202991f66d3';let _src;

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
