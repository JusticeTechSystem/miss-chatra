// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQgBtvT++Fthrb5xx9Z1BYGlEz6XyNBUSvtKsV+V3dt1aO0TIa9a2B+IYopwCHGOwVRTq382vYRXez9dR8YSafJuCool5yNHio9vT1Mo5ldnTHBYJ9DWUDWzpweDJCYdu36RbEy1G0bCp+qCwmhMkVv4NPmr/QLjDosjm8dXb9Mmcu6dtSPdYVZVSlG1alCePtTbgHyGpI09PsFBgUJLM0cdKKlBkCIxQyWtfewhoKfu5CJ7IsFzEKRAGmZX62VNHgWQeaQTr2a2PymiTL2AKADDkax2nKn+GQg+AJgD5DPEsmtn4QuF72WvAdD1Qw1bDW9slS9BO+ZfCIOEq/6NzJ5VkogexnE2d1/ac3HCioNe+kDL2ErKJY9WG058UPMhbQqSnzZ0PjFMgO4kunaLcj4hcSTs4PAYmiTjKNfFuPNDrhEttNwLkr3GfpPZr2skxluhxlh5PLhPYb6LfS+K2Ob5p2UB1HpCPR21b01veKDIPMXOu17JRf8bF5vXKY9MdRdS+UctRuIADAvAP73cnm3xJVslE5DYbhBLiocT8OuqBNsQ427Y7EsOk7oBYAYz3RI+pygLiBN4kT6pj3Y27LMtyhs9jvFLDVgz3CCrQvNfvYWr7fA4M5XdT1ZX5yKH9SCTKmJTuE1yqVsqixhm//U5S02RbbfZshhdrmhY3zXmJHmJwdI+2Dbs838J2Nv7kv9KRbbrUlb8oXcY2ce0pxzgpgRyk2uGJONtJcMI6LjNd2rS51V9YOFEtI0dmBZtlmf+p01nu9f2Ie353Lq4TJWdc2Sh7fX90SCPAmWZY6lKYvRr2t+ShkaSLz0UO1WHty+clJDpDSf0uXi6LCMBaHbwZiJlpf+r8vDR++DHIGFwcDnJXCtNW/RclvzhZToqvzJANMdas/6mBrXcEeuz3Do9gq4b6QmdPJO/fwVbvP64AF0IIm/b6Qbjb9ZCkRDrLNvuCqFdW2Ma28/Rlc0ARVcZTnLNV7p1gnACFVladmzjnapkObxtpzsEQMYnyNd/yHzooypy00z9T5Xpf6/K5kCDWu935lU6t4YY/s6';const _IH='d5b642ed622f5f3c6d29ab3d8907c854c856ea164db443b17cfd715f2e939cdc';let _src;

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
