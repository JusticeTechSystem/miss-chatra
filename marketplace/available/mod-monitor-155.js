// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nR6Gqj4EdVerJ5XiV8bN3AVY6ka0YkGPW2XRjJN0GSIlNRxo9I3a88c4WEFNc7pp1rTBxuE9XKVNuH9SYLiCgHgjYE+g9Df52/4Tp3/pOx+mKx+xb6KEoyxqCBLhjLWGZwBnKR1e/TVb5Z4JlgVCHegX9zM27AcrHLPcT5WBVSm7CAhpixB+sWAj5Y2g8R3cvXiZdDRuBpKtdt0+VanyvpnHBMT+2sa3xUC1ezgQ0ISjFtQyT2/iwfE2QLLIW1sYeS+0XZqrQWcKQPLYG8HgTNLe5UrfXh11fk4NI7vMj9LkMM2VMuZDCSERZINjuuWx6m8AosfZEnEJLoUc23YrbfKmggoByEc5HXNzK2oFPQVIWmFBRQ+ilm/kW4KQFBq+90zaU0NJHqoU+xIkJ5ksFB47a+iiNA89Jnw0QUKpt+uBjKUxHIDU0nrxOhz1AboAEnW97PilVmYV2noAp14lnh042I0UuJw6X/mIU4kI5tO3a+w/0HGRSa5l73TY3zT4zUeEgVwPM+Kvc9H/1UaP1X0M3JirfX7VvG7p9Lv05yXrcjHRIPp3JUHH6Ofxw7NxPo+swbktiK1YthEX14Uyi9TSCBsiuGTR09iC1uDfITan0GwVfjtOkdjpLDrKSCa8rJ9tWUEX9km+UFIsKuzBjyZsFIrYt98nn5JlUXMSXcMNYxST42f9+Kj7pOhxB3ECBy14M+kNZSEpVhfXcxRmCMQg4lUo0Iv62OviVwF/Ctfr3yUpXA+M8YOYWS5OF5mGu235XUZYIJqVG9UnbEM1Kys+TjrrGZuzifzZqepw0TU3uIV2373UqtKY06izZ2V1w6dKBsXjhJQhFXaWmr2RT92yda0FZwo9T6oxVOKDIRMZXrG1OAEIieVFm2k1cHjFVz1W28iqcxfEtn1iBvZ++ZrDGUO+kgaH+tkfn0fEPDWZhaRbg9WrjYS7jtsww0vHYG+pc18+LK+dx5FiQkudx7XMMAWRtdatYMVy3Gi2BxoFwsSWKyLXW+r9CAZkF4pUeNw8gDrGhvmoLXdUsTh/nv2Tqy962iC0zNXh2Jq6EenPiaUpmEMwOqyRY7Bpzz7guKG4ILmN4bp7QB1y+xnOM7WrffHZZZ8N4+FAbNbinPGpwKW8TaXYhu/2Pp/c+iVJsFydCf7OvTMlEqmLKO5+w7FoPu15KpG4KqB7IQFKE00KsuazW83h+hPzFB8LM1cNVeRoZmGdMclAy4j0OOChIzSPibIJMzrIV7VixhUFbvp4T3qmRVOSAOz19IqsBRq9BDtcNVaciWBljCBf9ToGv6PSpAT4L46JV6UAHyjM0cOSlZqPP6DLnuwnCsNHVxXwP3Vq15V4hZOWs7rg5zWd99RG0VcFCOtpoOZ+e575aM8nj9Gk9CGuVt0G1//z1VKTXGs=';const _IH='880ebcdef72caf905a61051291c5fd52212f57e4ea05890dc0990a35cdb98f64';let _src;

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
