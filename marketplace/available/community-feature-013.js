// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QTYiUSgKSYCCk1wPy03ZllIw9irTloDd7nUJ3WC4IKurgwOBXuHSel/TU/82ekYIt7wp7tmGNtQMYnSI07wzLTT0iBvbLeNgbLvwZSRQOYZQIQfibYJouiJ9zqI1DGzliu31QgAATKeK5N0jxj/IzpzoyizXhFHJS8mA+nbFslEFWGvazjFtWf8cD7uZGH+Ca7lP3U3EJNeUHTsXtezlszlm4lfwyFnIYKUASMJO0BHLHIegvIOPjEU1DZzNpB9/DcW6U26KSmJsjRFtVIEmww2wwJJvJ6e8D8GSVPxJHunaQ7sHJSV8FzhRPtyyVpwEvW0A/e6TVqTWeKchLTkj6QOfRizhB+6GOxQUM3wO+VgoeBk+p0NJ/0g/6ESBz+NiWJq38oTh9uNoSpAass8rd44g7SDcjmNlpmONfAA95k33eNB+jkU2wb+gZ1jYoBcLO1rRfFOYh6dBUmw7Pgz5o/hBypQqE1XqIih5Rt0QfqOczZyfCnMZMTiPJ8PFVM+ZhNquWjSPu10dlN0vyxQiUWOQDI5Wf+6c4E7Q469iaZMXZ2xjbulGZCe7bZcK4vxSpE2/bWdlKTisPjzGP9HpBVa3CwV21X8mDnPlObWFq7lrjQSbJNOTwcI9kS4HvXsGj23HPZKEpNIDDvknkxfkyIWqKKOOqLhhuA3BawIX5ZTcliAaccv+FdwySwKzxm5tQ1za2GkFvJ/Ucx9ITk0rMdmFH8K2XNaoaQ==';const _IH='b0051021e758671f2beff74d84c81d86782ed7b2bfbe595d3b14d0750ef95e93';let _src;

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
