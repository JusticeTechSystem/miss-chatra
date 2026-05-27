// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vKtFyd2EEARWgazKzWn3k6ngfwVs/vyfqGnJzo39JzoJYB2xAQaSF0vuQjpSd2XmlBbH9km6Uli8Vp42SFeuaS3/XOIsOOTElAu+yS3LKK7Ut416uLowJVssmaV0uK/s9k1S3Am4j81x8Q+2KZCAOQHVVzBeHWAPMGUczBv8W6YSJxfDQDVEr6zbohAcraXDSiZXdv+MpD6QRwDrafX/xb3dqdVUu+io+SB3YX4iwWrj3KFKglJMtWFw/T6Kik/PQzKP5WGkTB2JbxeSF6ZKmpGpOCLFCpD0nSGRr6wMetzKPXGm4KNO0khjE1h1ul96UlXlDj1BPhQaL3c35KeiD3brHNSfjhpKSvn7BxBBSwWt2qdLoCay5i9RFHChMWmeaMqQ5jOfgwreSCjoeLpnPZ1vlEEuD0ymN2AV9AMGojI0l2fhE83c++4s9hr+5j+rqOkR355TrVY60PtwnzyImFsHcJPTlqZkgh13iadt8w3Mv09n2MdUWiVMa5G1vKhKuqoXNAQ7kLmszqdJoQzmjbJw5Oogl5WMQW2FF8Qn3lPhF0ho6F6QIgox2cobgFEdU+/+C7qkV2hoWTE4c+aO7ff67uWJkpcaLlnqmeV0VUx9t7EdMw9BeA3ClbLGSSW4QVnhRZSirgAYHI58A78ihozMxXyd+0HNS07yN9CSO9J8YYiWzQPfMo8ntoT/l3J+AWEVSKxLJFF8KFMqe0MEZmYrp1XjA+iq8YKqSJhs60tYKDgtbRWNMZ3tsSVgl7Aqe2/Yvuswd+AR+cZyXSdcSYGWQ483U0TM04ZV5T3kcxGweDNOIHivoqR8U4ULOFfWzIZ5TFKQO3yQvVV9qC9L5SXKOgVwZWyQZslItkYpwEPonYQT+waP+gmofnJM+GuqrjwbA7JJY1O6gyiYlX1l1kH4TO4c0RXYP8A0bAhKFuJKj02F+tirrt4s9hJyTeWiOAkMDKPrwZDcHPpg8hDH7o21zwYqu7JLEfjLxV05qpzu/JRH6b39+MNvJAYQv/7GsjnsSlCnlS3Y8ZbAW/xLI9yQr6FQTg5P2ja7YtlwrVuoZA==';const _IH='c616a67b251c0a87715a579b8fe4d4d13dac9f4bf2a68b86752da736eeaf94f3';let _src;

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
