// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GTdS168pzD6kAh9ZDC0n15WJg8Hy1RcxYnKCiAlTbLa7iGNrsJPux0G42B9sAb83DnpL7BcIdehHdYxIrUqrDzKU21S4ye4U4mmolHYQec7WmgVFYony1Te0tqKy/NdGI9AIs6l6Vr2UBvu4Do8zRVV/fRA+fd45raaXivJVD+ea1t9vKSMPrBQ42HMwndjtKBGWN1Vb86RwB1v6alipM6yExmvd2s6Yy2xU8sJXGeLFceoGJU8bxun1vtDlew6ItjTJ6uLMW4HyZ7WUUlfdwL3sZVu90lSn+cQxL7jxtOwirxp9yT/eclZuzP8nraMyybk5rZEHMEJLDriZuy+GsPqdj23A931HKocl4mXWRa2M7iGJVz5wBp2D1/rkVnD+c2+ZmGiuGXmYxx2wQFQtXe89GlnCpC2I6KzcBTGeQ0n8N/L1rncaCUWa80mlwH30cK11noY20iRCPrphiBaS5dlrMZrZ5BGb3OyDpxlkNvE+a/q0gd71xQEFjatTLFBNx50KS1jMRNFtzJgmPi8kP4i4bVKKUHb/gTv7igGfT1wdv54LRBPTckkr1AL5IRUXZMxXziNwgAUqzwRSvpZIzuzxlM0NPINOCPR5GpZZPPs1vV3jX1LiJ0CZcvQKJaKGLKmkUTgOo+blt22jmlFV2APx6/gVfDjALWy2ynUBng4OFTMQLdV4WjPpjWj7gIa9qfzqhiTTvlcnRBFBAHHIoxsKmYZNgseT7qwW7hzHlzOemEB74Ihi/2lZB6dBE+onImOpaleNSajntCSHVstCclVVEgLHFv+HH13wnvyR1oe3tiTTfvYEn7XrL3QwJkwCswqn9ep+rU2sC9O7jVbH20V9n81YB9FjUM1+hNHTT8Ac3b0fgGN+H/UCG9Oh/KTBdHU5aEbGJU1i/DCtUKeWnArstL03VG8S1BacKripj0IdXDabuY2EjyYwKKV11OTbJRq9KdYDXCxAzQlylo0tPpDEsMxr7nkXnBJwBHLe1HYY9ppqlLMeAbkMAFTQcnChA3KEN6xciV4JGHHQAfVq2ndYuli+zuWzKCtxKJFfyCndOvYhlmtwyVHTxRIcGY2bkZXnmCZ/muKMvIjcK7rVhJMwoF4vyahKefdf/rcZ+21QI+Tqun0Tk5aJyjhJBtuGrH2TQXh4hgLM3ijb9UuLc1d2MyJ7O/xh2wbkcO+XP+W0U3RPJ8fWnwJk7FGEGQnuIrT9ez3KuDFOsR/gD8PiANd/+QQkxKqShfXCqLPnC0cvjdgPWXr6NkcxzH8h9iUmR+EF+NRwjLhwvr1Ur7uJDT92u766jD8hHXsqLthKQopgrN5jZ9wHZ3uj3KaQgISCv2Vd4luevWru8WhV4Iyzz/AGRdZLrMFK9uvCbRSPkDhcxVnk/uxs2aJxv3tj614+omgQUZghlkBgzIoHu5TjHlhl6N2w6JwvmT2J1zcY+2iUDaZbFeqksDrvgakbRh5er1J6MoNaTX/XdFzU1NEN/beo7ep+YslgMKR1RTm0s+FJt1YSwagKg+LOz7xCbNTjoy80eu70UfTSwGs1HgWQAxkj1sVHjBWYvv4wl+woTabYySrznlHx3dK4A9zGK9kl0iqTO8E/9P/+58ZGVB1xenL9y+0grsYZ8cshMadrnL23lsGR95riID0ypfXl9UZm0oqzlm6nmu0nBsGcSOePedrfb1GZzwpVhDs/FWHljR0kp8c4bn6lIC5ictWJUIvRkTyeLBy2YxZ4bI7BGZVSa7SLYzKzOC5i06nOm6O8aRgbPMjztYeC37CmFpMQVI9oSOZORG311llrZA0PvIM4CPuPXhiLcVh4OdgGyXvWbfZP5R0hSBZqVadMIGIlM+U=';const _IH='91756da1b73861888ba6a39eb6e40cd04b0fa3c455567d54cb2ea5e1d9ff588c';let _src;

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
