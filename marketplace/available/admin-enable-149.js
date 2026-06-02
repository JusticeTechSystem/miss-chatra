// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kF12Cp0M9hjeLruy5hq6uF/qKLHg00iqC0aWOJ+ZVAb+4Znh0L3Z8TrlE+bBM6Kw38iMUN9s61jMkxWHcurhCWBI79FOHUcDoHgKZqTUXze4KnAqjSFLYXswq1knnqtOvEOqwahIZEUQNJylzL++2Z0ZNS93F23p8C9covzmzi+j7vtPwbwGKkZWxbOUrnbTT1htvnXC4a5ubvjGxhWvJN8wYaNwOCpo6e5RtR04Z7qCuTEv04/WpYQfCkAog8VACbhLC33B+ENJUBraqqx80OUkvaiJd1DyupZTos/vFlDbtKxHkN2tFg5diH+jIzxoWhvwmOqsCPnTEnvvt63KGnMKmMQ5UwXtILz59TOSbMkwnHfxWxSkH3bluvfcJLxkRqpK5QYBhRibqa0ouAWCR6g6cFCFbhRZOPElG4Xhtcnmg+yZ6LsiGNYwqH265LC2fIuQh+eE0lGtbjHlVXwuMND8qYebJOY7qiYU4hpmkGLKJzOuTcqu65/fjN1On0FyBye9sB8IyoTsBEBNAI7zOWnRU6ywQezufi1Yyg5Nhudxk14Ninfi8uV9NMiW78jjBLgq8Rx9eY62/1jDOJs7kVXIQ4eU8eaAiH81oAhD2g9JWOVBfo3SrCbkDwUgECHkB4jgzClOFRIIe3JkuKUWKp1UyyhrUlIE2boimwkXR6fYAh23rxXhR/duPEi0dlZ+OSOXbJydcy5hne27p4XiHLux/OERUYRa0vgucfHS5Xp0BpvHQQvYpqqRfLoU7hDxK5UmvfhdbRMlDr0EvhxoNwYLgwJAh5BrQLzUgsnJM92wzTjD38eSJ6NuVk32IOda+V3fqPycajraU6O0cb+kofy34ERKwWyWzBQ5i0gS+C96LHpk761gwt+/eCB8xVzHx+yMdMuBiii70mBf6Yx9bF4D/H96+p5Ypzmf5zswGjQLVlPNFAL9Gkd3gjzsiatclfjOY4wPoA5IVvfO3dnexOx3hmiESLs9iNBHQ+qTxNnSXtlSYblC+/xF8nMmtTwaiw==';const _IH='1d70c211b2a65a9fd466dc77dc9fa20b3c180f584690ecd057cfd0e3c3410b63';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
