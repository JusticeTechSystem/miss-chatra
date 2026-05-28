// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QWkOT4I7WVAzZziYfBqtQZcUDZcLVPuFbAbYdhnIeCaAmXB4hxrwHxJxLAfZpE58SNcbW8thIYaAIyj0hjGm+A2C35vwZlX9WDdxXqUXjTsveuJ3RSq1LJr4Hzrqf65jZ52RwGuPGLhYfdYCoJd2VGpadsPBI5P5i2NJN2QlliVACEH7/uVUp45wWJYCfdJZ2WLv4qSLDG//P4JlpQOb+8FJE5h9//yEjkHBlMmLOsKYRKFdraCxzre0M0JMMTRAYqDOxo266Tt8Ufbu8jtq1yOFG4wjJDmae9hnzitRPlTivukdA7imxJuPL8g0+wYTmnIS8hVCC8mWIOUIhAz18UK50BnTIvH0qgwd3zGrU+Ylk12rZhPf8aQjd7P3x3VBwwhsytCSMFDf5nqTDnLRVSOXBp/zQkdPusSnTIbHA2YUmdHEn70bOK+ZXq7QIuQcjHgKtoa0vQTm0La2XUsFqy8jB8KDwW6r6o1PBRxGqPFdqqg4+awHjcfPpsep/wRnrCf5FInMsXV23n0g97vozXfUJGRheJ1fNXj1th6s2XaOkM4Jqrdfcs5TxRVunf2gRjlFsxIVL0Nd6gDrHLlWARw/iF1dK0NSmDIiTfJWwV/0I5ISf3q4HtS1MTX4NM9WdTttl4djvFIsjza+XzbvNwEgXXv5/H9M/VaAIXzVYgRuRqAmSg4UXx8miElJ5qH7Th++v3/b45oNZX9810RL3ik0sfARqnHkfpyPQqyOXPh6b58LoIEsJvQ58Slh+79Snrl+JZmJAv5bCDlRxoerL9RyNYdtzCDXw9AyH7UaNUyiDe6IaUUHo5Di2RM4poSav+HSCQbja4feVd2h0Hn4CTT+MbhVoUAa2vFcJCOiDvBktUtwmxEg+QwfWaz159Bz/mzubKkoitUcfH3kMGntOdS1bvERNCMbpgYtiXksFsMQCU6Pa1VXFycrZzsIFS4/1z/7FpzpN5yoI/nu4egu2/+xsLex3ATxIch1gMRDYKCbpDwxAM6KdhlzYVKku9ElU87HLQ==';const _IH='74f32db45c52b5c5293a7cd5b1a14ffe67eb82938320637528f408d2644d5182';let _src;

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
