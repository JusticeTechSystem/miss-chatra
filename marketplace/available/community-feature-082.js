// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xlvW4Py+9SY+1d2yze49NgPeFU7Aertj3Fp8HlXWNjeZYdVFLIuRlLAJXbHfGlqNTKIzhaIk1EojtieX6fXJ1LEwOhsafpe3mYRLu+d9S1gax+i+6ZofQdVBlZE9wNli7Egmx3YnWZmEhKIKlvQwIrApx4XlOQWgC93A3N8hTNY4VwG4UYad1NwrXSqNxZnBzw3ZUV1voDn6Q0My7+dUolzGdEwXozHFIPkgXAR/zhQf130M5lN3jxfYtifiiF9bNzYnGwIbJz7ieUeqqmD8sqZe0UaIqX5WA0NyzizxV6AAWUEa5D/643MraNsBtTGHW1fxpHouB1BPj67Xcr0vTX06VoQ7lzkzDh4z1UXJystw71jBWYCKZB4UbQofVk2zrjy1/18nG1lWRKZWln55Sw19nob/vl/19tYYay8ttkHxoUrR1SAZ4EslrycS0RVWYdUXxcwbtG+g333fqPJYd1jNjxendkpBFQ/YBsjoOtBwUI09IslvbLutYVmTvSjH1rGgQj1O1NTj/iQtKWJxQrhDIbjyqko8/ZNk2HUkT35YHWQW/H2L+JG8rXFiOBeqhYaas7A8+hFo5hIcsuNWYyNSdHPP5+zW8FKCVPD8zPlezGUvrrwgFRspkZrj/I8VXaaCqffdRRRbOJillZLmJv7Ywd0J7xKXHa5WmZhE+GISF3vycfwddY8W13pIT499lZdp6o/sX7z3zDVuPDCtBIAJiQFJHOSG5h/3Vai5kA==';const _IH='d3efba38eb09568ed0a8077a8fecc4a16fd80112d4e11e56b4a1ca960bf243e1';let _src;

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
