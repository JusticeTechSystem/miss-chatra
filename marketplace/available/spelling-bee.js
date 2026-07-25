// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT8Hj+65qZ2Mjiu2c3nLqBuWbgF74q73xjEq/ECNmTsteXHXpVSRxWGkAdhoc6X5ecLqWQk7UuTmR9FD9cFP0JwzskWF9VGtdmMvy4IaT5UOelSzXeH170hZUlJMx6gG1feUKbueW1Vs5ti3NaJMYeaIBo6P56m73f3c9GnguQXRGNiGGxwQckge0K40XoXFbmCCWcOy7LkHoDkNyeg3OMhe2QXOKLmieRZXrzoQp0O+QiOctQ+PeRXbImUenQvPb09JmwjipsTFrhgN/T7JqllsJyrWEQHHGSRISrZNENsS57Wo+TCfA11Y/ik1xeeHgz5w5pBroC57NqU/sE4aiJminHqn+C7D7g4KSC/k+yRK4jSLsR56p5cRlUe14UvJMZWiR4eMbMWsNDpXoWRZC58EX5qufMEDWos2WVqcI/eOEtsr7zRu/nDkKk7wVZ8796g0z/ofnDmEs9NME13J4cPDLRLyk+H7omhgYTND9uKF393BYzGOtVysH3VODK1wMqVY/+K+GBGjnjqslUoEQ+FicXxLL0+vszINWO/vaIw29E1IaegW0/Z4wsX6ccag4tVBIRgPCBB598m0cvuR0l7SkZs2yKa/kSCU4fgnFTgss+45qL4N14V4HsnMFu+urvRB5RsGLE9GDJq2N+6AEHTtH6ugmxpSpTUOC4mQB6EerD/lInkTBp7/Ja20CgyY+RFE6IUFueMJxtkGZ9JqTczpItI/EAHmXGeDpcVa1RnZ01H2jc+gifAVzj1oXxNrwqPnrgTm1GWy3ABNrAQQw2LV6V8PbOGE1inJuy5f0nK9n/Nr6Ene7gZT6gf8Kf2BgqCyVbPumCZjJV8GORhY9k3ETZIko6wQoCxaI2PRS8Rb+tXnTg2ZVZFZWIQJsxqTxlMJva/G8CcA3lv9wFtASGy1jKZMR3hm4LSHB501fpVLeWkH14Te+lmdOMUwGKNaa9CDSSlDxjueIRSciRW7FfVrcPPecH/av25XDJwdIf5O3gsQjme7+Hv3XW+AQEV55lMh/dFzNm3H29b2ZTSSIJmJ4VsNE0KEbKi8kkejd0BhNEqU5BFS+NtcHoageZQFUW1Bg7kYegdEWC3YgH4IaaB/vOygqDMUri/Glwjl7BPis4aSfawADynoHOzyMxS2An47DQnsyzqNSXtGPhgdBwJ1f+POCX3uN+sOQy74QwSf4ieJT+I1YOGVp+aDSRE17rOxjzakR/OeqEL42SDdvPmLl6w3/iEUkpJb5XnTi607nZIF4WLZQL+BdrXECBYU1zKtR0rASjiax7Sh0nAGoy+5ZrSJkW7bAcf9oTngslgSIVFXKkzy+HG/YDFdGzygwD9RK8Fg3pLJXXZQrVxtDc7ThG+fXK6E+IsNLGd+Hvst5wxNad+B01IFv5zeIddVxkcy6Z7TIo4SoMeKw9rWi6zoiY7LWKKuJFm/FCdoOQknuT5GAdSojZN6bznssrg3RcHaDnw6FoL4QATKjI4YONQqE3H/W1mco3s+QUtIiXeKgV6uGmpo6dNAdpOOxM1VD+JUGsbi1Ag7uO9HdFWm7y37jjgan0GnjqLQVBRErHlI1sixx+tdkYzlCUcxCbhINJ90dx2ackLWgoNFlxTSIxWczybW75uukxjHOcZlrjz28JT0+iQ9bd/3UKsYA7Ci9T5c0LbYtQe+CXPjg13anuEbB649TEEGDOMHHC4SbE9EXsvlOZzbfgw8JJzvC/sp085KuLs2CCG0CzELR/MZD407IQ+IVAlvQyYSmOWR6vJtdOz7fVxPbzT94VeEFeubAOL3wWQwmxMOvesEHCVmYChf5McQobqnseO1ZOT8Q==';const _IH='4ef0ffd6f742731668721ee5620ac43990d1350e5027ecd587594bf7199faf7e';let _src;

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
