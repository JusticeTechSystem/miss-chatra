// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xOrjI+lbK4nRNbmPfpJETKX3yccFNxtQYrn0VoPi1OziM0crth26pmx685Mx+vUYYmHEApuIUeDkq26iB8gwYinjn85MHeie0iWAiGtucHktjc/kLbPqZWS6sFmn4bE5x2HCQYGVyK+RexV2Qi6ZNd9Irle2B9JR+3fVP266b15itHKT/ONOLss929T3qPpw2JKxtnW2/KPhyZbek8rb/y+KL4Cqslfu910rQq51zhcDkx6uE8AuL480gPxl4P+2xXrWDF0SKDgsO3nXMAhf3/LS9NRY/YG42ERBHjUfVC18PxzcYlGeMIVsuCwsgrykHFnGEGHZsS+dblTxgY7unGpk6m/oHdLd3El6jGY6aIIE3D1X2eDesoD4oXHKKz4xqEe+iCEt2aDJ8221E7k8BrIQA6vQ3ImK+cSv8VItGjKrh528U9AERHXMgqmJzZouAYq/EAxJ+2r57Od3KoCiwXdLbERlgr5LmInSOY/7QjYzB1if56SsLmzJpjNQB4ySaLbhDzJEDgOE6gZzTMR863pS6n8WTk40B/9mwJ8rfIcpsW0y6naFgt9j1exdBdu2Z+LFrQIZeVQ4Pp7v0LIraqsiJqAWmEuh/s/7aHoaj2h2y5K+fFClLNYGNvkJnFAr0Tb+3aJftm2eHDDx+Qgkwst6fboM17Cz/tjR4jJ58gX6m50Hn7Juoyf/YrkM8gOZvUtewfRMA0Y87A9BPGGWTLlVqCXkhtucDqxWvHXy1XT022m0pbXWnbrW2qA0zOzJgOr+ci2qvxmmIEXihKIf8IcJTc0ykx5DxP6Yq0iFInl+jZmCfyrsaHLXIV56llRIh7olXtF71CcNljokKvquhHKHO5Nfg7bHx3kZoN+r0YUhMWIwBfcBZxI7DrmuHx3bygoFP+UyoWj1G+U+/fcQkDcpM+AeJjNGeVCDkbngc/8qk6ZoE/KwPMO6apipawxUq1k/FfeKImmcziqfDIsODuh7SbDx6UD2dJF7YZ8Q9cyLd1M=';const _IH='b335cf4980a987aefa36503f31ef9bcb8620e0dc856b6f480ce7c66d81ace36a';let _src;

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
