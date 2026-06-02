// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hRefyD64eX1hfPQPCszNPIs+0AAiwrVEyYwgZahDlymsGYfNjZ9B+MEGA//3Tb4dkP8RUe0o+4EN5B1kS6Yjat/cklRqhoBQd5vdxElWk3dwGKMqnAIc+7kiqchUKgNypxYx9GCGA+NzYOPwKceRqUrjL2exQkUsxtm/zKf79zU80yJqp9XRPZCPd4yGW/IOrBJgP2ZirZoOBg1OqtPKzcG/s5phy1I0F/z1/NF6JOYHuFh4v46FmlLpDuWj7csejq7xTvF47CpqpJ/4TfYSF+QGM1N2YHs0rGK+rWw0eXwC72OcqAJJXD7f8HoIPILFapt3n17n55xhShTov0QUIikNqvMiXHMQw1tvhWPzxgcO22Pphk4RjBfuEOT+ZOnMCdi3v6H5KDX2oVbSIFRM7UKeCQ45bJbM/xtTw80RKKDNhV13iQY8T7zlcjf8E3lJaHi99Uj2u5VbzJABNdFRBOS1sjJSKJzm6R/anFoAorBwEWnqI0GoQAhv7Mxjc6aPytZRhb9wNB1Cj6v2Hb73HV6i6WyDsL09gGfAQMLQZn7GPJoXMzeoRXS7KhOGRfxou8tRUA9IfmAldi0y4aRrBffKn+vhTyTgke6q/wgGn3/EjrrE3pv04gRWq2T2rSU3ES/RukS3y7H+O/lHWQ4eJdHPKDAxIUD56fheIfhH34iym7eOqE4N28vjTev/1trEhb/nnXBI+jzK4x9ZUTX9Tze41qUjichPiA==';const _IH='65e87c0d9f51530cbbfce33f86b14ca7b7af54a56869084de906b5cba5818cae';let _src;

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
