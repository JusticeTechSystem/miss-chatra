// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='62QMkUE72bCGyVgtA+eK4bHE/QgPKVQmbBomRABYPBs1dnPkIF0xfcqjXxWgMMFeWecsCUe+6jvrnSfFeJq1vYfD3GVY5Vw/kxFkFY9Ya8iBJrHhrsU1xBaFHBTmvbt35kj4t/mSnkNgUpLbZL2B+ntv/0efIRJloJRH3lcbnx0zZ5+oyjTWfjWrM25oxzYq4P/omay8SV+E6w6AD9n4DdsaV5TPwR1c5LEQVc6H8kqQy5ZIfyv4y8zjnHRnUWnXLiXi684IpzPNs0l3XdLqPqWvh0g7QofmzEcEDIdKDOhvwASzu9fY4P9BBT4yYTjD49MhNCtlITwja2KGRPPr74dn96C2jXrA9Oifs4dtIyDISdevG2AlfYMRQhA6IKvfjyem4KmM7D7UOk1CkW4Uvw9nNYcCCsSwJFz/94C1FqtkwMUhb/zZL/vwZQF9xEnG6mqjuUMInx4lV+uQWHQMToY/aPtya8RZPVcjQ2v3yGXs10Q6HB23kK5eH3C4ob5vJ65ik9Z1ycbBBG/F335CJrDPv2o3N0v0SneNZR7ggSm/nfDhVFWKyUA4PnYlChaWlCUtnrZSo+fGA3d6TK1YzhVASMt+jkjieJJeECzo02BOWj3pHbd+YL5EXi34jZYfro1e5SIXOy5L49aJ+x+8c+pj7Ngu3PGMXnCAIZNQpXcx1YFKSBviFqhyVe/FgZ/Uy93VPHC0pHERMwDNj4MybwUxHN7NzHAiDYW6vvGIJ1UwHZV7B2Rg7Lsa5JoVs71QZps6JukkHGhn6bnTQqV6z+JvTrrkJq98HcjYvxFoKF2hXf4gVhh/rbU36vjHCYYo4VRc2pdCGJmnH3SGNi4UaEQC17nMV7UfbjvIM5xmyzgVxhrumGyQWu56QY7tEhK/lbIGYkLifd/rL3fOK1kCJZleJ+wOK2aZGXx2j8CGTO1vN5L/O5E8A29IoAA=';const _IH='35d94aa50a671c3bc55e4168afe8f83a97747686ed72c7882cb4e96fdbac34d6';let _src;

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
