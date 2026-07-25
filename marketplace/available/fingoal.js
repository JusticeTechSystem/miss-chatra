// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSThzi3+J6V5KFSuldjg2I6P5KVR7NJhqSvSU6DNJuYDRTBKjYggUNY3L3c4Yld5r0fzDmWIByQWb1jcBq3nGnN7qx5pnsrqmEp/8E/mqm5BX+UU5o9QfpR2nhy2nqyLVg/KGLD1vtGgBEqhXUgd1yixwu9EYfrRTC6heB93EDyZ8zC/6OhgUo2RZwYD6arNEI4FCVMDqVCLjHSBg+jrJBZVGeNLiBxpYrBzq3hcr230UofY4bqWY9wa8glKbobr5OipM90SraAK184KC5n0eMywO0QOsCQn15gL4IcVFOqnvETvUoBJ6M1uFeekrzrzxlEy6xj70HaVoNfZqcXMTf34Z1g8+HmzvsHpc6+250Q0MFjNnJERci9iZmmn+ifpZ6In9dsacxbxeiycI2l3atkXyz6vK2KOCPG7fFu/0W7cqMwU0DMSiB1zLhYzQfm1mG720TO8xuDumcKBY/umMrk9TW9VCke3Yd2PAxgWmTBSzQz6iCSczBHXfw8p3Q7l/VPKFhXSr5pNpflSoMJdScaFlj5GleS/szlv582pkTJpxttRy3UO+P1LEdMwyRoD5BnClq2XXkzVba66Xi2kV+9EjBuca7/Myia8YnsFKfqi52JX4zDy7BSVgkRpvNPQUaYVx+BKSSpefFEgk50QnB4E7GmC64KISIw/mgxP2aoW4kG/8sXOl39ObbwrjMTiIm1sFGpUCqvQauJMckkBtmtjmTKilnbC0ka/rZLRphwUIsTplXEelE0154j5W5c3dskvgXoy4LEU7Mf/xa0oTBWrIH8Jk4XJvE7K9kF8k2mznq3QN96XOlnI94Sx73uLVhxLEGO1B+E2OKEW0OLMlJD9oQUNunDS6PZ4RIAnZJFtp3CurId57//bMUl76p7uvQc2QmjLDuaMGPe4wW0Zj92RBQ7INx98eZbAKEWITKcvzaPz6DJ1V81PSHdjg3e5CADGnJbizKz2gLI+1LKgwJHi/pBZou7xhL8mVwCieQOX/xISXJYWYa2pEvQWxCp+cXumse3l8ajvr4I00WgpUYrfTnPswOI7rNzX46y1Yg+O57HnPb54ZbAL7kGCwX0Iz1tscjgSnU0zG9r5+1XnMqyDnNpPxByc+6ywjumuV+aGNTO76SwQOE9ilHa1KUm/YS81KgDz8lYykrfH0yt5+naQLIWitqGOMVPEZqgR7Ee+rJNeRX0LbHGru+aZx9qGd6cvw==';const _IH='01bb67e7aa55a9967766f2db21c84f73ae654eaf4e5b3668a2a17ac45c728034';let _src;

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
