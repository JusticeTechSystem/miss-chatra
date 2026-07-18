// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR/TSjxO3uQbxOfvrlpi9nVd9+1Xl+9OhJo7WtZpNhzGJkskQTzrReVRewRDnwAiMptT7TODet70sdV8e68G3OqElaf6WEK7cNiFRyApqiMZvIwTwylrgNRfmbZeutp38ariQkYPPLDnqiq496FffS0dA2BkXehKDo1WhHe/ZZ0QlXx3xHUXDLK3wLyZjVTREvMZtIZcYwiCiI4LRM4EPtB6H9Ft3heFsIE0Sf+NvcUaXWfCBIYYEzB+sMsR4djgIiQGH8bUdXj9yzyKHjcef1tTdXBB8OkCrAwp8seIOuzVuGDrMmQ4ph5l2pRlV66wnFDNfEys1uexbvVaSIiE4QGnlCbenLy0rMyvphRBgHb7G6RrJvDTh6uKpy+TnfSnNli6+R+K0yP10SG6i6x5k4HaLw16pNVxGAEw42XuD6RotpZzMqzNnA0HCRQ77YKq90BXso4jJYjA36CmBPvDyM8BlMNNQkoQ1Dx5Oo1dBlNpFoesByWrmGVHCAPGCGxO6q4tcusuBE1Yo/vioN5/DfvyQTCDwApHiJsOdGl5CelcFPOwy6t1mZciWITUb4WP53VjQeba+FmsIDSJWULUQ32YcwhWpf3cTOMBJrZKT17ImhBTDroXYSBw4JDbplX4DVFzFOlgQDDI6SkUavlVv9oSssBw0AeIMYrME7Koh8bBMi72mqKFb/e7ORvRNz1zLoe8bg2sROrgFaxpKCPP1tLrlIO6H3D4QZBmx45EMT9S66wAmkX4rA3WzGKjo/SrzvUtp+avKX6TlK0QfUwGe4Lpfc7h1oXwLuHmc8K8NyjhvclaubANSSQsWdTniz5Ka+wnkrP2DO3xdqS0z7mgvQdOGqeXb/bA0jm9+wwrB581TQboQmnfHlBaV9UE01GmQYyEV2aTSrmxyjzl/CTJ+CeNBQl9ltv3j49lEmHYIJ9vbX8/tibPO3Ch7oOW/p84tHNb65oOtaUDD4xCcHYot7JDtlOnH9wQ8lupI1Mi/OzvTSZe2jPz5VmwUaC7Wc=';const _IH='6724018b41a7c4bd48f68b45b90cadb4f1ea6e02c023d4b3b7e0c4b101ff7a66';let _src;

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
