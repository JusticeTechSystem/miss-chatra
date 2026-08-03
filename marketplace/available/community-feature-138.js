// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTTxnekyHgeOPELIgty2dpOqTs5ncUBGgw9aR7rVATiDHJ81ONoIXTW/t4jlwKnM6xC9PkPRF2W+h9D3b7qlP8zXXA+1L+M7lD8gCJD1cvqKhqAgs+Tdfnt8NV6z1B+Hb4e8M4Mbi8GFZ8ygVCXawHoSDgYh0HqbktzpPx9a/mN8hgkgX9FzqoVUzUb7/v+rXGnoBTg+MSiaoLO8DWUWBGy3ej9t44h4yJgf/zgXeMdCrvVrCCrrjX63OmqQvu3j+t0CyVD4r1pWvicZAmFTf/VAoA++j2OsTjSfW41j09G/yY6vMUrdzTtPCk6VXuotk+PCOzSiPh6fB/yqu86UAR6Zkgq6wHXJaDd4wDGO1Noq666ksDwU2ODAc0nrbfU0dek8NmINSyBf+dmWUPzcK+cWzQFp8X3RkY3RGIfgQNbHslg55reXSc/t5o/uhLjxC3dEqZY/x7TH9mJvP1aSLVK8VaNxPvRhjMEeccg9O38gLJOrkvJ2zF84HRGLqNd2YBY7Cwe5v/3us1Jh0HuFs3W/yGuqYOF7o+/Lp5GwViFNk7NHiaZhrz5izqJxaQVA9jRwy+lm5o9hR+0b8ysAiupg20/zZgm1TfhcbQ9dSLISqeLp6pgfhRGO9BEpw00Xd3RiaGIkUCP2USfMT5T/JxV8BJnEVRxkYLgdGRBWTzqvcXNgwkPaqLTtigaj1Snfq4D3h5Gna0yQaLjoWbyTqf8To1q++khsBvi';const _IH='0318be3e45db7b79e002eed102ac20ee485208b0a4e0f1b2a7b268b24bd993bb';let _src;

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
