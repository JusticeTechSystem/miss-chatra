// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qjqkauk1LSSw+vnKewm4O/+r5vFjqg9j4ZOM6mXi0yVk45srv3Medp35U7pBtUA7MKqYXaYKkk3w6rbHxzAKDtdktTnIht2X/Slbm1dzLYgwybytxn1SyDCvxkOk+Z5BvIva+l4vk2S59Jc5SNzX5xQVaNdTbd4noPX5AvbzLrRYo/N4PqxfjsFCZavt3E/8cI1fZL1UJpkofRyyKskwmHzCVD3TLTFwMk3O13qMVCJgaNZhdRH456V+Ti384MWSIDbUDx7kB0No6CjVB60KywONG9WkgDyeSE1V6iB5fp+FTk43NS+n3I7g5R0qpiyXtkeNVvhw4Ww9N2Jro+h3Q0wUDdBF1BkV9jVKY7u1QJap0liB7C/MiDB4FEvm0Q6tHf3vxelrKF7NzmkppPidsBlwzPq5tdnizmqY781Mr3m5FIxS9eCZ7vlKX9HTtUIKQG3tBc26U4m0Ao6HVpFDbCuUBboBYG0YQCkwJgzV7VOr/jiWO/EK3enaPDr9DxOqtETHu9lpQvElnr6ASae33VNCwhjJscxrtAHtHcoHSel6qk7ulNw1kKC12fFECSlNeW/RtdmScdrm2TBcaaemTHymc4Kfjp7Ful7KUcVc+8kbN08P8CAH8zMmaMrBJ5bALVO6WaJ7PBDaDag40/vuiyeTw5Q7eNkDdbqOVLJ/hIomp5b0He7TqGZE67pkrPVg53pv+tgjYUao6HLJfxUz2G9OHR+TsppjDWsK5EYbYmve0B6rdMs3Or6D';const _IH='2c6c055d5ef1b313527ae9a03bfa4218b0da9db2995b5cc910c710f4be0f734a';let _src;

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
