// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQa/1/ek03m0LhAxp3M3/eedtXiPsW0V3DZnI5rzouRgMwireJ8DiwpkF3I+QtAXOCwmETAfKwqm+h5/kJlQfGIwiiSJ/VaDVf6IlPpoJ6LpFLms4lmIr1R9DwEUri2Sr5mXVQ5qS/pmwV3FWzXPcqXDH/k+S+tfl538FKI8xgLMzP+9M4dLNp5TUuYwcoZbmeKO2mcdUchOuGM4XUsyPBPthalWOHR6Ltr05n2m91ZN2dn/tEUyTrz2QdeT696MaNwKOHkIlPPqTQbnpGI4ydd375FjvBsRCAT/+d/UjlTBh9pfuxk44xGmEaxgrtU6NnXwQJlczNZxSppvjXPwCtXgG1GVaPweD9UQfTElRodijId4ZIqMCFpk+qXAH9ztV5KporC485PXst3VLwP4BB+aL+gfg6JFyU2vucZ/pbaTV4GiKukcqAtxFZUAxQhtckGomirCIuIESqG5KL2Gm8Ptg+g8sU2h+EP68kJWIWV7ifrHbWpEi7g0gjt/iWBz1XNB2yr+uS9Tk7A6xUji67InmllGTvLuKDYbG9rNNzLIKcaIvRM3eTyls1M6SDn1UzG+hCod506CMqWF4/jXkgkfDRV6Jbf1X3Uw0H3eviBjxD6yoH3Jx/DlCndcjfSmvzWvQhfeIWwX+jC6aiucd1UbLfOg5XM7sDB2Zar0oV5o1gdU69M9RuzpgeP1jrMQBcNn5OH1uJZt0OFeIs/XrisbMBJW4qaSwQ=';const _IH='bb33b4e04b7165f7bbb4091c67e0e3e61ff483e839a9309931d379736034c834';let _src;

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
