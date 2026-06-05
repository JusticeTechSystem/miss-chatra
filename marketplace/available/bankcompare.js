// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PsBuRU177/3xNbmvD/RuH1G/21uL+hZfKvvSVtCx9xcHZf6mH6UbAiqjqcnHlCYC1gctnO4ijGBNIhBQhgumQ7aRyx3i7nOK8juuEuoNH2Tu06GLTseJpJGF408CMWSB4ekOxfNB1HmQf/CNQI82a0bUZTLv9D6MSMdhVpDnVtQS7rCL7a6PSQVlKcb51jPeBwx1fWZnMu2t4yor22cJHGei7c1vP4LPr+yCFkHj+6gS7bniCvuiFaP6wfFgQmCRiFSHy/2SVzagpdi7PbSlk0CRtdLIqBsvIXuHJQsssOn7x2ptGqn1x7UhgRSmHiVeCEnkg079gHpptg8sh9/tyFAVrgpGKpOjY5IW63hE3MY7S2fwtpdbCZQRmCT4v7SFHr3g8BvnQBq9Dy56ZeG70bZ4Bwl33Glms9qE7nUn9QT4We7ivVP5VECekg22t9rQzK12e/1COCeXwo2d00u60exwjdOgwcXpZfF06PRxE7Me67UkcD2dlTzq6NPQawttkgBk6CuDfkN1yQltL3z71twCO1lO03p1DvpdcHWGC7wuyJ3eG6eSYNPUhn4IhJRlntZTcMPGQxFbSobkpnL8JwOlCMfMYSVJCp1XN59vnkml75gY6NZmLHed16xBGxPhwxY42o0xtX2hwzUtiU7seSbCmIgvesbQDaULP69MYzX/jgLjYtNvLuUeKHAgI7s2S1i6kzKVhu/igFlsJRf2Vphbo6Q4EFYrlZeimWrMfZpQQ2LUYDdxn2mMX0A5YLQFPF51A1uCvCDVFGRB1kktpzzV5WOODiHwiJpCVAsMjWDcY2lAtk1towvVyU1LxzLMpe1TGjSjSG/PsU02ogM1qsbJGBdbuII65HgdR0LLc2EjYRmOWJXJzxTuCKEKxnd0C0kwKSe/W8vCsmLF+lz/XgicWrv7a23UdAwBDxlEEwHepdPeGwgGjEB/QbjC42NDyQ0btbnLV3k/Q6CwBVG27mtgdL60MViD2qEMAa/VkJcwCPcNu8dF9sfGvtv96FXqByXr083qD4OOyDTLERMk0Kno1mEmqKDXDBFcdgONZQylX9lYAIVYkNQ87T5ac9EwmnVC0PoWTwL/D0BfpdxQZSg7BkjR0YCoWx6iWVCpLbaywSMDo4sAOdChVsnNtnCLYYrOmBxTUZzWnr2ApSoRBBNVmn7f4fm2zckQ1qWEcV0DhfGYBw6k5uwRWbkzb+XHCMZwHrE=';const _IH='800834763bc9950c7b7ff27e9997adca07c24b3b472cd539b9f323329c40d356';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
