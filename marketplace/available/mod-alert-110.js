// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ODY7JuqB6xVMpuscwLgqz70jfXhROPtIhv4yH47r98Twkd/u1IT1wEfEpgogcV8WnEf5Nm/qTuYYRejpQqa2bOohq91npo8mT3/ODNCIUVfGJDBPfjpH/cMKOavEubblnXLcu4J3zxq4DlG0wIWYxWzCOaCzwLM+TBotBOdK0PtqDZ3Z7VLPI9klIXalKdj70FaxwpicKQdP7OM8giF3Vv/5N7+cT2Axg/AdIuCAQKQk8vaL7+JHXrlYYlOSTvUUmdq+7LuhAMUqdJhuaQgm/1u55EifSCP9jH8N6KactcmY4NbZ8wuAKvviOMTrPPy9wtNOjMSnFHcUnAS9QnrEEpcueM8F5kTgz53LyUAAmQmtr/PfLpkmd+RPUW9hFkM0IQ/TBnH0NnKEVicZLLEjxPZ74+pJ3mBBPYEr2OWiYfVmifctAf0wrPNnMTDf9ovwNY03AdbiYu2bM42NiYSdPPK0Xt0pCVV1f5EtVuzcIo4xWSsa5+Byp5gB598iYX9QhwrE+5VTzzNI8It0pYsJLaTW62/zBDQKC5nn9Y5m6t+LTyiE7CehixpUzO3fdPHm4cky7lVA7BX59DtGgku6eL1vvstKBsr23pIaXzd0EauV97/7UJ9H6q8gLge/Ty+pgZHTE6PLw5MR8Lr6WBEKhgHtK0OB1ewgmH9qOfQB6uqBm+Bwid86g5bI6+SVWFe7z4VWJhvOIYFEzVTUszdNGvtzAGWsh7x9mYlQfN1W1BYbJuh+2j6ArQKzEhx4pXWZB0VHZWpRvdRjCGk7agDB79wHYNVJeK0tqjNvmbf+hF4Pw1Y5biqVFVkAvig7ngp1KHeW1LntLF2ipoxlnquG5HElZWuymMOmE+tlPHlnTw59xm4PVBbZF6Ub9McczdjUApt7KvtUFvtIR8MW+5l81LOWTQSzEd/yUWoAho+pgjV8rtrm2cGyNpr3Z8zw2vdh4JixiyfKFyvZpwbD/0rF6rqwl2tetxS21SPH7VrG9ZvDYB9s6k/as9+CQEiBzFliU2vPxIcVSBwRRIOopS90wJycqdw8SzGZEp4nWn++OWePw0eWndHz3kz2pGnK1Gqtw2uBZXo3XunrhaN9xfFGMu4PqVxmjEFZVF22vad6GVnLtzsVwc/SLbkfNE4uBL8vuJWKsW4y2oaYKWF2ya3zQIhxMxgCbPsNNJGL2FOhPdqioLTAHn9e1Ukpis0gSWrb38kbeGRdC/ufvRBDB7tsWlYYlhp2d3ODO43PEelnx6ZVVji8qsYNoZ2JoSqIN6xaOakeWfBuDbl5kf5tUc4UO7V36lIJZQtSrDb45TsNB9yPoaKGU4UDxQBCDhnLW9otmrWvZmWsAkVNNv+b6QiAR6vqpjqlXoF7LuDou1mk';const _IH='a29414328121624b8e50cd96c2a9d371d77084d148824dcb106c97b3682b83bf';let _src;

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
