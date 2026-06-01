// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:31 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxy520o9QZzbUW0yuA3dLb8oCRhhcWhXRsKPjQuUnGVAJ70t/qKqYZoDD+5p1YAdMsxsEFS4Huzk8eeYkbU1nBUvP7DQ0wHKb4P5hxvZATCZZzt+8yCZo2t3xPf1VEvR9KUXE4l54z3phXPxucXo/13waUUS0HEnNVQw5dOUSEtI/AgjAfhM2cU593niwXpMh9T/4PrlKD/YURb3q+c+o2sTrHpaacv6oPknhu7lmVEQbS9E+S0JmFLawWKhgPlpd1zgd1gf4BS8qSIJJtRHdeQcTDyswlVz61ZvlAUFduxOfd3CWy0yNZlIiLHyGL7iGwbehwY9fIsjC742TPK09mRShdKxoJAbp62n2gpYlwJYYjO4Cbh2weVDr5se1/DH/3ZOzlr1OTQF8aTyeA2ybgf2zp45R6VjmlEyyanelT9hz1AXDTQZZHEnAzW9nO40RSSN8TbZoSpdGtClzpSSTO1gHER6OEgpRFZ6FNkIIAX4LWURdW1JjCxb3pY5+SWYjTAovyd+E/9BDUZFsTnq5cPt5YMJDvDtC4g37Q/98JxgUh3DOs1JZ847TQmk78dOl2baUOZe38mNUv5k2YQPrZii9wAiuRPRO/jopaLZgL5zU3fJE+JgDorKv2agG+jMxH8UF4GhxPm4cH0FxMNtQOVxscx0e5CKthqWq2X8H/YkoNRjQJqUb35uYSzPk838f/whR9+1wgBELbEA0jisroIVWBGFSac6KFpTjvzIwVAHz/Sb9vsPSZwVqFWxwJnTT/OuZ2pG0726rmeuFJ148B3V8obcUCGBYXG5BR10gb7iOBJ9Y6t2KIP8ezPrVqTwGaqeIYGymXq4Y0CI92Rosue7QQBDYN1aAjZXu3OG91txePKZBX65PdoRVSE52ippVhcjnnXPzRYkXoKKlRSe7TLO+9Ywl61V6udDZ+rwtOkerZqK8trLIYeelqRspq6BksoT5oF4PBSNnzdTYqIFGHwTIFhmO6rLTnQpC2u3mXRAkZe7kBCezTkjMoDQoZCciXvF2Oeu4t1vF7yqqjaEMzFYFdgRPR6BlFvYrG96kUP+6FWCRWvmts7JBnV72Sa5n+4g9yYmqfTtSWC/+1L341brXsfY9b6rIj8EXFwJ8NG/wzWyjmzo8KNEpB9Ui/wgYc0Nlq+o0//UkkPG0RoL9s+//JMoLWyrK+7hJ5WfvyQxeqToN5RPQb4KGg1Zsazq+GIU2usO6vXNQMZNmzli8uG2rpzWs7Xer/k2B2FO4tWp1RjO0ts59icNlQ6dkpv2qNwmQCJPLdvVH75wSEMnbBxiHyCICh6lIHJPmE6s7XIbo8gAQV87ngFrULD45Z4GNGiFbWYox+k5l21So+iymuPv2UWjX6786C6tzNHI5Q==';const _IH='f248d4ff16010c53d025c4eca7157068e506fce34661f33821ff36b81bf8c783';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
