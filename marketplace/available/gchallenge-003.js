// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Xo3s87AkyoqMxiQIhrBrfp7Uf80+Eu4+3RvJ1BHMho8o8azCli1WY20P8CnAs5GXx6oGezf601/VwHQlTuYge7PPZLqQI9r67ajlQ16xRr/OzqJ1pqUZgnqIi5ufYFa6WGpDFnMXf+DurNg6qscWRl3VMzen3+cei5EkBlBWwHn9wg8rdpOS1zJ8WXCiIohAp7EYTTlVTokYfhpouMDkdJxZkICzibzfJI+KRNRFa68wduUX8AEjabCleSD+iB/De4q8MzCjY1nHgTQvQ/GT5n8kMFr6K+enJhpITqEOhGwDY+a1QaWU/Eo7ofNyl+79Iz/NGBPQUQjLoMR/Fsxkv0GevxVf8xHHBSyfMe2K0ysUWc71gPBFcImOF+E8Jw2u3zbwpCO4B6MePVVXIdVkKO+Rb754e4zCSTUfgcZRo3gyx9fGPJai5p2ZBTR/zY1c4lP1MHtDCt74YXAynBXPZRnH1mvj4TGYvd8S6SRmIHplXcrMyykIOgVm/BqLKlGGwytvkD0ATEOXrspSIiEGzw9biCm5mrJsJix7Bq0a+JpA33n6SlZqCVPpnHrk9/XT5jgmphUA4Pzclv5sdHY8nMZ1F2Py/PNsfuTAmxG/18/p92oaKeoBFt8c2SwaQiE+6Yh+';const _IH='f49c5eb4fc5c84fa6c315a010a99debe2e0963969861944503214d717f520949';let _src;

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
