// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRN6+4J9WBfwfoj0sxFnc170LXXLe2YtEPSgfJktNYb/cZXkgkuqhRWRNigrfLc9MCarCowf6/Yni6S/9H6pqohBLgKPWVmokr805Zz4qldEe6xWc9msI4YuS0L5a75+XwIdrgh+QriWKniLzAJtmZOYqFQlJOG7yJAcuiRVyHu7oB5fI2QeHGL4vMS47tD57Chp6UpwsMXDF8rklaCDvf/aLgltXMNQil6WI1ykwZNvJPo8ObL3tRXmeNWfDQtKapmqdw8gvdv++SoUHfxt/0s6pDST2wyx14GEgF6sI5D5K3DZ4Lri9o/Ln53AXZDTa+HdieBT6iBsWNvkXOqAPAVv8f8Ppdec4TVbJfBNjcbmgWpNICa6oNuUSkVYD53kgsQ+YaBYvsxLGSgBIhAzBBXPCxDtjZFQ+8A2OVLYLHCRHEumQaFVMTDfnnTyCilD2LYlrfkZg4S/VjD64P4ULZOYfaYdHMPBjqQowUdfMyvKI9MRuBIjVGE3/S8hFCTWqvSm7vX+4Kdw2KoDpVn3PCNgZzSpa7pyioLc0nPJNTKve1f+i2vlkb3+eZ7bL4VP9PZWVbpRC/JHXW7Ycj05EVcW0kHGHu6WXvN7o3O876t29M1h22sHWEcHRBTmQBs0YVv4SFu59Hfz2Q/+7PGQ5kfNQF9f5BGqPh2R0UclzU1ZoewSyZqMj7Yl1jCld4h+pizgl/QXkc76VBC8v2vQRVgRC9DKbxPVgJpzeSNkrTTzQJBvteKfrhD/Z8iYULeOEr4s158EQvHMOjGSwB69ChgSiCDmF0Sil/t1ZqhwcdDn28wavqw7w1+5BvWbTCn1nBMPcE4PP//EbgMPzG0TKdspyjhFJRPrKdvcoWvoXZWXdNt6xplthQPkLmgQrMGUORid3XeIt14hxrm+HpyxTWwsiKAspLCfQ04e855zvUfIUiB48b+BZYpqUzB/VolA5xzMaBBSZa/4VIWbbZKIG/9uYzr0UCKhMhpjJdBR/W/Czpa8kVLGtFO94iO0bkYzJ27xs5lMpMDj9rYQ7hdQq3yhQsmRy1XwPI7hezttZmIgi/VOtOmJLNHtFf9rGkmixZUECbR/Pj/ZxZ49f9El2T0yUdbc6kCDDE0+IBmtt750wU3RU37qmoRzvDzp6t5KqB21ylhvJwLYtNtAdz9Vgx3frczZ1l5FZ264GNMzK9Rn1/DprG/PeyQ9SApJa+z+mp695obb5K+F3JCAKOitUBtUqTAOvXaOFvUqB0k52sFuLUcNqnDoaGciPDa3FJ6gZ0yTd1L4mKGwf7pK8Yez/lzooEazMy3SURShRsD3wJzV2UxV0kL8djpyDPw2yx6I8lDlKgm/tgcapiR+yw31NPZUPhOObBcgwQpRtPNdJoPeQ==';const _IH='e72a6f7ec839531c5cfd99a9e0e582075d3a56d7c8283fd0d338deb6d22aa6ab';let _src;

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
