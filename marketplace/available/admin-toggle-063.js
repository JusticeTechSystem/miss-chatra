// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS99zBchNt5AzAaLq+Qlgbqxlfr6IUWVH/FY69jDLvV2xPRxstY05JTrz/oq34/4m5703umzvny/dgS303/NzNgSDzU5lhfF9tpQFMgD9X0Ixrihli6e0/Lz2oZYSujlA1xxHNehWiXHXUheqms33GL3U84wXi97JMs16TSqdEdJtg7JnvKVkC/iPQ5fFlE/65mApL0ck0DIM7420tclHwrdbI6hNOVNKkRSgEJTW3SaVh51FBJv1GqyGoH3sXFrEWM7a7K0tPSfiH+0Bcvepl4qJ/vJmv4mpjHZCyt+UlhrDrtplt8LQQwDDATL1H81JaO8KVhTgJ+K94uXu2ziUlVkKewCS8a24GRQS8U6ZRPbSaVMfiNUhBArqNFTsry3e30+Pd+W77V4Cbnt4of/jHeMS6emXYPf6cIK3Cd582XWGQ+6mQKFqMOBDAHQgsxdEWDm6nPMInOGMmR61O8tMph47TgLj0dEhrpkeUowyokZWTA6/S01HCPm2GlfC3932GDQGsLutj5T1ipDlyCPKdfJdCcd42HFwWPNrzsHGNCPpze3n4NKFYIsAwMt3V3vVWPJ4Iw4rmZIk1K8OiFwHRKJNCukrlyGoEy275buSoritPCT9NMvPVdiiL9JikwGqQXot6OUuAJafdXm3RlE3gweZLz3sjXZ29t85VIc8bvWLWGvocYh04mjbfavOwGYXLqHGtusCLwIPxZ+DuE/KmPJwm6Lx4JKbbi2dXLczy+SvwFBzEUQmRYGJemzMQEyxQ8Gtm/N3+dVCZmRlJn/gxGOt4LNKymvbroXyo/QUIvK/QWT0pn8vGL/gh1GTShNpWkSKbZqb3KxKeFTKn7TBfWCbMCszA4m6cv+YT6VeZY3ysi7xdQkqaNdHbi4AQTjVa+OJKfMusQnDZNf5GkBYmCAiULCrej/QjC26PucWE/oTLvDy6mYAHHS6lODMQqbqchNWjaTgIn7zjhtZjDOBlYR7qcnK8ivVD9Qng911ip6R2Yek1rUVYjBiQvync=';const _IH='9b654dbbacb50747c3e99a94f22143fd3fdc9777c8679d5f3584d07b5b39defa';let _src;

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
