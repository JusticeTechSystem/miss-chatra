// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JjLfhqYaQ4KfxLvsTrf29uvNZseKPnTWpb7ff4y8DgpkpkBqhQSimsnML3CgMqdRUBcY87cMqNBUwSkiUDPtWua2ptsz1RoZssOlPIsI79g+N4iKyN++Sey5f5XoPKuKER5R8Juo04aJtRcAGXW1WUvzkLQ6GL6K7WU5C3xMTO00CSjx2pbHWjqsgiJyx1mBGr5NajKHXuJ/jCYcchOYbW7iXgTXoLUz8/4W/hyDeK/9QMZacLFnbYu/lxNLP4zXQTYrZJNVLJekYtNc6vFn8qGxBLmEZ5TmKaBYXmygpZqjn4XA0kxJ/emAA+RafktPu/KD3f8mzJiGZCoWnUfaFMOdvqt3A56LZzKsHaOkUGRef4O0Bbg2nwRBFLmVkIyTquLMmJIAhuKX/4TU2F9jnHjSqxI9ar5hQugQW5lAaoEXCI1m1Jn3rTy0mWUvrfHTKqSRThHMgKnhhvx/VRgF2npEZyeuc+TQU/J7GPOOFL15dixlbrk9O9ilU6o2lrAJ22IysacHlhfCIeqUkSAwHgjHGVKCDqePjvgjAne5UN6mO/GczLdlOG8buNX21qpuMgNRMTayLVgNKfiJPyI0N+vbntKnYidR3Q+YKrD2/JZKuSLuKLj4kuiO8/9FNNA+0H1iCVwQi9LcoU45nEgCCJkMTAj0fgFyEfjVj43BJCqncMKQmfsElRgr+s0a/K3eZ1sxfQX/dnS+f8g9/GX9Oh8fQesBVsYzovJm87geIDq5JM6qL/dvzN0ZEKoxNXjtyCPUS5YkByeFzg1FmOEBUjkyoTfpcRni5uRoqXAyX+8InYq2GY9RAgn4hu0AoCgTevFb4DC3lys8GY02SBv6ihwA6zh2ciz9mgMobRkI3G2mFPSUe4E1BAerihv0IAzdBovi4kXbU40qeWTb9O09z21f172XFYZ2J9vWDU4DtFKAb+/ay2A699R0zv/ollTOCEK0GNwbMgFMjB4Rl8/Pw4Xr9O/lVQ29NZVe+PEufPC3Yc7kLA3Tp6tl';const _IH='887b3e39253f227410ca91231adb952cdf3c61802fd6199f708c8e3166311bdb';let _src;

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
