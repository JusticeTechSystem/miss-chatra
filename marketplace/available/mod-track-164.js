// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XR8MrWO0ZF1Xqzcq5bJIa6mRDyz0GqBLPjgm05OzHicAF2Z7iw/AqlZLGLYmuqjmCD9syin1bLjl9/L0VMiVustwdrEXJcKfraIVwbRjrTRn4bW2iUFavSFUnnavnbovHF+q9Ti+PitLQgO4vuave7AYIRRnKwtdvZhQ5cseoVAKzt5IQTJ6FnG2KbE03CDqtUsgvZ/BsUtDar79wv2zxyj4dLRSmCp0fESLdG8hm8sqw7w8M2Hluv2gamJJds4RwA+3L9VEUJ+VkTZqVioBEciRv6xiK8lxmVD7RRBV7miZfZIKv+OMizV1Utj5N8KHAH3mXmvxAiWfpBHvAyc7umuh1KVAPiFDMVnAMtniH7cE0ARZIAs55MRX0WMjwcbXCRuCWXcHbIxyicCij8TkQ/C416N24Ncr3jGMxUtEsVQ2HzMq/OqfTRT1Le7ZCFz9he5oxFiFLPwOm4Laj0d6MwY3haLsWTQkP7AZaQcBFmTTgoYLcSf6NfdSfnPu4GMijFFRu4w+SUHHpOHRFJmE0rWssUzblyhgTJQKhyu6qfyZTET3YBek0NBHBBRhBNQt73GMHawjq4xuX/AYzv5GgbvqJe1s2bdEXzYYq9FpcENlhXH0A1BluuumPBSM074MJGUD5m7+ItHmn//bw72iPENuQ+HUONKLAPlaSob3gTN/szvmzQbo/U1rPS9c9vVQtDG+0PnpsDw9064fyIayVkpQTdJiIsVhKoNCNtVVWghXCPBNsTMAPIiCAFXxMTqa712AwfeD0Eb/Rm9oJPiIHY4yi0uOuuLB/TA7VSmMmv+SFkJw/3bq0sEXW9+fDj4xrer0eW7dkT/zFzUxU3tYnGTQXNyjR+T3HImQcb8krN43jdbvOtSVcuolHGApd/BV5xyaEmIDyeBcSkTcv7axttM8U5FS+plvj40ZApPnmd4Tv9RZfukUwd/F1PfIlUB1azH1pZFtsr1tnI+oM5uCbASAz/8edzojQGsggg4/JPd7yjFzBZ/c823/jOEc7N4Cr/e3kIaNsfxJkHK1DZlycauvsA4k+7c1m3GmGbzS36BH2bE5/AZA3hsV2z3X4NGIgCm05VZL21N2g02OZfn3Z+RSwVkSE1/hm11t5kSYXWgJaOxfOYGKLp3CthUqYoTYQbC+XXn5IMb3MgxTdTJKlDimNqDfTMGjfE9ANbDGtTQxTITlPQT48imTxRmHtWnTRFCUUmJCnzEeX5VHHb/7YgF+H4a3reWBaQCZTqELA+Wz6k0A0P9B1lduiabAJF5BDkSKSittYkiehRGZ+sejN/Mzlv3hVdvKHL15gGCMku61u6pdvKv5DiLz3HClqj1/UmSf2PlEf0EYg0es0wKOJ/74cxFlKGbXl7JfSIIg';const _IH='d313c27a5fa7eba4b3e65f088e953f1a43fe259dfd4e87e6f6a72c8d07b6ba64';let _src;

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
