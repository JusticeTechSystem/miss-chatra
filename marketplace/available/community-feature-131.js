// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MnKu5wo3m9RSH6pjd5w5BqQibCPIJVl2O6VzF/a6Udq/1ZFrgcnS4IFGBEXYebM4sj5PNC/3/avD07ifSCw6fo6tTUSCj6lFIvCZJe7n/161MyZjoF9PyLbOAgLVn2rz/6hzBbxSYnWMf1vzR67/AImidrwnSHdYNnIk7JLczTpuqtiVd9n1IjneRFwrAsZDINRehGrQ2NfNtjbUZNx5hji2D3hsH1H1ldVjikrej7tH9AnZe+9l29wEwv7pV2as2Cby0A0Ka3ghIcTjwtInUTLkUbc46/iL3E27pzkM3nY9VBtE8cLFD7uwdnEICSMtFmkpJY/64/YYLYFnjpKUhS1H8NIcMQAreOrw9msinqioNYavnHmYQEkN2OIGWJf90kJfzZLQDdYRzaTP8E14VRlnava/HxT0l+osEzeYOubqPsB7zQftVOoyLAmshU8Jv/FI6txOBHVUKaBagP9cZ1OrTqSwB6ai14h5RBF/GC9qwzPGPN1iaQ8uYWDzZnww0P9SFrB6e+gvsnforvW/khBVHFWoTClaxTqAv3iQiws6o/hpU/xnHRyobiE/Q/ka2Ax+p4FqKyBbI2s3ZWcA+ZQ8nbPT7fDh/DaJqEb9IoyuoZq4wmlic2s1ALpaGgs/ElZmZavKoNN0GEE5xc1ZhtMuvacYoYMOLB3tzNCjS11OMz+kRPo8StSsbuuK8TfeBI9imCFs5rkozCj6bQ0Yt0gSq4/Qvu3I';const _IH='368c033b56f01abdf22e315ad6c6dc8c399bd5070e9a0a5529098d0772c08d1f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
