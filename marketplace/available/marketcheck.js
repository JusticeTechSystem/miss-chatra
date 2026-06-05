// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='06eG90OaFkFrzKT5k7JFcOMF855hpduQZc1X7WskACMmbwjcRIytHvVrxKAtf341mtXdckxGESXAtQ8+2ueMGlG5RIXT6Mjfg24j1AqdhKKRoRWSiVRX2U3lWJus+l9Abuiv+3PSCIixGd1LpCezw5MiE0urq9x+fkCf1Hz/oqKsgHmwLCK2VD4Fl1ea7zIEIDWZAGiVIk+rld4+jP67FIjJW50BK2X3f4VagRRVvYdhBH3/9R+dxFfBzZ4DToN/hxwD8m7A19cq+DHmocJDWkcNQ0MsXNOsw2fFT00QVs6xcttstRaTno8+sc79+VpLYYh2JOZoPnkRDJzjw1HJUvysiPPs09pjwqT6JK2oRCbDMANeqUapNXWQCIa2LOmzjcKUwB1l6KV/axhKxAljuTy3P6QRhUD/zTZxmFo5H9CJjbuatQmQkLOGt13uM0iknwa54Y24l+cr6DWB/uyEq5tElHg9de2hAPOF/Rpg96UjES5FBIqx+bAmuvY16Fpmfo56Iv8loIVg93Cql9fYQtknZaF7eLJF25UGqzTPO+oNeKD+w3HqB5zIfgd7lQtkXyjmTGEI2Vr3AYMgG1S3/m6+J4mhyIwYufv/+9yKMekOXHosyszhP6hA7YzT/VU9I6eldvV8NO6fkwZUi5wfHVVnlcHL3TFe0H1/NLCc3NkXUfZKs7kaNoPGDOENPXeHcWY3DhQv8mr1/TEH+EqJioF5i6qqZvzKmX0HWAi42uxGDEfpKML1Vi9dHb9JmXwuOFR8bmuZCky/YJTi9naA5dUnhuoE0agQ8AJinPo7AwVleBlEJa4BhaLqE1oNuQmA+4Y0KNKqEpT9q4VawiWnVQrSRx+FDeIzpouKe4O0x/wtCPCRJIM+IQZSb07ZQFE9CDFOY5VnBScQrRKtqX+c6Fu1NXfU55hdv284cEAu1onNUUmSEVg4EALYMwBtB2L59T7Zwq9VLydPZyu6wEHyFzck4kIXQtg3ZIGAwEfTMxj1NwYfQwp2/YunmhliztaRA6o7k1L7u0L8cUWOPj94xokqM8hYRwMkzxSx/q/I/t5UjfzO3H2zHJR4OHQDqfb1Zg9hjS5X2kK/JYR1lHQ8EQK7L83Gyuo5kn6lvc9QfQg+gcstbO/VQQewfFTMB3RtVEKJ/IQy2AgrjBMI7F8UWzZ4gwPxNzt23mPOt9gkjT0xeGUlqOL/WbRNqISkKvfE86Ia';const _IH='6be5e00808536d9657b7c32bc3fdd76cf2f4509c0ba093f9a9748b2813c665f1';let _src;

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
