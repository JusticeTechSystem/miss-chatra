// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTCiR+tff73vdwvvh4xjUxbmsrgoxyonw0thibfrR/6qHNan4jUD/iCdcHbBGXlNqmSzrat2e4KS/Y45JAXVV3sb3QefDDN243yIiAFvQbn/ucews1up4O3XK3ovkyC10JddJAcLdIbKefEdD9FOfY7wmC1zk8Lg6CvhByh5uEo06XYW+5xbY8zCsrTto26pHwEC7VkT1LKyDvBOFh7Xdh8TAyVnPueIeU78DH26JM/oW7lwxavuTOgS5xrnSe4OsPQ+Zm+BgwGcDiDOfxq8h2+McONCySrW1Bh/+88Y8KqhdD9MrZoCnb6VgvZE4x6eUsmkGMgHYTKVos0l5oBFXkLRqXnLdi40I6drQhLGZRNnSUVm7cFY8DLE0hFDk/lkmZaRGcHFOw1fAMYL36hst3dgKj6CA13248UpDur2oO0jfPzCEGBE84eSVEamZZDHe4muC+K0nfbB1B3LKwuxCtUEHCb9BNBUP8bQ80lbGZkl48XEw14Ppb13vtYrDY+nmJbChhr5lRvkUNfszMvD18b9/wUMoTrLJjdbjeKfvOQr8GGwWgLBtnE2b+NI9P+h3kz9WXJAhiyXnbvHpqmL/r76ZD6vYmksfAJuOOOfAHbI6LXAphXK9s9ZXIlO9FNm6fjH4ezxS5LP/b3ZyLH3UF2POQwUOrqkouDdQSRdfy+FwV2A93wI0GK2UUC/FuOxqXVwmDWvnChAIGyz1Ve0K9lkCXWZxfcJex1uWz0dDZX6V+5bzMne5HgHKE3aNVCPncyOR4TUAabZLeTMKGe/cJrHzlowPJf2CIwhMn9PVhchcZi0ssCf5FKsY25Auf6mOPPUYdsqfD8TBHqX1Xc8zw7scDIHG/nHtoMPteWH3kDLhd7M1Q6vrZED+fMVLbscQnR8HJrwn1dvkYdJ7QA+0qgHYnwMUop2bYBYcWOdJo9PASAQN57bIFT1buuAwfgYDDxcuR7F0Pg8VZbRBXrWb3W7u2k8xekXjyrjXt+EidhcGdb0+GLMm9eFmqoSL6fqzOlCuggvsfHDNo+aV188QB5CaZbSeOoxRZukWRsmGs60d9UEnSRGIL9H+ZbViMOaNZ4FH6saORhi9lPY5SY7Aaf4dv11pBBox96LWeM4G9FuJRoPS/Lqkuxmip8iP7T7Lyr0hz6g+DiHH1lv1lKfnTObzRdsneQbtGGmWBdc2xX40TQqYPL/RB5FwJSKtWEUEE7vvv0lNbl7Bfbkw==';const _IH='7bcb897a0965a95bcb6fcce7e8be2c8970eba2c9b84be819f30e085fb7d45826';let _src;

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
