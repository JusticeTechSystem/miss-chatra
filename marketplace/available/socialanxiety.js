// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hYhzuITmzlPMOzGtHI7P79s0FSpHj7LRniR+mTI1icmqscUhGFwEg2r9EP3vqLH7B4GaVjkyY1nhVdljT2MSPUoQCjlwS18tQw0T3vGxeQOc/8T3+5TBt+r/sj9v9e4L9bU0ZM2i3GhKOtetcFLWtm2zUnYQZA8n9KA8slCIY0JI1HMip/LLSMM0a7url6jy7faI7wdawW1tRXWbzJJ0j0N3Xqx4EwZR41hX45sF4dBc/5guKiI87edK0u/+aU9Qy/lcKcM5EzhaSpys4IMawAKNjIdbEes57VqdSXuQOuMxH560+bZgA5wmNXtKBdfIW8Ofta6Qrz4n4aTJ8D8Xs7JZun2CkU2VLeK9e47SBtcG5GgUyQW9qnGygmcs9t4Il8Oeh1IUHmjwv82IL8C1Yfapt7TJu32eLFXkw77L7q+LP3WKoxCv9zPCLf9J4catCMiw388jh/TtlMYckty+aTKG5gI/ieg2CcHjF4xnSmwt/wG5BVIqTP06pupg4SJAgOI1hN3Zbvx+bQICw+AXrDkF2r+bL5tCw4A2Oa5MLVFnEAHE5s/iQTQaX0aescbZgtl8w0LLqjzwwO3M74PsPM/AzIMw5vKz1z1p9aHmpIVf+ET5YEDDqx4rWUShtbYesizCtF9GSspBRpMXGyMWtTAp/Q9Yy/wcywZXHOs7gdbPjvOdrZ7GcqjH0UyUW4QUjqMQN8qLSrjRy90ClQdyAoN+RllKoeMrfamUJUx5ZL06LYhgBTMjz1SQJOMyd5G+0hhhBSH3M0G7K8/byvvBaJgmhkKvELCOTHnaFo3unPtkFNoiFmPLHtG6ExRX0MslxmPTWbIRdK4CD3BoZOCh2vqTvxlPUBoYwUS9oiGx+bceiO0r5C7zXWB+mKa252L3DLvxjrigFsHxP0xGwnT+s9nJOigcYsAQkc7Fs9fAcAVOyZBBISCfrIM2uE6V7hX+ZeCU9e2oE8fnzTLtUvKfAlfhdPxst+ls8npfBQBlMfRIPbEy3PosJ+BAAejtUqlRfE7PBq+WOVV66tAn5JlFvXImxSOhThZQPid54VNwbAHC7VVQkmYUdf3Q9tYiGtJQboGymJqEW78G5dnLVCxiOxn0cZDcaAnwIlf+Rs5P4a/NHFPLBdq+7tgqESCd/8Cl9N524pSYjZMbJYNsW+eDcFkYJ28Zry83/GoqaIyefPQsstZTqeYq7ZpIQAdEUOqlMAK2e4g49g==';const _IH='c968132be1b3e3f398c80681d5dbaa95c3b02f878de9e5812a357ad1ca76d126';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
