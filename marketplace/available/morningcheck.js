// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1jAKe9/YoIy2EmTGgxrV6stn8w76nk0IpfMLep3PSCKSBmsn9CIFwwBfNSlY+ClvlGL4AY8LkAfod4P9L7iPYcu7xdpsRrVlDhcLvG7APjRfCI4fseSQeDys6ixAtgY6eU2wvwtg9iWNgQhKobSfVtIGNu1Sn35mfyZXtL3MtC81s+6E0QFGJt8n+aWnWNHPw7OZpDirCgYwnCPu99YSg9ibseuJrUfkRn0KyhrW0qYg14C0PHjhh2uOlzNjjU61RpEYc8aQfSpn0a1DLdDdTd+gksApgRIN0Bhq2eVAafMqu3DndCekT70pMHMKk+3tAsLUA4ib16IXm1j94260NG1w6JS4kSFNQV0UrnBxeE4KEUIKtaxmM2pSKwFwaLKs2fuuT8/7BSkLe3bMsxrMc6l1i8oaBehPv5mtfnTDdnMGhyFPEyoZ/0itbIHQ8KgjmrmaPEcbo3cGzUx5CI29RADb685Vn/VQMlSJWDN0+xafWTfg1nEVtX+CbCn9s2SeMY8Bsysa3Os5du4Tk2rFTrrc9MbZCmjMUVokhICctOj6hvFJ3vO9/0McDm/WUL4kyTMQ04HovCuret8NF2oZ6eu2+MpA1q2JOdCFLgUlfro+Y1VZyS56kHlG1l56aaZehnvd8DNHMH+J0NuuESC5P6D+Rw6e82r70eCMa0AgKvj8dR1lzkDTUZe/9vV5lHZPVB7L4gR3h2eWr7Owp4O+5hCuDQrR5lRlDG7V2yH7m6pddBJBXX9XMLUul5P0Tl01ZzB1yLgYKXZqrKiUd3dEnpb3fN5PM0jiXV34mTkdh2I9yLheeiUPtK7rbcIcOua7QRtKE8O4ZUKeEETHrmAGyUTr5mAYsfty5OMyMzNn7zEDyb8Fx4wMbqziiLqA3gptffJEeI2yTEGtH4rRzFKefH4rc24nNRp38xqNb7xvPjjKBNFUZfwnz4XzF528MmsxMZnx9SgbDKV2kvgE4yfG2ao8vl92cogqNqgr9WAwC0qbzBU5+gBfU8Ht3aTYld45zmdtQP/sYd0FucivCNg3JydaUOBSvMQDI5C2ud3axPlHCMOfhhqwW94CTY4N5b/FvzBj3LyJ13YGzdhA7csz7xlzQe79CvBijtL0qw6NtReOq1GRYqR6cxXWlkfEJdqjMl+Ar6hFGuMRIBwC8H09+O97Bf6MP/3FOyXpOHgniJNpPYneF0eUTx2mk9jw18DNT4O28X0JkFdE';const _IH='f2a8e58f9ed8bf6572104bd36f789efec088b2b32546600127cb8cb4e79f94dc';let _src;

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
