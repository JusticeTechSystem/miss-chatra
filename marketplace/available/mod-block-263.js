// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:59 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ11rWQ1FCEkoc6q9KhTWCjT5TmQ1Qvd85AAVgVPA2m2CNSo0aqLpugxcAbYTfGgI/bwv5E5wVTkV2+5kZmPWAbypycBaX2qu8bo5a+HbvwBgG4RFNE4g0R+cpywrGNBlx9wpuUvXMwdEyhiOlaOFGsjQEAhN2V6IZPsvdeVim3XbxeDQf3DIxiNDT2tsiKTvNgjKS8kgcZLqfDxYoGIHp+catNF2yjkDX6ABsp9fcw0qFjh7GKiPwAo30L1c7CXzmA1xcwAzsE16+2/gK60+FW46K4U2B3Oo2CuYd+U3TbUz66Z3CwMS4OAdzeGjSfSvZxpsULOcVyrJuIGJbjVGdLx74lw5sCOWPPd5+E4zq8DW22DDmnlUYpav2P0fTI58mgS6VnPzJxif2rP0c1ZcdILcGO1S1YuV5q6Jeqxhyk7E6T295hp1pYAtmOFdHJ4+Lvzo3cryw2wEEcOJfddH5zvwow5ofAWk6RJksMIjjQg+eiHE/0MDHJWn4lP2iUsfk0alHm6ipnJmrLCTo8g536TCTAuDBKJ3C2wjx8SNoLF1Pc+bu3v1L5naJtesHgWUlemY+sSId45CiCTIht4Rk5Qzf4Gm0R4rVs7w0/tejR660eOCSQGmwhDEwBZ2/UIZjr/PxT/sSCaV47SGLhh8mj6CvEI+EIoKkhVUGQo7d+49yJr8tfFyUwAWY276xHcrbByhpE6hx7VZeeSK/pd4WJ0O8+5Z7kjJouNUCS/OOrqkdeHN6sv7WfN7UP5/zk1517X6H/+RCkfMGCY//1OvpMjGIZ6ZifXnTG05eq10rnXNzHnnHHRTTNdXlSLSX+Ui0F5JGeWm2yafNqcOSjfucl1t12LpjOwe/j2cqxX4FnBwuNCT8Jw/S9m2LAQd5Kqww1fJdWT2JAVi7TPAVwd7rDpw8ua4JsKNp2kLZtuTN8gNsdUo0c0wU6E4OlGwj0tCTbnrTnY8rewyAZlOZXYXt+7+LKqNv4MXdJAEINCCrmLxm3I+qI7/QmqWjE8QM62tiIfQYA383+0e2RXAcgd9TScCdEgYHwxIAuvFTDm/zbcgbinYR389QC1wTyDwwZ00kk/hceLiIuaxlfwStc2tAu8OkHphBSTYIYdi0xNpzfKkskZ/ci2ssRItDFuRlgnQg7HFIEdUXXnBE4RqFWtLIhfs8KR0nkyYsfZACqOgKbPfgYxSHJaMUskd+Ll44fRWvoeCiIa6jjExmau3ewhgGCtW/qi31Rrjw59jGhzFNC5crqPF4O/Iu13fbNlgymCxQxhEYC58ZSl2hS4ThN3kt1zAvuBpJVnMVsRsz5dY4GXvM93hjUH3t2n9WUepITZ1/bWDZhIc5PesEn39L0nJOQV23Ig9+UWIi9JQZDgzSg==';const _IH='4b2a8b9be9b20740030c5a6c79e85132ec0f5e9d96973bf75b7ee3c0fd51c04e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
