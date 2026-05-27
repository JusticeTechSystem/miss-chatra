// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KKG+2Pb25QwuV8NM3+XentbfiQJN2u8ZjmLF1IX/r42uGdM/g5VlZGuHTL1lixm9qCDL5iDd53Wa4KSAF7encIy0hUryG2E+38Tjv9qTCDjxpj8ZAJ3crgbNhHexiKmIVmwgbSibEYPkafyG3zPoP+y4xljUqT1iGf0mjTjdAYVUGVZOexqaaaPnICtm/Kfm6yhc/y/ZNVDgF5p5FEZJ91LyVIKNLbKqZkMiVa/MJNRglCHwZGaravAg59V1CTe0Yh19nCUbYRAbrTKLvNxXJDscSwTm7b7Hb+68BNNn9eUCKjQ3GRXr2mqBQisZFEt94Q1lTSWPGfQ6gegdY3oFIgGLFlRo58cv/OS4+SOPrennB0dtQk0Tsp5OScvxb0UQnXM+sfp6dqXodHl3eJoIk8MZ/EtbqGF1OQeoK0Xi9QR1U9hK16Jw/owl2TTRTh3MmZkR4+g6+rcwoq6W7rkrvuksCMiLXqfCttlOnNwYaZZrU6rQmF7QSs8Y839OOnobMWG/lXkEOax547EZpuTOgd2m6AHW2Rwbsp/yb0MBd/PgruMelXFAcKIO8uBjgjWn8Q9/JJ9KAPo3F2ByIYAOoaAmSC9G2yGru8k0zTBeC1WTFta4qVwnY0Ifsg0KClCT+dxyK5NxxF2Llf33kxQuoLJZWkbF8+a7duKxYNzWjIhGQZF6rFJlFXuKpLtW9DM0UmolftWVqfYYwb4lIA/LOtbXjv4Z3oqRRJfedE9U9/+YDOtihIZh+sRYjMWuEtshpMOLrv6Lhr9s4B0Y2HD63gevTAxdVAkPGVsYZzQc6RtEdRRA3i4zCV9HIzAtyRFJsHm7lMqcISzKEeGTvCqdOEcsi1CD5sLh3AMTNIaqwaCPeG29DLnILYjK+YIQJrk14FCEroOA1QR38AXW3Uz7eiyBXIM/Rrk69a30dALsCRsShN3gqZw9eVoooD1T3xtYAKMfhzNinMfNPkN4KVMF5r1zTRB/s//dvDwLzJsDdPRXmRQAAm5croyW24HAAJvZR8j4Bg71RsfSTLg0YTdtQioch1ujPOh0kELtfIhh0aGPDGfPjyfEQh/jD7lwV1LY8jmiV3b8yzeP1/kGoqxHRHTN5WaUnWOos5tYoYc4wRu99KMcHtOqId3+gZ65Mn/ZBoP2aB67YHb6DKGJY4nmkeDMnlbVzgpQg+juuC1HGU/T1YopGx/3p0sjWlZJbzQ70fzxU1GWvsVnn2Lzk1PVbAULVRtCpjPMkSIpAmuy3VFrbXuCXnNLq1aq1hDBf6JyuCWRfcWlpEemUavpJuxJoxm5lA7A8gS70vvP331Rm77/I4to9VSc6FnKtrDwxbUdy8FFMo7kSBUqd2uHNVfK/j+g8xb3xicQ6EmH5hsHW51a/xvgWVteDQ==';const _IH='963403d206b3923842043e7fcc728cd324861aa72f67a6f73ca53aae3bd11e0e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
