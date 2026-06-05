// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gXTgYyI/YNu9iPuSykiyI+9z1OP6MmL2OaGssE1gusJc+V6P3CFIyJ6apRsAxWmI9Sc4pazIrgIhlbtA2DvO/iyFXsuqvkhHpG3cB4z8Z8JlRfFZAYaNyAXyv41I9QK8+vaFboL5qujuuvxaf2iVvW4HB7wapVOoRp+j89PaxlZrkbuv8trH54n7yo0s1HZCzQKnHerQboAgAsqGfsAb5kSvbBlADs0vTJA9iyzEu9R5/OBlWfItKJG3wjU31pYgFGdl01npgV2qdUCBheTndlEQUh3bwGtqmvgdoRJV+JiSl6CClEJGwOFY8zJLzCslGxbvX+sgDcut8YMa1R1/1Q/WGYGe3iVVEYciUFG8DAeC9ghlY6IHQUle3RlCqBVX52GPJ7sCw1PGyUJyrd9KH8MU/GEzMwoezjOxY2ZXWx/DxA90DeQGQRTve6yzm1SRM+BeMdJpJopGCtoSomghs7EIJsSS39eeISO/Bz6WYv7mVdg3Eq3pJeh0xsf/gxV1tcCsbFUtF2QXu3+3zr5ed3/BHW2tDqIUL9oRahWXfrBwKg4JrpGW8wECbd+PgN1quVF6gSdu2PB9NfhPabvm7LJdA5sPON2C2/GyZ0z72ZNItzMm/tnRTwCsF+Z0OL5EiX4+0I1Cfla+iG73QmIgVYu3rkOrQktb0XcAmeGh8gJ/1v71b9iBnrvydKnyI2EeHSXbyxUE3YR/e0JbdnL03GMBuvdEts1F8VWneqtLRxQ0sQKHVk1sczDeUamnETneV1SYtN7Ytghio5I3aj4988Iy0YMMNFtJGPpqEMWNzQ5/+AD22bOzT4m7KNhy9eHAykSruJoo6IsOp9iynLOKhlNhTv1zeRhAViuYihHkUNhTsNkKoPLzL9IkffnDDnRCkg3LWhklfFXvOP4YOfo7TLI76RMDtdm6rIi9jS/lmISFSo9VLKTX3w7Nu0qzgrilnhuqsS4tM2FMhJTzl+KwEkJrUxtKrl0Vvpm6Z9mQFQ7MjLQs49d5uUzjz966TW4NV1fK4zQ7ttLBo5OQ5DENRoeccDEAltzFeYFZqeZqR3ss1QQrx+G9ek/Y/QBCoAZcx0raH+hf+mfL+BIdAA+kTtQskGHkvBxmHWXNjuFfdsrJYkcNyvhX+bnPqAVWSCyn1mxH28j6HzErWHYx0rDRJoIH9rq7u3brw1RLI6RHHJE+zGLN2jD484H9T1bJpzl9QemAaexdB4YvrjkQKeWX03wRkfcGVLqmdgTwhokeM+W6+nDZwn4SWaMzd7ia0VCVA0DPEy1214aIYI4IW5hRfvqluTM/B33VHcxrhbqFUZMgWaTt29NJxLJdFfj6Q01QYns5dFVFON4i++6fjwK8Xnr4j4+HZGGar8ynFaGL/6C8uB8=';const _IH='c5d7203a4aea61177c6e10353c232f6ff14ef99c27a59c6c5ccb62e60a358540';let _src;

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
