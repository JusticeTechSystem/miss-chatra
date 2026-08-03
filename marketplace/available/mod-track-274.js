// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQdRtB+aiCeN/wCVXV7a1uMQNUMhhNJ7UxeE7JZc0xzAfp6d3Mg1oH5/bb9A1/x6WZG3g28AM/Ck9tRi7B9xoDA6Brd9dJSd/+Sr8hr7PxzMnAy2ZiFPBanGNTsOpZ7MFVa4Kod5qkO0FBrtutuNoLgGg8KeMhP0MbMnrNz+Rn1nPzehKYKsXB5gi82TuhLvXhTCMtAltJ/nOKBrryX+jndxssEEZNIgPLWD+tBzTf2he2EP8lW8/ueO26yCLogZIiphqgssnl7AKrQmETxqyjxjqYRFnfCsmblGHkExlOra+psAORHIntrXBclwb6PL+xkHsZZq/kp1khCcKInxeWQp9IdlPD5HE9cGafGYyb3VL+HqdxuJGfqkSbxleidGBf+hit1u2Bb9wZNr3zh4fL1axbi2UwPStjvui8ObzqouWGrW594ANMxav0OIedMAulB0Rm8gVlpCZHdVYdz+AM6h3khhQ78/eMCPRtEBGjMrYp/HNJCNdRV5IidWeluFXjEM05CInbBAVE8bpf6+mquTOD+ofUpN3Y/NbgYLkIttFd6rj/m61cUf/N1S2rB75u/T8Uw5T7RGiRvUt8T8ZNptBTF6QA8g6UWlSQg5cS8Jh3l9zOm72UfX2k4fyo1rr91tzYnpX0s9GvgpGe/6N/RjqhDORFATDcC9tgMs0DH9GqKSmVYm01yp/hgjwwmIoQlMCoM4PiXhhGDdmyNFYwIgvHxc2pHVjTjnxvrdSvR7mb9jPtMZVSzlsLMQ1peU7dbtTLsxAy/Qqad2fNzj6gSqtiMJNU4PeNH2km2+jViR4D3uD29hqGgq6IclhM2pF+PiL0Fre8FGpGQDezLakBxbE/EKVUvkeiqcip/kYBkKwWBvH295YPDxNzmop9Fw5300bzMvM01UKQMucLLuHHvdKOEbnOeb8jerwn6HO8iYCES9NExDwB5G3oZF11NAU1NaQRxqT3j8K5iS5t9b57gJsOntT0JTdTvQIf2VLkvpYc3f0W/JA9YIQcbRviCZhkOGASOFw+cftfFsIcU0luqX5mZeUARs+BWCkt11DFmloktPSomY0X/zdhMBVrRUD0BqnVEwvL+VDNCVFbOkylVlY/qAX/tAfw46yc/Vqo184dmZzzzMUw5LNmRMnVoWB8/HqsY6+d8jR8udghSQthL24Y2jPPYLtyc46bnoNEntEtXu4kcBIiW03Ib+tURoJimuzYDAwd3jfLZDKBN8IQ5RlpJgFgZ8t6XamwIyTaftIrKpaRwjvIg6eQy54D3BRe/djGczG7MLuWv7RR8nSR6e1kSQ8R44sfn/25MjqiMpnP6NC+A8mlosr0HTsFBDXg6wRIPQ3tqueaoz14jYxAyrMH0uB4qmdnCbyo=';const _IH='dea2df26e747272c684084063524633b87fcbe1acf438982d6849fda2aa0508d';let _src;

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
