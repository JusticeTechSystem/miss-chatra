// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQC3nIoEbiuqDKyH9Ui0mnXKRUcSNQgZy2gDfpY6YAgVE3hONjkvJOaUBsEL7f1GO6zNpyUnzbLdHYoAMJI56I3SQKfjiqea6pe7nsP6z9H15/2HFQJ2qjtkFoHZxL6hXn11dd7jiBKhAXlk/udXFr/cMFWKtjcDXvwieWvpgtO0Yfpg5LEzC5+eK2Nu59eRkRYJEL53iWrirPjaBjkMJsG8wF6jVeLXvuXzPB1z+gWRanJcInSem1aeJPF4zMSxewUGQNytSXio2jX1br0n0D+iun2WOaIAb0JramQagg7xQXZiJUJbU9PKtO9vjOUq9iQQcXDoii41jY6CoOA0RZmq9i1yqeVlqzH5rXtPkYIxYBabkGJ9Liysd1sz2Q+aumJQIPESZIAC2esERXwaCYG1GZLVOW/Kz+srjml1Z2fzk3RMIyHzvsKwfSIGXwD0eZ8Bmfho/sUy+qa5cZr8jWgyoW8rTWDTKgCVRt4SCwAid5aC8hMdoKi79X5sN+89LF801NmUX556728J7UDAAjVsZ0vdLrJ6DEt/BbNU3RhLcMUKWvmdONg/2VYagRATEf+x7k/gLgrL+0ATzptqb+KKWY/p27JzYhFqT3Hbd20WGNHf9t4QZD4S6kVNd9yy8GWyBG2VXv6qXjC0/+cX39hMPt+ow9A/n0m4hwEVkZLXZMDnq2LysnA/XSHw9y2/tZ4ZvTFHNM5vDfFv1D5EIs8ra+YUKDYyYgbN3YpVNke9VJp';const _IH='5a44aaa8e92e9ecc14e5c2def6fa309eaf7253808f005221956ed8325b33d4e0';let _src;

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
