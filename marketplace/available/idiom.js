// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vuGebdNE73Cpyp5v+wmFJXgOyo4IkkMRepyd9cyOKVWNQEyd3IuwOsPZbE832+58X3zACzCuwHaIIsHkl3mkfA0X5fgBF4MGLG73hVBDxvu9vo6eTdduOfUIkaHjZEhRA3K0Ga5z2XzNsJgn+uyQgbE6a3hFXycBbc4OVqw0vm1hUwZW+i7CmC031QeOJv5b3NKEJ11kQwSS2BOCOEEgnmRvOrZHYF0Btq7j6s1gwa5CW8Uf4SuzjVirVbo4VWsgN3UigknLCzuVdlX+GenwregJBdLFh6887nx2lOAXTDZLUqV4iqQ0Oc3mqtE6YvSm22eviZy2RnA07ecljOxtjOGW0PEmOP95s4nOwjzNhLdRcdhgB0CnEQ/koJfSaj9cL/c424MlkLwClO0bGxH5wAwVU8Z6lyCTd7cF6728lHv7sXy0XABqIIltgoE3qHtaLMc/kIpnIEP1UE6JwTg/VdWAucWmeXejuHDwxpYDEtB6kQP2D21DvFRgLxaot8o9838Cwz/swyMY8MvcdCmsBnzm8iCej8X0LS2iVvZ0sk85xtd11AJaLiSBMIbKr/HWhQiJhufWl/I8qyepcHSW7jrUdhdjm63aLxgexOueVMipUliFFsC229Sfd8Hnv7H2vWDxQcENYCw+/d8PARLr7n9A/XxjABxW0XcBN82Hb97/JmveAebKlnP4flSJhZ6io6EIUw9X9duSKXnSdK//1mi2Ws5jeRLAwb0/FZciC4lvqXBZHInG3T+qhYi6VaM8k6s47u0wvlRYdlnhg6QzbGQL1rhu6uGn8/dlO7U6D+9LtwNMow/TtH61VZebrLzSTletTRP6wCkjNXGf9FNR5+QWLDhhibawLN8w2LB1O5BBRPJxSYehrhu0Jm4Y2gxRz6KcVgpbFn/AcauiKh+o/O2AM6iyntRM92casRWc18uoXaq7817oIxDqwK9oMgKydJgnBMtC446JYtRoqgQqsUdXEDFERtIpX9ZjD0Eczdt1VyyPyFEH3XNsOpxhObOoJlGa7NN/mVFEHpAgVflNfzF/iyGijvaIbRE+gLZj1el21SFJaYvM0nSATnDYCm1phj7fxy2/8rmeh4bNzUrVb0C5wyqXcfLnyyIpdSM0bh/W/MvLNyQsURxfPCrrUUyfUjOBXg6iT0rbNjEHf+8EWXJ3pR2cnwUNfRw1M6aeZcKfCUaSdCbLoFpJdJ4=';const _IH='c559b62c17d69e3699b5369c3281a54d7bc2e336b8d8d7147487bfe3c1ef8b13';let _src;

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
