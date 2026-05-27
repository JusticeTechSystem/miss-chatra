// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MvfgAzuVJ9wo6scNBWG1WQzvQBk26s0SOmKD9YK6xPXSd/rsMwBOl7/f/qj5U/b6Ifsark/LPAET27KnJM8Av+PvDNRRdpmguMOrQclBlL89oP5i5KZvDDqYyiANYJiR2KMkXsiYM67YBikFHwEeYss9XYt/XPfFxSbzmRkJ4AX3CkS1eY+i2W+nG71fAsHVu3egBa0Wb/wnhd7A0QebRz1KiXb3CCCTH6oWxc0Bv2Nti5HoaKBVmA2HfsMQ01rO8Kr9C5YdAbv04eEb9I3ItDXyJRkwoHxvV1N9uICI+IfUrRPWart51mWtFsZc2wwBlVd3MK+DRU4eCxkbC6ukn2xv48a9E8LiCMiC8eomIRMrf4+JUj3wVlxTvk8SIuq/tRjaZ00SyYkIA44Mt2Cp9qKziJhoA1DSXRHCwEEFBPoh7++bBsgTzSJvw8RnfpHDGKkZAHYadfP6uhRA0efqbohf4YGyU737Ua6cd9Vupy5odbua1R7HACTr09J89HzYzmiqwxZrhUwiJkW69CTJ9uaNi5xo6BA8IBIyXRHAihO93A4lUoagu4M7RYnqmgUnEP0SS1FVHgN7xKhwBymVHx0iTuP6KbOFh2jcwfgMZvIJoY3WcFcl5iLCIYej/ofH/1Yrt3Z98rO6bUK2Ut65SWGWSa9zf+aQ9tlSBOhb4L9Jj9GK7qdB1qLQf86qpujfLUsTGzfMZ+3gz0//cXIIrvAeezZ6IZwJ0Q==';const _IH='0e3c463461ba2eef29a4c10aaf945908633024bd2d0eb9003905dd83be1e5676';let _src;

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
