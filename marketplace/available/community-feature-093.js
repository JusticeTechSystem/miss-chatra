// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xaDI01/anrs44Fwr7fOXE53mEAsMTrLNQhkZUAPzhErrnzFz8QbQbLv5vDOGYDKQEUwFVuFj0wI9T8vYaKdfvnNGAjkV4SmQjk/4tdvV4pPENpGVgG1nAu0XbYQxmidFxlT3WqL5/I3C6EZb+lSn0fnwLNBoZETfjDaIOUW3SjHW6ShpwPRBkdtvALj7hFycXmIXtG7y0hXWNdxI3znimgqjB+7xdc+WtBhgUr/EsrCLGWcyelg7tpUxWXUqKTZJbcHvL7Ny5Q8ZwyT6YiOSiVLWRfZDuw3ndSFQ2rfQzMP4o7PvyTydn4DMPC9WanHGfxSCW1O7meIjvjCCgtyXrAYCOSXqWDGjy52K0DaWy2GFQvnNO+TGMxOc0HO+mjQWajlNMW5k1wlNkG9NDSxWHAP/CXNZrqS8R1u+biVqH98yHKOC0R3f3dprG6aoxltHr12PX07bn4GcOijFF+rAeB9vli4JzdnKYbt7gDolvpiQH5gPV44YCRXBkrjG0VY7fsbs4b5BQKt3r502MWIvwuolIl0S0GBcWruhqoVSvdq/tYn/fpkLHYLwy2XGN3gph/dAyasBeGqv6iLMc6D8ZleuuOtby2bIvDXjG9tEWjsCa8fni36jKvS3NqfuhSTE8b45V1oAMp+mUs1XAUd3nPzvRnJjxa//ydCQaEEwqlklDMTIx0ApitS52uuJ5+TcyIeMcM/ZJ+5bPqlXPKSTjnF//GJA5if0yw==';const _IH='587d8bb873a2978f3bb6289db5b24970c53ff14577f0737b04875c4d966d2eb9';let _src;

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
