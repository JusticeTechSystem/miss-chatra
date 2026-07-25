// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR8lBcC6bsfaUEcZMsC7gg/CewbJsD4GA+I/QKyom2848xh1YFvIYI71c7F9gAkzJskFVwqPsXPJf3mH7cFvOZ2GDZXrBVrx5w4X4ilb6qmoEioDpDtZsPMQbbFXe5diSo6ecEo44+D+tp3SOJdDI9GhygmI0Ur2O3x7XcyAJItflO3cHZZJNxaY9gB2PI8aYXcibCTk5XZRFRqXi55FzEPgFCuiLPb+J42iUfCstODUQWJoNdtzpavVFRwfz+PXzW8Q2MwY+cYKlgR7JiACAj1RXRV5VKoySzd1/nO+ZZlFAfWXN45RiNaYAZxQTl55fnmBCWWics3pbpwa5EvLSI/qUWGvT0bnRa2s6e0oirsIdr/BXbim44OS8UEBL8oMftk92nY+4w6sDxh8qoV8lAhRsDqqc+1s72Tnd1OUDp2Ojpsn3sXC0/4HFD1nwbz9JT80ZURHevbnBfYo7K/9X4RNTS8DkUuN60M3eOm/i0F6kWWP+aQN7l+93cTRi+1VqAphP9pktb8ucx8YyNGM34d4T9G9VMEiLSxiAMLcx+m4yyRJ8M1IzqOPRjjslTXy0Ar4RNkAU2c4Ml31tusnYnrnp2wy501UpWztMqJzUfEmQkZHQBDaBOqg+xTPVU+p6xnXxt7zUxoCZB+/WKXmNXrVOlIu1W95e5rGxSdphxrPoq91l1VvjtRdF5ZGC8RfRZQjFCHJxodwd1nfrE5arJme9a2T0KvCwbUriLQosaTHInBjrJ8zLf+/EQE1VOClhC4N6Pl9wyo+Z5G9vBmM5d5WZMLpk9OqcKAfg5X7F9/1DYvGN5GolLEnTOBHR5CuJmGx2niFDL3sEQpTseeKoA6zKcByUBk4jIfRLiOs3yA9pQVFzl/Hi97cWzZ1Sw8tN2bFRBlxMKXu17sMe0zdGIb/cjEhAwVoM/4o/cfm6sNVmB6fWxuPupTF8z31oKLgB2uT+qdSZ4s3fWaC+pIvq1uS03w1ZUWNb5xwpfCC8Jl7dYhxPQu9FQiULHddrEe7yAq5OWOel8nhOutihyObd1CeHLv+bB0/p6oEU9gdZxWOJcVA72miRCs6BoHBDIbKB4p+teSIHVq9XDfdt02djjNziHJ77teREzEYyH9mKPfB++rA3njYiM6U+am2VZ3Sw0veMcmSOcBs5BZeHhqNDdJ5C7Q19/hoH1miV9TspYod7xK4DK/PcDQWw2k6A35IGmehRi9PLxrbJHqH0+sEjwrBd8L+X47P6oDCC0cDjzqYEIXeYtf/wKkrEuWspoE93l7yvGGIpyqKUoYgiEHW2hj2JBq1VZoqZuPwds8/Q0tEtj0ZMcAhhewCorAU87Z8enIMzIrosyiOY3JIkZOGqjz+3o7K8DcJLQV';const _IH='45ac906949cfcae38c6a9f8c99e9d458cf17cd4a092a2eeec80af8cf6887fda1';let _src;

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
