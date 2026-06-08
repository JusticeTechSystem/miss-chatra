// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qU7vxDIo/psxlUp1CmiWTyynEd1RrhGfxUprWlb0cnlawlMkOatuE+FGUN+eOkMKfu+eabSezermNxMJIwNv106tRl9tBZdZxT10rnmhvY3xbl6g9WZTr0BeBGQiGxueFzcDsTPb+PaFWD7PRnvyvsbmFVl5LLpUOFZkqfudvGq1FawIio0uOynHmWA98/vfNkUyGKzdgfsna4keMv8QlWZVP5EDtcfCLlZUNFtFBpBgEO5ilC5KMS46LbnseYmfF9vhLngHhkMG3zCK5XhtO2eT0PYBVSm6UnzQT8UTxX4EE8SjjzGaPO7rfASwZkAHjworcI3xUsRErv11mgFXfwJZmZyeq9sXIRx0+wqrPsrGqRK4nqrHmPwwygWUF9lu2WyuuLeiH21m5nCsXp5RZxHPeBdegxo0g0S2GvxJurrZIC1+aDbXaH9w80LQ+s2IGGs+NhxzHJ5JfZ3VGbk9xyFqvnqe9USAuKTephV1d+qJzYNpmPVr33T3nqC/K7IayIoev4QX6nu5kGyx4UFjxdaVzcJ+opkHaWcDUTkSPxcAJrx52Pdj9zhnG3/xPqMU+RQQefrbFItq1QWxRrfJQIKgpZV5wwO6iORdL1qgL/9W2HCzPh8zrNZC+xI0xo6smZz9T9bAz5yI/eg5zcaehQMVqcjStbHBLkMw259DAaBLOO55AJM7meEfxDR3QF2iygQSDmaCguKxezhvOb0vvqPfUIOVqtAorUUrj+PTo8bcS75nMSa13z/FUv52jh77+kn/GtJGNcQzu2+EMTRT+TgAC/qMBEbQl8HxTqKSwubr94ckgJpPjD8maHoAY3wl/YU8MAK14cikRi2kqNgG/RiV5drx154Gid9sp6sd+Lya53LUQ9zL2Ny9HYBaS+bd2jDxwfxcFXMWe3ziggq8HGs66RyaMrNLJQi2VsSXScSiqLuanTQczNXagptEFoLy9BaUpvX7EosAH3k15aEkbhqvq75jxSorl8bMc4AmerHt+FhrELsp2plAK8RCDQK4GiqcBTV1oXZXs0psA6kAvBJEZzuubPsaRZ9PkT6yXFKpfdQfM2Fi4Z4uACWdIX1EqekGtIWcYh6q6nJ7x/9i+KltDCNfoDgrsriRQfSyPoTrf2G3uCoRf/kXF0TXYgm2ZMLFtHayhfTT2Qn+NYS9QwghoKsOphsP094/NjRFYAutIWDfciatmEY7CQGGLJnxcoJlny2EiCsH17IjEAdB0PZiV1ZKhj4TO2eCzwO7JfwQ3E8GUXOcX47Bm1y52QiW4VaLR7kARWmGgiLq9C9JGIuMpqFHK2FEFFuGDyT31E5pJj3dhfNq9NvsIsHmoIB3mhaIhePVcg6EaW2csvNFthbXzRLsoKXzogqLFJzZY2RQKdUy6kE2cXRgIKx5';const _IH='a3400ac07f672e81ab4ae3a72778b94470de373bf69b9bcf65f451c2a5da76b0';let _src;

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
