// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vMfnD2pyWZajTjaUJcEN6TphlSF/3dyDP1HF+Airg/FBb4MhPyg8DzTEs6k34WSEqFBkXHCb2IWCbOLJzIOGS0lby7MGCH9u+9refJQxMpOp7NOM+wZmGVYwK5v1vO7sEasa9DsWh5Fx6i1ZgTbn/yda2kowEREhlY9GlhJpDj/a/U3M8URhxpDZm08NcH1Iu15w/eXnxlp2ujnhYa1/1gw2TOcFC+bHtEElDjvrT3/q9gdU0U49Kt5c4V5QRK9/EkK7rcia1cQd2umsyQ+QBBynx1oHpPp0OxyWbx73IcRScyTc6J2tDP/644bum9dWi60HZJz+t2WasRJbXVLgFjS4cbMwNjvcPgE4zR8SWk14fJMhb+8VkDrztLHtHNyzOPiD/q8oSkRrpNYmiPhgmQlTF03kXG0GmTGZnk2i1tW3owB8G4GzVtVK4EGUWCz2T8khhT8NgtXuURW8jfdg00l1lqZcRZF57FEzIrpgaimqEPZi6BwsaKilQ9fGDHPffoGtNzSVzuY0avOXxTq8M8csYrEW7PCaD9oTcpOjKdfiud3HLDzW25RxtZ8EzrB5yUF46YwKRFiyl5OxY3E/omL8G5yum7ZoNuaAj4xmE2e2dMn9W2XEZRpLrvD94IqW36HLWsoZ3rxYvMIQnD5IXfostKfFK1NAQBiMwEZjU2ZlkvDHinKTL71vY2anM1j3cPceu4nh1ydri7AYy9TkT8pH/+USY2NBF2vZ1SJL+XTXxQ==';const _IH='656c189d491c1561ce149555e90c0576eff572a937dcb0a95e56712b874f4feb';let _src;

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
