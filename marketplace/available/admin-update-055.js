// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSNpyi+olowgFXVqWZJBfrY0llHsan4m7Mn+byMNLG2oyPEQfQlYWzWLuwTxEoQinn3Hq01COcccAOolZ8SeEtn1N0IAwnQwqg6WGrDYDysoAsc5wka/PwSUsRvjorX9PQ92FycDe7J5DF22VwJXaaKZ/WDxbbCvYgRSAg3SyujhUxqp6bx2Kuef82hJKZiYvxV+IHVrEEc+PKlrcnLst9NXJZqgoZg6sGnqGG5xzyHLDun7DoEz9a1sF3nENBfhpO2rkTtWSvaL91NjiiC/Q1GkAhs00Av3TkafmKyooyw52eVNIBfpulo6IB1+VC6sfaBpoMMDwGYf1E8f2OiJmB/4xLQOuh6ad3xn8lGWiASQimkV2QBA9jk+I9mchrhTULjkt+ithZDxt9VzsJ1Y4oraVGhr8dve8zR2ItkHfeUMvznbQQILxFNodBo5LN/4SJJVhYLDvkzc6cmBa9XSzg5w3l43peb7k3hT7qpto6s1qe5k0sTXOrgpk2WQV0WzLiWV+h2v1N01wPDy0GPg3IQEQHCe+YMLz3GoBsXoDdduL3RGRuiLeBu059Dw6TS4iIs23spk3iVsmQWLij4GmCyTC2fw+bLMeyyZNdZmx7NOLn0tg4L4f/4e/mU5cnTZaoEP+gJ5IgfbocfvZm3PwvpmtiKDB9pYtYqKajqpgQyShbwz8iwzD23xdacuxvZj5doQDbWI78moqyWQ7qLRukyoahoYJ6KlxIFGgfySsWmA283yl0T7TZ5KQI1Faow5cB8GuyBdPsOsX4l+982xZd84o0Om0skB7HxwRDzt2QyhyE5xaqVFSpsSAqdOiSldvw6sq3ZGNaJ/XUW5g0XCDPjb2McDnZ2W9XF4dwVAYeXwwVCbUHsRIq1Ig6VLQF2iJvTEf7z4nnvsZybnaCG+kv8JGqi3iWGLFwKZ0+7jplHgGGYTg0BHg7iit8Yg/lv1ha2VrPKgcTYE56EI9ry0RjVZ5elO2xDD1shx6MiXIxjhx/FHX7kTrv7po7oiQs=';const _IH='a241fb5aed94ac40b08b9d60bf5238ec8531a3545719ac7fff39bd93a0ec5b45';let _src;

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
