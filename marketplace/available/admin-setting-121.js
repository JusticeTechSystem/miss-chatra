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
  const _b64='fZqPByU1uTXfZw4rgCysWZjy12DgjaQBttvYHj45XPGyD8h4i5wkeNQK4uEXoXgDx67OHd586cf31CaDblzXO52DD9IBDThxguu1dHfGd2uKxcAVzW1Rw+IZ9ByQAn+O7bhL+inSF/P+xavNDo+0DxIt7xqoG13NP3yef9pv1ylvz1FZRyUz+0dQrG+S11DWSHj3ejp6QToAJikvSqJQHyWCWWnGQ0/QBB8nx6gtS+r4Pa5Y4Fm6lTRXGVRlHuCVIDvTH93p4n4uxLJxUWZ/rAprfO46ecMy/jG6Ep322xXWMfLT2ER/BfSEw5Wq8I0Bt1+gHsh8ibhPWPSN08CBMP6qGWzQRS4wYj/giAhs6/TVCYM0j+hFRurf++PEfI3keQJLgyAETr+P+iSs0on+NfMlsKGE+pAM8cSCAYlepxUOYPpUuxvxV41y76D2EKV9vGlnbqHQqbXFzATxZfKFFJeDsyws3ypMj1ZrlZFTnmt+q7S4qO7p8Qj4Pf+D8P0YgvnEYU0GGOVat/bGy/SSJT9NIEN+y1gcJm6+kCF4YbS+R//+qbiNtDLOFAZPG9enceDs3iSixn+Ay9IDdGT31t5CD/+kSl9O24kSCzNR49pVJ6ALFXLgGUzTBIu504OsfKW7MX9vcy958Y96afV4drjclMYJdeWkq5Tt8qI2oEWymVUi+yOlqrpMBiGGLW0bcomnFz66PTprhklXVFb5lAznjw/fal8Qposeq3LNA2U4sgqaYAqe8n9sejnoYZZsyXwq4BR8bero9WrLc7ExtY+mGP+f8m+FnWG4Uo1ZfjaghkqSEco58fLmbTawJjCNkbkt84Yb3hPeQm2yuwdushcQXOrd0TfXdTXc4hl8PaWopIJ347Sp+JkP5uMtMoa+J01CbP/PCg4HkHam1nT6BSAhJ5fB4rno6mbxiaZuW9HfCp4VgOK/O/Kt+4DLPKZ6fY2QzWPE7aHqxjV2CHyJsyhSb7GIvAMC0QwVG9X8OneP9wK5PIlkgUAFAH7F/td3kIQ+phaSvfk=';const _IH='a1c85a27ad954adb0666da36c98b40e3bf991a7fed785a93f6e4a3b6fb0c17d1';let _src;

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
