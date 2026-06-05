// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jO2TkNQdxyrbg6Trl5FqWP+EC2dPqsLEYlYb9NE9OrigpiG2rF9p8qK6JQxw/+Mgy62Vnlyi/aDhMK1LQ24s2c9g3uVOoYqWkHKqdy00wucsnoq4vvuEggsZCsd+OGHCtyqaCmdi8SsoFQ7zNz4flp6VHVZTHB6ENoTtsSIcdMAc10jF+sVhMIeJJIiKrDFZkBTHsfEl6GP6xGGmPYLSgSf1adRFG5hZuSyau0++91r5y17JhOjwrBwVvAzTnUSlKDixvEeKNBKCcx4u0UTs/otrWsJS3gDpnRp3fD+82HUYnp7crGHAKDuYQwZXZaKstQKwTpS+P3dQ52wqhdjQwngpAMwI42aqMoQDZLcgTbuntWWKloFZ8fk3nR88TLvecHJ64SFySWYb+CktJrJnWvplMrUCmC1ZJ0TjK7u3WUWsa6EKD0xj59tmuL5/sy2KqONHyqv5N9PsMI74q8absot/73ubhzg1tc5p/4npjfo4EhfDwZPUxSqNFsf1KipKERh9xsTZIXdjO8vpdQc4e3WKjDQaa1MgoDrDgS+g5IGZyt5sdhAWriVR7qg45LHN3fm5+uYUmaDQsrGjv5XciKMEFDa7h9DZ3QTjWEc9sHN2KC9rFDq4UIn10efSy/3bqj1wIhnW5f7LeuUZDZ+hmS222G9DTf3vv1LtzP/iscl1WylvvliZYXFJDePJvy4oL9zYI+mO46EuZKYYi32QBSl+uO7Bt9nzxKbfmoJBeNjXFTRvfG3bsi6TgxgjAL8+kepSyolxadJQZn0zHoXr3gd7EQijRA7F4fzvfFcWeZAwDfTaow0DmTgLdIGy/3fETD18hkjNtuX8sVlMVwTMTOXrIOKj3VYbLWP38+fyw7q/IMreVO2kbbRat/mt/cUOaTzEUbm+0UOiJ7bZCBIswGaOfUJ4Zsq/g0yOZL8YJGAdPdz0AuCEBlzprLFVHoloZ8JBMZQnszR2Y+wBKnMfedjR0tBRe045dmjYmKMWUTtXUC2zcWBxGwdBtGndnjuc02+FQytPD2LXf9MP8A3/zvyOLDoVTm178oUPnxhy3ZL7ncqfiORZlaymd4j21LuFMMfe0mdMblvLGGHJqnoB6OWQpsl7+xmcZ4l0JcD/K9pT9Es7nzSonOjPrYo4SMksxi9PA5NgB1vCFrNMjEHs7/3H52JQEkBLJMOhk1W7ckL9y3F/UGdK0pfNEWlDw9XfuAqxf04t9YzNaXp0AO1/PILpYUJkjehdpOmf5Vbfg3xKXtAcCWsYJYVAFTEYTCTGsPS9PLsfiT5Mop6Mh/UAgNSKqcdlJOfdIJSFvpFm0AlDdAPMgBHZnWXWg+4iLoyMRVUR2sFJFVuzfELwyRHsvou+uIJ4RyfPZNpYsWI6gDOROtKgALmQRg==';const _IH='0b891892f9b38f7c725214eda9fa9caf486eb80fe18c4cab494b412883c80056';let _src;

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
