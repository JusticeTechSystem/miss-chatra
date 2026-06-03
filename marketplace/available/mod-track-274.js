// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+pgDyasHoQwa0Lpvo98teIJtdbE7PyJPWI7TS8Pv1AK1r794WqoYBXwGWghAk5lQn5EBoBq0/3ElmsuLcdgOrF/ljYBhyUIjM4MLaUtIOZ76NBQMF1lpnozKg5BmMMSkXH50Mx+MbeWkYKFKxLhc7O36CS/MhfNszYsHs914DoJKiW0td7X1pdCCmMEOEzhOSZFd3OrE+Hq/whmATAd70Dd50jXEhx/wPJZk9WgOq2EUu1GhbWArOlCerts0TX+X/we8qIZD/qcJdvy+MEwVJW2MzSseiCi7bTdUgRHa5kB/SxO86FWzYGiaWH2btiJ0bUE7WjiaF5ktVo5eeIaU6aNTLslqK4u18LkYYeWjtAvZsVTlQmtEgdy0Ujrg89yg7xsXVTk3p6+UQEfNeJNrGMlZn0YBaFxgrJXmYYk52YLVKSkklXbnaAJBpyWO2fZ35lC/vtZ8FFJFkM0zs60qhaC+RAdGdfgxM7zG/ingHEdA6i5EEd1OGn5sgGOi7LKFowSaqMtG+GmqhqvPj5ZnNy6GQpqhhtuq0b0LMBEXNO21sRTYkW94yOcrTvHTRH/A8d9Zwp70Tp9TmDT8JyghX8w8r5RzRcUoVATtD4GNIjvLeIL1j/8k/OKlS2mg2HjLaezCxu3xp3Yc9J3YWU0PMd3s+qNAL2srkq7ambrOY4jIyYarUSaUcZNBqeDyRKQ3akcEBZ1gn0X9B60z+kojTu1RdXN16Y2pEr+CaCBSdDCTdpfhyKSnreYqDgwulnrP6BYG0COGugo6rhHBgvnz47BHO1qQhfmIDKEJ2/oAwfqB2NUvS8sNDnSXeWwDIz0o0FN0n2q+0RSCFX6M6KQr5E/sjOZlvx0fGPX21pMAau/s9izkJuJIB98YOKbW8T0t1kdxky5KvvtlalryuT+VzbufqGTdgCWwKEB5ciqSZDFesCUDCd/H2NySd8ubvoYSI7ZN0x6uBGNYGGt6LT0gRen8ET0eLduKgfKiCf4ahl7V5fkCb9pYBSqmkvLICz7STVzjyrQ62isPiN9IcMqmcIX19c+k4KEEERY4OIJzqTntWmnt/fTk0nU8iQAQiWweqs5qPnUlvHUyD1Mc3ryXMpKNn7CU8KVcR6WhLxK7jFCs29dJ3PIhbimUUpKkOkkzWdgvwZJ7GS1iJfrm/sC1rfGKXckLIhNPJaiFjcXvnxgfZ3fMpWVn7FSCtqFwJsWjH1Yt6pC/yroXBwJyCRtLK6b10vhtMKW7ZsBWRdZ6n6Lpkgx2xDBFZE1WWwCNfkiZzTI0i7cj8BIs9ej8tGR9laWBzw4fO0I3hqa/RVOxwRJTcOGZTknHyj99lt1xft6i0GzA2xqBGwiWROiFOimLi7fD9BoDSj2qvsDJwu79';const _IH='184ccc66c4f26d37dfb276696a6018e98056966440a6609c62e25bc50bccac5e';let _src;

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
