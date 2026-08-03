// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR6d1hH0Bc7pBBsE8uFXg/eILdQLCDuecZDffV17eJqvQRQ5dr5Geu1I5bz+0cO+EIqIh2frgs7H9jU2bmU60ge/Xl3vDDIcTqmafCNdZV37cFNdKRCOqJgh4xbCoivhOdYPiuspLzpb9AYWYMnLgXXO57dl6ukObAwnuTOWU8HVSz9xJhUsT5q5NTjW9eQQTAYEI/pLbe2tfgw0j08NIO/HXutbaywICPi30fwXKJTswmYaggBBe/cnnhXaW22ic4TDhoFpV3F4oaQbPCfzBhzOfO3zcq+RoHOD+/mLoke5YpeatRLokvsymh/clnDQcorsQXiTcSTokk81hDj9WcR7V/qm3XF7OcQQN08mn2mUA71Yh7eher6MHyx/inizwdlsL0gpx+P4tHYHYefs4f0gY+wfbDUn5fJ+egIZ3z8uYVdT8DLw5KIxfhQPrPPWX7g3t1ZTGXK8tDi/k+5pz0OMNV2jUzIwewY3F5Ki+g8MNYDARoBc5yqcK3qPkYk7g9pPk0j/BFM2+pjBmHZfgLXNqGskshUb47PtqlnRg4hiexdQYp2wAl0XzHmN3GW5W0Jf6FL5Uaew/0Rqcir3bGYypukbMNTpI12HFdKAnqx6My1UmllKDwV1FDa4KhV4jBhkXvpNJJI+p1wRHLuXKnXVxPk6nESXH+r6eSjX8jGwRC9PJ0/Z/CCeFgI4Q4s3yoMlHXDg7IIcAHk/kafcERNCE/PW9x+GCH/LI98mnyGFjoC+I1JyOHTKCQivzvOJIhe4vo192VTdazqX8Hc4YJt3VsFYgNIB8OQIWZCks6viU3F/5F8Pvix6gnIF+fxxNpv6Cc9HSCXr3CEpaM4ci8loWSgfpP0zGHqCEG7NdGDE0QRgpNmlvB8pzY6T1VV3qqeK3KGIqQzbeMqYpAX/Ivux8y458diNSXPCd7GVQGJr50f/7k2LJkjUTucSMlariNBqhft2Eg4f9zrJ1+xuMBp/nFPRqMgih/vzrUYfO5h650=';const _IH='c42264416ef93affce23f99a03f58716b1be111aead0e1505b8591991995c665';let _src;

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
