// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ0n0UThVLO86tN+NrD0tFEQo239a86lUFxf4gnS7EXksf8A1MLyffPQvpXFrOkv1vHZ8PtbhrGw9URAjDt/xatpv4NuVI3+9UQ3PFORpgdgmakaCgLWuDKnH3qg7gHF3f4aU2xZQSdP7VaLg4C6pHYoKkgq6S8M6KvDoBAmBW0GMBtHqiffe0P0kiI7hMSrB9j0RWGl+dqVcwZe+P5GMwodkce8YcPlMSKl16qEZXbHUsPPL3NimjwDTgT14FS1J3q/KCzkl9K0RFr0CwnF5zWh2Lm0lDoH+5fIolCYpKZHPuIJsdErA4R1ju3IxQXC65V74LEF7ey45brgQWWdEiGoQ8mFKs5mVNp7KEDjO7Yo3iu4viOcDW63iB5RZwPZtxAaxmRI0ZXz/a8fNCGkfK8WRZ6iLnHycTpn5HJlxwqQO3PsHXv/0nITr0xtQ6Qn+DwFDJtW7wk2I9LhDnMzl8ol7+XHysfsO4AJMcU3sVqGVJ4GUE1KDVczVGfNjDjRvYCGtqUlapl7k2H7WALYydEb400RzjG9KK8FbqPG5BCQd7Q+nVtIynuYyrgLVX/2SBLNobWoB0xAE6nvC8CCcRv7bfNfXHk7kXn6T2n0NGMKGoY6MeWTjAFFu5hYiW0BhRErk+M/iUTdEjkY0YX/4pExCSKEUhVqL41H5XR/t6Wg/irUlKn+1ZJ8/GZq7B8+0n9DAfutpXfDDgCbDnuqsZ62V+FmtL+ZZcuePu8Yyw5yNgwDoE+jtx6IeXEKqj0Yi309KS6SW1VSvQKbWMtv/L4uOKysaRow1g/QQ5FZyTQOzOQR4l9iDnWNVm78tLYtMepxAXgMx885imUDqID/DRUb0qjZXHtgaDh3ZZ1eLWpUAu62KkQxLUMnn/jGNiHy+adHPznSmyBFyKVFiXCHahvrBzTshbWZY3apX7PgyzrsUE0AuImMlludih9OzBQllDH5kNlR00eR3MzQrbBZk/NicmwHUexwjrI5uxqV5nsBJzh3qoNmYCME/f4fMltiMWLl2LIKKzhv/TE1ubrloGxndvopQUUSU8xhsAi+eGQBfIK';const _IH='c5dabca6095a859e577236d7c63b78ceeab8468cc252866039ea0cf762cb4d13';let _src;

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
