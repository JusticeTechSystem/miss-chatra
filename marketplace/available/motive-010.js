// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ro7qlzexGEU4hO6bZOjlGqtLrysGYgTqVhQZeQ1AojAi0YFCdhVPTZBmhzUsWyxMeGCG0ZjhvKWj5p6NUpxvY4T426xBXeC5T7kpNpKPkTEW2nxuBkqQcxqCZsG6/P7LwAech0hmqklhOthWrFP3rFpbQJidulvXhtliBO6l42txO/5iut92OQXVoCqDYNBUvb/P1BzDdJk/hbFIvGdHc8ZN6vbJjngpKd71SE+2/U4SOU95lLX/h2f+IN/mqSBwVdKUfZ3AlpFQTTpESvfMU6rJYr8teCiK5f65ddKzD2VKiWKA9OczMIEDsXNUXHF3TbmJhMZTXxZ6hfdFheUIiEFuptIQYvK6mfa5AufFjRisVEKC0xr/ahgrPlBTKP/lekKPpfu99gsN0kVKVbW+ekWvca8hUzsga+Az8sD667gxXV5k+as7F2n/tY4nIxJ8bFwtZdHc+7outFPM4T4kbPV/KoWJ0h+oK0nn5R684V9mpvwIGlwDqSDB0Gf1IWB0lMcDbcp50HjdP5cVvA9e+yF8kAAW0tfePe7T0Yb9Hv37ma0esnvL+8MBSOsi3X3I3EClS1+1olMFQkgT8Hq/XGDwLArMihdRUdKGs2F13YZmQQ7P8BZNM9rVevV/Ex6fgSOBHMtOhDYwogSE8FV6x+KGW3IArghCbWALIxMsOxW5f6qNysLVae1LGZ5D4M7f/2IJ8V8ovQ9Bj5krOGgUK7HUFSLXkN9aLGKy+qMjP/JGynO+AspGmsfqBZBUkoQkgFSV2/4hZ5h0WTI1Jj0TK4czG9DGktWpOrTnYx4R+oKKpzj5XG0XP0sgHW9HApD3c7rG5kGh93lJMvsc72ndf2hJl2CxR5HYnRmMdEY+Rvh7P7KroFExCVY08sKH0Q7vtP8tVbOiqofhaNAxWdFSdPEwcTCACXcw+I2LpSihTCVhYin944XmgjZ0xcOFHgX7ixCHepDX5Fnn2p+dFVsKvS9W0UGtxlcdsBUKyDS5hOluFcrgkOkrg1RmCIiPCRiUKei5LIDvze2bEYRO7m1fKmA=';const _IH='510402a8099c40d8add2fdad0d9996f93049b18cf69adc3295614a666b8e02df';let _src;

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
