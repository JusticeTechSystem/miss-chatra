// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRaFBA5yOPXLNENzv17UU7/iSPW73Il8eRgeK4TvMYJH1Z04Lv9h2mPEzTwmneingnDOw7pEvizS30dmPvhbJyD7En0qWh2iqMxg+P1V+m0RpBLAT9ORV2uHTskU0APiRmjmdtciVzrPE5r4tmJ3Ugck7W2/hlgCWJ5PioOvHVZB1RRnsEBTRa+37fq/yMtvzGz0VGJy+o3cpgrfWWmf1JrrjcLY9JizNYpqtHq7PNixzWNmn+tXdDcger48XKtlyCjmyKh2mXCianBn1lA+b4msw5Fn4UfZZHbYI+K4sbp7O7ZAt3zh6i7A2psp5UPxSXZh87BqlOLPfGziMZONbRPiKWnl+sxoivS+M5h1aF6WZImVHPqvDuYC7Gq7Im9DwIpz1Pgabhqn1DuDYElNVwPbaOETNYBucuSW3TBRtxa7aKvVo0fAmZfUe9hKxeoOMlJlIwmM7b22kELBHVgxl+thrGDOwIsa6cGtFax+HLngcRYEfdPn41S4EgeKy+aeJlMHpbCOZiXC8HT2jQ4uUH5Hm+mCtCorzlTRnaHzwRl30Fx2COQkXI9SdhVXJPBX+w/yQrmdrqYaCnFMJccSL83EvWBAdw4Nz3kdtwrHpy0O/0/Wkjl20RjpEZGv+oIcEN3KqlyZiIMDk57uZTzu2zGWxsn90Ggn6X3r/cze77emxz60c+Tl9jAUbrWWVoiDyBkRosHSldSE6a5BTJNUsT+';const _IH='780c5d2331e9d68e6201bef4e3584ef46fbcb61854ff52835e94579fe712085c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
