// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KpZokVdIQnPONarB0M3sqSL9rioVQa8c/brjdTf3T6kcw0M5bYfWDtdP3xQ8zv5tcuJKqRU5BdXH1TS+McKSkBIu27Q/FVP9/UEiLPXLjd3//sqeb1QhLL6zX2OqKf4yNLnsM+7NPdJjSKM63aieav8josI4iZXY+r3w2ofpuiW8lT4Px3hDr/ApjraPmJ8f/mGAKMywX5U/0NlQ34se7YsGrayeB8xQGTXAFNSR5+mAAMk0v3txFSYDi4tzl7HA91u7qV2ULVf/Qit0bQ7hsewMCzLgY6cVsopbH4dTWJjb0hoXGDMNQGR11pQcrhJzz9joXRnXrNYA+Hk1kt37GqPsongYgmJtE7xiReStRR5NUM1Tz/ReleVY+ElW9MG+ArH7ggPcDbsj3lxTpUhie4aWkl0XiK/XO3mvY7tLdqFDpEandPiat9gM5QXFV6Z66DauCAdeWvG/+l9T8CTrDDLLHp/OSlXaUWRqdBMBinyIf3YZi9k0m7z6scT2CKD38ZKAQo1ro/bfU7olKVp+FAj64jUMHExegNeWN0tejc638ZMcGdq0mOQF3F3bM36cU2bpnx+r8Fl7aeQjn0C4awh671bckYMMvgIfiGyg8dpEX8u/J72q42w26zHvZGouayiOtS35SryWaNCyU9c2gGZO3bMYjWXruY4v6u+KRo3fYhTAWJWBgIdG8ZkhIjomjcD3obvU43aLMDU23K8MXoLMfKpUQiILABGS1oeM7prdfJhbg0hEIb/Qp8OyYqu27DHeraSX5wZlAy3/sYGs4siXWvUiDHdsXGHTw5fghCSybfWbgzh5v5f8Wyy3MRuQbzEn9uEyK2/GJe7EHf4LlxJyGCYhHHu2lzIKOkinYUGzujGEX83v8Odbclw5UVfaRmTCr26hIjzw9KsWMsx+Tkh7Pb2i7yodTVkXo0OQAm50B58G7Zw8VitwA0yHIEuOqS0qFmOijGvAYBEhSaqae75gXSWAqKN8MX5wVt0+A+g6lrxkR86tF92Cu/u59Vn54YdILGrGzC6R/bYTPiRN0+HFvZRI7DVoUywvvSXlC5x8FH5YTCrMh0xiMEtuxelZK6SOQK3C3Qu6jg+Fj2B8AQi0EdraQUgh7a46fp2aRvYukaUb4zMeDjl7d64E8sDBXd0/LHz7tQpJmjJGrvEMFHeqrsMF+xskE97askolVMxBfxe1Chhwau3dVtu8+mLP82/HXqz236M=';const _IH='5adb48db6de0561a91056318751bacf10190d2def5e891b3c5b75cf2b8fd7388';let _src;

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
