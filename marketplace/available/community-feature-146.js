// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0mjdY75mfDu+3QwhKIQHv2vAGkRVUCsI49VqLZuKvS2K8Cy+rN5WDU9H0oTNBDZrtOyxcDoeLuq6n7xxsU3tnX2xHu/vCeHIeZayC1lQioPIGkQbdEfr/osspQGZtZwTBXC+158yDeh1zDqspJkX66eL3rNRCw4sO3YOZbnmy8XNK+rzyvyWpe3zVG07rYohrmedNBQZLSIfQbMj5sfFCQs8CwMmpZK2aeA0OfnEfHrXwJhWDvA+TFw82p0HHs7yXiKHvhhyJBIpMdgKE8Wy2j50j8mMz9XBIDTQqPizDPx0LaVwQsdSwt8/XXJLMvQ9jFRqGF21MmYQ9bxc/dsxE2VI0n262TUuJORVPQ4665q2W9Jh3VxirhIvZ6Hq3DiUhVlPE+MgzHYrQPwcAkb9Aos7ga6t4NK4JfYqBQlbMxxi7Ioh8MCPX+EilK92hMqmwEPwpkmh3GI0218eB7Z4yic8yPpqjIuw6dykvKGUDH3qLM7D6trtoQh9UJAWTydspzX0xIXYl49qFj2o8N6bLcR7fGlGwRjzaRPmLJHtDbj4kTvf9wA8AYBXdD6dXMM1TNr+Si3OXwXyy3p7CypW8NjXiu444kbMxeF6lfCxLMLRlKDV2bfY8cbEEavTkrUPia64zGyoTTzMkOqXfe63YOh3jC7x9fUL36Eb2uDNIxhNHtiEg8I4obLj+acjPTa6U/JogOOmg+gJ3SdyPkuwq3krdJYkHXX2';const _IH='51fcf3fa3001219007c000bc8c487173808c6e806edf28b4e3f02d611977c86a';let _src;

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
