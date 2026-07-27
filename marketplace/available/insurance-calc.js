// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT3H8WQKBbk5vm9XncbMcGGe5VtDD7h4PK0pKwb+6HwvZuVhPiM34+Bod/gq4XFha4lpKAQNJYh6RgT7DFThXVAofONrqglKUpn9R9/8XNgT029jTBGxJ/ZX9mXFXy3ukInWU2TljsSnvMM6lnB2NYAtXt4J/IV+TOGNa+1Qz6OKd2rDl29MEflMZXLicIF+4K916j+NZBBZ2oja4ITsmYNb6xCWdZimpNsoFoeSTWxhQS3+MqtuwRQs25graaQAspdOk985Jt0zGSOQHJ1ho/dKRlzxZZKavXJOLgEwBAUtxntRkvAnbig3afiUfFMDgOVtSWu3R/LFl4QVufvzMG1uyAqU+y8u/wkyC7kyBpw4Fi5NgQ2qK74yFTVLmIInkYax1oi3UNWbdW5uHcaTfN38vWnKu33g7OY52Le5sZE0mBL3MvLrbMobgc0ipyp5+IXrYzcwuSbxhZWLa5ItUhi7wlahqb39KSKnRr0ZFNhfyNay/wNQZYlefIJ77AUzAORTWRzwM/ZTOJGW7mK/UQmcdF8y59D9R6ZvZ/YNEP+UarjRILUoDa2va+S8URoXmcjjqODOe1+B31FYVyAc+rW7wSpv3q/m8ZHGIDgbWApFnPFMYKKYb5P3Vk5TmH4j2ApLmakuqqBPN/Jo0wBXd4UxVJzI1QHcUW07VSB7Yl34RR3UoiUsVDoIuzm+dpPgP7GOS5p5Q1k6KmLDO4qN2zIZmvpBsK1HROQDnB9S9BuIsZzvQAZ3pMEZQ1EaKleAD0gOqsvosZ2ujGmigYOnrU/1f5oKbmyC6ZcC9KCSjGoOcknC5nkH7huCyJ/+db6EVv7qoRDeEMnjd15oJBhYWAZi8O0ZhXVdEI1miA1v4te0Hk+5NHyfSRuYdXzf+kVfudga6H6C9uMFYfDr4F2IZhdgQngBy80SyqTktDc4vVZNKymHdJojmhXQIN+vcqcBJYZatZSKdjJyt+yusEO9PZdUSpNyLVufPZG4R4g8zSUQ/kL3R9m/669BnPiGbMR3gKVacs6d02Wo2ZqqulY39tmC/9nxx1dtOhV9DBDFUjczj5Wb5NQ/iPQ8BswFkpeTS8Fui5npVUULhcfV2GTg8JRcxkp7oJ/Cs5srRO2/44D2ZhpH6WLY3Acuei4s078K1T6hULKV0vJMZxcjI15heUt8VKpi29tHzkRUKfjEU5Qp+clpFIb+o6JOdXgxkxgm6Ly0IpdlQumNFQdesAp5QP2LHVHdVjaim3g+g4p7g0UlKLzMHBGqm8pPjrKe3b4rBybMUVja4oRsYmszacZVIMEIKI3foVCcSREj16Zt88p/IrvOjfQ0/ki2GGzqml5aKMRGZsy7KCyDjdU/f3CPPrZP/4+aQ+pQecybaJePnn3rfuRHTMSNuX5CYIwEEIOrs0EulL94QyiKB97L3RKBacbrAs4SAQ8gOGGBj5MdgE12XIQ5JkLXLo/';const _IH='b9bc5517859f42d6070908c4792763f2bf3c65319fe937871dcf9e9031b00930';let _src;

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
