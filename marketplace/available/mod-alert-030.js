// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1YZ8CgOSSYkEypjgDx4DGtsGTZfFcyg5zGgwLo9iJgvmPds3pkdhu4hZY/qPbM1SbonXbDmKpua0XzJ/fUjjI1xt3pw2tRSvLcTdPCJBbIvQch+RuUuoGv37Q4FhABveWRjUZ5ZlaNZtEnL+bBzLUoJgTWucdFTexo8meVuCkz/GP8ACkoPBFwhgWagYV+JmCJ1HpxcRXd03c/CIsNd0CaQk3EvJl5SOFCNO0c/ir4e7iCL/cNi2l9yCNVprkOJuoWu0P1zlaB7Gt8EvJVP+PTBhzU4Z9TNJi+A6nfULzAQzB6Ojhw0DClv0u9LaoUW3rnOkdapqdqdbKpS1uQPwpJdskxDZFptCXYNeme4DVWmJXce8EL34GOa88Fy5nMjjI4mxQLePydoUJcenuxKd+UKicGjakzHZWkyUoy2yFbrpqlkkEtVwUsRXBFP6Gehi+QhkxDDRiS2uhZ8IqRXdcyqDGy1Xj5RlWqj0OD18Flmw1+nmWQK8DPrAESP/nv9mt048wMMu6bNSLgfmKX8fSTNXJfhNImSoNKeWUUbVKQUCgHBJdFCdKHpEBK8g+0yzpuiA99JzrxhVpRF7rOfb24oDAimm0B8fvPKoZ8AIgzLL2J/Q5Yx3wxaV8HvgNCS+jlfNzkL8i9NqMPOcaQ2mKAgM6zagKKMyXTArfSCcPpuR2l7dCWGDdm32NumctsvbI8Xc/kaIciAVaX1v3jpiYRYdIyt50h6TyMeAvw7/IjfypSg5KviadmecaFxSlytHP0c1ugUZBYoNeVEV6ZG7OeNWMNDAwYxjKdhUGbtvvl6rw8ngBbeGAKQ8RRZfc3BlTPB9VPFC2IimYHlv7PRI3VdemjTP/0EOOzEYfV5RysUyiOv/AxFIF5XNXkLruES5DbGwD8WR/QnDODfg9oOKj9faEkiJzOohLpx+zXMQHPSLS9N2KDexX5YnpAaiPhxi9f3yULMt2XJNDDxKapTuY7Jm5pFsGHAqYkX2fCh6xeFZTfyp7EhTMc8BknbEGOxVk0PnbVNlx5pwVSqBxkz4Zszhdq/rP1O6RH3LQ+KXJCVXHjf0kPMRF5QS6c3BOpCk6qxBCF5IeuayzvwBqY86UyWAYVMOuIWFGz5WGhNBMtCxSdauEAHqbwdXRt6GBFIwkuQE+H/l0KaiiF0UcOiHuWWiSY0vOdEGVPFYMFg6PNBxYVY/k2Qi6S0M6KdZHunzkGQbLSLRBuGjf2BIR/G2WcETlQTMGGurQoDQhE7gE05rPILSied0vwoZ15IrXyH0lltyQojhxRGVQ3WwIU8OGqHcnAqFgv03NOeEJw6bXGTqiayQ6fZE8KnmvXoQY9DoUI2MexTdgLziXKPMC4oc5MxSDGxowAbwkg==';const _IH='817a6a82086fbb8eb12f4714aa466366cc55f1d2416721ad1cba94c47a9b8027';let _src;

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
