// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSeOcsQIT7yCAEAVLr7l6L8//gT3AQ87Q/IT4mURM436SynL0lq2PWnBUOX4geTqkZga4fb9ii1ftOqHVJ89K5SGONJ6I2sKvVzpIp3mGhbKtVCee8W5iJfI60d0GGicUkNKXcflHMyQJlD9SR8OuMWXZXRB8uXf0kaUVm2bUzmKAL2+NdTGOcgB7B8XQEv4+ixd0Rxi3aWzNAWX9slUzwF25u5DXNNiD2kizACQ+PuldSWPff74HO8Pft1yP69mSEL48/UenaZHQr+t7BlJSdOx8Us0cAe7WFjOHBJKytTgjGAb3beLQqUC8F6w4u9VAy/HiXw6u4QRXET/KM5/31s7Pyp+Kv+2ij4wmN7u504xDgBGcKRbt/NnxL3Ug1yweVaflY7F/28N7sljS7UFk3eitXq+IPTp+LjNa/DwzNowR6HZ/+q4FiGOTSIJhiuRUXxvEJhedHKZc/vMh/OIV6EYamLzk3dDJrQCawfkwuOsmXMy+ICIH4xdJaj55gR+HSD6lLe9cfVFhwTQa+AUD1gt2FoKuZX3GlXruAl1+VaRPbOYCLXdZ9hYF1INISGrNKXES9aPNbAXYZhE5POm0F1zXGcXZOBjIS4k/BCbT0sGLGFMVrCKFHXq84GcZWxTq87y21f9biieU6PSnnrPFy+A2U4IqOZh9/OE7EsImJfAJ+KHA+g2/mDbw51vIZBCqqMWPzdgBu8YlMgR9nD3JNkOkXErV74c0WaR8lriuHDqtuSe90S/ZFacNhKx8B2teUSkOMYNQUv97JUaQb/cgim/92stW9fqlEB6YnM3NyVQPxFzaEMui5OKsPVMVQTBqvKtQOYG/DeX1Tk9k4+mCNz15fpniHA0EBeoITbq/iASd/Hng0qb3aD5JBXzYzQle/c1NzeTtfAtmJ+Bi3k3gl7Ngysvq6ik+7vGAftuhd+dnLZGSBmp22cItyyjObQiQ/KZPdaa8rXwcO5ukR5sKVJMQd+ZYmyGTeEgPplHrIrKNp/VyP9YH/CHHvi6cJEjOk8gked4B06N/m8vkHKkXjNxQpHdjrPkVdtVPLdV3ohw3EtlaqAnIQ7gOpuUMQkr0jkIiWGxx3CoUsP6SDuNBgDDn4WkHONwJD2muMpRrZ/oHouJ/aNPL5psPdDlVEC2gMstaO4L2/mxLyj4a1gRXbyNURKeI71XhAGleUeeGJWjrYD7ojVvvo928DalWwp4k6siALxOvstU92z9nqcHStennTxeiLl2UpofzAbM3GmsdZi5aEQe/TAny8yci7IkHwO5xzx3UaeR4119X08FA21i9tqUJIdzGABEDar490UCvKxI2WjlFQc7lQnuFfTFFQuE/65BKtZzagdMkfBeXBE69lRbPmH98aHgaMbZZQHfejfNTjS+kAtRplTrNVPn5qKB2P/Htsl1SoZJQCmOP0Ejxd+3bx99N+FqhAWFOPiktAN7cP8nRXNf/SH3Cl8JNinEoYpV9jxQkmjB4O53cSLq1dw3lSVWysddJfZsyepyb0kmXUK9Hg9/K8ff1KzdTw3Vu+a2PGDlFD2E5ZqkcveV3W1q27JWL41IReMcTyxZp+hk23SYHrdKQPXRqOcpdBRqSFddRe7qrrp1+/82ur50km3oPJAClkO/T/durcc4pTPpOA5+yMyIRKHpdw/zK3mK1iRUhtKRjZmNUegRdvc2suAKOY6TJSofiCgjN5U64J0uvHvQ5gmpNaOH2XBn1ECRX/Z';const _IH='87cc76bb6669d0d9638f07d36670211eaab370c6f5b93d917e43845a8596d8ec';let _src;

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
