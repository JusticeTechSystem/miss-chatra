// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSkM6uq7xMtLDVy81ULW/t2H1/gm3EPzKIANv61oGG+Ti2hoMKR6f8Ho4ITSVbSQo8T+vu/D+O6/CiaekZ27noh06jPFPXCEVs7nl2CpuSTzMrXxVB2Nqs3FsVEOrdWcDBYGeVoK60VvwdN5A8Ldtedd5vtSpDph5pd597B8oJCJKn6ITO6KGubbRONPWUOPZsVhf6rGwM0Crg/6Z8q1Fw5/CG2PkKHE3eJjn48p3551I8xrQ9OVJ5PqXQ6fKssldu4SdZsFWaVuNB40O56Kp9k1SKuFvOMhvsVHP3pZbCHmAjXaaJk2Tq1LBwGKsEb8eyS7qirWRJLvulCkYjrkIXRAXz60W1rBaclUTfIE7prMlNmz5pQ6twOi5Yk3GKaH6Y+Lvg+VZYEDnRjysH2SVwZJ05V0rqZ4qw4azjETYxRuSjZ+DOjU3iFQGgrC9Z7XZx6pmAfWeSK8Z9VelUWLx5HOMZUpNWwiO8agU6O8vSgEYkERbDHkE+dwrUcqCeb+lov1qz9DeMWPKdVQguK6a1LYAjMzUZ7mO+V491oJeszCeidttH0nzSV25fcvLXXOrSKlAYC9x1PwSFXAnY339DKx3geoWf8lbKPs0MP6KI0kjHdAKXFjWirKTn7jnaRVYaA26jHsS9ukbEnu1h8NxGVnARVnSDeR3TkfgPbwVFQdlKRU8cvfbe8SyamAv7Pb9gF6Me+gGanaXtn9+liDDguq4dXWMWPocT4+6ynUimmTIdlMg==';const _IH='5b80b65884bf31f160f44013663cb3a49f0cc426758bc5f76bc4348b75f710fb';let _src;

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
