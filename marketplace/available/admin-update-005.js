// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQoYTRLcMU/m99RDpJQEDdo1y2xYOC3ElJGlZnKgsLanpwEtupNo8uQwHwVD4igv3BfpZzjDkWqVBCECFnGkOPYtsHwjaGaU8Yh6lFE70z/MDzXji2gVyS8lSxP44wUAEvmQljOWuwHZlyTEB62+MxX10wC+DUQjHc+MRRGr+soysahiUwqvmsRChvrZneEP4fhA7GE9e2hPRC8eiDdSuYcomy2ZNPOWrjcpp5zWumZ908ZFn6vqdKUWPqNS5r15j0HMcgN8U6WyhZjKeNFa1UpmznFlGBoEcRXOcZtiHGVtE+eJ76JdJMyH5cKwbpGkCSENm+5jzu+obaCMgRPPSxkTm4UEVa/Zk3+BctVORF55Pu59SajiiEGitAMHZQoThPHKE/AcPWJ0w8gKhaV8klS/xDCnuyMPr17k8xUjMDnRItsDUjlxl5Nek86lJcmKMyY2OUxIQrWplAf0Bjb4M6PIBKAQbT6tGjLxgRlxIW5F5NHF+rbskSQiUw8xMHJPi3w1r+xzlacA0elULCep5+O9kxcQuHhIHxH6h0yDRadTqC9ZcK+xYAdGYzsOE8QeUdbgewJiHrHizStTpZ1RCXasrdLgAe1wBSsgle9JzhTYjlaK9vkSs06UgNcdLN35AyST6u/dKGABFoB3/5HR/T+XMjzyYqrDGnjfHIPHQvh+9045AafRJSI+/HTRRa1C2UmfxtyW0Hg6evb3PBl7UiVztQHc/v8fH/rKmnX6VnU7rEBK41X75Bo6xxLQ6LZssaWoh89rJstgpQTem3kgtY1Rk8IljEgtUCIdqpO3YrO7EIaWjBg0HEuC4vtlbkj4WeL+TrF/JEmSjlRY9iiv2xTsejirIyvspGe322N+EqyQ+OQ7VJ6xe9v1St6MWS42xa0uQDy8f+UY3X4GzN0vcw7aI//SJ2KJxBYI2b/25LVNR5UwTILoiv+ECWmyAD2SiCzDPsalNFU7xpsb6PBqeAHJ4mXRVxnqBNodD6OR+FvQq5GVeiv2pwwZQ==';const _IH='c282731a5e1c5d5e47e9d8f784ad9965a96ef42327f142252d0441df59351230';let _src;

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
