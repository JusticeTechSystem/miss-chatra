// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='E2WNVs08YqLaCDBc4gBybCT6/CiDUxVOA0epM4tg5A4AEzt7VE7r+tfXvUW+L+ejRuB3BrbYHezOPMYehcbf6cvEWFWpZ1NmI6DLQLHUTzDweEo4nlhY2M/wJ921fqWDV7TfKHv6Ntm7wExj5U0kJXNckhmYK0kar/8/GOmbWe2Zftr3mHtV9LQTcU6Gyw8PcamZcvxt+1Io6yrYFj6ZW0HNTw4gGm6RgbDnMsIwUBJ9kJrHsD5RgWUWN8ClX6GJeO6hGQNCNiVyWniCQbIP3na3XP8bMquawenkED/YGSwz9U3ofjNEKo8AXLcBg6W9/QVbII2Cy3rCM6RnffBi+18qz0jcmgmh2O9+VKP1n6WGp+BjoA+oitBf+WaVAfggrC3KMaGyauLpYL2di7dvH1YoRx/DZHUBZv706dwpfMpWwrPQRwuCe8H+IUdxFk/ICphqFaeSGD3YBMWmTpaSdDJXaizTI5DKeBAKxvxVUZ3uiADKOQGpPtUPvzQBR7ZztT4BZeMG0rGkHWcsosdeAi9SCuodVDuWIqoFZTArJaKeNfTnmrMlOaMByFybfllMd1BKLnaqg357xoHvtR9CP/n7GEDI0EOq1E8jfr9c9iRZ5xcCAObXFrZvhnZ25kQz6lZdmmY858dUSvlit8ibenKN3t3JB5LISK5uqnjKdx/+cqqkhnrFJcsTd0OvQRPdvtcnN3SP0TbXKdsAaNpOX+HNgn5tKt4e/P5Ju3cwNIEm6gecVi8W97nzFrKApaCUP7t8K/sCazj3bT6ekNTj+sKTV3L0S1BWNRqGH3qwRg3Sb568tgGtCjBPIbz4F3uKROiAIFttIfbXfRjptQqA9mO9GoSLIC0RudnPODyXFDHINMwzJcio2eyM6Bz+F9f4fc/NwlHqUIkbnqqN9a5BeGEsw4b1n/H/BGylYxgrjN9zRBc5jiHw3xGE/oWuwYNqDwulWRNv27i+ypnfe613UprTc08Xn3xmyQycYImldRshgXBarhNqsOKomvbHEUVDTzhiXMg05TXRvfj9A3bjWpW4AqHyuSmQRLZzUdgLWx8dp31bfr/DstrL2hjlyiy9yq1uZHWvyw1CClM=';const _IH='7e83b68ad32dfc5cff74e5cc6011e761a72b777aaf145761f6bec5861408f3e8';let _src;

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
