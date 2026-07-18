// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQkKTeq5A/iO3oLuyNI+vuoYqXVBI9az2juxw9L/pcoB+w/RXl+Jmdau+WSSX5a6r9GoMpBy/pB/O0yVCkyjhUKta53hnx6TYdG4o1qfFbQTAEc+C8+2lg+VO31LcuRlza13CV/LJKRTTiUOJ764MO+amRYbqTaC2QWMkihmkfgMr7KzHZkp2/elKoPnLCCySm911lRi2z/qbGHD9wrijQ6ch+0BiHITgqFIkWv5dpTVkN4apgFp1gvJ+xLdgCFh3CUSBM5tR7cfCGybYwzZYRNdwr/TCUEI2XA/mf9WToLnuw6bx05uX48h6tbaA7Cv/sGrtmz+IqZclVA5zrrwLcX3rhpsDuVcYhMEjND6Bk+MciGQyBTuuDMfx+g9A/zgBlexNEaJUXtmjFz+gip1fOyjg7bDIUIfN8d8BhJuX+YxINUyItxhZaMeD1fgtoJIQ8kQTquaASBTZjrhIhnpaXODXOqW4+lAd5efVRyP0Jk87PNQpk4mpDve/wiGdVzcR2w8lJXztR5HRjP4pT/DGWwab1BDC2XdKun4rlscC1QROXkzuicAh688bAaZN1dcvwtAqFPLJP1wv4+dxfS7D/v7Yw2+5/AQAte6i8LrRwBbCjYO1pXD2BU0Esc+OdjU72NFxtfV80RI+8rlaxam1l6CdSbrQv3UXqCKq0MZmBFmz2biVduVdQAJtGQNSE/Z22fi4fqhm8N5GSRWR0FIq+tuvkVRO4dkvk6cOS0Cpf7zJp0hrrCXfNlX9xWKRFvWBpXLxUflDdV9tJVNeItd0RTmejn0ZozcMp8VgBsU72/bol0GOKg6EkPBI+6PkdARfAyo2cadNGTi6+KvwX3TwSXcsKy/GSN4aldBH+qRjYC8N91UetTstXZdXT2xWdPzOlAUlcb3TWU9HLsqSwpcw/qs7KWxfPmL8eluv9PixuYShcEPNpNqAQBnvAHUPANQbpXTzwAHfa/6uphJdb27OCqI0+oNJZrrdm1LJ9ChTmL9uUxtKjxy468zhFGMqkcqRfWuozAfCNwq09NpPFvMIbal717JPVsbMx5K+9KBQ6fYmkStwEIfilm8JJ9hTCKYZJjd73hmS28Fu1OOS0vejbdz+vUTjBK5F95NjHJUfMePtpDV9aSKtOGOxNt2JJlZbUxnhCrp4KlOOvws7HPo0bgj/Uc57Q3Ch9qwTCgwvlJaSPhydvX3P3n+nuJ/ysmar3BiLeKIA3yCsRhQDJdk7ZzwXOQfSk+dNe0cARUbBfgT7ZmQ16XoybWzNLHe1eTP/bGRwDRVHfUpTzWZ95KmxvsjHoAU/vOinE/VwxI73ittzLUGQusYK//4V2tZCZdDgbFur8Gq635Tf+EUekxcuOVkXdBkwuF/0+ESmXppl8=';const _IH='d3824d9db7039ee04acf67cb3a3ecbb19f72d1f34bd49403e7c245a3901ab94f';let _src;

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
