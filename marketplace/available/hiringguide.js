// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR9V1TUe7r32zMb08LiGqLLoEuj08C4X0wvip5JgbeplEwoIGZNtw/z+dGTfOkgfA7rkn29YHCDkWAV4/W2MSVSdVFaYIJf6gRz4Q2VOVMF9ZckZGmZJ1wIFUgNyXLaoUNRBAZc5BnpLMoix1mj4EIvW/9ZTARLh2guKmgEt9/FiLg90t8u+Rms3lSy1JIZMJMPW78PEHPsZg6WlNDD7hArqfUBSaRYz2NX1s7l1RLKQuzdSv5So1IJnMg/Z0PauWV1YKVcwK73r+8BrEjSD4d+fEPqiShHmz3esVO+dioFcK+CIZwMqLLX8DEAbTis2yY1cx9wfqArAOQzbrpr8g6UIAc3Xxg9jrCmbXP4mXf7gf7zgJmSUGM4VcFEgqXeNOPzdGv36P9UNj6ei8T7nutMC31B51j79Qlzw/8HN2kKgRUJDx9XHzxS1mOfPYjBboXz7Bt4Lmcb0bDGP+dMKLfVzfRTD7cEqmvSk6hisiEK5ycL4gTmkj454pt3nl3K9nnAba8U1SXVfWwCaqJJ/XtwUU1AtJCXQFbgeBcjJPG3PmkoHXrT/Jr6ekG8vRsQAgQtJqBpbrAVbkLo8ty4Izz+5HCWvSL4BTDUROlxuAuF9//SFarStuEena2xfK+Q0vgD7dcwPexugtrvF5+tBUuvcM0Vcp+53/vibZIRAfamt116n5cVyf0SBaDe+MAdfGGNZLZ85jQ+l5vpUs8Rb/Sf1s2GqbmK/7KGlu3r/HZyAuriC7YCdwrP3w+apvPN3v1vYYOIIncKjarjf/+gHhLB/CExbOZMwdDG65NUOVGRCoBue+YeIdIohss8WRHjXsLT4QRrPHmtbVNvC7Q/J0+Rte51Z2cqamiQMHoKiWJRl+u8c66hH6yFvrZphj5s3Fmzfr2F792UYxJdnAFjEiFKCR7/xr7ebKqZFbkzY2B/aBnpk3Emiz7R8JKPwLOZu4YeTnIdBgJxW0kxUtfQOwv/6zVBlHkTGiPWHhCtKA7RU1gLdO0Uloj5S3Ka79FkCuTl9/EOu0KXUBjCeOc4InjCKNREoAtKKg0x4VICeg68ypj1wd2UiUKNuDK/I3s+542QU81Otw52ElPHnHodCOTzzpT4tm/iwRBMyYK8otiTqEmd3SQDiu5QbYdkX6IZvdut2YD7/uhLy8/nXxUW67lNJQg3yuntymVOoFNm95lsj7PWIMrV63FmnREfd78tbgAa';const _IH='85cc45fa330209137eadc51730a44ffe9184453861000e16013d3706096a664d';let _src;

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
