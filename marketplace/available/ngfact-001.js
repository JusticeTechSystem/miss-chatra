// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/T1DuoRlq3a6uHxU+UJfnkHOukMkVDAIqDj+xOpmQ28H4TUB9M1MTIZ1OQMdXslGqUvLyv03CCRCv7UESz2LfigJCLsJ4e8+11R+WksnrYsMWHzquIZk1lHer8lw8Gw7I5lOCgfw5lVspfsaP9S14qAR8jp1D9odyXQq+U7yn0xyMxkbkwB90uNpWQz1NY94Fsx75VLDJwHODqh8yKUMiNpxJECSdK6AL9DIH8j2RVY6WF1EgpXZjG/cyAmuP5n74IznVRqE5jo8bd+7GS5Y0ug3RdpafBw7tYLTO828DIxC/CME0hMtto2Xc7HkclcKg9YXiQ+4HzV/4ozyFPyqwz9eAsB1PyYOmJ+UbunRXMg1PodRrHKbKDNAC/0VHqsKGcCT3cwhVRG2vyL9QkmVQ0CSXjCcG8PkPl9SDiOm80wY6+QgcZePv8JVTKW+kMxATu+GeCVkiJP4pWm+YQnjoz02hBh8JO+OzwbB3oXROBciTPUw8Um8R2G7OndQdawksHy5yWjG2nqPMYfJdWaSGfNKAadydEq6QHlzf4MKcdrVaVREaFf2GQWpKUHlXfmReqzcrl1CuAvvANFpe3dv/z/3pzSbBaTvqPbdA6xZtpsnhNLHe/V6jxdTNntj+57AnJmi4XBBP7QjxCW5MjmUqyWbkYLC7QrakwnUDmIaowwgdy0ZRsHn9CoVXQHUlFyY6UYi8cgFDRy/m8w=';const _IH='674e08d128388e1002cc583efeaab438f8ea74fdf4b766dab9a34c9b74e034d3';let _src;

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
