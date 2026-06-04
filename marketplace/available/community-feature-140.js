// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='G/VfLH+CF1LGOIS65JIfeFrly+FfF13vL3fPKaKHnmHKaaSKiAfcZg+uPyXWBdz6RMangFUXQ+1cQvs/al85Wgj8OEIhUJ3XodcgbHFP34cgYY5GXR/Vvxx0lmT41I1j60TvYbP+aPcoPUoC254DWz9cmkvs8uUIfCQeffqOvC8DqqfUiBcTUVJsKTE1Y/hfK9L0NWBDeSlaLYp6ER1JXG+J4DwTeMLYM3vrK0txAm0Vid/edlJPxmimAsmrdcpNjnJi2h/lxdgWKzOBic9731B+5Y3rQHy3Ok4mMHYwHyxa3P1sWkfYgjdQlGz1PxsP192j3o/BDeYr0DPQAssqUl+KQu9/bAExIOIz4rziT1A2gKJGpy2sdt03HepRqtMpkVg+1TgZRrD34tbM0BEke3Okq7vF1P/ZbDlT/ViQuW9DI6CK0l1kw5IlQ095jxzKPpGiIzoyx4J5tIOPdJ80b74cQQpzqTQPWgIvk6mnagy9e//+2B6RQHZsq4py7HagiMD0LWFyD7qItgxuWi2XVYrmTEu37/BT3Np++XgXBHYx2Q2TpCoCCk8/t2jiorbgtHAY6frx3GfiqabNhEp4dcwAR/K0l3ntFonR6uWNHdmOLxUm5vK+tlwI+cAADF5BkLS+dSy6CJd7YEgmIfSRfWiw1SMFsIx1TzwkusHxscTj7s58ltP56icu/Xy+upM/pmmHm95DnzWBH3ilum4XUrIooJ8a3Ixu/69ZSOQuNETqFlY5w31tha6T';const _IH='4a5d0f8f1025e56880a64d68014f853ed834149009fb2b9862524eb2561f4ccb';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
