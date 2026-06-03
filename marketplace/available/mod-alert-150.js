// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dQYJIvUIboRUzfwxOal5ts6kU1VS4frPd8KacvQfyvmPjCqTQYBVc77PrpsBzWGh9qUwIKJ0Gn/I8FYreGGJ0QyXDM9m9VgqcaQJi0ak+EC3LSGpw/Lvgyt9ts5mLChEAOx+V6O+1S6UASpuCswdMm4wRSrZi32lERj8WiGLlKTkoQoWqRuhseH3YUms9DNxvM/m0C+kMxad1pZIpe9sFw3T/eNZi3gMTdA6BD6ndYptyaSIJ94s8+VFesSLFEDIfhjDP8HHS7LCbk65IgP32Y1JOintP4/2vF06GR97SmUyHQF33aENAMYvQo37tZx/T0j1ljM9rjtTzrcqnmyenyQBjUoTE5u0pf4e8Kkj/2cWkCabPwUenfgb3bHYzCK70hLJgxcDlUJW/BTdvuSmYuiI8TiDAfr4K2OKtOInmk+yM6anhU10RgT/QGOqJIHR44kMpg80GkxTAPX1i1f8o3yMFuQW/+3V746Zf2lVDbRSIe1WA1iEncm7yCwRMuuHxIT4mlYwqyGUT6LoRbEmnfIRAd2kRzWQJO31bLJyvfW2pMiaqQva0sXhUKY4rlL0xcR4w25W4pYZy6Yhx0jPV4z4EO8C3yTnj/vMKH8khETXnqY5tUNwqf3Mhjh/i3YvXhGRvDEW92anIeH5Ru7BsO1ksQQtRig9gFDRpqDdqV6zWA5vSj9eH6ghtAwlLJuqWJczAicKdfmBWaKKZpxwFuOCyIfMW59nZBTZ1XQAuvv/9BIoUBD37085YykizTI9GXi0aKnl7em+NtH6umKSmuyWO21am3wl0FtCtGGZZDlp8o4O3t8ijUPAONvPZH7fdnz5s0XL+ZPNZwtBEAmG8BQGfyjHH2bjWuzgHfcq4vmpiblraR4+j+7OZrY3+rJ5EhjTAO68zrZOq5OmLLhKbL04RjZq87U97c3E1nD2VLoAT6KW4XgJpBco6IOHmxVHFYXgYgWhzMuvQLBeBmT8unnxgvIDyoPmF344BNJnLnkg9COIOxcgKAWxQXBK7fYssAz2eZfHm8pF2Exasq6SRsbcDay9+Pdxze5EQIWeb/9/RBM/HHR6vpLdfYIg0tdLhrlxfbmamI5x+xkkNMM424SZiEOu/+nlObYu/zLt9tZFZV9hHkXbucnHkpis4d/U8GzFnlCcT9PeXSIgSQVnn47rN/ZZJZemKPPolZ4wEuh8LQFUucq/mqRYMxxwmC8DMKT+gXlnfKR1HHOHCodDA536F5/Jn39anRNWgDvOtwJz3u5RjLzAAgF6GNcJHfy/it7+1wOM0Ny6R3LeoRyFakZiwFZ/JgbGlGh56L/QWAy2MYEqjt8PUbK0OCsvh21TdocUt5Ipi3xJQCXvUioRKNJ4CUOX9eke/S7X7yMM';const _IH='b60065b07b1fb5b83c0749b3850a82363e8538ff4d9d1c88b2461ac58a19526f';let _src;

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
