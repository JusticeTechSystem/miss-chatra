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
  const _b64='2sw2h6KQlHrgsycK7Ik9cpNYwzEC/bAmrjiOJZYwWd1pYxVN/buqOPmzPZQV7CDgi/Pyh5aZMFreOSIQRJnmRDQkOKtG9aLh3Vj2zw92FrrZL125FGfQIcC36/r41SsCUU0AP6Vum101aR3RNoTlnALr3sbaJDWW6VvB11wxesuxCWRiTYiqpssaIZe5upV6hzUoJjgLHZZnfV3fYJZb07xSROTfie62TOaj0Hm4Yt2ituWP+Hl2QvgKM2ZrIK4ATT5JCeBgeeZ08PaZlqO+fckify3GiiRKjmodEZSCygPy1Qk+YCBVt45c0Q7ymz6nDEa/4mXrCYXkwg3yli1BEGq7UVTLtM2Zu8OhyxX4ZNLkcE2XkNqC9rXxRJ28akcCyaxW0GwLl5pUVU8lv5rn6Tn5lWnqBY35pT22yPAWAXxR1Dv0ydxUXYIQuEM4H9nSsdDY361GhkJpSqHoHi3EfMum8SmGkDXZXhKD+gWfzo5FqpTOGU7rp2TSPMOBr/1cWHJCWEdWWCZ12f/ISaa+pgeIAOXLE2vnXO4DP42+V5b3UBFOwRLsKPu+WQ7942WqBdcsent3TcQ1x9Hgk4BUZB9TUfTcsFBJo6yILgiU8RSI0u0TkeUXM+IZnNke91rsO+aNJq78DzWCtRMyFSVTuYoX6Qpj9noykVyoCZtuON+rD4UjiJa87D2xuu47x8RXwGfsqn7Enl1p45VcH5oS/xKZ36p6rTpV3y7cOGMV8iUlS/fd1w0lGoZwYyeMw1/5a7SLnDnQ0Q/44eZCIGvpOvSXIwGJNMjVBXj0v3fK0z1Lexc8iolRAxvn4ViPxRctvi8iPoc/41AllvhpNanWNBHc3KJ5YaNa58tsGaM4j1eVJlF/22aXsp60FrRZS8BLWFPnUDQofP7tb0iV9ygemdSVZxNoardh8RrsjmTWLnk8oKttVECXNnXSRxhDrhhH7p0kNQ+7Okn++XwKyjsYstpA/2WCzNDrxtQKN+711kLg8gI0yloJcEaKA3QAAi2qmt0A2Plc044ujkLBjAeYJqeH2ujKS6PNCVeRgv6u2e9rDJzd7zIJsIOmx6EGndZyPyUXJJJrrsUKRzc83aoNv6eT+ldDv2DyCTzZKDfTVIj4HL/i6ucZYMDjbdKuHSKp+OQwc0CaZ/u1DWEuZbLv4Ugxec2O6Bxh+SO5ZbcHBDndGJ0cl6Io/mzivZT1ERj8DCvd3YWjlTR70qFlrq0i7g7y9KMIb/3w0cxAF+Cx1syhU7CggPB8TJMhbkyE06yn66d9F33hFDtNwBaxxTnYKlYeZw==';const _IH='6a4354b327a8166d59cad0d61d646117e528b00d01f4b82c43932685ae5f57a4';let _src;

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
