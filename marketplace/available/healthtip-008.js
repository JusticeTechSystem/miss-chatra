// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1pfp6Mykq1cucystghELLMr8XpfFDIacxwSSLoFdhTbkGCdgBqoyCUrqju1ERC7NLDOwwDgTIi7wySl4peiiMRVFVkfz25B/omwXZS0wXD3Y8mFtBWGQhkTjGt0pkQw3pjHH3wjn/LRegdIWfWmdtk517m8/4qjfihGIPxJdyMPGYZ4hsTb4ht7kUtzj7yZfSADoViCWyDF7ypyZXSVMQ+XwWgrfKAbJzUaj02mdCDOkVa4Lp4UcETNYVe3jPKJ+c3v1eqNNoj1eyXxvA2NxjiMUQDqYongqy9CrJCnFP75CKlpJ4Vj+0O6iop2yJm9lHn+MnMmoy9UsT/CCBlHyYWMhuxyqyVC6qoupI0AZRNDBVXfmZlzfpK80BgxtWGJjEc4hFqHhseQbjUo162tUqgPN26ExWdv4cQtFScT3WRhve73JQyDGfk7sX/6hI+6+jDtZr2tHfSzya/kE7S2vlUFRFXngsmmxGJZkFamqje4r/xmp5jEN0cRt2ucHylzFOckHPyk4woCBfZ4/9M9Ez0JCUQfUF4QUHYfBn1lPQn5CI+OYtZYO6MbHzZMMUXxQzCbdaenXKWjfNXeyO8vG92eBaLpR2iOCw9hnk3JNkXAj4Lzr3RkCtE7g0+JrGfXeLJOl/ft6s1R+PoXWobLxxx2ilgcqPsFft0pHNljipNpdKF90wShN9YWoar+K1lRZIgL1mWga7P7vieLI+00Lpaq8a/n3Ex7OUYROs4tKFuAZsCIHL8HA1lQBShx2GMY8AfGusMF83cVyuNtDX99WKDPx05Qr62ytwldXR7vCk6mxls5TNF1Su/d9XYtB3LvRoUbv+PnZKVtuQsacG8VjGcuTjO5VyQ0NxdWMgetL8lm3+Zvtm881q5PHKH+et/gJWOftMZO1+5GpHjJpRBQ39PiUZQ/8ZeVIub1zAPUwXttVxa8Io/2AKw==';const _IH='e6cd4fd6b08c9f204c0ac9bba3c7c2a4a535ee919a4137dabfc41d3cc702b264';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
