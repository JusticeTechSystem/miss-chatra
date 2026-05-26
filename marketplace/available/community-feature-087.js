// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nK3rwDH7I/LcmozzLIvTasFFhju6LUF8BHz6Eg5rx9l6OjIE8XLtXxTR2hvfE7K78qCw5umy1DVOKsLqOiQOxxlWoaqBOtN4ZZyIT7IGm5Be2wG9shhNuObWn6fuoOxBdpBDXoY4bk8AIP6vmFJHygqA7lGqBS4abePghN/ZeZ/lz+aGoL190qNhC1J8KdKNsFeHe2DiY3qgqGvJkeJSoc10c6naZPtjTiSxJKLxJwk7C8mDuSOV1GOrILMVSUt/5NRjNIT1koH99V6tXECG5THUIE7Gr9a5FwHkScSETYoAfD1C4IpX+H06iss6cWJdmlXVWCLTZFHDzS+FSl6jaqwNXkY6EknsI/4GTs+fabMKuB8oVR9vy0f8z/CqvBR71BR/tWywCTRo6vf9MumNr/Re8kpNgNYsuxmEaKIRzQ7Ofu1NJKegkPL16od3Ykq1NQZroiSmb79OZFK67qNZkk81DwbR8fmb+LiCLMPKpfrUndYuDo4rFVUOkdV/wezbQ3yBEh/Y3NJr4chLcQh5AWcnZPqLjTkigr8m7TUnOEhSfy7WMP81xDDo146OBogY2u3U5vfoaDHOcQz6tYdURXSeAKam13WYSCCoEuOAPMN60RfHcsqDmK2Y5X5qvCyW+J0Bk2sHAoLFXCV+oRhs3ZpDBbEtrNL2FFuZKeGeuua+IVYEfIZEnlxcNb9hDdAx0RiPGRkrn/x6mjstNYda9ylL+ei/vj3Kis47LcPVbQ==';const _IH='1d4c7ce918b7986aefb504edc304cdfa217199b35e3dc540fbb91f2f96e09455';let _src;

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
