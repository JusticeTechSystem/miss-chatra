// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gEZIvl3fuBBNwP4iT1mR90rW0ZPI6RkziyP+iZmA5TWDI9HRKjxgrHfgFVPjDNr8xMcxbJMX/jPyVFEFAZM7SypWMv56Lh9GVWNUoxUCltIHKRkxI5Gtz0DQD/2D5iIVTtLIZ/98CessBFt5SUF9WWeQPgF84JAjK/4pAcwtM3ZriAelLZneinMYRIKWoCy8jt3wZYuSatQ2rljaC+ltBsrPagraMNMFivUJs4igfBgoIVKp1JeqQ/Pw8EU9EKBpoK+MdhqBuTLGMPXVEsnsnGC5O1dSjTPNt/m7nVuhvzT3yE94AYo81yMoaikGb9NKsIj1zqXWTdH1LdOxKW6pWAAxmABqbsHi1ftpWI8spuJSvHcz/dhCTx2VVSo+JjRtzDl8+sMcQUWpg5sOVz26WBeFt59rdJVrM5pWOdSj5YSsssVNfxBIZOBLkBbFg+PA9vEWeaX0bxrgoRqNZQdAS2Wk1MQpF98jINYIZt6RlRjRH+coFqosFF8dKx5d9k6npmxShOT5NOFjzP8rNqYT4kmILC5wcurSCzVh5/bUO6ng4rOX88ixpnM7OHFJf8J2NV+4XLSQTa3ACXVe2oJbvjhhxm3pD9UeIeESW41RfXX/nqdsQylOeK5Zyv2UNqTwz8WBLiWfCsRbtLJmnJKnctU0f1HVJt5Vc1fHqTtPLmjNakMsVi7WlJxYtRH2WzgDQjLRbWzimAvBHFMjw+Kh6ekVN7f3iv+iPPKNlAYdPutQ0XTTfszXi9v+au1y3n3zzcqiMs+wCj48vnaXMzd8KD/GKBlpidbNwf/a1ATRV6wQUxgwXjGo1j04pzYTB+RwBvOH1f1nE5kyRV2dFDtj6PwPKUAX8HXCn9QKBtdQZMzoNecUvgRYOxWHVtD5myQ1EbuAHH35DASqoD3xT/MXSWVXINQO7yyqtydQx4bM+HOeHMBWEinpTW7Ro0LOW4B2pyXjKomCrYamIek399BOpfzWzIsC0PljzZ3TMmvHJOMPBOBlutnepaZqMUKinEe6J921UA96Ac/WyBq/x1YxSWDWY8f26ERQaOQo5wJPRHTB6tZFawLSZzfInpJYuJbcG+AHsTAQFvjbDaHBA+xdEndYjZ6hr6jYdA9l5GDOQwHbJb0LlZBBysg3DW3Sn6QkBZXwK0YWeNRHzQzpIyZ+ARp9qQ57si/AVIJEYhB7J1QcL4Eru5qI0IKIm7yfPkPjDXdkzUEMtUZMt7Kg/aQfetSi2ORSFrohHzzcW9e2Uft56Vc0SRJ+H3Zye9da6bJXT6elnxMTuf+5vPjRRzrBTjlOS0nM9cHL8WBEU6AbQERu3fD/VwYb3jST2EiSrC47ocj9/SrjzmTSrJ+uAXqn79snQvJjtC95XA==';const _IH='8abb6449ddb3a96277f6d55f882a3a393561e0a1b3dcab726ace6ac466790225';let _src;

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
