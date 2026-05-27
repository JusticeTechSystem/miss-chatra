// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5z+pZh5MK45Cu2gWgRXtrZhRQi0x9hJ75VBEGHbVtKqtGqkpBE5EtqNytoYQbFsZgVPzOqU3Qyc9PiTHFDDfgcdOFnBJkeDJnp82NjA4eDdyLpWOf6QyC4J8a6gtJlWE/6Ht/2ih6lT9eDUzw8oOIg4GiNllMAbBntRTk20oF7lyxO+hzOD+VMMo286GfTHdrDW28Rws4utSJP4jvJMZiOHqzNCCIAZkdOKwhYxb9tbzgvf16nkYWMVdHSwMMMgr2ckcUgnvkcmDRBVTtrUO4MnfaerFq9ZNu+OppeM2C9erjhBAa1Fm7qB9dkfQz9GUUxzMwqCpK/jI6oEwV49xl4Kj4Ob4cAzAb9hUVkaOZVVvAbLxTx47DdO2xormV5vglp4z+GlHUMHEp//UiCu0LfJ8L3pGeUt0ymi3FzZ+22SZJr1UvYyq7uWIIwpN0N4vWzTYPiczTlUrYpNI73qVplLFH8CF2ZYrmBRtUvbdwEIyBtfJHRNlsTi4CwIlNy9NdVeTHjbsTkfkx9ZcoclVvf9W1GlALv0fmZTl6L1Vo7aTI+8uI6invsF616iKq5WmiI5WsDpOpxqmR2OhJdSTqHRWci6CoK04K3SUFGHh2AIgwLg1CEU+mIReyJetKKTnUI5lx7eLCh1FT3Mvfy3F6UyJji40B3dcTYuv1uyOgGUTl1ZszeAPdXv1GangN3MbO5x3tVyj8tz745fTmXaJ5e9iV0fPhhz/jDFzW+qbu2cniVBfKuHsl2M4ZXlwAGtFMEFFm3L4gQvTpvFodlcZb/Uo2kwB+gkbKXUlz2fN1IttU8uKrFMAZ6beJGoUZkpeKgVSoURQLYVtsE0VZaf3rTToFcCJcH4D6iQLmzZOoxknQ82YAV6OIDru3gYBQ0IuQyVABzBBSxiV/XSXKuwK3TEzs6PWzd8gkEW+7F1BoZWWxaRTwUlRBZmUxBxRWOEa8ZGCv41ESGTdI/udjX40mcAdwb2qKQTQpsZJjFNd8OGReGeVIVmf5TKHRyxS';const _IH='a2fe18f059447c957a6e345afee7e54de977210c8ac2978567ed76283feded60';let _src;

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
