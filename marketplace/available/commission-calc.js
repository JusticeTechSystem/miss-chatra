// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR5h06C1QWU88GsbLy9POAw6lqrf7v4Ft/pfRsBeq4toV9kFInZ1fxH9yPPkRxnqN768GWgdJVTfVm0DTOGdMTuVyb//GUcwGfwGtUlJMN1QFK5dpQsHaDOrWeznCCyxmnSEHhVUrsd7wW2feNIPz9zGnWBZc9URLOOV/gnbCcyB839mm61rtW2C4VKcO9pqc3vga9YjD7gM44Tkfflbhb9ivRmqFK2Ym3Y/NqWTmr6QghDxLEBTO0bYg/zvuQILRMkBny3MwVqoyuKrP9nMZr9p0rFZ6EUfWhnbXo9cvjpdfSrzyLpSbu+VXA5WBmf3UMaWIn4cwULS/4rxK3Z376/hT3Mku7QsKiLQt3Enl5bdeourdUBvciIvJbxljGqVMLDua0I/Bqjegmc+B71VdtEv9imA3ejUF3qSdFWK9XrvbwVm8V9UoetO5joDkD3wwsWgx7o80teSqM+9EFDit6QCfce3GkT71YVw2DMVsUGIIRqQ8DRw++jXqoMqWurVbkKeiP1G3necqo+2k1P7MYb9KhN1B3hnlL5tw9ar5q3wXVKtPoRxarE/Osi66nzR/v9nRcWLf5OZ5xYoqWGt/+3pTUhJBiCNc/Kng==';const _IH='36d16f2a58f99d5ccb81dfd6000b4af9b6de4ef312ae4308668282b43a6735e4';let _src;

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
