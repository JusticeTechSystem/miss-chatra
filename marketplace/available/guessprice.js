// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='a0LDYHClRd+owp9/6R48j8V2XzmFDO03c5Ce/2U1so73OTfGJNual9NBRVKAW7Ahg0f+OVmQs7QGXCKf512YmcZZygeVEr7SuJ3jfjYpsKfnk1JNK9zfXqeDk+9mhMYsoqBeeFpopLMRBmoo0Rhf2Rly/SRz1MJ0EPQivm6PbevBoGBPZoAuq6ei22mdeEbg+FuWXSwOLO14RNHHrB12Ui2gxuUEDALIdKjiVauqNFCfal/XdOHZpO2g9X9IvrIWF27wmelgIZZ2jyFrVlGYdj+8EjkQzaQXPbd2bmCTB9uHa5TY7NcrlB58CD5/11n2TWTx17VDRAm7cr2gyAcApfAw4UPbuEXqg91LBMpwOADwypitL3Ob8osVO4ECQ3eY2LxTFHt+WZJv3DWvn3O0ZqgX2l5kEbYv7uJlB+X9yJgKFx7s/uISOaQP2vfY9sqjGunm1suVlB6p5v3zfkLlWxbJ0170cS5uQ2+WDhFa14TfRJFEtsLZp288FfSDFTFE0a0sLgLXDsjuqKgyBVqT6I6nwSHrHa7a1ohKReVP547pEww+y95gfarZRbEgqSyaNjLLTCabPHldvGaEQXhXUyjcmq6BFUvqejXZPc7Ijpbl8otSzQMAbIB3Yv1feICU6N5lG1Z5sTYTYuMeEUdxSV2vTxbjvnAuwyNHTE4bXXHY8nmWD0GCiQT1EoDzQgCVx7gA+JcHBhU5Xt4a8f4AemoYQsnYNKCqXW3tNxgHVs1nieIvqX8XpWn3RQThXo43zJx2jOmHU2qyPnbNO34dwX7sujK4ry/gDZztPIVxtp5Jdr2Rtb/n3N14hSttd0cRyxJ9Dvm0Q0x3c8CkBJeMMj/kE2iixFQCLIslugtr3XQ6Hm00gg+IcMFZp9ycZDtyhJoTt7gHG6w7EJWPN4LlCRK976WO+wjnAFOaHs8ZTabPakrJUN8ALRy4IFtpTu71xsuMkpewDZELalGfK/JQVUHNFCcPsdT6ub/SOCaw0KO4gBtX532nGNhFRjwVtP4mXCvvxJCBCdMTEB5dwHJHBJmzkKDBi/CY4rJv/211CN5+FLIrgvYR/HiRkgSo/9CZ2EAmO2xHnDAQYL30pFB9Am8gggic0jBUJ+GOA2zvriYcjNooZPoKrbnUGAHa/IQZsuswomG79CzK5XLFgoOwEpRf/pXCYy1L60JN8zeUeNnaaTSOo8+NNqYhzen4EcWX9Gv3pNw6';const _IH='520999cc74dd48a6af74af29f0bf73c1af5cce771e4011463e1d96e9fbfae288';let _src;

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
