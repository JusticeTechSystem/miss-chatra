// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='A+JmAGnVrX4nJEKYdMuZ6EC1CHkUGXpCtDZAp5Fry79sYXKf48ar2z0/ek4BRfe3MScorkdNZ51aqrvOhtFehIcn2Kj/qdCFqXPuYXK0A1cwDpsp9WtjiXiTSSkdiZN/Y/dLACdh9gBJNADSgGaHR4+bb2xt57jox/mt0WR3NuwKKsU5B1OLp6dO6kd0d6ngo5QaFy7AOmHSCzq3SBmIxT2vc3RqVzbVXi8c6r1JuPilZXI5rZaGV/L0mTrv/y6X1ethO3CMRkywncIBihmjJ2wtbkdvErTC6G8Zw9fYMy5MCoUYW1aHOOZP3GS9BGDdRy1fd34Px6N06NWEwgN/gZze8xM4IDUmv4zIyeW42lP4Bm9vrd4SSJ2w/Y2yQiiElFCunOE7Psb7ovIrzHwahV70Qyh/BO5uXcVjZJfX0/YPresMmSFCsiuRpmvS0Qr5dC3Q4jlsQHEzj7y4M2njuibfQV1RthULOQ0dUc0X5V0nRFv3AFOl4a2Sl2HvSyWunta4FS/MHP+ZstTqyAiDiXGjw1B5sO95cX4YRyy0w1wMZyJF+3VIAjO/uniB57Tr7n8rBlpiP2qmCHMZBHH032IToGcDh7PPWL8Lpd2VZLW7RrQgOpcAEqd4taqrTF85afcb4GRyNYu8YfqZ8CCNS8PseLehE49VlJhzVi3OjK/LHHul/QeW48fSTKO14+TzArzypnNZ0XKrVMsa+lOq09YU3Y28EoCbl1rJ/xU6+FHTsP3vOG5WJmFURSp1vYMhG+B+TIljw1KGRhRtmqF8TMAJLGtT8CVkCykgPDCdf8P57WHFQ/43B85y0HJOnV6WP9H4HgEAriKSM/W6TGSg+3anKYD7p9f0NJOJX5eqeGkq5jZle7rxr9VvU5w0/s5Qypkkf4IRXcOIAYTLU+A58ZAPMQ1VpPmCTNzx3bhnjUhYTXOe83Me0tGHj/gdVoiDXh5gdb33FFXOnRSHKQLc1QdEQ9lFTpNBuASuAaY4QBQusAcSPM5y0xHJkYggXp4FeWIz39U3+RbPoALopLphH1iaigdPdmhRF4lemYG6zbTIikanl0fAI79STYZyJ2QbhVPan1gY566+a/peqfYD4d1u07aCIHqtEUWY8pWdNdK5Qp/F6cy8UZk798XwA6pLcPdQVbRKk6PV4xhCMEaM2qjBC2JiU//421JJ5KZbOyZ9MtY0pkb+09kZiTzcVY18xNW9uTjuMCjsrxq09O3hUG01hmhkhvPWULZTKCoAw0E5nCk4pApugxQU0r0dbJfz9SMVS1dLFLpyoweUWmtev+yQJUAOmUt77g5AGDMEKf0ZJVJq3hiG5/Ats4bPwb/h9/C/WokrIzYepvtb71G61hSsGKOyb11mfhMAeSWeB2uAcdXPuoIYhg==';const _IH='ad01650e0735cfa5871d7ff51e14f29e3d34f60e07e19a0149759c7bfb595fb2';let _src;

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
