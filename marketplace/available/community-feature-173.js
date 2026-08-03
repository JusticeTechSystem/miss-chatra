// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRmMru7iEXJZnPSkhNCn5xAy9ibGPwdhv37YZlQpWVjY2XKWDwrrb2kenamXC3fafjujfc23pI52IFmabrlfJ9a5HOvcCaME7VyQ+euNff8WXMgGb5OTLZi+1Wh0Uiid4MsHysDH9ev0Ns6v6uQUAhoQ3GMNAr+0dN1MOyqUUk6ym5PICRxG1MlB4qmUngHdrF6oWvM0a3yv4OG/xwJKshlnv9/kM3xhlqq+OWcHWNHzWT7yaj4/ldjwLz0FVwQ2mzrKGiEEluBhN6/rEX0pQPqXIYjZLy3lEWiKSxdnEFv2psgYWaeOZE4WsaqeSR7aNwO7bUtcoiXGOKBh90+20DjYGrGWBXwQ9xcqj9eamS+S5qWvgp01JP1wE4HJhFlPej3By5mxPMWvHKN5IX8xdsyCCSa5ZvYetbYzP3Df49hDFjhohwYV5eS1gwl6PoPbnDSea7BISMvUcrp8kaU1eyQg/6ZpP+gMi0ylZ0p3bChndytxfaEdg/F4ms4NNwtxArkMN9A+jtA9UAONF3S2+fGC+3KNwwoPb0THRbM2MGI7q4Q+aYesx0B1O/nvankFFcWPfdp30KWitO7qvzd9bS/UsJhEhbayB5B2M0JLY3fWMWFWG50YMlXKT3KNKdcbRYdb89Y8cgeCECrPoIdNXi2CcIBSA8Y6/WXXdfJasvRRVawL6hDL2jkrbSXFEaVcy6W9W2xCzJPSnl1lD6e/CL5Pm9bwinE0QUr';const _IH='d129f2e9081846ca090baa181fc617c17888353a90e95f4916b3fba0b3dcb687';let _src;

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
