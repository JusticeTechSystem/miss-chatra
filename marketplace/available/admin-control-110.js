// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jirs3L8U2ngSE4F9qP0zVOTezIR5s4Tbu8goin9c9mYQKFbr1A6QOS8qpTMX/9bgpP9gQlt/nxMXK7XLr5OMMf/6EmE0lyOC2HjqzbeczqYmRd6XKe+GN7H+AXjS7dNy0EPkr2wnVCIjyzfYSquxCiMTGFW7W1ndmFn+FrK6STd9J6u8NfU3pwcHh0C2o1Bq5hgUndGtTTB+CkVXF60Jq5B7j6ne5sHXHeiZMsFKO9eaHTIzVpMPuWGshGe1SjdqMkGt5nZQ0+KZgHJyrMBux5DT1hw6j4u+8csRCKur9v/cYT1pqwe5ClFSMuEmPd3eH8Wu9mn41fNV9NvxEf1ITwNu1aI2qKNhS9muyFeirLbUe39W7x3F6LS3/pYNEPzoRlZYrrD+PXPWMtbYDZtBAfxTX8mDFHMaVHBR049nuqf+VXPyToBR4ZA/XI98lTOwF3h6gpIapkJpEgxuXwKuHP01JTcfaRT5hkT79Kxk6IRMCxAHS4SvwzYOAO0YnUqyXvyMh7E2S4V9ciY2YlXWWfx0Vz/w80XJI3/ofGYTJ93YlPY29PQL//ReiBdJBaZ7N7n/7VHnTMXbFUSuZu/fvj6Y8kYInO5EuaT04TbjqsuPx9bdhpkOvsee+uvQ3MU9IRcf5850YxA3KAECR3GswBzlmfNRUFsbg134kejD8Z0SGEzyOXhpOyEKWZxYutZax572ymdzct//y2/HDYsboeFmZnWeSx5Fx9ulypOmSQeUyyO+z0WBEY32tyC0U7md62Tbbl9c5EaotrDxX+tL3sgPRKoTXdFHkTaySbvNh3PfwPAu1FntnII7PY59aoQ1NPS6QzMeFTEICvzsceHscq5duw0Z3GzcdfjKAMq2Qg1I5icsP0qvL2wz4Fs+7bREJkh1KhaUtO0Ept0C8xB5N/4g/RrJkJBTgvLbeb+bhnlLT9h6ioqgZaMKDqDV+7iXsRbyDJdoxv1ng5sC4XHX5zmz0/G+rnzLUSKzBYlf74Mlrb0VdDZAGfjpqs5b4GVd8pM90kEbIwg=';const _IH='ddf63b217a6a8f0104fd47ff2825291b03dcf4cc645a904b3e9d04938fd328fa';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
