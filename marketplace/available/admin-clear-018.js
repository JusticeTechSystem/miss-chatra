// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjToiU1hIdSX+TATrlUkkmntM6Xl8mayZIO//pIP11dKn/E3Ot6mjxlGXzGk0uSiOyefknHx3Wb8TyjEh7jFCTB94S3ZCDTS7HVj8yb1SkW6KWfesli7awo5fiG6lIvQlDRiH4RpenhnE6tFcYD7xvHYPOVNOBaHeYpHWfaJyBe6cQ4biAFq327oXEV7KYiRNXMtgdA4IirbWCQiaVdsTmtqcny5zYuUGiIEfhqybRRimA4uJ7RWZ6wQTNpHpv0Nurj4SI+T1OGj11xbHdLvWCAJemBld3LE4u7dPLI/URYAdw/jLNGryKibxQA4d4OgyaTR8c4DNHXWHHea5Wo0f0DHxTPSlvVU3Rf6wgmFUoP+DrtnNzeZhcnH4y14v4VXJ45QOzOFNErWd2rB288ETBDAL4g+Y8X45HmjpMmd1sceDsxwchHrn3zGSH1s58NDZX2bZrjc6Mo27n5px6TIeB9ebrjZnbR8fUZKPSfaCP30dEtqBnxTUJjWM+yNUnPfQqyefDqAkAmh1pkjRAON+SLvs6mKHm5RjTADTtIBGbLisDWW6dftwkpxzjGWrlKZbgc5unH0hYp9CoJkCkGfAOopa47ia8ivquNR2Bb3QL752W5FmmB+kF5GkoxZFwuRsG3bVQdPTNZGN0/ZgfEDUhP4e93UDIRVcub0D5Ol/QCgbr0bx8SOHFuQAvaUyvfdxUuGbwVgaR3iTkHAZ7zIsecrhxGJQVNNbZl3yJ9w551VfE3GOfrzaaX/Jwky+t2EOxvcOvBNJZJPSU7h4ou2zTJil9cuYTokHxLzGCAw/aRqz9tF61IaAyMZ/XJWDPzYosGS0RtyBBtdVFxrvo9PhdNQFsWwmp1FwLVmPRb4r+8/lJw/jMMwEqe31Sk8yluHmDbJAmOSpXNkTq3zco3FpxNBAjhUtixbj4853VHpdcL4SAZVcvN/COx1vSUOlA2V2nwEHtgAn7gcZxG4hwkuGcFIR9/I7kpBFSJhx93FCQJgld7w15g=';const _IH='46c3b3f1f5abfe249acb091cab70c88806cb5b0764660e54b8120fce1a6c2309';let _src;

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
