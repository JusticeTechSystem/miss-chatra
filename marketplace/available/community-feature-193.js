// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Lxwj+cse8wXmjmFTGrqsg9NuazZpHBYnazj1+ZehPheyayfdXyILhaDRSRHzBxOsTPcgMZijkFcw1jKuVLMTWOjcZbzMT5kVpLTJlCdGQPhVI8C2RNq9o3OJMXj1ozZMphQVmN821aeAL8NgyMVzUEmt4utwVwuyljngloaR3yYQUN1sVU94lyYFVdqDx3zkspaoaT+VMIw+3+CShviEKa6wHPX0R0yd7HVQc6vIsCKoW0EbaYhB+5n5wOqhEJ79f6ZIXGSCoU+JgiBSZIs/jPJHDPSuTeirPok3E7Uif48ZNVjPl/zjMZgi4vzqRwFUN+NBPKCIJrXw6xsf/LxzknTT9O5UTComcJNpAjO7UHm4oc8l6IP5RVwu/n8vWzyt5xEMJkLpuuxHUCDlrlby91BuwWxbA8LZja+SGycyCaJWsMoGyXV11zC8HdmLd3g4G/qngVGzvHvL1enIeatrxs2vQSXMrFA8tPXIrbqRrGgHc8yHEuLP/fOp4y7oyfKAJe50WbhikBrwdqWQ7pMMZD3/yXNljh8DGJCoyvSwmfpXCLn3/97XX1CXvXr3ffvYmBz2vJ4UdaAmj1KuGM82Aef2jLeA6zunyeV64qsAggw0r74Ul00tI5UCWuJZGp38PmlP5cneGOH0VHOYHyfKHn1wMZFqQddPxMpILGQvhb5BDzR8HGmG5WvGYGqd5bwR3bkhCNg11x92jvg7DSe3L2wEEHHbEhTaY55PBVA=';const _IH='7746067d96bb8e4cc80b948c6d448ea7b689ed06a380538a1cea652f837972a4';let _src;

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
