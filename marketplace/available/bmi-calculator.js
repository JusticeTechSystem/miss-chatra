// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZQLnX6Co7DsvEP/XqEBzpsV1eV18tUlVQZRQgScfjntGythKoZms/r4iGgyND8RqkSmhlrmscOrqyWpgU1b4PeH8Ky7ClQqbqBafbCKkkGa4cyX+ZbdDt3DdhHlBeJfwe0IxTqW8RBWyy+8UXZEDjztQ+spYm+gx74YzK8mLYvDLP2hQ90RG3NSulCePNRkE5Af9kWpvAHuARlEXwQL74YT3ZSRIGT3VK4RyhcezVK6I+4jUaq20fly/DrkBDYMRa4NudiYHmexEZWt5XuLte73llPHFtuEwFaMh5F4LW7Uarp6QQf8M1eHGVNs+/FsnqY2GjEVOyb6ddFLUjeI6j+wqLMCC8YaUOb7v5aeuHfTdNwEzYgS/rtm2n79QBHBxJpfJ6SMmkjXtbCjB4NZtAgNT3jSXmPl/LJXd3P6V/EEVJbr5GNjRNj7g3cGICljrOY/1IfPjkvEXI9J23Z+jmeBO844xQLOoBAFM+o28V0527G2AAbazaNdsxhFoRc37O0ddVwpK7J9LZgKk6aHEp7OP6GlGovCkrq2acPRDVaXf924q15HAYhSf1YJ4VnrcCGdU5upV2lOztCW0/fPK4eko67WVvGTtT86N/2fFcga8SoOyTyPvXUF2I729ONHacthV01SXcXAySnh3aGdSfXYqhx/ram/i4kLudB4yVQ8PY5hBc7fKz/f6ijthj3F5kPd92BohFCnd+8C4Xmp36n9jtka8H1Hw9qoreaAo7mbv2lbHi8dtw8DitR1nrFS/pBjUyVV9+D2V5PYrM+JYS5at/Hu8adNmMLjSLxMeqd2qI5Us0b8AFu5UAdAbKX6yTiTAK41T+kPd4g5Z1r/9ZatRI5qAssite18we79jGoPRtbTG4d5vljqv1JFRr7FGCtiS6ZRuD3c+3AXVksISKIBnDTsZl8VaYL07+zIghuz0fo92f1IwNpAHtSnEWMpHcByU/oXGxyutgxR+vsMtMQFhZe2aDlS57lnkNl0FsGrpR6md0/SoSTkzCkvuC0RMBapkY5kXEnYuVrqCF91JVhqAHwUjnnvHQGfAVUa1e6TN3Hh1WZ8pf4guKSaMXDNIspPtGX/cGbd4bJbZ27qGXjC3sH2INMkhzDuX0d9hZvFzCx07xI3Lj2YYSyc6+1MXt1HzknlSCEgkdm5wf+BTdBQskbxBQvpu0Qz1TO2ci8cAXDKs+7lPb7eCZnHW2uoptMXRsK4+y4SElK+3xbDZ0gjVx3KQQOEajGyal/lEFTcmOgc89+BEjX12BhIPPT7fD9zIpc5U0cuKH+f/EQTiqZnt9Ctu7sxGCQTS8ertDhlj/aMumQbYfXOve1nXgxxkaWwYPn+al0Px27gZpd5QBlA6SCCOqHhpHx+cA0qUlARpe9wY49uUPXZ2tQSe/GYdWl4oashgM71mObFBbVNjI1w0zokt';const _IH='9482a29eaec11eb31e6b935a747b02d8436fdd8ea443fb54e514c9d50168a4c0';let _src;

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
