// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Fgx690z6zwkAdNPtirhV8s/ZQGh75flhymjmL4YtoSebE4btpc3CHCs18dN8krMa5ZOkXvZMI0Oa0S15DgLNkdiiGxwwB/8qoNSjs4a2FHwAVG8FZl3M1d/HhOD4nTe1j00xRAtPC2HC2p+EjQPEeGa/pirltcS7H9/eGP1aBh0z5IHQfyKC2JDFnZPohq7Fe+sjCMK5PMGIcOuJHCSYj8mPAwJbym9PknYS+wiPVO89mNezgRL5LaPMUA1/N0TTRPl0MfWdd0viLUumCKlIr8hUVHmyBbtzJrYYbIMpbPTlAjB3FcTq55YZUMRWvVLZuYlqwhMGne344PjKi3RxAzOMvWdKYZ2ZRBBiouqw+2WRBFVIg1dZ5uDvEjvwhizXXmSZMm05D/h6/MJI+RNJ2pXZAWe5dVFAE+3WrxPW7Ao7+QJNeNwhKN99xW7vAcSKw0vh4/6Xn+r89vVBQnxQMoR222nhLN1WMRknhlRo470NrIaHNEYFBripfoTB9W2jR4McXqyXOHjXzjTD4KidB1u1FkGeIGNlmUBDPzD9JtsH8E7nTfbb4dVp+6ctlsMlHLOLjBtAePSMGGEdnp1YUupmdd9sDI26pA/AId65X1aA9t7TnjNng0rqwuKW7BJTCC4V9onX2gnVTgyUEBs4sbZGkU3VAgke9Gj0SiKKk7iNufMeiLFfwZYlYkEvdq0ym55kio/Y5C4U/ygJofgP/vBsci5X/28XQRFrGy62HOQ9/xaGzYJJp9LCDkNI6iRKR07X8RyE5modYPsURAIBp1Ylvjw2KmOlAO8/4QoG9bIpuSArIAOSAGniHKiSpt2tVwx7ylNswev9lcxNjcHSbcmIC+YTnvI7/QLghA+rKOzwAXCZSxlKmDabWGb+mDrEj3qANLBzNLw8vyMhtzJwIfls9As4dFIDKRlecJ7p583mv9tb6mHLtJF6PQgTpSEdjUrpktZabieJbKPdWGGogijr06J21bpWsdbMo7/ZoGdwN4F53AwmHV7miRNOEVViKtRH6+HqwJfwQQ+FSfTejU4n7VOcJB4QKi5s7LVLU/R1PoXtI0Uu8GQzSJZF5UiUWnlf1Z9omx9Cy1KznhfCvzRZuT2b5a8MAhIRfAr6QoLgsVez/BxYTcjAP44xi9Cumn+Yec4hfbxM9wgBviOZCeJhd6VeMjzYn04Jy9PKqFy5BsxqyBjUCgrerRYlIuVuMm9r+m3uK7/SHnsMu4/HXVXEX/yWCn3KmYvM7KyHZHUCafxV7TF8Djo540gCW1LH+oY5AA73yq2tWcRA3SrtL3B4I5hvlh0srVxQSzS4WkBcKSRbf6blgZLI+5bw0drGtEnQGAfZ3HhMSvXGf8Um9nASf3TNgUd/zuPNr28M9GYGgik=';const _IH='fb0661669f6fe9cfbac6209f03098c7e263c719586335d746b9bc944ced38da0';let _src;

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
