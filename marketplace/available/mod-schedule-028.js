// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR0vWTPrsUG4XkHAqWTqUf+4qzy1na6IoRG1j1oqgZ8VfHx3tY6APFmQDzSOa3WwK0WwnnxbJBJEnKSIbSqr4FEaNnJYZP8ajbwB2FNVOsT9fTZjSBHCYPHxX8fg5qeUK6nZuzsbEgawrB95sIhmWJWjtaC/E9y1f2KiBQZY+aR0A4pWcE4t9cI25ZwQCfnO++cGUlJDblFIh2I5Dckbf4EA6UW2OnMd9+06cv1Pht9IZh6RyN8dEGc7zWYPWEr5I2ELVKY0hBWt9C7F2lbLrSOUduYpg5ZQVheNfB1j5zziSPds/wEzt9b3c7AReMABewkpKQEWBuoa0jB9GtUIHaOrQk+PRx7tmR1FqSmQFvG6RuZxA4z08zopQMKYgdC1GUaPQUpvvmM9l4aua4IotySs5tyHb9UNNbNdqbQfBUF5QL145okqUB6Kj8l0HCWyU2u8C7j1P1KiZEMEEfknH6dohLj1NAzp2eGXquqatHPbmo/AIgWQzh4/EJ1JpX1c3DWYtNUTBoqfdvXvMLvH4Wued7Dls2dyZbAhG04jgtY0/+VTnw2HWjFG+P7pU4Xs+eIwkYswr0B3h2Pn7xMRPWvISEWFoyFNAGjWz3mdq67bj16JRw+5Utp9yjc9TrVIuCyv1vhA1okVa7x11eQVa+aVdf873+VA/5c705ypCKjYSorX7aDkTtcwuE6u9QOrI6xbWRolO1Hbgkj0vaUKucZbA4VyfgeiWpWEyz9i37BW/khaBqqRY6+DwaeseqA3WpAGVyFGm9D0s1UigrQ22XjYcl9ijQl7o4C8TF5j8lRZq04dVJARy+ZZoYSOIZUoyfN/zXtZ9zMp3NKSq9IlstRugLoXhKtTliEdC3OVsrs9GiDNWFMRlhekRUPbGSyit23/rkTaioQA36cWKXe9ovhHPpACtXZJIpm4GKHY/nzWb/Xt6wtNsaPjugTNdKzSQT0cPEfj03srUs6h7zhSx5AWU//5Ds1DmJAfrclfIf/qTzkrcIXJlzPHGi+Szg/qIhyaiRQ51PW/cj3FMFQYnKbgWs302tmgpAJnwGlc8++l04j0CzV1Jjt4CyJ8Xkddpncw/MJ8J/SP1UB4fHHwHbKcPi8udj6+2avrQASQMJv4m5sC8kpKbBQiQNq112jC9Mfgom+vk/s4OwmY72xDPl4OjyF9W0Y8e9g9QM4PjGziM55+9XOTozLwThzEEIVWQhOZ/xhkX239GCZuwYPEcCfSb2/UlxmvoiZE91gnmUVgFPOX0smmer0byDgZh+o5frmpcXPnaN2Z5qS4YoUrIfU0oOYOq7RCM1UqV1HfztcFQcyJnGBLmiS4RZ35uV/Ju8Dp9be1pfyivTDgERLHSkw4gTeZI+WxrfiYehZpQ5swpqtaYd53Ezf+EqkLWyz6mtT3qL5Hd4c';const _IH='ffc801434b716b574c6ac125dab5b6850a0a5b5b54986592d245788b8bf13929';let _src;

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
