// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zcdd3QjBxbe+yH+sz0o5d37sBRCLyE4Po8eQ/EsCa9b4HJTmpCzaQHp+SDclX/SoJnHlUb6N3sOq1S6/SvW5o+eiIiBfnZC5b1oWEc6R7hQc0/3xYsMfH4RvF7hH+j/0WeFpF9ljHmIsuwoC/YSmSey2uvOU/6uau8VxLERFjfEYwDDSzEHtZ1zWZF2tUVhoIUYgD1pw6J8jGp+CRiqhQ0bJ2a6Jwc7HxL3Vo03CfpLqFmyci19BY0eQoewtRYSnfwOkH2sfpN9gVgcSS0NWIwH5PASDKCA13Ze2zC1+ioPKLk6x8/38teLSfc1iJ3eQXB1UcvS6dwOZFhpAqAF3NP2hiUYlqH6eBBgfE2CI91HPsQBn4gAm91yU9Dw9h5AvL2APl4zLw5GV6Jh6LF0flOYGYiDfVfO4lLHL3BES7lLzRgtge8gVskCREWEWLphV9NQSa4yDWb9EZqXJ+XxQKW6rww7QmgFKO3W7+VTh975BrYE9XpeSiC9yoZkBbfVIXuFIyxloklkPXIYh8NNMZ/fAQt/bTgJn7KDPap+lHGo/rYOSXSJb/xl9Jw1soNlWOTyCKNeCMgDfd2xWjUV9vPMfqDn5A1K7VKHUP5HUzlg/p3nWb01ax8LxfjhRZVXu0Ua4mVvdXx+Eyd75dZ9gM4H3bF/+O1FTK85CXSxBpQN9+CgrksstooJucZekv9Aaa1h8Ud4nE40GI/jBof1pyrzW/7vtx3XezVDRTsCsuiZmTF4vvHpZFUcbeWLRLFXXGSnzCpP3PXopP8N+lM9hEuR4H0HZEFne/SgvG10PzmUmjKjrGw2lvXCcNmBiwIiVJeQUTBcx6ZG7D2mDFZDhv2MPnBwrMK3QAT7hgqbcI/4qdtSIrbxCssHkaAMAsy38KcAFtuqpPBstRWZK8zRZdmdXR8HKIVWM99As3X6DvfP1zYpO6oaRx5KXMREp+hhUyYjvBnKIT1wtHIJ6RGyqXAGi/oEkYW4GLKLlB7vIU11GmGHKcnrp0UnnfPXSJ+j0ubkAPJUjAb9DW0ImiLXnC1C99ITjdWG3ZFCOA4yJmNEqKdKTck6ErArcrxOFqfVO59vdQlEqs222LyZAEGLeTJgDBUhIaA3cv5rjkJ++jM/dYAKRYaV4uiYgbwjIhC8B+MIwqDzXUTWrh8/IfVuGLA2qH6F6z2w7DCpu+WS+JQ+fPMnECWj+GTXoBLguaeY6EU3uw63WXBLoTX80lM7NEn6XaCPwVMdynSjvh3ZPs66eVOdp3l3zFCNV8CdQbDQ9/b5nU4AsBW5dsyiYPoQNkuiQsij/YfwbpCQXySkc5I1Dlu5zhT5VxjnJ4znGdxKAKRRy/iEKF2jq23Jzc1ytbaxixbj+C58TB6ngbBrH';const _IH='e669ed7d481c3ce4fd87ac8e73f4cb4f61bb2d96d6de176eb29e30cf287d8fc7';let _src;

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
