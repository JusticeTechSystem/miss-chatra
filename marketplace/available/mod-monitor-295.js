// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='og05b4bVqq3koaDmooxIeQ1b1w+7H9YAYii08oXQ+8fTYKQwkkGlwzZ56JBv689MIu6EVHfplVU7xD9jhxS/6JYXltIQHwlRLaA+pJpmC9PkYCNrX39QtMOq2nXm+7dHcS2q6W/wku1CAHpeSuMTnPsWqFj99VGqF05iZ2ICqNSHVmYrRdz93M3PYsVZVf/aaxtLW/x8X/KaNEu7q2y8H4hgS1UBJG5g2EH8c7Nr71YSI46lvvjs15RqbeQzCn6mtwgiP2Bgzu6kufgU+SzQpD+8RjMM3Et+wfHBBQjv3LBjHkCVRDKhS/jz5nfL+5aLFFYj/ycEClpXOGH3VGvjkGk/EZYKml9msQKjiXU7Fhbd+FTX8Qcpq/w0mox0DBGN1I60BT454t5fCksgo+XUNvA3tjjGsTas/JUAABtmAC0w7Pc50CINv1O/XvINg5wl6CIwUOvhli6eEPCBk7/HlAqbyVJqUVz83m3srWXMi1Q7hezuLDONjfNj/zULcoWKd1aUyBHbnq7m/sILfCUaSVeOMSxqO/MDROf3Z0azqZ0RZIWz6ZOPHWQxIgI6Eo6rmnRvoL5omxElprkrUz3mj8hF18kK8Co6oKgIb2WugKqkg+VR+2SmBk4Q7WwGdWywyZoLCieFJ8cWB4RpiGiv+H3DeW9UCnBFnVFdGaBHrechESp0lzhIOuXyPq16FF7dQ8wwzZt2AXOgSIVJoAArpfAkhqqIiGoAOkenQzXkRk4ZWr16o3hJntA3BYZPu3syanw8sk8DuX6/fElhe9Yq5An87QjpjMYXBBHvJpbMm2OIa579YkIlpASdBUlCSv4vpd/dxbU/eABdwWBdzwyNHJ7vIpDtmRWkSsAN23SGP8AfhjIn1WXEwpHQ3o+prNunQuAJWkQN5gqWzduSgdZVxBcPSX61ZuTR2jMuxvQBMiOZRJgJ1Fo9vxHKVWyHKB7Nia+jGPkOHxF6MxRIFQRpBMqRRCRkP9OV0QnlsasIyD87bDSaJkc+252uAWuz1yL77nhDELhRhmvX9lRtMqG9XVE4qXkVgDYMGKVuDQIt8J13w67wMN95E8Rm/L0osnHVerYkLan/vUj2ZSFn8KUm2eW+3SI02XzjGBrm+XXF4md+UYXtkETcgBJ7Ouo7pttwiXuWYCczsBphiWVu8YOKmodslEZe7BhHG0+y1fa7jSOmHB9Fz3nwSrm0c2PZA9YpXevoG03daMXQIaHI/LsVS+UCF0+H/ZcPo0S7rzjSFE1WaPyiSoCT96pLyMfY1aP3jnFwQVkYIpk7JrtVkQy9+ISEcJbdsSqBudMGz3rN3tpfUB4yJonPLDlrwhI5JdNSSku/1yW0AjQgxKuCdKEBzIjlSL5j1fH9rbzRoC6QsIp5IWtvFotekLQnyVOmKJBx0Qc=';const _IH='f271b969b0ee5ad2a614510f38487f9081c635667183d0ce40d60393dab31bba';let _src;

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
