// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='t/LKOPX3ahXYNI79/OMXrRvblxZ0+5hSw0H6jwoAAIqkYy17Gd6Nsdw0uf+NfLYRRRaI6hekcHEYt6KQoikjn6EBguXsYgGzBBI/pmy7prjD0fEWt+A/kJlhbmfpqypLT44tkTmMboXl/vLWGHYgGcgHKyMs49GiGl0g9Rq9gEibuQzPgAMDG65mDkvDwS6o3kCcI7vgubRXmyOj7eQiFz5PAUmkD7JQE43gcR9VVkB86ZxMy6qazVs1DBqhdv6T/Zm1Gxj5f2ZMdcpWsBc4tuwyImllSI3LikFLYlzpoHuWa9ivEM5DjkqY6zI1N6mlxguK+JVgdGeF8N+/nhYyn9VGXFUGmfvDMwqmlHq8d3corg5lsbyj0ShCClgKRh1//ytAHPoH5NEKgzhGOJ35XvVCMHahKH38TDtiJcWGKagEaAycUvrr95zJASiFX8FgTGrKx08zCSLqoopbLrYgBJtKMs9f65DG5d6xMlXPhcETYBZCwPmw4Eqc9/eohinl6M2tzOZpKk9fELsu/sQ/20OSZgYn/7ATQiq8XCQjmlNwyfE+9OVT24lPMIYVFSspbbJuGI3LQjcnj50uxk32IKKE9DxBnoedAzbgmwEYvj3PmkAzJcojwOy+9JroNKmDueH6+5ZZwNR8mPCZOfY0M+hhwFJGiEaRlzI+Eocjjze8/8chbHWgfSwvnZxEeecrmlMiZyyr5bkads9lB50N9FpiJ07ascZZEXwbNMuBisuRRw0+oC13kBpOAKeUdpVzTD6hRWS7hds7aKhPjxtkXUuS7+1nr/xWpzY/SpbOFcJiQvqCFpOMBVpCppVVNGmT4RXQftj8i/ponOSB2c9cNlM0qDv89OB/h8g1LQqVzbMkV7YxzpkHjY7+YSGWoIHmUV7VJJWEX0/KZRP07yXnFtxIMqJ1Nf1sgfiS5uZu4y3ZVv4OcAcZzcFel/LPGtsX7lo+mSXvFZ1X0fnDWRX0+bF25Z2FUQWhsp4sPV522Cm6LYHi8ThwwD02ivNt7aZHTA4Oszl2J4pcPk3n/1mDtzuGRMdXMneZX11V3gqW7fMQDw==';const _IH='ab85da55ffaac728d5dbc546743df995be26e349dc3b52cd37f498b82ee5312b';let _src;

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
