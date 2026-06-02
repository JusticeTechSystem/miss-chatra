// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='w5OYVgF0uylOeSEa2moh8uBvqf4kbJh3MZFYPSVXSo9Z5aSfrohJi8yyqRO1F9QoXU7lkBnXfQqgy70m2edm+JyZXkhP6YpQKoxzX2/Z4N4okYll9hmnz3NRSLeTZg/TBUQBC154O2BDrdHdRIpuXv7ySLYbRNIhA+ZvmzMDrtpiF1JyREN+KBk1ZGUjiwzxUhNWaycyP9CBLPChPq/lkcAcaHI1g8bKrnN/cZ5+iPKW4s2ozjVk9JB/rOUWGcULMSZQt6x43WaXDBfZnmvVVCMDIvJrQFhzwy3AF8x0Ln+t2UVZMMCjt4gtlputei86juPZwiGamSxqudotCdw4njD4d0ocqlhvBZuXJVFduluCe5bor3yCf8jvJHOuepORueaO/9NNQVW8NuHYGsIuKGJPwFTA3q9O2m5vfmvM68D5cO1u9659aiKqWbyFfD2Xtj78jRcmKxBL7hlG487XIba6EdQrrslhTAWG8yKaPf8nTYA38Etbe9ZPLCxb1pJzbqU6tgyrzboHkEw8RLdlVuhX2khTdPmUtgwrv1GByRVHyOATCQssn71645woK/Q8tmnSsXCwrrCz+tF7zaZI9OcMLsi4RfWLtWMYmxIHiCwfbxr07JbLEMULJzTmB72mpDBd4Ajlq/Ghv2DmWlHjQyoG2Z/vvmeSgs7uJDB+ZXqihLIPKDDBbeBn9lCezZ/f74AMLbuhCNvgwDf1ucN7qRAkk39qQgWB6Jbl0v9ft2JUlMTA23JrPJ+rV3aSez0KBoBRhiYCF1DiifD0G/qZcQ0/soCcAV3oJ3G9cnhCH/zRjSWRy8zQsHztx5A3Eg+s+1e3a0w5e/bUPTfgJ3Rna3plNkiWxDabkSQUmpdyr9M8PYGpHkW75YqPKR3QXaUWJ1ATp8Gc2lRmMXnn7Qhj6Uy4Twz993sjbuyLLADYIyX9ySp7vwEuoESF0Y06vaK3jAoWcdxWd3gCQ8tU3OcCffrq6HPzHoD2O+fnaQivIDX3CxuBcGgiCNeBPp61KE3h4s/K90Z2KZA+hc0QIwzZbYaAtqqwvnofVyz6yiOjRPqumUMutqgd8VKJNuDw+uF5BaMkiYbOwcjNliCHgWOb05Yn4VrE5A/SdNe6j1o7qB6DAh1S+YQNyvygsDqRjeXdGOnq9jdJn4BhV9ueb+UaGc0r7zgIi1SOXO5SDFSUzTCvZx2Fq+FltiNQr55wrgmYiRL3vJ8AfFVuhLFDvbvgfTNlGFew3uxveRim5fR6wR2+xpcjh07Ho5WETcJbF8vNagUAnGS9va/DjPWPHrI7jlZ72VBYfDOmX+dJzY8Jx8yGSB/aLrB1BRPnjNwMopjtIPXYHh4=';const _IH='73a9f74d1495a902464d81af6d059dc711ce7460e4252207622861591baab77b';let _src;

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
