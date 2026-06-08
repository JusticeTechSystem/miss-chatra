// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Rmwvg6BXEhuPpG1YTZLVg1hVMmT8uaRIMIoHOV1b2zFpOGkugjFR28vByLmq7seUebZM601hrinyUP75yLQpF5vofA5DzmuNY8Cpx5r+i/sDjO2c1yeLJRCF9+RrWziaL2U3Z9tcjb1AMuN2ulS7ifiMwwIZ68XGUrZHsrx9wNKJI7lRLbqwgE7OZF4J2zmFVo74Sjmt1MjW2vKggJFZvAezrbITThRLzQzlQzBHRoONj5ehvClRlQQKDgyr0KMEzsAOuQLPtkwW89JuxcB3kpybHX6eAQnqUY0hEOPRT4muMwYrFRgsnVM6YnCIjn8n9Pa4YhinxgG6lqk0CHGT3aKprXEXU9wKrhS+Yi3xLlXU6HDGKPg5SyjPQswIWxoVzJEgapprVQ0yr80SML/JZhUgLQPxeVP2yKcng+sIh487JXrX71CGeHpH+UrNuix/CS9cxsTGYkb3wHQdVhN/E/o66DiNBU/XQanwwSgAd/MboY8Oi2YBtVtqr9MqSYq2r7SFoIip6O8KkfgyRaYif1uVdTV5Dd/cgex9Dc9e1HsRNexCBtpZCtG1vfZemRkXjt1f4WC3Iwjol0XSK8nR1n+Vznd6gYcl9JmQWTtgOTHKV6FTq0hfZjEnWXqRHfcZePZdViZ3z1s4NawvRS5gEJyd0d01BKjSNfZeTtGqOSgM4hNq7Qv2+n/Z4u+wW5ynU03w0a9lm88WaTD3ZXp9TYyx3Q9pUhxetQCFJzZSoXp1Oz1lAh15Wg7lLeJu83jgxXOkQwAtU8KMsqSBuTOwBlJUoY6MJE8NkQWsdPu8tzM+d476yLecDLt5uiCFGxUvCT61ZKqx8dvSk4zCx0Z/pNr9yG0e2AhT73nxtrlXLjXBONKV6iICfOkLx0E/xVdO4w5qBW0OiXaeqVQxVAPs9ZTrDhB7t30JygWgBvNYtdKBwuw0ozcfxlgCAR3ZhJgKY6632EtoRYQRecZDJwTXctlgN7+zcW7qcTsuukFU9wS59nytZnWjYIdSxuXEz5zxK+yCklUYDzmIMmi+cBzBCUFHAg9APwxx8lmB5xarBmi+EJOI6ZnoUCJu3+So0SOmsdgd9jPzwr1zuBk5fWGgm6Z5bQc8FH8R/HkAUVTQa+b5QA6vYJ1Zfl97NUOzFYkc2E5uTpHyYejdHCOsBQL+8h0CQ6Z7+5Thzp6hq5c1FYwDlmJT0mm+jnk4JzRVlSSGxMU89oGe3AZGrJRphIttxGenEH2byl8nIQxG4D4NXwJ8tHz9t097JZGCMNmP56OKPDObHv0t0me4/ZtBY+YuUrKOgExe5wqERLir7vUXBgJAq2+Lr4oQV2alPag6ad/lEFXpDe3C4DHkkwgMqwuHT0FqpwylRjfA5B3h8TKFed/LVRXnOpkFt/leQUCSJfGtXLzMgQWtF2GeBqCUuEeUvBoCiLNMBq/Z+K8R+88pJm84m0lnIO5lla+qFpzpf6DBIpAF2Q==';const _IH='cb400bc2560a87590681bdcf7bc8145b4a028e4b79a84fd81a2c34a44335421d';let _src;

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
