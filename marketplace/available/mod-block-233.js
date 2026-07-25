// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSgPjrWRIEWWmI78RI53ymFZT0b9+AzuSaPA+iICBD5Y1qZVrl7N4emhcQ+sv38Tlcn8FNF0UEszFKuQvrjiW1Psehbw31TQWsTbMW9KmKmY4q7n2oVTCdDbP2KXFoB9dFtroM/HCBMNGZ0pLB7iQIUJ2cCVIU+nKyLg7zf39NtzJQ/JUzrRnAqHwSZkE7lRYPFM5yqW2HSFkitzcdmNkxvtXf20liRG+bH7ml63Q2QyZe/nHoz1KkaJkeGWwAkKGPUARA7irsDvepBqeJSLbWeKDUrvD6lnytmpfoeIWC7sTHz+5cVUbAOJAhhqx44lfjzdnYkrHz+TGKkRoBa3L8idufe3ItnQ/6wFbzOsIh17A/nPw5zQIWsOEge7BSriF/lIbz8XYto9etFwSj5aLmqNMzuNBwhhasG9KVGIflJVUIAMrKuO7ndgZIVc+jwurbzhas5b4oYUV6jKpBxsXXQNo/66WDhzW1+gwFTWycciZc2BBWmskERJZJEkfYIrVoScVmYqWW64MxIq1p+Xov5B4Z5nOTo4kchEmZ93tm3m/kdG+rKV6w90Rs8+h/pQ0Pv5TWl4kQttzSi4GaMTcQI9+naJEWDeDKEUvFH6FY82iiOM+KMNR5zHCEaW/IbaCwqVmHyLume7pyz2H8k8WNle4Y2KgYAxqIU82EApQZ3+yrRGYQvdM0Nq0LupKTLhmAZqyKePlPTJaHs8V/b8VKiI8hcTt9VaxWblvK7wlXFPlPurIe+Nl78p7ytH05KVO3MCCeF1ckhVm4+D6AHpU5Fo0tv+YcV/d7grTzR4mhpvf1eru5Gtg6aGVLI4E5u5CgAwG897g9E8a6W79MhixdZONtDaGvN+bOF0oRe5MFJ5jKzKRBBVnePRYCmBtl5wd0TBGPhWKHSUzx5SNjszAsYa1KeYRtXZyGHigurtDdQYNjTgjba3VndLK76jFp8Y/GbkYH92An2Rl5sEfdu2DYJK5X1Wcl7tcUANXvP/4E9DZ9q+seCudWuFCOngPpm8FvNwxua1qjAuE/KOMj2fzAELbaAkMDlKD7Zsfkia8kHagXe13LGdBTjlENAdyfhYfcqqhZSn9x+G+eAofabs2n7FPHKvN/W3Hp78zeq6BlWHlGftEGl0y+Q7QNBgGlFgWYZE2p/2ZnjPlKe6rk+VbgivyPtFrTmroey7rAv00AJqPvSLYmNrGQZs6k2PPJ9BnF+a7vQfnmpHNlTORE1TqJO79iAIFy4jXzArGT9msojiBzVzxKa8BFdiojyfm+caJeTa2eBN9ORySSncADyw6AvtWJZ6cDRm8lLLFRjpaPVfWklOKXepLe8Y7hYwPncdqEI+11hsinc9i/gEjIcn4nrdDgGcTw/bTqoLDVTOlc=';const _IH='f9ccd54e7b841dbc2a4cd94c23bf2403492dcbb6c585f991c68db7ce48750a05';let _src;

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
