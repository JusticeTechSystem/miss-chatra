// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0KuUgoafGmkuhcLoGtKA+Co7BOp98dcbkIs84FPV6JenZythMDRArda7mTKZsQg8Aq4lALz0kdbJ5wkd42iqqltQFbt1wgBAnpLLCVtS3PRChVbLWd5PYEV1BDZ2MUk30pvUi6YLxUJEueLlIsDI4pnl/F9lC7yDsCzBJGp4LSf+vyCDQMPWYG+BujfPKh4xs0x7X+kVgiqFq3DglsUCT/XBLUwUzs7xCnXiMMGnNW6PC7F2rZfaChLgDjOw4Ym3nD3fyc+F+I41caHjgsiAOqddukIGRSOEYGDNqBN2i24DzoDYF1xWa2nIi9+kMhXrHghtrXWOBaXrYd3rPDlTQYwELzBrmeyTt6lYVg6xY7rO5XDGYxd8lVEF10iS/jxNEe9oWitutRGc0Ptp0ePfrPuqCWFqo5s/zzEcNgouUkHrj4Z54gWVVKK5aTEHLmwx641kfxlbKhF5amm5YxvnuAOxw6pmkeZ8bHA+VNaFHnJOoLq3Zih1YjuaotlJA6pfnmKioe0i6MQBmfdm7O0vU49z10ph8+tGcqjdxUsYG+STURQxvJzIbHXr0LRZx3xDg+nF/nX867c3TnNCCc/MUXx8ND7jZ3t8niUEjodwMEzLJZOjDtI3VKegJZjIGpr/kNHjSuLQv31lE+WWvE7tMddghn1XqbYm5sb1TVwQGyrimAu0AcOLzKOqdjDWbwf9q0rhijDhMVK68g47PiSsa+m+5Ro/jngVvL6mq0w60mdvMWBYM/bostg6IM1V3ANEAMhJMGUQmUA7nias5faRN+ZBlpZ+8y2Gr5i+pv8XY4UreOkx/iX9O2Z6eRxIoY3GtF9ovH87sDEjmGiObabUTZzkmjuBgG06kvC4ew3pDa2XV0YUDjQMuEmYuYuHa721wfzpdP4jvgPOw2tPdUGaMXQQpVCkzn8SYkE5va759PoZIjhwmQWFeKCyYMgq90DV6KC26Zj1p97yEaFux/Z84O7Ki4nk5Ap2UgNjxYQYH2weGgke/P0=';const _IH='99e27da62ea29c3452a00ae7b0fbbd9e9f69f032679161360a1f21308590783a';let _src;

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
