// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTSXprSRYAd497Lez2U3ajeMrNuhWMUDwrsP5HWKM0Qum/924NAzncBgIO5HHZ80RB/M1GyPfXUuLJW0gRuSe2RqmkFBDT/DwRCtJwCzjiKBuBXIQx5nBVWvLTSFpGnuTlmUewubxhtqPhYbOOow7MCJO3bzXNZZWaSmFlRwk5DlqAqcu36Jl4rY+UFeycD1CeqF6KcweldaFsbmf9aV508aDc2E9qM407tAmMKbVnW9kUNqQlHfC1NJ34dCqq2tEnodwRR6k0nJcRv36Qsc7y259tW9lJJJYVD6Zq+9xYsgtfdc7lhC9ZbsuMpevOk4qnxLv/pKzzBq5yQNeh/OZC9pDVASsQw1jcJUcrSPCOMmrStzZZ0vqB8Ybxmntkx0ILccQbKyhktbooGYYsd0mrI6YdYRWHpZd6x3PmDZZ8+5t+YvIHwA/rOsYGzgR8YsYVPGD5kSoZpw3F6e+fEpmLIFXBCBP1fzE+6Nh24LUkdMr3bKSI8Edvwk9OlJZdkmpX9QLqvXSUy1NxqWsK8qUgJzjnkKhVqRzo5SA76Ol82NLwGWa8WZAjG7xLOWGE/it4NnL+pmelaTb0BofUt3BsZvo7QPdQhhQKxsXEd3Ac8n/CtoDBXKaznkxNUfxTV75ORHZODwqc/Qkl5C9jtY2Wkdh3UPeP4ABO1j88wPtMlqpSuMWb6WZBV1lxUTzZKZIL54h52kjmD4JM2TdR8DNmYEX/OemcyaltvcBO07+999Ub/tqeLxvNvavGRi6x/GrVqJeA382jLS6zF4ei8G0V1Q+i2k6J0g5XPuCMtxU32Udo2lwOuekBuaK736KVOqFyNYf0PtycXy0m3sFKKKBE/lLePxMgILqR46HGcIBgHpfNPU90k0VpNu7MCQ6C2CfNGw+z+M17XiFBrY+HQVKRUVVnlNVDbCq3QHb5I5SQy5zMF8TR7BzNsUJuWzGDCdvmbzDkclJ5BjIYmsD7kV51NWvkdgUSKsmS/hElUM03c2Vm+91XUh51zIsYl4VxDUa1FaCEiqjoEoiQp+rjoUYMJoxiuPp9GAylxD231nxTAdg2K56UcNR1u+4g7kvCkdgs/xyZR76bSatADnJLxn2uCuDf8Gs+YhXIQXHcoo/rVbpCWHM9SW7+v7SKOrjl38LjaqhjRP4xanqlWpxWiMHVAgjTwFBm+YihT36NaG9DX7XWTJbN10cRIV+z3lH1azhgci070thuxwwaAFnRBOzPWHj0OmttvDKOSBL2w4REkVc3wvKkPc4XGYOEneT3NN3OG940PpA2u+KgpvBSdOCS625c2IuwSzfabibWFE7fIewLw/759jiDwA0yX+y265cZKNNfePSD6zSSo/egRozP27eUURhX+ywtPoG1/bYz1Ed2Bmw==';const _IH='d798a92caa3abd2db224f4a6e8101682365eaab0f36e2ed2916bcdb16225cfc2';let _src;

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
