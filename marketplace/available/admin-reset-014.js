// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRIBGRn1PEGsBxJepDb3fLUOk8UTtUA2oBCHKz3IRbU1iPkXaO+0m9cTeFpN+QTR1N0Yft4uJmJM5z/CtQ0KKA1WWwt3/96aKNw1qIOp4rkvbpfD4f8prae+fqv7rsW5as3PvhNu1eCtyMSpkngDimBgm/gybQRKVQqtPCAJCSqcOXE9aPdAPnLkoKASp12x6p9PrzhVbHtlO3/0mMgyYW3DaSfs45RHRma6kyi49sRUGLZHoL7fyc4YB3hlPZYtyc6yg7QCKoNSOxh1GOdOYxhtwZQiAHAHUqtMuUTc4/LIGM+k4k+wwv9B8rYcGUkl9kB/S/SrfQh1Y7p0nxOdaprsPV8dQ2Q8pF8pFAHWxKSOIfTOR7ffqe4KH7ZqD6hAEDlit6rzAj/Uu7zFETloGsxDOwTNcn+8O6UdJzUYBKKclpUpT8Opp//y9peZ48v2XjHgwiZovjRMmy23zIgTvJIQY8OgV4OLbcL3mGAvqU045a6Yb0oroXXpQLJk9P26eslWV2XRKi1UBCpuUVWfGgDLVubrF7IjQl7g+vb9JFz5Y5QOcwTfMYI48yXhNuK8INifgiy5DMoNgflKdpYnn1XU5BG99U/HyfBpJkNjnuF2WavD0tFNG43S3KPyzuvuBwsxfM+Yp8tFxYlOapJLSpq/qPU7F9u281j3gFa3DLa4WjkRQgqbsyGNJsq+xBbqHa6Ysa257+Owjg6mF5VRxFqFDP56TkU97LaxMBWhE7hAzgxFQ6u6dkw/Nna6pYLKevQ4sQgOzPgkcd7h70Sd+3ytixCU0922uhA9uzhE+53l68upIx5+16hfS6unv+Q1dOw1MCIR7XWjWsteM+A+k0rkpaRSDqIucaO9XFNpHTO4z6eJb4d3kxlyoz/xnHiqG3v/uezM72oa6xtQSA3Lm5mlMfSvGsZ45h9B/ITAXLsbmyj4uGjNQeXSMhgyKNvxoSrdX7Th3jCUiknFEHoJWQFI+ERCGUDwqjcRV08ErXOK7T9pGQVRA==';const _IH='188e279612cc3739c9ee228723a4465d692a69402d845bc46baa1ca2adcc867e';let _src;

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
