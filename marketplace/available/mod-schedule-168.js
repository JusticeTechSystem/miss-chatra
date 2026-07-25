// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSSKnAgzImxTmsgra33yMihb7tDIG9HuE9JLj+hPGRcFMgS0ECcZfVVakB01Gmm+rWRJZOpPfPXXP6Wik3Vb+9Ggb3sjkDNUPzJaCUOEijJV4wE4hO+857jqONi5wVWSMVDoQAkE5yRiTbMc4kMWbGeZ6rPVDn3bWqYs2+0hpRceCkvx4iqreq9RrRXS7vmFij1q1eKyq9hMVlRzOmtP+K9E/gKAPxKwX6Pjc8OoD6pvsB/q5jAmucme8GbUGijT+QlXPOPsKG9bu6kDDyrg57lZR6gMRY6xAGmGZZB2GlD9JLV2X4dsY4XQxO4MvhqxiXLzdqsCiX4XhCOU0awUfMoAR/lyLKjgDL2GBYdAOQLksygNjQS0gWYxOCSD9nyOjaFOBe0x0E5zj56S+WeWLxU6UG5oxHpophcC0W4tHtubIqW22kRQPj2ix88hVkMxtSVdh0iMoJSBmvEAag8Z9Q55dgyPydbRNuy4RPZeemKvLfdw0pgBsRdO5wPXXxsm+DpJ6yQN5oKuY5R+V3yl+T87OqGAafPUPUKAwq2A0PSEvyCuQFaml3ohB6lJ/SIAwEAC8pQYzKVN4fuqfZ2TDI52FZjEUmX+b5XIyxoZtsJl+8J/hpHh4G556vILC8RsJbE7BCivsho9RM+x+pptnws8bR8c22UBKybV6V/Izi5gKP/Zu48uBVC7EfaGLtJE9M83me5GipcaGahDGNbG+t+8iE3L+1JURh6Zr4vyL6OjndnPOlqiikCJjeNGj3l8HVDjZxc+JZMVho01pUR0tmWWdT/POuh0F2edj9rbOTXfFax6eiSPvidDhLGnBhwui3wFeOCvVsq0JjgRcRXn6tN6FMj7aBJwBqWTpDaratUzr+n7pop9Np/3n4QRxpWUCJdAyi0qnT8RZQJcVJmfjLidFIkn7kpjy9yqVGeRxls/jgLkO6japBMR4SqgCFrL3R3ELi3mI0klaGLKmsefsIqqYtBa+1ucV5+fdvT5PGFlwijU/mDLaeR+svPt7L0UDONYmKoOzt0thsqka/n9wkF/oLjw7xFYj2aUpKHZYJVcHqegK229fYKhQfqTr7ybeKIZLE70Rg2lOlOJl2GoHz8gGsl7pLnjEL3FVfj/GirdKwrKr9p1Ia5A6vz+AIWkXm0NAFkGiZkAZ4ZCNqsY4pUe1EbMRhUtEDrEU/DHEVZMTDB1pzlq1xWEn81Z0JOMgXm2YKmj/XsUuv/ywLKM3MMtUd826SygZ0ufyd2WpF2rY3v8Z5AdzyrCVSvXMEkzpDGMd1o4TJMWAe9O/k4BVx+orpAzgktaQ1Qq4k5Li9YUQpb6+TcqMVTJhcQOiu18WVXEFCuqq1R8Z5sR7V7D3qDwmmkdf7G0HomFdXd5GG1QRnTpJQeBZNbsQt5S6jj1Tlf+j3EPP084KczN+I=';const _IH='97ec3e6aae0c268a883adb206931aaaa21190a7dc64627d836640dd32ac1f809';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
