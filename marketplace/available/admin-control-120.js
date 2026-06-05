// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XW4QC14x8zXpePfcYenC5CLieRPB2UD2+OQ/u3JW2MHKhVZ9njM9MTuUYepZufxH2s5/5tWtX/v7Ydswj2MZB2Z6ErjyodQI6U2keiDNEQepyJacCEyzZaZhXXkd/U1XgB4HfE65YDKnHLaxg/RXv4fZCxLzoeeRNMB0/iugIo3Shr5Xzkg42XPG6Kjs2JvU6PnIFVNzdkZ7kLo9M6/W/gkyNd7JQyQuT6IYnFOkrzyRwFwvqnzeNlQsL4WaOMDwrjQs4VBuRxmlqRAiXrODImEXqqxP9jAea5FALCZa3hPaxZSqxnDKYner5Ims+OWrai4HAD4Uq5Up5ptp+TEkeMHvt/udPG0P7xMdG/b6CYAyi/EghOBA44jL2Nckm4Tb6F2x+Xg1Bup/gd9X8KoDsYI6MP+SwCj+WtpauxQ1nvgUcwOvy6Xa5wTKC4ZZ70VeFyBkAK8j4msw2smN9LjHFaFhlpVvKeJXXsLBL5DPB3w72JV+5jJgH4eXFIaHRYC5MOzqL3IQyOt1p6RhxFj3qxDUbZYL9TwISPsjMARZGgjCH/QlpyEijY4RwQqCKp2AvYmR70Oep4wa1uU4OCxe3b/U7Ydvr4JnHjxH63nvrnX+IJL1OAT74k2XpubaZndcN1nAlggqWz92Fe6C8fmrRnCEN+Tv8fbhL0pfervStQ23Fl9929F9MjsxSMStexBF+VYZYXahN4uNAMn5wl6LESAfWWDoj2cFUqQ1i/9kXYUOI3ObTkFjTKudhTsbCT6dyb/gcy9cotbcV9U2lvfVGtYST9qDE1ovjTnx3PkqTG2weUlWepBTlU95uotCHHOHSSMrxq2tnWmPOKYm5YYLmFGVewPm5hJUnk9cEm4TN/X8NycArKF0+K1Pu0Q/c9IiENF66TQtzRtisSAINrh33Cr4HX+fe/PjD1ULIZ6xOOXOgE3hJtbyZGa60K9+q1AzZDkz33zVYmEfZp7foqvDdWcklxzsveQWDZH+QjJGc4LlOd2Nl249Dx7Dqy0TujHLFROJe8JGwq8=';const _IH='d25d1fec2c9d082a530e02c1ec025799f16364f1f688c66f0194aff14fff3112';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
