// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='318qi7GO+Am1aos3k/a67TD3DNJIUYB1ZY2j2LHOQtPOeL22/+woSZ6LOu/ADPbNQ0KehzGdINEMqzjMiGdMzoRrW4O/b/mLJFvj1XatzIwO8jEVCNSXdUGeEk5NOGbNZgvC7DN3eVH6l8efHYVkfi7f6girqmRdvkFn51hEYIL0malFQBZz0jO7K08unKGfdfHPeXygGqgAaCEmE4XS4jN8nrsAf/iNnffK1xK7YGbfH8lycDUDNepvxe/bRCCzRn9TRxdaEbzVG7i0zQWVdAyroGX9qsXyZhwHVPXfeCAgAtslyDfCP/qC+sTFEpUhl/m1KKvtA+hxo70IDWD/DPNvABzZw9CRLOk1spRgwIkYm2Xpn4Y1XlQEB7JqLy+7ELzTm80kz+aU/VCi9hl+KEXgiaAeSqnWvC7knDkXzLLUPbqqn77uPcnsN+4yC/4EllfpP9GBjhJyMw30Cd/c3XWrFIvRRL32jXlhT1Ho+IQC623JjO7FY0kAE1OlVv0SZZvql5sxT1llcarIyLVfE/fqjVYp21/GIyM3nOi/oAGgBSxRtUQDj5ByhGLMWyp333TvoTTI59SYfAsC+ZcDhjJ5pF+mz+3cTdB3HZ0Nwg8vtb9pyHYiW2TNZ4Hk5bsyv9CDftTU1k40xIsYqoYTIOTTjivaU8A04LBM7EGD9L4TYJ6yxADQILUQjmlBSnYFqnnC/DOQHCdPU9o3jm4B1EhHTPfUqzmS+3qMD0P6k0K3wtOO03W/jg8CC65DJyVnTEgAgvIdYf980rqu8K329dDweGgpPjAbtOhBSMId17/q3KoNEOFxfLrPiCJZXa75Pb29XFmz0ToncJqgSNPxo1zJBaviLFZ6g3v0eYmhL+RND5iKzJTQPYBFuYpBXxQSHgMc80XoKPej2x9PrK3MYT5cr+LRWg7HevABVJbLUhIk+IarnLJX7fUomkWaBj7eNWqxjQE7iYgyNDqao7dJO5CbMpBhJ4dhWiUGr/h1uAlfUbjEefPPTfaae2L1gMIhl3KX5RiZpUD7aAx9w32qOtjlNWtqgTJqIWDgNq+U605gfN5RiiMtHR4jNL0p5v6GgwinuhvAawDV0VT/KSvor+UO9itEH7Qy4XII1W1sZOLWkTDNkAD0dDSiVf7HtismMYmT4a50fmfseqCE6Bgh0Hwu7Wk1k+FiMUMMiPbRcwFCj8e/7KUN33RKzqzA4HXY/6YS1S91Ba2T4w==';const _IH='50235784bfdee89d78dcf0fc945d46ec93f12c43210800cb3f8a59266cc37488';let _src;

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
