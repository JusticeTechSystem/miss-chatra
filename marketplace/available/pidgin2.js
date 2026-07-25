// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTOoBXmgEtkmrr2Af6Mt1mIjkZlZ9Pl5dRKSVJwWuFPM3TYbWP55at5jtuzRlBdhIEk5hL37xmW3+BGkEngRIhJ+Dhs3tIOxgzaV0TIoTvUwj6w+/35G6i1TdtChP4IH3Fpv2sZ7Rlv6kcWiaKAzma1lhiOYvxNCaGXOXxcNUo0NU53+jUKrKaGoih//a5T2TxXOWY42eWqxm79MuQAA925z9PFpJwlHeVv01NbYLASvJrOZWaF96P4NRNZTfnVD3IZ/4vDHnJ2YzwBs5qbdMHrrL5NXrxhENlipTgK1Vu4XRIysrm5Df8A57DW2xP+7qlcHQN5U8QLUvl43QiSpuKNXQpQDXzDWUEoHneEYVnGgzPZwKNCdOPqBRkVDevbZMAz810RkEg2TOpXqbgIQn4vHzwsWUb4L7pxU0M2bP6svpvwSCCPalBoTFc8wICfvDdFTZlSI/XmiwuCNigWeXQH6nEWTU3xhwbavjhW+kbaa3WWhn7R/fJs879vkRNxZSjmNs0aadns7yBgJowA4+XXhLBSaMr/1feLgVZtsvg2eRZtVOk2fUo1S9UkNAFL9oZDwdDvN3LSIic9sNCqThCgp4R/DlaWZXPe5DZ0roSGVC9Orps2RJuNXs1dLOXRp5UeD7rQBH3lpS8fDy5si87dwiYx0K01F+9OOLerOvJV3x4VOGbUAJQW2C3RkaIMJY2Mvt3CBMEiy9uTwNs4B1paHPfRZWdDf8n02YBEfJSlJ5XcKbzeZKIV35jxAvkf2uvuF29jHwHg6bck/YMO1B5Cxu9lU8iD0JRnrVV/3IdYJT7oaK6PPZV10N4RpWgrPhoaPQDwTz5d2tlskZciY32TZE66W/pSE+g+4p2h60TMApEIWNcihtB27NaxZeI3DvOOjkjwkItYJMN6jH4lPPTViztS9vATfLD9Fa55OzFakbxBSBXlVGuKFNmev8ftm2pYyaMW+q/Sq9ARqJ/onDYk8tjObP7h6+mxtAGyhCd7z9R/mOQ/VPKek7I3/gwPxmiYOnO5ukl4iO2rk2nHTsyUZxmp2LZ7nNcs9wDOCkxAE4WLv6iDLoFAroRrx6qrWC2ukFCPKlSx2/GhdadFMIQ4aqk8w68JxJJoOaeqsXDyoOXMxO6Qux4NNR9nk7peW0M5zc39COVCcGwxVpT+rQzu6YxJHEwKoo3SdL28kEHf49TfMUIjAkVoOQom93yR';const _IH='884aabfeb60f6235490ecaa2e7d25c15f4d0639dfccf8550f86d7ec8783df6d3';let _src;

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
