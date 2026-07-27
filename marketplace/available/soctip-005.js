// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS9U0MQQbNS1xOlKqA45OFZyYDkjXcvjW4NMTKXolt4t1Rg1tbZ9T2RjRB+d7QpxEWSvon9GlXDJU1NZ3u8GsC7d+zp5p+RldhGv5H7Xt4/QzwqI0Cc5HEZtT14aDeQJTxkIEJia8LxotgzVrSOPzor3Bu72jTPVnbALtYqLgVmDlu37QoVjPwbDU9ERl/eiH4s9lBxF6PW9FhCS6nA9OOF9bJMmHB05mO8O6CydI/ywwEZAWCOBY3lJyh+B403pBHw02LNfWyW2asjqUsUTeAJjRdo4W4cAp2xK7GBqCFf35x+3RMFEI3WtpDgydVhJUrgEG/v3/xmJWr+kRXftmxyXQOaDiluSAoPoZvFvxNQ0VT3MXW2ibu6WFrT0CsuYY2I2joZ+s7Cglh5NiFRCIQe/YmDVXmlCuDuM8hewF1X4aXlgB+bUMl4cQNo8SI9qsj3zns/sjnszF8bNUlnlZ0whi7sHL18wP3MtHLabS4nm5K5WKxlBkCGeGu2VMGj20xW9aiOgatYNOYvIXt7A14//WSb9E974fyQr+O7FSTgWAgEB/CePigmf7AcldvM5W0WJLsT0s7O9LaiybD8ilQwXei/p8hhbd5TNCWCc8WLkyrxQ6JqdBUqM88KqtGqTbAcuRIsuSIJ+OHUjSroxBPGw0wloNsmVQ4+vIZ6LbBoH7f4IjPFtESBf5KDqM82h0EN5rUTDUDU4p50IEchAkJPhyCMobEfUG+jHysZmkpqkQC2V5zaz2f1ptZnJhornSTom9LVGK5KZPZ4dhhZX4WFHFpehu9kDrNcMIGCfyHDDPOld2Dsxhu9V/fWVmNwVm9mPJz3ncCAY1SJcljxkZ7V0q/4364mfqh4LcP5iTmb13Hs60yEhkGJMKD+JSLLAZuY7fAs6SgA3OI2/5y28vaS9wYpoN8pgG/eGqKU/QuiFEcreElq9QdoAzhmwqAEz0oLhhNNpoKf2xPDZNfpi60TFioZECp3vPSctvfWyCCbEZaOPCpmnfgxP98VuBz2rYqH5IfKAbRXlzr1POTz47cTtoXFASpE3iUNfZezEKz5brHDWO2kNbBg9eFKNXtlaUQ04TmhaFInh9+fhQ==';const _IH='4ed7501d2d8001edfaace899e3f4c1c9855865a1d7fd5dc57f5d8d0f1c981782';let _src;

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
