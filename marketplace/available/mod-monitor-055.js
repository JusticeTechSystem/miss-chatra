// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JXyZzfTallCirKwTI3NVuCt8jmWDvZHvrrvIrDJUk/ay8kO8jOwNZDwhYQVT4+/7sjsNGsxLGVa0NcPCh/aiH98rBOg3eUAnN2oeztJJlWFPg4F9StdxSt8OO+mDA65oOAiKOe5lSAWQWSwC7f7c9qIjDsOiOYXeoJhI9hsggY+2MYEuDi6VckqY1yIw2w2sz2xUp3t0v4wiKkVXfnwpD0EGq8hgcclpfDAoMU1giLE2wNxXc9iIWOYoeCW4g54TttepY6NW/8W5DULulkUQH3O28gth8g7dOs0qUnSWt5DKEdfG5MBr6lu6hfS4CMnnYAnuzEG+Ist2dH77j4JJwrCWNagic4btibYZVb9xDmowUyTUkk5GbrY7/mBDI8SnEZekOq+CBGvKlgtb3KlvDAFkUPMM4UFNSNAkllAwOKQhphHwRWX4PtMrI/cKC1QX2gzW2wSecoHgqYWJnS2ZibSg2LTmQwKPokzk0FV+9KgKhkqyrZsp4HQTMtr42EZ8iOFLKnWY7+GGf3v8n9dYHNX1NuEaE8h7FRjAFwtdFAP3h4apoledOoYurqUWa7TerU48ZalfAN1ruJVSHVbMWFNcCJjjDZtWkGMUgNZfMIEpBicLcE2LKNK/0k3jU648Wd6Xm3eT2+H9nVfcc3sWhynqzdQDpx2ufGWXfToUotDROSfbC92djNrYn3VTq10srJX+iEXOb3g6sCbCvHfTb7ewWEKirArJThJVsw7xJsL371eDXAP9Y7xtK7gyqOsBpKC/Asu+GWfN3qtXbtp/LYCvF9Z60oqF5ZkZ6NmbOeu53ZcpQuqKNNIrLHtEgduSDhOlkeX7erhZ17f/ogGDLK+u3baOZ8Tc4AZX8P1svbmotzvyJjEu4ukhXt7Fbl4EKQVFa4FCLPiVTCPqOFghM/+0UTiiNqtR0G6ROsJ3pMlZjhIAIXkze/xNXvJFcbXkjjTxkkn8UR4qpB+M/OWtCSK+9RI9Og0RWTQWT8StLZBdEneWsSdJT6M+AqaKiS5ZHkrtINdaOvp1Htr8cxY7FqOfvH11/PgKbhBoK72DqT/86UuGWv7U3UBXATg+PWUQiMCeG0/g7HsfCOgHNjx9bpgbRXoBj+AgaR4qmFhSoD+49lbfK2kvMT4webEGchawisnmmMpegPsxfmJb8Fm4ZIzwOeKzQuaRx9ttMlH+0YZa9DFII0VTpCc70nUF2W/79B7djMjlc70EiqCbUsvjN2R6S3P3D2opIOqfXISXviAacw8b5vuutMPy7E80eZUQyiGfFBJvza7md9zttbk24JftsXfpBGA67auX0oCjTqk5nBtp2Kna0Xn8kggQ0LfRjvO4h+9PBLU/n0lFvWqJ4XNDN4nFnJF6+u5LbOCFqlEwmfqtwSx9Vsl6kmr4';const _IH='eaade0252734aab5ed3628c32626de80a8b52a38c28ab4c74139cd01eb0acf79';let _src;

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
