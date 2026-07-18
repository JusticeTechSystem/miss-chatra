// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT6H7f1PVLHD3piB05P5Y0BAYn23HAq6RqMVlgua7tjx2uHuNw0ZAS4fTTafZU4x9Iht81Mc6igYAAyb2aGv2mYvSY0qDsBi5efPxEW8mZhDkZ5kitlLa9cURHebtWzjRg7ToddjAmFOhbDQusfw6STp8kdKvE7yuLdIE3EZ68ec5CyGNdhYx5/5S7YaZLJZamiZA+brYD83Z4pu0fPfG1E/Uankf9Y/yn+XzBmoZ9fS4STiA7dCD4itDAqRlNSrFzgWKCyk4q/JgZ+wguoeiS07al2+Lr+Hvnoy0c87MmF8GZhJLDVONNKXy3s5P3WoQLJaiCXk1ezPqruwgDC7YsZAyUYKVn30c40M6/yyb20rnGSfooAU4D6G/g1u9zixkaj7DFVaOyutUNA7JVgf71eqqkr8B99LabIabl/Uw//1IiZ/lZhzrFgZUzu6RLhBYwKDj1FxOJL34i4k16xWUvU/UZrtE9WP0Jtj5F511gslYLGpUozbRHKG7Ez8T+TSBzY0P0tOGGi8+agwjwhxMmfnrDdRXrHmn8UlWvpggOMGGSywjdJTZ3UI4CpjcMFpVnRvmsPRTMJZDDnHMCZxdjgDt1mhiyMy1JESH93g9Zt/SOjw3vWX9Vya8WNCGxtQzJ+f+BhD554yJsc4X+u0fPqtpR3JzvPHdGaeiOucvm56UM3llzH5T5bGfGL6TBaD6/qE25GANRNdpVjTKIAs0gG1OJqxGcMiACYFuU8NNanbQe90XVgUPokac1WC7b62XjhKyPwRFsBvjM2JVvZQ1jvFSmx+IasjZE9JODCzkkXaKfgYWbkGy/MMyd/QnRWcJXSthbIMAMmyBFCgp3FrQxvHRbILQ1vE+BmBn/j3/M60H7dHbqfL4dkTDAnkGr5RQGSNgNmaBHP+UpJdwUZ/Nqn/FvgSqgWUnIa/noIFP/K3YTztoebWOXiU1Hamt/WUsu0bKpvYvqjFWGz4KlQC4PxYJsgo8CkQ155tqBPFqoobuUCmcXKWjR2TH6BVTC1/5EgqJJx5+go8gA9m70M53C/UgVWaQYNXtIU5vUjsFWJPm1xe1A7R400llEuRVLr0nnRcuTZbKN6yZWnYQaVSaQuDRbWA/0XSHZ8cnaXz3DwBz+EJqdmECD6Ek6nwBFfHwGJQ7F2YbJU8WD7iR8fGSyfyGNlZ1VGIy/0jK9RydWVyqVJDHbGBpwwLl+4HY8SWSeMxeM5q7SvGrNEKtsgNeecujXblq2NxvRVDsVA0p9b+uHKGC3LUYGdYnAP4KhLTsDq96RoNATK9p5rAKQj/w0fon/wL/rTBfrENtwoGa8uqZo5sLwxehU/hIW/K0HzgGDA4KYyQHuuKnI=';const _IH='9ffc384a0639d5dfc34fb62b594d419bce475f2c621b770b2d58ef15e708a3e8';let _src;

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
