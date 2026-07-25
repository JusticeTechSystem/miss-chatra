// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSvhrcTYg9mhFkzAHsxy87nEUk3+AZfebOXHJIjJWiEHjmpdvzuCtit4T+rQCSbK1yWiweZclwQSz8PB48ucdq52YXLcFzcpTKc99Vsg+W/uuBR9bOSh0cVn95VGjNeoZOnqMS+nXS5MxnY4B5jmK9v9VEq8DJEVIVek7E6b6YFrlKnn/OnnOWtinSpUUdYjOi2izNQMhr514RZpcKvhLbe7p1ZphXRF5/SxTNxQmlKz4iXDxICLYK3109xHaOVbOjkC84lh9gnLMQhXtqSn1N3951NMSS6wF4FLpwBRz3OpukGdJ/mXbX3aoUEeEOiFDqbdyO8T+ZoBwEO+BJbb7yEfE0DEigfDTCpuUENYZbPTAl7wMBacvwDeNn8U24A9exEEiTVq30PAZG0K5kEVsqICPx/yzMnY3o9M1NbqRq+Rzma37/+SbauV0Sw1EzFj048VaADgp/Ym9l4myy91t+1X5o4ZlK4sxI/kMUhwDh50oZa/wslkB89Bg0XTYj06r9/U6sFjaIVqqmUrYWlDzjFzqRcBlLdY7ius0oKsGEmxBxJCG0V3eVklNgYiH1h3chNaUuc5CJicx4bUshjE9DNNy2IgZHieiCa+05onU1XpvLLK0hz6+Tg1WgbBN4Dh76dyqkDZ/x9uF69o6iY9dF+EM1PSIbAp381r/nNSmuiiKNiSqe2X4uisGEI1I3F5+IShrCq2TOHnxch72WfV9iCakfgyyxfVqpjix7rPDLcBpsP6Q==';const _IH='58ba106c720c867d3b76fd1acbf1c5d222d21e1d48cf13a4255f882c9ca4ce1d';let _src;

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
