// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gULtLj2OY/JqliwYgb5O7z3LdjrG9atWe+Ie02b8eIun6ot8ZjgFsIGtQwXH4vLJZVWC1E9XaoGkXb8OGe3MM7h/VvXMPOrG46DR1kdAkpZoLO6sog1UFD819pREvv7WFWPDQ2XtY4dZZMGf1jndbKAsVttULyg3AzQsfxtzywjHMbGDmBwrSG5MCk0Wer/CV7ldJwgSUnH3lUGaaEjPN+j49Qc0ZnyuXiz4xqAXHpe4I0etwttIShsmg4zaPCZdHatlELooIBeYRfQB+Usl62uJLoI20NRo6kh3BiYAkXpaA8Z2+N3JYuiogAL2dOkyolIUAS2RRhH1nUjaaysOYwJ/+89l35PU3S8MJwalYYqqBEPiOnVs0IcIyqlGX+0KuxJUKXvbgf1phwMQQ4amkISUEck64Zjli3RgmNpIHq9nI57NYYnfohgiQQxdUFzJpDDGVpcSUwtn9xxzK4CROQcVZxn8QVDkSnb9ba3LUm0LKJqqG5P6PJNidf76Pr1iygNbavIj7ipN60527oolNiRkxdy/YaLBhmCEJXWZcO49N19gCFq3ksDE1LaD+bn/fgvf1YSM2G6mr6js6xErfzN+Pal8qhj7I9m/A7rBgI4VqD1yrWHM8PJ3G90Ntu6wAcearpFBmYl08W9Wu7z9coFIsk/USGl+8UcU0NVVJyfD1PbCFcnkmXIxYllFKDul8hIY5cqkRaB+fxyjiDd3Xn/TpV8LodZEFiiNiZc8EbUMR8ZjgKE=';const _IH='89990db8dc9a9d99a20c21df7305eeb2dd5274cefe1afc587eebc343ee1209ca';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
