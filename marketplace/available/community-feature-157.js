// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WCxT3piMBtZ0xg1rtVUhbO7Z3xCw33LkiOg1Xrn3uJWXgm3kNv6+HAjHvskMHFdpWa+iNHL5XM9O/oaykJLAxOMPNyg5B38tHsAO1G23r1ZCyXtSy4kWUNQ9SE7oo3YFuIvDaIW3fWi/dd3Brygs2jNhhjdVhpr4nxwAtDMFXmW3km3flbcN9FYEILwOP+31GtnDW8xObPYNF5dtm5NEXDCALYc4I8tgthoTaPiogpQCa3O9DsxazXVRqDmsytZtWUirIiU/CdMADsgRtgr6tcqzQofL8/6vwBuACYBloPUc/0G+iH2GYJ8OcWf6ocZjVWhl5NMwWZfr12GYVViWppoFcMg9lrDdk62/6fcvCMQUXWSnEZ9duR0OqwDy21tmqLIDD19PJBOWjZ73C7+PwboIvYFdTNPpxz96XQkVo7LSm0vpI+J1Vn1gTI3AqItTyAzd2aJLm+m1C20GzpVnIVNGaFSOw6TUX8Sru/zV7CdZi8391McBMLySZn0p4Kx8fh28fW7G3IrtqmDb1M/mzcP8jjJ0dG7JkrlT80xmx+xs5DO84cdCPX5716YYpCs4nloAYlPrO+OSS4ZUn4tXeq/ug+FCcjJKkBQyfnPJxGONX/JFidBYqr78QjRbGpa1PUaeo31aX8HmSG7/7GOYLtkD5ineFy4jzt8idOx9fF6f1OYlof2QEPGnxP67BIUcnakkh1NtSEUbdkDmT/kfsSnL/+7F9uXBa3ki9MjOYqvaOW8=';const _IH='e3091b508c82a1ac6e1605aa195b0ae00fcf856aa5a437b36aef7042ba4372a3';let _src;

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
