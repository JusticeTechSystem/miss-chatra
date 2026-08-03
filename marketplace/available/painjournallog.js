// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTEbJoPgAKgSh3HfJLQEK24yhdGuSO8l8pv7fT6FsGrXz67OuhZeWa9TSoWalRtLijTLxc/1Q924l/HefizVBMr2mI+DKgNKytoMIX0aztsce5JfW7RCOBnK8Nxqt9gTG971ppxLGOoYU2q5hZB12TzKqrPRvTZommaP9OjpnGCi0XViVVkQPl4WNswuL6KfsbAG1XFYjTOoLBql5kf9TObKO/rrzd3AMdFAZCVKNmuHm8OZoF121Nysz5xHQu/jDA+WPF+iHeeEt7hmx4brWqxBDQWdAnesyk2xM58k5F9qEXNLMYYDR0k4Qo5A6eATVZ0u2lyO7h4X1+EvwEGaKcwUWYaavIROVIV2GjCyN6RBrmO2/Y+4kF239Qh0njyqf6soWmtwemMZsEbZxvW8mJlxvPUCFcQ+C7vttCoph1fE113gbg2YY7YJyq4hGiioDLQuTXerAbn8HjyN+AU9QJs30Wl5OcryloTp/5l8JWHXGXU1oehHdVJnISA98Cj1mT56WC0NUw1CTFJj/hHltPuhUQECBsTrTpLMScUjiBPFrpk2C4DQrQmDqvaUWxH00YG2ONwFnGJf+KVJRMDD80pZs6B5XbwXPsfPS3Q9RM7BD9zYCxWntOobpXfTHzoAEIiJEgkc/Z/fxPmVJ4R8uEtKuMgM5nbIum9WedypuJOvSx4loQOvOMfsE0GwuBqup0o0k+7Ifuh+pzXj/BktdLUDzcY8IapQnpgV15GOCBkBErZJ0u7gFjU12A63IFxSaxvwhcyJ17OrWGyiXpbfNSe/8nDtibc/nU6D7R2Zpp5HKH7675ES3ZetqmaHR5oOynMhZUrP5xU5qb9EoEHds1zNQnLAAl84TjhE5GQ40RutFQb4kc+2NJgmTyNu0JpF03ZLxmk0X66nTGqmlnPx7fS1ED8V6ILuYmgxhr+h9z22P3hrYO2FDGyfFARZfXdrBPxpO39R8Giflhna5dol1h11eYwal8AMjs874Bajkhn2RVNmVKX98oqHEiZ/s2IQqncD1veg2X9fdkBygNE86cQoyLgrBdASmr+zb+LssS2hWEUly4Xds5NzaY4wjNpTPV1QzAypGVoiIAUe6vhkAEFgWMeLpEVJ7yt21JomhkGNY/kl+mAk0qnYAhECUBbLkG0bQqX3ulRXBzsGEWJDF4Ap3/bY4+ohGG7fNhsauBebb/Up9Q3l4cdcC/+ULS1oZfIFEYNOOjzZHEe7g==';const _IH='96a77c87ce928311a7bcfd6403b80b9b84ce41440fa561ee8c9ae455c9b53856';let _src;

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
