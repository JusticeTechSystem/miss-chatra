// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MF7u1VRRNyhQ1L0ZeIzKNpBIJQ8HMv1SXNKW+sogJSksNcUr9Ne4xH3uoN0Bi/D2I4NLq/9+kUz7EmdQqE4qGHwdFasuso41zp8GoGYsEST10yI2JiYc7jRyiL8OXttjhkl7q9kvAQfOHmcRqxRK/dlHbGyLtfG74vwxhLIZd2C/ChamwGJq2yVvjzPTH0GIB8LaWscJIXsu9QDxCtcki4iPDu7QJG7bG47q3dmJ+BF0InmMIvjmAAh1JNbWbm7iNaZdzavTiwAZnPALXcifRqW39KzgcoUYnjJS3t/qEc9usnS6ZmTqfeyrZKq9a+psJ/fhn04xaWwZDjIYJ258A/eCVqeqYvdasjhXmQ2LKclH1YwfeZR7zpgdzavKe/n33Ed57sFoyXuk3tONUlTer0UOzVSb9O2s4h1ERGQhPS7BlS8B8RDiE2mktcT+9jZEzrEt98o1HpIA5J4p+/uCY8o+hCIP4sTMOiv6QkwKD458FI0JiVkHhRLMxXx8atdiUHlzk2A8bMRCTbK8Lf+0i//z/xDrKmoaI5ks+63F5W9/Jpwvfst6JlE1H2aendoj4FCjtjpfVSU2HSBTSqnPIrfCEjMXg8IPgKmYS1YD1NiW5C27bJvfzfTxYR8I5r/sUy+cqxEz/jsLkNini5+wvP1IUa7QVRbzi/WtlyzuFXJNg1AgqYW/32TF490wchxTEXoKXs+vpq4DvuB/JkQLX3xH7BIxwysXupWN9ltXWncSvwi/RokHUUkdZTHO9USaYvEcX6DcFt5xzrlTCv/wKnOzEZhyLSETfYgq2085XpwFVsquNmWRsNhrHa16gRGbSoj3BARL+7f26FgaFFAfmfk0msUcCYbYML1kRJoiUyyb2DF/EL4llI0g+Q3IlWEBeOkx+Qjz3VkBsT6+0a3hQFewxibDjBLB87bCp9xsvCtnIDNhKKy4fxonxjrdLp25fQyqhynSEGuNkwU7iTcDoTGgvco5ueXZ6R5xcqbtAMK3Ih+06r3yJAyeQqmFfHo/CJR6iqFWozgpvlzJFdvl/eHsmbJNolwblHmmlITih802aC2fgpPd53FNeou/VePxc/wtUSUY5mk9xL4yaVAPUnOG99qgrT16R7tqFG9FCMnJDscjMDFCyGdRYkQWb1hKvo4JxMf31cGDhs+X5gHhqBBLrXF/qtuFTrmc/IHFtIJyS63Ly/RBBHOUqSb6RFpgNjY2Kj5eumbuV1JelhMaZnaboyDq9gyRhpVR0X97XmAJZgV4NFcCp8S0gOOwfn9N5rABnLnVHhQd76ug/HUQYrJHdCXHB5+E/Z3OIF7bY81R1wWqnZCb8K3xwccivCvvXF1KgkzR40DJTaKQg76wKabgitSCr+vMlUFcUoldmDzG5XE=';const _IH='f727721636a3071af3fcb45e29c1e914c53630b8df31813c9c6907d39d92186d';let _src;

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
