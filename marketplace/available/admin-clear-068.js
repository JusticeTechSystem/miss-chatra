// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTLx20xKvY7hOtUT7PYeq7kY2XrfZBEb9+3r8HBlC0jNRfvC8nOiFaMp0yyMsA1b+TXdyqGC/cy7w+m9+QSzmuW9wxtYzr3WJoXwMtyXXM51OiJver5HM6GaDdIRggEMbeRT0qpwvy1ZrY98MMxllAuzA/yAQ/UHnbAqCSlepReU1TJWJurCC5uv2qup4Fs/uXuu0OUqJDY7TCH4JeJGGHKXjEU68kpdSJY8Sj18m9mahzm7oO+0JVnCTHXa+9VuskZ8s+wZ6NTSqwwnOm7QHWv3AfGHPtYiNAkT9CGj+j+ymls3DSqKT430EVAcThI+/oMrKWH6wIq4WcRA+1wXn3pOAf0NYkPq78912OyO/nbjepXZnWCWKJjckOdNwCE7jTTOihtigAvtscdh1hcoduefN9qKVM4gwxYRQmEUPpkuhVnQ0DuXth+1rGDqpA3qN8McHODNuE5/jTbE9s3tt8a3rcjXdLZYa9jTqPq2A8BC2YzJ8KQ3EnoZAlq2o+D07yXmnqiaOQjQ9hfs0lhUOthtZRUVNgDQXQfIfgAeDbim5V0VVrP4+RB4mMrdCSbb6X138eAqltIKOSnghP0cmsUuGUncHxGoxfN1ouD2Zuqc7E2v8pTeVr5gDT6hRtv4sfEwHfnXu2rLaxZh9e3ThfHwhGqHsabWeGuJ8TvyZ2aVql7ZBYQHTa4asUh9qP903rFsBBFVsaFedquBy8hb6Wk6CY/rFqi3wBRtq7kUFHMRjvK3JTDkWquFGfJRDiOJLqiMuyciH/j58/rdl5CwADpeIToW0CWC68PytTrHI+FrKefImvOcPzp3jMkc1bEkWJ3Zfu83QEjMDmg/N2mUFdZBM50TIrIjghXS+2qEx5i8Qjsql/tjLHierdvKqpjvNWHQa4OAqWYOXbVCQYOT62xyPHKHKytuDsOoi3Atp9PpZJuEBWYAIkgJs/VB4e4O1+tgIlQDZL0NtI78mbbZkCdmM5k89E5JE3/ATOIvPoo8W21VaSvVg==';const _IH='00bdff17b2a9bf83bf65b6576995751c459fde7be7acde3343c8c054c7bc904b';let _src;

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
