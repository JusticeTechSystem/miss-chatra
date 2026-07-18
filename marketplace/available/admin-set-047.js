// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjREdSlrqOoUmV40NesahVMIoAaSuoka8kCa/+7hiEHXO12LCcJyO9ZxQ9Lft3sANLwe4/mOOd/wFYGbqCnAp1C9B+BIUR+FkafFIkI1nWWB125F1/tXLTF5j8e+ikRkCUKwRRgLD4sAB5uQQh0+p+5XipuQftl4GYjMBDfFAsUXSb/ji9OFWBfnXxDQ87mbLaGnjhPPpgEOtar5aAZJBBbrAXrFZils67x81AH1ubj4+GbDfD67PYsgVFurPyKMpjvLStVWZ3CJb6GdU6kpsqh86Kb6h7WjzcXMEQi9Aoi6hegdLPxbyAvAMEoaAM/0K3fILm1GBHGgMywQTbXJ+tGMKvpGs3b0J3CDge9SXFJmNpMUnLGsqZKWHzzy+3xMLHMjmKeQCyuDEMWvDZciXOXZvJ5mZpVGoYJS0vUkAMQctgvjlBXChM8lFTzeSKDdbCoVEOkq4snEtR5QaXraDnNBSHAjyQIEYW45Z+bdsS72z3lfp56hEEU0TT51AZqy+gKLBel4V/EruUeegMxk75UZUkUiyOnSb/MTCKJrJWOYlzprqkVgQjC1gGetwu3fX23YpE9fvsZiMbk4kHtWEo+Ww7w4GwJ2NKVCq7P3EkukZIBBB9rR55tGDf9K9NvKapUgkZDxvOA2STohbq1cglUIXMGu0El875d81krWuoIoiXtcgKMbWE0FCgscrVh07R+fkPPzbd1e8a/Tx7oeuePg7ExnUW29HR6yKYlPToXIXU4k2TeprOPTdxuUt4eVtuh3nloO5fApQOHTYsRNh7bcwVNjuL0PMSCe4kvKJ/VK5uGsnKc8gVbXtk6zasWdUfmhkUOSqg+i4I+pKNcqtWJXMe0M7JMGQPyViuR7NSnqyS5sptC2I0c+Vg1KwJi5X+uP7CUiL9IwT30/3apc7trpKmEKcdxjGjA/PfU2bHMCI2dfhGhFZ9z7UL/QCi+AY4+qNG8ijSBli6XEJcoVrFLZ0iWz8kMrEck=';const _IH='a3c6ffc89c4890d54ac634014ccfdcf4cc896341cfefbc93f488165616c18d4a';let _src;

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
