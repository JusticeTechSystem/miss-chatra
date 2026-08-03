// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:48 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRWAZvYKffE6Ha9Tbe5kiU/E3fmNPFQN+dMoHPWLuEfhIZda+D/+ZWymy8ZPZYqxoPzii9QmfQy8fxjTT2kBmB7/5FKAyD5HHDzVlfAEIjKc+fB6kfPUorC+pZZ/nlgBWUbtpClD4fWoyNuizavnyMIN8iYHKnBpkMyexUVGlgKryLqnFFBTCyX5YQLVEL/jlofitQfUbE73RpYt2lGeAWz0eOOIV6FyjEKPb3+IE9WS0Pd04GUe4S5NI9tm46kiAYTuTJUULJha0OwktWI3Og63J9nPGi8UuStHSQKFJoqfqdCQF01xKZLFuOFmA6HelK5DnR+95TqWSg2KfFHml2OnIxKoHQbe50atU52plK2wkRK7qDbg8iAFKe6DszhPkvf6zs9zPSLZGGAQ662L8/VKW2Ks3KjrmTBmnYRQKRMXzKbymDpsmOMe4KT440RwrG0kZy9Jp06eamcblk8576rh3IBYBZ7oktn7BTm72OA6az6ysMtWnvTkgzhynWqVE0Z3EPTRcX1hLhKsRn7vt9lRMdEpT/OFOjrTf9IAu0e+iyiCl1ILLurjjC6etSyH9Aa9T4gpcyd/2bBvQOdTDTuyQaQmGToPXs7vgpjFGtu9Bu230hLdSKBAkFnXBJlgohpck/NoclXBR8Yc9sMwD3lz/wOue6lKUNj7Pj6dWd1xPa4Vs1f9VQjznrMuzhzH9CX76BHynxCixD8OM/ogcXqnqtYSYPaa2VZGIsWIIdK+aUWq36dwp0yqb6pbGRPk4iL584gQxj1ORmR8fu6NCfl8C0Wb3wOQC1WbBlqH/M7d3y+Ib5PyVnYnane5pRhQE0aYqQXoj56WumWECIL6/NQig0BzR3LM0eT99TYf54Z7wFyFq0UsXUbaHDcFjdrlU6N8//+cmSTNNgDCzLY9IC3iHy/l2IhapMdeBNzKjS1Gh1yKcqL5FdVLalUDNA/lmV+dwE6AI9pDmTVazl8C7/aHSfDlZSg2enPz+NbEucGj8Elu8xOotPsYw9pPG9iUSeEZ3idaOCvdQBquSpnyoYXefWZz37JqXKwr+Yk/i910WCGa9iuMdjN/11ZWIleTtDQRo5MOk5mfxFBksoFJ7gqP3kYeGTnuCBBeAq1NHv8Wa8zrH1MAL50y6YedHnczqkU7CrhOPy/K6T9GNZMTED2/spO3hI7VuolloC2O8ZVSzjPQXgRdezUjNKel2/FRCw8edNPWA1LDWzZZRrA/Udfs/VekSycH/XBWMB4I/zt57R43Gw09hBNm3LCSWCZc7UeU3DWQe8JbWjLgsLtIctqNg543mRY6LElIHQ2a/S4QBveHTuS2rCcJGGK5UiSF3ksJbyK/ht3gUHwQFC6e1K3GM82BTLWV+9GkdI26L8atX7omTAQWs6LcdTKO3b0BC2jyV82Y7orSp3Q5RnrJjDrgOlOclHYeBwppllmAMGtmItdj6vu2JANS81nCDjPHV9iaivj9nNpa7ldfOpDSqcsWjRL2uGzbCgl+gFhHUDq5HE+vF9lQcIaZm1fcScpsH2VLzNEf/YqJcjjJLsouzVHK1nOjJekGavzQy2mdL+ZczupegRn8i1VSLXKxen6QJBbJmp+82mxnOuV7Qk=';const _IH='7483d8494c4d7a00d3e38b99a5f842a49c2ce12fbdf1d027ae044d10dd87119a';let _src;

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
