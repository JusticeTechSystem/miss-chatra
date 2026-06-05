// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Z1QI1eOR5DPGuYV1H4fE5OQDSBxe4TCCpC/FV10eGcU6VLPnNZPYkDaj33qvnQTny0QYBl5oMMLe9y43xPc2vU/Gp7dgpW5VL0u2+b1N9OO85UugUQS048GWb01M0Df82qvf5Ig5qIYeYxRYaVO1gZZCAskSvdiIHu6RYHW/jJ3TjFrLWqPxryB+dVRmGSFKSpxGXzQl3/OrPLoxIrqltuXi+IiyfqfYuoz0ZtnXQWZ/o7HGVLfNsAZn1FoWSjluOX+YBTHNdTwf4j+/2K+A7mrA/nkaru4kMRwrTA84mgPU6oMaC2dDbBuhU+oJ5CesRRGBuscv4V6Y/rNlwgNl/mO1gA3eT8chjNCxVOzUoAUqffNpnVIrZQwIfV761PhsSI26+Esxp55YDC0emsLpOusfM+5AP+HCXROZwvx0pFdJ/XxAmVsc6MgkcENUZ7j1upBROD3UtmJTrN0JX6KxxbzZ3ntix0Sf+OLnHzpWmvp6rBFVhR4wm0044dm8W3V8h8qzIbOP8NbhicRpbWaQhISJUTko/lgjr+3N6Sk2k6Mm0h/Ci3NagEHuaD8v5f99E4RL+H1oP9mGzHa3AabAJaI55AQPKCN5ix7TLxtrUcWNrDP0LgJU9P3Ph+nlBJDfcae2id5aOxc2UFUk6Aprt+jdD/qwU2p0mzieVztpqjVfDYTbppMe2n3R7fbX4dW/Dpg/qonMA+QMBPGtks75E6xOno9ze97Oqjb+TjF7qi2/H6PLRCrapigpbg5w+ANH6UjO8oMLo7cyq4ihF8+myhMRMiiO1thsxT+Wlw4QoNwb+kelrNszPJkQJB7Dzqejy40Es+nw+34rb9974gk4jMS1CjgiYp9Yv2bczXZOvrGH11l/vwp9uTAafIuFlGynnDZN9gcxqb0Zz8MArqPmjNJM7Cinqv+bdmXIbLB5P+2L6awcwoqh4WuRZe+Ht9Ng8BHkNGyOgZsvb0TDO+UZuEItnDKHAU2nASMjKNlzA3FShvm34DorjU85yl/jD3ObOnFW01lhjF+TLmFMammm5iNGLzFqx4dawu7KRKNojvG4rlR429AAI39qI9vh15JqFOwLd8wJ/UuKvXo7LwV0G6RpjEs2KdCuvQOiYM6wG4U1dlK/xlmeHy8dKMq8LmvQNbmGi/4JWBUEXkw41SIHgjyWVTD5kv+NXuIyEt5Z/mh6Eivkt5GXtLOe04ih3NH/k1jG9wCWU1DJcbmowGDTO0PeEzp4Em5zwYTqzTs02d19QLg1A5mBWwyLna9A631PggpYobbbm6BDJK9KUaWyLlEBtxi8Bq75NTMtgAsARSjWcevjGxhfDDt6cJjZ0sziL2jPhlNCe4f+y71/LbYzuRVVIZFd8cNhJ120tvBM1vTrzzUF/PXlA1wDlQi8bLSNM8GlY5NTBH5R+aPV9Soupha8E/OHmMn8OmxS2tIyIHDOOJHlf5SBNRS0D1HlqVKL06Fyc7smSrLYMpI5qsJM7PBhBE6Pa0sWaHtS+kg+oKmHfRtu9yzUKKV+9D69gJ5Ghwsv6yTQQUXJrwnKfNw8nLXLP5EGK77Ks+o4WK4SavShtZfv4KjHuDq3htmLKV1+QAOxBytSSHRbSj8HP+vrTlQS13IS1tV702J26d8J8/jOtXPgcz5ewemy09UxEC7aguWHe6FicP0LaC0WLmVDAqp9euWTgvcgAZ67NUmWPd9ujw==';const _IH='3932a7d4ff0896b2cd4cf4142e4487617ed485e54f3f9fa9d99dcad9b7e301e4';let _src;

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
