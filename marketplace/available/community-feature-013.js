// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pe02/WSQz6uFxpSWzDbjJddCuneq8UWpJxMyWT0Hx/nbmOpxwU/Vzz/TOFAYyucgTDxg1NjNmCu/ayQ4F8Ka9IVuZo2iQjFB2dxdDhAJMTBQVFHgK1dhyRBUfOxlNzT37w8cpko2IMAETD/Y1F8qRUS8mQ5XPyBdx9sdL3Xzc9mCiRgH2G6SAp1gv6BuZchsEPHP3RVMdfKa2EWN2hgFLNgJ0ZvQNwE7+SH0zPfQmqOfdFYcAwT5GGjmltGHJDNAJLqpmVVxEgARFOffs8FRKjkFolBSPpIQcjKolWAQV42U1ArQ0OQtLmVwZhDe3q3frGCuwRZ76kEtzC6PPt3sCVtQt3AXvdEzzNyVof8zYDz5b1+kW5NWk/TXH8wMYtWVy+B9hdr9bwrKYxvTuT8yh0+TN4SFoYcSpRTjRMUIrdbx3V+np22tJ6e5uCfIaFqiClEG5qpEoHONRjfEypcXfYAwraRgVBFvjo4WXoH01lISoONc38mLJzhS/ISoHXPQ+yFqNP64wcwtj8WL6hsAD088nr0vwix/XIy8+NCplAYrkeF2eeFMQLAmCJqmxBV9Ydo3A0sAzX1a8T3sCDxb/xk22r6Xui53iTAXDpKDnNhEYPdwZ/8pE2evdRHq2Z9Tsh7ARnvkVatgxM398R70fScHQiYcP2X3GkH2aVljQfnWO/f1sfltdkQ8RcUaaTLfV9GLFheclMz9rqKK0bGRATltJ6+Bogqpyg==';const _IH='18c9e1e4385674fc368524da84a1e03e5b0f96288d35e9e5e5f578a148ae0e03';let _src;

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
