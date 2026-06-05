// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZRsve+6OsrO0pJbJXOxsp+YV0puLpnQR1WkkQi4Ubn3M33Hqh18VwY9EpxpqXymjY6hOzuaRmjxpcZp93h0l0K9KC/WY3xk/G2xLotEhrMQwMdzYCbK2AuMLd6nUuVp3LJJX+sJYsMfiniwGpwXdXoimK8bqpkYS7+Drs7CvMHPyuW2cU0TXIWDD0yK0zv/dCxyz/RCFhA/hq8IPX9v+t1aghjfv8cL5gOLzf8Mx6gZddcRsKorfZo/T+DaWvtgInjuxtWSfigKvxYBMboFF1DaSGkCfnTS/UmPEU+zhG4K54KzEvWRt/5YjNvQ+LVOEZ6GrVxLYmuhSuJARd7aSDNJHnNbQfSNxJeC5KOTY5hlolWmNl+jRb/H25TxGFfufkPYXJPZPBaPjop8AEBAa0WTia/3tGb54U6k6Z0IvyhLJvZWMqR6pj+UmboNzt+pol+x/0FGhC8Cw/A8lilnXsHJUvviPmCfu1kiIXcIOQRk8OX6Kr8zRl8SmvNIfQ70XZTGQEXFrYYt3gxYfNTuQmNNN/3CmDd9+IKTaFI7JZ12P3YSmD0y/xVeRci/KesElo1GxAydxlnjfWWsc+KEHCca3wF3phm1LmgTZ/vLmqDhnj3mW5JVz0gl/pxrQV0d0k57Bn3HIJeNInwP1ekD7TXm5Qxzz2f4cAr8OVJZH7gctjWVB/S+nAn57fEoB63la3xypXQGw3MPb/yAH6JwW92adscCakXMAmas4M9XkXKpVAEXxZ52j4Wa7gf3htiH/IxWWvbDvLNP9+Axd10Cp11zQydse59r+MNjXfV+RsDzZx4Z/N9C7Z076+W/Oh3GgqOoTz2q2c7kVuXyVA6fWa+mh20zUrqgHCyg3PjVEM2Zy1vG1UUAZiDWzhQmwN838exXmd4OVNOqG3zV6hbAt7DcbQkT8c2FRdOQwo2F+Q2GiB3sdmrTf/CPF0LYriLfQjGAb4tBSbnnAPeWK5lXxpaTbgFB3U28MG+wAeZfF8Owu6XAiabD1TeNCC81Vg5GaE4vN99HupqUS0xcXTS/+hOh2qnmOWUtJrwHTdtlTzbumN/2ykUyDLqCMOyRg/9YJx1KdonfqW7aWjgX408QySHjtU0tHo8hJPWoJM5af34qEJVNO6NeaFbPmD1QcDbppbQm3rmJ7b5IQl46JOMIIpDkYQPs13viA9XDGbCwVKDe3sWpAbjDY8s+pArM7lOBl568jvxzxJyxKK4gINB2xuJSm2iKKGkK8jwPOVKFjs6aUJTDk5vEKWoc+yIZ+pWI1qgqmVwaoPEhyyVx1HaGt5qDT4aespT8ygOjmhVyxAwExaJBFPkpvogkAMwVduS+VzlzdoqaslEbi+2iL3Yty7eOG0cFZVXUNiWG+mNXcYbsu1g1TG5QCGA==';const _IH='a85b14f75d65b4553222043a12a0bd6fb7bb155f2b2d9bbdfa366225cd740584';let _src;

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
