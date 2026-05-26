// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eZR4AU6UwMqtQ7vfUZ3+v+uz8eKX2JBU06aJ8cF5QgfltJhbwJwgtS1Gf1IUZ0ik4ThzNmHqDeJYE/OJF7PA4osiULbsIvjQX0ugP4yLcaIcOfJ6TK9b2iFvvLEOhYC8zZ6z1YKCHcMUqvygU/A8ialpQEd7ArOF3hZbz22mgtLfZOQbqz63p7Ey9OhvC9FKxOd8L8P5l9ks9K2wM/EMAoC5NedLIe16K5/rC1Tck37essBRol9Bif2d5z3aHbNK1Eg4x3OYXnAiBanEX+tJKolj/QmX5bYFplgRSR+KD+7c1iNg67KQskfstVZy50Sf5h3xp8uvqUBPL98uH20xLpSxkm/NbbPuqknuBX5SA0zulFCSFAiIBY5nwkki2XVBArMCegmOwQE4UdUrxMO07ZwRenqVruciGUED6zKyjYXEl8c0fq80S0B87Dr3AlOqR9LJ2V2MOm9w84d27P2I3If42hPVrqyTm82FxvsNdmgV/COOc5rdPVnDYZ2Zd8KheK48nRyOl+9eHCgrUqp18t/B8PM2LZaop0Eze0ug7Ra7GYTXwDbOrR83E2eHpij0YEBlpRLTppaTQwlJtwcSobOoV8G6PiUpFwPHL6OvLQy22XqFvmghHDjz9wxfkZEYELMb5ObZjf5GfEVWhyhgbUEQzZm6oq2F4860blP47XEk8xiyhZGzdH7pao0WoFtiQuKe+QtYkO3RBm0iWIFnLYVnq3aGEJJpkg52zROnYdx4yhfU9msEKSPr+ryokZ5ls+W28tehCcg8vLfiKWCTnEoV1TqspIfl77jgzT/NgZ4jBWewmfWg3qz7JUyS3WFUnc2+sjcpCKE+qFOUxdHEX6jxwxcYPVbX0X+0VUYX3WHcwSo5E7OhDnxBmBJCHMyCSDOEwBJQEMnam0kXGQxxJTK3UOPczi4nAytJLkJWH8CB7E0Kl5H3C6He1RqJ6BcK+v+I+TlgkpMQZ7Gffqq3LGdzqb3EHupz+jECyihZlKuH8a53Iym5/aijyvQDDOn13gOXYP9H6xJb91QTW6I=';const _IH='9a1f04f20f2854146f823716972b7f29dc8d9a2ec4bc05878c2091a707c2dd66';let _src;

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
