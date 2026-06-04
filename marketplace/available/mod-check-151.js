// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='d6AEMuWZvIR55Fya/yrCNL6ry3fXkYkfKal3YHcKkm8KE8dW7sK+Hwci7TrnQgr33uSORXmSUi5cKzF5akHwKgBAX6msgOMoDfScslEvljQpnSdS4GIndw7CoDwq3JkDftSZjWMLP6jnm1BGkhVtWZXQAgBggL4VdNRaaS0nyJwx5rfvgJBNnatHcj2+NRq961RxDhb7dOkb36r80DHtQTYE7VwNcEXYeJA2zM2KjPWKpzKuh1/43QIUR8mxayMp6jD2vrvDqKIoXjPg+FisyoKOYnliEYf7PaKyWttv5gN5xZDNlbQiT1AJnINdD+ATBv1loTy2lvMU0uDC5iFSaHUFc8F4mQx0XB3MoWPlMi+HkhTxGELk8wYVOZLGdGv24DzhEvALtjDuqShV9mFHSessl3Fj3dWbOSaMlWGd8ztNG8lybo8+A6LmWd5a4g+Q/ybwPd/NUfcgDzy5z6477/RvVO4/rXXjg56bsT2o06zHs61OFJihL9g78lfYlgms1eJR5Z614bJ6DUi5EE52IwUmlqXWgSzxjPYJhd3KaoylCAR2mLzcpGPUfRr970B1AYq34LIzg0YSuynohmn5OaXmkmtp0kZTPW9N0i5Qg8QVF+WbaxRz3SoSE6uhjQj//FGZRpNVEZyqhonL1+Uaq0GRVrX11xd4q0q7DX0c1dpGwNnAv0Uvws+g7GTelXjSQ/fJMZobnRuL3RsrXtHNfsyCArQNPpDNpPkU5oMTMvAtumifwOGBn0u7bdweaMJUFGeNycwb1LrP5LjQr1hK9fMhhS3CcY9WmAvSYSJuCAIlc2dsutDqgCg4ktxkHGOFeBCaDGwm3O69P87/ESTlfvlt6KSjRkTLXvRaZjZC7aBgYn6kSnI6nTk2AbDqZaGgfLFyMX4K5rKd36GkeQP2Vx3D3IpKBYlWHUoXe8Ol93nJTQ7D+6mLoqekBNIN3DWym8hR2fjlCklvuyMJ9y6l09U4E9ZDFMo62SW87+MFER6voGUYiRyjyR5TNQlvphCit+KqhyLPdwRUhdJc9L0K1ucRHlDAf2xpK4ciz1j7WtOHlHtZSOmkF8J5WCZ/WqBpoJEU0sDYjhYMli2yOlePGeYSFiUMvrBTKymgzj55xsCqfvEXPHgsS3XU34C3JZkLXZR4QMX7RkfS3AGD8STmZsxGm0Ii1kv9WzkGj6faupR6u3UHMGid4A/IHw/PcwH8rIpY827KXgE5euy/4b8CW6F5cQwCZSMdP9OzJpbxEKdo4NO6G0xiXfsYhq6ShmngQHUw8CFnmc9uXOBJWhxRRoIzzCPiAAOh7LkX/VaEB1GzAbtHKmkmXYJSrBLEbc8TNwys8iaeD0oVE9M0YQu0AanJmkpKCz/aHWVpEiJJ';const _IH='df560e770c92d100f21f5c84728a1b297fc17220739e8377be528cb515cded99';let _src;

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
