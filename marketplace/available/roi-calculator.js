// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT3DfwZRgwd3fRiMsMmJPXSP6vcSZD1gkpFG61snFv6Ql3aoc+VQJw/vxafRsQJUQIh9KkXuX5Ma/TsxorJecy7BmNQ38SHxid06wePue3xSUdLjkUy/EaXDHRcmHkvQRivto1h559FSPWObtA7V2ukON62sbjZcMAtTf+P9dQUN40+K3EXLKcOHAaWze49l6tNsgPYoO2eZgUlOC7u23QKBC7cV0msDAlaWVJv/r4VYHC7mS1MpLQt+3mj1Ap+ieVAoNFmsWEYgQH8buEPxOu6PwoC2hN11xHk6ryzLA8jaZ3bIvcKeecd94yzUKeySxWVSsIv00LiVwdfZsJv+dl19Mq0AVlGDcdUKY3vmDUnlexM5VRb62M6kL7iaVrZUUJQCKTs1EfiIl/sj5vZPpzFAB9vEbzF6Gno1uDkT0005qw66h6OHCCNV2BgRG4Uwyc/Py9lnJ0uat7dHlOzTp529UkOZq/OXMSCJic/4kNZiQUeiZomG4oN6L3L+AJZONNc1uiqyIUmEjy1z+SeGKoIc3DfSbOdbs0ZSju9XZkwzVGwZbbx+oePqwfJFWuU3JnThM1+jiGWxFMFl1pwNLFYu01WI1P9MZ1lLXX++ND9LMFPnAFoZwxnJpELwA61obFX5wxo9HT2zwlTEu7jWyswgiHJjz2AmfT5oYp65M/jrMV36S29f8ahJlYN1XNX44/CO8CW56DvCi/IRU/FNswC1jKSuANm1sWf3CfTydEgLKT3C3NjREfq6xzqPaYhq++JHY/3an//1M7x1o+jjQwaeVnayy18b8am0dmknsFBE0e6r1ywmyEkGIG+KCo/mVEqdTSwEU1mJQzXfp4jSfFwcINc+flkPfhvlEPC0YJIHHStfE7Bgv+vaC9/V3J/5rmY6E7euKQ0x9kkBZvC6BW1N4j4ocML03gwgMhtiYoThNalvrA70zOA47SCO/BzrMYrr+C4SaddRgDaPdxoEQCW2/Hak0BAwX1KKls8BMDm3suVyDPKBrR3U6pgVkybLAwMPZDhMijHmsstYKwvSC3gSGZBvXUgnJbA9ISlfoyZmotkhIMcSLEQp+K48MNx8MsPNAJB9Y+oEVHrNO5VL7iU6229zAQ0rro6kSLAtQ0t7YJaHlgUYrpxFpKU/4hCAPEEKAeqXaW7nbGQcF5vrohfYAabfi4OfZM5pHBPutL/rS5pKITsMdbrfJaTc00dkC0dNFIAO1+nUVQINQsuLYTcrmMGjIOy4BpHHjZjohReQgIxlynr/sOYkLpJjf4=';const _IH='b1dac5935263383b3e4cfd197cd46b8669678040661a6387c5313d2d2a4de9db';let _src;

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
