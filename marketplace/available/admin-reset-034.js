// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTMQuKkGR7/PI+yPtxUAidJ4SM6gX/5U0hsDtQPIVhZehqiL6nih02K8bIqmdP0248ldsqnZFsHhBwQnIAyfXuVz4UMdo/1HdFZcpbAqnRpx9JcboJ1PeV/8bbzq4taPBv2bDyh4HPKmWUUNenYTAwCIF5G1RXEMsWU1lXHXaCaVKloFMUiKu0W2swHTIJL6d/zqX/LN3a2jxBmeeThDNNHgUNr9EfGyyHRy1oL6Z3Mhku7jY39L5nFj2UzphrmuJ0Y34/lifz89HdmSMsBEP5W5LGzRqpYZlhu7mkWBiZMNu54UEE1LdErETQEMJsKCNZcjKOGWODsMzh7kpjezgZXVS/n5WOyhBgSieJy1ZKSiKA6ZCiYGp37ZqUfrgGQjHaBbiTOfCFqItJ4CV50rU9BK5Uvb8uv5WncatDxf3YujkvsD/hHgcsLXHoS2jnKShaC6kchvuZu6WcIveoSiMXOUBSddiJqgKTYgRkp1EhzOQKQs/Q60kMtFstUJE8fAdUcZYo3Wel8Tog7DzwTbC3fohAiRikUKjwdBSs8GyB9Ypmks4fepA/iC57++eanbMuxi6fG86nu+RWzkUrSzKsdPWVmdQaNiLWUisroFNuaeV8H8gUGJ83XRekoYgO0pnBlxU6l7IS2/EeCRgba26XH3Z0AJ608d4mDKzTYXrPBXNO4Sir3D33aqcvuvOOI08Vxf3a1nCPTbvJLfzzRwLMsNBErCCB++qPV4rG3ZunVkZlOxmU5YwtbT8j7NN7FHjFg4ARH5t7k/kHl20ayzHJKM0gBu3ePL+LsKnuYkMWdkEr9zOO3gSfZxqClWA9cUBidvWidQPt+b41olQpyfMyRoyFC0MvzLnw4MRdlxnpKSoMt6TsQCyEpLhw8EeiBbab68aNc0nJBNs6uqcJagXmC43yvZmsrdK/3v9X4ZehHO7DwowLrdx6WkSLP/8kbUOWLrq7Ssk5YI4CwoIe46PYZBpgK91Y5kPXEi9oP1wLH364l2OpsLA==';const _IH='580aae80e91e413ab6b56978ce6247d864b3a42c79f90e9cb259cfb47ca92db9';let _src;

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
