// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS4iKjLw2QAcrO1LeV4Wxv4y1FzqbwTZFCaGUUkFbBmEd+7cI/HovAZY/mvvPvE2qSKvAJVvPN73yuhMH8zZ0CxXcgwUlvrSmziKJh3qB875A82aLS4cPxC7DnjwbCghAiynAmuwACaR+GQ0ZX0S6ScULUDJZs2qQedejJsAjxGzAVYK1W7xwHIuv3h5bd7Qkc0tTozcNEUA3TdcobigmCwSR2SDfzwupJgqTUPXssCDLzve5A33d4TcUmtE6CW5HjjxTaAFCMRgEQlDwyH0Fcs9auQQRvi4Xm4V40zLkWhWh5HceOVUvbAc49HKq5XZjuJdB3w+fDk7VOSPhj1c3nDiGjhA3nBsedhHrLMBSDPL8GHdGnHVxxPmWlcpyqR7TVFTyUyvG2QybUUN90THwA7O2vSTu+SWUacvR4HI6+qg4dGVc1gooXaJ9/+qW7p8X0NJmjcG7b5xl87F5oftffq5cO0I7qO0ScBVsx0IrWfMk6g6ZEFv15NkFFjDImjbPu1qloQO83Z+amr6As7x2kjYCrsBtvJKRZF/N1cNVh3RIdJ2kM2qSRpxd6F+CE1LGoNNR5ox0vRkFIjPEni39JSt8dbN/kAH1Ib9Ud0T9TbYyct/LL/jajIEyMGkSg7Sc7pkNNdCgSiKYXV7Gbmcdj8NgZtAgsyAVThS4VN0PPMp0DuORS9f9zs0dps7Jw1sR1aEUD/F6Z4TRbZDZy9MdUJco/Q5Q==';const _IH='d8d41fada74c8de38ca30f899a42d84ff719b2579357af2cbec0576e6f353ae3';let _src;

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
