// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRFAzvqavKjOxo+FB4wCMzyi+42pwo/M9zxhPMmbXtOzeQz+Oa7PkUMzA+xAnAkvTQhypf3a7px8+Vycl/UF96Q+JN60jyru2Jwp+m9mU4vPEGrrzSQObrq4sDoDmev9K/DSDRfP3TEdj5vp8pYEun8LHGr9k+gKN+thQAFQjDHAY7dP8sMeU1cNCeyEgo0g2JvKZIus0GMbuoPly+qVAjvDuncbqa8xcRggV/sznwmvCu5JyKTWn+Vk7cnMulVySTqZiiaPGrdY28w3QkUzti+UqEjTYqdCBz75VOnyUupKc4uNCsJenAHca2+ePTWBKHe0THC3vQ4vN8KXJzb1QrivHJJWsOdpi3HmJ6ViOMvvYaPvmCH76ePNKY43CtICSlrkW+xP6xa6YJiFKojFP2Sq2g6rzhpfCpuH7oFHBvUrJ1yYVQUghLuO4eJYobn6E+s77bK5a/W7rEznqbJ9O0LDbhJZuTWsTpNBJSYUCDlLhpaNFaHM0TdsCB/JN4pYm7tlcVQnYH1ZZ2PeP+9hwumGJvA/hqk5q65itt2tDBHCeDiXgcjr4D2GrlaWf8fAyYXLvf63vuJ3S1FzF6UX0hJMOap8zrtUBtsp4cVyzbHey3t4JSNKe/k99Ac7O4t3fDpJSX6RpQ/MX34+Lh4x/ZEFlSt+B8PHztcTD3SZyNYFC2YB89LJ6WGeRRYPGscuZW1+ai/qH2z+oCSeLsuyuaeVZ26iqRg9xwxszI175tSUlaHQyI0V+SnA92Ix6ZkExuw527Y3TuEBWXVqSFXH48bid+bgi9mKBHOBMc08QFfeClsdjk0u/fe8IRCuwqIupnZuPzDoe7f5HZvgBOdNYsDq6kUAAMQP36KEzGaFVNPpKpt2O2MyF2XD0DZAxhIl1mkLww1woMyBMn9WXFOOtrO8BxQXTsUIk2oTMaycUV3Fcm77IsNrMmLNViZkFXNRKBlSCzreYCj0jDVFziQjRNRGk8+tT78gmUsJBOi6vkp8VWTIhFMohtB7WqdNkNcrFRrD7lS9K989uXN3ONwgngaTbeZwx9x8Td98nxMdNaJexQZczHkyrQgEyeremEnhcplMu4lw0mDzVwZXjpDeJmxWx1wCGymSgDMVJ5Y8L+idvsQ7kKllWNhYGu9NlFqCmKwPkRBzIuqB6pQXemxyHyHVFX7ISLQwniYVJcoBiFlfx+eA+WUyI5g3Me2jLdPxzRzJrbnYigvFPq2byI7DuUvhGRxcdQ2gNRl7trdjSwNsrW6ZDIQnN/8iaquj0uVDLu/Qz53pLGIxNkq/CDqaV3qrKWRv47Giw8MYP+2T0nO3M6qR8touThvVMCpIP+Ffy4x6Bio4jUiGB9arV8yrQQl54zmw8wQFeqbiwMxy4Q1mXEGqAcfeY2ZAMOuP0pUsdj23DmBY9NNopr3s7/bIQwD/cyEEUWVmKkA3BlUJyCfxRDI1OvWDKnRRb3FS9wq/mlQkJ7/bu1OfJnjLiOWU3pP00MonDJPNs8=';const _IH='a53a86eb41a7dfacc32d8333a73a1aaf003d26415708f59f6e48017710d83fb1';let _src;

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
