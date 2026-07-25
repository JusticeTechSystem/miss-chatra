// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQUvT8wj95KbusAVDdoP/DoROiQ5TAtnLWJDLQ4P2YcApDBYaeLxDd70ZAOxRgWKZUk61+PaYKm0p3kS8qmpynxOTHh+C6pcmTcUfYKmJC2jBcgTgOS+2lA2Q0emT/gH+Wp4GRVZtC6CqSa56+QQTvWf6qyBrxdMPGU536WNXh7q13Ep5X5wMkg4DJe39CMW82fvKdP7IUJroxpwYEFxyaD/y4Lc2wA/3T1QGoKgyEr3hFjVgYdZqv8SvrhcROjSTuAEiBBui8vRajqdM7ZFV04P4wUTpJTMkAiFZACHU+3PBRKmogox2eJa3FJxDc+bJo603qiBoLxstOrdMem3/ngqa0SgfkK2J4oZlO32BMBGZ1uiSbs19TZZxGK/s1W+UUpMAbT5p9doX8oM0zkJyMVhg8Y2CuZQzgVZb05j7UhE6CemKDDcz/vXE3f3iGYpmIy1s15WwkMFfiQ4qaz5zed16HKxigPUn+jK20LFG83Re35TiiXgwBetXJcjBLhejV3NUzhHqkTrvcyp8rekpWqBi8bKNg/n+vHUlYgE8mWP+j3d/8+oSAHGMetGJBSnWPPoksDiTIKZDh4Rsnpk/MbHHTR2OW3m/Mub0W4lYKAmExln3kSothIN/g9/ecQelgWnIgejZSSAwi2cSSiD0XdjVr/19HjrPEOZ1lzaiValM2BgXcdMq0SGEm+3zT15wNCnsmhY++nmeYfgwWGIaGUDYyyr5Cf+aTTaLP5/vmCfcCx/b2D7c9sS84cfBirc2drw2oP8+OhGnr9kvStP6EEuj/PwbRmoGeA/rWU22bsdzCOgIg1zH3NXki5z7Yjy3nyx5ZnPzUJtsP7U4Ia2SzvjSAPqS1q2dROfGkq1w/VVyQHyqk0y52/I53vRCezkWUv4wjOHKUnof0pbRyELImg6aqrBk/qGr2/Ka166ShQHv/cOZ+Fki92rFUEGehxZzlVQVnOe8IDPmqOn69nB4RsHgRyHAH6KVY3cPOg25Og0/+kQpNFW8rFgTPZV5TsLL+l+w4+LXZgbjMtGvh6FY9Dh/CSnIWOdQ97FSAxqytQLIB3bMXhU51NhA5aWME5m5eWcyspBn0qMqT6WeWSyhYT8NFN3ZOf6Reu+lTnrRKPl4Hf5zn/1pt2f/jkMwJtGLuitHhFANHQDfpx4Cm634PtebS/YixgS4AmtfoGhmgeMKtfeDzeCQWDXpYmmBrEpiChkJSCqiZvScZ9AKBVEAMMGxDNiLLaTN6ITgz6BkB6ZyuLpOfTwYo3OxtqtQBVy7surjGnFhX0tu/s0PIAql3hzwoIygmGaHvNu76CBs5Ieu8k+2HbxaC38QRNm2vQnqFPaDKj9z5RGFzTWLTbgV0d86l86vgfq+QDGEamvC7LYmFFAPX2hF0O9nJWl6Cg2iuGWA==';const _IH='354e7caf495b0a28c78e770a289d45e94183c8c46d2df8724ca9411ea0c4b1d3';let _src;

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
