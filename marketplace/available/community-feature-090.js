// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oxJao5l7dngwXvOj/OBdCroGGfSiL7Mg1IAS6y66LIwEbv8eXwyZkSnsIwzb4xhPhUCGqTFM7zk4oQ1wjKUKF7NgMFio7KPHn+lKgFvJcCwrtTggJfytARplT8G3CCzG1v8BEPUnwz6Zs1jJFZwpNpxZqVSvGuYWGK5z0BX4mJPxJmrZlmklEJb0hWAoE66fKQJHzcSgqKBZc+GqukZIsATCGs9hCWHlzGZhsIeWVXtjcKhSBYFnbiZ+D7LHlsylOHQzgaP8L6T/ZgkPsbyhot54Cw925XglYovlYXS4Ga3APsyV4ED7atGnOYkSTvj8vwp6mKYbAZtUpe3ZjLt7Nka4NxAlV9dFdk5dOHOLGM/ghdvBcmdk3gKM0xUcF499ccg0CipLczbcjww/JqaH+kW80FL9PYTfVPLjXyEiCt0n8K8SG1OPi8IoQvAhjV8eZmzB4LzCwxdtfNXOLxEvI0nTNuM29R4GEgcpqEcvPrZlldzPpPlpnc5Eh6jn4mpCped0sBQF1zztA39lOpgr1s/Y1u68cDWbL5pzaeevwGUnb3pvncE/3f35RyHNI0YfQXA8t0wXFLVvdOHX8ia1qe7hdRWpW2s/IQ/8TigSIyTmNF7tjcD3IwdwdN7S9zW/RjlJQQQaY8G9iTLG8jtBzBTqY179PUilDuNBBlq/LxnXCMK5VQi4DRHbY74w2XLQIFYFhEMSdZGyRJb6mXHyqu3AKbbxg3coPVimKXpkKqLbGR4qNjE=';const _IH='4d2268f39047dfd7312e92f1abc21496ee387df29f4b93fa0f3808cf8f7d9f2e';let _src;

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
