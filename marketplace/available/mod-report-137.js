// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ8rL9ELuNE/lRkactbyEg6bfhZhI988MlTQ2YnNveao15dV11Ns1uAd0mO3VGUnlm6UEBIZLYQtMsJkgPueBR1xvxGlkHhn45vNT/jDZqWmpR+ihlg7o4AZQ5Gj1eGE2akE66NrTp5rLohC9ZfZkqw9/fULzx1CfA+qbYYe2GbGtq2IAV0n8oECWwo7viH5rSB4nqCiIpqgcPBe37acii4f2usixh8zp7lSvQzRxk1BogS+qeBNeYazV4oHXX2MgKvU/gqQKxcEV8NyaY7Q+igxnxqGJqdWAYHlBDvnLbBGc5/NPPrJ+jgAXwbBQJ9w6oh2KcjNjClb3GdRUQ9zNxnAFr2sICY0R9MTpqVHZo7giFdDO2eH53lVu07Hsx6D58B2COFKkocky2p0GKKvCN1Lya9jD4ShQ7TNbdpgheYSIyd2jXLWfJUFDNY1gvPUWna+BOCYGH58tZVWZsM8sTGCEX3q+o8xBUe6Dqhei1hAJfoMRNkbxTslL4xoonbPIlCZkTh9NL9AWDjJdUkTH+ADmBdE9KmjVB6rStkr/Ikhae+SL0gFqxCGSSvLSDpL+3mL4/KFM41tRC2/OcS5vjARLkZ6KmCX1rhJuhzxTkP8C2650c/7skvf8y8YpfKxzwBD/jrmuKajJlzBNOCEh5XTwtJ3/88J7utD7Et71F8noCmf3adv2Ix48W17f9eFguiaVHuRN172wyPO2OQfMlrTEBNs2RhVuVbnmUGDhY2r4WtvlDRyPKBYlW6zq6M8v3c10qEvzTOokmTA0ke9j75JD688FOFB742p24Rz32OySsx+CURh/HvfUYXGKPKY30qMML2qJLUfgscwb7dYBUm6u7EDYBit/5rHikihk8TbBRmsOrA2pyWxI4boTz1KH8/Wzkyqa0t+OFtYScMHmgPwBMBvm5VDK3FO7PxpIlnYN8RWYh2LYRN5WeOxmv5AwbhJK6Q9gTQWoXluUhChoBxLgAU1tXJn2mG3o3RxLZlum39m8r8fLAmOq8xJY0ld6n88wZP3A4nqubbLTnT1XYjdFNEYwItchye/8L8WraOM28DkGRgYSIcjK3wqD3RIyamo8qa7nLxTVpQJNxenzHXyZiis2nqHIEv8YwRYu2onrJ545LVVnq75jtFu4arRnKMu24vegsyaxu/7PIDjBJSjgTGtmjaWuzVshZVIa6LdfIQRFd86P5PW3Vd1u+QY6i5PhdyQo+RSYlLgPLPxTAi43KwxZX7ruIfeTDx96qbICgp0qaOxCIqa+3nckDkMnWXnirIs9mE9QYsC7aaCF0nwB2rUd2EDZ201Y/5jEskMY7WAcnX7d8w/D1xLfVQCKreJDLEVtQSHXCr8qrJd3QHlgQSn17qwjaBuTvA3pPW+k7OxuCGWpNt';const _IH='a07d169bc2e9522e94ee0c9f57656464daf8f8871b839be4fb3ec3405d80acef';let _src;

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
