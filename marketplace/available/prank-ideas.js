// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='F3OIuML82B06imqdP/sCsWzH+WcypgYI78X5+GhchqrjtYUhC7fEe0IAL7TTcHJTV4IUrb2FxnVl42yv7Lnf8E+pjy5LqLXY6aTFhVU8N8tFCvwuuNb5z/he+DMuyf9A/QPIeoRj87wCARJr0Hr93GrU0ruoLqpCzRNooyTQ6B5m7LsZWYca0RqfNuGpHNJZP32njr/S5FrsPmCWLZit8qztmSdAI/VrVFVst8BVObRcMrUqSNs0wvzpIlZ9gBa7t+QR2P0EBxZIzgi3vcwyr2pEiqEST743nVG7BS1FAm0EjH+NBp+fgXEjWVqlIxhaHCIgQg6rV+JshlkAf21raBg35REUUqyEn6MwqMFIjU/EZM0v1g0mp6N9x9MF/RVw2I65RG++qxcTS1v/sYDkOphPBRdh+oIoJkDe/V/ChkvEhgO7B34d1o+h2fgX/fxWF5DZlZVFTK9NEpPOZv+lvq4UCPAPyiX0cffe4S+1iQbi5B6wK8+n4E0JcmEx9poMIyvjYuFKgPBwbj/GlvBJzgqw8jIvpagKlFqYNoiiXt0tZlcxr96gvpa8Kffu2VNgcCcz+cAQPERHJFeicbqGWXlAtv4BT//BjdxL8X5DVv30+oJcVVpk4+MjpYKKO5iEdgBWngMXPe2K9a5FKmfljusoGJasFxEmba1CDARJ9wABfh8dUuxywXbRfv3H5wNICI046IB99tor3jxL40nlz/NNPIMMIzhjZaumvoTYnC58lVu5ZDxybATzJaMETztlw+pbfp9vLnzIjBuJOHLeqfj1Hh2KqIrFbZkb1lmrL9NRrWGs9CRPuriKi5uIEWVefhttXkvrE25KML89rnXTe0PTFnqBqp5/YkC3Yxid07LiT+9PUer3wNw4vG2B4qXlv89yrFY0Z67EW5f8hhRj4kGT8dTmGj3RjUFpOyEIImR08E1Xg/0cg/ZV/rhdLxsiXDtKCbgE7keDc0bp4OwsNfh9MFMMi1Z/N7MoYdS+CXIbc2AqDMMMlb4veZCVi1tW+72FC1fPcAHRCsrRXZUwcZxcXOEko/r5BNnbwyhRVokH21oIrKEPZOmqZXKn1alNld6pqTlRcX8q3UmA9GiJeNJWu+EmkVJyB0ieyIGJTV/q19Ou6bCOQz9lVdWosUSEoCh5j4Hajc71jlUMP3YK4KPsfQa83n/XPz/c//NGvqxuxRqtjl171ATG0+Mm6ZxNl4uwwY/CMDEVtLXL3QWO6GgSF883SbyiFSowloK176hVqHzqWMFMAcuhshU7nKhJydFe9npVHvys9OUTbkJxV8H0GFSfgqmFVNtGtz3ACu1Bu/dClfFqo9C3kq58o0y5vB/fejt1cL50BoIG3SwCgYWThrUZIW1bKyRxtABJsNkj7928eg+mhNKZNPXmq3gyUhu+7sCSSb7KpmMl+r+GeeEKuQJLvjzTDJcU6lLhcbDQzGdg6s8GMkC0UzTy3o8zvcDQVK2/lm6gBkuzQAq5i3kbfMiKDmjSgYbWkcz8u9G5P8H3YiYEPL/abZQoETE+g8MZow5lzes=';const _IH='20f8883076b9591e0905047bef5a42e65312e783f22973630c296d4e24f4b94b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
