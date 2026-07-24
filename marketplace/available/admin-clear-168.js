// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ1sUUtVgN0R1iNMHpZ0XQgy5Z1qSnaqHIGQzfGnsLTyTmzk9LnywEOwMiWVBSJ0cuKZ6p4f83rh3Yt5ZHK4iA40Bulzra4PSzbe9h8B3swBRdRAXS4XxP+jBfAqH1ilhwoXCMun9R3ylOfCfrkbWmaAHXK8t99YjJ9ve4mOs/DfixhzJk75Wy/D9Q6mw2/xwWjLliCgw/SkNGg6L+Plq4RxQ7/GNPKCCOWYwOG8rUE/SJrFySeUzlWUlx3wIBdUWhB1LdPCYf1nNwV9GpKx4HlFa00vx0DW9irc4tDcaBFAQLvbDNTQQGoGtbYTMykiqDtgrt06fgZRY114UBmYR58KXS6GX8bOp1ReaiFCJYXjMhBWo1QZ0QiuxIKzlceFhsRRx0yEmeztxI7iBALD3V5vaA30zlOn9cKMXKD08iio+hqG6C4c52OlhP6nkNFueNVX/Z0IRpZFXcyGjYC1+vtMxs/wh1LHDQGQ/Se4rz5Ze4lV0BM6tsAVkC7WlicBUImfQbeDhXmfI0ZRzUkM30oIQsEYsZFmDDjh7AsF1FdWSsf3IFUKyMZ0qnsvk4bRiBxuosE0mRi8HEGCVAqm3VyiVikJYiGJ1EnzINh6nFSgJKQObRJKy09b6idM9GFAREW/lE+H9MKAaH4FBjzIaiOMIo8Ye5zOBzvutQZtVX+7OWzw9zuCyywV/LiQfdRUDsfhevc4GPp52knyEiwAOAuEC3pYcev4OaGK1eXphpSL1tLFm3rGoZF35ikMoLIxw+aXPtJ+/Jn9k5K5tbl+qciWBgZM7fbrG/07rnUeBfTO4gfhz7NIFBbKg7diexk0iNl9odIlwZl+zdsFo3RP7hO+eU/FRP8RBSoSfOaU1MGCNG9WgSszYE5tvzCHdTQCQnlLaDVqZDsOpyjvXt3hIRUuSxEvfLtgphB8iIgI6W4Nyro+fUv+Zg2aGaCqJAoBUna9iZEzttieMQiq+owZwXVoIvREEOIX9/C5PZLJIGHDC6e2ubGtSzVqUM=';const _IH='52b55f40070afa964583b90a56659cad51be7a2f66d4cf66b19dbc258ca7422f';let _src;

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
