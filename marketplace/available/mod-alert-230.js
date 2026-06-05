// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CJNOb7sMrTPbZ/VfUInYEBn/yzDQX0JIuKcB32oxOgZYVTXWxV05lHeTkMPZ9gz5KrlBYR/lhpU/gzy9EM45idMQ0MWBoMndxg/0BW68WiE46Ag9MuPjvPNIFRDsNQ9mIdidH5WjXlyVr5t/fnHsygPCZP7+XJfRj50EmOcGFQbGGp/TskwhNVasQJx0yKxS2p9LYChJC5mR4CIDXOjZJ2TZytfoqtmoGooZ0IoX4yUPWueyREuS7GYQu26rQJiRw/Vd8TfOKLioWcneSTer7Zo6erpV3n8GzQ0yml7bLWF8rDzPV3R9UQZMJSNRGyhM5B6RCjDD2W5m3VWoAQdGjZ4xdWpkmd/34qlZoD9gf5bqlr+PxRS1mvNSYr3IgRR96PRDSiaVlqnBDmrg0XVBDEGhff4g/10+Fg9kuG5d1L7WTmC4fwGSfH4K+lz68mVoScq9ov0l1gsNdPVK6kG5nlY3p3Ei/OCJ9s9+imSqa47iNSkje8KPWH5iDz7j7PCFqwc9WG7U+uCP2l3gATOE1XFaNEOlZqDO+HozM9m5OCJ4UF5SwqC/A/kYhdtei2b6l9D/MjBji4jwMkIM7d/2ArUwKqHFglFV+uI2w5DRG82yL9BZQuN9w8G7u2aKx2785HbU6EJkMsu6UkaiCnOTznTj3PW+4gqC6m3QahirlNO4yYhvVK+khO84rQLtB1MorVyE6YjgaC67uiv8H/6GDtVfgi0ZJMHRpu1gjyzgP9lb9U1LIpY3FCEXKeXy5LHCb/vtK7ZD+DEIaK+gmbRNgCQCG0JghSlVRxAZVsGxBNl1wKuWsNyIWeQGGCZj68SyZIf/cjrQOvqSij8wy7MJpTc1Bc0owUn5D9y4nPvEgfS0cHJbH7/wL1yCDYcOqIRy8jo60Jl1ELw4ihkrb2Otha210Ku9Wg4XbOwBIh9su8tYNYJTq74LwWMv+gxlOSBr1rf66ZPlMIQsvUm34l+IKAciRy1IJTervPKAJ3VR+RxAe5gI/Lk/vS4jRP2RnSBgDx2/6zA4w1FZWHgRQshlial5EecJhq3qD6n2moQiOm2oMsjuLyw6Dhed2dVxnJyY0mEZrd9tNCuH8OyPYopOX+htboszLWld/d6j6PyEoP4LUIUAqK5+bFb/nH1ouJgzrPlYEKYUlvm+JAUpSfiBjoPL5d7GokyvYB0FFN1gx0D6xy2DzlgcNZsdYVOGADjo6AiMVxw1wkFCaMOr0aGaPq6yhIZ4n3O/Ca+DbXp+aFDpSrrivTmLxErjt4mq1xAT1hrzrgI9A01yVfSa32I45h9jmv7x0Dqi806Y9FcvVsPQ7drYFzWPvfKHhMwpLlLc4JE/jbCq8DmG8J+0Ul8JDWeE3xeKx5ILKXa5+9se';const _IH='a8b849afe39db0b169e832212cdbba10c69892cee88e54d44d6c9ad9f5d73ca5';let _src;

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
