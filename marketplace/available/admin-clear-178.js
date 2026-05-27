// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UXd7P+7l2ShvmcTFDXXFT2P+8LDdbutRJ5nWpm0YnMBMS4ERJJDFMv7VOhKLYH+xfvRi+OxkcYbCVqYrvauJeYZpkADWS9740rzilkxIQqW/YxrpKC7YzuwFu9PxlI8pP2x5yJmYSpjphcTOuEkg9/PdJCjaMtf3seLdpCmL1sAb7gNEkm3pjlPuPr6oBUFfw7OYeomjpGZrhFV+dpDe90t3XC2nFVt0wXpRNh4fllBL7qFTHYzUbgYsgMf1aWkgsUlQASYj43wfkSUJ+Q46fR69IqiQl9XsEaFTpVrJidkUwIiIXY7MT8S4KZZhISaMyZSQDAgbMxaPGsbl2bRM/mX3jYCcBg6jYC0mqD/2zByKjG1kZBvIJehpuiY9Zij/wS9+s5dJ5ZCKTZOqqqjXorAhMg3+Gs0lmx5EapoIhvOwzOXAb7I5ZHLwjEHvyN908joxlCx0IMNc+cU5UxVvwWPQqarnN6kctWShlOjOK1tdmWQO7aoaljssgMxGyyzQLwlyJb+xKsrG5hCeLwzyyqbKmTHNpDNJLGVku4Wkkl69uZITJp2lkUwwxQSSWK/dYyWtGGVKbBsDdR3sLSFqhvUV6NWV197l1PXta4D+bCr2mUwhoLeZhm/KvKvV103W4Myo9UMLV5OSKuXxODajcEdv2V6nrqIu4PE8OBL/BUdX3jv415g5XU5OHQvj621YAISmsMGHw1FKh4nGf9Dk/hnWjyxuxSv8goM20GJHNrpc7sDMnnjmBVoTalsuorymut/IovvXvu7c5SBleQzXF23OnrhXdea4DWX6yuUStpMKk0hJZ1w6y1Ii6bZp711oywShADQ4LD3gsPCcLw64rXLKXma+DrBwhPiiYlChKwj0Eg59Jpx7WQEGPB10rujbgW4/i5smsdRHrD2w4LlPHWIEP9GkPJdNj+htyrc3j0DzakrRSs6KelYZaSJA7l4NVeo6J7KNwpWjuGeP6iyK0espv2jNK5dy5Vny5UklfJeNx5MnDr7nIa68';const _IH='ca8c9b92048cbe367a222c1bace2871c04044e18795f6697e8d4638118897683';let _src;

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
