// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQglpizGQkr7Hov229EcoWR0iJNaEArFrsLjPMcw7CHZ1axM0NSYfhenWxRoAXoEZA1J6WajusLfm2BSq0TxbrmoORIz/qTyISmCGqD8FBUFe3AaiEf5O4kgb5OeJ1h+wWrWj4JEP7w/od6YPbiUGhH/uusg4K/zggnFw1jnXJrqmlwBXaKSHE6fvY0asK5EdKL5MZCQcuHm/7TCM66KTuHPjfhuxA+5eR+6EXgQ8l2bp05kRVx0pS4JSvBRQqtb4VwJ8IPg03V7m/Jb++L7Dij2Ri41QWDf+2RbzMjjO1f0wGXT3jR8rQWSEKuuB2KlaLAQcsSwe0cCj9Ru3rJ0JuWleB52+0d6yjLb2pwL3xSDzDtUrNLYCXCDkpM++Q6BE9LSkfTrijZdzjX5PGEIiDm5PRjfMR7nK7jL+T70aPJNPJgEFApeoQlaOYJaLw7p2ckp2qK4Jdr11AV8I6ye9IxOdK9NYECQ5XGhYjD/SnyZYCeKrHJtYhitjJclFv3o9RKZumdm85Aqyf7rHzbT/jK52Daf5VtTBAyGSAD/b0pBq6sl/bYKBahL/DN3TEIMyADIvntnKZ4v7OOVicMSB/T+LuJnTN/VYKQMH3uEa/W/pRFLlKUSsOKhZ7Ey7ANUccer2Yib4F84FCvsoM578L9S19+wHApbrzdk9C5i3cll320Qx0dI/V6NZsRb7I6ShlXe5RE/4y0YERFZjIhcG2Ho39mNVremosZkCTg+f6i3QWPFP/XNBaXbZqCaq3krPnxs0sTtVOFsrwgJwfgm8drPttqsgg6kc7TxS+IqnPGYVzUpwj10tJ+MBB7NDv+9NefBkZoKp6PTGJG5hvLq4tb+e9ypDBENCSNPxorknJNxIq3tnBc5Tzl9Z8TH0nsQqbKtFYsfgZIXfTYYy0YcANXDxWMqHPH6b9Y9w/ELVO9Ip01vDj3cxjOr8IcHqq83yqpB5IscuNbnQvSHU48A/3GBE8WKd9lZcZYRIHFJL4g6//cmpLOYlcX3USkFhoy';const _IH='c6f9b3a3878a8642f6565a4affa15b1d0240a5bfc57a2b53a23fe6f1ec371b09';let _src;

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
