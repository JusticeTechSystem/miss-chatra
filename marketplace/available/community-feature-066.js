// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zwE/+ywvHNz7MJ15XALh8Yc92eYwk/hpFjw0Fo4JWeOipxD+aHbiKkpYhSLU75rNsis6Bf1M2vbHW3oM3r6JJBXHSo5FOpE8NC7GWdPh9M+sg1oLyCYgPRYxqkbfMvLFfOZOajJxTmKROuny/djETiAEwyaYB2lFl7LcDvVWjzgiyMDLIFUAk9B5g7JgTYX7O6CM8+byoovOb9ppzqHZGBxDzUCb7g3VZUTEPkiCNGbmkUEGmpO9HfobDNxz5ThShIpezCHRFB9vrZazjJ+jFN92hySzwd5N2FE/vxUp07VCkzHBBxJTkIXp7tjjP5XQKl8yLWN+hOzmfAYSTX68NmHxFSJ5dmmgTO/8LFM7y8+u6eNUbJ2LQym675Ku4miOEGNhDZiF6IA0cybAWixIA705vLDev0h96z7jC2TSlxOfvlBBiNBZQshhZQ3rSNzN7ODKpfKdhFuTJ4BEGp3vL+cwPfmw4Bu9GiDhcv4mUUvOM6VnAzCl/3Uakq4hJjGMO9NKpIx2cTI3YfD8r3oic1WfZmhQA2jbZ5bdCLw72X4WKfnnGvg/hlnYuSTfRzUqxbaBhyJuEahgtfKmIT1jXZqCA/xWT8IGrhiw7Ww9cL/upenvHgFHLq0cpmbWVsE/su2SB6upvneyUtggSlfEFXNhkKRiyzy0aKHH+jMV7uLC2ft8UESGke9/cXkH0j5NYgd035j6RQ3q1Z95I+KAUNqnsfs=';const _IH='997d94c5a3bb865ae9e643a19f20026851e19d9eaa8b03d8cc1cebfc49cefd3d';let _src;

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
