// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='x3mqw37RYr6eBQYjnfc/nfyhVp7uc8xk+r8bOPpuLH0TS+loNdXjWgRl5FE9atn8OZG5udMGNopbTiGLqW4QZU6qcSNh1vRrhmBY6r5QvU2+qboNYzj59lEXzf7FjuHdTwtBcWdpKDE0lQI6Qfte1DGxor1cGZo5cVhQ8MKoCz7TdQ95kBw6nRbt7xypGY+Tn8n+WiEG2gCeqX2AlmubEQF6NVcJlX3zH26BTheM8HpGOHohDfhHt6xwxrZPCKoDbremGDJMgOXBS9nwsiB7rASWURGEU2dT/eqHQ0kiIf8hhTO4v8HiU/W1UmbTd3Egg345rmOWkZm44lqkRVurZya5XuLdAs66hXMf2hlOz89A9cg5PEH+WDjDWAN9NcYMo5q1dPxYDCzgL5443KIfjnXss0L1VFx1E3wdY62/znDbIf+jDBRj7vnQze/1Qm8qRKdM4oZx+L17LJMJ6me+3sOHNTO0XNKHdF1103fkW7W5RQ3GkC8X8dsCuQpVr+WhsY1Na2CBT+TTUYznY9jkqo4+LPEgU8yASD7DxAnBLfX9cmoUCoRHY30ErSyPpF7zuGwg/AaZKstvUmT1a/jD/lB6Iydh5eWL04D8zYREkAWjOfjEZO2pVeHNoQ/qmOupwTKkBxNVPEryFXW1CZeOHZX5iKvA9xl4JemZGbRyszNUuO85QtUyEW6NhsjuGG9mI1fn1Wicud/9CDI+GX/Dmsid4fISt+XIgXJWya6HB0faT4Z5xli18xQdfHhDslrZoqCB5EgR5r6pmsXMkNivZADvZaMigVoYHAChwOZTMO4gcEEge3xsWurFIsFq2riYMPYV8ln+EQTXu//fQ6xVOTp9aeQYSIz+bKMyBQul5frU3TSZ/DGlr7SvWWhshW/ttZjmgo8SWwxh6lyKKPmVbFTBC39w3HPVbQRIbVydYG8WdWLcYq7xG5ypVIBfZ5hZDoks7JPyaVtMmD5lCbH1wz6MXTdtB8mR9Hl9H5kD+peTWqNweDxl+Idwl2PLdtQXjA==';const _IH='f6d972d30b14e7c50f6924edad84b14fbd020f3fc6e59d8a1de9614d71e06ca7';let _src;

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
