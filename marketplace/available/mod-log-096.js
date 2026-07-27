// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQMCpKX0pkYi7asHGHYSWV+T/u220x/woVY8DnMo8Ghcc99EMycmDtfGBHIAK+U7ohYk4kB2YUb6F7eYOpuifnWrfuQceXo1FJnHQsupaKCT8eqi/o7YtzElEFcjs8s3pvWPScN+CstedBDbmk/WxUbQDCHaARorXFRyVHoqp+rQriLg4fsPY/u14djDWGh8W/bVbWJ3SHohh4cx0p+vd8vz36eboF/3O2RusdI647KGUcZwwXsMPonKjnCIbHgQQnQwiu2TGQQgQJdxz8FoeUXDyAXTOMw2S+KxQocsGA6tzXAvgmqkNCjALNsEdgpAlOqbbecEoWWQNVoC8C4hj/I4n64WNE5SMsKIT2vFTxdiL2zsHgGvCJQJ6AfeZkJd14m0h57R4KPmXIuBv5ledstVq+62j6zhq1cn9cTRpMMsKDNf/Lks4ffSkTEdFZEalsFW1MV8UMnv2kse2TbjYLyvyyK1HEfikaR4TmkjMco6oElPt4cjFoKCjHDgG7WpSM84kUWy6oUqVICR/Bvs0FJzL23S9GmIoCRdcr6z4XTf4v94F9kA4zp1GhgWPyXZ2w8tKJucnhPNO2aZaxKSnUhzLO7Z6VdDLbxQtGH8CsO5PlHIgaD1x4UCqDYIFjZ4B8vV6GyuoqSLOJYzFQBheOwstR/nJC8PIaledxnD/exaLIQaojKWE6KHKSHPFVwbhyrDh0ohozo/ohT+O9IjNJpLC3APJo0hjOEmZNTYp8cutPgRTYhRu24dLGJPNewgtZBMdQGkqgObn9HJjly8hHGdyudjG1lTGhR3POcoMA9+5BM8aZOGIfE1yS6a0pXbr13rzYpDlCDZDlryFxbwlG1sz4vcl36+NRrOwLXdRhURQ3OMB5IThJGhbd4GQYkZzklPRTVPXi3aPdVRmGJBo8YQG0yfXlonsyizhSuxi1NIQtBfCrE/uMtoZe+xscnhwF/8FPfWFEPcn2Dy4zvNgJL8fpXaz4CemnYNKGsnLLUkjhvxPOJvBPKbhZ+Isk+Sz+cZDnfXUWvcs87Atysp7E6m6wq00pp+z7gf58dQhbir1vwz9rT3kyZDOHMsgcPwxb6aym+d/LSSvNtQatpeCLdLb5bqSQQo91i35KJNq90F1NdFvPddd2dw/Gg33N7UwsWaMFHpiQ7Yp035p33gIGrie9pgeP4z95lws65nIDPZV4fpqXhO9f6cvG36TbTVhyTmTM3szdZwfeR2s9Mc/IgnI3eSEMb8I527fpCQ+EXqwEteBEjc0124Gxrmhq5BxcIATApm5REKcnfspKlsLRb66tqIExsUO7orVhlR3kdFjoJU3nw4PcHN/BHXAVW/rDWo15EtA==';const _IH='32e31fc7f81cb83c94a723647e3419ca3514e39407c9cc2495181ad785bc8058';let _src;

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
