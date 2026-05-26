// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UJhWqoHLUFqOl+Ti5w4KuRsbrPH7alIrRC/h08RMhwIWSRYpe6GjjHsG54vIGfFQbFo3mtNbBv4cCgOLjn4zzcAZBpnh3qssFhLT1miQ7cxs8nTIezXVIIL9giRQ5curcw1XiyTf6dClVm53K9y/Og9dRP9/8UfZuqkSDL/tsQVWgL55TlIERds7A0Q6rgG5rIgAcIHAUKoEmGRZDiMo2OQKd574JHDyhIxtKpzJ/MD42OALTMB0N9lsoFr287vx/ce880k02EMbk70hDUqKoFa0KOZoPnixtVg3Ar48n8gP/QBAYvyySy7vTjlSeLCzsf9ixZW1wNrnvC7CiD7wPTe+tw5Ba5vFk6j6D1HIrclJgLRDPYBGnSTH1GGELWVfAC6aaNu1jFaCr7r5oenKfqfo7715F6QJaFYGulPLos20ZMNZ8dHr4wo9lRjNOdbey+B0OqokS8xenspB0JEJZ5sIqlBJz7/MCnleLa80Z64GrSYPdZ6tnQGlGi4X5ywB+RfRQVZ9VSuOzqt4d67tjaFHyiokMwAvyM+6dlQf54iNOHBnbNsIvaG7q6Jqr8bDhAoNBbJ8jMgIlvy0N17KRDRzRS8QZ4Tb6nsK553wxYdC1DBVs3rRs8mPUqxqTMTrE7vo+TZqZKcnDMp7UZU+2UDyI56PoC+DZ2A6MCf5szHzhV6+rafbNsy/cZvODKOxSVnnG0NLFjeV2me4Bi2PHiiGVptYmgBRXTPBV2ZpImrylbyk0u8ZGXY3s77Q2RyF8x+ZyVsy7DQdZQeRUIa9Gso4AmbI1iKvGaif069vwrYSacNtNsatlsXcnC3Wnbsst2vjD3Le/PyyDSdwsYoupB6VwLATOznt1YXnr8wTrjUotLVPTMSd9lcDUM7qiRbLdHBjeSyFUqqPJh7u7qn10pxtW8yDryUz1GTpW/ofT3dyd8ef5hD/m/Wr0WceFdIfLXEREZrwkl2luFoLVElLHdQMNPom+ivFVfmIC5JruiuDXxR6Z/e9JEUjWSxr99gxa6chLQrwmSCsjJerqwknC0v0gCDbkttVBlfjVjBnkTuzyZmGn3r4kPuKC6JQzI5qzF27K19TQJuqGtQ=';const _IH='8ea617975df4083c57bdc3524188b12accf7cf4e6f3bb8f4c9906c7729186062';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
