// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSzDbvYTXjLUz1gf1LGygFIeeSbjFTkFRVC3wOkrWoqqJFfyfxpDfLGGZdiqAC/pYafE1rBoTcTO9kT7QYwItY66RHp+algCKRcoGExaLQQONthrvt/NSNJVeXiZv1QsaDfpBa2h2fdZ6ePMkf1tWmcRfCgFLLyPaN8xbsJ0EPSXqlJczOvDRxG3Txoa7OiwX0I8V62Sj58XIkrhNUdkJm5zu9MbnqiI0+RqHvd0uElEtf6GhcGFZz1bSTbfN1LZeB8FYsdOcw7GfMmFFnVO3OINXQu60gYMLdgiO4ZLUB91sNc/ponJaaJ1U8B6wCxnKrUqCAFuLSJsMsG/2lqgSflh3A9m9AZoc50Fu6c0jJWnpv2P4Srz1RkkRMrpP4a3KEmqlkYwcG+T6RFVGkldIqkH6eA5Z9AJCwROq0MfxnUCcNe5Iivf1/TeO8tK/LHQdhy0zZ/lesGrfc5tYL/1ZSjY1uSvMoqjpMf/HU2dE+B3QFSJwtzu0Ih9CQSNPXToDSDDprP4pBt54z4qNLotkJA6Dof/aYn/IddAQ4G5ZjnJk6cmUrzAWOSjgRmaDlrEybMfY8y1LfLErrZx5ZZbNBYBWqRyyWElawb5EhyOIKR3Xv8jStCiVugLsoT6SidxJsuAHb6mzbM0xNlsqp9b3MEQ12TpeabJWNV07RbeFWDuE/4jyJs94qDLkhh++e433W9/U1x+1bQGsqjZcZQBnDAzQP+nAsWmR0vXaNN39VkV28KZ6WF2WkKN50dkXT3ZTS7KkKC/Fkifd/UNQgbYHDOnUABectVntGPVrI2/r8Yj3RG78d/x57ZIingSie3G+5rTHBnC0cPktxqoIfyZbNFtMThsaFi5L980M6BJDwk5Kb7V3CRl0NdhKBKR2WO4pLLMQulMjVeV4THN7RqtL5rf2iewCCnZ+IEzc6NcXI6LUKMKyHLBb2eBZgLs4FjSAN9fJ/xY6hf004i4uDMt4EVW+ziN4Dr4W2U+L7weel8H0CfdobZRHnQzMnjUWslQPaAkioYuT9Ty1+Q4H7ekWNm9VO7yo3BqqllfvUSNLZhwXV8tInawddA1J0nvgvoFDI99etuUZ8wMbTWfl5mMfEceEwQjjRzmTklvN41KU3u64p3eoraZ8K9fM1Pbmk/BKqGVAI6apfHI/fIa83QD6sjxHQXK68RxeGhYKfCygfiiLP+IlFaHnEJLmiR9lWGq3NJaBMwVxrDeoCx+WGZLoPZE6gzHLznGo5IRh6oz+KLwrgOiUo9OdvgvRO7xesjpyFFSWH1qBQFp2emoXEJUSxihcU6HvldEsmyQ9HA/dJAxW0kpp79yjsDQHW2aT+CmXnuPHuOTRx2PFxV2zwcnCoMijdLj1jQwnVINl9513ZTU9poAHS0bRL0eM0A5g9zAW1rS3ELmxny7ZkV/I/vVCIFoc12dGx3jQAiWeX80kXNpS1LcT2j/P7qZRsEKy/VWyFTeb7IbAFe8UP23PTUhkygpSv13am0V6n1X0Si6+gpQDQU1sEcfunsCnUGz0rErct4QUHQpiZ3nrs9OhnJrX1P9tZ46P7l0POdQFJBZJQfteRX5mOwGr14Q8dhdny3otrNPOwySf55h0kOLm1Ogq00kTl34YhzLyUYaxpSzw/8X/V93ZC6LsG9Newb6EH4WfNkC491VMzisAUt/KzakP0GhCWgtJN0HQYa7oXgtgOuPFIf21JW64kfmfk++7lfHXkK0iD2hYlu7e8TQtCMM6VfOSTXqkJ9IqVmEO/QFHgLsIZcL64ol/1pRuT+vibg+eu6569ybPym27Zrz7J63ntUg6te9k26QCW2yXqTQQ==';const _IH='ff8fd4c134c3ab56b6b9a23be1735b4b472b13211a0633fdd4ff4df9e9da3e1f';let _src;

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
