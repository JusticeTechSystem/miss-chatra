// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UnFQvUPe4mUTUIxx/Hfv4qXdQlgMpBeIbERulQBHeLH/rRd67YU7PHF9wC0OtNcfnbP2Q8IPEdpoiLFkpk79FZoivrCv45yri62e0iSd9c7WKnq5dcjpHEKL++SmVCFCRRhgSYI5CbAc0yhwBNnyHsHlV3mrcdavUMc10SHtBCq7UGQwDWvoOLtYvML0MSZ6Lxf42OvQaT5F4GFi/MUyevPHUP7PoPc2t1sUDTcTAUCJCFXWCraVovTHt1cag7rBcbDeu2Dt7oDzQQVIQgTofN1//fNTrfGGu4FW3kLg5SISknl8qF0zEsYUwDPsgfAAP3qDdPSURqxji6PBxxIl3O0FOQxuQadqmR384TsYnUsJJJTU67eH2qDSjAdA6shU11cS2A9nabKOG/ow5zUvrrBr+1Auh9G+sW9SdIrJ1h1JT9ThhXLQG3cZClG3d156FcjG3SRUmhyQHU/tQFpzWOkKqk8eCjUaNm/Q5yfQetqFAuqzArur7rf1wf3pC3rgAPyqSYqzwx/hxPF6l/F414NyNIz6P5FKSLzXvsMfTSNXrnMgb0P/StT2KKa44su+5G1g2MnWtudr3GxAb0kDzliPW1/voNNeosoQiiihSExUSXHs8UkMQFHTmQ6tiuu9RXOEwfSfkg0gbyCypchqEnVeNfGJf6FObGCLrGX7RPX5VNwfrH2fWPqK9XfKdHC6lbqstFMLFvaveX85OrmIpdG+JLU2u7kUCh9yvEJUac48KvslBQ8Kq7ltB5aS5eAoyyry31GChn9jwg0VwvgcgkmGU5Cj+9LfyRuiSECpzl4YjxiwdalCD+HbnJP49/+UX6EWN9DF0rHuXBJm2cImOP1LbTVs9u8bNOKTk8DUWIci41uvN6vyPzn0sfqKBapsw1aSt0keoG/Drsgp83G+cK7ZalSJ0ik2cb66cwR1PtIl5fccsSzS/a3FGMMSBIRuAq4yCYIUu2XiMkSZ262fsPoAJC/FRFUBkvw+6KHdyzGOkYHBE922605B';const _IH='1bc56287c51537c3ee64fffb53c5e49c8b432a849b0d333233a49a881829b943';let _src;

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
