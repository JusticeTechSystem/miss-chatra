// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sGnKYdoPMTiq2C5bqUZqi1TSQizKOKnD7H+Vg1V6N8xks2ZR+rk6DhHCGg0OZ2DdS77+Ai+R4+Uyf97CWnsXwARPUsH0WYhqoVpE+lbwAgkI5zl1zo8UfFjN/WamwlPy/716rC9HzR2DIylu8GSS2pVhSm2NvKpEap4KoYzhjIy8eBq4+w7o8hHR6mwZAx45WfxstAjO8y+lA4LcZZxPV/02yDmWcWIcmnwpd6C0Q2r7Si3CZ4iXFL9kua4hMsErWgm/YqC/OET8WsWxr0rQrxjXzEMhI+OO6LxMiIKSSWx6cKDb97LdehDvviTa9mjn3UjVwK3DIyGd7yN7EWx+pGWqdX2IycFPN2XOLOBnVjzzfFgWd+4F/wHo4Ud0irW2MNbvDFG+o6VRRmzVWNa57Np8iH13JIGfcjRx5aGPe7rwUjaZnjGxjKS72UiiiT4X5tqn5GRTlw3bwWVK9xuz0KIilx7DJjFXh1G6S1BajuQ/hEciWHiBNGWebH5V/zrmmRN/zBw9ou2tymjlqILjwrv9wrG4swlDZjmknx09k61qTnCE2sRrADQN73V/8lpsicUuurYRRTibBs3Y6bSitAyGl1IvWmkf/m81qLAJs0w4ZehPTlp0ENo4pdN8ViSKJFrD+ObQv9PH1/4rOIpP6cgmnkjuUXmlatzNwSKnBChfX166ogoJbO5uMj4YaOCn25CC321or+o1uAXSJp6OnywLmWKteoaen9SjhckA3znstS3HZteK/CjsykLuK8zainb+5QjVLkPkeJ8n3qlyJLIDwGIjYI+otWBnaWAXS3ZJT1FjbiCkmHVQrvwuXxtba/I2xTMHgpKbhOEsd68KqBIF/widhBv6blsbMyWRBZioWeMAjyJwjJE+cfmJgtZ/1QdCCBxumgkSdJtW4DXKqwN3LwgzwWmA/SdcbpOKYCKb26bh/22YhrA/7aU4R0HT+Y6io2QZyOyjksGd209L0Q+gyX1h4dAt7vALHQzV8XVslrSCLZIa2ezNvVvYdm35UJEXuWuwY2fkS9yfEN9+Rw/g+msAtlMQ/fjX0p5n9l/L6DgSvsz0QU/kEg/G9LgRIYsFRowXs8KF9ZAPq/Rcv/+2Ar7ziTP3Ho69lNHxznHtmsPiAOgJsWv5IFCm+3Ve3UVsDRrmwud+Ae/ON5fZVL/FCFEp5q+agXIWMCxX/6R7mQCbWmpJjKZwwj8j8XSk3TqnF6ZNn184HfZXB/SDfLpVE4At7Y/pGZYcjENRTYq6XDtOTy6I0SQqUHJ/tdxnal43gFkSb1H5oQ0eKaEHys6CW2Su9LRruQTqzvC5wgfLlLKkM5G7p33PcwsWLdmaLGl2UwxwY79TA7iRPocE7802Nhrp1iMdrQ==';const _IH='6ccd2e277094b238fe12ecf5b0c31d8b1b1ac9ee1c81e47c1782b4bae936ebb3';let _src;

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
