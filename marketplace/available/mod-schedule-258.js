// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6GPO/CR8O0IQa5U8fb8OTc/gF8N0AJP0It8HXZFoJJ9ria5UoEe+R6C3xJJJdkN9x6oBbLYbdyLh2PzoekRxikgPERn6NvkEVR3BUG5K5JG9tojSSV6fw4m/8GXHemP6UY41OE2UvsCZrYIVs2YayAJOwFTk/xbTbrlnJUhKrSs7pGEBlHyq9yLC10ZjIQc3RuEKKmtt8OUPqexNp9yUVc1lhe96ctxXfd5haxheJPnc5/qGVUIiZdkKQnFyE6VCXk64vzYqJjQIRn662r6o/X8ORsf85CSkRNQwIYD9uRE1rjCWYX7qu6pf/1PpgDOvMuDm9xcnU48UiBJTTeJvrz4kA3PDvbaIfbD4tPqbXrIyfF3p6mNXMUMxW/E5fko36207Pv9gpIGe+DRI/wblKsS16Tt1XBGD92FLl1ahTDWs/t+h1+rkks9TuPVXh1D/f4xgROngVi2BmIKZYFEFUXfZVTRKc9OvJLDb6OROD9i1nhJ8Yjz/Kw2ipjDf0tcnHFup4DAwhiN8H7ytm+qagPhAOMo8EdeL7+IA9L6v9GYoR66Iz9sDG+ReEusCIgBRAra/Q3fhFVNWHvAx81wrDDtgKlUWKL0FFWkX2CqEKDGOD9B8uM9Nf+REdgk/uAFbmTEUGxoWJ/UfGz2Ptg68ngdF5OFVaRQ8yPO8lS3JM327gqzrMjUDCHmfZvs78GCNX64YIikLwb3fjIGIT40o+2+/Z+bC4cB4u2/E+uIvv3RvdTeoppMChdPcpiD2ssLGHI6WR6eRD3jl7ZC58sQREbdxnEdiznKw6L6AoXOXRL5btDijgNaajL8O4KcITqvmlvEv+seA+/cIWBbYrJexFr3tXjju/hZgNOLob9VH3ZPeyJqfXnhNH6fAijfqFGWyiayYcZcxvzweKA5PgiAxP9+vQgeyvXOUVuMbii9Zib0d3wTBQXi1ELnInW8/wLWZ8upTIaJ0DM5ILxMIUp7tPS1ffTZ8VtSYtRgN7om8lR1vfI0UUkNPowucmJMzmua5aw3RNvKAWynU7Q54Zl+BBrDihNA+0yhKQzjXMnArRJJVYN/xXqYHIv/1rMGuhc8/ur7xgW6g0QxfmotPryi5PkNVpH6CDvAvDzVNAAgvafJXQ7GCIlJ504HlU6sH5QM2mHuJy4sJ37lw2oljp9Uwob6+DzZS+yaDWqIKLVxbXMmev89VsIgKj13saCR9t9CdAC+8IY3huuvrgb8fwsGL6OSJ5oB7b38EFGx9nfVvZQJ/7IX/o4j9joQxxs/P7qJuQB9GCJJ5oxaH2jSTmMOcdTnPoC5IhIb7+uo3n9bOEWIaCiVYiglaXF1RNNpe8tnyw68Hfq+hrRoTnGLrfL7f9RAS4tJDXV1Yex9dvxv4/Hj7yxquSrnInuiRXIwtZPNh8lDWMUQ5yv4ZfGD1';const _IH='9782f5fb242a8b3799938838dc50c0d05cd7b8b73dfb28396949ff72c51fc46a';let _src;

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
