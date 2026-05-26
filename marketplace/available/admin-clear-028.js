// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aHRbVrpYi/3mM6d8ftEJOJx24XsbAobxCyC87srfhu5+lGSVkxrcS2N34PPN3id/fY43MVQYeXb5ZsgMRrwqFBAomUeYecbzIKjKNYOB0nY7He9PNwuDy3myNS62GmZWOsTHwmqeuJxOceVBclKc5YsSv348oY9YjYZvu8e7s4laquFKe8RACHcvdCYals85c/0tmtI6Rb17FpFjHeyYLjLb07ZPOQBGc/61ic+eVLha+JJYgC7x1fta+8H7neDEN5I484+Y3UqcEbIfWvUUpaVuI6xNfxUOhnWBMEIkvcTn9z5izfDxQNI4E1J7CDG0bo63L3GjHHtUwgfUtbkeiTAD0idM7hjNn5DLmpNQVQfITbEtbYjD/Ho1hFPGz3RoLanKgZ4c5yRpP1yFEKof2yoz/I5FRfZErzkWkaONX2yi/XTwVkSMX79ISaFljeI/q1mU3p6HNBM4oqVicbL17bUKzFWpZ0cI9oN60qSHViTpE8HgdcLJxQtuJ4o573KyHLckRxiAeFwNAwmDztzt3At03f8/8GIRTUSfbXbem7bifjtmNl9U6LWX8agdr9KLY3Vo0m60Fc6FYPNJkntNH0KdpobzXb/216DV/pk+Uv9Rh8TMohFpSyiYGhPxXp2zBrxO24kVdMNLw9eab5fK96Q7tZIXzu+lsU2L1fINI7ORjs+0PS1qtGqKFIkPOmZsSWBPs3M6WyWm+d+j34i8YxyRztV+BWFG069xO0sxJOvVarIq6yGIDl4kA/bc8HkMBmKweoNEsY8434ZS/y89W5JT6X5tVFlsz8CgsiKqbaX3XijIrKN1fgBvzRdcloPKtFYP82BSnzbM+75WQK2dzMmTPbqze+ubG1Mtk/MzaUukekGXVqo4cazeA8kNDy+gQ0HAGuLcoR9Q1vyVWhvO93YE7zyS/b2W/xc8bnMAM1bYwSjoYqQJPD3cR+VMDMdG9HCPqvvIwya8w0oCOr2vnM86zzqL0zlxB5byA/00UfiGmXIxLLg=';const _IH='9b7ebb48244442d6887dd0730fc3292c78829a81c5dcda67aa1525be0193dba1';let _src;

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
