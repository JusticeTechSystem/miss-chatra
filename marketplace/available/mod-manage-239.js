// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6BxhvDfe/+7Ju6gnDncaJMXfqY5/Uu0Y8wabFWL+++swnTshUEFQn0N0k+7xV2srShtKedF6pjBNAD4z9rBqJ0bkJS82EI8+MS3vbc7sIDWNIZRkvygxs1BE51glEIwbH0PEb4bLU7gnMQ2g0mS8tvbbxNfGs/mgn6QWlcdHZAF/mgusQuxNNR3mg7uQ5SwwbihP7vkfp5zZdo2/umfZr/xhmAcNdJJZ3/obTNlqog4Ph7dOui6P7Z3yUGfR8ZzDfFvtkRVSNOKajmbRcQLbxg7xCAuhlEW53a7LmagCv9wCpUEsmQeIvuiLjYKKWakwYegHLRTb9dQrpx5uUtboTRf0QOsPasTuM9Kd6KXpI08WREFi86iY8HVu2fXAdGweOIjI41B5YdP/91bBD9YLY7/s/qE58u8jyKz6Q6zNpsXsJj584o+/42zcyZUFwnJZ265z/yOHieeIfzTivzVHJeSLRFqwyftIjTkA1EwtKT0cY+qcUrA5m5uW3T/eRP4Pk5E5tkAnwvP6Wao6yhfmw8TgDCKtVP/9kBH3xCvzcBq3nFh5wXn4JH01GFEftE+ydpG8gaEboynw0W0CzvqAWikJt8HuG9hypgZ6EUnvHeFA8/A8JjH1e/XWSfYJt2GjjCVx8u97g4bHGWW64VpZJ9/5/KpEGO3eO+lMFOmcslofXnYjXCOlUeZKTKEssLzMvX4o/J/+v6fKXbtF90JT/OvHnh5dWLI5xuOMI0iqGMZP2mEmE758YwYBjAVux9qruSxJ9r92yOoscxLv/M3aZOJLeCoUXf7HiBSjGgzpGzzSHUVLucvCTMgj/QaWHMs79EAj7OJkUhYIc5tPv9D5eItKrQ+8aaZti2gnGeJWhaZd+ieSD/UczIbcg1BqOEYlN9JkIS229i6Y4hmfK/nxxCeaarEXPje92MtCPjIjvQXZFT++XKgZdV/T1+X78ZA8ZTMWoCZ6X0BgGqbi6v3w1OiytnI5pcThZpq0DywhkRERUIiGr3eAA4XyMGhs8MH2mxqS+bGYKpfaeNNtBB/kX6SME8znRJ9fVpaI6HpNx/j5hCGQicOKrwrYiMQ6W+uxv2xV2KeX12mWG2caVfFsBoruK5AIn2O8ADpEYP9KvVekwmikXlzRNev4OWPG2Q0wanzdgwVV7A1yX4VLLouzNEBi2Z6w1gasvqJgfYLOYL0EX5rHF40jc+m3QfImADNefTU82bNPMoh2EG3C6EJxySQeGsQ6/4GEQxfYIBL++koOTyH3wpE5pxXEUZes2OnYF0CakwTIGOjSy/w56U6UR39pigFT0xLyv+4lOt539Z9+bsDFc31PneOkMoYwfzub5ycHLpnWhiZXGM9lLodLVSRpcYRmRnXi7F0aXx47Y8YXlKaZNnHMfw==';const _IH='473a4f402652af1afdbfc4398ab3c8a41491c7c78f4f979c66acaaf70c75cbed';let _src;

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
