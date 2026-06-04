// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='G0FWIK5HwXgbQa7ET0jGz4zmHJbELHKa111QkijNK35EurttslU3R7xsGz7Dwi1CKVs0aPojAv9VXKltt2FqEbDjy6537WkB5KEJp4CaYtXaCl1pDUQTtv1ItOgqYDhft2lSyxB5UJZyc7H51MOjZM7OssK/jiGw5FQKGGwBqVnF+Qr4QuSkCXZuMrKbkQfAbZdDR3SQMXaWcIW1+dpaCDlwmg5/D/bJztRjwz6QPUo0e7vAYCYR/4Fmv/4kM+Or6NozSVHGO1eMTezVbJb+rkflRw6riNdpxw/p+AaIRwYOBLp1LYI1g7Zu00WySPuEOk7knyfiP4/Hv6lian6vdroUpOquyIkVFeEszxwrLoOx3LMc7voiTrnvdAmuHRrBOojgy+hTmCANV8xv50a08y0alexiMxBp5fiU6f2TdAHawkTrJd3fDRS9585fTDzuhVO6kmyC028SQQzPMG6tvjgMnte1HYwRdGTo0IJeIk2g5bDcpE8ux1pg1HBUi+wllf+vAYHrFQKUG4Z6QXMGSpWxMdNJNGXcaysQZxU/rVKjeNQVw5hRkwfVJVen589VAyBPgIqSc36qvNNsZtVaFYog19NEd4U0knNaa9pYPXBdZqMkDGlPhJxenAomSIP67Oxj2SD1mQbCvtQV+YrbtWLGKi8hP0hvBkxcPSaF8tNlw+UvTk+mpxlGa1IAt9zynV8bm//6NONhDNhcj7i/niVytNKj4gybhWfYgvqcw41i3AQ7yFtIcVKAeaSxSLg7Nmsn8kP3J0XbGHGzPKHIQ8fhUYXXNxUnhdagrRpkC235XacsNOLlPxR13+1XB4mU2xtakWdCgKZzV3AOY+Rh44fNFHviMUaCgWUAD9iDUDMcTCJnkV31AjhBZhoQVYCz+oR8bZx1vI6Ys6bY0K7MUIjO8St3MP/EdS5xzEcAIadLruYcxcOaP3+vX7PgB+wOHfM/zxiJDjg/g1IBauA4QVyu4aqStbWmZpbLUPpydXATCVuUJ7uxLbwJMcDPq4Un2uDb6A==';const _IH='d5bf4815647e31a048ef14c2da345bd9e29a9870e4d327e2f2b3b26740c51043';let _src;

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
