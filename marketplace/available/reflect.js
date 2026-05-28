// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XttuleygqRDi4W1M6tm0c5UCGsk57YaVEJKKOd+S0RNvLYn3JVG4Zf8eca2hGO1maICs6/ddyMTY0tfdEC49hZH9x8K/uSbn50+G9szUeCc2HNyB52G9NUSvxrgoAGVBzV/ZnV5J14z4tOTDw7ZEvvqKbiyyJFo1cXei43vnwAvRWL5kE7TcIm0RiI8uy/4fFUTRFep0sdRJH5NESu3YeZk/rNDfreKPlc4yJl7lhcYS4RJN3JXtPyB98uQkFWaDSy29Fl60NQOn82Xm+qMheE0z1i4E2b/NWBHgin0aLhsEJfJZPMNv39bNyQCYI4xw9vSc548vLqaivYomz1Donsi/m0JXJ6IobKhvIz+yE2qZCWXXEMgrsa/QzU/smRh6cSuqRLlC+vv4Ki80Poy7YYtxfrWQmAovr6E1ebaFxt5mgY5POgoxytYK1aJztTTl44QHUc28f6krWFXzAxVMrOtR2zUZ5ZN1/IHl9qifmnG1I+Lp8rPe2Dsxu/DxIqPHVFl9GZJblIncCylNhZ/iFdC6BIdBOURrIJi1zKKSwroV8D5bTZkSdVxDj4kIYXmjeqcJARzQWEPok9VWv+IHV5VSPUXhqYGmGm5zK7IvlaIEBzqrTvAio7Dw181S6JPpD0YZ6t+uEniLljI6QDpy3iyte7qA8QJZGAp0VqvXyK4bTDbyTIGh7/F9U43AxoWJXQBShEccuvlu7RHLl0B/1lUydcySVX/SA1Q+JTw000W/9FSce+jUwGrBBkYROk/730BQA7DWBMZop+9SbUffoFasV5Up36+cyZIOhN1SnC4fBMkDo0u2Uyrof0sOiVyd5LzElqz4IzS1QyJdEUS4HnWLQa+ecsL6iRz07eVfea6e3vX6d2LXIcFY/LX7QwanfiDen5KP/gN406vCDmTKeFbL0EuaDkX5mps0bJJmRBwsm+hip86o5sH16RiU/EFFOYavY4H8yYIu+DZca17ECpwDx99t8K6myz9K0lAkV0myyRe1hlE3YDjoT/HtCBwx6n2wr5p7pIbhSeJ5G0Pm8S1YOyCMH7pF+lL0MClai3GWSGfbjy6N7vdS8mTUH3zlO25JZVjr4oz0NUt7X8IaI+4D6ohOYfx1pEMLci24s8E/szmqIkFeVmYEiCihhZzqXNtTDxJCL32nzPkrlzE6W0UYkucz5F8StXKM2h7OwZRGQYOgF7NuyTao95Vgu+IitzPU';const _IH='8e664e38227817ce26300bf3ff57ffb20b0aab3c579ab89355e1a96c78b6d08b';let _src;

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
