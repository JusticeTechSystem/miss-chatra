// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTPpbrhAqGh+FTStD16hkawf3CmUC1cfW+wcWE5SLVdS2d/cMPzfUVaLwlxflG4qnrC6NST6AyrZuL1zf5fL37MexbmIz8oduklphvbQn9tyrpkgGh0Li3/T4sczy9wCJeMFBI4OIzWSg1/hTAEoQsNKK8HW2TDLoCCuhM8Ndy9psBV4SJ72e3wAB0htaV4KCz8D6O9vGdLIwb1j9+eIYxj63uj4q9MUrkGcUPN9vE3Jy5ucgk6VqcxQW8ZQ/HbZknk9J4AIxvESeMMSxQZYgG7MJg/Qeh7+Rc2VorfL2XnLKkAY5FUt5dL57TS3DaF3WeD3VCPoWAPq3gIB5zG9Y3R6Ca1bXPcXp1PivHmOiYLwUthv2GCCSYQFqyoyFkrLUfbSnXKImjiVb0R/ElbSh0tTnC7VYX+D8/oJx3vrMZHXKH5T48B8wmtEcqbDIcMXDhDlaoqSjZAr37rcPkmiZGcq1ziPFIgMBdpYy6+uFwTcF02oWh2M5aAiseBmPOFz3zBxfsbDFxCTFzo0q8DEAinvvL2dps+YemCAI1oFHiTRJnx1prajpF9AqfnWhsWtMPpZGPAtgAGWBlgmTaVq2r4xNTb3HfE04N85eNjWnZRhxcOsXpdXk3yJs4To3NptcvI0AfC3nPG2GfH5CQ6Bi9ltBMUx3E47If7dmGDf3apSaZ1YTG27RuPwaF56/CtxZs75tF48YOVBVONYeEcSvd35AK5eMPRKiDzSGzJNQqYr2ZfRVKFikZnlQVcHvTgnEzqGgUXLuLaHhTc3uepMRMmL9GM/Fuwg1yYFCcaNfQxfzGJxCGyOAPakzui9wtN/tzVaWaDu8yvCt1LDvaqGqW2UYARHR9Dhzlr7aKdNEfm3HzZTQZ74IZ0x0XDyRn2dvm/6kaLWA7d0erwchID3sv9cbs2QmqDHL3+1fObU23RzIDSyLIMm5ZKOlqN3Y5MASE6xiQ+la0DbUGraVUDIzqp9BKlcrvAGycRbHeXvWAibYAvM7Tq67M1jCAKAtg=';const _IH='433de14d11856b6847e48aabc76bff75a4e592f6b76015c1a3b60bd01797de11';let _src;

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
