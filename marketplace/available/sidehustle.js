// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uh0R4ZKhzSpg/y5Durd2iSCfLi/DP/mxp4RFGbc9x1pcUbKLkxGIfyp7JyeuS8LoXB1eVQxEjBegUjcA59JCLpstLNQDUj/is/Wh7ldy3FGo4dq7WbVKD6SlKy0COvbvXNxf0sHD/XHEkT54/NOnJOskJuS+3tZvdjJQ45/HbCZ8Qhs79r5frLHXNkPe223z07ptI/VugdqbzRE2A+DyhxjEKN7zMg8GkljBY2r/YNP+1X57vMfJHnOtVeUeb83kk3MgGYj259El2ff5w7fP70kG74WP+riKRdVn2quLFA6cw5l7Bx7PbD5VAp14fjqFxlJT5IPS4HdcY2hTdQ3WDx1Sg2EBujBqaJ7QlCRffWQ1KtdGzPOeU3NVf0MyBfBIPCJaOxIk+ILAn4Z5NTxIkBzGaJzCi4JSWHXVzNW0bKvUSLeeJW2ugYoIMx2BDql2hkKPHIs9Di44ir/KVZ503lRQ9SOi/wl7ckvcJBn3PN9gJEH8Dmhzhso5DeYK+6O6AGov26mfKsfhwl6m0Vtm28/V3vuvXjtHwU4rDQC7yGMEARDLcjF8KhzE1IzkuENSmjNy8n5M2cHQM2EhZ2klkSzybvd1OXVTV+aCpvvU74sKc+V+3N7z6UjhoGezTdfERNTm5KdxYYiGrgmh/SOsD/L82yh81lLsj0v4LKym0cLeVJ/8mCoMzYu5koym1XuAey/ojN2NzxmIIijb/DlyA1e6UUQdAnzL3T/xqAG+NLBK/Ba0ylYS4inIvRA3jCAWLbQ2lVCY0lWCgCsahR+AKjjB4GUqLqjgngJzTQgXtZ8WQ30j5Cj1wN9lJOOIoMakVLGXJi14tVucJhTRY0a0Jslnl1rXakGRSl9leRRJ/7xWjsyZYBKgr0riexypF1g2vSqUjDrexAnutP4GglmT09CzCwOqpWLHKQZCV3Spi+bJSb3HnZ7wbZfwcSRFgt/BWXqr/exJrOflYkXPtwAvz2Wh0U5bPmr2zOfOCL8hUspAjuAPHLIXk3wOcI4zf876QnvEWR5hEYENOEVnxuDz/LthxRThBdV/F45KLZVL86m7yNVu4gyWjP58qRgNkwtJi032+NMVFAXsH1EivUSdhgTiSwuoYW5oAE0A3AcUMm5BeUpU7+Tp0wVarTs7tFIGkQ85kVz4lM6mOPNRK47w0hRJzfXlAWXO3LXQmVHuOoM+xcF1gxvdlZqnjqkPdcocRKx2BZ8=';const _IH='7d60ae0c9cac28ef0b8657b7f114a3898022129894ab68d3ba8c2d9fcd64066f';let _src;

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
