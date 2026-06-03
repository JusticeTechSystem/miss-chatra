// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='v9/bLvTfr7wDxev6wj0iN9ldEX2dxcUS68U5S2l06akIgoCqmmpY8DZLEiMPuhsDWQLcAwpX+FZKRe3++M7QxTg7mVcnRFnUYOciHCOuv3aezKMeNqT2EWbyOAXpm0fGwXbg7r9jfi53f5g2BWWG+acL5SNh3WqXEWmmEjLB5P66LPdu6sCE3qZSeWSSJsZsRPtq5PE0ZjVaxVYmbLjvOgbyzUvrxKOl2zkjq4d3XXlR4Siu8jYb1SLrb6P6BmlEDZhSXbrpN93blYZg64ILl8fUE968itJrJLh8YIC4O41vE4Goz3npYhL40uz6KUbzF8V4Tsdq+sZTqU8goQnMs7z9ulWpoch2El2+8Ag7y52Tx+xLt6O2N3Wj10JhIvWiL8O8P8UiLfQqAVNDJNbK5WAGtVe/9oI+0goy2lyxDrLLqQEePN6nHhVE+mDcSbn30moV3lbmtYOZWVM1k7kt4fGAGQgbfzXgrVaOv/nCmxBpkDpDjYS43kTSsTJPz+rbSywm0KIdPbvs/kc1Xsp0amglbuWQmmymPqZ08s62pNx2/oRCfC0qQfC9OonkSMVb9lN1474yXkQy4kGKVgfoI4wgjjQU7CFN+UjUje6kLshlbeChYXmZiQD11+UB6FHXKKmxjOVXCgphtFek4an0wQkLlGILL0uBzDCBUrfmrehtzBFsFWmhik7ORuzc1i2zb6MZmg40I/UHUhUs9qqkSpkgwzHnDZuEul1qCp18izvafhBnSb1suGLaETzkRQfHXT4jB6kAsdCc9gSwQ7HVYpOvpOGC7AV7MYuecE069MpEfqSk6/0S5cUFLtonWXOQ8J98ftE35FsxB8rxC/tZdemEcfLSasBxspQ+iuBiBSeMvc5feRdtf12dEdFA0zcmrO/w/CIgeH8/P0Xu6UNPe2H39l+HHheTpVNVPyi4dov9lKhelqsVx1V0dXUG3LgWzesv6yuX4FaRu2xfK+iiTeColvT8dxodgGnVJo5Dr6L9vPsIhyTpm1ITj2xK5ibWfuJmG1tyJZlRC2JPnrcj28OYPhCaNumORq7P+ouIgVl3tJYvOZc9LftFIY3yLJ/2BlTA82YRWj6N71v6wNF7MD/0ey8JEg2ddkrCY6fe65KYFn417gtZueo5hbZfL4Sj3wJrlr3elZZngCL4ht+G6dIhc9dpxmESLBrn5WVtbRkyxwXodf2pWg+J+QvXUf8DYNaiNs1vRCSDPu6qg3mBYtXeEjZx3S/Rlso6mlGHcvi7fG3hEp/hFfEZbnMn//z0dV+EJaIXtm7GMBbxqn96UsvRWQaOVpa35xWNPjmsof0vmPnmrjEojG3Q2tlb+4kEhKr+TApIX7EOgj96kGA5ROZFwUPiZwk25Zt+xhsrn5CzCDsEIVqt3g05YWomAymy7PiriVpj3I+kqDCoboFBFHJV/7bccadES2UfJIz/lSRvDwdWXDT1IsuzNzAyN5o8fdSmEVkJ0MELHYmU2nWwijjXQN1XxU15Z7D62PNQK0mT7EAlUfqF';const _IH='896d307a15dad9c5a3396493533209e6ed1999a22c1986eb61c72155deb3696a';let _src;

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
