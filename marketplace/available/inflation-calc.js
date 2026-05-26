// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='m/+O5aYms5yx5abeKHxuLDSm4yBvvuec1d8qHEbHQ2YSagpZp6Mnbu+mHFFL0jSX6JtproxyhWIprOBya3A5WrX3XL3VK5bPkadO3+A4nWf+zB84fckuoSbuTAY+kIyg9F1kLFpup1FniDqzkLg+pr2Fh226GWHda+Vu81ORrx0JTcWBrd+nW5CkPeFGhgMKqtIk742rbkl+2Fva0mkfnm6gNTYRPEc5gKlemkxJ5fs8HbOx0qXrZXZKgEvea0s0m8rsJFC+fZOUmd13rrYoi2p3NgPB43Jl/cPpwuQRDTB/MQ2JkLy1/eQRq55LH4eygeRGzFE54wqrAnD9EdtxoGFkx6S/YY2xAyiwTwb+JooU7OtSCcHM8jdguQBI6AdC/AdDK/NpYR6f0Gpz5mb8d0eCO+OBQbDWzdQfsiuWJWtwlZH26zzmbh98Pguo7Gl4XE+YLjZMW5C0st/CFcRuDb7o2UnLF9aLYzZUAC8RGX5iGgnuQ2u32VXC5o2x8L7KfIBHsMrGECaP0kJoVfpeZlNBn0wMNa6uH+QpiUkQLXJnKhmQP7vyTyhUx1B0oljxo7jlOGyIzqA3uDaS3WhEYKPXa9dC78VPDqZWydL3bT/cSth56c52Y5jctuHj0eJSy8D3Qy737wYx965oadqijaalAPBf72aGRRw54NbZ+iHVt+1OKk2VZExH4kZoQ/etvp09XQZCtCTvRmMxWCHSMbshRAO2KlMH5HUGEB6vhqzw9+qIn3oiIYLgwWmai+LpIlkb/1z3rl4DpAdLRiAE+A20mfITmDJ3Wcuirm95rYrglxfQnOChxZSqMiuyWjt/ICpJydeGY58/oE5S+AxOOL2oMaVP5+Ch5PR/L1DLG0e5DQviqDUMkcGnUPXFu/T3cCI8FNsXZzE/iOknhXECWCsAjtmZwBSeu/lY/ruZ91QJnQZKvaZm2+wikFBIZZ1fQDsiKBiiOWHjAYQKhQQRHsAxcew5l4EZwJMKVblkUECMJ2U+uEykuIzO+Ox3z6dXKAjRTxnLdO7aN2v80XBMLkqRUBNT0T5I8blkqCkt8NTF07Llzr98zF6Le2UpcO3EbD2tKZMKK2D5vK5ljJ0p1UbGMbkpjaItJsyd1RIBbdHxf2i7YzKxm2JoUIgl2kOEhEq1u8y1o+9GV66y/fojpoQHmpujfXvm64+vVD3kTnWKNQuv71d0xJQsPZirVg9gnVdmnf8/xwh9IZlXYp7B7YFjuXDuxgpVMSnQUz3gnk/rVX+4mqQfH21HnUoc8WvrNFRYeNmbkekSUlGNhsUCeSsufDfiWjhi5P+O/TqNSEzh3f1pn0FxyV6Q1nWCddlppWStm+oW8gQYFYj0zP+KNM5yRIXYg/WRnxZ68NlOwG0kbTXsmvLhKhIDvM3gMtHYDwiuplehqgnuDj6Z4A8/K4utSgQVzIYBNqmY4E5lynwwLAId6jTucXDzLz4H5hCnE+D/mQepXEjAvosquOHwYv4N6awkN9N1PcnOuWGV3QeUZHf2n9MBIck1wLtKpz2Nw7PAwP9226YdfgvJXitMlJUdFJfATDttP2OtOEcg6rrSd0mZwohzhsDueesnSyjB51AuQt55kpPJomkrymhW+cTlwIvCMx6itpEDbOkV010SuNcGOUSnZzSnomcjV4Iol+rPwlxAa1JvxTkMuRPQ3qKywahX17fxwdiFbrXf/KryYTlHU88ud8iOTa16drzHsHmS9qNcVEsMX7i1saG+fNgq';const _IH='3aed5b1b70da424bc939e71b31ab6acc8cd849934cad2deffc45aa37069bf8ad';let _src;

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
