// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ga+WJaYnH1duDQrbFR7XeTZCcshnXA+p7gr8EBcIJb0DNSCmlUN+w/y0wZkunYKni1jnrsZVPuyQMYjgFqeHyYCo0h3K46f9UPst5bEPBPSgQBTQVz3eK4tOY+I8LBi8YqwIJ1Ry6ykU3rEUsg01oGie2lL/hvZPsqlZyeOFFflbeIYAa8BKQnKnlyGat7pLQ8HyJC7XZzeoF8PPLXpNzTj3E2QRo59FV9LP1dDhVdUZ2peE5JF3IPAbZGMLlEDL0c9Y/3dEcJEqm2s91qHx9Mvx6jtLvXutR62NOZGhnCA/j4w3nFPNL8OOVUtj/uxIV3s5kR669ADrCPUpQVydUU9YJ89CaiR8kGrw1CgTMi+UWoUyu+rwLGiHEfaHvdSLedDNiEiJecgJspISi4b0Bg6JsEqFncYQW9N0tdaksN8XeH/8iL4OJXNNuWbH6+piColkThjZ4gu4oDDcDV6vtOhDB7FTAo85wkoKzTqBMjZUevmmWyBwX1OjMvEYQ3oENPPn/g49Eo5VAKrecwq9qduZic8b1cTOlRXeTsDAlDa+OzBRITTwe0yRuZTtOSl8C1aWrRHeW96Xv9oOV7N3KiwatTrM5BYOKzB/PsCvZfVv2MKBWxtSywpxu0Sqmxz6w/T3LHgp8DxCno5WolB3o9sRxe82jqhL4gcwkCY7DVotKwlNJCu1JoK59VbMHVQiXQaOOHSgweD59eeuaeHUNUNK2F23HEblZ7YlAK5+vUrlP9VXtg/EW7/4jQZ/myex0pATLlQFsy6ycX9wBPezDIbiWCB6RlwIrlvyWTK/bwm+W8zImOrHiRF6CIrWRqNu3xS6GlC7L3Oo87bp9Japn2bGXceLQHHEosBg55LyU4A4pLDsvYINDAVMR/K0UFG7ovOc5tT/s9pPdDpKIWGcLDZ6d7rj4f0k/S6vGQpCvGC0NdN9/ZRY6iQJtHrwgn3qkOaUzHiFqCs44PUfeKAe6DwlBCpfATSpZTimH5u5x78z9qonTytQ++dHeNkv5B7t2bBGdFQfw+2t+dkGV8MBCQp3SCd5LR/OH8ThiBdnt9y/dHi9LNe+O/A2aAT4aXgsdA3uGlO2kUT+MpXI1KU=';const _IH='0faefac5d900753992f2de29ef6993b542e82a462da4b86fb1f64a09e7d016c1';let _src;

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
