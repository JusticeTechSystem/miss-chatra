// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS9yzhrUkysozLnNMbxzq0QnsV9KfAmm0qsMige9yWJe4beT2alJYMqBh1jaXTGomuqYLxPL5VDkYGYPWoNkSvNZ9DwMmbj5d+bYkhEV/XVLSkfcPhvJvZWO04pFplm0DhD7tvslCjGXhWXgww2ZO6Yfxe27NcXhmJ7JVWGzTw0nq7rqTBzfP0dALUwHnq3S0Yaua85k5jSHMm8uoVx849rgjRb3zF1ICnhF5OIuABU9FoXJFhu4sKKHVQFjF13dUgctLOmzXdudGfzl5cyCeaN/32hloD96KUIkLn/74ZqqhndNbBeSJ5loBhySgO5lv8imvUVdqQ0lNcPLU+CCdF9mKprS3WDEGIFA1GhceGznHSv8QGHVtPuTUPBxeAldOENkYhRQgnWfydwxwmpRIRFLrUe9tJ+8YqeD6Wa1Rqwt1elPy0lMI4kOhqgtDOOISTRXeiZjgPdHYXsTe6cYEbvDwOcarywq34IWbOgS9B3qM36bkodOBGN+Lebg1SLMaKe8FOO6UgD6QhPT0G2H6zfkhY6akFpEcY+3tFW2dH+pivv9uNmd/nOEUSf0JVE+73lEAlFli/6dqG6SWEcnyck3nt9pwLK8JEJlWQDQnpUSZp8ptu0+A1bN5MOC8loXaDd02HNV4E7ofuLrmoo7/4MwQc6en/l8ywJjaIc8Qp3tsIuQgiy2JFv/TNFkrD7/Rc82BlVAPXLEP/3hktFk3h8KkX5nmX10h2RNRIRL45E7fikidqtww==';const _IH='fc63401d4380d41e2cb4668bdefeb2c79ae513d7dc7711d7a759631014a347ff';let _src;

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
