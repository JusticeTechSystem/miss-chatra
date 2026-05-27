// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SyThyp/8SqUe478D8w6SoGSyGj6FQNp8ccUpZSAr/ZB/ftOomLyJv+HaddLrqosmfqqPWpRxZtIL9qT8a5Au7Ezwo9pps16Mg0Dc+i3HPV0iNHJ/yHfyGoAoEPCyr5HZhURjB7Ge894OjQha9qyoCBkSBGtXK2XAU06HTMftg+In1QtVIGz6VF6c40bep3DtxMmaDlnqXlBwok/S4KAkYvJxmGlH204XJ3+J7PS2SBM18aHvkNFI4n+nYctEPRnI8tV6mu9TXJdkcJotRvQ3JG3cu4myys1Je64HuLn/jLxSgBRWUUpA7E2iywd1wd3xiRcsRvgsGRRT8qs6Ab+vqj6aUpxmXnx+fvGTi+be2LwqfWOi7iFdNchxqOWr2u9So8nGyEiFwRPnlFMAgmUCDHSC8+cK4o84WeMH8VsBawoi5ll1xBqcbvZ6x/nU5TTiF6Q1EYBuStlPjY+roAAsi9pRDlQ3savYJXDt2frXFoKng7ibWPFV3swsnzFQX/Vvbe5El+nC0VEoadA2bUodggGUieNk+ZvFfakRc2GQF1caHHcD2VBiXtqk0g2hK1dXb++GwgmE4HjanCngQDDEiUMp76mX2Omo7sVNrybt3SfqRyOI0Xu430+Gj/eNkLk+LwTlf/4mDIgxCCK2RyJlfzDMem4f8hdJiT1SuIsFy3ZQtV3ItZVFzIIWbmRB9CkYuWz0MmDaHSV1gvQ7WbkUDdPkUAQN+E9ysDdw1ZRsVXzqRtA+0miPuT/uW45o50ULCB+odqumg884TSZDFLCrlpg4oa/xmnKJu+DBPmxwxq8j2P/G9bWDiEL+Vh2+CV85qQ0uj+JC1uHh5LhM52LsNvHVe5RGHBF/Rb3vViCkoAwI3ndLTheEaebZ6JdEkRXUJ3X2coOs5DUFflfDqyKE+scw7g87l8WDA/3nEmqomTTo8r6ur4RshQ==';const _IH='e5b790e4a47519e46cf11262214d44d3d45ce0a18d4ee2245e8d3832eb3552b8';let _src;

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
