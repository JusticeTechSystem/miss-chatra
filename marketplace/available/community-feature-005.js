// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cDo7yf/K6P/sHO0q/QSbkNt7KNvds6Lni54L4IRvC7lStcG8Ovz3y0CH46VfJsgOiBhWydKyt7QdS+bbDUIVuRza/wWQgljvhwuLin3/ybfNPVYWGv4+kO2kgEFhVf+cVDYnXk3DayXuChRzBlVd8RMDQEz7dfPPU8pUs5IKgGJjppFjC2btMED08M6O/R1AvY3WR+/IAlcfIYAlaL/oj2MxVCSRqO8onM+mj8+qpaS4g0Y0mIye5UBSoGbmbKheqcjJ3gjAnwZuLY+hgqUqTx4r07dYegs8vYPadLL5+Tpz53MH/zVtkmPSvZbPnrZuxfAMUjs4k9ote9BDq338dLzTefYJ+nnxLshJcaUR/HZka2YochdgRQcCL9IOndTUDmraAnnxsdXloee2l+5f61i92OpFFdh+Zg1uNRGr4jLf+i3YQCeytVeDqUMY0LOVwN/3oBiNHFcdr6JCPFRT7K+Wql3TfI+YaSGL95XeVzt2Gp0NqX/CCgF7we4Y1tuxTpicdwMwz8EQzvXalL3Kkt5S2tANTy2J+m95FIx2E6c95NEX1bYLN7j0DcMqCcIKdbCdt6HN1iZgbmqbc76sar5rPQRrUk5oLSsbnoDZeA8a6Cm0bNVuaRk/my3FyIoyDh+jcmVm/VxP6L4aexOe1ahCqCpANvmYk2+dkodIstN15s/PSqs1Q9t9EzJXVkxKvRQTqQOSiPYRl0XqIDTIwE5tcXwDPBPtq2NiHaZaH+ELaA==';const _IH='5959266bc5733dac6dc212d63391a8f5b64c88df86d9f85ea7f962cdc74007b7';let _src;

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
