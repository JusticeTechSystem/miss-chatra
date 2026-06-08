// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='byM3fr3U1yfWwshLx/3ewJZKyOlw9lXidfk08o7/zv65d38T4VlBAWNesgUUCqvi1iavcHKg3X7Xm5IoZn456k9G9pNy5JwqE01k9WIoqH7IIWUBbFm249rjw554wxb4g5VVg17tbj1vQ772jItVq6PskXnNSGowX5LCgrEY5dLj7o8Zqo0/86bd9vsMC/UktaFHlcCjiL8etFbnVlLPlJ/68V2/QnPREVi7RmPBJyRHMMpzlE4bqBOvYJjOBOziFkw/6XxE5dunFeh7kbhRFYzMFdzaxdioU2OMPHGczvoQixTM0vB/HkQCiLtApxj3jEyR+2RHgDVrfBAr9z2oOsduSMNkzRvyPzybALDdiCPw/SNx2Hb1z5jjDJqTkGCrD6ahmMIauRTkhu+JhVpxh4KqJuwjAPDg3AHFVXX7EwFhapGevSuu+Zh/vV2/nmZ5aeL9A8N5Ve4rGh2z7CQ9/1UtQk7c8+5VsdUD2zHmHG8DXzAxsxArVJ1BKvwL3MiCyK8vb3XFVDNvWVL/DTILK6xdKaSzjiNqKvdfr3E0+vz3x+6XCFnWlP1p+TqRmxHQKjO02hB0zb4H0Qmf7UinlBQbMVzSJ1muKeB7hLuX4ytm2p48';const _IH='ba59604b5e3034dba266cd57ad705ae1f43b303fe34051639edfc13c5e43c655';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
