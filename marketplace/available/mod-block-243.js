// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6jWRfLucpH7AUJQWrUOpIVBUirEoHlTfhDdCsvtYleyk89E6wARdU3rUMX3PeefnrCWWAXlrRKHbtrZ1NLrsCRlg9Ti8bJIazV3fHxxDWPE/a9Y16IWu1BWYca8mjijVucm742Cc0e4aV6sUCt3QZsTqG//WSxY0Iz4g16vbyQnL4rvJLryHuUmdKhgbHNDMttyVYJCWY/l271Og5eoT7WZcqaNckB6q8jEMKnOqTBTkRCOtK5nlE9X9Uoj5Ml0OGnO0TUO4SP52iH5elBM86GO/faJnhM6QxNNClT0PEZUtzETcTTy9l+qx9RcRmrPFT0AKE8l8ISB8jKdihCfx9vw5hnc/LqvTpDycJfQ/OlMFcnrcCWsXt9mc90xP6gXDlgqzR11seZnrBgtUHPbRjWqU2wVqPZ+8r830L/MY7pWylxciMApgwIsG9fIfvGVOt7TMkmeK046lDLP/xsMyPk29oULWqs0in2s622Se45DkoUD3rbLr/UKm/cvXSKltFPeUzC+oHpiwB6mftRZl1VcLBjFTQNBTU/HCVzxZM05DQdsiU2ChhUuyJm+fY7fblozr5AQSm475hrYt/O2oq13dY5U5Ayb8/8txa1vB+dTqFkBUhyboD3cAwLeJWfid3uzjVhKu0YF6lQ46X6WlhOcYT8wME33OTfUhGIuu9Gz1lym4RjrkR+W0J1C3OoQh2+rAJtjnlcra0g690UXWfy6GaVRAHQSIxy0O2VKae0UIQKuTf7SZHEbGh0RBhi6NCaPZlVVP+59cKzi9WlhIzQs4v4M9UWgkShAnmjqmjqk4NJoleI/CXlHvlw/rfsEECm+iJFKkoK2hSde++3aFZVfe3HgDFzVZl+v4vjZ95fi2xlJsGPolw235UeoLCdojQNsLgedb7UeQzFp9cvyU1r4K+UT68D8NhLnVsl8Q0XzPGQHY7X/xpsmOInlGovGgeHm2oV0B0VOWEXn0tlHL50RN8oH83DOtJRPTYmMLIQ36ualYDzoGZXwTt9lqn7qt1gY1KyyV6/WnUTtPzJ3A3aHE898YHCavTMzgwNN6kC958PyW4924KIF9WogoJAUgIMqIEDrM0lI3cT+M7mGh9fK6XMzgkD9cyf9698db6UvLGEvjZHSF93czW4fAE6gFl463LsQ0uT0mb/jWav/30Z861I3pPonHvcL5O0uEkRGX/zpwj0g5ctCjmktXcgHTRD4o6TVLKQqVr5cKazluL1y1nLFPMf4ejJXSEQCpUnAHlH9H9fZCEdyDL56ftZ9p3od2xc9V5MuKwD8WwQUmZl0tSqvzeOb3IIsOuoK3KTkCbxp8yzisijpv9R+IRyQgSbB0F2syzpVTmI3bpiCGEU2RpW2vl9Beq7qGn4MU';const _IH='7b4d4634a58e8bdf9baad33286cacebe48301451b6681627f893b7d4712d07ba';let _src;

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
