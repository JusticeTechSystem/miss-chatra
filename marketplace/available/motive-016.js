// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='q79w5D/LR7hM78j8de1Kah0Mu2xbQXA00uYYxK2qV3a3n4yshp68gE8EUeeYYbxTZfbwiSPDY13NDhDNkhzQ5bhVbHf9FgWzqcaiUvFiopvc89ZuIRMU0o1lK1yt+NE/rOjctHg74W0YdJ6D8ocTnq/RyynHdK2c3xDfrSZl1tSZz6v4IT1bErw1BdXsD0sbWZLoNVwDZhg3T9icc+O2AaT2wP13ACPuQUfu7YwW4eZkTJWQL4Z5fuPziT6o08BexwnUBbLKW1QCWicniTPSNAf6b/YDURuoRT8ERHELJ5FbLI9rEGNSdk2nKwGEr0IUovweJQxPtDpExnClGVBktQH6z1I1nRVgVEULZKSsLs+Dh4SDv4jJ/oTjH+3JeEmGKBqeyXA0Np3eatfZ/Q+FkETkTwzfirRgzDXzSl1sg1hMqsQd6sqLnvsleXm2nz/En9dDmPSJusu5tkl5Llp5yvI9ThmNpldC4Df2fNoFqaJvqF5gIney+zP/c6Pr0jxTQLsM3Q8p/+EzvkJizB3waEgiCTvEvCKbJy0ewbYWY5RCRJ/QvRosBupGYWwLVpmIbmC7mwnQXsIl/iPPYI8tJNedqQ+uSrBFaP75o842V8K9NEJQO3n7NKo23Hpbkpk6agr1jXXw1791i6/FjNWArdw0N7yLQ3UqHMFf7nHVfWI3gjX+2SuI4MOyxAqSioYv42ZEze4HBJVPC0Wxer7cDO1IPk2XQLCb8BP8C7VE0wHKWhReW8GyrD1a4szu+CSDFxY/9Oo2ZIa431iqLQSPM5GcXmYv/IyoYKqZfoMpY1yz/peshod58kOAS/f59raWOSL0ryKJuxt+nfrtSHjHQLGvtopFoT0tpncsJcRNJy8MUV0XBR9KD30H1u959zLkoLM7num0GmX9psjcvSw2NsNY5fVoOFNwi+n0yXhFH0gQdDh9z8488fQ8qp8W4Z2SH+Liu5vmANzTNHQP2sO0GDgYMa58aXGsUQ1jpeGTTdBdNCvpmUpJpNjsbxenZYKuDxNBPh3LPCyIyXDyg8iFlcQb';const _IH='49bdfe070ff304a5b5b963278975c67bf8d04871875566f5b6e8369f42093945';let _src;

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
