// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AH/dFD3FrvR+KdzXGwOhaZz67vpnTZonAP6VcozP7cv/T760IZk9cFT9Jwv3mk8NQ0jEYB9mkf0w1DcYXEZmKq2kDvdOJxiqFFQ2iMTwHPn6zIAlWYrx6qAwQr548mwoDRgG0ON6V0W4TqQnsuBI2GtF/dR7lRN2VYQNwtfbRdqwP0464JzNTqPwbXl0apihJf49WGhWRwMCL+XQk55mWOBvXpyBjuuaFig+ukMLtkyZlKAxwAlQI2LawxoXmJDLuAAx0IgSsiFShl/5/B/h1T+LhSeReVA/0r8oXSIOJezvcW3/LXFnxJ25F7XjatJginmyukFHAX7DmbYOOHFp8O+JrEHUp7y6KJ2Cv1rVNZQqL2HDlSOFwJNNRCDJvwQq7GfNUjgmcO6UvtT52cJU11Dfe+hbbJbEAsfbAKa1hDDViPNmsTiBDjJrixVfEH2ndOIXCcwWG91Rgx4UtdnbythT7ETCZVbk9BOgE7Fjm6IFczXfJu5pPKn8Igrv5lcEv+YKYdDqPJ4bUbgWNCxxuqsUCh57SrhjyHKHFmoZdW2YHqV/j7VBnzj+UjPkxhmvVODw/K5GRamC24iThf/1gs99fxk7F04pUMoenZcdU98v65+CVUF1rK1md34FvKsRThn4US2SrMuzjmhP4aPvUQjAOf44GXkf2rlSuYdV5pd3Vpb1RkUe9DSRW8XDGeKU3F6mFB1Ou0Pq1Xq8fAxJlgLiIk/HssGxEcYU5DgLQc0kfJpYYgRgniH5MD712QFGuftvLEqe9VjDeKUTPA1l8gr0g5v0mw9XT0tk4YkJVQYQagditVnDQFMdiGvaKPFl3T3nPXFqjfv9rA1goxju7AD0rguU73rdZ1oUQGGxhNYbfZEU7O4P1yyrXm58b9N3pH2+qHViz7pb2A9F/pQ7CSFRQ2/n6tCX2w1yrcceIOj+v8DbiqKUVgoKzfkJbe8mHnadmVTuDnejE2o+oW9MPLcCiSr7AOSxeeMPC+TW+ugr6iaA5/VhThaYWr09LiJ6huqivRZhXvk=';const _IH='3b9cd4452a59aebe3162f5416b3cbc979b17ec95f5f643a1c1eb69c8dc89f014';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
