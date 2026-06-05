// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vc/hCohQQ235KZpaUZohtU/n1JxQ0g/ITiK+QequMhlfSrXvhaFSDYhmBPlCy9uX/QohmxwPtu2U8HYXpRB75MK+8HxrM+Y6LRIOEaKcDukrO9LTQm2i6yvcJKmYXzjhXbvEx8kMK3JQ3J0FBIRQeXygclZLl5DEJ1V4FN4EPu//bD/4SkWEmGsdw4veFe0M4uHqBZV+VhCfHEXb9tYhV0Ew+wbStt6XR+FCNRYMFxUUKbopHhynTnz8vcFPif3doAvST1MYPdA09vsxVd8BOBoT2ksxk/oRjFB8L84d1amVSBWdA7reMs+BGbaH4d4vNtfszRS21nugjVZnslXug5tkrZDeRXQZhhe876ZOi+qXk8prbdPwEAbZ+zzrPjITVta3VVBlqA5k1lSzFk+dKpmdPJBT4kKcC65a+8smwm6zHgJJHbctOvXccU5xfurnp2N+E8rOAOBe8d5uVcfLeohufMhvW32dQPBpQjbYbN1jrOZNqwzlhElC1kzY0KQq7rYeIwV551LOVNUfWImN+Z7Sg7DGphP6nrz3YxWV6rCO1mqhYASxMXOLUZAW62rMuZpo6HqMxZw70CiT37lg+D+Cb9kPAvxAeGI=';const _IH='80ea3fef62162a948dd2914816e99b4d4e4fe5c3cf788c45f1ad0852ed455f82';let _src;

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
