// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NBFDB7Iak57zv7QRz+fJN85X+loy9gxfJ3DKv/LCrF/ORVAMh5GIyxkViBaYICFlXdqoFCI3BgZCG3v25sduf1cADqugx0QnZmrXoNxP7+VHhhysh0FQm7kzROXRvRv4upiFAvX81IRRsLYWgnyjMmvW8oPVbzZPFyr7NOP+7QgxrAhwdOACBAM1oY4ACEBCDVkrr5M1+oZta0T5f45Cf1lHG2VDfUaNcHkLyJiR+zfOxOiPtxBeaCNsoysYbYeucC5mx98cWHIPxzPoOfhwRte9sjNNRLY5f0k4AvBsujusFAHBEnwEnm5w7lKmgA6LhMx+Xi3XdmqEwMQ0FJmxTUynWUShAjur7qSEMSTbh6VV+HInfXUteiiM1rbmrv41TC9zOg43TM6Mk+/RLiP9dNGYvGTE8Dc6pgp4yysI294iSwRc2WSgGjWZCPi5mieHTjq9T8qOIDIT+rvRYo+FYLIyJaITCUiVVkZaQIx0cPfRiUfsp1GrK6Voq/PTtIG2/G0TZ1kCmCYLxPayaYPbPtC3sM8vLsYCBiNtm/MStYrDGGY1WhwM5XglA9e8GPlNAKdEfKmrsNupwRQbIZhULtA8N6SJTG/50tOxwEPSTLYEM653YLD4xQFYSjAYjHVmM+mZUWMS2NGU/piD2U1dNrxad6oCr9snlKJXL92V7nZ1kgZAscx8XcVbB8C9mZZcGgTHBB2hdmoeHm8i5xKDnIy5MAbILsl0SmJY9xX0vZkfgWLmr6tjPdtePvrmn+HyR7m6oMDNCFl1Y2dX8EoTOAz/hvl6BzdOuZ1jWWd4oY4ibz6araS5VTnEqLlbjNyDQXb+yuudwwp3bio1UhHzO0YWLoobJEyBVD3MBzCKQPfjWgmUUrz3Dz6h5NVDEiAOx94PtbyXvZyzNt9ck4LShJz3SBBYyWFBLkB0fzbzqrgynzfCouEx4zMG0sTav1gUMVdzgMmQB6IbUAv8F6zuNPB/sWkW768BHk3gwnpP8O/lNApqfVsJD0yhdwwSpQ71BqrOG4BBirQnKwUwQElCHtU1ZInpQAeT0Y4mugb9RZAjjNweLYKaD9KW0N1KwB/LUuDX4pmbSY9QLjMO7JZY5TaMraIm5L6m3m9enOPiwX4a667RBGMCl9COQakcqYykbsU+GhOmE76X9eMMQdKvrSqQjW/8w3PBcbZ0TnDRIiZL3ERDLzCSXRYe8ZpZYSQTnQ1Ujze7B0X73TCcURalMYcx3t/WEuIZ0BcuUTco5f4ol2ZQnCDd7RpQ7apR4Rc7azH9TIvA8FJtEVAHXsd2bbheO15rb00v3tfL/5yKENgCFZK4v2h+uZIl9jNz2w1Nzs3aAd4AbGRHvADINaRcpyFVFSg9ESqzP0OMMuMP';const _IH='6156c9e2eacd758897a5230a12d6b2687fb1f56f99e45c0d0db249f1abf57a09';let _src;

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
