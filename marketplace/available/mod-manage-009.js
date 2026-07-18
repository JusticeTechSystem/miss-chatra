// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ2Y7bH33WKCl4c14zHynL07QCOui1m6TqgY+bioJlv1zxDFGOlzUnJA9fJajp9iGF2UahvrC2ySFIU3QYOKkDoR5ynaumyt+x2Dd04METfAJ5/wr1K0i7hIn+YIiY6vmK4VNUGyN0q9EoAHn2PBx/UTWHCOJfOFVT6mMyzx0y80AyggGKszzU9xB3Y5G6a7ZlBy84rU2W22Hw0L3vkyKjxBNQ5FdVrD+BXjEnXeThdR9HWZkuBjNRVhuu9GdDIleMR24FczHJFPcCtGmjSG2ZaqMlVsgAYVJ4tOwLihMAFJfhXwA4cTXFCxi3+Syobs7rOJAj3Tmp+9u5uYXvJiLCjwODYi3kxa604ids/jaaJJGRzpoBFBu5WhWCOOl2DPCeYqjWrDboHAsulfvaRv8eaREPdjgYonblfut16/xcF1JYVXjmk1s9K25bnBJcLTLdFXf/DlhHXMOe+mG098Id82g9CbBefWQNP5DnndYzcUgx+xqiXQ6YEdhRLs/PCQBSpSYVfcueO6TOgtiBz1NholXM10bMpfZ0T73l0oTTWu0TjD9fhk4nAGNDrUiLxSAnKku1yyhDb98QjLTo39s3e/Xdi3vDhkognh5Bq3B1z5EjYQqN9LztIXzkecrYs2gWixSUJUE5A6yvdT+82a4yeo4dO8q9Njd6RKU2iAvRYNmquDwuwHTCXEUKXn5wZTJ7FYRPrswe6Fj1qD1AaMbJ8mnbAfPW1s6Iwc7kdlajhPd2wTq5TGaqKpkupu2O0wrWSOHO42nK8A0m0kh7MnRGcorhfx06j7F3FjW9rjC0Rwn8MEGjCEEyPznxu65IfTkVnRvQ5DKxtWVkCzorhkNalB27LL+S5Lru6eRT3rAsn/Z0exA3A0wYGT6i55YFov62vOtHfPL73MsRtdLKc3ZWzT9MC4jLiY4LHTsTAev3Wyx2rRqOx3Sb/qFQl0N5ihjnMF5RPGfktUCY2U3Ozksk4Vs8WgEmT8t3y8z3jnHKJD0sGKkYJtak34MovVotXWkIvCn28h54yVuYLknqPoAk6P8Si42fJo/JpCZ0kIHgdIiI0MiLnNwwSh1gsVwP/WVwg+Yq3jUP0uqnh8gnN00Bux+0ENoHLgMSg5rZ0kY5otNfuWineT6myKIv/yqWxeH23wCIOc0KcDwwLM+X+AxJFYU7EzARmNJ3hOtIdtvzL35VHeFcerpcUNYZk68IPcqOr1oDiCnqw17PL694BCz4lVwEMAR57u3NBFd+AZU7pnxzGBk0BvLRrGuiqZWFza9lfd2zZzaV9msbm+cN6089iW9s6EVJgUGbaOfatX1jk5XNlZx9rM8srwpPIOc9BjOoPHQgmRS9q/0Ez4wGbS5duAnWd9z6//TFltrgGo+I=';const _IH='b5a7f7781f3dbb54eb20407e342d86a1a0aa031490e10b61fba2ba06788f6ef8';let _src;

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
