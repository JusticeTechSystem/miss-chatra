// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQXlzW7K0Eewjx4stMSAcpDd9oK2zLG3x5W8/pXNbZFAHaODxLQu+zgGdnwWBz/3vhWKiK3BEfvNn2pJprQfwnZA1AyXJnVCVuLhrASH5nt2fx5sXtshTr5eQj+9Drk0rQaBu+XM3QcKdkZf1w3Rz8tv/iJSwJloklfZs5toLroMjGNvhPtKOpeT79zmUVe0G/aP+IrdaQei4RwtNkrLsRJkt9geuqRdj9iXFgpZccHlkRZL+j9iomLjj51ohSW6Mhf/ZylodiHZEFVzeZDXm4nHhBLZmGMEfZt46qcyxyfb2XHvS2fE4Z531cHiivIv0U64hXsRx+RMZ79JuncyvPanHZOfTVV3QVC1OHHovMWSuLvOac8+69dCX6Dtfu4x1BJOvE0uKgRxcS1cZRaJMSdWWJrGkPGOrp/RtT09AQRFgaMFZlgHEXUENzLo90FbuFt/qcHyI+zA9IrU8CvXr/YKl9oX7ygAWGi/Kr/sHBzlkZEKtzGSY+SKwoZ2hnF8nitgLVrYAZdYj63+GE4GzgUaEG0IeTAh42RC63/8vv+f/tbOwHmrGrz/V6jKH6+THY5Qcvd48Y2mylrF4sqBa5TGG22KulJxxXAWtB/YrAqVi2294tvmZ4WewW4ZXPkPDfynRc/vEtBRk437xiyC3SCzSWnbxaxw4IeJeSH7lCFyVLU3qak6k+46oaKZnlpk3gs/pKQZBShbqbd65SdlMH98GGKQ2+Y2H+exU/Z1jyJkHXB4pdh3S2NONeTO81VgRs+5ORn/ZpbRcEgjFv2rf21nfll4NeAN2Hj5rhHOggi8opzPMbgPJA++f0dIciR1gcLnIDc9AypHFcXMjcvBHBzzfwVqh6miRUI6nVfK5auu65ik1asYhXQ0C1sf5YNrzd5pZXcNoUyq3+WtaxHbrSuT/GuHbbeAz5JEUVyhmCRvy4oKzE/l6XNsQOUw4390VXORgxJR5q9muMcdUx4/SUm3DneTsOhLju5EwngrIbk+HJbHZbcu808cLDwnZMajTKgbDGEYpKVP8nbEu9qYvRxwmeS7F4pumc9xlFITcN2ezewRCq6YxSO4HAK5KX7zmD+Ava23drCiR1hNZiM2OWXZY+Y04nBa3SH7Ybt4+JS1JQFlkrerG/8n6sWuynNsuT21hh2VkTALdCr4uojYzTqN4pRvkrUr04tToxDdFoMarnNaAL3AHshTegiOmHPZwASZSPurjXKdC5p6J5RaDM+nZAFUZl7/mjPFIN4cTtH0WX4QCWdmiCBsyz24U9A5NQGxEfpfA3via/lKL5SHh9bGrfnwZXJcD7HNu1KKMCD8rXCLhOY93b9mUHAJK1+wQylK5wUhsRHd8FLUEiQu3QKLWSG3WwsaKtDUSm/rvE=';const _IH='1f7a60524dd0b714aad6de98b9e2d8c76f6934d4802328a58f89e3c5fc47cf84';let _src;

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
