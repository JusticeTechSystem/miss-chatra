// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR+c3tNOJoxKRbIsb4hHxptgfJEjHXdtAt9T1zo48XudaDjfXw7mrWIp3AShFK8neiJz3zVEA8MVuIypLXkLoezkxmj/62ZUqJ0tgmsaVv72ca2YYzp87tJqV+3QFPT+yBFG6gTuG0jZW4VyblnbKUfqkblg3a+RCO+B5XkW6aYHNILfehWpaES1rk3X/UzXQTbKUJouASwaKU2IuUsj5VpXcC+2HJMn7PASElaoxxfOnj4TG4VeHF7Xsdq0WXtu84+duM5I+1WOk96n9sx2WmnXbggZ00+Z5j3TySI9lW0PSDa5o8znYWY1qzpRV5FwwGY2shSuH6ZmQE2QdriG1qb09uP1IBfhYpGguRMmXeiJlLROzxXyDOrX014mXY4F4QRYLrvLrfJHcebRuR4ZrkRyeDz7AAQOoDNUq9QTCT8QZtJQS6NiEWyud0fnQ6xc1Sm3OfANgO47NKckUeRCbI3M0aMPSb+XOVW0+2k+4bdi5n4OlNMr3jWj1yPwYL/PYnL4HkRHB7jPMa0Si38v8JWqBF9345W3/H1JCzNodKtXGw2Dt/RIp38Zd6Ftd6Hnqu/RzxJLsO+3eiyZTWAs/avgfnGK1CtcK2rLTT73gnHSPX0yuuwSVJ58Jfvb8n1VkT1dJDpyiyAYXIDEx9fOx8bQhpGHJSKuv5X4akb7ygHMtdcSnmbbcVc/p18ccJce3C0CNIkGNwWpVRGCB2licAFHD86y7MBdLBreJm5o3x1yDrSpB5yrRqleK3BuLL+POSF5JdDf7Ijn9lc9SDLttr1e3f9udiREwFK9G6gg8D7o36r6X08583fgISiuU92O2dPrjgYfHrGfzM4wMpG6U+vMme6HoNh3TPtACu7KJYQ/y0caUjjZib898qrV/D2fG75ttQmR3c2iFr+YhfptNcjfO2t4Vb5Hc29ZZXA9/usKFB6pq/fguyCykNCKMsYSsguaJSRbyjSC/Xo7liiIT+LTUg6jmvoDWB/6hw58198gMHnINOWTnsjdsmSMYCH9hkAHwMVYt0=';const _IH='ef2625e787d72bf5f6a09bdf4cf843292e5b99140f316639faeea32d5ffa2fc5';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
