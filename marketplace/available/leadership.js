// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hzw6eoHLQj+PfpfuqGF5N2kRkp73wj0TGx4MFqptJEcVJ1z7pMKTWEB3+EDO6kvhCocP8+FruHqHAjS/uQ2yHBLhitighk6TR0W9zToJSIWc4gk9ePLLvVnc9vRbSMAB+DmOkmtAVahbZm2JFDiJXUv7z0MgzUBWZhUicxv7aigRH+Y6YAvwCGy443Je2WSdVoBgHzj0FwjR0twk8MAHfwRfUf+YOtEs43HHKLda+QHkyUuQzcu2/k9jY4MCbMZtJUUY0JDq5R5Q78aCFvk5e8U1H60d4Ii/Tgg1wcqmyP1RomTUR+I2vIdc2GEhpQIihmYGp18rzoaZ2f5BqaRJpCa/obFPS1oKXMa6FjrXGQ00MfmkhgQHWFJwO00Bh8bAaO2QmzDjKqhDwCbl6XOwD0QuXMie1E2CPwpIb8wzjNrx5idHjF84dcFX17VbJjOsv2Mny038hT6FuV9mq4oQZpOTevzMqRwNXCFKW6m5rv8i+bjST1yGSVAIAkMxZHHKrbopmUAd0UdATx7p7s4u2lGZCRMm/y1ywCcL525YUE5DU6jS/heGlmqgGvMUfOfdEaxKHZkcBmAsA9sxztiNlkg379U8+z5B1J8T/c3Llgn+RHrG2KJZLciH1d3nkhptUn1+7bBn8x/hGYDLcis1bzRgvWZyjiTNo7DhwK2TYlgqvJ8eiLbIGrOBqsiUslyFfMQSOaf2iG45LJZsxzXRgDZ+DChYUYho1bA2sPW3pFCIuK+lLEiKgEPIZx+LIpAQsM5l1nVgDhRg3cHUsZzfpdEcASGqdrW1LrXcq5CPzJ/UKUljipe0JiKxqGJT6vB5+37Vq4PRQsnRylCnJIbune7iUSQhQZJ3Bhb0FRszfGoox1V7MvHQEvxtyA0pbfXPFdhuzF7VEkRof0xS5CjNWX/J4jTkbKUs8wWYGbrUUeZWUDCwey/D8APVXEFUsAqv6WZxO5jM8rEMdFGjjSFg5qGGjKvUOb656bnRkc1SASMevAxFbKNV3pfb20vytkBpQS5sggXgCRW3swZ9k3G4TvPrr6QvWRQsydzQCuHCvb3VhjI49hO1LpG7PIiGmEaxysp30tgej3Kc/kE4BvdwPk0sVsMiOLMSGlGVZ6BIzO+on+aeb+Eb8X9xj/1IsdtvJ10JsTy/57VU+XCavyxPNYrY/dbc9wwkD6vTlWcowQdJJMZ/PwsrLk4cUDQXoNt8AyGKNOPUd408';const _IH='dfa24f67e28a71eb18ea84e2fdacdd0db9174a74f8a127a55fee60590e81e235';let _src;

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
