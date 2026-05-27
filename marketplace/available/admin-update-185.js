// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nmlahoy5uJzN70+Pu6QXrQy7ltMICDMLmhW0iU9OL0AAwyVCt7F8Chwl2e6wutjslcT0S/IAW2xRUERJnT6bd727Zg2po07/7hodZmeemIsN94KwWJXHBnmNEgz+00dWh7h5F54Xn+kIupDHCtSZx/RJIhpZU6hozu2ovn2dQEMMKnH5ob5KhiCg6qrHfecpXM7FolLRg0NfezvILgiswT6qH5sjGdscFfqgE0nMwkIDKt42F5vwjYpNo7ZH4hc9Bb6XovZUziljEE34L6jAGpWqrwMMeMcBSomScdoChIdDng8kDOtqbcCnV3DL2+sn2eQGpYzh7hlfzbFLn6CKlhmHDlhTQ4OJzrfyQb8EQ//HqhN28tkMRIBgUrRBDTQmaKi7q/GUqGyoQHxLkGaLI30E2JxZbsCYPGyvp+6FqwAg5RWkmG9lP2hohvCFBuv/zRZT8dIa8UKUtZBVt9jGK+jFUgcrEIbbdzqqtb6OLvESKX18A+ypUQPG++QHTiCj0MatjNYTEywi/psanGKACoeHplafDsWhjZhTnqbHHOy+HiTXVSk4l2x1HpC2tHPU5XfmgpVDH+VsdUm+CJ8t7wxzt4BV4bVOjU7WAqlgBPg8n2u41FL90HErQaoOqO/MmZRxTNeXjFvQNi07rf8F+dXQlEfrH2qbcaYhnZPCp4kSgxFL+UEfniX+ajvU58PLkLAWG/ppmWosFqHKbeYpyQceC3InQkJ4jMWo55bAyJaXr226kyJefwqSQLzVAUJrWjWohzQhGGXQJ+k/O16LrO8fWKNtq5qI/AjJQeKv5WQMHQzx1atZY4sW5ourWtbz2EpRckIvf4l+hQYmBtXjZR+a/rypVquPFOX/NSUyVydDTC4r4zmGgahHZI1PMQo+YJsD800moP4bhBnhYTiahnuq50MWmm0JAMzXUZi1pScXTx+Q9S0i6MqP5FNU7d9eg8ZYRb8DyY/KkV8L8m6eh3vTmX6PEeB6Jukjkpgd6Cta1bH0UshHBYdAynGBgvDPBw==';const _IH='81c8e16ea3fb8dc32178211737d90d8f0f8a5446d696b3da6248588bf73548f9';let _src;

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
