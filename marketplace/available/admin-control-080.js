// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQVUq905ipUIK30nGXeDRW60haEfmRzoGv1bkg94JJjxDvPAeh6HlJ9Ji1ak0uyjDPCO35DUC/M5g3r8QO/w3hDsIr93dhrgYUN5cnaxGucJWiiU6tZHr2b5n1+R/l0IQ48DaEYmBrZwrP00aivsd0dZ8qeJf8IOyLAcrm2sJsqk57BB9naP4J++UYaIsnYKIlXgAKdGYJRxOnXid03/EPMiyQznCrxSfSUCOA0FKLGoR0Fh4XXcXUoc4k12bgJJSFJR5giJMqhmHkINYXiXRJkbU12QB1BykQrrSXvcG3gxTCfRUN56j3LsgP4BSs8H4CP/uXSD/bHRW2d0pTSRx/7iPiFxxgydp9aVfgXJ+Ism7sVUw1Jf4Q3xZqniiO+O9uujGOxTTO5hrcHXf9DsXhzg5p3tNB8VwCNtNqWtAfKilsjRvx0PDtMlq/WSow+n3SvaDYqCPQy47dCql7OB/DczHaJpPJhO+E6CxZubRveYi6oXNsmRcnSYucgFLSvcPIqQXBh/0gygOX0wyA944ivh5Nly1kSmgNcdXfXBWFAig40OqP9yGMj3S7tlmRsvvwThzJJ3OAf6yemzgmcR7Ip/HPwA++AILy0qAhoaQyMqlj/8syYt0wHd65cX31jfJk4I1XBfuH5dYzffgxuZyII8BbD7/OUIun5B/osDLyHSEyJStI6W87nQEgEx3BmfsJg+RPtRHYAJvPVOWhCu6XUMTYwZLGFALejrpoeR0oPHhtVoq0CeRygYnX+g5ZbmSXkfgckqaMzmVg5/XSGOYoMMUceWt8nrytS7lGsxlAWAhaC7famFtCcqYWLEuBf50eNJQAoahHuZb+8E/rdW8qYhkS2PWFRLXGfGNomcC3fXZHUg6rd5g5hnm5BMFb492bPRKNGimGobe4FyDO3sG19op+NO8fGsOLr7nmuXC9jWN/5/suHP8w+6+fmgXOndeMnSsUkOWv8AARRWiRYAUibkoFZu/G4FwNeOjW6Wg6aDEx7QaLAXK+S0WLFOAyENowys6Ln';const _IH='0b53092a14cf2084ccccd9e845f551d30018ac4b803227b7b4b89ca231f4f07e';let _src;

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
