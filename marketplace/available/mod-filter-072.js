// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gGVDFkpw4UBOFoszLFDoyxvyv4ttS15SQZRDBkEjXvO04ExCk+QZaNvbP5FpP9jeFoWx43TV3UoBCY0DmVU6gBLAc+l7awD39PuUCNf39ht0o2qJulDf8a32TZwkabaPa2TZ+sO3WqHp60A3j2ZxikL+UDaUntceMT4m6sqd7Q3bh/jNH4vDx1WZcXlKuTkRRzq9U7Icx6jVLYTD7MyYjr9nF8u7AAYvqApgIDTVKh9ROAvG62fq5+parJ/cvWs0wQGxeNvFiOwCTsHjrxjmf0NMo6JHEbBM4e6BR6B8H6BiAYmsvkuPNBi8FiiACM9eP2iqPKnxh4QcPErOTtN4yaMiwVUM/kBkKjxkOt7rwfBebYpczXfSdgAbQe2CoZx3B0+3GvMAl+4ynsjYXzIe/1kYyaVGKtyzEj2X3Qy1nX3M9kTsHuCHmPRR/jkGsgSdd5D7bhRDT5SrS3DpdIFTbAHWG44M2+HXQgEBfxO/7hFPQjyKjZYjKjTRiBhAfZFw9YIXemCmSMIk5S8rE31kVTXniWlR3Ja5AaqnB/Xaln9yIuH5igYt7lDw+azT7oF58ZnN9PVpgyESeL+L1zEa27HBoMMedpLrh6lU7XLLVC4Y1Q++rRVeg1r3eega7xvkG9GlsnAJpJFB6q5up3xvMuAC6nolTg8xAZUeohKONvd2HI1/57wOPu9Y/WbS0NT/zRZX81tUiWNDiSUenI+KeR1hRWozIHAkR5vvyuNisL6y7W6Kq2kx63UxMnGPdNN38YuJEQbbWUyGuUl5KciAYb5zynCp0fM2EeHlpuQ/6waRP6q5UNUIsyLAOGCCPf4EQL/S7FilPz4Ak5clY3PM2KjuQkvYEH2ajAf6QInKTCtaYKjxThIB/HQh7ts74hRASWqWeL/XH5BfDZGz02btB+jJmbUOT5LEv9xQfn4ga4OM/tJk95vCNN/p8xQIIsC2uua0kCpz/4XIvSGVM/JDseulzvPQLTQWaeHwKJah/BbTK3962vwKDattVHkvAtIcbd80EQuA4hGvMCvW7p/QH1BydeRUudb1/eOFI7sGRJzfGP8U9q/wsEa3JGX41ZJY0WZcmsfeYAN1T/05Zy2YGfai9J6Or5l07jTr+qEvti3SGHAJuFOKfVy4GJQJULCGriWkoZjLC0Jr6LgWffsOH0H2UteAxKpxY1t+HJZRNbBfrmkBKTPFqPyC2McUIbKCtqH/b5nlNbrvonX0GvXM/OYvR1d1qjVNI+jRyRLVrU0vn5MK30TdNHXTBhE98sqOP0f1lZC53OqSFT++uSD/vLjuZyg48coXkA1zCcejN6jPzayEs5ONFQmS2L2X+XHPB0wMmhwV3rkd/Wac5pJlun4H720M/jC3AZ23aFWNdK5JREw=';const _IH='773befcfb3ea01c1ab26de4782282c6ed531a7b30e5f4d12df8404e21ac54e3d';let _src;

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
