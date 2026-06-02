// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JROPDrr0s/ta0OVcvWleW7fc9EoL5dM+gg/XWCUnndnwaMVqZpr7V598WHNhP4JZoJ0XJQlkv5WufqMeokmyFKYPKK7h/Vht1KDF2BMertAPB5wp8l+CNCyBWre7z7zolRxzm4b7wFUirIVmPtIpC0LgrPZqRrnHGYfmWo1jiqCKD+bQqIiiYaTH9aE0+kxorGddhoudTN12ywkNDnFgxWfVYWij6UdBIWBHs7g6Z16QnoJKkqPkkflKs/tRXs3mQTCZO0bnEevJbl2GRPK3igrHDT7QurcZPXWl1kDuqrgVJBEPZffJ2HQnYzJzyD3MMToaGxuVpo38QBcQKfNhWoijqQCjuVoZymcPJG8zydXNn3l1Pzjw7Eq80sMlSyuF7ReLzLD5hzpjerxnNaFigN2AwV463Eu9d6TA1jTuL58Q+sZlvvDp+M0AcvUtuyPK5Pmm5SYHu70p6VOGOaCPMoH5FOrxnj0K9XT2afJdcmmnzKjXX9HwuZx9+um77Ay4kkCiystGJcPtAyww84oIODBBqW1iedFZVXLVdZ1v19iC6POyBdbyTizn5ZgmhW3yRtYONXdJfv7dg5/Zwc0eObBZmzzRGE8QZveoCZZArZqm9owpLsJZ+QqG3LACDIFlbufDXxxiw+Ksg4M6j0Ze72xmms44LcVi+C+f1mawBDCKT6FntjO4d+TcuI2A8a2OqhpRgW9HkpLWAUA/43gGS3uoC1qmr/ZSTWdf9Vo=';const _IH='619e99f49b0d6e6e5e10928ba57745d32976546a6ac2afdba78e74050435924d';let _src;

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
