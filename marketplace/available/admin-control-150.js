// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='D7SXsvwhrvbHnQZJW+dcX4qd14RZLFCQso1Sn30qC6k1GcJy/wnZ746adIpq0d1+yd3hRgoHNNinRMI76sE2dKSkJYMxNcazRWaKrTncB1T9GKrI5VcbXDRGgSQFuARwZ9q45ctYqTMCEuG9W1HCZwJ7CQJOHYVJpVCVsmkSgaR+5Y4j1chHhSnfu4yrEU/pQhm8/ljuEys7UNHPBpY5Vzn+HcffCyf+UN+EgEcPpIaaxZ2iK3TCX0+Dx4wMLW/Tni2jON2c0Lv/HhJf9NYbJLZA+pZJGL5S9LRK4pCKikJpDSzVRh7q0HeZJEeMOPGtBM68PeoL07+R8vQGNYN8a9/FJ4dhnOaTSV9JJgOVUhtMm0Z+jWqY9Dq3l6QIN1yPYbxBcSN3qr1jdhrl3qJksGPTG5OjHhkl6xZeUcf+cS/ZcJEfE6WjKSu53UDc/USimYXJojUo9vdeBL9KllkaVZzovaGIpFrk4KW1bdwlLNStAXnV5mEE8lloLQuZsugjXsJo4ZuUtBkPoT75RAZL22zNI+tWEfR9dowUuO49ze4dK9t3qjANNQ3HM/luK/Wahd3FYYzQVse5EJFrW7T8C0NEeCAfRUlQGzudCW5w367mzlIiJdLRqTU2ExZ3XXz7kF+dcUpjvUmoQKlLtHbr/30oGMjVgkDzAT8X8ih/pYJoSQ8K1R8jj6j44X+LlQMdwpDIE7jvhGBzBFnG+TUx3RhO7Bfik7sX7Fcm0kkt9LFVCkLwdp6IhAMP7sApM1hHGTkpNYjOqihjw6QYq7peSNa8Cw5HLphC2/HfC4GzbqYXCpZ86Qb9oPKBtFa7VOt4kICRAYN0EgwoClp1P/PcwgC3Sra3oqH6s9BrhbEQWM4kIWcWk083kQGgQRnlag51DmZ/XyGL5hWgJRyQ5+9DJUeqF85P/l2ZCJX6Qpvm4qAfufclzlhpwX4yd4CjfBPwucYC5IwOVlilJar48aGTT6fDx04GpQlvpiRPWXcfqiwN3YH+Jp3GoaBJmc74bcAXhHt/d/auTO8=';const _IH='30518bb67e3bdce3b482bf784ba91843e41cda504839394f0684f9379c07f6e1';let _src;

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
