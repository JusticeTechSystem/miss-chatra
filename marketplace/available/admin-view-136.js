// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTRoXbWdHStR/40LTNOMgyxTUfIS5F3s7cvyCjwUxV2JA6WvZtH9drbMQ7Tg6tHp3qSKaVtbk2ydKbWnqZSHhU8oR8v9l/l4UjTDYOqZvHR3ghsbsGG39+dPq8OjJWcBtqayANopcjK1EC8trm17X43Ir1PUNBH66rdRvzaXhywhmrdsTw9WqKRbgqSrrmC3J3Er20CzFsRqOjOsSClrATJ/pCRd2d1PNdXTDG1OGmWJNvN/2e6e2lj1djdLn7xhT5toshAG9KOxgw/kSq3HRTSaE4yJidBllH1IrwWyRnDKDT28SLFsLLH02WLB15S/9dsoDZWnWYGl/ZKW47sxGXzGD9qYkMWWF+OjRjGLxPWC0brzLTNBlO13xhuoMRvPypCVS581SpPF0YnXUkmclpjoQLah3/ioY/ukWT6Wl4cIyO/Tpqvy+qgn8EY6QDQomFtDfpIlaWg3CoIvkbnGdcDru524JG3KhmnkMZHAgP7vRODOn6+eKP16ImBDlavc1AuXknY10Wod58Fbl0IdBy6Q+TDLw22e0ai13jXpsmK/f7963rQbPAV0oa7TQtEXoQhF7VSxOaKGtv5cHl9OXGF48xMPpuS1WRfaoVER0MHt4WvTZa6R3xWTdCKYMLBKiyaSMZ0NdLSV/v84CzOMlFqhcLocV/9Lwydcu9KxToww+ZMdDc9QfHK4SJRLbizQBc5IIwKy3CgfeB9gg9tFIomSA7mPJ406ZkvsyQyUl5b0BfHJS3sJsnwLs4Ij4Dtaa/+5KKObblzG0pEMWxfcMP6bWLSmIEIhCUqHiv/nZXvAMlFw9GN9L6pqW5EuhpBLuVMYLOg4tJUrQwjssflLtFtDtsGVI3T2hPP5NvBYU/4PRzapGTQzSa1u6MNrE5EzHUKVrE5aVgld/M8qCk/StjN7xg0ABMdMzOqpijIiEc+e85cHBwW7Lyh7ZUtIE5SQGMp7HP98U7Vwr10wuN+xbDyO7wbe6+TKRiuxxWBoO2ZVi7NKQ==';const _IH='1366d05bd4726b1f12b2325c281e5cd84d5288de157ed54b0572160edb6849c3';let _src;

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
