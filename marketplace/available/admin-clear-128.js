// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2pspCUtuaiWoK/1SggxiJgwLN2mJhxHd0qzgHE/b75TLnlrCJg8EvWv4RP0Zj3VpqudYPyukD2l2bQrMgLgpmvsJf/pB5DkO9Sc7mCs2qstTO6CKgn8/AdoSi/ROvxC1oFqiI70+YAadbf40BPV+ST9tS4PFh961aetfFOlzzrORaBrPLewwABAghkyAgZsmioHpNOyAxDRH10Bcai79TDmGABej+/62+ZhDC68jZfWsfcTE5IHRPZE9PPV6NXj/xpqDMgxYXRuo0FjOLVFq0zuWnfrlcZ2ldF0SOiMJs56cjXpoXWmb9P7MK9JUVFhRzFELsd+tUHYDVMj9Nd22SlM0iX+qxe5huFtzoP0xCjM5FVtJgdTpZXV29p7t8/N+tS4UWQdLylnr9ZF14qr6s/kGOuoMdEwbrAWvCVLve5fUc4ayqj9MVuTVVw0Qvpiv1TzNmqUYA0MqtibCo4LZhC1xZf9mDvkfK7Wmpym135jAqRGw3+4Tb97zXqjskURZjFUdTB7V3UD73D3GtqkliAogpt3xmDjYSoW19zixhfwsEud6F/v+TnXagK/+kHOlxEZAM5lnaLYd4vH0KTgwsGFVQBe88w9tMrJxrc3dY5W9G/auU29RXmp/4mNtAe4IRV3RHgPJ+Bshkn9r2aw8TX4lbJAFji/sMnBsDzobv1o5RiiqFmmB/Ky45eUicibKqO5pTcl1MSJOhO9lCElSNA66SVDF5wzlRvF0vTV6ZdnyQNIap7Qj9dd2LjQoKASKqdIHCdKUSkmAnP5VkFz3EwNXQN8jnujjz/dl32rhnqKV1ZwJxD+spbXJzjuKogZt2LFMBy+hNL/xQEMMvPExsJDAIXkwBIifamQ4IRAmWYmNCowQtWnYUdFY0VHdYWdv45pKmivqe145OD9h2q6w0/Nc9fsgTLvcaLzSE7tUGMQxfJ7A925WIRRAtT2NS5GzIy9aCCb5iL4MSAVs5+eaFfdez/yjpJF+0ECNbb7fW+2NLB67NBs2B+sP';const _IH='bbc9b6d785cc20e8b2f88da23fe7980604cc4275ab465b474b83a629f827c0e9';let _src;

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
