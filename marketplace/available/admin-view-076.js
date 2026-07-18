// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQtG0cB9C5He8rrPWJTjyLPDoS37ByEN6q8Vzijs5QNMDTHmuAKiu9GjFL9jreUpj7vBJEzbPoSg44oOu3A9TFgGq9e4qeS12k0XC64prcI+tocWHPIdCZTzQqLYiF+l3mWfzLb0lR5zqhZPONuD+1CGLocC86xCwej8+dIWle5ltKqyk3BHNrEJtynPBbF6rJfH4Um9UAgcgHmeKebtzjgpWHV9IL2t+yxnq0mTb7OZETdrdQgq0Q/4JtqMyHZ9wjiO8YTTff6O8SaIZvsGaxlOlYJZ2d+gYgDd1HdGs+Mq8+DavSi65UldMCfeD/oD76vQ5Q+AMUdJFYY05/23zbs2e9f/6WtrEy+Ficr5dPTCmqfXWfMM2/w9Ywjy5LvWhlBTpDBwAMeUa3Y3ehkJ1OW5Nad5Xz3BZSKuho+6JONKjvblyU76ui51jUdPWNHpM0JOgzreTTIQNz+NuZOEZNMU6wecw+9QSZZU+wgtCnIQDrx2YZc4pldKiaDjKwOdNG2SdCv2yZQNlg6+nrAQkNVwvzddmby3aZT7sVASJNwqv2LIFxcbJ6pqwss+ZCb5RgEvj5SoBExA4REP8fpcFHBVpWY9qShu+zy9mNgIJONevvV5cAWqfaAZtW7OaOlIc1nyO5VSkmODxsw3hCKg4d94bDqw1vFX9YbK5voBjNlqIodATR9smjJsEi9uAOobdWNUFvw9k9AwnHQr7iv/fDeV3BJ2InxPLZRCoXiW3Ak3+noq7NICTzWpPsqmQtVUkcFUcB0sJMnuo6P2P50Ldar+i+nRoLK5LWHTP7SW7yWIQ5iFk361ML66P+rTqX46Po5TfEfqTpuxi7UMXDXzaiQihey6T/XFfhburFcV26evvJ+t0DZe0yEgNES9Gs8RaBLSlXyGpsRs2p9MCuL+yTtLzjateU424clFwnChnYA9ZEHf+iAmXyiVGV/gWAAs1w00CJ19SZi7D7+3FAigoCMJ0LI9csA0Qo0cO+DTJOj';const _IH='9f95233e768a80ef38e551bd12e50edcf5f078998f7f3f64d2596b4a01ceea39';let _src;

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
