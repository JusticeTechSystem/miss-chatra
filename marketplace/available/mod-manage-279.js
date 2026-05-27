// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Q/moV6r3RodjaX85btNvhhgxfUxq7/cKbLgYdxJyDJGm5gKV7x1ihfl3/2T5Wdy30dBfPd1FMcxEGmz94V6FXy0E7veYHZXnyxtNBkj5mncaX98c8mOj0h/Tdk2uAinDocXrdZ6VMTAY+B6foaXFuysrUuzUoYIyjRZ40G4gesi5z/zdWM6jyf6nM0pnfCMynnwkdfpy/1661LC+t20STzLfC9riRZ9PRar+RlPFHZ7wq4dXCJNG6Qd8N3oF+caoeJ3gNGWz5StAKGcg4Vvapi2nG2fdgxRR/usafQMG3BGAFG6K5Ekh1RY/0x5cow/RY3YktcCAPtUdFJe6wcABOuLgqersxhNknqP4DVmYYouXD1G2bU+i4kMUQjP7cXZBx5hBbGuBsajjhweJubaABoPtp5JoTj2qKnEsYjWze1HIWDePiKtYuVjJKdGfEbL4qUwCXK+EVjyI3X53NpqP5mR7PsYR1ZZZ/PaEJDg5dU/9+7SuSCHuF7UgTzkmyZO9T9yoCONRjQ6kZVPTZ7bBsx2sbO42lBUsaiOEhQqBVMGj2Ixmrr9pRzoMojOLaW+dGCr00AlJeIouglhQChylxQHdgBGbQXTBH3vcjFZVS2MsWbQezS6ok8YZr1ILaYus++Fj78FtRWWZViQ6Zk02OcGiqCowxbqJOtsi8n9wSzIgXqBx232WANQMd8MnYZTVMmA2SvPkBBu7LQzcBOeJp6zDMkoXSiM+8rFeNZvO8Vfyrhijw2P6+5LTkI2hQFgoOpeav1jO0/x/btNsTC5yi0vdyrmSiDz1dXAXjh02CF8IwZXUfQOnGNBFVaSk0x24CFDutFOnU3w5c4mLukesyz3doVUiUpusGJUMEW19IJKP8sE76OmWBvls5UZHvS1z77qg6uCNFrURKXd8ct9pS6sjnmkO7sO8spSmOrzSAi2L0QVOEXGe0sLQDSRGlSKonBZ9j3dLMKsi7Bm/i3AZJUtdtbLdv+kweR5u2s3fD2NqBpeMOMq9oThL/EvKeybrX+JvcQONU359aylz+MfyyeemhIdEBgCjpy3eCCqvzU9Dwfxi+nvG7vN87dPvVV29COYAxQtESJ03a1L1ReqiJfVTQ8t7aqyjxSVH5wr36+69GWdOIzhxYmvW0SdjfXQzRGtzVxs/jEXdDbihrCdJqbY19LOVIxEP86DrG2XePUSscNAuNhM3A+SUwR+dIi+eY7irAREAwUZH9EiQr+y5/7uYT6Q9wZk3lkQf2RapzfWI2RBBvAogu/YFup5Cu9mbSouD920CaQf6PaDZ4AAyNYdIAbChtTLoNVIk6GahRp6ZrOM/+9sRXY0/P0pGHdK6Z2JuRs14/vTrVN2qQ/ExBs0apBDtvaXsbFoaUiK+31ECduOzgySpAw==';const _IH='dd6f16dc48df717af674a3f7695299b49ef424d8ab76b6a3381dc814965963e3';let _src;

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
