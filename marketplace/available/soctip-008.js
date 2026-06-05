// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uha06Q1tNaQ7GNT+HJ6FceItwImNAXca1SZAofC9qafBb0P7Y5FuFt8dmoEYMzUsDQu2DDCbrigqitcSxYjPlfG+gNQaSTRwbjHiJGuiLsK1uW56dec5CNyVfdnCNAsYxTves72aTvkZTqwFre14o6UFX+w9RH7dMPACPudAxLaCll7zrIUIdqsOiroTacjgN3nuQ+UHdaz8Q3HF/XPhtHDZTwAysHM1EQ3f6R7bDUj+N271sUFUmrn5d4HOgC1no8SzpeU4fCYtI+HWrLmOYq4Iqu4xIRdeZzJgOZI+iLUj5Pm3XV4wSNKwEaQj+G0uze/iww1ABKG2cKgzQYxn4Ep+qRvWNtykb9ywxO/ovcabSeWPls8rEAh5q7HxV1bmm+av3LvaiOqGID+11DovekjWUocdQ/nKMa07W+krL26ZE4if6t2afYXss4EsElD+5MpCRFPUC/bkRS2SsMnRsoYXasB/bEwgxA/vNnXwg62oGH9iDh5XdX7k/LxrGNl8D2l6wT7myNuXME1svFCKQwp0bfI1/FwcCl2Y9bhkCnCt0uOF6HRxaclqUEtQe+tceqGIp3cid7MqKWMUFFpnNHU1xU2lpyLqYY1E9ARAF49622K6QYJh8E7/+fVQyVVbo2B4Rs2ZQR4oNIG+ZXPsY0DAce5Q+ZQqu78K9DG3CMFcJDJL2nJYD/DYYkUB89spLg9Bb0KsNinSBvXV7zg2TvRDRicb3p18R7A9XHhGPLefICgrh7zLJrS/DXmBi9j2mct4Kx1gtbCrSWG7qNr4Hz/0D8u47g/+TUArBSs2nexXVee9X8nO0od4BJmNhHfvq9yIKReHb/UWr9/pRugIrZ8jm1ELtuZo0Xhrc39xB7hllMa7xJsUnX36VOKU1gt4mcYNZqw1Kj8J38ATjk/8Ja3M2NIxbDuK9RzA8SsHXjfgW3Q9lP8avoiSXFCX3eiuEsIn+0RkMNz7eHHNc584AlzUcvsxht+8LWKWs5Gu8O+arDs5uUWg5icm0I0nzZdncKjeXqoBs2LJlvdxdnj5NqYxOI15EHjAogXqdzAww0aq9jnkIxkvfbUcBXXoYTPK7zUw00Fgp2gwJIg=';const _IH='9afc18531361122198fea9a8dc527783a8d33adcf445495a34881fbbc122df83';let _src;

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
