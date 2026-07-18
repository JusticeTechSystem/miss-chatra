// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTlbS3SeeBTNfkKtP11pH/qSgDa2NRiYQBoTGQBDG87pYlsIEK6S/TIMd43s6jTx4mf3999iRo0iTxu15B29MbBJxWQwN+akVOKwWakUHil/2xQklWfISHds5xxjorAgsLawR85R8mYUrunxCYIDVNgJLKKvJv2R4KZdM9JiXiL4gt1mBWwFuCqHABYLbl4DoJ/1Y1fKqpeBy9MtoPdUAq6FbxAJe7dtceGUbJsjdSLX15SSS5l+kqtPKGqJbR+wewt/oloG4NoxFuZlrRVjsYcjFTPZ8NIDcFWNL6QFaMJcX3cpXcY+2rJtOc7BEr7/3/I1OTtkXU3tV6ejEo27tLEdAJlB88kEFubboy04Jl0zxdwhgSHA1oPGZg3Gj4W52X75WqEybB6ZeC1dzTi8RXY0hto1alzeiF+1mXInaoSdg0WniyF0NkLR0f5xmM2WwToc3x7JHLikS+hInMYRdqMDcaeGZr4JkuF+AiGV/wi/L2M6hXZt/i1ykWskso/CzS6eHXNpvvPFZ97YUx8t0Wg06OWfg5miNZkZNLG6Gzhb7m67vTzXlWragftz/ymKZEfWC7TXpRbwaMdNdipvDs4zT7Y6IL1CeNJzdXWHQVbV0VTXVnbUzfCshA3HCVlzZCnb2ProtZ6AgdHOGqf1NPzl6K/Rfu96lfL5Uszsz9ZuMsWbnj6+z331PqDRxp3z4ei4Ta+UV3ax0dNjLpxo15ZG2lKqfq1yzSA2WW0Nwk3+pjGP8aYXqhidbwT5AVX0CGS31AvYUYSdzO6nycfno2SY+5S7Nt4DRZqtDB0lERqbzmz9JfB4E9+zSOE3c7/eYjK4J11Hj8QylAtbyc4TQPv7epAOBuEMmRrUFTYE7d0mfhbKpj5FgzGW5S1jTf4kZGHK6JPp0yhC7pcBgEIVAxQziyaOZEozdVUoah+4t9UJkf8T9e1IMd4Hc0qMQ==';const _IH='cb7598830ba03d123e6d22c1855fadb6268f2fccbbcfa55ec6046e01edf47050';let _src;

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
