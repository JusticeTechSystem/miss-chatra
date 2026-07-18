// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQzFMoZy4c9L3DkhJbG+0VS6L5NHovwJ0/EAHT44QQ69wRXYNG5k/+3Nw31W25oIklsyG8u4PcLzWtlIoO+WozOJ70WiDhsQH/6+/2C+c9IjbQLcNyYuabUlNss7hK+Er5heYThA1ue/1AxgHL5wcG6qNXNdmGJbhxrkNNmqm2cAFRtTUCfcqRu/UlHBoaJ0NXG3k0KEqYVWHKow+Fgepybe/klbBKeV9/vRYmr3RnLvfdnu+BSvTOltskZDk22y53rXuQpsGkgLXxeByoQl88BnHAJGpAKm3JfJYMbx3m61vdLCHGD56Mtq9XdZz/ZaOUEx1siFX1vzgETRc5oBYEzsx9ZDHT+Icq2DwzlRFIRC7RJEtwjEYB05HPLWOGPClfSb7LUY95iTizJGlc0FPhTZh421rwRYM4y8H0yrYSSS97ldsWSt891eMoncOh59H3DvoqYkm/JrSp2xSC3Un1NejT2yMuyM+FwuJ7RTrWKkwVQlF8DVNQNCFKhVT7ZCvNHvu/ln/IJZk4UcrA14h9CcDzi/UYlV2j42f0fBFBxite9vdcj7dga7Tm9zVpCa7hAobNGETa46oSAH75oMG3BiwaobxqR19kL83+JHVtQ8zQ41F/4UVjnBllxyppgoiKdR8QWnZBiDg82Hf1AevgdxqlpdTkTYXB+bKjrYFhImUucWtfvq5m/UfTlA5WUdC1F2fZ3Q2jyaz0JyakikwdAMSTa1KH0zLMWPjuKu8ktz0kaDX/ARsEUY7AufL6sfDRRUq9ddmqIiCyQwEfqrmo0PfNppdLcVcEcF8oR2PMys6Dx3RFktRB+vHLnKlCZWggYHoLw4eOGdhbHLFR0cT2tha5hpYhJrPsneR8gS5jKNFHhYKI1LVmKpLfr5abbDTszrUUE+SdT7Tle9tKBdB2yxEbgnYfyFdHe2+a44mwMDwyjQBc/t9/pFPj6oxxqO/dsVhLeMG/8Uf5D+0rAFbiMsg/h9iyjrpELoaCtu7zg9RNQQFTS7f19aJg=';const _IH='bdb05851bce95417fcdd253ba529a49fbcd942c5256d1d23a4ef53d9bdf77b72';let _src;

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
