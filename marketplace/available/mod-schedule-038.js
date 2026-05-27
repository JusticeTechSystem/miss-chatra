// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OnlraJ2KN/MEKraxNFE5rWRG2jcciqTsvXo/yJHmOEq2VFf6FrQnA45Esnup3CTv1u59fKeFhjHY0Qg75CsFOa6HPL46bBcyOQ12B7cY+u3vVbl6NPsRUcAlYEJcfi+dD/gmqJt1iz2p7Y3FjpkzMdcK5fNWmB17DKL1owBIrHq/p/6S/HQo0sZtTU/fxs6bp1nMNpaEXVNMwfotqA2HXeeDpzkYibAyNhbX/mrNp0KSuN6L3zYCh4ZjznY0AND0iKct27ZJmhXPkLjLUyeV9UiI4q7f9nBYxA8MfHWzVnfxDuIjHTjI4KEOv7ufQdmqzV5fXUk++jzQPatBmlAp7CWetUC0Fci/Np+duwPMvxXMblKYIW/9NlLlMC/mRXm36d6tF3FhhX125WpCwFgFzAvpJiaRaFDev0LEsdYRSydiMoWzQUhLI3eqhhJ+URHLpfVFhzkJJza5tE/XRHTooeFzP8TInmShIjOp5pwwJzPRtMz4uJayRoHYEAe+sA3ZEHLRQ037Zacxv8eCQuStTgKHu/QrNYNn54hrUaROVx1F4qoAynn0Zbo4GDgOEU3cSQ9SIMBLc2r6bV4Edrtb3oYCvLfVuY4fCCL+RmYlE0pWO+K4eC820b6izvy+w5Q7Efop/kpu1DrXTYReWQK3tjIWeTvetqqGQPYNx7xT0YwPQ8aKc6j42WKsB6QLi5g0Vqp8qHkRQnOcCtGScoOyuseYVNAxwdrf79+1J6nqke9NjEWWn3+suZGcLQW5uzfvuyIK2Z/zg2SGTvoYn/BGrZrbnGTEnjTXkFGONYMvqXjBurE8br0gu40GQDaUm3nyTgilArIlzHVM4WxeXrcaXsG9vkxNwYQAReoCt7V/NaAwNFfmm69nTa5ByPWlDnF2MUo7PvcxhT3U8LELOZjMEwLhVpFuVkQeBQzwrPUg/ZxsoSUWMgy2U+SQU9V+Dmylq5Pcuo3+bAdbfsiuSY9FbyTg3LJKSrSlTGSkyzWYsdhLDNv83/CeD7reVPZCoGnpY1cBkTp3OFGfQQ65OBCyH2S3KSlEV2IM076HSbct/ZlMatx0g6htNTEpb6dCSeSH6pff/jsKtKTzwh6Cd3SVGTRoCFz6LYRbAUjjD76+0qPmkAo9HE++PWR3FueA+bfLyHhbjDbScoMONWdN+CL9s4N48llmhtMHDke+VXQlFQKGRTShBtFzxSHKBdWV3OdXkBZOzJaxYyaSLd00/aVkAeXgDFfsXQgGQ2cPqXxAqRpIeYQgXvwV4sNDfTgMMaLTOylrIXqXdBcM8z1tIr+O+0MG2glnB+QB1hHyQJhs17lRwbS9x8WfFb/XkOMGNL4xC90I689ld34FSwHvnYfmxNQl1Nu67lYuMb11bKpoWIf+Xyb3EJ1T+g8Xqg+xYoFhCYf6ZZlnnw==';const _IH='3071ad2129cca8d275e9d1dc34b3decc04f488d672697101aa168c94c1a7aef0';let _src;

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
