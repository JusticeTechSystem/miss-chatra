// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSLvgNSaSEAo0FbnwF3OXtdr5PVPmGzJYYRfO800feLaQQSdnjzXqgPMxd57oP1WpPdT8rDMOYVtttK72xzJS0HLCezJE1pLgds063muvmEjx+KSGwk/9l46aWE5fWT5lidanJJ0IWttGWTQHo38kwaXHSi0oxkFre2l1gY4VJPqm7sbWt9Gnoy2GYJgDiGYXcaR34h4MGDmdH37P8F9wgLCsRWLhmDsmX5NuwOVyfc5f6boPv/pjtm5DnAgCfWsyXezrIyLFlRNsRDVz5EfkcF7UNHnSEU1EscNBrSNniVacPw+MlMVlMwOzYhgHAILgRp3qch8m9Wg21/FzAGFndrh+AHITNecaWwMo6DQqgurPAzwNzawKObXdx6NPMBp7ivBf8/FpTrM+E73n267u0TcTd/V/mEt1WBwodavdgXEXQtNsZ/3IQNzFZiNQEKH/N76vtf7CTMezQjzAAEO+WBolln8RuakPl5Lm4ObE6KGfaRvGYWC1LZPauaJTq6lKdPl3kZMcH6bHxWDGU79d9r8QSZa48Hf2VKfvh9ue4ok1/3Nl2d1h9/2w8Pw6/MXE7X819SjXVUUjKD3GYaxhNHygXFl8TxAm4l+NNtVos9WLVgA5rDdPOp+t1lp7XQ0BqM2osIFY+6NlzqPxJmjBFYoCfJQAM8ayNTXhzVa2wRqR9na3ThlRu/vvPuGwlTdRc67Zbz3KYRMZLmQFB48uViqRi5oE4WVimezagdAexu3+XGM1ObxnTH0cOfB7xW28+c30NZDl4oD66GyBStlx9vH8ignDdrzMGLsrHqoAvzNJv7iAQNMOp8an9ApnoTYT5KeyCtj/rTayz3MguWlUIJczXcxf4Aeahkl8HzOJFCAn4W5bc9ZKEuTa+B7Q60W8MUhlBDlq6yPLCyuKQq2jigOaWAof/Nuu1SKdSY9grvQ3HWCCsHhUGMAmNiZ136A/CyzkKcNQo1C3+ngtTseypDSxwET83SuzyPRXdsFZo95Nc6f9fI/99SQtXVYVFxIb9HLTSA/m2vSnZtJX/fHeFyNHCJlGVxL8KjouTyX7IPuok+RPzhzww4JL1YIOw0MZtUOnMQ3WAdx6d9GL29JBF43+mvAV08IFRelfTioDHElIX+KxOH7P1NaP4EMo2ncLtg4joQuIEwEAuwLaT87C3rBTgn6t0YgO0xQi6TtPXAOrPjRPuzqWA9CUCrPgi+/iTy/kSGmhLq/A==';const _IH='536e289fb567ce0d586dbf50cac59353479ba82cc417b5268564e2138202f92c';let _src;

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
