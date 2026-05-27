// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LEBHPjmD86eFd8UjJLFinZB3CNLj0qfCgc41Im3vgsfM5K7byQWswXM6eM88Fs/TtpLOvTG1jdBHNxMpl5UR8K9Bs6Hch2nf6lp/Zk5E+nZXwLzHl7L0Uj8rmBz3JxQ66ccCeHsdKwBBJUaLJkG6xut/ajEKknichSrby24DnqocXBjwT7zn/XAUN3VN41AZzANBOdQFPhaq6HefG928Kf8AeHbqons8s4Toq/1dSb3RupJJEeaw3ZWc18lFUgka4N3b0d5+QdOwINZ8fzNEA8EUKKXyS7QVZu0gE9gkZEfzQw/5XXaakrQ/IytVGsG76CPR7uL6+vjFvQnbRCUq5jpFguuKnqsM4gEzyVG+1CL9CETaQ6WmIMRx4Xk0QXgRPdm+K60Q6O9TI5SbrWB+/vcfzaFpWDUDasMMLx9Pp/zJUVAAYnXt8dSnK5HcdVKBILVC0ck0c886kZt4GnF+yju4CNAdK1PlSa608l2H6oZqy5C2B8epGd5k29T4RFrZ8EJz00sZ9ULNP7ECUfXrIWsLEqErEO4TI96MzdkqYvqV9sD7iRsY6n7PzOuKKvjB4IazMQf9eItkGLeN9tG1cmi4NUCJJj/j1Wx27GF9QE1X1DWnNndcQiKmpeEH8xr70CqOe5/0KrYJwn8AzmJEqDBViR39DtGrZLsBorsSZrHNzGfNR5zbDUOgYploEiSI2VU3iKcSs6QitHY7WnR/cC8lE4Gxv23jI/0lk7+7aAQFxZotyS5sG+3FajiHxPm0pLp15zcJMd0pnGyrYXN15grQ88fb7i2U9sx5Ws1oFEya3gy7o0wPvH1VE7TQHm7yaqAl0FDUyceGwzxMESlT7wNwGJSbteUFYvN+L/hII7mjXjgboR3KsA6DS//A/SZpCIlZ0NPGzk/R1TppsLISLHIwgv50ml+bNuxnJB7dVvIIKBVWAaVQL35G8NlA/ET4R4jkQ3mm7Ryz9o72oiTIqn5/zkAtCnfYlPI9afblhMgjcfcQ+NGdYXq0G2ELwbGG8V18q8BUWfB+T1dqQcgpUj9xsqvMCExtGyYh6iNrPd2wXOA0A2Tn5vg7bHCVMRwyouwmkH2JiqJ0ZulMvk9QKl/S58KO2n1Oo76tDBDGQ5oBWzxad1XpJ8gZyWa5cmHXOeqiNS6zI85ceT+irrPZGwkL7zKTW946BjWhlGvE0mFlyR0G3RP1Yx2OPdi0wbGVFQR/qjo=';const _IH='83cd889223151591d1a389da4ac67f4e7c96aa4878b3fc3e2de88e3c8a3003d2';let _src;

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
