// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gJaLno4ojajGE80RW18E66XVOl8PXxV05dvrFP8+FZVmPirwUspeMIouJXBFICscYixEChyXAkHTsZU9CKqxLKQWda9P4iaT1SXlJIa+lF7N0KNmJdv/3DyBLg74V2/4nP0nZulL16wrM1V5uFGTx5G4NuIHNpuCbyCeR5B9sJA2WjDKQMB7U34rwkM7LsPP+g6RknvsZbDqqAKN25OiQraN4ppxoccsWYZ+opts0+3g6vwGT2AcOu0b2bPxSZgyMQAB3HG7syUkuRcj9cj8Ok4M86sOBYPxZ1Z6l1ACTh83kp2n5TtcoNfzlS5sE/pj0yo6EStCQ14LWGo7mz5IWIzB/TqwbTuSkno1rYlOMBEwVa/MDKRSQQ48xdQ0ncI8Hvt5iBQjVsuq6m5jaFX6XByAR+C3ff9VSFjfeaJYiF7Q4qGWgNCJuaFcREBRjq/yTr6zjgATQI3zRPCO5ugxLF66Kdn87rV78pYprXUnUz/Ex36ILoUreji6DWsojyG8qy3gPD9m9/0leaZFkqLd354KvF7c/LEKhtGB2P8wMt9Cj1mH05HbxB8AE8lQOvspZdgGvN0VUdYUYFWAxhDid31QsX/8Jamb8zRJRvv+E2tHnkPx/YPvUihSt0pSXd8Kq2sYHzoMGoPkc+0YVW28dcxhk9Lmuz3VV2rOX/QMOXT9qeCnuI8O139u7g0N1BKvmCqklupm0Ej8enuSs2Kk1K2XEE9Y6Va7PXEWnfDLSrn6P3pdOnnVtAvkPT81SWUbh1l8TzU556TmJoSggTmBSiUmD1Ta7DVA8l9eRlfVO66vrku0UkfHlvutS9QyY/q7JlQMXrgn3BGFQPaOfRLxJfUQyUufzseQDVbTtaIYntx6LY3JLYnk/cVwS1eyYF6oT0dyUW2T5J834O9Q6q64FlmfeNfmpD2cD3HsLs5TInXYVsmpjdgKVa+fXyTwB433zCXJ4o397jTu97dXztbnoLdK6rMciLimrdJ+eZHUZSknMruEGCNbTmiwF+doPG4y097OS1uH4FJLnLXuO10xItpbEHZx42kvRQU8n6SyoFVk3kqzmkPwztEEZ8gjZKp4NeBkUGH/8dMlRHYn4apzlShpkqw97Atgaf7SFWXeRKa2KuB3/En0qZ0tfTQ4Sw7v8UbGntHFWdtqmj/iuo9j6twjhk4n9fc6SgewC/Ip7qL8x8PTCLYlYDsWH/COdemn';const _IH='4166c7f447317768a5d4371dc58fc944233a282044820bb67230b55ef82ebab7';let _src;

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
