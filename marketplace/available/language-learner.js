// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRImaW/+Q4jsoPq2wnpspGNqtZ/Ig2nRXSF2pUX6dl8JZOEVBQ2WAxDYGGlHNqqBuVA+V/KgMXKzFCyzWpI9NQ2M42dPGCnORpXkokqz+vuBRY0oagjwZvpAtbh0lEFLslPOx7fzeB77UeQGXXefK+HtsfJMuRV8fbqmVwHtmk8FXydF90Haq3cHrcMUS98g2d7BhY1ATx9wXiLUXOhO3/o8Ad6HlY+Z9xgQVjj3P/BWzPFkuBFglWeq4teZfGRfvY5qs1mzo+eV8bMuhvYyyLMLDXXCY2wjP7KiarUcFoXisAfZw21krVW1mlpmphhvospkWBpDjZJjQ1pa6ErULWpwepur90uofU3Gi/gyssnfYpwCvqfR18vYZ8VauOuhqV/MbyN2s9xkTb2XfcF5kjy3E/2B6ph8UiM8jHSY4IJ2ze1q61wHmOxo1U+XWaLJnoLUrvvMvCV8AIxR6YNMJJr8Qd3utkR7o3M6sAjh9sGXAwdXv+3dHovviC8yy1tPectLEy0Yd9X4UmudNgUauYPGJxN90Yw5We+FNkgJ8suOsoonraFxeCm3GF0FeSizJFvwe2jmgfxr08uL1v2W40JAhxVJ6TRyLYtgBpqVN9JQgYMYkQ=';const _IH='acc7586c1ee20eeeec8b452084a30490a72abe8512d5d2224e30286836b36ea2';let _src;

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
