// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NjNdlF7XaY9m22LgEDWPQ/zNtBcr4ELVIYYOPgIOJ51pmNm6hIY/xyc5ao4z2iy29UZx/IzSfEoDshUnhsROBoHeVMq1ntrAAX7+482Y3YQRTRfdCzn6iC+o+K13CHBvaRLwJFHRNA3ee/6LMfCpkTeiMj2l0Sub0ioAHXBO7GKPhzeFugyIXCPhK2j80UUrHIRiSpNK0QPszkhqC+8ZOUk/xaPrF9w7GAoX+L+go8tFm3sV83/xQnMynh+5FS1OMfruDf4ub1ug+yF6hPQfd4LtocWwh6qCgTGqvT4q2uX52L4xofriRLa5j/jVFemg9d4whLrYRU2PSnUUuqVL8p5T5ZAHPNKT/+20tlTG1FvngjMddg9Rf2d0FcyG+WnF3Fu4/V/yQlHyeXBDt+T7HTLyAIdyxfn/0Ut2lOvXIW9lm1djfxPKP+10zM0yWl/PbNomqMVaJPMEij7lOHlgXFUrRoTx6feorWplg/wbD9u/f4N8o6ufjeG8zCCuptsv48DOFSf5bGHaNTvX3sLJKt/1UWTNGDJo1f30OCmIxVxI7GYRSgzx/V+k0oQi8daCWX4Vkgng37Jz3jAjihuN4xkS84OiVz5p9R1IYuF9y3Dvb2DObIvXzK8ANY/zQv7ygxqByvlPvuBoYKOdDRdX9gPh9TgX2Gd1VyZd+KbIVdXAXyv6+HO5HkOL1jwkyVcTch1WihD6zfDyb8sAD+sDLun0MBLWfUOovqqQcVDymu0f23DBPIWEG71j8MKwFF01FDqZh6JhNp7kLcrtuJg9T1UbhrX9M0P00/KmR4LoIjkkH0zogvFp8miirGV6bAar+yarogiKl0VpzvK3TsQ77d9JTyZ0mpKzHauelUjIByfVHT8/RYqBmnv91Mak2MA4r/pvGswdVKKuBJWiCr3V30momEDT6jqGONjmQmoWNkNjWFYo4athRirdTrXEKgFSyWDqMqJXkVwDP9gc2T2yO62nmXmfQ8UhLOG4xbc02v0S/mGG0EcpSXd7U90ddpFC/MRSCCldyP6dP7JrlAzyMTaKSqeIL1gydZKfR0TBqEkHPBIk2GlLIi3rQBMgzzgOr9pOIcKR/hsRgEX8mquNF22Z9xN84wplLO/+wAC0Di4sFN58rycPHgnZVyYg2KHmbQebf2pDiwRjILZYfolbGCv6ROIlfpA1q4P5H4ta6+FYFHD165YCbs/Q4sZk4Yrotf5f/wXa6UmMMKOLYZEMyUEuOp0IUJ48K3Dnj8GPl3WA2OqP9nEQJx6ThJOGuKuSkCuC2belZ6rQY/dm+siAOKS9u9v2ILgoDb3H1gp/34+EForNxnlYXbQDBM8vNnncef0xS54tDTb33w4ZSsmkpEwKUswKsz8=';const _IH='0f7fefc25769c2d6ab20b60991302ff34a3940e5bb571ef9cd4506ece9e6b85b';let _src;

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
