// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSDsNgx63ULFlvVW7IY3BTpOEwahY+AcBITZ4vKE7RBUWYkk4HAxSPuJD3o7Ovh8hu3e1Y7cH+pkzJVAvb6A8NrikWyR5ev+1+tesOxvpmzj4FzfqCf4dhmYiafjKd1AnEATis7uIvY2pct0mpWnB6mxT6PE0SchQ25WW3R6WGYkYMcTeS8TY3AgfyjUh3lJ/Yr4KCVjmApyEkAiIGZ11eNexUaE4Hgt5miiBcXfpj/db3ULGuLxGWHxq+r9waoA46bhjOJUkJC0J4H0jivP2+KqYfD4N2SX/aCU+IGHtZGn1VoUjW/j/kglnO2nUC+WRniEcaNv4AQfmta/qz7SS5ueq/DFUGKE1dpAW8g55JqFP+Up12BuDJ9osIPFl5r/aIliMMvvReCGu0NOPjwfSXFBM4krQiqMwPa+P4pdGOfxu1PNabqeDLWANgywj6f6SQcu4NbRFNwQ/TtaB39U9fDJKWTkyvmJ+NTxatNZ+KAdRcgukTmUB2TxLhfh9mYkEvp/5QhXnQcvd7K64Qirmk2THoCbn6wlghopvQNTkHsz/sESMc64li8mfNWHSEJ6p7N8BlP9/Pplkc6Ev+5z5A6ev6NPM3Xz+7gdzJM/D12cPoc6kIc+N4dn/t2kN7LitU+hgCulG3cD903GELMQWPV6LxTpW7VL40PT7KG+5MCFws5BWqzh3UfhwbkUwWpLQC9JRtAS6c64eZQYQp6I0mbu1wRdLsIKFnW7knYh3Er5rx03zT8yh1hY9SmvcOMhxxnZqUnFT0E2nLU4cEomhJ09+w9EppEvTREwCkPplZs+13Fsa7Y/yuhzjU20MdLpKFUlCm6j6lQFrDm8gl+LmuXGLJAqkEzlb/DE/ek664GRsHs3YoPBzVtaOimdLC3CJU0XLPPiKAMM/GdBiz1izVX1505NKRvEhkmS9Cv66liHDJvHGBtj5VwUFtiCVtm5W9OLOnzwobOZqwgXRwN1EEX5lTDktwvjVhq1Jn2FFpJGT3RzfoV0SMYrdBXP6IQmeTshkNJ8l7zRlnHDUK/JQVFa6nX6kbHjRkQM8pEAU5tyng+KxTtUAXhgIU5dbMNsBgKboMap4/MRudztJkDac0mZdLzJNPT/15FBzitOw+HLH6dcAmNWld7wHQjY+y1vT6YCqaUOAuvVfQfatpZDO5MrLb+O9J3zaC9AvS03QK3CCJpygvLD5fxYSYM+3JPYw/pDT9/t5MPBcbcibb8oBXhW5QWBvGmEuEX+662ytk3tL17FFipxEtx1PXv9rAZ1jjFU/rjFF+l6WoKDvZSt7ObfmqMMZWlscskGJdoqlUh7izWY93x4cHocCRnZwfwDL1OfFMDpW4ttgrPDzlkVjyo5gNvic3H';const _IH='b4530d0d76b1eb550d2b5fa5db494c6fc4621b9df2690c513f16cb26d66373c2';let _src;

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
