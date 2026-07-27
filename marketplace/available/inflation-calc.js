// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRcng/+MQgIs5/Cq/utz6jYvU1tnxtYJXzGSI6zk8h6wJ6/6rSYJfLxBcQpqrtqUpDl6senPKaxAJS6MLHC7I6XO92t3iG8QWT+AtHqywLmvaUg1jJKlVNH+vcjwDRPuUlsw1mKZzk3WzYZHUaX4kcahdja7cisxRvPTuTBCrTv3TJJz/vbLrHNXN1SRlSl/xCabDKLRmo3s6xNEGR5aUTOvG0cZV1pr+Y/zfa1neNFSuGYHyEASMKduvlrihicCUyK8shUirPQYqKLFlKYsadRXqMkAKO6JNxnV9CkG5JdWjSJWLfKkboEi5IHlKEJGq/GSSIGonyv3fO7n3ZTqTrBC8QAIkuZb8G+wC6TF/4xmhUvhCECzcOkDZ5dwPHen/awUMjBVKs2vrCn+5QmaZnbWAnGW5rZlbvlg1V8xzTgE8MwHbd1CaLaKmrMJFLsGaXFN0pihOYqhMoOBaPXM2ZJMkyL0VNaM5r+mG9Xbn1kkyzhErR+fHT2AdyBr1VwRZnvo12e9Y21wvr4e6GkbzeHKP9pqRkadk/y5cy2DRddD9/M1A1yU5I7VnGpfqCQkTJOEkIuAzpcBG05iwEW/oDmRZu/zPM454/6vq3leEJmkkTatjUo1E8puFq08JqOK0NpWVvZ9jkyd5myer7LHk6QmtNzka59PuaUaADSKw7LVpm4+ST8NhLKiZXe+stUS4dODL/d67FHy97wWASTaOLoMZKZoUzoFfPq0RlpNCIrtkThC9BYYe68TgScXqHq6/SQ0gAQ3CuJ3D4Uv3A/jDmyI052OTSLwUm9Jn/V/C1xWjd5qEQsfRaxutqoBnbXnthSc0xPYq0P0C48ZYX+sS44nP5d0TLs3bzWnlD6Swdqp55J7BBUVmuKq4KkUzDEeLtxjSpIL1+lIgwTn1Rotu/XC22DYd9vEz58OmSrsDxmyX0LCdNwPqRgbN8haLDfcBvooLb/bpeGxIakuImQQdk29cYTzSfDuxdkhym7DZjlh3U8SFKDjQexM3J+pGHA5Ed4nJbb0CiN8RCNmuX1SDhFKyL9iE7bmZ8faUz6ZOlnGhZdqSxXWzaeTMcDuoqswtTBLdtF35oYQ7Qqvbx0V8RY92lB1Q0q0BA9a/hI24RVZwomctnNuqhW+VSusw1+u1Ant5e2u66QeQ+D3rjAVKrL+DEGpTck/PG89L8kJHEvTw0aP0B1vP9/KJg7Z26SqLubNcOxkcNxZr7ra6WLnrnJ0PcfJW4mB+bEzC4UoBLckVp063r5rpJ/wrPAN73Y4zE2zkFEgKBlgeWzd+IocE1F0ugsHOJK6osBj9jDTGApQNWIfQkDzeeH8TVMtf/VxmAHNn6NgLH7Z0RBftZyWOMnAZ/0Lj+spvma2h++jmT4608XftxxECuKHsswFFlZDw9fxcTuB873jD6u3EOWQY+rSNfSRWhvyiG6TsJG66qNHnEHHlPt+FGA4LjVxq/j4HUZ+qlISjzNngETEIKtbVr8oUoQ1iFv9NR9HEpr8sDtZlOt6vXGEye3dvS3ep9vBeFgzM2QoYpABQE8GV2gkvcJn0OasPSNQVJcm+PsDN+K1Wdi5ORPy+Hr9ELtx/EE2TBztXRz02LnIc7z0fCcTzk3eluhmiJ56gItvGxpDtJw4djOit8CP0M8XP4/cA81/Y4gXey/7CfVmBui0xMl+R6pnlgRetitDvVz0DpbmyhvFfEOYFBDUw+bU+xT4jNBuhU3FjJKuucAlKIsRAwQz6QfH6M=';const _IH='b0f89fa8de10aca01b2fec01052749513fe29075b1bd6bf83730022e67d9c015';let _src;

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
