// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='V47Y0uaz69BtgSv+5MmxwqSzEnwPqbYJUx2bXYEMaeNaEJea34odI2G04zGCkgZzVNesKRg0M7QOxhuje2Oa+C8azS+wGpy/aIMI5sshHMAP6I5XBGba1ytG0Hsrld3g9kMW20UFYDZrw7Nitdrm/7AUUSb/ZsENl6ljSVJzYFpo3hQVP7zS4+8/+gAuwS93l6y8XroymkbTWwRN8nrkCGJW+EobYo4t/hbXCwZxVjgQYZWhw0ErUpZiTuNpzlSLH4ji0R0Cukjz8OEjcxyxpCwTxM1fdfdmzHZGjHLh5ucUleSrjrYdpG1u+pK0i32m3sV+B1wKbB4u97cjPSeBUY31JqHO4CNzJouzztqyRX3MkT3Whbi+V8wCAHa4Pu6gbmTzh65x4FNfrrYMiTZVdRMReh+Cc/XKgL20XRaTHcUhypc0tmnrjp1L0uHJCNsLQTppSzqDHOnB6pT5HLCI8OHKk9LitMNVWqnh5hXNm1+8Yg+twpqTSu4RfXWVhYPCl0LJw91hTaK1rxgwzbAOZqeJqgMffBjmRxjfLRoGAOZn+3KVzr9N31NlPT8/d15Y4tEg6Wu2omu8X71Spch7URJWcyPL89gHckqprMIuXy2GJSFAQxjHz/13qBV8JiGsETevmk/XW9Ab4mjIZZdXBcjwjGq34zaqoh0gkeqYwGwIES0/bQkgvSKH0TTxipYCufpMGyTRkBR54A+1Wt5340IVuF/Rh9ATu552tThg7VLlpnp9I0r5H28Dcmpdb0S/DvwSTCO7/2V7nmbqY58BkOYYE79geXiiRnOeFe0rpIUO1TyNG4h2ykjr1+ePve4gR0/eaMCK7sfg3Shup37zDdwfZTbASEcgMILkh4Y2PGfhOeoJiGcruTuZu+lj9nd4uKySvWWbxD59ZaExMCqI1/oZAjdT81nPXREJGEgOBCGVwUERZQKUCpk42YS+0xfdXjdseUTgPTxx+1rKWWFufLsvqe63GSrkjXrmYOVS7Etaz0GPPwgWtMMXkOSMaH4ZZRZBtyeNbvRmamBJYAHEnu+LORtZnxu4FTU95og8Vac3Utk2zKmjR0gwdeYmjr7jXTJ+hwNY6w2X+8se0yUvNqEaF1fc44JH28gVsxjuUVmVMkcuNeJ+e+ggwPnZbLQ7awwg+yaJP5ymkK/nmwDKzgDoL+WHeT0Aopx3ECzNvTIa/qFkArT6m6XXoXM6tbMK8PwWFwvNN96mRlie9/lQHfMM';const _IH='df0846eead9c626f3d191012b4da2326a26cea1ab1a8694a6924afea32a20cd0';let _src;

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
