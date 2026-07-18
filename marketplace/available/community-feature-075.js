// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQNCp6bDhAGnsTjuXzHdLjwv0Xs9Dijd43qBGoW4GkF5YFlrJZNvrvRk1mcObOGC6VhadNcZLUc9EH0kiAj2DoE/K1qCGPV0p8n8uHG2ufTYN9X8dOh/mvtKerXpA2l/mdjDO4NhFRE/i/+y70UqKxNo3TPfMs/k89alxlb0PvA0aCe1VYczwU5QkMdORys+bGwKzmTC+v5RAyfMtuXVOAMrevL6P4WvENrTYmtKg8vE3ZuzKUlkgJxbutX/IP2rfwkoI+a+8XYf4b4wy/zIX9ltxAx+pWQJrDCMdXv20xBOzAxtgJdgaDvJ6Tqj3TjE5Wqr5vQ4L9dowf89teK7Sham6CLSAg9KI8FMc0WKHQEyamgVOOABnbjytR5fOACFOrKVh94qzj4wsltSusUldpa9OPekMS9tTq2pRiiB9xbkmJSC3vLwJ5nAFm+3wwi2xP4qFPjd5JupBBG1pawkd+Nk548uER5eEBXsrIrw8A7XQXIOujc7G3bN7jgyJEq8UQdSDkbAzlxHvuG+FxjnuOx7nBBM1BR8WpQKwhFay6YD4PbrQ4nX51zV6Jj38+f2ADHnG+rVigaRo2Y+h6XGPIe7PMxSlID1Ulk3ikTadt41iiH/dMg/w9Kwf2+7Z56Afn/Skv/zn4bF50Slwbu/TRz4BnIQ25RJHBRMzWuE16Y6qUz0adPWcYWhC5Z1l1oKi1jZoVYtfzgAqWqOi+sf2PAahajcj1hu77V6tTVXsRke+defNPewQ==';const _IH='44eebc6baf21ec56ff2a2adb0a57d2f62dd3765a397b2b76e47ac7f761e2684d';let _src;

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
