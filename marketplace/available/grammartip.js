// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qvi6YStEJ+WAfnQo368GaQB4LkW56jQYxO9vGuGuv6klcjE5zs2GdZMJr9CJOoPVhLn5uB3r6ZNJotRurJ9MsQA3sL3RW3cJNVBJ7/F74Z7S73lI6T3kLxcsH0IvUOZVHZ/B598GakIneRNJq9LImJ3n8f+zNIKL0HiLqu5rRur8Azfw8n2ruttjGZR737XIehpHIUkwAXvtWb6ATzfKODjFxEx1ab2OgPrZ107H7kl9XHCZqPFi7oJ7zKLIJY6MjQ2hZkwNEndk6hbK910FKtN1ZNrj9dLs7YPc/7aWTb6zr5QFcz6YLyV3GBVM4kZWfQa+RyfDbAGOL2uxG9hUQtF1sg6+hJVARscdZmqfrqjnENqxUlhMhWKSZm+dNX1gM57g2S7URtaX7XmSZtdHF2X/rInr3Ol0VjJ/DnmevRIog3Z/bUdvOeDwy15BqOEfl0rpzmWlnvv+NOOoMpwp1K2yKF40x4GD2d782+vP8tzdaD+gcWHicftyFoXLvzBLVE+NAUGzw2GM3mdwJOp9MM58+PO5TtUSM4SKOsZJw/KkrT7jHwlFTFIyErYp5z3Ch30sRfEgAisA7uGbJCKbE5l4Xjiw2SQoeSOHYwEmz/Dg+BIdpqQA+nIj+iEQkzla+KH26g04cnPnAlxT2/EZhXQDd4O8khL37gXHzkh/nlYMO3Dq3A1a1H1gKNtINgYV2c6V0xRV9pGQeO01xa3je2CWbbrSr+x2wl+WEoPeZn6oDku6tvcgsWNzzk5+ku56fJyf5HsSsGxBFoE5sto2M3PurftGs9+UWovTfltfPPzM9s6eU3oxm1d/kWVX2EalSkqitPiILpnoCRrIMvOiF/lGMjLDkHobhhl0TzCMqDTEWhjFBMtLlVyLuc11rlmmWJGt9WQPCCwoCAEqCcmJPXv3haA1tLajdBClxQ7yLd9FPQahXqCKX6CoX0nitvf2kcKv952RVyY10R8Ri7k/QMKXjXhhsQ3qvwTvWN0jAgkvi2+4h4NdRMdiaBYz8iCWOZcnJXi4Ncsz3GG08j+OeMiW/cBoWcycsnBR4hXGH+V9ZdbvzqWcB78kqVpf76FuQNRAEOmHwyoccFkJM1jsKrSk0mTcp0fLrGj0fyLej9ArmNGtA2qS1N9E1F2LZGNfnDd4ZTIyeb0CPNPeKbbUuYfvmlSVw0amq0iV06kzi9OmvfVmCaWWq+cHIHZ8oHJygvau9H+aqBI=';const _IH='af3563c2de7306b7f7fdde4361b7c25cefeae9425c9e75de6d0fd6045dd207aa';let _src;

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
