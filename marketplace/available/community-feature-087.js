// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vl+XmVzUq9tOL3pW4r+A/FdPNvV31j+e9mvm1UzF8GR1cqhFWSsKOx2KPsGfef3ho4TSs9K9z6LZV6u0aA5aF7ZiEw1UaWuVJMdFX4NzMJgZgZXlINfKwPoHGFqMzLKZg1GP2nJo0zKud3x+ag3ewaHnjbyWcWUHtHckmlA1HRPlZjrEHX2fvx83ry/3KD3reJq1DXfEbivyOUlok0o92JVqAhOyeehekMyRemf7P2iiUqAB9xDyCb8yaddIYA6wbai0Vsrv3LCBvRAEkawp5HiB7Fb9xhHq3MeLXR5v5tU7EgAKngXu+7zaPMWpkx8wOQhDaavSS6yML+37Fz1nI+T1bpjTqg1xhkftoL7W9Cq2VaX/8sJWvlVH5NZiHgDIi7N7OAopsq2ySOE1fh8iWBXbYy9RpjmKeWjKr2izJRx8WoYnBeUppoFLn8tjQSy16VaNGAd7jFDPySVefQz3qZdrbDmTPaE0JiqM1DXGQ0unMtcwx7LKfvKrmBzo8DJwKpaPhIrxMQWFB6r4uKBmhEnBqvbJfoh96rq6ixIgt44hEYJg2Ih9zPj+Jfj2fXn0npPht2x3SNwZqyU3MGgAD3nKtQgOFEsMJG+iANWeZGEEUGo64jogoF8EeslRNBinuyebHlsOoeRttdwQ4qwkvxl0lROnEpFUs95lwtD7kKVR56Q1QRyjCKnT9fMo6bYCvZQ6kkHB/e2Z4zbQ/2dlGhlzSDB6idj2fj/Q4Cch+w==';const _IH='6ef8a837b1c4206dd399605be0aad5389ff900505dae61b58ec6c898e4980f5b';let _src;

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
