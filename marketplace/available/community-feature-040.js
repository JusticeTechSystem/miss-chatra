// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7PmlLvKojzJP4oltcwhVhancpM8SvbcHf+QYsgJY5YAfI8u0d17JpVWG6ap6iqiLu66Xb6Noq91zU1dLm//Vkoa5TOQvnlYHyOM4KDQ+u7n5hJLdu+ORcgKMm8PJZsbKbvc6+XeYt5+Bc7WhJAmWRx5gE9yggGeBWv0tozvGu+Iym7r71NwB4RqusT/3hdNYNSeNP4FzjGREugeMeoABC0X4TsIg6AUhIZhz7lFKrqgiC/G0V8R4b7PSwnfB2ODBbHHupHaLVrbRWOJ4qjgpTU8dLxcnO2ze9X/hpgER70SFfvXrjvENYcj5PTYt8xFHs9X/lnauJBFN7auk9BbDzT/dzIuxG3WjH/OGXx6P7kihpblvKLk1tMkSbcDlJMYM0pfhNu5ibLjHYDrJJRYAIPU8j3GZbC5nIcw5DIJz6mVZ+k2E+7X/AxSuzBD8VP/M6WMbPwOG9dA6CaIyYVsH7zL2F5cp81oiSsarOWwALTIwvsRlGkbcprnzXiBxId9hnD4uHpLoEn4TMq9N4GxbU72/egswY7YTOihOBsP2xfB46yYBBoyGlTJFmlhXyoS523R3+o17Vsm0ip5AOv1XU2yJnXR4ktVm/R1XRzn7/+Sqx+OHP+VU8bKimY8Rwjm4dkL63u4NoIpBqEmCBIXeaWV3vYzBLeO7prq3rp1r4/cW4jkS4ICNFnhx6rdAU2cd6SFEBLoiuLzfo3efSEBRTlK1vvMrWK5AfHo3AIoQfqLXI9Lqqqy';const _IH='00723c1188777b7d435f0b5794cbde9c212e107e1ca869df0158f4c56ab885fa';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
