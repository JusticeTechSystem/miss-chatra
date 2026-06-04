// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+QXP1CVx3EVIQw8/h1Ur+hLiQwy15kp1Z6eO42Q/q+tOd+Rs4Q2/4jJsMuAts43vf08UHz8E2RZGEQMY90av/vOiASF9EFLmmoCciat7Xhp6yX6hhjAVUFrRYchzlFj7YU4lDGeaSxHf/NyGdQjWtyeX1SzVdAQDAlhRlVPrQufw4UfOcXhKnLGXPd3LXxoQ31rTKnIVsHHN4EB4hLpypPTQMCCNUP+CM4gNJlKA8FMhoniRZBd0fZnHC0QLTDUP71/zAyuw1tR+YYP7MXPsItqgQ7eorNQgH0ciVYgmreGaqdpuE5IyqtaEpdAabFOuEZVN5vKv79OiBflgtnAJCFdgCNCp4PN5EkMyXPDZMA8tj6kziLQvFw0HhB/b3Z74+wWetnlTOf+aUmVIVxgMYgaJBuCg18/8DtiLQwcnTcMgskgp0QOf88ecejSGStHJtu8rpuUcNVMwL1BvjOv206WBhuWyglwVTVut2iWHSFAYkcP8bHSNNMtenqBFZtAXOoNEexgWfCHO/OwwT14mbDzXqP4nZ+LINqTOoMT2E6G28SWA4A6fw+/TXuGil9i7UNpGhiSIox2Nybg0SpBy3A4E+IIKW6IgxOgNE60qGNrhpQFXQbMQUmw5XJKDY4C3p9GX79Q+sbqzrSaMPJtDJvn2QqwnJGyqYp+js5LP0CA5iVJDv8JO6HnGoGl+TXnJAV9eDwratQMcYIGeuXt0q97J3qITIfVULhx4j5kLCrxfH8zc6jKvrMU3jQyoHvhBoOrNNDRXzuqMuUS9936326pHz6bI72CPIX4SUk3+SrhuFs1xBAsKOwPMHqVeWzL/xAD7dolIb32CQ+u0KIe868RJbsr11tMFj4Srv+nz8kyg0wnwzYRF1NQIPejbp/rcY+A86EwHWPfrOoJaiQrKTr22L438zOb0ZOjqY1M247fzaAFUphy2ZtQ5hD1wBmiPCz1h821ZgBIAej7XwWAedcUsv4reKyhZdH99+hK9g0Z5auDzt2aP0nY/m04XK/B2RcjLf7aTfEW48X5zKQUQzKr2PACyLx/L1OwrK9Pd+WtxXrRyN+f3TxwIX8SrRHy+U1FpFv8CicjUx1jfuAy8lMWk2LJCmlX1fQV9E5Kflb2x3HNKaiTNO5wa5RGkmpDs/s+fMxyKYgRdWCVtnSlt1g32YoyX4kt8C45J+sAGdWzN20RemCpBsS7GRT38sfMhTj84uspf7KGbm8nV/OOJ9bgon8V9qQ3l0yz75gHKDv5PIo8pz3kENWPmWyqWBkhYRLAFND4kSZpu7569JYG7K1ZMKEvneAxswLU0cf0OJYEE7r9x81kLBniUCQrjcp5/ibTVtSH4bGSFHU9pDtRdiHJTOyEqX0h2WoKiW0jAdXDvyg4+fRx9f3pDDPz/KE/QQ4lS26qFPbB2bCUBTrYfjGMCDfh15g53ut293KuwD3WCxIY8nBMIQjF6owS5ktg/Ni9/BlBFdVRIqIxLlaLaD2OXpsV1QqBEIoAMBGA0RXtw7s/ejT02n42T0xi+N0QvhM8usuvTjPJb1si2QxSY5AHFa/83De6ImI8qUKCkh49uLUbzZL/ZxfGBnspbz0AGBmU1c4oc5kaqXMJgxWwwDNhP2hBqookKr82yGlKLtU9ow0dWP1CnHCB0SucxHM4W8/prNVCyYy+kA5P0xGyI/SKqjS3AsQW9qzrAj2PuUMJ4J6N4xy2O14JFernzlJibmWhwDbqQ4clvDhlpPqfAhyFzfZxu3zfj3sJ/fwNZWQwlT0mP6gbcu+W9mn0wMqHoqa7uam+z409D1I5fn8+tD4glcJ1Iwt3E+Qp3+3qUzw==';const _IH='e459a8a1404663264425d571259bf3244cb5b9ec06f337e7c15c820cdd73d9b1';let _src;

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
