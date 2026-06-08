// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='M+jVIs3CiUV5Pa/bFPHfUrzTC/tBc1BWbEYGz1TyltSdP56FMQWRiHjsBczEK0IaueY28Ir/rrIfS8CEpL7obCLyUeTBZ4dOyav0+5o5+ieLS7gwLbIpqXfjrNDa+mVlthqqgkMg4mYx/IJ1EY+lqgBGbQSCVBOuz0mdf2AlBD2MBh5lMZrjJ7XtAIHmPF/MjI66LyMzFYdTcIYRCzmYQEPD1mhy4Zi5lqrprxIkvBeybME0KrRZ/F6yum4V9+k7UnfeM8qUK0mZ0/QGflJquGVGFqrpRaFu86g3KG8jPH/7G6k93k8Ojh0+60AiXe0g/Fq5gOxo6yD9JzJaG0BS+Ti4vWTnqNuXcJYVXz4kjC29yf1Lgnxrfyxf37IgiED4Qem9L7boJb4W6R5RXC2SDXffISHDfIxaQd1QrxgKy6ZiVKqzTmvpiwbRYGkc3qLF/WsCqX5C0w4CjEztvJLzuY0l9wxAz6NcAl3B+WgjXUENnA/A6ZcQOzCghy9Xuss4P+hkKStcMSb83vUhYWJ6Vms7xpbRIhd3Hq+8Jx0pYSv+vHIKfr42Pf+IzjhlPq9qd4CAzxWw3pxKthodUXm/KVzMsCdt+ue1GPq1kEZVzWyD4krBZg6uqntvlgQVZhbSL3YHjM/e29YQ0u/g16NmSivtahMhDNC3crxTvBmOob2dF732PEy8vGN8QtwtT6Qekk30w4vtz99YischMwtZPW8OK9xXpZG5huLWI2Xe4wnyLQrDr8ApPCDSI9wXUXmv0AhbkuE+UzHYlh88edgE0jueMIBXzHZ1TWcJ6aXhTwIdbPHBqQ/+ujwWR2NFTKg/BzVP5sckeem7743NpqwKzxt68hrVMOzd2XsedNyY0UacF0QJXGSoKFDXc9rP3K5PjZJ6iwZqyIWJ3+tBveFNKiJ7YPYMg6mQgIsZBjTmvan8nx+siUUIOByj2ibEb/rFJlohdOTVG34xTfZQVQk7Jr/n5qBCyhPpJYBKgLSDspdqWc/koAE/o+8=';const _IH='c7802fb5e70de54991996819321e4015dc81bafe3220355bc52a04aa7dd3b169';let _src;

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
