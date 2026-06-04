// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QnyzCbxr8DLvIQMZ+m2nLWrRil4/QVg6nZqI9MdJ5RsWrbvqntrhWnuQn4i/qm2H9dv+ua/CAnDw6RgFA9t9moPotTEydL4KX5qBrUPSdBYmZm3/8h+9961EhHqoZiZ3LfjtqSHF/biaFq7H1JaoShalA6lLTR3mEENrk+f9waBvG/HvWGEFqUMivD4BmTSWJhRL01+vBmylL0oBqj4I8QOX2I18vDfZ3B1PNRcIDQqxAmvR8n3i600+1T4/yc3qFLD0zO2faGnOjOMDLWPA5v3Zu3DZXO/rDzIaqNCFrtmKrO+YygJNGPgeYj8DbIS2HC0GOVgTf8plkt1hGQoFoFc6jdQ13vIM51UiGc8CicWFoBn05zC//0/ELCZRM/C49IhP7EAbm6LJCzlrBxHt9avVB7+lw1XX6pIi53OM3zzeCS07Sgz5gjQhbP0KHtGewvLJzsA9RXrNvuyZ1PkbUGpolwjB01nvZTec+I1P6sy7dUez7RfAEZ6N4uYthCvCFa4rQz17flRk9uPzQeCzPFvIiLfEUIE2Jeqak8m1vEojCDLDvICxVUwfc1hfRK4fNq9VVkURGezZIE60b4jE04/RQPDeBlP8rx4FAXWs4J7+DLX6KlEp5vZEUj3h5f3q8jmk7OcE9wlqh2d5b/jEOUVbn3d939FG+nf3efk0Ew9DUxqh+aaGkbnesf0P7XwZyiFiBNHsFhuSJ6zJtaUNKOYkzi41EaeCT171bypwhw+3Y3b2CioenJRDyzLtGk09Uuj/mRga7hBLwltT7SDG8M0TdVpRPjvz1rl2YCzmaw7v8WxwPMJBJwFB7vps7g7Or5DRkh1rtPbSUtePulhonRWHSwcjD5+c+7P0ycm0iXuh4/GGk3/5eA6VkIM3RAaAnkx7073A6KnhtgrFz+sFwmrRCJqmCZwPQrOXhSoXGIGABtNQW0a7rhwI8SEdWoXOXXr0OgqoJYeZ7VPV/duwsD2B6u776AKgv+Tq1Qqy/NOGEVNQFmop2b7eUQqGh175Ag==';const _IH='693d967aae96325ae47bdee4e5ef21f93c560d95823c6285b9525226ce97d01e';let _src;

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
