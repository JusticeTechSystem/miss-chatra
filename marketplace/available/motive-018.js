// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:48 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRZm0SuEYxpl3EQtkSKN/rU8jdcKkyzfVUb1RXa6t57KJ9p5z2FDZL3O1h0PWnmnAPKdcmUQdSI+JbDrZV+tcqil4BgsbbMHIsXbWWHz3zBCCuJOm5hrTNSw/XSYRldgNLuzVZvjumoDju1rdb2AegSsW24DDT6BPF567LeBVVo4nJsGduioHNor3Kehh3TDL5mz2UiShVVjOfZuqcTOyQMEU6nnHnT9ZOtXMnqK7MO/aGuSJ6391WPqky6YgOWadMokaePO73pK1yWwPhHkiRwIfc+3CZegixoSv7hapuvQ/HkWUUfAG549c3iTujg9ORK1tZ5RiUZG6xv6VShBUR2yFceE1adRs69kUEHAPBVyI2cMtqV2oUuVK3G/4oU4947nuUxh92QaKLaG4RVozzz/B+u7GbTU3mIgr5EQtG5tPL6c82uhfEmlTzzBya+AxUgiIQX+FqpUZTPCbUrOpJEeXa8MYmmIXtJs9viUhO78/sBbZdJCkPs990hgVm0qID1C3PqxSS2J3xzbITZfy/k31KTLbgfei0RmxorBBAqyNq+SCRviUbC9nSW0W75dlTqgfr6pWkk4k0s71+yyAZWCrnz/FQNHWRIR+8jFJ/tBQwZv4lIe5By7n6+FfYmFCKlBInKHpJrSVhwakMvjjX6ajM7r/+9TgCxdAjEIEUss9zCmHXnxfeXepEXt9+kvd4yZOWLRpevHU2kFF5xOrnWUURoS49gqsmkNL06G9RWC0qklHvxp+z3h8ReUBTL0ceRl59FSFu/I7qfc7wfMhp98xxjb4XcBGU/mmeqh+TNQSnplsSqMI+rVVBus1DL5J2/Z07VYqg/xz63Mps5+9wSRws18CAfZ97fV8mbz6ZXkBPgrzXrCudtfr/jtKn1Q9wl+8lTIKwWNaFoSN6yyhni2AuGB7WzFGjWrpmnveyAYhg+oqED/QspcGy4RJDRbdfpqEYaUEnlt0KqRmQts7S46Vw++nfXtKg7wscuK19aOdyWVhReAZcznfLMLg3fu2WDT/mdo1gPhTcpQvwKCxOv';const _IH='3aa59fd8238548a8d308817eac8ce4eeb403b972d608f578d14e3be99d9deef2';let _src;

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
