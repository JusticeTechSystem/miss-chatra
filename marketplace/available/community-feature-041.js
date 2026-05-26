// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AM53p+u81m6hdvr8kxJBTUWlBgJ+HDZGeLZ00Td9eJJAgpEgVlj52fQOixNQ9gxBUxK9+LeDGNlo9QrWnYyaXgB6IjGjwOe/9U8eogf5aveFmKtWIKb7aBgGlJmdO8/gCC+GOvfYH13Ya++0MpMOV8hm4SzBqrnWieCcRbDRWSmRPw8XZ+0ef0BW5nrMPkbfFh+CWmOznVLEhbPB1LMZT0Vt3sPruJwbntfAtcKoTULH3PCN+HFDKYnjdHaBAtIAUbu6voCqFiNnsxpxRkjZfbNk7QhGJbJlYGDmFLXyLsh0nnyrGLqTQdLdeWnAoBEX/CFiVDp5y6sW1igS9KMccMmCqUNdqj7xFmAfBte60uaCdd2zM0POMNqQrzZrnrEcypu5RSKrADxrL5I7HgQijeLxshbxqN7AFrGmRxePzYnOd8T/8zBF+mlXo3FqxvacrH+UMzywyWmi7TL3EN6vUlnTdU9UTlRwzqn4j76uXJyL5+LsgGPKFzFIPFT5qydI0gZZ4Hzk+CXMJdYzqcJ15G9s6ovudDZtpEUsfUXRZP3+tB3rkQoCOovianbfTAfC2G9HrgBUC2DyvFbYXjcjl7lvSGt1FUNd3UkZ72hW3YFVNZi7ekMidY8bf+QkkmyzNyPPRd9akCYlSCtk6lO6d/Uzkj6igfBlwBVSZZMAz4bSw2T+9z4Fn26QWQFoZ3Wj48q69dq/KIMgjMhnZ5D0PWDmLoM=';const _IH='ad35c15f164ed00910169b039b18a6b53e733233a35effefad6cc6a8eb6bb6ca';let _src;

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
