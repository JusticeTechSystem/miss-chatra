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
  const _b64='m0MoLaXHeQIxvysXr18U2hx4ueG8JfzHWEmvzYP4nu5mO+OM5e/0YIVJYyORYnPouH55xAd6K3NX97LlSjntaxfsprtzPB0i92BbbfT186bPHoszUbjlu2hCow0unXg2v8wCoQghjhzRAZkyamHi//v4miHEZoiQECOmCGhBHQoaDeABwuFNfWhTrC9mZgbFA7SpOQLIexjg0lH5uHfmt2yNOueMlnb7Rm+Ibk5e+ryFTOgWFN1NQWc7y+i33QpeGa3u/vfmz7rm/oMDI6HzUdfRlTkTXMAwHddTGfPi0yUZgEZs7pnkAPL128BgvvYeWhJkGHFtq8RdiFOy5iaBYfAJ/CW3ndcgw0qtG2rWt/uENaSMkIf6/dr6cJV78rrL0UUTJO1P2hIUMKtu5g3mmYNen/2VtzstozCf0byE0QSEi1YezndKnoobCdChR4w71laVjdE88xb03jhq23Rf0/PgJStYbzYkAf/XfIEjZCrM3axbDEkWYQBg/wlWka+N1z3fujpz8PFdhSJDb4JB7mle9VcvDWQogETZnplF3S4YXo6Nmy6Io0Grpd7nLykr6QanKHDE0F+BukiCMgh5tgxp1z+vuM26EX8nJUwAdj78Hy/ryxcETyiThqXG/1gohuY+dF1qVO7quYhOBPPbjuXEEUc9KCCyGktW2Ya7XEmdAJY7z6/Bui2fIxfvJpKwAM+y1fG74XfrtNmKHfQESF5AcUQWj5MBqd5nrmw4vWDxhr0szCE5NK7r1hbBLxO28BXgnfSTx3emb8ty3M2VEQqu8DSGMe1MHJHIS1AhmzRwsZl8FlofoYzNFAQw5FtOWCxCTc/vzVqKQdgm5kRsvjUemNZtmB3lH8gERuaTxMod3p5BGcmIBQJkbdI+My5YVduJh+YwPKdg05qJ+1p5wAeZ0Rjf5q2GrjGMO5ECc0uN4Lb6xIj0JR0He1S/7+NdKDzmBQXU40irm+jgZQxso0v2NyU4JjfvvXfaKNxk1kqw59ifApZuVBpUbA8NRBf7GyOFXTKT5ZefvVWbz2Tq2BWTwhtkLS5B4sezHxL0QLp38jEDbkU1TeUhXXKOyrQtAXuSTUAINE1B/Eqm4Qjjcv3QAsCbiGoShcIEMo8bGWq0aWw70wv/7cwEUxfV4SfHMmYQSCtyXuoUGe6ESQuexMpix6CDdqJflsjCRxow0PQSZg7ScoPumaJOuaIuT2sAI5V3ltJFZ1PklVsL4Q9becOhQRz/FIpxC50xtrDAxw0fKp2FCD2v8k4NXqI6hPvBLtkPNVf1+urbtaKDiwidAWrMVoYAhILSxtygay08XDeL2C107PROvYCg0yxVGf3i+PV4Fdo1QgelH4CF2e9D3ZINKyztKr81ufT3o3f5rN7rKg4mW9tCz123r7Fm1CrfkO2MyslK7FJeTBQYVrMWIo1NvZA5ivas/Z250HsRZnweMJjxs/4ANC02Yo13okTdlf1ipDRVPdlaCNwe6LuLSulNtq0pH/Mv+z/kjPS/qBfXackvs3rqaqlqzGYQDRmd2fsm25xgL5QE///7LjdS7JH1u3WnB/zbUy5DTYPKYYss9ayFBnaJ3ctuaICR5nS+5AR5tp5j4gstvvGDWmzS5KkQRPcyS2m4ci+ympBa';const _IH='8fabff419aaa958d0a2df4aa9dfff986b6b5032e88d486130df88a38a6ddc878';let _src;

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
