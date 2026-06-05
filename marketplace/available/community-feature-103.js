// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oQeM6TOyqULuHhG/NSQRTHYZQTFhBi5jnrxxNo+TdXfEwhhr+cl7mpafkXHw0+svZNhrqY1hcsgFSwxed+RezwF2+xozNMi0ZuV3IxhBI7z/1zgxfjmJ08WiPCV0V7rSmOyHiZeHTu4oA4P4L56pTqyfl1vjrMcrm+fD9VRrYvK/Iw7cK+VFqF0FfT9YbHbFo2hAW0ROa57elTuw+YlyCT7KiHmpjRbRjbHdlU4GX3HYvzgYHK9HOYjbaq5YXEzxvkga4fmWEdwO259s36tlrPL3mX5X9mltuaZ/CD8fa9KCseWzm2KtV+IZHhPx6lndTGNXCTbBZYiLLy1d2CxOepKm377XTw9zkSSM/mlfZq39v4mTG3I0T7x1LKTRYF53mkltnAakqWRLaRzCjHDtnSWISKxSb3nZiSD6Gbafm0exx+3dD1bclrVmewWaOfksfzVN8Op1gZdH+r34IfTIrP/qIVlDwPFmfQEvVyLYI5dPcbEvrvnFQGHwwcZeWcgLuC99576wFvlmGKYzzEIOR4dpTN6/XfI1DgID2TjIPv91+bPTdred7JX+mVSKVBoUi/2xpXOPYzpNIaApYSHZ/2i5LxPw3/j9d87IJFLBg1iVoxX1+qipSlQOUJ00nZ805817JKYfC7fkfEqW20AuMMGUTXWvHcImVS0GFd6ipTyb1PCwV6cAVaysIzMJt5gePuind+mVDpwT0riNuH2iMIBSeP9N9d+WnmmHXoM=';const _IH='183dc5a0f3d58ae47afaaaa35de798bbdf93d67fe3d98e132ba1d0b1bc95e2f1';let _src;

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
