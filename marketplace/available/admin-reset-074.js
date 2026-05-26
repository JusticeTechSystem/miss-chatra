// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GIl2CFTKhr5cyOPrd7ddjAGhHh9G847CIOB5euYuVybIe8nC+uFs9r5Gry2KNn3T3sylNkZWyTa743V2NX5SoLk1a+X5v8u5S6v13GmyyekTaV9SS8fonvevhhHqPjdWkHh9rms3LbzoKf3VlYgQnAK8yBOJvckgWC59jWxzjf5QDDQWPFTwQqt5BBWn6ufszt7ugqmntPLXae3DkTGRlepxeQ5G012dJESaxYJrbnLUaflEMs/aenTHyAsO1I0ACGqWWbCYlq2sUP3GT26v2mKOd6iP/NfPiexhxiSZZjW2yKyvGNJZY/bO/HAKPsK/NaGaCeMtfTfBxgbt6uSzhPM4FnE5Nqp5DK8T+vvKpnXo8c1Oa222SKf4jsWyghLVae6pcc9t9n2uv4fYWVuITb68L333tbM73SJsqqUunxV6L/BtnaV2JJgxINcEnVma+NBpzF3NAZzf+BvpgFwEgemSLjSlhymGdukKwWCSvj3VnDJgXeBmpanASvfUonKvPVK11mErfSMJjrUsOEv3eZc5Coz4O3kBU83T9BUfu3IvXNgu1SAVdhzP08O5WU1qc7zhf0GkYb7Hu/CvYgG2jHxtF4m3lWY+Y8gg5q5RH2vcq27YcvEnXOq6hKb6mD9+WOPFdGXcd3JyVX2cewNvc/q7Qxk3ir6HUi1z2gO7cKExTixaZYbT7YoHsZ6e8weGNKKNJCgMjmsu6foFg3nLlv/y895DYyXiPGM5yUyRlU3W9/WdvSTss1ankMEhlfw+FWgl39C+DFMVT0+kVA5QCaeuHiER6K27M9rcIF8GCI85fq4qGv2e32kmpnxu73sev70viRBZhmrR170Icif8otb95lYnVB2M30ad0cFF49GzMwpkAe2MCFhecy9J2EIuqedP9a6V31GcF7lyERP4rBCkm4oAlwRE6z58GQwxZiVwRiaD2PbsPxIKhLUB5jvl24VzimurcSY+iniFwvM2wCddwBdm3NZ2/q438n6aWR3IZOLEYvY=';const _IH='b50984bc683b2ec3b8afc3601a71f12bfd8d13112ce7c3d671289702723efd28';let _src;

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
