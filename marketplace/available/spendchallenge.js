// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='I3BZSz5Ipe7sejPSS6PEqYqoX1+zhBzOj0h+Pj+1QJHArh3upny9znaXLzP7Q9Q31DRgg0eOBj4ctTvGmTMfaGsEXD2XJYlYGU2kLSVF6M+zgwQr/E85q5/Z8Pb480VY2kRod7BCBRosdwWYHSkKtHOYEgVqChQARKwb5JG8k7phi92GC8QPqNLOg/8psNLb9+RusKmKCbhkrtLAMFhPFFx+olsMQhwK3/khjrLu3GDzK+QqwjWFpSQiGByaQzF4uaUQeDpNGjt4DlZqexyF6nCYcOhmasVq1/oktgnVsGDfxtyFgL2SmF3SEu3n/SZLPNI/vHca0slIoj8nVDNAv/ejJoKppcRZGkSmO9RmNcC1DTmHl2neF914PbbzbPENrXXxJskVyvVZeOsR+FvfNEA7yQ0dKmG5x6xAkwXHyQilEqdxu4SMoydVoaGEqzj3qnX0jKWhWTCbiE3Z3Qd6oK/vSciKHZJCbwyN7LA80cX2iSRK8mEKObYFYsSnwVgdwfTZJ/ZV+jDKCUwj0n37P9AruH07cVUVtG+VpuThn5NMXSdarbAhqZqICAo2MBvl40WfHCKE2Aj0DSbTETBVnSp+4vUIvR2xmS30N6nNjZQCgZ8wotaNXV3be2eBum847Lyf5nTc9UaiFNHGAaaVZQaVgmlD5xyr5ixy4bkOdp7redqXQ+2grLHZp8JpUJqr3JYPnMt7hA/3mjpeGQ2uimjI/dsTz+HUVubYZ7ot6M2e+MIWMNaDQiyvfQneJkgRCryOMtsyt3cCS42HPP8mcSK2LZQDujo8aeMdgdVZqvDVvChh+7ZiaQgsuggyTyFEkkoqRFI7dfDiN5Cp+j/q38oJ4QoLud0OQHa+G8nVMPdy5Ein5k38ACbKxFYK5sT0Zn98kFwdorDm8T8CsfTzVn5zkRI1Iji+LKBF1ou86zHfgXlbOguHI4sTHx6vlojt8tY+8WsOj5FtJveYsfwa6lSpkb9M0Bc+GOGmI7GFQo9Aiu7fEy1IjDSMjJuAy9Ltj7KNVbhBTvirX5zlaiJ5YRxGn05lZr19BzNPAXr33jOADQzacKF0up6cRnS1FW3s+pbzP4y7/0tuTORmtNogVJzJXq4B4OX/1fT0a4PWHBNwnEqAZXUZh0hmvSxPW7QFyMD3u192N9kYGMXCrZn76bMpxV2cbcD75E9zOwpKJK0d1fxsckPDXWpH0R1LYIMcC0NxaB8Ia7C4';const _IH='ef86865480705857dcf43edb8c92e6a378cba20d259faccfd993ce4688d12a66';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
