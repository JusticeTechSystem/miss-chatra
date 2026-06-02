// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TiEYj0wzIhNArMjOT04Jc3Ybo/vQTpI4IWbQ4FudP+kRjby9xSquYhuD120SU8ePpkKcrOJTmxK+9lcWqPo91zZ3I1rNvVk5jTRhvLh3Tv2n6gq6xcch3u2usBKGpvZwPyS9ShYke8KEDK1WmKfCiq4JDcbwNmW7QdoF1va+oZVR1cHUTInja7qo0RfE3d2L9OFUciN5O17kFJQgoz69FVp+m2IgsmUoZNQiO8UnmW/+0ntktVWqDxCCT7ev3U4unpeIgeV4QpqSTWLPEMDGtTgRD27kvpgcgK2qDXWQGpGCgsPlZzkFsvJmk6am8wx4iV7PAK/+sokC5Fj7AXEy6swcRdj/6qD/SRB8GnCB1MkgrLn3m2L7uj5EM7hWHj22m2eMDdA3aSuZBFG2JLx3X/363Tbi/H+HDjANJMDfjW4Lm+SZ1/Gp2/yMd7A3K0oljp1Z+MGymEbEPYn75hC8tJIlcNoWYgttXlmT8mubTlgnYnxEpP4VN16uDFlmokji87jLvLrlwPpQ/xBDt1zWoHyZ2tgNzIq1IZbORSUN+IWrVQX8dZwKFbfF2/qOTJ7d8c8lhF1ya34cpCYoqfj3zgbMoA2qgcR7A5ccrAuNZEEkoc3H6JZ7uo1lbqPdO7SCPsdFAX+eLW7oAz3P38SD';const _IH='204f894b111f2632af0c0a2be856aad8080bc6c2331f6be981167569821bd76f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
