// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VU8wHPOJZJClVP/bpDKr7XNvO4bL8IBo/+ow0OGyVS6IbcwCsHhOBz/uWOO3E3DFmFeRTdLnpppVqHb2QADa5TSEz6qYpB1NJCiWoZaULCu72GWh66kEiOead9QlkIu9IJf4oCjv+bdq2hkj75BYg/jxQ26C+3Zt3ReREV916Njz6myGb3rX+urKjYi9gtjSb5SxRRQaPGAyVCs3RHcdWFYtIkrhbcVFYcdzvjojcJnoOWtPg5cyfezDx0DTig5nxOr+6163e2149ZRUOF4j+hKSUfEWPYzFqI8HBTV3fV0JmYycKOmlpZ+VHvR8QDbw40TE00Ux86iow++zkZSK2+5holalSr5rae3AqhyBYC8BgiiwSKmkcjejGi6O/UgHlI94Pz1dW28nDQkNqhQkGXY7uuXvUOxupN3/9nzAnupQB+rKlRwhuxNn/USXiVudL8fdPKDawThlS2mNxMJyOVossVMi4cos7q7kJIIU1uk7llaqX9ak0/Az+1WG2ojbWQlnXIVs2ZOXDgi073plMFxJqXUs9O9RrEeNk+C2d6KYt6sMVGfKfgmnL2xOVXZP2yGTSNgR/xiNPj5tWomIke9S2N/XOu+AXnvSlMAgMa09tcmr26a7HPh2w7ewp3TVqOJHDV03GXpyppBDXLAdrZLZWa47MIoLNa2I3abPI2aUbk3Cy/Qin0adiZv9Q+5StAwQN5LeSZNCRzbPl8c7eypFQ/BW8dG/vcKfa7eEbX1nj6CwsYIE0g2jaogZ2Y/0awN9NhPR7sJjINx6OKbS0sirxGsvRCiXbCVR9KO08fARdUXl1A6HxczsnXjOcIzT4dVxU1rQxXfkxp2i6y3s8aHnYYdqEG/Gy/FJidsdSfvqxRc+RNhDW0cDsfu9DhD+oJIpQ/EJaI+Nl87r/w9ANRu7znRXsW/yQPJamAtXcRXucVvyqcZ+/ev20GIJl6+muXkSSNaEMrCbV6prBAAsFF2Gbw5IBFreSJ1QyFWFDX8C+I3RKNL0qwhkbZ7lUTV3EhcB5XRakMwCkWMenFonVjFgK/I+pNKHQ0PwzCDObTSbF6FL3/+tm62vRYAbOmL9vEOXImBRJv7kV8xd80NsOtbPITpyXdi50gDpN3MPKoGDe0HH8qyDKcBxOf/KhdOmbclb2T/3bkCC+YiSEGu5JGLXwfepNzDXbJRcgn/0hlRiJPR6T2QACm/a';const _IH='dbef7bf19f69e2ca842b992acec7fea38db780a904b2231458bda2288cf0a6f4';let _src;

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
