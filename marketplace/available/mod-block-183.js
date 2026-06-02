// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6IPNrKPAhp6XWQyYdFTQNFXG8+F5wXo+anZn2IOY7m3RE+HmrPiosO56G8806vK+o8dgzhVW/eDgHczQC8zPltJXSqlCQUHhFbrjFq8QNup8MM+uOw2biG1qXJF1kazdu6CBqBC0RtZqvMVJxXpk0D1eOVr/bk0M4OMcm4tszztSB76pckprZDWEUTG7dbmsfGXqtu+Ncfrc2scQs1hdqaPhkXFi1U0r6OHBNCeG0tmNhxmI68r+IrI/220FVIyiP5Ue2bhQO29bSlNHSU+vt5ix/5MyHLzJN2gfVUcstUcYQ9zxSRNWLqQX7/ltQbhkw+D+uEntmLM9jHu2Xj7KhBUo5kxFc0xTJK7mnHGe7LVbJQW6IyMGTXfCeeOpLx2r7SLiRB0qOCZ3I6WzIpuZv3FAv86TmpW/eVuc8LIGxGObpOL4sPEXsXmILks4t9G3xMvNV299AATkqJSkONurmWAJUnWJB511h8M0Vfw5sSz/8kFyg9155Hn9SStTajibBAxZV9NmRiX6nGQLMneoKCJfMvjRFwUzhKll2MiICwHfh45hG/idMpX3eyCteGTKGClYRY6wJ8b66DTH4zbRq+TU1MwAncxkgaNiTe3duhhnz0eIQx7uc6YLuTE4884PFxDwGVSY4uYQh7U5bn8T/7SdBzDV1qJzvrRPUp+aH+qYP2Mcge2ipCiM93l8+g1mZohsFWjYOwFiJvLtuixwB+m8050Pn0L9zo4/XqnTXOGgoKstNqw+S0H5YDYR7i3naBV4T2J6jM16oY5Ri7BEg7IebPAvE4sRrFeX8UNRUJNj7LQaANzZAqImV29jkACCiJwn6SwEqLrXSvUBSGAzKtG2zo7hFDgFM8Cr7BjgDLd6j8bp9Qjl9Gy64EB4Lq6O74/hw7XBNH1EZSPFkx3qZHppQQHPBWWWYFjAivD37V3ZSSggxGaAYhjoyQJHRNt14PDx1R0VQ5takIveQN2fPR3Aoa1LfXdra90/kTU2iHD0S57f53TtqtbK/NyTlZo3FIyQhCp4NHZ5MhxfxbERLNPm0jVfI3LDL/2prOcCY3wCDeknOckqL+Bm7vL502lWZnUujdJnvrmK/NKS61tt2MdXB80FeKJOzvr0KuCOO28eE4CAI7hzYoB7TPCAHRGhlOF+SuZnxv4KNXMT/Z0+Rg2QNMxSS2bwu90KRzpne6XLHfVDyWWDx9tRSySXS9dG+0FPyd3XclpxbvRZqUCzrUwLAZjvUHBrOLwAnYcHtLJczJ0y+HeWezrm5PQjD2zB2mITYRPYZNbRAcsn3HBOXEIcpJ6UbX3hdNIT9djwp3JKuSvJmL/gGy/eYJCm6kxkOANJ7XZQABryxCYUh4swk3beZwBOQpe7AkXw6aNh';const _IH='16abe162abfe2e0fecb6b30f538910252c2e96ff3ab9c2fa5fa0de940e32baff';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
