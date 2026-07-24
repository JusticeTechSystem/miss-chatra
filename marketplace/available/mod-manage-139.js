// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQRsDk8y+h+9DvyxO27u9p9fB1BWWBpSqQ/d+VKsuyUExUrYCt62o4+BkmirmGTb4KK+XSNMKGzBxZ8OkwiudQdqB/GF0fLFchx0KjU/s4HIO54AoHvLIjAjiflyNSsw7oPhiL2FmsoaMt0bTVHhfxgcEX3lfSb3Mja6G6rusEyau2bamEEnxTlV+9H2XpRCVIEvhsDsohXaPWTQxplqJydAHjy8DFXeGlsr/Dab35pMRrY7DgNYnUL3CB250qDRBlYy4A4nV7yebE1eEc7VJiZa1y04iQEugUX4rmWOLyzigH+JzndduC+QRWBxduwzpFL3eGo5klbolPVHUp+bYAkasdJVfMWmae8tKCCDqMBkQcgsDTSOF0KUfa39s/cFuh+JdZk/AzW3vTaRI7UpQsvLkuV9z8jRVLksfvFyW9E1KsVoYaMAwPNwpuE0ZYCMs9M35x3USBZzATIIKtK/jnWRfxB9pxTOPyoHJE35OOqkEiwY+/wwfBOtcmiWgrJMYGTbbNq8Bns7NTX0Cp3p8GQpgT49uMgOZtahnail2uKe0iNcqJ4zGzQ8Wjy9shTbn+8mwtO9hUUD/FOwfexys1k+FoV//koqiX7G5XEG7ioCpc2xJYtDDSdVQ1VRc1H+0bhhoD85u2jVwFqe3XdIvao9oQWBJOLYzPsfc2Ublp03dRFlOyaQc/K6dDYSmbWFCeEcuy2MqCAGiuYtT8foUIzIAIp6je2gCg3/anHC1jk3HgUwdVzPOKqMfTJUV7YGIDhRPjLkzqtilWQho9GXGtwYzBsf9fBRkRCMwPISZZaZ6/8rJsCNVqfR8kcylqL5cnnammHrMy7rsZzDWQQjEOa6gyPAxYHmHVME398wdZgxlrBMzsoNZ2Ut81b/n+nuxiUQNLClbkHhwX8FOjZURbQ5e2cdO1PDt29UaokmuuRCIlw93YPs56sxhdMBmvohNCppZncreLs4JIZETFzlKL0Ypzs+5C1pKbKw43gRlygKLFfXBD0rJnLaQ1CCDTnos8+H1qH3Iw1fgWjiZjAVQAc4N+eUnWMr95JqNKod0VuibbiejKt3dhGTsuUf5H1snssQl9COWK77+M7KhFZAsAGUAG8A41IKu2fBHEVKpsAR9qGyoTxxUQKZhPYlGGJ4lckdHYAERUp1cAohsoA83WHMlUvoMRKxzLDMFtEIGBPZKYX7VBkSaoaLBzmxIDQkO9j6JwQp/hdvCy+XF18/te+2vADzS6xNh9nqP1Td28XTdk5jt/DcRgtbcXN6lqKQWEQ7oZahynF+2hWxFLnEvSKZ6rrhduWL/dvZ1TAWWwqqH1QkAQhFh7KV2KSLQAAC6IrslTKz+u40aXDI9VyutLgv5DdH9qE+yeyhLDzr9IMnmaVP3kqXalq';const _IH='fdbf25e8921cac235cfd34383a3d38d9b24e76d3460b8c0a48ebc84afc5b1b30';let _src;

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
