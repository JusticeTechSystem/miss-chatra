// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRS/P5NHpErGZB6575yzFX9O0Rb4w/204kgRaNxJJsMc3mDUKlxoW2j9QmWzqdlWaDc1IrmzNM0v7EEr61izyxBokf2M8Y1lKnAhvdLf7QRlIefwcwUYxmp361Cp4tRdfmZNqF4Uo/sdmlk/4zS9huUSTf2Yp/cl6RB9Ds7/N8N/bbQ4lVXcLZfJz87qrEeu0m4zCbWnp/dVStuTNIqSdyT++LZrzTda8UvqmYkPPKCzXzHtEIRawIbsVhexSL+IDXL5S0lMahgtoQikaoBbWd+5iILZK0dUmKsbcrsDmHX1Km/v+BcKP+n0sSU3pq+SRwVbLf5fWCAHo+mkHiyXV410HZ0xsQuqmLx+B8FlrZ1gBB4Ccdacrz72vN2wEuMJrHLcVJAzavpeEp4GgfpTD8HAieAxPOm3Y6d+7+jSWtRVNQ+IoHuye8qGZp9P8OBlb/gsoR2KT2YEUbM4mAtc0BjM0/w+vtQA9z24s1UDbHfnpik5mcIx567fDtfB1NMA4G3pagXo6u2RgTkfNITiBtSsYJlznAGIjg34UZd4OnZg4MLBrc2e5E74ZvxOBymKZ4GxS1FxSPKQTxAu9F48gS0siLXEvFgYsDWcmUyNt7EDZuKThkDhiDL89QWqrtMZRch+AaZG+fpfrvWCORCobW+mnMkgyBpyAu8LObi4QzS13A/TtPKpny3NaglNHvF4u7U8dugZeacgWZJ35ofqJEWDeURvxI9TEVdJUaJCH+zJzuHd4BqnYOI99wkf4G1rfi6QVW+5FyjISQgsvL6JQbAAueWLyOMosg8o+sstUkzlHvctMaHhQ1l9C/wqRoIUAcIaXXdOynzpesN60okMtd3ZiKT/oCSPeiW73j6zQ7urWPOwL9BBwWyxeeDgFkTafM+WUHWicR/0KPY6VGoqxUMn5rXsB4Sai0XfHftX7a8ByzfrDtVO8qN85Yvo8YBmUMplvqWmCSH5bauW20iMQblfMmafrnx9+AA2hF8aOrz+pHLDThuNhHOu4QspB98TMOSVje3IPnvmQpdDlKvixTVPBXjFNuXZPQg7KYiAXryeCXVzY73yLjc72sSr9ct5CSbD+EVJlOBFUVirSRf1DfrdzNhBjDGWkXfltGHkCjzr91kfdIBrieQLDZo77F0nMKQEL48xyyjIe1Pf8aWTpgOxCpauTOzotSpgwvg91ts7zAIDx8cKwUiYBJ8/Il2zG55Q//ka4TR';const _IH='791a86ce0dcc272d5f769542e73a851be7ef0fd396a5c134dfc670aed384fbf5';let _src;

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
