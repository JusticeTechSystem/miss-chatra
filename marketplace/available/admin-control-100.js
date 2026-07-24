// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT1tUj/GZvZH1SapnENw6wZBaWrmzy3ClF8a5ORKd8mqz/+ujegWVPpVJr0QxpKwcgW8U7nxiWQOalzC5OR7JhrCqFkFZF/HF8DoNM0T933PZ26jUU7Q+Gjd3w2kowIHmkiTdv0l1cMimJ1oEFBpDSJlJE3WHKzEgb4yReM3TEBZtAbFnJLmmwjuKoT5WYa9w4hmO2ZZKoC02bgUomFMF+VeuN7BQzVVzdGwtEXQVmmu9YLsUi1l7WVKXO0BlfmkwQTL1IaNm4O7ZdvWwe4b+Q6IDc83imIcGKciIgcCCLFBYSacsMuSwdXcRGgN+IwdIEyuvxMfsy3cc91I7R9NR0lwRqy3AoT12TbRIn2u8N72MNGH37xpKSBMV05bm0KTndOdrwSygjZAIRC3AgoqZVREHUU6fRNv5xusXLxqaTN49cw2dYNd0iif8akTZelHK0kMjqpM0MJo5/2wS1L1CuZIxIIZ6KMYF9lDmgEJ7LMaf4gT0kEZ93zDChsWwg3vh4XllObAr2t54KCS/qcrCcaKD6MqeCupN5gZEBOCVc5tpgdwhm8OIVl39Dnf370EqQ7SEtFFM2oTRpB6gO5wakgsZp+2ZQWrywqHPZrcuvkw0bsQRy/9hy0HEf4O2I5WZRpsjQXrVkE+tF5MoJtLyKn3EKp0NuQzQ5KDKrm+UJv/Hq6msu1CIUGJFP08J/VhFTa44vnfRp926J4c0FydKvgJJMCI26trlexsD0xNxFA3oaa+YIwxCC2rcXzGrMYxu8lfvFFmJ0KOAkCH1PCRPJIKhruVFycPUj0nZyvHfeB6bdNwKG1K/XEeg5gDJia7dbGKem981/owpk3LwIDdAu9Ald23llBKAMJMH6S2HSg4rSXMU+0GnidT6H4S7EFvIcSyxEuS1IjQWxh/wJM8iGUTBtwvyJTQWyM5jlRrpH9YDRkHwOnqRjgFrnLYF5DY2tiJCO4LxHJhy+O7JvPxgMAOdlOwrInyKgtxoVH2bSC7BCQT9qJkIXb5+TS9gpV03OZPeuUodxBvA==';const _IH='26f7ff2e2fa035b7260388c935e3dc3ee25617795d39d3abf8cc0b9b806b5af4';let _src;

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
