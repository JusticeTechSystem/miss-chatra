// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wl+1o485hfDN6iXUaFOqT4Hm+dIVfKXyn1gXiF0yx8LJkAxAUWkXg2oIeJh8Q+FCAMKfpC6QSSZr2W4kxgmZxNtmJNZsmKGm/6N+Xecf4TuxqZrUik4Lp/s5mlmrGL5FMZRH8NDJzIrl6SvWVuKbJcWrH834zbnvOxiPK77TBgn/9VTGw75l2XJ4bPihIVnIoz46qKiosZJ43WBvmsq6u66C+9Y/4wdInNCYlRwdsmJQ0h2MjBcQ26SU6pbIx/xT0EDR1cYRfEpEPQomWaA6MnWE4inUOCs6pvPAqXh3jvnfIUWCHG+oNSwGmGzN19TP/r50yeo/QeL3Ts7gKAZfhKqQQi7gE0wjPQNkyPstGnKW+M9mK+bk8/P0CHG4W0jkI2aRH0G/y7F96Led21aMobk/n2qoH+iAXOtZoUuRLfirGNVQAR09M2Zrs//wvKa3uhKLLVc+mgscTJ8CrwKew75j6iKNshp5i9aPeSAHy8L9oz8SUubXJ2s20Tk/SxCqs62OxKBI412kbeN/uMDYJEOwXX/tP24o9Z4OKfLNvxIlQ8Bbyifwsdfm9ZRLCAPIaUz9Ei+DEJw88vEoRxeFaohJmdOD+BFSKpeRNP79uqIz6I/Ze9j+5sS67y2yf2Hw3e9IzhhLoG/j/QDKDj3HLKkthht13OiKfQWpC+uel+AYZ51UryPj0/zod59GK9HWMlDNJ8NA9DNfRFiBh4JiViIxpHERNJcj9EDFw6Wf2QwvC5+5NBUpuayLeup0ctTdbpaXOFewqk7kZXl3t7He8jvzmOsA3EHxkDnJDQlgPqjLtL2+KVx970ZvwM8kwnMBEnM382fnHtUOQjYnqax+slEPzQ7eYJ1DyMIdIvE/d7PKxWJcCUnnaVbn4PXw/dyvK4V50/m7e8i8NW5KHeNM272d9KOIWO4s2NxIKyZjO9CY3uEZmNdZWzzGzE2h+zeqg0k/NMTnjNtybLTSWS4DLgNsk6hunCgeBnlKnHL9DR90w1D7czUe7dfJB9l/oCpigxynBIdVcVUf4NurKqL/RJL9myGUc/dbMMV4ni6QSsHdDpCxboVcGWm56v6M4+lfUuzzw2YETSi3M1qsvAs1XxkMG8+8Yw/jLuBAftHxQmsvtjek1ir2TL3vl5hMR3+BE4VQ47v4J8DtaYw20GeCVJhesL4EJ0FIpltD+9YxSKQmjlF8aJiRWClyfR8mILKc/CuU/pNVMq0yKK+FSW2xNQZpSr2iMFCBBNFzI1WeqHZ4KPP0SFSTr0QHj8ge/fFRydvYwjJpyea2MEsz6x6kOZl9LxYr/1UEKeDizq5/xA9/DYdu36JeU4q35uU0/+VBRcMix08=';const _IH='cd7fb2a77036624ccd1399e9c260427cc8643c7b13fff38ba2279b855c5f082c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
