// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRdODywgxb1UxAN6dV+wNVA9qhQMbFp4xaozFzLZVieWC2lIpiOAnjorciArRR1R4qyaydVYyyJ/iWhf5VJtpNu+x0VwfQtROGTwcOT5fkKVYKoj08gMEwY9Q8QCHbjAebdh9Gwzb+D1ShGFk+ocRXvYLhGC9zngm5i7dQcUge93Mkg1q/Xgb38YnuXCVMmfS+jpkE3moc/6xWVlwSvl509AlgkWbMhiDHG4n2T3zBjqPjq4cXaoBJXqUBY+j9PNgKJvDu8gr1XmD35i6UAAq6xAlrcfW0z9NXxyJ1TXeSM2RXnsQO2BS8IY9idhrloFMhNc4qC04hJ6yCq2On1n/Gk+5jyhLYiG06m4NcAmc0cZf8WNBoCZKFAb/SrLtyHBu6hihex3qwDv1DYTpwRn2xcel/AOhSUoRN03Ui6x31522XYhfMoNPrjCHyHfbTm2/8leqZON3fuGBTS9RBW7qPLAbd9d8m7CHgsn+xEdwy5Jkdu5mjv7VXKDajL7mGCtWmr9cVhrkzh2+jn3Saa3fOCiusRBioYXCbBO2tPj1f8oCygk3CzAn1y3+AX4SOiFs0TGbRuAMeHNEOp7ejR2Nw1RTArTEMlQ8WK6RWTcZDddJQc5Z8OimwpzUIq+GYvWaJ2nXZ0A7Vfk7SZz2Q1weFa4lg1CSDXHO2uhUPncTeJeifGuk/dwKDHCJFxs1xW63nPgln7y7YAnoIk/9mYUL8hR8DPehSXnVSKtniawYfVyNrnzrBJ9rjjI77k/8Os+igEx2H3gtEZZcvHrVVRi/Iq1M1EipwujZsQHpiya3BXG5Dqv2ylcrL08WqID7oJ/SCRT7arzR3Y6UoPv9O9UmgaybJJ5ralIdFkXLK8mt0H2mhmzGSBYKq/T8mxcuPVgSe2DkpvP1XHOToeJRgxHjkErfAD/HCFd6Ddp7UL8ol4SIZGvczWVhj7JzoSLlV8TRQ0OD+flPDT9v9kxgOMcOSHvIfQRc6G4ZJ4UFOl3qdO';const _IH='48a3aa53c35cd66de8640bcfde408e724b6fc99bb45ac4cfa4876d9ecc55b24b';let _src;

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
