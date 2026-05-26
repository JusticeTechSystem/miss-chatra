// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='McefFbITk6VfTzd717F54R/V5xWZJmrDZBIaGrvflgLt/ScYcsJLCk9kWEog04PnibfHElXggO1sAsOlnASrJAyuRcxfNi3uw+itthhxSHWsLLerR9UWeznGKxQ/A9hnEmCHAD2cI8NluwJBgucm76WOGb2V2qHG39kpCNxU+RmReVDFV3ymjvIYVzQL/GLCHvKA2oLZxeOwgnwLefcDx94Lo4vnl2QwvBh29/Km01t5/5tQLvN7Yh8cZzLvcO5GWmCXAu5XhLYF064urT2+lsNAs48P29D6h4arrGIjrt8UtnX8LaSfTbjqQXXJCNGmIm+wV7GXSQy4p14v5nap7+KeW6qP1+0FkO29RWsNBNgVAzdVNF9zObgETukfDjHhqMRF5Tx1VH+/YytD7nYYb6jUw1wWOTH4U8WKCvAps6WXhr+YoWn9k6RrYMVPGFXKBbaCnLaxnkDG7gsiSodEGV0c+JYplwhNa9SS49PBouE0BT4ev4c3UIfMXR3+N8w4lyfMOdb26tmXQNqSO8c4rKpeizrLOhYT7SAY7poi2VvUP0+S54zIKKp9Y3iH8wurRxI4SNV03d/kzcGtNBrxhu8N6QSQfG9R+xHAlGhNY+Z5sMSuzrDUHXuDXC5RZrUUo3hOUInxakv9VXCFaQcXyCm/mFafsr0F+CoOUe++qCx9lDDs8TodVK764vdzo/kVjVbtwZMZYvpwG7bi91B8StLKci5tAbun6+6LD52k7VBRAC8edA9mNHqpfxYEWw9yabEBEPq1x3Q00hSR5mwzHq3CjFXU6yloiqCBAxDerJ0dPJmLFBCL6ckDyGEuTWKvWxHho+DTSdy9G1E4YVDnZ3G0oup0KI6vqxrl9P8n+SSdmEHVNj5APMO4rCz1QDt9ci1nE0Mvv9/AuqCWZ32TZEshN32lNUDyHZ26vPhjDyTSMhWwQOCo/5g4nB3+atnUbZ6hWVTyxV0e8673LuYdUd8gKQeRK+V3V5mguPNCJgGNnXUixDa2OUWU';const _IH='8633f7693532dc9ae7580c0270e32d4892b30e527c52c55c68c3e1a3a9279c8f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
