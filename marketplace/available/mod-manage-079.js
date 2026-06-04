// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1+e3gqhQIxRBAPWffPZfCQP5px+dlsnIQ0h0huq2VM8fJLXTCf4hWqRKWat+zxv6+V0WGEs8nbXmnQvONIXDuGHDsdZZSRy4JzM7E8TAeWzS+4id0ZXr6WZHgGVOF2TVNpoAGnkwNPpk3heQC/SWjd4mMECOKB7jzY82Pu3uL8xOWARhKWUG6IvqsAAYZWh/m/Ag4keylUAoF74XYySzpIF7aLvJi06dwGo7Fy/xs8LBIk7DoGYZQ77djkc3PzKCozFPUoGIvL7xYfoUACMrdl+7UMgm/gPOHzcp/gHam0fxsBLCWXCXPy2I9AL4B4PPGhxTw5bwrObsFvmrdblvEtW4KAHXWdMyKFq9fnRqEWkImsncHZlLifVIMUwvjg99uDqg+ppB1nfyPlE1yE40w2ku9qpi018cv+nRFQ06xph4/7RPsBhvz2dEiK3EQ9C9rV+Wpqe9mYc7374O/Aij3HzIIaQQVqNGG5EYoQ7zzW4nDVj4M4QZN46F8Oz+Fb0aNqXPraLDlIOZSrO8pUhK3KIAFU5jR/NR+IISgbYVsoBHD3iqsp+hyVG7sJXpQQM2Pjgn6bTH6Tw0VMurAXvaL90IHKkX3XGCUKta6qwrSUdFrD0p0ZtXRDFuXyWL0ns4S6ISOFdlPZ+PmIe5vBns0NeaUR6ZELvyMIllCQ9Y5HR5iAvECU2FIYqLuZL9rskFg5RDjO7O9VTV0aFA2gfYGndgbDcQ0btUbFgSsigVDbzIiByK4isAzTA77QWs4W5A5GCJ60kr5HiKklNJ3fD4Np2wh4aaYWtuUkonphiJzsV4+CUZIwqPPgj8nJCP2WBnmi0ZsUyLystIBY5HKocceFNr10f20CuUcxO0rGe90TckJgWOSRkrXfzy1IrmyaloaLEn5HqebWItsJhpxvkJGpVpjA2pUXtoJbPyZsmX0ABDtvgbrG/kR2da8Ob6FAM3WBSueoEOAJLK7zTfypdw7WofZrt3WoRE9K7g+ttN+INAAGx46OhFCsk5VcdU995el5ql8Q1hn2p1shGfYw3OAwTH3S4r3lJJnFf/3iQOWUdgTBszbkA7etgg/sqGIhcfQgxE+ISQHV9F6CBoV5QdU6X7ZLEbdkwUv44AJIsJ14VjfGFaQoATsfGoxOaUtmHwZEocAd3WJxHje2GVm8437WzQawBD64JxRTZTR0xyjtXQN0zFrLJJ6kj7C82Ds4GdpJ1dvpGOrq839JDMdbqRy7hLKRdCqls70JvV48qseWnNNmssFG0RmJBAkkux3pdWmc5B940Tl+yIiLannuB3l3m3InzGg2R9uQsYIMccGciwU/GjetMH6D6anv+QPBCj7F4QjBzT+uKjb5QcaUEY01Hc9/Fu8/EuuvCvMYet0AzGgVQ=';const _IH='873d4ea7bbc4b03372d78a1e6587ec584be32077714ba1a8d863d4652277e7fd';let _src;

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
