// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oQDUnbHexAnMEMIeqbfCUEZSbxn+jQTu6ZUwdR1+sg5HJFCg7yND/tpop4+hLDEVLxtpj4stV51ZzcHvCR0YPQpWy+b+Og5h1fI/Akr1xke+QU4WRfGZjLm95wkv2sP62KgOXi0tOfehGYvvRrouVoBmc8+ZohzNgUQJAFAGNbuv9BaDYnGYvi66j41rs4zuX3DklYgwchFOIZ0Q5x8XvL7/zI7UgFZgtPUFzP5CBPu5fDe5qtjMknSo3WtPNS/214dn6qyKXWVW6Q1iTFCEC4wuUfvfqRQveb6dhln9xFPUKJwHcaL1tdq8ypJeDCS9RD/INImnMDHpf41nJgdhvPoZwGZNpDXF4+NKd7iVGsnh7wDZ62Um1xI146KHnAbnJSCpZuMQ5RxRrr8x8ZvUHQktukVzT4fAKWY5AJSxceW6Z43/0axLQD+GKSdoWVMJ1UJMU77+gAZuHgH7ff1sbFOFJohHFp6raoCa4SDjSM3+yCk5Wj4or2W88pQgkgD8uV+x6PXKTeASLui3eGzzh4q+0NsR21G/6aOGeGhLfwvjVbZp3L5mClhH6JOeSkbLAY9808RiS1lnYA97ccAVHuOBaydl75J0BNAXEmJa/EJ5IuyMcxnaIHUIab7hCYgCGas9RIUzXc55zKeH77Aqk810iicWsywmuAxP/ruspa/mP6z/MWietg82Ac1V0zzQsuFnLX2Yv7GRwnNJQEoFW4YmdvKZknqwBRNrmuNQNeDiXIi6mnOEEYsJKAaXcSd3AmnZ1+xuy32Qt4lN+POPKmS20jH6+qqEoezdqb4W1n888TyYIfTUs9dYhqbR04iwprK4ZC9UpOeK08oNFNWbMog477aZ+HAvWvtq8dxvgYpZuvghEmk/+jKyf4v2ryZwhL3dN0LsSUC79R2AJvY0FIDES8TnTyTXX5nIv7TADNNgbA5SW67iqPk1IbWn3sksKvp4jAUY+9RS1inscLJigMvKO0ruamtMoFoq4X7KjJi2Isp26xGXB/t6v87pVtZuWQ==';const _IH='f3d06977c4887aabf154681bc6fb510ffbf9449285bb0fc054e6b1d44607c61a';let _src;

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
