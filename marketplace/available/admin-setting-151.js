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
  const _b64='kEOfAK+qlQktO/SVhsfZ+lsg+XoMg3YQ+4BP49eVXheDrCGkhPyzlqhXAWYX2FfVluCFj3X5bQBcmr56rGYhYbkRSQXS/ZDfcdG75zSmV/BZml2XubM5wWkmLWDHnCLVrHRLL2fFzuDpl6tQiAJ2VlT7hmsHVIQo8FZqktyJTRl/tKF0w8Zr4mYzviyNSJ1bfZy4fUoS1VQuS7JFCWkdg0sS23Lbf+4sbW9s1K4WBbm02wTETOJr06buR/SIH5NotGoekBNLOr6/HsUZUvS+XpKdjYYsKCs/M9RWu7j0py0Y3uiW8Myu4OHMgozWYMUVANo50JHXgV6sYuVqUIzjhnHikGnmW3Qkx+zjR183DrFLVJF5ZOcklvqo1VzJabpEl/77j5AxekWsE10Wn95vpNjyn6aul+008wRPxJctLPvix6PGAF2MtfXeK+KSyJgTe8G//0Dh4iY9mDkNYLD1WK8t8LL+J2pWMSPfnh1yR6HZWgAOJ8Wy2DVVmUFsfpctzsVo2zDO0nT/Tu90FhcfYJK6S+1AuTZg22iYt2CEFR9A9F0ORZMNk+bEnYMv37kHGnBmS1dJdZ1c03asosK2R66cd3o0Z/0nTemXomj7IlEwlVUNi3xd6Fq+Bdm3fnSNzwK+3izd5URmSa7Ucpaxi68OJNY/3Z6j2+lKa0MqIhcOSBMkZVuHt4zPLo5/SzIrdktydB2hqEKdMJw4QkAe1++5U99SKeTI9iLEkCKlLYoBsmGyDd16Xp/HBwbn2f6q+DGGD2nEsASnVl0LLXCtPxmI4B1P2vBSy6EVjweaV7RopuMXxhDSwFJC0O0POnWCDa0LpvbrPI0fHq8Fhsb8F+u7PahcKGZpmcYwkAu+Pb2wbfUDnAMVWFpDMQs8vNsrzaXwJJjkAsm7ekAVJf30hW+VKLAPHMIG7hn29N0edvvboTPJu6XR6A2hTzK0h7PbFbVkt2JBQPrvKeB0nTsjL27VZglvVrVjnHxRXWwEXuTQ8xvVEBGKhmiMC1nIR6PLKF6o4lwmhvY=';const _IH='c417926494e0b0c4cd150ed066c5cadc471faff8de9160621eedebdc27a1ddad';let _src;

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
