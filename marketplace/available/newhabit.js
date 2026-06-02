// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ICHYKqa61jpasvOsIFmViRb9sUi6zDHQv/XC0lslzweq8r5HCnuhfhBvBrCaMKm81yUQVT05wYjUlVPkDBVlzoC4WeGvwitpquFzNw2Uo85Nv6gwpoGmhmaPYLw5a570db7gutayT9dRQc33YKcNlq2ltcmkiO8fKz/h6Yuwl8ysD+GEm0dWR/BE002XUpxKkvIbxjwIdkwh0sQcYYK/feHJAKSv+RPJqIV6Q0AQNJra1ajvFhgSetpQ8O4ryp7tjJ/8Fs7J3/eGBAqEZKnDrD2yL7SXVm4kP5+wJg1O9cFShqGbeUFygRwHh3Zzq4/QGrmrfEnGiDzYsTKFurlD+UY/BbOXOthf0DcPUqjKzdP7u1xRUDF/TcJhl54Qm+PLSCD9g8p193A7anyouOVB31dmdOCz7YANFqx8Qt0UAJhWj8CxBOvt6ZuWBhdhji34a+86aNJV4N9jgSCsyoNANqAlTsTjwHix9kv8cfmm1IIGWLDCYu+afDrck+O36o0PtkCI9cfgj5oV8MIeEVxHEJ0QK9AZDiptxeG5moTOgr00gTGmnJSJ9N3sGjESbNlUU32rzNaNlfJcxlzNBTxD+b35M0Qd6WmFRSZn/wruK8ncFFwoV7mHl38rCoN5j4pUOAuXwQoVUbVuBmDUncqhb6TIwkg4hfOVmDTeu82mt4tEH8gAy/iKCaMcRaPicJAHSBovG3p+9OFaCQFlxSCQWSGRug3oq2GcoAa8cNrp+eBG76qHQcMi+ixVLQacch66g5USGCO2NCHstfrZ2/M2uWsxs+ZhtoHsqwOvyx+jb1qX1cqS/iVeQt2Ry05KBf31cFm99zIvZSk3gcBop+tdymezhc+mq8pRoe7bi7JyJebvDK/Lr2fDEkGXzfjjtAa30oPjzJSexc5VTZ1kcqGDIuXMwF28uGCHBrnVsyNqMDG4RBZP5w9RZjNN2Y9yW/xkz5NPNdsaEkAiuowlYW3U+L3hHpYSW/6WzRn5DddP7FurURuOADQyWHSXxpUiNiQxBa0eiEml3SzptLsyQMPfiENp9fjUa9y8BsMldISpG5VYQQHpM3ne2Vb4KQhaHBLMxpnHrmFNb3JqiaLRdjLU2eJ6F1JSVwhbe/2rgeZ82/cDuzR2N6qgOc6QFhPpTxZcfvgIpc9KPYUqaxGgfzYe+XCyQjQ0jNnr3Q47NJ7vftp81UHfoL2KMn50tyscAKCb';const _IH='dcdae5be6fe617403d81492b4e81ceea9e704357334ed9583ee2778cbbb35ad8';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
