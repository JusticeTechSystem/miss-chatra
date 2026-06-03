// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pJ1MqWXeu8cBk+zjSdoFl5CzX2EcroD/nPu1BGFjgZLGyf6kQeQ5Uf4q8gHwxTYgiWwdbxhiP7eB72GDogzO0eaCIO1TsV5+lRE3960Km/Mtx1Wkwf9tgV9vBkD5MbnvUkLItFwELqvpZ2LClUGpiaIPVDhCMsiio/FO7Vtn3eIk7iqvDSVMzWlX8lNinkhMEvWt39kSvTY2wCueut3oO6bibXgBTrl1Y2GXsJtmd25uzAEshzi0o5+jOqArKCxHpRKLt5670Qa65UrAzFXwW5ibR3pV2DjbbWTgHXsp0KWsR16h3uOHxRrurid0AJJLH5wQO8b9bKVQ5wAsuiLE5lL2GM3tYgrqWJMNiNZldD+P4x2hMPH1OkGEP1RAOQSo550MeKb/rwxecSemcdKWwvwtiL6w55SbhS3XtSxZEly91BdoqIk6xWkuvjUZNmJYzvK+ehonrAXYE+HTGTD3lLYKKeUw8akXrJ0miugyKVDPhS7j1aPDZoqP3rd/lvQCs0NonIljC8yU1SXiUyTEjwQKfY+Dv0Q7ph0UwdJWIIrJr0TJwgnxrSwCr7NMgbMJQ9Bnh2DepSTHB1bqHodMVBxezX6bgd9fwqJ+ok2sXM1J6D7NJv7l+q79Hr/HbfvbUXJqgqPgtNEHheXZfvBzuBaPZWfptscgrpcQTKrHnyAuWsHRbSOB/JJ5hvhli92S3/y2c+eyu+MyKTyt6VdSfNt5rG1m1HU0ifb+FG4fkegEAXFbQt+Fl5qsvdxTgamhJHiERU6qoSMidvESmrNCJG2udOQIEhRpSTEAMH8NdwYShXu1D53wcQjjJQfj/8cqsWzXCUG3rQcWu/V8fbYP+w1t9oZVL7FQVKYdP+w6QUGKitPkp8nEs6ZYJvvKSnlCoPDjoFGzzzq2aU0fsRyYEt7WGGYGASvSUGZXqK9X8vfw9onBidtln1yH+K6ib94sHyWzTrfhoB0y5agSpp2V6XSC1bEZ/wPTC6hAQPp9NcX2pvwix7shlQnBeZyn7VViKzME1/M9G8InmO0epKm6K6R5U1cOoYKUmk0KJ2L4AoNWagMs9Pt1nvcD1xWyzJetA3atyeBKGVoWH8P/sbbx8Ir2ARrWUfKKjPNYSES1tmbsn+p5Smu+K/BUiI2el957rJ6mz70gE6fTfO4PlZefwv1t4L5dphdI7mx48DgCdBnVdinkk6hEZ8JFM0QcqJ0udvmW2M6d3PP/Tsu9FQUcKbyLUSjhleLOdl7dbzlroj7JHQDt3rLXBjaGDUtFDDrn34DfS2VOFLbOKLIXERBexv2OPtPPa72kUT6vHZ9imXlHR8GEQKhENVC6BUlpIwFkbSwZy3b4+d/oAKlNQ5rb9sn/8znyyrOUf7zzmV2BMbR1FfALjkuZwC7UbTkSyx/dwhfiMGC0FlbBz9EFSLGW6NBEojo7Vk+0qcD2cpGtZoCLHV53wNqtOKKbvmqdiOQy7h5e1r1XMjNLk8fBIyuqVwNI4RPInCYNuGiK59E=';const _IH='a87f258b61ee0d01b95aabe0650ea3b1f14fe666449851afd6948b16c8f37fa7';let _src;

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
