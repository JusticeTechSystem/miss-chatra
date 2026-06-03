// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RzFUqPhTprqQxQp55aw+kwVrpeDmNJPRaarDeUy5F6dnNJNASB4Mihofnc1DvP03xoxpS/21T1WNliVMzziGAL0hXUOVnAmrgv8CRYt7LFZO25B6uPXdza09VBEjrxJ+vmUoCuCBfOq0kXbWELW+u1doJs8b2Ii3KSeToBH46g/JDdK3qD0IzVGgE/eqS3UrRjuSAIWQ1Khh1Ogare3wqLtW57q2ua1MZVwMkvaar43h904TKfZxZfy2Fc7WyS/xSmx7UiKlHYY0b5+mlRvSk5dtSJw0vnQrnHTT4f97fS/xLjBNQ5i2a+rn+VWZj9Iw4hSEgqd1NU6wgkC++1Jdw6Fj84kKx94N05Qz5arADseSXzY5RSBPFt1UJG17aKz+CdCc7unPjq4if1EBahwQTABdh3n8FFu56yFL6Lzt03KXvfd9NWvo5oLgVxGYLNMablYDLdfuTWniux5WLhoHQ0F12cVs7kRLgVctpG9MvF31MgysbEtcQc8uNIsEvw/zPeD7qSxHL+i0KzRzpQtmi6XjHov1wtWRiEPfTi9dW8heVxIMXxiOaye1v5sd3GEEt77TGm7Xav7VOFt5/l/F2Qz4wZcxwXimoPwKLxnE8lS/K9Zm5JG86OnR50va4B0e4whmO3uY7XKih4CtN+wdsUPGZgXbmOlCyCTrBK6vg3hNdz0l76xlCIvq8d9OWQLwXWaV07YunsTPnlOnPeXt9x31Rp0qfpr1uEw9QWhsITaAxl+JIUVWVV6CEuGaf3e5ilT6wgfYEFpupFxtKVWTRuZZLN9dS70i0kauxjNTR4jsFKHftiHFziHRLfm0udF42ICMFbvB2J7ljq0pkwE6XnUXtTLduaLtAe2VxqQvViynhG0lNnn+z/1y0nAoqM5z1gdU0tQ3+FwamYJKu34ixtH8XafFC7RkqaDF24T6QYbSQKkmOawn4+HhYKm5/21GM/MR0vM1qROjLbxs05LD6ZVHAu4K3MATXqTP98AqIrVdUfaqpFSK8dWTkKEN7GXDThPHP3a6P4Fo6tnTfdT3snn6JZ0McTeS6dEmf+h63vZ9k3MSTJZD2CJbZSll+rtuo4rGvuMGxwBH0JK9hlql6Q0+UpRHE4ivwzjAoH4KJz7XpPRpw75LGPe0clIPwoyyH+B0f280pj/02+2CLpVKd/NagbAdXRrgb1BBRohW7wyI4QAm5Aek1Zi61x6DQvOtoSIOEJOV+K0nLpvJ/LTSVoqGgHgy0y/Up1MA8RjdZaM40cM9xkzcCid/o/RVv5HUFC0PZiwwxnnNVYGhPJcnh01qae3ZqrW1EZh/CqkZu4IepyX1s7TgpAopfwJU3u2jR3aShJCyi6IBQfXdbcS2+Bm5O7LxhoYNYPZt38Pg';const _IH='b45ca418478ec9389e3e5e36bb711eb9c722e9e4c74434cf56decd0373c52262';let _src;

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
