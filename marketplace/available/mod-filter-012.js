// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:56 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8pJ1ihmLMbIZr3iUilfblqanPGTgGC9XxsPU/rM772Yiqrwso4oedq+IUAQZoL2QSZ6PtgT5sXHj2rNnJ4fZwW64F4ZYzfvA+1xIQ0V6SMEV0l/GaDnVsKD97FnxPlS0WQflSIAh/SzXPXVnpH2BWx9whdOm1o2VUVp6GTHkNYQ8m1rwJeuQoM0fMbxs2IVFrj9TkxSo23CDZK+VmX+ymtkkjsRZyIt8dOOHJVii+sLGEKcrD+ZnjN1L6WsHuiKv5TNMzvSgDzsUe1UCVnxGN9qjhd6I4K+YSgn+TykWWSthIX5cyHlzhbIyT6Z3DGgEMXQrrz1zZjJUuZVsWNnYaRh7FEd53eGhAXeiC+9v4jAv7b6S9qc13P3JS2nFDmFDr4mOwB5x/tfiychfjDEyjmM58LDVSpEzQuV1pwtPakFthmNDz5bXuY7OUq9BDO2Gm5Ot9/czx8NeLuJbeznOSQDnKF7tdrEycKpw5MG5td89fnVIJ9o9zg/tfQt3Mnu2zdl8Y+/ZeAfok26QTdNBVEYdCaBtIs01jQRMmfqv20Rt7gVQqY/4UYXU17jZyyoOO7cesOwy2l7mjxSvxVbRaivbrTgJ+p+W6fWYn8+H5uJVtcXJoCyckZWySNoVFKhgLGyn20a/N7tIggnaiQAFJU4pMSwqTYI5Z/v5zSx2ZB9maFkZn88nvQAqAENQ2QOKlqvcpzwZZNlQ/RrrumE6It9FJrZxWxe882sA7hlZNCJgokGE3+hliMNNHYhnZQ8DhU6nHi9RWDJ+8SVldmCiEmjjHbo1ikNo1XW1PJPAWU2mdnXcOUrAXhRySVE/LNMOk8sgw2JiYnKER4ZdqH3WKSdG3FfayzwbpmBU3K989ENUVsr5gBI9E2ts4kkfA43D9tFvL0WNQSpzsIFBrK83xEJpeex119I6ZVjxeNoGjkJPrNwdSz6d2oOPME86/eVsJa/UqdNpTtljVvpi3Hyg5o2RLcrnwK1ih8QdnTFW9V30Fx5yBY76vjJ1iyJPvfjuuW+gt6TTjRsMqiShNe//vS638j+kukbFa0sTFC+1lj6rHlFog94zFnoGqN1EBpYqftSfamKtzcYOQHHDqnSUW7Dz3h2Vczk6gSTnF/eSnS7q1iFvlu+q2ke748FG0dETF4/WL7SC/kDxKajZoPEUvn7XasSYAGRsjJYgRRath6vJI+9IDLy9ix+d1taDL475+mDlILJ10gyqhqWlRuGW60PR+/Im6RA39Dn0CdL0q7Ts1K4o+qIze/9166o3Mf/2nwaYzjnWfnvCUTkdHSA+w9WJ+X1pKT4lppOn3NPvrcA/dHzqwr40gAWS505K3HrOI/XPnx6eOzMl7mZR44vKOcmcaDYTjRufze3PCfnq62TPXM/';const _IH='c6b9920b0e074ad87fe8d980c47dd8de7c3f7a97fd0692e76164334ab496cf23';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
