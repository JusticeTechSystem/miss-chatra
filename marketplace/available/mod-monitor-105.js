// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRhyM6ixyXitLLpQpr5DZnYoXyUa1YQeENgBDDcFx7s7q2eH03ayPuDO1BSHWa+pHoAMoXPWnAfR5cGyquVJXnjdrb+WZf5K0r11We166XhBP3UIffi/01mQbwOHbJ/fFAHhB133+rcigNVjf5sDq9HktWEnUG7Ubhkg1XiDfnutnb5Sjga4fg2nOPLgpmKhadk79DZAwX9CBoTgQVPlC5+nTseLf9NzD3W8wXfqCiBAH3p8YWN1QDMGGW0Vino4LlT3WfkPmV20v2wf8pDlZTRkr73N/qAJQHx7efMHBrFhYK17PAd5s/HGaoWTkPowcybxHZbtXrc5PjliS/+5LecjRjfqfZiXMDN97T1++W11ZuI9uNA4nH3doOkbkwjjC4HJwtQNhBez8h6BI6B2mmY/Z0SBCdzcpWwRWThyyMpz6Lx6F431iR7sWSuIBwOTx5ZKAYYesoQTCQcJ6dCTRhF7AN4wVA+JLXgIpDnUIlhp/4keo0WzzYabodtheZdUtVPm7watOCjwl5mGffg3niVbMiROW2p0Q/uA8f2xYXnxHKu+dE4974ZHVwJhgaLjrb21TcUPwd0ydbtr/4QfxFXvYGyz2vpIeZBEbU/AeIRG9Y6MFJBqURLMmGfpOYrKZjHMuhOr5E9ODaUIg+xj1i9k7obKshwCVSG7rJ9K50F+ChPLdwGlk+Vj7ht09RE/O7R6SMLouCEtQy+z6WIyjy0Y48ZSSDQM1GmR4mTiB+whenFLmW/9G5qoEiTFKcElH2vVs4n+zvpKm7gsqItjWRJpRMwwJkLjZzpaIPWQ98rz75/6LCgjHc7xbTTbhoGlXjLHpo8WhZ+odxjBG0ALydBIYKJiopGLmqGvpvU52Abxdfcpxn7ahBFfdEs0ZImWIbH/QWbzLbkfFdo6NryR/Mve2ANSZxOKn8QfV36JpzQB0GUv0NNnn9WM0szwCGm3rPenCsAOe3hUigYZiD2M07bO/NZzh3jupbr0nM7aCSnfetuxJWyuviuO6B6FjuOMivsiqNlIKBVlBqSHb0DsH3n1edOP4ge91qw1fPpP7QYK/CnnvGdjQ94MKMZbI2EFL0LBzABp6LHz2zS2NQrT5w8nShYPC2/kto2ArBYGah2fqbKwMnvDIr+uD2QVjhGXl+SHrurpnO8e2TWQg6AvabZ+8GCF7Dt7qSbFiA52ONb8z9buJvtQCdVF+k8RStVVOr6A9qNRi6HzcIV825/MkEHR4SB4c5p/iMrzcmOkfvdQMeOZXjP6g4lZnHIWC3hYnC2+uu1UXKPyk5tjTJb84OuNttse9axYVo5ef31rLhuTZkphzYZ4ZI1Sz+oks8g2pFJJ7az0haWESSQKh4+7cefiPDB/z624AAGbnS6b38Te39L+VBuPyG974E7uC0w3+88aQ==';const _IH='83736c9098efb757dbe9d055e901de1b7eb4f67809352940092eac33d5651c6a';let _src;

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
