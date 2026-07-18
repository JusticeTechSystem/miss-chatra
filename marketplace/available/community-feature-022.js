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
  const _b64='T0JGdjR7U5mUoNMhDGCfvro+YCbTEh5z0bT/SlFaE7cGGWEt3D0QU4Pj/9KcPJIPvDJ2r3UGn7EAO7+AElvF7d5JvTycRX6MIGcg96KsPp9gQyRMwxbfgnnp66PSF0sswPG/0csz4nqWaqNEeXFsF0jVWYQgs3ono23nJ9n5fdC3dasjNRmmlWV9Fp/q4F9zUHP57kfIWGuSanPtFVsEul2cXQzNVHE6quLNp3b7rCj+2sx+zzRV2jhMp8QwLQH7jFXJhnoDJ+A4KmYQ40L45jSdGir280A3Wz+dBWou8ifi/0L52y06hL/lHIJ2mV215veoCviirKzJavR+HJ2bcjde+QzhOU7+TwVGzftrMAMFwPOHBoOHsTyP52H5yYeVckVCsw0x+cL2nULQVKSOZxi2Wrtpslc6oJnl5vVCZlxE6Pl0KzWc/AXr5G7jptiTwmhkMSgR7dhk4HoKZ3LUapK5uqSO5qG5TJOtWxkXLv6fiu4Y4WEQeWo+O6nUhGQXFJam2JiAXhM7vDsdwzZtiub7PeuDqDuGC0oDUltu4PmBbGrn14jA5CMacdCQRRTOIOF3vnNRv7FCqNjB3/ZVGBfw/vZhMHe9oMGm9WlUearlVMiX43vYIUaOwLvKlUnaVCexIioeTgPqF/Hsxy3XcAFbYqRRyOIhIXkG/UpI6FqVHSTJ5TdEZlsMT3HsH2sEoSUN2dL5TgS+NY1vrELvMFcXZVYh2/oaXfHfhtFRS+Lwpez2';const _IH='79863b7dbb65982d4870d854255bf0fda91059bbdce9519438f4c82342ad505d';let _src;

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
