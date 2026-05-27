// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6kPjATi6SnXm99L+Al4qrjSTqX/YB26G/4LdfTnfFXTnuoeXEtZvEUxy1gJncQ/unfLGTYR5KUj7VBPmILBDMcniGyTn/FSkR4wegIp86Gh7OkREjg6tv3b2QBHtfJ52Gt7xJc+eRgWI0qIu3iqGraWYe0gCrMe02nfXNqiY+hyTCZw9KDfZk2vfXAWoKKVXF3WcNTqDJvqG/ohzIgtGYkv9AQlehsHUxgJKOGrDFjox566xmn00wL8WsFF4XAwRiO2+5LG7VyJd4Ub10uh2dVii45W0qz/Nmj8TAZUYMzK7NR7A58yVTZO8DhZxM3r6M/4XGosHFBLXTzjqKLyq92Ji4eQyVQJ+djOZyG8HRpzegkunPJ/wSOEEjCI0RO+QC1LSW+Ux77tjarB/wPZRzIWnbMgl/WPL8NINT2K5f0gn38bggP85T7gC4xU1N2PwjcKS7INoEJcEA8t+B1P7WQ9PkVr+Iy2e6NaHaRqz/vSqsorikw2v2D566H6rpdsBDaqAK8nRSOhXnS3rlYi8hWk2dN9VYUaSFwVMWWSLTzZSHvRkeFCZFfvvNpq0o7r+letrOcqbA7FX5UgBpHSQQaFiM45+RZ0QWM69xCkprQ+bImqxg4sGBK4wO9Yo3tZoFxZDjpElH2D81MjgUeMWSe+ROn4+gaICAvIkfKnxIkm3uwULa7YAjcWUAhlkMum5WAEVZS+FKpvVN1K4IqpFFjITlAQLD5VplPkkcM/DDg8KBY4Toa0=';const _IH='746ec2653ff08c557231aa7c10cf0420929966fa7b5d4fe8ecc8392223ecc29b';let _src;

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
