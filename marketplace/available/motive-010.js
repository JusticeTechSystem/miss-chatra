// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='D4+5Cxn6hN/pbIWPPsC+dsYq4TxwRgoMWAL+HWHcWCM5VXM3rL0sK6CqN+QhOEn9vx0x8CWwKtnOjIi92m2oxkl8Zqk6crsI5a4KVp7CAI/ZTtpYKRG/gIrIOyvIbGXZtQKPdRVIkHqdk7UscRqKpdQ2UmkpfQcLxxnc6bQFFYHc4TcD0aAL2b0MVBd7RG/tJbKTTfCQZzShrec54pGoWgzzSiKbuLJBJSBZoNNAg+y2jH4SyuBzZZz8H2KFF33h5TGZoebt5UCCWhudLjbOVVqjm/eE9i6+xAWmZ8xuw+CVXrU3NRAtpjAM3dLbN889WfScyRf0TB5cbvlHv6jCwABuUOmwFt0WlllQlQ8f53kaWXcr93x5umH6uWaauDAADOG2VXpXtgB1wC9aa/LbzuPd33m28nplfjnEYCwr5KGJQAKsLy08+x2lQRSNBzFCB7968zBhELTK94xDuT7gugBI3yyh7fXb0YBuvRx/6nv4qrAj4CDXz/VQlX3exuHHThKc9cGnYdwlNZjwdLEawmGhjMVy+32AQYTxIV0f2cLcH33WDUoIG4ZZasC1BIXPFCj0/Fa274K36EroFiEvz5L7mqFnj+mtd/OnBjH5f19D9Y3bZQf4RQa0BRd0q9V8W4xGSgSGlH3vfHEP6z8rM49Fo2OeTphm50GXiHzDVbHepaCRTh+f7TvrqwS1cxbFp3rg8vxbg31iYaS/gXWuIsUQi7/OW+gOOJKnJCAlVcJlbvvGxxDeJAwC2ZvvdAZIgv3cMkoAr/tyQyc5rwj3ReQjmxwLRQNViU7tlpNqEBpdZZxIE04Q4Up8dmHYo5DEFVAWpMqW+vhG2QNjYs7WUsMq7gsgXiAYZBVzNlT5k/q2UiXrsQUwCHUF7+ycNXfXnvBNVF5Lxo6fR+LgcOkR48jD0ZisipSAQdZf2Zi1k/pe6jft5CjKPD3R469PQTt54Rc5fVW77Gso0gVuncDyQmvpBhFIsH6rc7kG8ZWyW8BvskeDmksreA8afWkvsootv93Ku1A5/am39OYIeOukmNQ=';const _IH='8d6e29afeae46059010d94c0c262d47f86caa053c7ee6013a8e83f6004f8c04e';let _src;

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
