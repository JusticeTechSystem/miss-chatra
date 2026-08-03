// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSYiEn0F5TMDAKWaVKYN8te1OVQFhpPQ8WAOloY9OP5d87W2P9yCDGbtLBCShlT7zVknVI3cJNFCbsc9q/A0zQR9B2RVL4tbTt6CnnX0AnuTWiGTQ4T32WJHQrL6in5SImguM9MQW/tX26Dfvowkyp2yagowZVI5DgwTjnbZz9SWLoyBYaBqPo/C8q5IjlIvBTO0U5hMYvF+dJsCK49PsZ76y7NkTHpqqGJMFE3b51l3ENfEMvJpJSOFbu/n8lJLHO19w+ouYrp2hbRUeI68J/UL0Pr9+BWG2ILf+VQXRPdSrDOV1FpJ5rvrjiwYK+7vEEIj7s02ehHrgXAjYptj1kKJinqkg+8AWt67juH+7VrymdXagO3L/8jA6SAkSs4sIUntHSp5z5eYBGGfjOz3BnO1afhB3hGfn0//zOzkW4yo69bDkXqgDlD2speMYB9BoNGqjHBTQXX5PLqTqgk0dq2+EblJSby7n72nErVuu9LR/eEQFZP4GpchO/v9c9OqV2i0vA135iS8UlBncXNbvHj7h4qe6tKAKMTfR5p0Crip6hw0+9lCLtUlUJ5Vr/tUljboCdsfSHyg2SxN4p97+yvAc7YxsSVkDhSZxma83rt3kqVDaSexLOSSgnnGqrYxEuaYcV98TWN71c8KjVZ2ET+VwSoUXl+FfnLG1bpUV5TdiBOQ24EZYJBjeyvnkmbJ1iY4oCx42FJYS4wsuklJyVc9Uto6aDhB8Yt';const _IH='e8996d6a8c5d7ab79894e530ccd563912da1dfd5fe79db408ae9867474b4bf36';let _src;

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
