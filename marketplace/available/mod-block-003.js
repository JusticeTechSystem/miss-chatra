// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T2CtmQV5QuKq3Nw8rdgcTq/GTq9d/pM8w0sYyBOhoeiLTK5pqLISh/yya2xlbyZZ1j/AIjdRGuSHGcmzVBSBrdCf+t79QzCQm0b0CsJFcsR45x4WsOC5DvoRvVGgZkfQG3WIg9yog/dVDORsLMC4LVvkWGbqHLNvtWySVM2w0XtRohJHnG1RYjPyH7yhtNjzA3zyJNvVGwM+3OBGqKvFsIEIuBpsy8CtF5sBfs2lWmiLEDlqpCOSzb68urJ7I+3qQTQsyC/8CXfImXIsizibAjvHP5Uebp+F9vpZ/BiNTPC5bY6CGTQN0LtEfI5N63CyZkE812pnZsbsEbwwTAx2vHyqWG5D4hfC737g8ZgVQiGnQSc/y7Zt0eoCjHtGnuMzjtKFg+vvrlpFeJFCDs9/GKgMIWKFa4KXpujSdVH1rHcMs/S+YocM70C0xGWTo4iryAqN4WJFmDW8qSnnfeCLZ8PGeWJUGBJcfAiwZj4TLBCP7ZG3J5L7fys9ginOalD/MNh/huv3l2fzPogmgHooxnDD/hr1SlkwGrg8BEba4za2nykH8y023+2ydn0DfhP353vM4CQdl11KH3gsbIXfzQPBn0LWhrAga12S3PoAxXD4RdZrQPZAtg+0SHcc4Npr+g3uWeoKLwgRmyav08NH63cDBYsF5Q1L6RTecddOxz0rkchIOPjuBnnJeWP6AyOMvcaNdaR5pGA5tXgrA3f+adD3zDkeg0PD8OXiLZ2AurTaHNLbFM6cW0A9ArqB4x/oA5y2ifVZCeyR1xHWReRwjdtxCBeYFM/fef4aRrcnfdLlOdFP57aKN8UYFkGvSLllKiiK9Vb+G2mxhBRBZQT4ZhlRyQjUFu7Dxlvp+9Q7y5o2s2hSSCKANt1I4CZghqAQZp8OxIvmxWoYVL22OCxM9Y87HYTfe6sYSaLHgCXdXpdUyqiOE3xrS40XI5jlfERxt1LujzWRX31JOHBZCt1M5kURkTkuck720qn7dyXxqqZ9K8SGlnV0izF2fe/fCnmFA6hSRzw1rg7+ua1n7uZkuxPEdIrZuefjRaseAFQdyhHLh3XfgE7EYl623o6+8+H7c25edX/GelHUrVoDqnx+9IKPCiYX8W4abLCiAAPAyuYEi+6nlxpx2BjJhkKtDjYqvsi9HvHD39w+a+TyDwrnZE6eCEJIyaXiEFczdnXaUH0JjxwHQ8kE7O2seUxjlLwV5yMSgyRQuP29i6e1nqxhvgAC/yAMKd0c+ufOQ1iZ/s8+/BzJlkwHaXXDGTjQf0i2FCfj2oFM7nqmeloAxbQdyBzWZaSEEzaDt/S/tC42oPiyY1TVGm+e3AcmiPywLmr+C0XJ18NcJFT2sy7XbIa4nnSsyNc=';const _IH='df6a3adb0a7d743bcf47757c661dec6532ee2bc646217ffd9722d7cda51ec751';let _src;

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
