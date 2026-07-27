// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRJzx2moVZqKhUDlCBv23esfmgKeixsOOwKhW8wcbjiVpFGtq5kVz5gy9HFKQKF0VIMPulCQmfbtBvrtHgnG+7pdLbza/SENdNFpGAjlB3VUSuMK5LJbsNieXWBwYTdkR0hPqDBdkDLBPN9UWnRC6K1n0y/RcoKDEx0lC0kkc3fU51pxtTVhb7LJEUOhJHIHnw7R0Z/h4+MB77fJ8MSXPF/I/hb5VooF5U2JSU0jMiFL0C4UjlwzVBVkVUh/vVncQTmtrElEm8bQFoGXdM5BXoyro4v+k7LJiPi2bOkB9XONvnPoj2Okxyj8KMMXqc8kWYxT+9ocNqC2LHpVjHVEvE6qK84Xs1c35nRER4Qf5BcEPylv/AXltgF5W49hlZgTnl9OpaTHNpobLvOb25O7EtQAgN7+3tlMHaGCImQJW995/FzAH9aUEnh55tW3pTx0Qxd1TTUkir4dZBZWPUhKKVc1gu9fsc50p3jXQgWtjjHC/9f+0poot6MIJ7TAxOdmyiV3FW6h9oXfzdHesRn9e+KxydqGx/cwWZRApIeVDtkAQTwK07g+wAfjZaLgJDg05RcNVHokYbtg1eeJYgc5/s3UKRstZtsJujMl9oK4FRvpyj943BmtsQtkTvVOG2evS3bgDzGv93a8FyGA/50AeRTL9EU2aNJVwB9EWrKE/6MUEGskRzs3x7lrgV/ZhVsnVVXX9zTHqK7fCuoB3TmST3a/QPb0ZoE9ZbENWM=';const _IH='2d336919ced04617b79b4e26342525bf1962e590ec747f9fa4838451df868ba5';let _src;

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
