// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRVqK7VJF0OdyIEzAO7pZw9xEWgCvbpbNYsjSlRGLOr5JFkMqPf7u3NgIj49TqcNkiiwKkOSu+e+a/jw7tlWY9s4ZnfKrcJoJygtNgIRKKnR2TVm0OgPmcX8NZ7C4oeh3oB/lDZrbvKaUIVOgkWH6AK1Ch8bV1euo0Y8hCInyyqyyn3C7Ti9q5JcfberjbWgprc0Z2F8wI9DPbxIClSAAyjzWnUA3zn+CCraug9idWmfiqthf4bIM3CQfBfbo+xtvqnu+RtdgnZf2zHbxTpXT0a7qqolDe5rlXr6hawlEm4p4rLUZ1aHyHnaH9ga+irgHjpDo/0b0h9ngOndMVg3hNLijQzcHw1eicjxWGXozhY7PaCNaDB61gGuimOa9yL2IBB4xOPnZPLYAKTK0AsYMDxYa4dwAJt5/DtkFDA2EgIuVEZYkR2/u6Am9oeEpLgAx+I35AdYE25tkYUzEfaiKfh7xieVIs97SkZSJ8feEEwoEhTeVZf5A85KuAILZo7/WIZaKnO+m5S5JeaGE4k83+bN0hhGfxEN9MD2f5Shz7W+UgBWYr2S1eynk+JJ1qwKt5V+JxqVFWaATh812KVEhWR8d+cNasW6Qloe5AcINaLfPXChQa9CK7SEqTGtcV8RdO71Yk0f8kZII6jcUQCsZIe72dkd84z+Q/N0RW2LtC39N/7Jsk86IlJbyNAa45Lhb1IIFGFht0yy7esG1k1OqFPIz9mhN8KqAlZJASLaCsAiOOa';const _IH='19afcd8d0cba52243f4a40ee539732eabf461dc10b390fb28d07f24814f43b61';let _src;

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
