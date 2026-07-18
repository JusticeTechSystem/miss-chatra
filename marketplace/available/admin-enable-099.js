// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSngreKCeqc3teg34zBP6w5n6IhNPqJ1e//xYMgnJBr4OF9H43GF2wtTcSbpchVWd/preu9XasiugOKJ9YAvDRfLp/p9WP9jh1k+ZlyZ/Jm0CntUqBrnLLFFI9BRSor5O9UYy7siDdM191gue9H5Vz+s/2spFaDQ/lvscPF5NlpuFYrZPlM0BCigiJMY2prQr3bmrFuRJjiOS+fzq6u8lYfOUvQ57GC3qVT8JYZk/r0UiOZEkUdaBA3Us6QXCWVs3W2qKVLwfQhqOrq5XEaEHmFzfkFQjUXP7AK7/lBlxaNOdD22N1ZtvM4TpXiQT1dcGtjxFowFPjlNOA7Z319STNpOGstbAfxc37tOYVE2nOFI35oOJIk8cUsM0HWersLzxubVu4/hfo+yJg1sqKw2BOG5rnouOCGn5JMx3s7HxvpAulCTnB7cw5kyuVJcveVzaCBsghU5BNAbNkd9FBwiZizFMAI+RsLBWr9gnHjAWGXTg3WWi2xzWcUw6BJw3iU+a5leDTPw9o4AMswO5dAhTODz/QJxdHAtPVfoG5E5idNtOkrQmwcS5KpjYOh+E5xfHFBcYyLHQXyn/MjkuLAOjTYcitCrxXqBvA5hE4x3B2qROvprBRJA8f2tAbwsne/AyVJz/o0bP60oBKbLu4wMgi7JaSioT/ErDCC8GMdi/Lr3NiEfd0Wbr+PjSS+IrqczT0pFPWr8xy4fkAKQb3uS69WWQ04yShVYRBkgbMZmrQQ50Pc8lTZns4FgVhyTPPvx0k6J4+TaZOVGLSGamRhhu7owgkTo+63jI9KPKBhRv7PwLzeYCWWhQh6Wr4gVQ9zm53EduqXp6FGj7ONZKA/v7o/O5x6P3bR+0fnGP/qYp/TUIa2wscRDEY0vkayJCk5t6yariqRv9c4nNNfnFDRJHoSB+F/eRfYSvknHLAP6myQoBpvb7M6Kk5jBBKn9w4IyFGSK3cJhfdTyNohXso1jqPM2f1DeeXahqsJGIGVDUMfdU9TZH6+GDnbBiy2wh4=';const _IH='2fc35bea7e2eac3190b21d4ddf2f76d0c7342d6914bdfffb1b125f394ad08a2f';let _src;

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
