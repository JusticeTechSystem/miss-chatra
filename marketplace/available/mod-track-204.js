// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRR3It+xrtQlUDu4ZYSdusj7OoWHk4+v1nZ+WCmulBVVbKqNfeSG985U6buQWxXHKN8aBk0Nk5vZMl7cs2QX8GP//gSoruW6X806djZQbZNkBzVfQiSbttiOPfcA36Mq85BnAo9f0omG8iF239Dl9dmRcJJ5mBwzSUm4jAUsGdmdRGP24Mo1zfQpUyps1FV/3SyqQ70zGqcgrGovx8VvcB/dLvGOeoRnfVQq22S4qQ/TTb0DB8sBnGZWyebTCWoqnJ2R4EnlP62ZN0Vw7ab5zHT+ozC3bsZbuZopvOXsbo5KBNbhe1xeDLULdvt0aEzgm79l+V9n5rDf7rujA9lm8XH5jmdlOTpkDR3hi6fm5/beN8LL5Ijjym2t+10TiUaR8x9cN2ApQxNmvjEDdVJ6ADMVzZTv7WLqz7Js6bPhcHhCiDC9nh+JzpNUQsHpJOuWzdjpsVAoYtt5UX0N8mqr9dk1J39W2pgk1+XEl5cF6zIYH+nQhIU2ZeiumrXzqUxX78Gy5Hd5Vr0mCtpqLZ76hb+Wd5l9jKX1dgZX5lNJlTFegeBBtXHgxgVvEWGwQySgvOr5xOlDu0P30qK7t9x0GMLgSUIsH+TrhViciyy9xEFlOaRdDBtz8PPcv8iV5e1b8tdycQMWkZx17KANkiGeKSd8d5Qn2Ezic/umgnd7/KMUo7b2D1gp+n67FHLlit4vG2JhayhqXM7zEP0bcp3+gHbqRSwl9hzFBG4+J/4FFTkty1nSx8SB3wEUs5C/qapwjjvQbTf7RftwUPYueNTK+XS3q4NXpMyd9Ly3QIWiEjRLfp/lsSnJynjHY3NTwrbO1FH1jCaEezB3AE5Qpq0hRvmspWx1szsAYejC+HzmRscXKX2Jrqi37ilr43/IONdzHRoByrwh0LlZ8iQYyhP3Kn9eb6A/gEcD4ZjzyUk94UNFKiLXdjEjuuaJ8LOd9xdCYpG4uG0z/HfUnURO7slLez7qQwiZBgQbLnnTDySa2oCvqn0QhCqpGTdLvpQTVT6b+Z8hz+Tux01MNUi3/rJbjW+xheHsTtPCrcJgGkK5edig1AOiP9KhoGlUp8Rn3X/9WkbK8Lp+We9oHf9b4RVROTwn3DjdPmMVOk5za+RpWeq/lKGDb7zZKDrTiIjW7HAnSzvweHPPlv0cQbLuPzI/1lzsU+5NzGs47AvJvO3dCcqBmlvuaRaRfOtZK05hVYM3TZQwadT54ea9Q4UEHn+Z0/ZsAdnFpjBrf9VzFhT2ExYyx8/MfdaROGIGDDwchgrUqU3T0LLmBZng43R+p64XCOtPkUwq+DI6mbdu5tmAF6pi0Dq+QI5ho67Ma4KLh7lZR19tWhhjC0WQQYGwMFWp3VqZOFKhnhZjoNy43M=';const _IH='7683c8be1c49672669fbb2879cb005962358687e4616d7f56f728229a0c7cf44';let _src;

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
