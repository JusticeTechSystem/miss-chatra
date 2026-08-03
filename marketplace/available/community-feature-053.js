// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSLhNtjJq7iNWVKBandQQuihv1PG9wOoemLRpZHq8RfRRQuwVoTAgwUufQWCYYSP+W6QEFhklwZ4aecsLdUC9eEp4iOHs5SZCujx96/QiAsbIvGj2MBhT33sb7qNoscsElbhhkQuWiNZxqmMR6OZoh6Fa7NrU3l59WCrGuRo8Am6C8lRn77SqELSjyRseO+9f6aKJN03lpuqb7xa1/f/SG475LCG2z6aeuPGb92q7Oemrfhds4QWT8rAM6D1OCyTsI5nuQVMUafY0lD3YzIvr9LpbzM9bje62mdJDQYZddGwln1itzANZFaBUO1zGp2JmlZxxm/CP7n3vgKhJrLOzhp8hTgnpv+Y/JMMZfW8YbDoPmjkAZ2TBlw9RBkZqIx3irs6B+i55hy7VasY82vcmtVs81PkCHwKwYssVD6xhmatGEI14TjRfUbvUOM8wDEc8S2srTMj0VuEVUC1JwzzW62UDRfAfzrhkfAO4hKQPUdjUJEaeaxw7gy7P8pvx1hOMY3zXE/WpSYRZDYKsmepBbX+Ucm68J7c7Z9yhSSiHTAH6smT8wXj78TBNh337elL5pVhegqL9+oSTGiDRU0rjwOx1vYAOnL8OAMqpEluKpBwDuf1cMs+HL/B3w4A0lK2T9uTz81mkaa8uHu8CLxyyAE4miHXYrb+ty9/a+6Ifzh7JjM1D6+SRibqKOVV9zCAJz1qh2KFRCEnzzLDAfmjesX/RZ7hCU=';const _IH='bfcfff31e5e074d93e76a392cd36132b5ba31f9e05b293f7bff9a9779198f5e1';let _src;

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
