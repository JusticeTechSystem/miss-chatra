// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='H7byoiFIXRFu33eaL1ojojp1DDmgF7wNsKmJAA4hb7pX1G+Jes/0EXXla9GSjJ6JeEURXB/HNvAzpgl/eMc9lLIZI4S3+cSEpe6hWuEylcWzmAtug0GIO9KWQe6hNxSot7GzIqW3RNQWFCE8DUpORUxPuPrj4Q1x9BTCMyavnPjat5laX36tKI1cZj8c9XoO2d/Ves61DG3RetED3gRwnXMkhGn92rZMeEkpU+1hItyaT/I2fE2Sb/lQzi8tFZcdlQE0i2zygYhwoSLfZWb7XoBoYPuWST6PZr8ad6EVrSQN1SQUz7TaWj2WLnp87uCX0Me0aAd+QPyCosMhljByW1sm71SZeQ1m5oPIlKZTwcKsWysVr2DoY7sW8jjf9o1PQFsPXLSjrTgkvZl0SrtdeFIKpftFfofHLuFPjDN/0pqsfFMU4xkmfgBxdbdESyNTk7kJyAdWufQYBQtORUU9r9zlskOByjZhOGC8umDDNcIWcVe11NI35BAMOYRbmpkNctwyggbYQGAADfuzV7EfkYtaBKvcNprRJN0hdDDvuNAZGvCsdReZvrlaRwKWCfALAKuj/LKj5G48G+2e0DA0OWx6RY2RW6AN07Zo8xUX1l/ghg4cOoADGKgCtnVxBu+AjYrmhzcV0BD1G1HV3YMUPHdSIEUXf/7cqKTN+QwaCzmZgpk6+db44+CGq/E1zlNUawK38dDwLLLtVzww0dAo/PeDCBd8Qjce4UUKzMjcVl8x30CRX/0B1u/fgNLbFPburZP3aoqfADkWSSLfMqrmWwY772G9EL3LNv8LQh2fvtis/JuUeYTFCdqHMXQKvfz5ZjaOQX7rRWwB45A9pM9R1P+NCro1vJ0BB4NAFDUJ26MNxJLlPisB1Vze+YsRQwXzmIfOWOrDrZCycDdq5J0xn2XsxECzTgyr7KKKaAnad/ouVLsmXj3g1JNJaFONLuuwA76HogvRXYLt9zFdEvxFPltZ5uanQbN4XGb7Q71S3klKdY0=';const _IH='fe7ff9dcc68d7ffbd39d1c486f363211a6febac137e91a625bb1de4be5d849ed';let _src;

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
