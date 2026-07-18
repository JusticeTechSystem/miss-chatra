// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ1Mv3eZS5nGpQzqYSV9AtqiOE5GhyRCGKoH7wL83Fihu3Nl1eLvhF06GGTUxEs6g9fexizN9Gw97Xs+ejQJAAWPopFBdBnbv59Fqsbw774kSKNKBuniZiaU/Ze9PK/dTCHH4QXkTwuipXBHLQ6gN7cPHi7L2hkF7aTAOHglW02PNWmS7Q0Fzjdj7WgJCeMrFU9zCT3VMUHs0UVshqQUtQ9xmZFGctYUaXpqsKW7Z+RDgEVwvKlHloqLzDkRRi6KXao8EipROXEURCM8rFyzGKU5/nU1bVnqjC8XNnrv3pYG3ukGdPqtqu2MCADMGhfP0ASsEqaLveYdaDissJrVlRvSmb3fq5oiP1gM0UPJKFL/7r2Md7tyDVoN2TYcqnWcT8HZvpHPp9g2t4rKauqReOQTOODd6YDep2FXAo+wou3BM63EVUrMImjUFp/SmA8+fLWi2t+HP8vvnOIlW6iA4h8HVvVp780+CCs/6WfaxvT6YQ+so8enb9D+mTjDtXUY8O/lgroJ7ttvQEBoIClNz6vmc3KafA+HXjMQKdX5y9PdCyVYAITUS90cxjMmDj9VS71FisUOtwuOWpkl5JkKdUhz1LTVCA3BGptfc70ggu9zvlfVupmDBv6n+g2DpVQAQ0gMK8pPFrtMvC45p1MhsEkWeZ9sprLWsxxFmmSZY7hyGpngyGix0VdBH28mC5Uyd3abgGuAE03Oo958n9kZifyZZUQnw==';const _IH='bb288ede770060503210b8a0bd44bf5b2738ce1d89fa0bf2a59c923f25229882';let _src;

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
