// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTy2lGvsaV3VV0d/hEHFRZonPSC+gT6xhQex8kkXfAH3VJ4Tjrs1h3oq/1ZY133zvAxuqs7uXg1AQvOBewy3IN9/iS9Ps5ci/Cp+dzKMbNdxWy4ssrqU4sSQh12h2XmqrxZrLq1ZKQD+cimaNAEFmnJ4DKLNNbEx6p8ovd7FLC0wZmby2Z6yLEhj9u/QtAPkcV4j3mmUitdnVBn44IHIuA5DAMk9Qob0zX+EDPioQA3RLKGJX3QjmYgz1iwrTcE8ZVot8wIG5uf/pByaocG/wHf9Uuat3/N3VM4fKlwRObcyT00IWRlI0azoDHqIHWXJ38W9psndyzU18XZ1E/AikObe3n2gdeOwcyrskbty5bWU4/EljyEFyhZveDeXNStUInl0RzmpG7EsIW87wOMHoOmE0KTEWjQqAj8zjhuTIaG0MBvu1TUhlgTSbgQjHKGXlqW4YeUMmIRnQ0yriEu7ic19Ldg0qmMoOZvZ7I2NOo9etwx9s/mOwz9JTVgf8vDmSqegJxl3BWisF1e2PIDwyEgr/0lLeNgkWX1SVqa9c4kbEgmRGs/CLG4qZyyCwpm8cIolT2YU33TbOMI89OvmVzhhPORDBPJKJqtl4SSNRxBzxvHDLFG85pPgL24Zzg3Id2IvEog2STq7r7dyZfkGvRhpI67dvVqJHSWjKVK6G1yNxxEo+5wXkvTFak8pYrftURrKBoKvjKr5PKKW/lxW34RN9UpdJ98Yc5fRmcAFEAOrILGSr9YJD7UCYmNfs0rLiDCrrzBYpflSltvpelwFLy3VsMx+k1CWIPvlBQXqZeNN8bXFcewxLtX3mZKx2X6jM0XaBmdBpXXpwh1jQxV14OUMZvP9GMqDDc8uKT+YUPotHe8oPJHDg9hlpBcXhmszadD75XGDJKSbHgU8nr+/Lz444GNZDdRQLBVA68DM1Y0KLeGXFf/ZHeHCq5jM021TdoxZw/WHt7bQwIZMNqVKy+eDddvixYdhConEVEvCII/wW9KbDV+YDbf2g8V6nIXKc+/i+M85R6hZ+y/aXRWkdW8XvQjM3zkLYgWvNk2dtDj0aNamV3Dqol/wvC85bX4cpqGOHXYJprQo4eU3Oh8Kh2Z0ZnTkAUhLYbX58gcnPKZMzxPRehIVlaP7SH2OzRZHxkFPqSIgAetV4P7YrTTUIJvgUhwvwFV2Vjo4JsDtIjvJuWvO8nb7gajtRZ/wIQ9qPivrcm64b/VYZMTJXWEYhBtAmD+iMMcLM5/rXADSxkvBK4Vb4Df4JRqKT6jSnviEDlEB0ozpY4WmUeMZ1NyA5M03XHxzv8d0NNBj+7b9O4kCLCuG3Wxu6bFwNJgQCSuNKHjO7t0EFvZ4QpY4rZ/pv5d99UGG4nHOg7fpFxC17yw0g6GfXbLl/6f';const _IH='fe0fbfb3857bd4c8f351a23538b5549c0ac51140f1d626ff71a74363169df895';let _src;

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
