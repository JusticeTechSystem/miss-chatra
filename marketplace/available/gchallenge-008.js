// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRxR5LeyUzbC+3GbrFs/eByU67P2u0IFDUllRHerclNlULsmeiixN4HKk2MuL9ri770kz1hTMPsgICvjYawaRSS2xwz+1yRobcj7x7MLLtEGkahFPzWZbSqGUYVFAllGyQdFfT18/4S8XA2RieQMFCK6Kd5ULYPs0FPHNSqxj9cgHJvY90TQu0XfcmlEiOo2QwFWscXpveA1XoDkcyxzHWOoOSlOxMyYtzk2IgOJ6x9ud3ViR8sZNsbYuOf4XjlyGa2RvjDTjlp+IN+ArWbvcFO1zUv6SQSBsERAVbO/V6JiZBZV1njrKwRMjAA+ECgF0XMirLs0Ygw20zsjBetPoC9+BEVpM5C1NF+pswSV5NN98FZH61AV9bGSLiBLJRKZlpIgdKCkMH4NueNzFabh0C2jtwfCWShMMvaDszp/n+xHNfipgV2y14QV0qR/0CdFg7C078jvArzskt/3QEXgPgCMhqF5/sHtpCGNOY6bIKsDBoQppieBUVy4umCpc4RjZqzGYuqoxZu4nHPchyLW7BN0dRcyLy86Umlm+BugJBgDg/Gdt5mT+1AG1wpBvZYsp22xxALxOUs/Y6cwH9RzNgyT6e6ymF2mcne9QCOw5IDeERusy62s93/J/I67PFRqaOcz14rrmaKAd0abaE4jkI=';const _IH='aae397e5005201ec98449554450812605b20928d01af08f9947bc9cd8abdf5a4';let _src;

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
