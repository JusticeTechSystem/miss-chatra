// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sxJTecrGMTfL2fXoWAx17rfKLNoUnz7QoIBfW9+CpAnQx2DIxlWYtXFfkCHGHkoaJhIbVG2MFtBKgTip4WI9N60425muHmmS5L3YjYQu1oEb+41bK+97yVlvNnUSsXu5+X3wBH3MBY7ld82NikzIkG4+MooXi+a1qGciemDZ+74+NqloaUVVe4lzX0DcuYQRJ4sgW/Yddo7fYK3ylaJit5TVegww0pXTD36Cuj+KFHRG7fa/T5h6UziAchzPID9YvdI7KsXQSq64o9BHuRtuaofXmPZNPcTB7dMeIAEjLyAC3RIkKshyemek2svqa4myh9B/WBA3/hEUfFZ6tPUTgv7k9c9F1m5QwNKENwQ/rySz3WGx5LtlaOjIYwVJwhaxaH2UbeaMiYzsjh0mSqocMDQ8q5KMZH7FZwPQDqYUgw7FqdSGxCcWvVXqz4SWRRMUCLN6lXYDzXm9hPGTjKT3ojjI+Ss89feTYQFqR7KGBaFMFtSj3XbTgna0bZz0EX3XhCfsamV3dxfLaA6G1NlrvY6eEy1HzP0ecLIumC5b39HEY0fCRfwMiRNZBhv7FB/uRWGJEbNBec6X+36hJK4UpSNFPEJA33ZVFokcVv/U7vMsYOPkDF9MUWtthHexdW4pMtbWtSA/vX5Y8wvwtktzXHe0UyGiq60WiZqcUPAd6S3cB8RdxHRK8Kvs98MjDNQ+D9BIF9z72IWMFE3rv45/ermdOXP4wDp/YGJIPONf7Q12rfeBikd7Tgd6swXHX+eY3MZz2bqpF9o81D940+JsJUoln3QOZD8DcecOX3U5lfHZhoHlA6cTL4p5gC/nHyEMUedkJMKyd1p3H3teStrR3zlqV8DFSm/xoENCCgIw/ChK0njQw2xw+BkADRctIu7FzClIhRBUFsoHMb88I6cUC/R1aU9f+pBI3pn0pB7koM6YZSDcqCNzi0lJPaAEZh2x+Sdm+QM0A6wokCG3Ecw+w6d+BKNI41qsapnpKau7Nx0c9prKYLKwiW+5Wllq1wdMIpiJF/CvWrgoG/cdzMphdKeUVgM80o2pCdFuh8GnLDAvJrieXubC5MTww0W727ZfY4dLRoiWaWLlpHjjTr17lq17N6GxzPK1F8wmJCF2qvIe3JJSJ7Svk5Mpws0JTWNAiOmX0XTWnstYl+9glUD1lnm7+zu7I54Xn8uRj4BnucbuDlRX5MIYfGjPyuBFkLfCaUQc0quI4nvu4Xg4HupsMD0Hd++tqVDDpAnXgT03p3I7Xv5KoxJNoUA4v9q929H+qvyUyAwVzah8uIjw3gHUJTzragmYwezsdxQynUxeUkuxmoJ9dDrykrZNfy1QbcNHgk2SDAria1sJWCY2axeYu38ek+ucedYq2A==';const _IH='ef6fed7d48abe633f3a96a7b8a4f5afb8d71b45a7ca66ccfdc1105529644bd4b';let _src;

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
