// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PR/jxILWDpCEa6bfLR8kynAHcPiVdvjFWMZahXqnzlf3JANb/DxuEzIyDQGAqEcMsF0Jvrmy87rvMsSVB60mYiA5bbnFB25lcQUtdFk6b57FsW8Zyq07tqkpr3UlHv0KE9sEg0W6zWp+PlMyHemqseM5ynui2K4ZjABQBLvy4XpUOjq1kK/5hYMhyzEo+6GQ+n1iE+Q3ee0dnzOt2bdq7k5rhg0cLDKMQXRUYzrwhHJVYjCTUwMNpwMGR4ICVG+7ng9e23hEdwoXU8rQGqMx3SwwEeeUbOT4KmMU7akRZwLZ8Jw3pAVdoIpX8jFczedYtAYEzb9uyXYr0U0w//doJpipNB+LLTDbjnvYFPrYtP4iwYD0xq/sPlphXS826Fi77B+rEftdUsliGPTnbQw43zqeFGwnBhw0iX9USgFQaSJOgPXz+oOZSePATF0rnwRemDx3SAsf8nUBeLseE5yzhC7trwYazEeygzB8BEU36Eh6ERJXwr7/OETlm2wbfsEe+BkjaSd6miBdxdjW7JXj2Ta6D/nOFEaRK3Dzeh1u6nqbxNB9M1IaSHpfRROh7K96F0bQ7AMdnxvI7cI8ptBCmgfMtDAsilmDZ7sGWBqhtuvGvXkTYIzGCrRL4ITnznqQ4G13dv9G7rVhmm9V0yMnyb8VmgMsux6p8h0dvFtGDoDSXI33qFIsrhsop1KMvStgi64AAhyjA02KyukG1MRYjyLwxOQJ5mhooTRe4HjoU0pixcWxQHMhEzDzXuOjiNRiBftKxaFK71/gjcAbELQLYOdcohIoUihIR5i1F+0Rk30HaRbO9dz8/N1J9JFb78kvdXAY+xot138vm4v7U2gk/5WbEJXs9wyIQuXA1jDWKldyn/Jc5CnVfnTZUS8jAtREeOlSW2CLlXiwPOlu/2OTtYpYMMxDGwdBHXhRPHydyGCib/pucHdflMcOaPG22szLdZf9ph83RnnEcOPu4pVAr08s1iL5NDG2hny5bjCsnEBLJjmbVnZqr/Snv568qtp4tyW7tmEPa5teFR9Op1p/FB5Jf2XpjMv4WZSL+R1HTZiRm3r4L8xVkUmPSas9dhO4fyFqKpaAmX93vIeU5MSmIsj+EOuoE5kLUKdNeyCk6W0o3iCPAlagDcFExUU0yxgnbUtj9DF1MbQlfI1Xwif0RbevdrRG8tZbh/nDcxLiGmoDEHBIZzaV1lyJvpmgI3t7UidK2cpfIg==';const _IH='0cdfa57aa97592d2d0c767ba9e200d82decbe127fe462d23fff0b588604af1ab';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
