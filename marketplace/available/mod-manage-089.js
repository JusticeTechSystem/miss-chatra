// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Myu0wg75q+LOgo0LSDI9hmoFyedjgL3xY3NINzAyTVf3tsvitd/G2Jc8Brihs0fLfgfcALlKeD2Qof5M/M6ZBGj/wdaWfM99LiyWJlkqRHiJTIDcoozqMy40BCMKoPFVYSYaBC3EDpY8YsBSHjR5mGsZLKQm50nVs8i+T8mCK1EOcXo/+V7SXrOq9K7IIRCuLEuFCds3DU4CyvgEkDzPu3xQHNnMyAUI0OfBuA4JIuHJ052SWnJxJ1D9D4FKzo5fUNhMQ8R3Mow5h6uYkLoWPHINNMB6wwyaNX1Yc7gWCByrvo63lzHipXLO78x39r+kbiFvfWqqF9SY0jk0Bf1L8xVfAJAVCd04btMXQbDS+bbfipK+2bVayyPMwIEXEAI5qTUQgwm9aikvBYjlWzKbzTS+xQAQFlbCiQKyqzRELc81CksdQVJHivhK+ljHYvssdCBUbLVhc3tpD1WWCmouqGyRvDBRdvH/vtcaiDyQsIjPr0xhPN1fcfUwXxO6uYBF4mHxlYHFb/2nJDxqmyxPyfqgZRuGSGDVWTY0a+ysQ8cHAy1Y2NEhTuGuFVWNAeOSQ9OpbB3x2pmkqkLgfiu3Rl0/j4d+SpAFD07mqV/BClue96mfTa8i4YAYpZBW2lfw8fvBeWp9vPsJqZy5s6fy7o2Rg+T4xR6R70KsWlhspCoznGFZQ05IAswoFQJ/v1MMH6UgT8AbHRH8IakBN597rFEd+wTZkuAe7fg+fVkxalywr3PBMtzg7uHIUHdIzi4UopB0nXANlkFpPLOwYmqB0QjUTB7WrRZsz5BgKGnOAP5O3zU1C59+eukpQogo7z/QgWIhSBwqVBQ2Q1ZBzMs0vfvDi+jdqT814YuEIL6NljuwvnRVBbQ38aYMPSgoruUheIyaBEoxrwKa4uPcYLD0nworckUxL+/2JwZzokSZ7USor8q8DRDj+ZlkUyj7/EA6oIxShDfKFXKzR4chB4XL6r/tha63plKCUE3/bDWpMabfJuWJ4o5EY4C7Yi+8oTFSvtsJ00qhws8iqjRDKaWeCJGO94F2wjjmsPsqXMxoK5+wyz0R5GyJNRmo8QuvpY5oY/uBO/Ro3ahl0hWkucgbNUKPuyqxWjbftCt+bso6m6xPLGrHYMxjbKayzZqaMvtN6a5heApA6bcEVhYYPEkwJXOTbf9A21ys/7RDGVgoxHkKLT2q8UMj2EkPN0gDUCVcyyEb7pnEDj1DZK9Wl7afKeehLLUbBe7Lf7XZetB/Pvnl99Iq62fI8KGfBar4MqIuKm9l6pSet+z9rZf6Ykkllq46MDSrunLnGGuj3viThi/Vyk0C2gl3Eo94zAw+4TLujyWcxnx3CSs1lERGOV7aK3ZrP2cYLmeZtdQZnrRiStlIxhM=';const _IH='0dfcc392c6e27c153029c1576d936090a57028a327be47d4f5b263b3f6faac18';let _src;

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
