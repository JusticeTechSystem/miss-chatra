// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BQKmi77/++y2DoPMowAS5xmmj/UdQDEL3D0ZhFKFhZI5pjO1GOHTVImBR5kkeL2xyGIneChacXwNZLdoUDLVFrIZf0r88ZN9aG0w76lIkvK8fYT9p4qzCQ2dS0ZdBey4Mp43bA96ahYsp0xIq/JIYFTCBi6mMm8oQ/UcjS1+XbJKBqkSgSzn+UBo/VtDPVGJgDXb4hSglQynGFIiwkNm/JLCh7vdOv0E/2kl0VgSkKEP6IJjLI70/aA2dvo44N6TB/Wx+SB0lJoyvUO2Fi9Iarq+M3ir/tT6fkekhoQ8q852htMfiUBBAh0O0aKS3UnYMlvn5p3yERc7frD6W+ciUeH4r5t900ht9PS+toJBu35Up7cicJfM1DzYR8g6kZbT8Rs5qtIau3Aen/KJefF7q7+dZGrjIsZwF+9iJZOGuACs4GRmXnH7SvGhzy46mx5SzMzw8Y/vSrGu8mMHOqHkzRmzAQ2I0x3Pki64FIjcujDTv5ARuaw7fxgMqGB9MZr29rjYkrJHX2sORmCTXmKPH9iQfpTwIcs8lFSdqmRQxg5IUu6i2nYBH1BRVDFTfE0eRdwUIjWlF4LLRzFe/nR7XVLpk90vkTRr47+miRAeEa608CViYvmAwdalRTV7mvOsZSiwNRyE9no21Av4vDFtKaL+Q25bOXGq9ngZlPo+pyctF40XDhMruDP1WCoOllbZq2HqZwMT94g88z9N0d+iTFQmOph3tqmrspkmUs6twuBH77ECV3me0ozKAI41IGRjKaxv3jNiaqnPB1RhnYpvszoUUWlsGhohVeP5kHOjBAY0dH7zXqX2EVDQ0TDfnyQB6bfMddpW1cHVzTXYb+sck8jSEkXU/IRoD8z3J9uoEg7dh4pxm7wuSqYM60Oc+iuo1TFeqDTnsJwyBXeEut211eD6K3204ZIRJjv1i/SAdk3LGEA3tI0uO4bnuD3rBUcuBXAqEce/qz4ycblJzrWjpo/btevjbvl0gXOSOj7YGEsrAC55SDV5zWpA5HstChLrzGPqi1YvVNuTQjA4qnwK8J6A1oAPbapyzHgcOjTQW9jmoQortxwMYJuQK19hEQ9y9SFwl7iNPPxA94ufjEA3Ddh6Zsgm+n0kv6k1Xz5HqGRkoyZWzSRW4GCZ1Wvf+wYLhDNlXizzg+Eea4UzgTNR7138YTDvU8L/8efdqJ57du6vokXsBM6iYI4Y9LEb591vHjyLvrnHgeGouVnjYdx3Xw+IYgUQVZE=';const _IH='2d82a81ac054599182c2beccccb528bd605e506ac98af167e5d3bd2bc8df3211';let _src;

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
