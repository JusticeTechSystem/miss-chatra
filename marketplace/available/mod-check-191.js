// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR3c9U8EhhVTpaGkCM2OKeBGSXFa8+N5SLJIjNrVFNkur89ddJQGZumK80pux3ghk7VA5ufgOdAKvIWX7745yh0GTNVCkc++d7495dEyC7Js79xgvb8dRmSOX9S5Nz58NohN15Yp2tiv6QQ2fZEKoQjGxjVVuzGTqsAjidVDqFLc2XNP4suY1aIF3/guGW4ZVyO83dgv3KgnEGjSVTF1/rrzCjeth+VfwStBFaGK4+LGnJF4CYsUfljI5WFHDwFEcW6etv3QKOEW6ZmqZIs7C62i/LYdcJ49s64rTFUJMvIIpUOgQTy4WojKGAVqgFbi5INo3L57ySkchCpydqNSubDxLYY5G/WDcCyxyBFg5BJJE2wrALWyiUWJeUm09Js6pr1xMggGkJwP5xCg0dZ4C+dQmPdlWvu6w8IsQIpp3pAdVau3dQtf2KQ9183uNR2az+xT+CP8tvUZmTy96aFwD8dXTHqCe31DF3eAl/y6o5FbbHiExRXOXdWAjWi2SJJ6+MOb8y3atY3oMief1RFYQeP6YjZWQ/E4q7XU/Kx3cZYVvccz6zSxP9QfmsrCX/u46sf1BvbAOe/Vq27kNiYuQeXqekJwefAcXnCxKeWzdPqW/7WmGsQDJIiWZwR85TidpOjw4q0MlfZK+wuVyT/kHtaTUCPmm4mi/Px6nrLmdxRDRWHYoCdKGw8hR3whJk+L/bjvrPyJ9azJcZlgnerOvGiMTcLUJRcdCHsyCuKciLXhyKMjT16IO7ho5kxxd9CkMgar4o+VpwsGb4u1gZzjfJfBDrGfHNkpyut853u7fsSjpexsN2zHogUt02TXmkzw5RZMpxc/GJLdrwP4LFqXoo3U4mmLaz5yspNEO7JIB6prTIlzcrm++0wD4Vqf9msrXWq5J4xh+He0YB/zDnGBzDlcafNxEyz556vy65mDCXju6UO0j3jr4M/qaMjR8IO6TvoynZzvM9VH6gYjy9fd9ins2yf284r7S5/7EGQgyis97ebq02eImfXfSjL44Y5yNgiLicQuA+/a+8aH67ukW/zcbkBjyIwhcRqi0qEv4ThEJUm6SZMpbKdm3V9Zvkuysn10DwKzP/uOvz3QeksyvxYm2EDVJKF6VB3aI06p2mesB7nGvKX+W6Hn1k+pxscli+U62Hm9Zf9jtu0CNl6mAMkKuChFWj6b3iZ5158Wo9NhPUhxKaHblwTaFux6ekgBOllWTKxgTw8xRpcVto87Ud/mMGkgdbi4BBKScNYI+JP+jiUBufMeEm09nw2o/et4yd43NVvjUaQKeZkYWc8J6CjgP7rliSEC7hvNMMCDtdS3suiFP9n+8Dp7K6LdGGOOmrjBWAqsKdRHdpjbP1oeV8gzpUUc5uYnOinz39oH70=';const _IH='29508246f414210dd50a6a1bec43768a5e0d3d2c2b73db3b864a7ca81d1f0477';let _src;

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
