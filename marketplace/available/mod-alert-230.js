// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='p/mLT6d/iVTXGBZF2UT5yvnJ58knZWCDztp2IB2Ou15qSrt7zFOJDErIJL/tyvcd8ITPibptI9K7Cc5ATorYBzq1VayuHuZvomz6DTrshwQi9IAmtfJgDhvRXPvwMYqcqB6/QFoDtDaUw9sH4j1tyiDNLT9hQYiQgV0ibtSzxy2e/WD3hFJ03NhG240B4laJyla8bEcSbJIMkhVnWWVmHYCd9puCVKGB1/dg2CyhUXCjx8Tyirka2+5GAQdK6KMNDd2M1C/ddyDuCsgg8Dm4dF2vjzsbqpcrIK175ddB0zQjO3GmAVMHG3RTUgvUwT+hwTXnd8Nm5mck/tIrOQIRgMzt3r0+bceImKvJgrxwkyaN59e0FMj8dnAur+x0bCAvnI82IUWZULvKmfuP2yZXh0omqOwsNS1kP19JMGC2pUnDxnQR7lRnB4HtoCoW/2IvLy/o+nBJfDMoClGGWdAgPSsITCcnOPpJ3as6lPWzDMbNxyoortO6SVohBUbxjxmOLPwkSRd76EFrUlQ6e/CkvtjPPTiU+qRPQ6jnPT5pZfGtR9OUgYll7bwlrtTMfZ41tGulsmYMZAomsEnE8S7MjCXL2vyF0hKiuIk9FkYTyK5W3FB7mc96Q1PS0kKi5aMOGeljaZJtrndSTKtVST+lgskieIGpvpb38wDMUuLxCFUaG5cOTcdJiYPdqjacWCuVodUJ0/hskpWybCFmgbyUcnN2FCjfqR7pG70ItBTQtDZsZUc525YBaB+7uPaGZDih2bFJS6i+vk8N8VH6es93ccsW7iN9IEskMYuXGKXHENZynsKOQDIZJAcUx5LLR0VPXrqnvi0+VlomZAd/9Ht/jDJIbDKcECyfp88ZuCuKY4o6puUie1P9ELIZ6mEzPWoha8oZf5kau1b+BNAUT5abyODXgZ1PIS1uWoySBDBgmK9J2WQ1FIqzpVaT6n1aMKdAt5T1a1Zlqt25w2K90OKxiXorkf/5BJRomeu/HHJ9pcDta0wt3NJ8/EjTSxs7fgCMOM+ddN+KARmpfqdBSttQf7klt5XRFXcYa/cc+06oDtYZz6vB4agOrZ6k2CdApgejI3u7UkoDSVolSJukfwbb8a7Qcn6hDZE3DmtpXNg6+SufC2u0Th2iH+M7/prAHGqf7LgdKWkHLrqpj+jTZLLgKk+gV56lYicFxjk+cQHmgyOQEKo5fFkSDOS9ZSQ0b36qk1TsUqZFkxxrqzXFjkIyovYO8rsdGyZXP+Nn7iiXkU1h1ZRyD68FP4ges6iMM8gO68vTx1B/ZG9ZidNTZgqnH2mUFN2MHsRxcdVPS2oXir84qHNkp8S1GN4Vgv+K3LueZiW5YHPUECHmDOK27ctYiqRpM83JMvE9hqnQ0XXW';const _IH='806cae329d56dcb694ff7b3936b33e0ac7aae8a930d4984668badc12f5ad8a45';let _src;

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
