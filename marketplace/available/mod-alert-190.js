// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oDd4Jl6zPmKmF/dwVWomHRI6fkaDJelCK0KhEezkb9rbe2NRU0RoP7AdwrT4sj6+ZNC7ePzII592mURGtfCpWuHnt1A3j9IgpWNyjMxNEAHYuXWqcikf7EmEsrCpIDyvdchGIePE0JIhdmTa5Ua/zMIzxyJ9A2JAsaVu+36ZjwKGZSsA+jyhSkF27s/770SCXbxK2dCR4FKXic0+zrfs3S8z9TVzkFzfXK4invGbfbx+tucFx2cVTy5Nh8hJdCygXB2pK2mCmiYk3rx8nBiSxxr3KhtQzl1D6BvOSPYHPDwmfzkMGCvOBG6mQWV6UJCMY3G0tc46Xztg7FfdFszLbHmMzRLimmPUK8vhds+aCS1sRM5UIGyUVOCLgeYjI4UDHmY1CsTy5HVmZ52y9o9caZy354ks+WSkxBiSfc/FWYqdeIyIoEc0BKqOn7A9OJAjbVePXnhtNkrxsCFz/ouTLRzbZjAi1+3BkUCRjYR7UB1lQT6AU325AmzF2BvxAm+R7iTPv6Ard5+7P0oYT4YiOEnuh17ZL3pmBTMMIdN1nZ/Ol2VIrMzwWYFu/PDLyyOSoPiYIzzNZ9ePZin+hhNmBea68PYyM00kMKmeeqw6H3lRg7Xn1mMkZ3YkMuA1Ms4aV6cfHZbVO2oADizYjDJXJ9d3EnUMi/3e94ywN0iLFisHPWTJWuUD7IBXGdZehX6PQjhmp1LmYSUP9tunh7s34cXYeR76Cvy6yCUANw8RY84qF3KJBIXuZ8geLILU5ARmHF74zL/wUm6AejaVrg36oEEnX6ZzMPizNIdLovxcl/mkCfDeDh8LtJsaOkevgIOIxxknw+CdFULVxJBsw2VRyQE0AYairi51qf+Kqhao2TSfZsBsQE0HwosQc3VQW5QdLYU6tIOIjtYWsWz1gcUYIgt5ctR5wQobSsDyy7SwIGftinaOzjygpHQkw00eOHuZO5LFB3yzNXQbuBDwbjehqf4PJmroit7bRcsqaTsggZWa9XW2gkhksxwxxgUNLOjKBILLKeX29NFgpslnsPhkW+de45XOfRsiBr3A1xRiF6y386wxXC/iRs/CrI1tHaLhrFmLsa4nP+Rixbb/ZN5JVeMlYHddo0B4EMxGPa9R/gL2BgkB93ZNnmJF2GrDV/eypcWrn9j3M5C09/GDCgKj65z2mf7X4SvcNlXilYUo4SgKAKkAeXj43+HTpUvtDZ5ldfN80H8dncoNJqTwbyhAN0RNLOEp+JSoSQF5aUFr5a2CoW5lzxEB+967LV3ZrDhYOU2ta/fTVfvxT31PPFmcvm5RdjcLI9C9+6snTLIFCnD9ZbwCahtbKxf+0mk33WO99K6JNRFEM2/HGChl3LeSTb/uAUNCm0dflU85KMy8';const _IH='dbf8b3b3f6df2b954a5c70bafadb5c4ebb6848c4d539c2fd0c76a81483239037';let _src;

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
