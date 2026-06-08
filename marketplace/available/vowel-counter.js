// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vZv82Q9f32WL1IUCIqezeUDPM02S3363ytSGtybz4c2lUnTIHTue/gvCoqQmsyANSZxtsdCWxxXvmgg6TSmg/6ORLixXwGoHBvGhkrCZw0h8JMW38ti+A+u5tv+X3De2MDq5Lhgc3OOoKc7FZaFGg/S9+E+vrayOLFM5IniuppvxvIuwcc4NOXizJzxag2HAEIqa6LBSCsA70UQIdmSlcMfU3PJuqTLNGt1ZgeaSK1O9UQOex5xAPeiq4ES7c0aqtQ1LLpIUIEulEbSAsSecboUdjm52PCLYnsSFLYcOrWROgoidgr8doxZWZwX75JaCtscceoPmxa2zLaIM6pH1SesBr7aUeiimGOQ96mHrQhiTm4SO5a7g0C2mEoY4Lt0bpQu20AM4rgJnvhDVe9IWyRLcqBaRuMV5TgZRCawgw+L8q5xrdt3ocB7b1cPhci3a/2b79/pPseGsKI3w4gEGWIE1Qf0Pi2Ckb00t3E7ldINEug+KyLR6wBMZJqKuiilNvH7V3n2bO7r6nWkJ20CuKi62LJMgeYVnEzUBMZl/ELQ3GvRUfgMZp8ochkRZyfxI1WZjFYCbY7vfn2Dh6572X0xH82TQq7hpsmqznqbWEmNwm0gdVT89opbyY6TWf/rEdi7uLx7LSXyMp4pL8UoGYjFXw1MNvOvbusEOJdJfkYHSP10AMxIVWnaR/vDDWM/raMC+49Wnq4hATlusdRmB26y/v18oe/NniOnK4O0J1za4mrpcBmimCBJeFUzhijb5l9erd23qsfqlJLrVRKBoU21RU4yNNCt6Sy1v2/G3YqD27mVhKXSQe4rMfOZRo1iDDvWzHBHHQextL4r/tUILCH/Ln11PV+716m9INiXy8G3GJ5/diwW17bBaPr83lkYT5jI5GCl4jyBRNdAid7t6bHNVMWLVjCc2RoUPC9BqDGVMA/VKR4idZARHNN0Z2RywUrI6qIynRgcJQqa2tmN6H/CQG7YOOj5BcTjU/KaZicwapPClnPh6vRKw/G0Hcjhd9T+mFSuxOcqTCmyOy2nomgrRFb4qdP1QwLwpzYv6quc3zLAmBFmk6wdpmy306iBcKqqpMD4hz+OxaTrpwAzidp5OJtmR183LMPGuzdjYsvzqAeAwsvTMqqlUpoDH3dEyHgVaXzkpEN33iadpSMYKYdUAkfWrQBHZizmZCyM+/QblbyBepM23vW2VkENsA4V6VidMpldvaklhq13Ivcr0Ukgn2soW8O2OfQWu2CE4BrauztmLV9e/Viwky8MLvbWYVCk1MVi+3QwVvmKRg9xBTJ3cIaoghjpec9sbUb9fu89a8yeCg68nDYxbj2ntDnQx8A/L5Ctl2EHapCDPpDzf0lm61ziUy5V46qYVlORq/+mo4EuRXEZFHzDREgKM38f+HxHpUb4LPzzwgfbmHiLliNxRxiDHgHVZfU8VjEzPMhA8s6upR8oahAJQpkj/QqM9ekOmJUjyOuT8JPO4UPOuxAiIlNl48iFNy2Al2MSB8geGN/MtImBrHMJqlHkqoZzAIVtptN5kwAAXUz4REBV8PhyPQVwJXJoyhoL+Jz8tR1ct3AqmkrEItnncHI0lHNLTd49gyBO4mbmj8bzxVI2hQxmwh0buo/UlYjsJu3oGz1sJwroqYH+Zd+RW7hcxafGZvuAoE13cz8hfV2RmqsR4B0imiINHkHLzG72sex5DHOX/XHRNFh77qWmEeHWBaw2wFctHWsf+fp3FTBEP62Z631J0lnzx8pzGS6vlRyB/5p6YWKey8PoGq1Nyq3jSfn7RfabppESiGjaExzKBm3Gc+Ef9rLwcXnsgjILWzqMAx3g4Vyd7xA9HSjNu2AfqIicF9shb8K16ORkjBXCjF6pfRMcTPQUzxQfmDZIu1gmipFxs4iAZeZw=';const _IH='b6d39fcb6d219b2ab07a63d3e887c53dbe6711212729ee5f4fbe48acf3025f02';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
