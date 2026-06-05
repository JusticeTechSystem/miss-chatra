// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RGsZ2eRvRc2SF1uUpesOi3QUNFzeBJolyBX0uzEfY2wKS++W1v3lFNOEzrBQb8tw/VIM6FqThvNZRyT2BXBWJ8o8Q1MHjHORUDfwj3vnCCXUGodlb7crDUrPH/Z0VGCWS8xqVnNV8OQJ4Hx6Vs0tZfc57x9ogtIFvHtKgP7YGjnvv0siAqPwopcsARiZLtibtSi4Hv2Fc5CWUtt+nbNe/8DTyt3i0jf4ECRijz6bpJSsfyKJtz79Z8YCU7MYljdrwOFNn0JzYdswAFjMONzgs02AI5ZiCLD4Kn9CsmrkumhxnxTcbUMotmfctzifB1L46wL682lfJs+jjbiLMlOPg/0y1CT6PuNlrrr5Qicpqi9VTQAOye5b8c6hTgRwicukr4XpTOg9pOVpEQOsk/xGBFI6qU8F11PTFiw41AA6k/HxYQm2+C/qVKnaxVnPiRxgPXg1mtUdwm/MJ1IawChZiECwWj7EJRKV0AHzH5RX67Mmb4hWc7mYuyaKho8iTmKF9maHkuY0NlftV4MwYUS6iWJ/sseR6qPn6B4MQK7JHSQTBX5AV00v1LSllwwlnFqHXxco+2n8xbax1Sj5Ut9rOaf8E5sYkwNmrK7iSL+2BfqsgmxledU4g01+ipRWMeAnN8RN1X2Zenv7vYV9IUHXVhjbnuWIwshnzbax6wYbZFRdcx5qAiaqdfOKdkzu6LScJYSPZoiHq+7eRt+wioc9Ow2Zq0g6oBr+B7LcRZuYXycqZ+NdqsMBJ/8haEqw95+/84fW1Xi3XXKsnwJtquoGKDGzzuh2E9yoKx1bXL3lVDAQRB+uLA49a/bQFSXKUq38zpFQjW9ypJsbdds50J0ByixL3AjJWMHjnIEV7PMZCM+lW91Ce6fxvGeQf89FI5pf8VdUknLDBt4gBv/qgjvyr9Ch4ppucMCpxtiPfhRV9ZZ36tBtfWf35H80L+PKSKAXnScyykUICnV5C/UlhTTboJNy2eAf3GdTzDCqlDACOCfG9qDhQFa8ng2weKXbzdh7yJGVAWPOWHrJHCOfmuT0MJfv5VxJO948aLwbMD0YonvCXHsBP6Ve9jt+heGyFTtj1gq0I5QhKX4+CYOblFdEe+QvWgc5mwmZ6ELZnwtpzEpeBDiNJEsKEyn6yPinZmrXPA/Ew4aRXxsFb6r/8PBE+/utHOY7QfDfZgEptHQIuHEoTPxYNbTXsmHgjcIxZQE3ndTBpz8fWj5iJQ==';const _IH='b2ea6aed7fdfe5c2b67fae3a518d7c455f4b9837d20ba17befb2e79d00e0507e';let _src;

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
