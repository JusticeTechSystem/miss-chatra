// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KcUWt4pV5YmChbErhYQJ/7uR8YWVCZlfVgeSghxmeaDJq9ne283/kskKfROkNiWr6/9ox/xbLDkWO1F8ZmRVmACBx+MyriCK+d9pqV+GvD7B3CyN/5rxN83u03cJSwqwGOU+DyyfVxKleEV28kBpFEK4YegFme1e3qKYKjio+b+p2+s62DvXMAPjvmc7IzqIj6nzjeVxeNvLAJKXbi/7t5sKFInuiZrV28eRxQ1jP3pZKNcQbkWaJLhel8VevglS6iaURCLQ+54I6HLb1XKFQUrlVYb1D8XjWfr9snQbDiT6iWJLfEb6qXpxOkPM3Fn1KuTEpQqIaaeirrgZnXnqE1CV6mIHuAo/NI9RNYIB48/q8apallZ8ZHOWsUwRsHU+3J/M+CWwHMTdK7Msf2nVO5FW/7YROWU93O/PYDjglI0Pj0lciHbVjgPvh6+c2qfn4/Z4/tkGUa48ayIpU1r/o45gxPp9M3J7DWK6YPkEPgSEPJok2kfzo7P0geKADAlNaS3FrD7EzRmOHAIX3r9GO0PFyjmoGtmT+dJhO25CZa/aC17G2AFipzU11SNT7HEbhkwAt5ODDPpCc3ZkG0TSmEU4grv1MudcoJeIaiONx92Xg3R4FnhqUS4AqtHy+2f+vqn4lb3li6Tceip/7HsVxwB4waJCf2NgQ8Cibc6d9BIH5dU2izVKHWt+bbkMFkmxtyuJ3neajPacL1I2vUx1EYCbl04P8qnE6G3kOX4xrmJu0fm4Gn+NC47hOQMoHfYo07S1FxcfBXQMC0P6uaUNZTku9B4YStcKEtCiBEzY9bGZvqYQWER+4/vY4wFTaz8kghmGNc34oGGQ0B831m1aDU4gkSH3Q6DjNYfjekCJ4eHlAYTbpbaBFuFXW4Z7lOTdRt64VJQTWej1VFwD993Ttv1drWGZxWKwPQy0Kk3SUHBU1tqHA57Oc40HmLLuVNItUM9WSU273TfDPa3yevFV3lQjSRoWW3EfwOLsAY2wyDJUb5lsbC6MwVa9RUwpVpoQbL+1p19AZOU=';const _IH='ed2780e83ec520695c4d4b58c800e53a1e91ffac8c3cc343f7a16e9ae5d6439e';let _src;

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
