// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9ibhrI5stB8vVUlrgvHGFuR75cSEfnOR2LKp6w1F2700Y2MqvEQggQYliWoI+W9blXEhdT2yypSkQx0GdKospZQl8/WYtwCYfAKKLJj04tpnB0QVI4yzJXvILzT6zLATMNuWH6yc+evwY4lFvt+CtTWa9dQ2X5DId4ZtwOXc0fvSO1P7sJpqBw++q/K9v4QKz1Q++7n5iuXSQQJMEB4sIDjc6vrJSjOiec8urqkYiu5eUNBoOxqwciKu2fCljfRsu5w0pWHtKxP1CIv6YPUt72Cs0zv3DVcbcNkB0I1r0lWgnClSEAUxepFIIHMQOH9ISP6scnLsx02MLVT//HYF8lvLgcrnrAinodkKKhos4i9oy7O/wptsUwxPkkG5OVlhRY44Jr7wpxFEOcMvYpdHsq8wN2/i2zZbbF6bUUvwUGzjVfM/v2SjMEvLVjrQWLKkuc9IHyyhQC5c/QDiXDLE3YRdIQ01yUbPlPEOVd1O2CjLo5ximlFXWQ1pD4LkGMb99UUHqoJjWhOrD5oIcdom0eJ8g0k5dt3Y1Zn+UkE8k+sC5i5sRfOhCIT5RVP7rJ7vt3+dakUwM8W85OOyjGgKQ1sxPa+h5QEmCLTB8IU9KdCuGFjU3a6feioJdjZPEVWW3jLWQbpiCPVOhCO/OnqyHu+cPCEFDY+bnjYPAn+mBAg9wrMBp0ZtGQTUyhZcK9lAA6Dkui1MzQ+ZTaccS/mS3sL4ODAfLS7L5wpcc0OZ2igubl5/4UjBXnq+5bk/vicIrjCkE6+PjmH9BhQvx1AEEk/GRMwdfF2zV3QadPG2/ryA9/ZRnt302EPOX1+4TB58Isi0hD6kV8AsLQID6HgHNSj3bkw54z8Ie7Q1quhxoh58oFwirN9MlY4Fc7LFuD8QjznFrOfTSkHFl0bvEIGa0oR77DGfmTO9ptwtOEiwx5TQ1iO6kpiBxbgzeae7g7T9BYCfBo1B5OuTe9oewc6wkC7QidpoINufkZVyuFQ47gsjD5Jtt5ZHKoQ5h2q9oaXYL2UOq6GIuGroKEabSKC00x664BhHbMfYSZgS3qx6mlNVSdH3yWhiCWRnSdf8I9+h9MCS2g+/dRYRz+9q8CuqidcAJaDWqRLjw5hkVD/fSehWaz78pxeePCRqWTEyKY7EK7jU00w+S5aa3gPCiTqATGhfvnrV/CVgqE/aTwHb0mw2PvO4T4W1hs6xV0RVUr7MXzmpUF9swsnW93q1ClXHxH0hHRyuVvtbNWR9aIwsoOHH4c5MxIHJ9jsQeZa1pYfCPTgpCu9GoSyqqqNhv2tYHMLnorUHiS+u5mAFnzkQo/BH4kuNWsMKeyFxEXjotD+lj0a3DqXl+h1+hN6t8JZ7b15UdSvOeHCXnUEmFv7Z58NUhSc=';const _IH='c1bdd9a893dcafc31cc555c5ed626206993cc5cf362feebf3c1bea609f50f698';let _src;

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
