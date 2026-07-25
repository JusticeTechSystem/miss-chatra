// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTI+3GyTTKun97WUhGetTevywyy4fnCdgDlTMCzkUBzbPcZ52VukguG5m+PgeajbZl1kDX2p1k/KA0S8oBpVpNymluHxApI4S9DEYpYq001LKv0CZxGo+fwLr58sPfuhXwArQtSDtJJVMYGJpBLpJNNc/jYy725X+zd9SXtb9JvaSgbfzHzPgqg4yQbGEPw2R9iC4rAKTJt1G5oV7F6ABoGLX1JH6pqMUDVXdxVBZgoVrcMXQASB3epX5bioFKYhydqtaF//y/Yuf37nmHAo8EU3q+z5K3X2pqKHn0a4uejF+td/ImCNAbqFC30Sa88j3+VDbfsmuaHT1ZTK7JOjnrycx1esx+p+QxKhjgr6C/nPw3aXfi/C4I8Px62A8pkIip+3B5dCJTHcUpF0o622K2CKCGnTXTMLa27vt4/7UD5kQ9dtthyC8t0WW4hJarLU3wNd9XBuE482Xg9xYOiZfXsmA7P+NcEM06EfpEFnE2wWZrOwFP3EcNR0ucwstnAS/Rl/JKQMmy4B2zjTGrHS3Yb98FKepaMlWv+eTikKJVb22s2uPugnaf39Ys9/pbMSMMPd7KQSLYPAAys/3te4Pw8EPXBWTEoxjbBUxGU3Gf4NbI7zITTKqLs8hK5td/KxJJ38TEUIMOeM1/7bzhtYJ2qmqh7zpaORYhq45krzONcNYt5a/ZW1av5pug8EKH9HBYhY9IL+yrbGGpcmY9Z9LxpELleCvHiNpv5xRix6m/kVgJlbD2XMmUUmoY3RHhqfkO5s/WhLEloPyJVRi8XLtAlOkz1tRhAYbp0rAeE+2Pao1fFHTXvLvKqqqd3jn+Eg2pGmDTFxYXP38M+OYIX0Iwm5dt5UVOo8RlJsKb6BnAifv/Xip6MFGJ8Mpi0Nj3QtKn6sq5QclF9zXtPMUtowzoytXx6kuOJFJGT/xi1j7rGGckv3iICrZzJbOS5/Q44/a55t0pco/fupAsTNaRCi31Xp/i3aySThu9/Fjg9wCbdYl92QkuRWi5YxBHDNu8fdDjOZUyvEre1qr25dBUJ9yzLx7wPQsGIG9b9YGl8JmmFMnv8ySx6dbCi3fqivH1JhDrVOnoH6Xdg0Tix3QC2bqS9G9aTL08IvIMhP5dKTB/2JslWeLyGYMTOsGFnGurPuaYBv9pa5Xn4mM/kmp8uIbPht9O4Ob1SkH8nYZMW8rIKe9Mxkl3ML/3P4ioO2FWs2kjd8LktKIwqR6iu2+XCcJzW33z/WZPpsN7Bk7M1reYtu+HFdshtPrBSbpm853+mrb0zDiF/ZlWPmWyoehA5OVWh5yh2m4L2BZwbL0va4jgo9TFKPLtydXRDOtAL0/nxVnH6i55Y84A4XQyp/D3zDT4vFIOwIHNb2PRZSyW9SOA=';const _IH='978586494876b3b3601e68e8529d35492aa84cf5ee0fb75e3867e3a46379e13e';let _src;

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
