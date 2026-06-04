// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tPqB6J8Ff23UWA1bVkwBPaMtqiPQVm+Vyhli1niDCIF8vAUn3twEoi9k0XYs4qF8fxuaG++aH+A7qLrDKXgsZ5B7qrrbJowi3GnaQDIHTuOokxAIcEuZWsH5owySjBVVDu5PgAvxsyf5lNHhvql5+VI0Ati/fFGuKBmLTzdyvB7kLqu6JMcKBv5kIa8cEgxvE2aCC2zeoC053wiTmRMcE4v5XZqQ9BhyTl4pIvnV3FNZynNE/aWVJgyJwEoMXYRbwhnf6IYQyht8aBKEnhjP1dV0Mbv2RI+1FRnlfuPwlh352t7geebqTeKD4xtgLe+s5s4zukvlDNX9LtpttiBx+/CWZlJGHGIP5ydlVO+nNLFcr/EI8GCFlpRYzh3rdl8umykBuLziZw3Xd2TdToOyND6kONwQf0pKuBy0FPfB8FGibnCyfvqYwNnHfTmUkqYE0wTz7s8THAdkHNQYlJvSNsIzjKhvPgl86UDk9o3PvEHmnp6TtxUMmG85pPxNnQubanmE90EUlNRMszfgFASyGIXHRxjq4NEU5mrAwi42L2wof3bqUmv1GblQooInkd99+3WkU8L1Op1EI9Co89anQmYAL7A/XG04s4NDJq2lY755Q6gRqdl/UygWjtpNLfjCRQzd6iZyYuHkrW8R/7sSPnIi9jxxhjsv0aUiKk1n6ExQ6AECaOs4SqmzwKWi+adZzz0a39jGyLZJRQzhBQLhwHsEx5Tr7YFojw==';const _IH='94b96ebbfd7a81168d1a4baaab7e0db1f2bf12811314f24aedb76fbe9919a27d';let _src;

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
