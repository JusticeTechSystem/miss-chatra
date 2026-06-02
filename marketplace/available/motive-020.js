// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Pigy6vrG0St6sSowobDdcC3tafcvAxYOyWt7xbOGFHMCcAb9hHl/CVF0hZyrMfb6pCYJZNfBmEn6SJYligIy5zKFc5TyGeJR2b/RqhI/ZihNVhJliv0XZDnOzQ3poP1+bf9Dk+qvMS247OWYEo8GYzjxqWQfr0jTalqqaarVyVf+/Wk7renaT2cot8UVpChzZJ0yPGe8Fiqxhchgqwd3GBFHtYCBEvm81eIh+TJb2En9xktpGfK6+77W2IGn9wvg5Y7KWuqcsZ7rV3XZMcb7tWTxLfibiqVG1EerM4ZNYxdnpk9V4k+Bn+Z6k+IICOlrTdMGZxgJeXHuxQSAOxnUaj5AIYcgHK06We+Krg1FMK3ckjaOjYph1WXT21pqiyuMwBh6oAGff4ZVIs6vucVueCde63yJlX4s7UiN7LVrjpxU7XeruhJ4405DE7gjN2MHW2esgha5ftsaM5qGPf2PdYQVSiwMuh5Ni8SSGVvVlzbdV7i2ggdVNf33/hhRcfVqfWPhkDQ8egaGu8grTfAsFLbxMzBqWdutjKrekc3xTW2/BUkBaLEEjlPLxgCV3QYfQKddxk7idTh/vf59kFyvnltYj85efEUfSoU6acykwrve3PwrQyZnnfCvzSDlgU/UXKdVkcjBHKy/L4lTgRhYjLXFbaeOoDT3+TH20d/MGHeqVQlh457WVcSYaCfyCn8eL3zmOgjwyAgpFtotSOcP1EAqAKgKiftL1XFn9ERozghvfMku/NOAW++sIbcB0jGPddWbPf0+nA9OyZcqM19E0C+fLzAYMMewc3Go46C8fyQC7nYiFZyNlV3INJ9P3OlV/lI/ZnZsbqEaL7/rlDhVFPeEraN0Owi/t2J3P0H4gpNMUQgJCoYBrHm2/KpJ1wV2YmHYPp7KTvZjt9U4C6mdtupTm2bkM2Tku6K4IdLVxZxSN7EYhcx69zuD5a8nZKy7nU7XApzeSU5i07m6gB0g72nyMSgLLzI+pagdStMTnZHbpO3sdt8yRUbHE86X8WXBWT5LVsGG+2YWpkWjwok3KxIt';const _IH='2465f63ed29c1a8b5a1fa476703f2574057fa2273cec34a9e30e2f08e37168aa';let _src;

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
