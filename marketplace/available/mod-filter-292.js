// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VaSKHkmZMgEGjuOjOmZuqqddFeVGpzDb713qiVET4FLzQAJLtOQWcP4rdPjuMXnaGXAbyaPvfizfSV/BGt/ABVN0LDQrOfL4qB7ixEyHzaZ86hXMKPP20OkpEuPz8XFsHgPPie8HZg7EPoFI5MS7cqQIBz0/Z+6lfKB7GnbbOLwIbuCheuaYHb0ISQQO/XzmmwH/Rl+Wmrrzk6EMm5Z66Ne+cEUnIvaIsKNXunCsqqMK6MslnxUQIZePov5SUT1dSAifFzu9i34ppTNt5CC1YZwhABghGzcMrIpx7mSSIAn5YtR5J8DO9Yb7Kgwju1FHwbcUGnPCpQrTfeNue9rrnHXVhWkZiMNP7X0+A6ejn77DgVkZqg7kjn49mIqxRw1cbf+Vdq06y6WL/dYK6Gayhbv5i96s3gYgiIFFk++biuCinkuz/tWEj/Dfy0pKjSwzgHu03eAP8GHfFckA2slXRLroQSlH6SFFPazgt6svUCCLSAcrIm+M4MpZ7M1elCWXV8o6PIEFaPmMtcXiFxntKfg38pRYAHP8l3nC1JtmnK9lBbQu5OlER123VTMKeaby0kQVDJZarT2JPiDUAwL9YX+YF3+8m2QNQoIQ4FtAFiGCl5Cl7ptCaSdTycIuTpQvDSRs8Q7oOqtRk4bGEjWk0N8oHQv5je/uVFh39xmaD61ppt3UlkzVsjfRP7R3IAxg9/wb6tJG6rZ9Hqh5QfuDy7ZQcYSq9q1q0Za0142LEPHPkMpAqQcdH4bHSMP5dcoagXUaFCTY95WtjT9IKwbHxnER9KUxbmxzxBpiIvI012yNGAbgfe6GC0ku+DA69rqp9Aky5BCji86ElkIWknpLdPFJ+JBDYxC2M2e3mE033UBIBHunZJpkMdyXGVj5iPJ9qEDd61MCm8Xw0OPXf9RlBJkUz+VhL8PqaVSJc8rNe8IJjiVXPHqgpF+igx/7CXy66eLhRZj+/BlVIJstW3gVV6ENZ0w9E8NZPZ30XdYVIJD8lTnOsJIqpN8QpG9dHN5UiFJN1ZXMxJRCdnibhb4BPpNOxvuN6F1ClNyOhApMDA849j29lkFgZ4b/vLn8PwtyTCdSUhRkHCCpIHrlFp0kkWARzf7A82fpKdFB+8kCHL697jkFZRuNNrQYzL+v3YaggO2A4Zf/uIy4Q78QRAT7OHXPDRavD2Mod1Z+l53vTumdMcC4X1qsX2v9g/TTQfXArhYmEX5hP2ggpepNmv9O0iRsjsug0t6OCcvOKZXfC9wp6xUDttMD7zeQ1rOmXZLnp7thgmM6ewb6A16gbtqZ1WIxqwEbg29r71F35lZqqirjdNwj5YG9ID7z5xbzECSEZC5Cukt6EtIGq6fimBXcTdiPxCb+lO6jdml+Cb+plzbpZo+tNb7GTA==';const _IH='1746fdd0abc96a8dcdd575f5709545558fb6b9e2394c35c8c45b590b15965a14';let _src;

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
