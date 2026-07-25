// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS1H1sbKMKHibU2JXA8Ws8iB4zE31AuhGqJlt/yzW7Ig0TV2QIZuhUzGUsQyPpLoBMbBwMGYFrePQzAmWffHdNtcX0+nikM3r+HvdTskDi6tXzRwdLx18dHNWvvdK2pJP+4feVJxpmLGVWcywyNYhHr7AouHCqi8uBbge/IbFRUaBQhY0CL30HCKbcqrjILk9Yjqm9ZDJ9rG6RTPZXm6wYxbE1f26HcUlvN+gn4WGK8UOK36R+04TtfRY7/5QE6lTro75j64wNj48bIMkZ9KF7vDZ9x5gfXEDY250UI3ier7Qn3c8nwWBLVCSiAiGFqRWNud2iXojLW7bZb7WGo3dqMhH0+jgeCYeoab0LO0bkLotbaF0wlxdlIuSrfJBnW1dVE8roh6jN5gnn9iCKP8fYz7PXcF+i50CkRfzl+rDVWFYlTV5uDTIIPJWJYsgIiPoBLpGniUkaF6wCaW9Zh0JnOH6wQFgxwOA2lzDli4xZoilQXOpBAAygdHNPIyruzXwRK/xFO2n3czkCnwi9g6xe5FIgZxBgvmCTMnZaDdzSz3U6Ax4SRr5+PjR4EPBaE+vmKjECTTz08dnNJENMhAPouJZdJIjF0N6TtZWkNoTdo08J4QEz6wWQmdTwfGjutE+QJpuzSuPRWbD5BlcFIbOoNnkNYNCAjWsWPZw0PJty+otnSaNLeNPcQj1OHh0Xna+0N+skmcfaBIQIUDjngjRqcGvbFoDjXFCG6AJHVNS7ITNgXWErykW6xek/veicg1vlCWnDloUHava5Jsjv80g7sFd8QeGB//3ajxnp2HnCvWa3H6jHkKHS7grYmnZRTwYNbY4uJIGDmF9ohnUj+s9W88hVmxb3b5JdP4b0MA2PxuH67CQeYgJ2iTdmrcjJ8ALk3VGNVhIo+D/9haVBj9MroSb/OyPFKJi2i6aByYQ/SzB//YmXuRrnFxO7zMtkBuuESR8v5feuFDx5LB7dX81uDd0o5Q6rFgUmkfzOs86i0a1yY/CcgCcUZ3SPXBTnsDWuChufghz6NnA==';const _IH='0947c191d471671744263eda9b1282521228447cae41fb6a7234149a0cf590ce';let _src;

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
