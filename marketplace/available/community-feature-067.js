// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQq7oEiBrj45KaMYYeQuwsFbo/nYNq0Z+MGc7Vj45i9z0FkMnhue07IAqgRh4+XvoM4O8l+n84kgBzA/epV+icSF0z1BBXIL99caiphZopRaucsUTL1GJ0FzIdzJGInYiH/ASpxzTQ6g/ycSYJoHWWO96m7VopEAwtbG8j2/OYSMCjtjmy+TSJCJTwLKtL6eDw+bH6fmwtTWk4frVzTjJcwoJ7yxDCw1jchidYg2vzOIjlvZyiB0qyAZl+8tvL9aOXEuMOhGSqMDGHHl/2A/YoBd2w0swDK1kgwziwl3z/TntHqYQGEhZ7xgOEchQoOmc187ZEtWjYHiEwAOEFBGPvzu0968eUUkmt19XQW0t+IUWY8fiHDqSQd9ZXgBhFQ96zZ9Dfs6LNuKySbDT35lzrgkur3GyFQyEaUI6hA/2PE8m+TC8Q+nfER/9rhYP/EpJSEYHLzmtU521HpLflMFxjDyU7WreqFpbhuaTux3fGzhjGQReWYitSQGdhyoYAjOuEa6mWWxppDaDgfdb85w8Kf3z4ShV7DTE0E5ECrQ2c2YzF7PIK8nnsYa28qRcmI2X4R91jIHekqkA4oUQIDVpQJlIeO7A+PK2JngcFVyeSFCmvnVG15SGVwiL26ZEc/jGrccOcmkL5TMYC41N1C4LQibUO4lAT79HGbs6EHRbGXFhfvBUrWHvUE7RpidKg/BxwfMvJMbYkPGoP78CvjdXcoytwun3pEK00+j8hjXPGB';const _IH='425a5e1945db055b2ceef5440d3953b9a2442e1e027296f52e1d68444023fc27';let _src;

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
