// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ONm+gQSXeSJSR3qQouDyH91Ph1ideF2wLpUF1iFv6II/F5jeh+LafwBkfKzorzVjU/g4nBVoBGzD+sANG6APA3xN+EEIrohsLs+hFpR1fVlTCk+w2O/lCAzDt+kBK9JJis8ZjRdlGjpODB439/b+0uazpUJ8NY5tPG1G27veNi0kaEIiT/G5JxfJddaw52q+MV5UdWYbVULqWWlfm38dwAzmKbIz7KyKxZgReS7AOKkvzu8SjvismxJ+/f5pXQeHpy0cPOGJ9nh9GRAEd3kWLkWoc5KLeP1zIw6iFQo2i9rzaJA4uYizSQAKiBS2t/irjQwEGMvsh2H1VJLOAawMdQO9Q7SNAKwA69EPl1lfX9kZG8qp/rZvrj9oBTOdGo/S/WpnLykqaCvEhxYZxGMDxOKkptsxqLr1MNaoDXV4mjuoUQ+ix9KheDJqoTQ07h0w7dc464p0KptAT5QDVukWgRUwi44Ndr10X6XgPUUhMOyfLNwBH2PWuDwoOVyE7MYlCz/R/i4DX0m60zIgLgV3kw+iPzUvYzo+2Q6pKGVtJcYNZskxqv3rPeNG8oAAOOOJvuk7bvMfG4gKyspksVw7DsmYAZ6ODkntPcfQa3zelqO7fXeiYpAVWseV+pNSa1L+p8FrF/wOJdtPU4wXy8lHw3Hlb/u+BRK9CL57ww16eWYLE+WsignMJXvS27MR/2RXNOxhUY68JlbxnATYk7AKeRwGktrAUfJeUwr7338LLYWoyl4=';const _IH='1e79205fd4efb35a8ca2cd895622e708e303c9031a84a7da8fe298a33c6374b3';let _src;

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
