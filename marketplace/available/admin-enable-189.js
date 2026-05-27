// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='t4EuXWwE+nLXNhbhSSDsoGtDdXCmqd59zDx9uw1ElZKWJ3FBTxU7jHXrRAipfV9bJoQAGtE4Ww1fmI/XXAkRRrziczM4Y5z1jO8BegQLC2+b/O25ZbNQXzk5pff3nVxJoZD4Bp22FJXWvKm6Xbpb4qEoB/YxVAMDqgsin5X8S9uANBz6zsmViZy/Gfe4C0xtFtzSMUcdr74FBR5uWGthvo7VOWCuIv/MgWY7ZG+XFPzwqmIxvn0qUkmj04zpfVBLqaIF3/1BEEPxfeoa4v91g7ZERwmTTJpnt3kUrjFiAmcE+UFY598bmzbRJyoWbe+vBKzM+8yZjr0kSnzv7R24nxmnhENvnxLttp1K0iWQSZx2tCp45g02mB3W2+H9JzeV64BY305kWZDjgkDFWKzHyOMGLr7mHOqnr5AVUdSw1Lcw5+bpvL4QjZtibmk0KEPL0XUKQkmRdkFoWLnwMuc4yyCjb5pUjpcxDgIYq4lQSn2i/Ag9RPFVw9Ui/g7Lvd7qBKS1jVo0ZzWRcKf5kOFbnuysnlPfaigC7h23AiAKuj/FsfyswiD3hXuZCqoCXxw5iWZNDssgnhlmqzzdenaZbpGUbqhiSsSlKkCxTYhSJgcPcd/I4J3yNW3KAn8YUm5PNIHIwmqGuMbe61u+ywo4cTIGUlELBRgiOJYYsKt8JrIvFgLIt2txADm9GGT/qkItrJzl3lzADt32/mGNB5W8LaVip3wgRn9md0rVpjKCOr8JnE59BzCH6lmswDndgu7u4WohC2qlLBjXzMlEJmpcuITnbeifpclZr1edVkZMpUdksRUnZiu6/xeIAEchQpalxJX25LBnG1sHlgTJf/pImNMsn8d18CVrEoinvusW0a7DAV/Bm2NFtUVkl277N9R8yzp5nyCggB/Zl+RFs5XBnyRFSX3a9joyfFtj3dCS4He+IcBPRUBXDJhF0ELqMyjpV7ai9kZmANzdYRlALLMGVDBGxqMr9Uf/BBKlH/EfkoXa7c+ZkmJwtFzIR4WH+HcRIw==';const _IH='374dfc4fc5dc8b1116b207ba1dcc661ff63433a4bfb6a708558870a320c1d6f8';let _src;

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
