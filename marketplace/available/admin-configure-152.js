// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='K3sCOZ/ewJPt7hqgIqQ/RldRjv2XBPTbNF4g5LH8b8P5x9H9+bE6pcJWqgXjHqM5JDj9suDD0k/rj3wQNjoprqqd8sZ2NW3jY9VZ66j+zT8w6pfNaZs39ABTHFPASt+6RKCFYuZKehog3mkXJ7D/EM/r7AQrRGf+QXANCK+x0936rB+A5dePNB03By7FJvpDIf4nggrRa47J43BGckt/lJB3EtP5ZU2yGNwFMCPbiWQRX3o8v0zK8x22CIznIWosoGMHmyFTxciYRdxh2qZrIuPc22D7is/jLqVbfKOeW3PjgLAHZUtXgxT/tx5E2vS2bJzVySmynNriGk287+uhjnQTCgblzJPrcVid5+zkWELgJwjrG5HWcrB9PGxYgFKbIXaFU9F2HBzxEeLSANhBi5idQP0jYn+QfR8RbM2Z3bVAwYq4jVzdctS4oAYqxNwdzWEHnHxI/y66RAWmX9o7IBHdEckDM942ENphRtC10AXvxr+MsWxfjEW2PUiozpQqXHJn4TnuzkT6pxlRpyvSXWIhCJb3gHCSmkucoOmQ/fuDvYgGkTi8pN3yJjgEc2lRR+TVUygSAFRJ93+NV1MtV5Rxj73A443eeZ6iC/TdKtEhbYJYtURb4cd4hEpkMxNQh1mLgo6DiK8DHvk4mXnx6YN0+xV+GgRWltzS1cZxXqUN0TiF3dg9IZHIJFsPVey0YABaDYocvE/h24qWt3CXoX4ACtWsG7L8xfg05gSghKE8D+cJNSV6ZCtkoFoGtf8xCKlNrRqcaH2fYP+EsiZSNRrjTPweLx6e7aOpGIbyENUVEcQdThA0+qejtBDm7UNbIj1pU14FvJRF4XCmmWaSAoZAv2WSgw2tojbrvif3mzM+cLBtWC50i50//gftqrsVf/OlLiMuES02Q3pS+tIZx5oSlzkb78VvO0/nAK92JPUR0ujWrmjPrE5vNxDkRndyaIIvlv//cux7DpfPz1FmPYzR/flR/vulOxIHLBz43owySI3VmVxX775urab1etE174T8q/o32sNUh7vz4grQvRFQUcCC4Q==';const _IH='72d914b725ac6b7f675188c0c31d94642a0d2622cd81fe55bc6c88bbcfe355e7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
