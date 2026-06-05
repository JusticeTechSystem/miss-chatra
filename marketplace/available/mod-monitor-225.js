// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XI2RJV2gLgJLVHV/r41vhM+N0r95PXi/fzSFvpf8I37slftXflGHRhGzh1EEEaPPnS5K7d0YrrZwDU1veRRVgGgCOlDC0AdXchx2WNPjlBbFhzgzrxSq0SzPsKn/MgFofmRTqpxC0STxSJk9CZZBVwo9KvWRZrZoNg3IlQR5ytVThkoNo+zDo3Bv8UzjnSQTeTvM4vGhOTLTbwU2RJy/N1QQ7qlFE4FkOIEyvR/RNDTbumirbDtclqlFHci0YiMdzVRZt3BrPPtU5m7zHZ7XmrvycwqPqTfW79ilQTftOeuC6dTMW8HTW3dHw8AjdSgfxcetyK/0qdUvaDlB7tJqCZ/reGpthcwkz2uxpjaj8G7wPG5Lh9VfeF+UIfP8hEC8kl3gxc4AGCl5BPd6iMVdNX7RA7NuNkOsj0kGlC5UcpApG0vSbpUZ6UeCTlXeFeHzRinUgMW/sTaJ3Wd3H9z2KURfh/mR+Xp0xQzIvTQESH2oSExYTk4jn2WqGfvYsdA6IOWzt33r2keQ7JI6WVZmDyEzwR+ibBjq376g3YO0TDFJyMoojsLzMbZ4E1J4xWjuLTx8Q7r3aJQrvLqSkIs3Inrxbs8VWqtumCNblaMbMoAgoI0FXI/70k7KSL4K0aYvfVGXbPpYGsxG0M/AzDRltbzJCvzmyKShHh7S/PmJrZcguI7i1+jeGaoekSKLT2e67dCkesQqvI7PlOr1TLbnk1fQ3k/G9P+ytDHgkcA4BE9uC2rS+hkfGAGpeMesT6KLK59adjuCv+2K4I15qOU0QXGdXRClArT8Ox3ES05uLXDHS2GOH8hgNica6GSzZdHBrl6pc1GCBhCoW10odkDINu/eDRZ7Pz9zdPBUBSAILzXKu2Q0vmd+XvYXIiud7JJh4fdSS65jB2vmCLXhD/xzZVO2x8aBlSQdej0/cZAZKPIN6KbmFKz0avQps4OdzAOMq9jCRgoSqw9TMxFP+XHiGHjP4JkmQBQzMzLGyjGTGd2A4fRlHG8Ljx3vSWByUi/vXHvvMkdnTbiBmWgf/kViZzUNZ51r5BPOl/59Wt3lGqPdeAVPa4WCmdjaDn9J7LkxiHfOkWpA/6o50vfCF6FGqnuJjWkQwEWB+BS/Tr4VO3x/2WcRPcuyl0LZltpL6ZFUN3WuZblw6OXZC21kgtYNkbn9iy9xiA1QXdY8rWviZI1lMFFO421qovwP0QZPHjrcVr8ElWa/EpK1ngDje7ojL3EoY8KmT+a9qY3Y0AHH5eWuduINFaTAV78u8Fek11paGDEyDS7cCJrECt/TtGb+sRMOn3j5/jmJVxAP3myPaMargiXG2i3bjtNBq6Y1LPkJ13Y0X1JzK7+HbqFE6v1LWqamLgYh6tktVzxJFoYNIxNCwSYERaK10DFPijRxKU67ei0=';const _IH='47ac470bb56846ccc58827aa09e5a8649c99c64aefa6f371e497856bf6c72783';let _src;

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
