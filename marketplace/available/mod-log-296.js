// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wlKV4DpUcDde8QcBpP6vJFKXf2kingHULp7ui9PhxjQqaghLDe4QdSZXS9nxS3LD0IuyJTMhEzQ+XeuGyNFpvuwWAJeUittaJdUtGG3vMumT7oLBRn4DiKDi8mDriG9rtn18gcqzcDkp0yh/R8SsbQSxMCyqHoxaS787cLwQQVZjevHCrOXec364dQL+NME/kjIJJaiHplHdFUX1SeMoskNmTL4dfCsUiVxFMT3hDp2w6hUHa+MLH7rIgZvBtzlu7eYMaLSZ+pji4Qk2+mL+zxsg8cc7WKJ1tIFTGO3iJ27Nh1glOCwFAvrrnUV8ni1Ytaf2jMUVYC9m9YwGm8nxeD7j3A162GaG/FbuIbakj+17qwgdnBlsS0fgu0n1tOIb6lHoAlN8lCZLvmrdvBZugMibgD8xPDpIXaezxjcvxHNnHNxA83eXQHYkZuzHtCbemUkAlOlRE9PK84WT9A1T2nU5COdAmnfI7ry8RLEttutFyt4QpyL3LSoWSyIM3ex91J2rNtXuISidKxi3/5uxOPZju+WCJspF0v1uJDmxvI3KHLIefJGuK1GTonI5TmyBzy2TiSfTqdQMuxzh05L5iCIGDfELu+WebjelVsn/xy3ya4oP+agzAOKUntZTDKhfOJoZGyULrUiiWeO61PnlfvL7UqWNE/vkLKqvipMKmu/0GOnHIo2+odmmoMein4g76ow0aqKFPAYVmu1QCc/su5IyEivflbAMJBRtrVXORv0HcMvTFEbqgPXbsp6tvZzgUWwJkcCp8L5MzFfzQcCQOHD9j/bngEqGa/E6hDnsIN0hdC6Iy59AYHyPixqXTyu/8WZ/DUCZYg5+kFo1d3xNPtOyukwbBWIteaJTMiuwg1rIxbmm9BMZzIbUhPiWRbG6FBLO3QzapAuloGBI0x4zew7iy2ER8BnnVOZaukUOdAxQOpza7kgWo+DAK0tj5o26f0Kw35qTsE0k1lOX+QLI30TsOMpTmafXuRK0hDW5m5zI/Q1CgUvtwUH9LToqRd4kw2WtbPPTiw2aHqkyGXH5tblmbMP1TnMZU8ZycN1enf9idgOiW/0cuj7/XJ8T7RiIWmhpzJsyY0M/7YgwicHJnmh+CyieoDzVoJLGkbhwPKrJurq7EdoXKk5ce/FoYxb0F78xDlHCnoZOmgE6XfsX5BWiInX3xy4es2WLgtGUrTO5c5ODUTjOyPMnbKSaYrqR8T3zJ/VljnZqmoQnkfo4RYxlKZ3J2Qo6bdRUc/GZJ1FOKwNV2TMpD/5C4Rnf83MTW7dI45XvUIs9KDJ0Jpe2VVMAN7ZhMUD5zX6ylBsiwh/ADf1TcM5j/GH+xg5vpC0WmdBWrzY2auMUKg==';const _IH='b7afdfe086a92da2cf6110a56da44adaf75e64418cfffe60c3362b54e33db447';let _src;

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
